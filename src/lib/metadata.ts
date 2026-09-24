import type { Metadata } from "next";
import { siteOrigin } from "./site-config";
export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Gather`,
      description,
      url: `${siteOrigin}${path}`,
      siteName: "Gather",
      type: "website",
      images: [
        {
          url: "/share-gather.png",
          width: 1200,
          height: 630,
          alt: "Gather. Less waste. More good.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Gather`,
      description,
      images: ["/share-gather.png"],
    },
  };
}
