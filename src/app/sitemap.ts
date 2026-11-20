import { MetadataRoute } from "next";
import { EQUIPMENT_CATALOG } from "@/data/equipment";
import { BUSINESS_INFO } from "@/data/business";
import { BLOG_POSTS, SITE_URL, postUrl } from "@/content/compass-blog";

// Canonical production URLs, trailing slash included (next.config trailingSlash).
const url = (route: string) => `${SITE_URL}${route}/`.replace(/\/+$/, "/");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/equipment",
    "/land-clearing",
    "/about",
    "/reviews",
    "/contact",
    "/request-a-quote",
    "/service-areas",
    "/blog",
    "/privacy-policy",
  ].map((route) => ({
    url: url(route),
    lastModified: new Date(),
    changeFrequency: (route === "/privacy-policy" ? "yearly" : "weekly") as "yearly" | "weekly",
    priority: route === "" ? 1.0 : route === "/privacy-policy" ? 0.3 : 0.8,
  }));

  const equipmentRoutes = EQUIPMENT_CATALOG.map((item) => ({
    url: url(`/equipment/${item.slug}`),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const locationRoutes = BUSINESS_INFO.serviceAreas.map((area) => ({
    url: url(`/service-areas/${area.slug}`),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const postRoutes = BLOG_POSTS.map((post) => ({
    url: postUrl(post.slug),
    lastModified: new Date(`${post.dateModified}T12:00:00Z`),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...equipmentRoutes, ...locationRoutes, ...postRoutes];
}
