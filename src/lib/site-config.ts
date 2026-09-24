export const destinations = {
  signup: "https://my.gatherforward.org",
  email: "mailto:help@gatherforward.org",
  instagram: "https://www.instagram.com/gather.forward/",
  privacy: "https://my.gatherforward.org/privacy",
  terms: "https://my.gatherforward.org/terms",
} as const;
export const primaryLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/impact", label: "Impact" },
  { href: "/about", label: "About" },
] as const;
// The live apex domain redirects to www. Preserve that canonical identity.
export const siteOrigin = "https://www.gatherforward.org";
export const isIndexable = process.env.VERCEL_ENV === "production";
