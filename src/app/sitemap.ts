import { MetadataRoute } from "next";
import { useCases } from "@/data/useCases";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.anavera.com";

  // Dynamic application routes
  const applicationUrls = useCases.map((uc) => ({
    url: `${baseUrl}/applications/${uc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Core static routes
  const staticUrls = [
    "",
    "/about-us",
    "/applications",
    "/platform",
    "/hardware-ecosystem",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.6,
  }));

  return [...staticUrls, ...applicationUrls];
}
