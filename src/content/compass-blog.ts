/* Compass json_blog contract (compass-blog.json at the repo root).

   data/blog-posts.json is an array of articles. Two kinds live in it:

   - Compass releases, appended by the Compass CRM blog publisher
     (supabase/functions/content-drafter/publication.ts): they carry
     `compass` provenance {draft_id, release_hash, keyword_id, version}, and
     may carry `tldr` and `heroImage` (the image is committed in the same
     commit at public/blog/images/<slug>-<hash12>.<ext>).
   - The posts migrated from the WordPress site (Nov 2026): the same shape,
     with `legacy` instead of `compass`.

   Every post is served at the root, /{slug}/ (blog_route "/{slug}/"), which is
   where WordPress served them. A malformed entry fails the build instead of
   shipping a partial article (the CRM then reports the deployment as not
   READY and never marks the article published). */

import fs from "node:fs";
import path from "node:path";
import postsData from "../../data/blog-posts.json";

export const SITE_URL = "https://www.bnbcoastalcuts.com";
export const HERO_IMAGE_DIR = "public/blog/images";
export const HERO_IMAGE_URL_PREFIX = "/blog/images/";

export interface HeroImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** The CRM's internal classification; never rendered. */
  illustrative?: boolean;
}

export interface CompassProvenance {
  draft_id: string;
  release_hash: string;
  keyword_id: string;
  version: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  h1: string;
  tldr?: string;
  datePublished: string;
  dateModified: string;
  bodyMarkdown: string;
  cta?: { text: string; url: string | null };
  heroImage?: HeroImage;
  compass?: CompassProvenance;
  legacy?: { source: "wordpress"; wp_id: number; url: string };
}

/* Top-level paths a post slug may never take: the site's own routes, the
   redirected WordPress paths, and Next's metadata files. */
export const RESERVED_SLUGS = new Set([
  "about", "api", "blog", "contact", "equipment", "land-clearing", "privacy-policy",
  "request-a-quote", "resources", "reviews", "service-areas", "images", "brand", "fonts",
  "locations", "sample-page", "feed", "comments", "category", "author", "tag", "page",
  "wp-admin", "wp-content", "wp-includes", "wp-json", "wp-login", "sitemap", "robots", "manifest",
]);

const SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const RELEASE_HASH = /^sha256:[a-f0-9]{64}$/;
const HERO_FILE = /^\/blog\/images\/[a-z0-9]+(?:-[a-z0-9]+)*-[0-9a-f]{12}\.(png|jpe?g|webp)$/;

function fail(slug: unknown, message: string): never {
  throw new Error(`data/blog-posts.json${typeof slug === "string" ? ` (${slug})` : ""}: ${message}`);
}

function isDate(value: unknown): value is string {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)
    && new Date(`${value}T12:00:00Z`).toISOString().slice(0, 10) === value;
}

function nonEmpty(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

/** Validate every entry; throws on the first malformed one. Newest first. */
export function loadPosts(input: unknown, root = process.cwd()): BlogPost[] {
  if (!Array.isArray(input)) throw new Error("data/blog-posts.json must be an array");
  const seen = new Set<string>();
  const posts = input.map((raw): BlogPost => {
    const v = raw as Record<string, unknown> & BlogPost;
    if (!v || typeof v !== "object") fail(undefined, "entry is not an object");
    if (typeof v.slug !== "string" || !SLUG.test(v.slug)) fail(v.slug, "invalid slug");
    if (RESERVED_SLUGS.has(v.slug)) fail(v.slug, "slug collides with a site route");
    if (seen.has(v.slug)) fail(v.slug, "duplicate slug");
    seen.add(v.slug);
    for (const field of ["title", "description", "metaTitle", "h1", "bodyMarkdown"] as const) {
      if (!nonEmpty(v[field])) fail(v.slug, `missing ${field}`);
    }
    if (!isDate(v.datePublished) || !isDate(v.dateModified)) fail(v.slug, "invalid date");
    if (v.cta !== undefined && (!v.cta || !nonEmpty(v.cta.text)
        || (v.cta.url !== null && !(typeof v.cta.url === "string" && /^https:\/\/[^\s<>]+$/.test(v.cta.url))))) {
      fail(v.slug, "invalid cta");
    }
    if (v.tldr !== undefined && (!nonEmpty(v.tldr) || /[\n<>{}]/.test(v.tldr))) fail(v.slug, "invalid tldr");
    if (v.heroImage !== undefined) {
      const h = v.heroImage;
      if (!h || typeof h.src !== "string" || !HERO_FILE.test(h.src)) fail(v.slug, "hero image must be a committed /blog/images/ file");
      if (!nonEmpty(h.alt)) fail(v.slug, "hero image needs alt text");
      if (!Number.isInteger(h.width) || !Number.isInteger(h.height) || h.width < 1 || h.height < 1) fail(v.slug, "hero image needs dimensions");
      const file = path.join(root, HERO_IMAGE_DIR, h.src.slice(HERO_IMAGE_URL_PREFIX.length));
      if (!fs.existsSync(file)) fail(v.slug, `hero image file is not in the repository (${HERO_IMAGE_DIR}/${path.basename(file)})`);
    }
    if (v.compass !== undefined) {
      const c = v.compass;
      if (!c || !UUID.test(c.draft_id ?? "") || !UUID.test(c.keyword_id ?? "") || !RELEASE_HASH.test(c.release_hash ?? "")
          || !Number.isInteger(c.version) || c.version < 1) fail(v.slug, "missing release provenance");
    } else if (!v.legacy || v.legacy.source !== "wordpress") {
      fail(v.slug, "an article needs Compass release provenance");
    }
    return v;
  });
  return posts.sort((a, b) => b.datePublished.localeCompare(a.datePublished) || a.slug.localeCompare(b.slug));
}

export const BLOG_POSTS: BlogPost[] = loadPosts(postsData);

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

/** The post's public URL: blog_route "/{slug}/". */
export function postUrl(slug: string): string {
  return `${SITE_URL}/${slug}/`;
}

export function formatPostDate(iso: string): string {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
  });
}

export function readTime(markdown: string): string {
  return `${Math.max(1, Math.ceil(markdown.split(/\s+/).length / 220))} min read`;
}
