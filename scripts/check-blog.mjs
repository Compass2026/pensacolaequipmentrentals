#!/usr/bin/env node
/* Checks every article in data/blog-posts.json the way the Compass CRM's
   blog publisher (blog-publisher verifyLiveArticle) checks a live page:
   one H1 equal to the article's h1, a canonical equal to its /{slug}/ URL,
   BlogPosting JSON-LD, no noindex, the release marker on Compass releases,
   the TL;DR once and above the hero, the hero <img> at its committed path
   with its alt text, every body line and every body link present.

   node scripts/check-blog.mjs                         # the prerendered build (.next)
   node scripts/check-blog.mjs --base http://localhost:3000   # a running server */
import { readFileSync, existsSync } from "node:fs";

const SITE = "https://www.bnbcoastalcuts.com";
const args = process.argv.slice(2);
const base = args.includes("--base") ? args[args.indexOf("--base") + 1].replace(/\/$/, "") : null;

const contract = JSON.parse(readFileSync("compass-blog.json", "utf8"));
const problems = [];
if (contract.version !== 1 || contract.adapter !== "json_blog" || contract.keyword_provenance !== true
    || contract.markdown !== true || contract.seo_fields !== true || contract.tldr !== true || contract.hero_image !== true
    || contract.hero_image_dir !== "public/blog/images" || contract.hero_image_url_prefix !== "/blog/images/") {
  problems.push("compass-blog.json does not advertise the full json_blog contract");
}

const posts = JSON.parse(readFileSync("data/blog-posts.json", "utf8"));
const plain = (s) => s.replace(/<(script|style|noscript)\b[^>]*>[\s\S]*?<\/\1>/gi, " ").replace(/<\/(?:p|h[1-6]|li|div|article)>/gi, " ")
  .replace(/<[^>]*>/g, "").replace(/&(?:amp|#38);/g, "&").replace(/&(?:quot|#34);/g, '"').replace(/&(?:apos|#39|#x27);/g, "'")
  .replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
const attr = (tag, name) => new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, "i").exec(tag);

async function load(slug) {
  if (base) {
    const res = await fetch(`${base}/${slug}/`, { redirect: "manual" });
    return { status: res.status, html: await res.text() };
  }
  const file = `.next/server/app/${slug}.html`;
  return existsSync(file) ? { status: 200, html: readFileSync(file, "utf8") } : { status: 404, html: "" };
}

for (const post of posts) {
  const url = `${SITE}/${post.slug}/`;
  const fail = (m) => problems.push(`${post.slug}: ${m}`);
  const { status, html } = await load(post.slug);
  if (status !== 200) { fail(`HTTP ${status}`); continue; }
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  if (h1s.length !== 1) fail(`${h1s.length} H1 elements`);
  else if (plain(h1s[0][1]) !== post.h1) fail(`H1 is "${plain(h1s[0][1])}"`);
  const canonical = /<link[^>]+rel="canonical"[^>]*>/i.exec(html)?.[0];
  if (!canonical || attr(canonical, "href")?.[2] !== url) fail(`canonical is ${canonical ? attr(canonical, "href")?.[2] : "missing"}`);
  if (/<meta[^>]+(?:name|http-equiv)=["'](?:robots|x-robots-tag)["'][^>]+noindex/i.test(html)) fail("noindex");
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)].map((m) => JSON.parse(m[1]));
  const article = ld.find((d) => d["@type"] === "BlogPosting");
  if (!article) fail("no BlogPosting JSON-LD");
  else if (article.url !== url || article.headline !== post.h1 || article.datePublished !== post.datePublished) fail("BlogPosting JSON-LD does not match the article");
  if (post.compass && !html.includes(`data-compass-release="${post.compass.release_hash}"`)) fail("release marker missing");
  const text = plain(html);
  const prose = post.bodyMarkdown.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*_`#]/g, "");
  const lines = prose.split(/\n+/).map((s) => s.replace(/^\s*(?:-|\d+\.)\s+/, "").trim()).filter(Boolean);
  const missing = lines.filter((s) => !text.includes(plain(s)));
  if (missing.length) fail(`${missing.length} body line(s) not on the page, e.g. "${missing[0].slice(0, 60)}"`);
  for (const [, href] of post.bodyMarkdown.matchAll(/\[[^\]]+\]\(([^)\s]+)\)/g)) {
    if (!html.includes(`href="${href.replaceAll("&", "&amp;")}"`)) fail(`link ${href} not rendered`);
  }
  if (post.tldr) {
    const summary = plain(post.tldr);
    const at = text.indexOf(summary);
    if (at < 0 || text.indexOf(summary, at + 1) >= 0) fail("TL;DR not shown exactly once");
    else if (!/TL;DR/i.test(text.slice(Math.max(0, at - 24), at))) fail("TL;DR label missing");
    else if (lines.length && at > text.indexOf(plain(lines[0]))) fail("TL;DR is below the article");
  }
  if (post.heroImage) {
    const img = [...html.matchAll(/<img\b[^>]*>/gi)].find(([tag]) => attr(tag, "src")?.[2]?.replace(/^https?:\/\/[^/]+/, "") === post.heroImage.src);
    if (!img) fail(`hero <img src="${post.heroImage.src}"> missing`);
    else {
      if (plain(attr(img[0], "alt")?.[2] ?? "") !== plain(post.heroImage.alt)) fail("hero alt text differs");
      if (post.tldr && html.search(/TL;DR/i) > img.index) fail("hero renders above the TL;DR");
    }
    if (!existsSync(`public${post.heroImage.src}`)) fail(`public${post.heroImage.src} missing`);
  }
}

if (problems.length) {
  console.error(problems.map((p) => `✗ ${p}`).join("\n"));
  process.exit(1);
}
console.log(`✓ ${posts.length} articles pass the Compass json_blog checks${base ? ` on ${base}` : " (prerendered build)"}`);
