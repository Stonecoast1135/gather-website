import type { Metadata, Viewport } from "next";
import { Manrope, Newsreader } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { LaunchAnnouncement } from "@/components/launch-announcement";
import { isIndexable, siteOrigin } from "@/lib/site-config";
import "./globals.css";
import "@/components/interactions.css";
const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});
const display = Newsreader({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: "Gather | Less waste. More good.",
    template: "%s | Gather",
  },
  description:
    "Help rescue food for local organizations and track your volunteer hours with Gather.",
  robots: { index: isIndexable, follow: isIndexable },
};
export const viewport: Viewport = {
  themeColor: "#faf6ec",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <LaunchAnnouncement />
      </body>
    </html>
  );
}
