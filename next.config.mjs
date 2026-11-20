import { readFileSync } from "node:fs";

/* Images the WordPress site served from /wp-content/uploads/ now live in
   /public (data/wp-media-redirects.json maps each retained file to its new
   path), so old image URLs keep resolving after the cutover. */
const mediaRedirects = JSON.parse(readFileSync(new URL("./data/wp-media-redirects.json", import.meta.url), "utf8"));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // WordPress URLs end in a slash (/about/, /<post-slug>/). Keeping the same
  // shape means every preserved URL is byte-for-byte the live one, and the
  // Compass blog route is /{slug}/. Paths without the slash get one 308.
  trailingSlash: true,
  async redirects() {
    return [
      // Retired WordPress pages, feeds and archives.
      { source: "/locations", destination: "/service-areas/", permanent: true },
      { source: "/sample-page", destination: "/", permanent: true },
      { source: "/feed", destination: "/sitemap.xml", permanent: true },
      { source: "/comments/feed", destination: "/sitemap.xml", permanent: true },
      // Per-post comment feeds. "comments" is excluded so /comments/feed/ hits
      // its own rule above instead of redirecting to a /comments/ page.
      { source: "/:slug((?!comments$)[^/]+)/feed", destination: "/:slug/", permanent: true },
      { source: "/wp-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/:sitemap(wp-sitemap-.+\\.xml)", destination: "/sitemap.xml", permanent: true },
      { source: "/category/:path*", destination: "/blog/", permanent: true },
      { source: "/author/:path*", destination: "/blog/", permanent: true },
      { source: "/blog/page/:page", destination: "/blog/", permanent: true },
      // The pre-launch build's resources hub became the blog.
      { source: "/resources", destination: "/blog/", permanent: true },
      { source: "/resources/:slug", destination: "/:slug/", permanent: true },
      ...mediaRedirects.map(({ source, destination }) => ({ source, destination, permanent: true })),
    ];
  },
};

export default nextConfig;
