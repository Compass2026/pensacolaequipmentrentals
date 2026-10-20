"use client";

import { useState } from "react";
import { EQUIPMENT_CATALOG } from "@/data/equipment";
import { Send, CheckCircle2, PhoneCall, Loader2, AlertCircle } from "lucide-react";
import { BUSINESS_INFO } from "@/data/business";

interface QuoteFormProps {
  preselectedEquipment?: string;
  onSuccess?: () => void;
  /** Stack fields for narrow containers such as sidebars. */
  compact?: boolean;
}

export function QuoteForm({ preselectedEquipment, onSuccess, compact = false }: QuoteFormProps) {
  const twoCol = compact ? "grid grid-cols-1 gap-5" : "grid grid-cols-1 gap-5 sm:grid-cols-2";
  const threeCol = compact ? "grid grid-cols-2 gap-5 [&>*:first-child]:col-span-2" : "grid grid-cols-1 gap-5 sm:grid-cols-3";
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  // Honeypot field: hidden from people, often filled in by bots.
  const [company, setCompany] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    equipment: preselectedEquipment || EQUIPMENT_CATALOG[0].name,
    startDate: "",
    duration: "Daily",
    deliveryZipOrAddress: "",
    preferredContact: "Phone",
    projectDetails: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, company }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || `We couldn't send your request. Please call or text ${BUSINESS_INFO.phone}.`);
      }
      setSubmitted(true);
      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 4000);
      }
    } catch (err) {
      setError(
        err instanceof Error && err.message !== "Failed to fetch"
          ? err.message
          : `We couldn't send your request. Please call or text ${BUSINESS_INFO.phone}.`
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-8 text-center space-y-4">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-brand-black">
          Quote Request Received!
        </h3>
        <p className="text-gray-600 text-sm max-w-md mx-auto">
          Thank you, <span className="text-brand-black font-bold">{formData.name}</span>. Our father-and-son team will review equipment availability for <span className="text-brand-red font-bold">{formData.equipment}</span> and contact you shortly.
        </p>
        <div className="pt-2">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="btn-primary"
          >
            <PhoneCall className="h-4 w-4" />
            <span>Need Immediate Confirmation? Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative space-y-5">
      <div className={twoCol}>
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="field-label">
            Your Full Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
            className="field"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="field-label">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="850-555-0199"
            className="field"
          />
        </div>
      </div>

      <div className={twoCol}>
        {/* Email Address */}
        <div>
          <label htmlFor="email" className="field-label">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@example.com"
            className="field"
          />
        </div>

        {/* Equipment Requested */}
        <div>
          <label htmlFor="equipment" className="field-label">
            Requested Equipment *
          </label>
          <select
            id="equipment"
            value={formData.equipment}
            onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
            className="field"
          >
            {EQUIPMENT_CATALOG.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
            <option value="Land Clearing Service">
              Hire Us For Full Land Clearing Services
            </option>
            <option value="Multiple Equipment Package">
              Multiple Equipment Rental Package
            </option>
          </select>
        </div>
      </div>

      <div className={threeCol}>
        {/* Start Date */}
        <div>
          <label htmlFor="startDate" className="field-label">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            value={formData.startDate}
            onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            className="field"
          />
        </div>

        {/* Duration */}
        <div>
          <label htmlFor="duration" className="field-label">
            Duration
          </label>
          <select
            id="duration"
            value={formData.duration}
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
            className="field"
          >
            <option value="Daily">Daily Rental</option>
            <option value="Weekly">Weekly Rental</option>
            <option value="Monthly">Monthly Rental</option>
            <option value="Undecided">Not Sure / Flexible</option>
          </select>
        </div>

        {/* Preferred Contact Method */}
        <div>
          <label htmlFor="preferredContact" className="field-label">
            Preferred Contact
          </label>
          <select
            id="preferredContact"
            value={formData.preferredContact}
            onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
            className="field"
          >
            <option value="Phone">Phone Call</option>
            <option value="SMS">Text Message (SMS)</option>
            <option value="Email">Email</option>
          </select>
        </div>
      </div>

      {/* Delivery Address or ZIP */}
      <div>
        <label htmlFor="deliveryAddress" className="field-label">
          Delivery Address or ZIP Code *
        </label>
        <input
          type="text"
          id="deliveryAddress"
          required
          value={formData.deliveryZipOrAddress}
          onChange={(e) => setFormData({ ...formData, deliveryZipOrAddress: e.target.value })}
          placeholder="e.g. 7013 Chapel St, Pensacola FL 32504"
          className="field"
        />
      </div>

      {/* Project Notes */}
      <div>
        <label htmlFor="projectDetails" className="field-label">
          Project Details / Attachments Needed
        </label>
        <textarea
          id="projectDetails"
          rows={3}
          value={formData.projectDetails}
          onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
          placeholder="Describe your job site, work type, or attachment needs (e.g. grapple bucket, tooth bucket, brush clearing)..."
          className="field"
        />
      </div>

      {/* Submit Button */}
      {/* Honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      {error && (
        <div role="alert" className="flex items-start gap-3 rounded-xl border border-brand-red/30 bg-brand-red/5 p-4 text-sm text-brand-red-dark">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="btn-primary group w-full !py-4 text-base disabled:cursor-wait disabled:opacity-80 disabled:hover:translate-y-0"
      >
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Sending…</span>
          </>
        ) : (
          <>
            <span>Check Availability &amp; Request Quote</span>
            <Send className="h-4 w-4 transition group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-gray-400">
        By submitting, you agree to receive follow-up contact regarding your equipment request. We respect your privacy.
      </p>
    </form>
  );
}
