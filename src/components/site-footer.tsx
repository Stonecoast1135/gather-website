import Link from "next/link";

const footerGroups = [
  {
    title: "Explore",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Impact", href: "/impact" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Find Your Place", href: "/get-involved" },
      { label: "Volunteers", href: "/volunteers" },
      { label: "Businesses", href: "/businesses" },
      {
        label: "Recipient Organizations",
        href: "/organizations",
      },
      { label: "Schools & Programs", href: "/schools" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Support Gather", href: "/support" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Download Gather", href: "/download" },
    ],
  },
] as const;

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container site-footer__main">
        <div className="site-footer__brand">
          <Link className="site-footer__wordmark" href="/" aria-label="Gather home">
            Gather
          </Link>
          <p>Good food. Good people. Better together.</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          {footerGroups.map((group) => (
            <div className="site-footer__group" key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className="site-container site-footer__bottom">
        <p>© Gather</p>
        <nav aria-label="Legal">
          {legalLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
