import Link from "next/link";
import { Logo } from "@/components/ui";
import { destinations, primaryLinks } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <Link className="site-footer__brand" href="/" aria-label="Gather home">
          <Logo />
        </Link>
        <nav className="site-footer__nav" aria-label="Footer navigation">
          {primaryLinks.map(({ href, label }) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="site-footer__contact">
          <a href={destinations.email}>help@gatherforward.org</a>
          <a href={destinations.instagram}>
            Instagram
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
              <path d="M5 15 15 5M5 5h10v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} Gather</span>
          <nav aria-label="Policies">
            <a href={destinations.privacy}>Privacy</a>
            <a href={destinations.terms}>Terms</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
