import type { MetadataRoute } from "next";
import { isDemo, siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // A review copy re-hosts the ministry's own words and photos; indexed, it
  // would compete with the real site. Setting NEXT_PUBLIC_SITE_URL to the real
  // domain flips this automatically.
  if (isDemo) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
