import type { MetadataRoute } from "next";

const base = "https://upeoafricatechnologies.co.ke";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/about", "/contact", "/privacy", "/terms", "/sla"];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date("2026-08-23"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
