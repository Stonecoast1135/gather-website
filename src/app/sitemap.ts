import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/site-config";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/how-it-works",
    "/get-involved",
    "/impact",
    "/about",
    "/contact",
    "/support",
  ].map((path) => ({
    url: `${siteOrigin}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
