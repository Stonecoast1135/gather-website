import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/volunteers",
        destination: "/get-involved#students",
        permanent: true,
      },
      {
        source: "/businesses",
        destination: "/get-involved#businesses",
        permanent: true,
      },
      {
        source: "/organizations",
        destination: "/get-involved#organizations",
        permanent: true,
      },
      {
        source: "/schools",
        destination: "/get-involved#schools",
        permanent: true,
      },
      {
        source: "/download",
        destination: "https://my.gatherforward.org",
        permanent: false,
      },
      {
        source: "/privacy",
        destination: "https://my.gatherforward.org/privacy",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "https://my.gatherforward.org/terms",
        permanent: true,
      },
      { source: "/help", destination: "/contact", permanent: true },
      {
        source: "/account-deletion",
        destination: "https://my.gatherforward.org/support",
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          ...(process.env.VERCEL_ENV === "production"
            ? []
            : [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]),
        ],
      },
    ];
  },
};
export default nextConfig;
