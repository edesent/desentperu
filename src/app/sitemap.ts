import type { MetadataRoute } from "next";
import { letters } from "@/lib/letters";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/the-work", priority: 0.9 },
    { path: "/partner", priority: 0.9 },
    { path: "/schedule", priority: 0.9 },
    { path: "/updates", priority: 0.8 },
    { path: "/about", priority: 0.7 },
  ];

  return [
    ...pages.map((p) => ({
      url: `${siteUrl}${p.path}`,
      lastModified: new Date(),
      priority: p.priority,
    })),
    ...letters.map((l) => ({
      url: `${siteUrl}/updates/${l.slug}`,
      lastModified: new Date(l.date),
      priority: 0.6,
    })),
  ];
}
