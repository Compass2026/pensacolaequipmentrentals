import { MetadataRoute } from "next";
import { EQUIPMENT_CATALOG } from "@/data/equipment";
import { BUSINESS_INFO } from "@/data/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.bnbcoastalcuts.com";

  const staticRoutes = [
    "",
    "/equipment",
    "/land-clearing",
    "/about",
    "/reviews",
    "/contact",
    "/request-a-quote",
    "/service-areas",
    "/resources",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const equipmentRoutes = EQUIPMENT_CATALOG.map((item) => ({
    url: `${baseUrl}/equipment/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const locationRoutes = BUSINESS_INFO.serviceAreas.map((area) => ({
    url: `${baseUrl}/service-areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...equipmentRoutes, ...locationRoutes];
}
