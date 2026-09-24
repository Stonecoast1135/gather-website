import type { MetadataRoute } from "next";
import { siteOrigin, isIndexable } from "@/lib/site-config";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(isIndexable ? { allow: "/" } : { disallow: "/" }),
    },
    ...(isIndexable ? { sitemap: `${siteOrigin}/sitemap.xml` } : {}),
  };
}
