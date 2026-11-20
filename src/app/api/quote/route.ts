import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { BUSINESS_INFO } from "@/data/business";
import { EQUIPMENT_CATALOG } from "@/data/equipment";

export const runtime = "nodejs";

/** Verified Resend sending domain. Override with RESEND_FROM. */
const FROM = "Pensacola Equipment Rentals <quotes@send.compassmarketing.ai>";
/** Override with QUOTE_RECIPIENT (comma-separated for multiple). */
const TO = [BUSINESS_INFO.email, "thomas@compassmarketing.ai"];

const ALLOWED_EQUIPMENT = new Set([
  ...EQUIPMENT_CATALOG.map((item) => item.name),
  "Land Clearing Service",
  "Multiple Equipment Package",
]);
const ALLOWED_DURATIONS = new Set(["Daily", "Weekly", "Monthly", "Undecided"]);
const ALLOWED_CONTACT = new Set(["Phone", "SMS", "Email"]);

const FALLBACK_ERROR = `We couldn't send your request. Please try again or call ${BUSINESS_INFO.phone}.`;

/* ---------- Simple in-memory rate limit (per serverless instance) ---------- */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  // Keep the map from growing unbounded on a long-lived instance.
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return false;
}

/* ---------- Helpers ---------- */
function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function field(body: Record<string, unknown>, name: string, maxLen = 200): string {
  const value = body[name];
  return typeof value === "string" ? value.trim().slice(0, maxLen) : "";
}

function row(label: string, value: string): string {
  if (!value) return "";
  return `<tr>
    <td style="padding:10px 16px;border-bottom:1px solid #e6e9ef;font-weight:600;color:#1F2D42;white-space:nowrap;vertical-align:top;">${esc(label)}</td>
    <td style="padding:10px 16px;border-bottom:1px solid #e6e9ef;color:#374151;">${esc(value).replace(/\n/g, "<br/>")}</td>
  </tr>`;
}

/**
 * Reads an env var defensively: trims whitespace and strips wrapping quotes.
 * Pasting a quoted value into the Vercel dashboard keeps the quotes as part
 * of the value, which silently breaks the from address / API key.
 */
function readEnv(name: string): string {
  const raw = process.env[name];
  if (typeof raw !== "string") return "";
  return raw.trim().replace(/^["']|["']$/g, "").trim();
}

/** Describes an env var for logs without ever revealing a secret value. */
function describeSecret(name: string): string {
  const raw = process.env[name];
  if (typeof raw !== "string") return `${name}=absent`;
  const clean = readEnv(name);
  if (!clean) return `${name}=empty(rawLength=${raw.length})`;
  return `${name}=set(length=${clean.length},startsWith="${clean.slice(0, 3)}")`;
}

function formatDate(iso: string): string {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(iso)) return iso;
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

const CONTACT_LABELS: Record<string, string> = { Phone: "Phone call", SMS: "Text message", Email: "Email" };

export async function POST(request: NextRequest) {
  const apiKey = readEnv("RESEND_API_KEY");
  if (!apiKey) {
    console.error(
      "[quote] RESEND_API_KEY is not usable. " +
        [
          describeSecret("RESEND_API_KEY"),
          `RESEND_FROM=${JSON.stringify(readEnv("RESEND_FROM")) || "absent"}`,
          `QUOTE_RECIPIENT=${JSON.stringify(readEnv("QUOTE_RECIPIENT")) || "absent"}`,
        ].join(" ")
    );
    return NextResponse.json(
      { error: `Our quote form is temporarily unavailable. Please call or text ${BUSINESS_INFO.phone}.` },
      { status: 500 }
    );
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please wait a few minutes and try again." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    const parsed = await request.json();
    if (!parsed || typeof parsed !== "object") throw new Error("not an object");
    body = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid submission." }, { status: 400 });
  }

  // Honeypot: real users never fill this. Pretend success for bots.
  if (field(body, "company")) {
    return NextResponse.json({ ok: true });
  }

  const name = field(body, "name", 120);
  const phone = field(body, "phone", 30);
  const email = field(body, "email", 200);
  const equipmentRaw = field(body, "equipment", 200);
  const equipment = ALLOWED_EQUIPMENT.has(equipmentRaw) ? equipmentRaw : "Not specified";
  const startDate = field(body, "startDate", 10);
  const durationRaw = field(body, "duration", 20);
  const duration = ALLOWED_DURATIONS.has(durationRaw) ? durationRaw : "Undecided";
  const contactRaw = field(body, "preferredContact", 20);
  const preferredContact = ALLOWED_CONTACT.has(contactRaw) ? contactRaw : "Phone";
  const delivery = field(body, "deliveryZipOrAddress", 300);
  const details = field(body, "projectDetails", 3000);

  if (!name || !delivery) {
    return NextResponse.json({ error: "Please fill in your name and delivery address." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  const phoneDigits = phone.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");
  if (phoneDigits.length !== 10) {
    return NextResponse.json({ error: "Please enter a valid 10-digit phone number." }, { status: 400 });
  }
  const phoneFormatted = `${phoneDigits.slice(0, 3)}-${phoneDigits.slice(3, 6)}-${phoneDigits.slice(6)}`;
  const durationLabel = duration === "Undecided" ? "Not sure / flexible" : `${duration} rental`;

  /* ---------- Compose email ---------- */
  const html = `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;">
    <div style="max-width:640px;margin:0 auto;padding:24px 16px;">
      <div style="background:#1F2D42;border-radius:12px 12px 0 0;padding:24px 28px;border-bottom:4px solid #D74E31;">
        <p style="margin:0;color:#F5B93F;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">New Quote Request</p>
        <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;">${esc(equipment)}</h1>
        <p style="margin:6px 0 0;color:#cbd5e1;font-size:14px;">from ${esc(name)}</p>
      </div>
      <div style="background:#ffffff;border-radius:0 0 12px 12px;padding:8px 12px 20px;">
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          ${row("Name", name)}
          ${row("Phone", phoneFormatted)}
          ${row("Email", email)}
          ${row("Prefers", CONTACT_LABELS[preferredContact])}
          ${row("Equipment / service", equipment)}
          ${row("Start date", startDate ? formatDate(startDate) : "Not specified")}
          ${row("Duration", durationLabel)}
          ${row("Delivery address / ZIP", delivery)}
          ${row("Project details", details)}
        </table>
        <div style="margin:20px 16px 0;">
          <a href="tel:${phoneDigits}" style="display:inline-block;background:#D74E31;color:#ffffff;text-decoration:none;font-weight:700;font-size:14px;padding:12px 20px;border-radius:999px;">Call ${esc(phoneFormatted)}</a>
        </div>
        <p style="margin:20px 16px 0;font-size:12px;color:#8a94a6;">
          Submitted via the Pensacola Equipment Rentals website · Reply directly to this email to reach the customer.
        </p>
      </div>
    </div>
  </body>
</html>`;

  const text = [
    `New quote request: ${equipment}`,
    "",
    `Name: ${name}`,
    `Phone: ${phoneFormatted}`,
    `Email: ${email}`,
    `Prefers: ${CONTACT_LABELS[preferredContact]}`,
    `Start date: ${startDate ? formatDate(startDate) : "Not specified"}`,
    `Duration: ${durationLabel}`,
    `Delivery address / ZIP: ${delivery}`,
    details ? `\nProject details:\n${details}` : "",
  ].join("\n");

  const recipientEnv = readEnv("QUOTE_RECIPIENT");
  const recipients = recipientEnv
    ? recipientEnv.split(",").map((a) => a.trim()).filter(Boolean)
    : TO;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: readEnv("RESEND_FROM") || FROM,
      to: recipients,
      replyTo: email,
      subject: `New Quote Request — ${equipment} — ${name}`,
      html,
      text,
    });

    if (error) {
      console.error("[quote] Resend send failed:", error);
      return NextResponse.json({ error: FALLBACK_ERROR }, { status: 502 });
    }
  } catch (err) {
    console.error("[quote] Resend threw:", err);
    return NextResponse.json({ error: FALLBACK_ERROR }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
