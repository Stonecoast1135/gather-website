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
            Instagram <span aria-hidden="true">↗</span>
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
