import type { MetadataRoute } from "next";
import { services } from "@/lib/content";

const base = "https://upeoafricatechnologies.co.ke";
const lastModified = new Date("2026-08-25");

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/about", "/contact"];
  const legal = ["/privacy", "/terms", "/sla"];

  return [
    ...pages.map((route) => ({
      url: `${base}${route}`,
      lastModified,
      changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: route === "" ? 1 : 0.9,
    })),
    // One page per service, generated from the same source as the routes
    // themselves, so a new service is never missing from the sitemap.
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...legal.map((route) => ({
      url: `${base}${route}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
