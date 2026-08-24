"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const primaryLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/impact", label: "Impact" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
];

const involvedLinks = [
  { href: "/volunteers", label: "Volunteers" },
  { href: "/businesses", label: "Businesses" },
  { href: "/recipient-organizations", label: "Recipient Organizations" },
  { href: "/schools-and-programs", label: "Schools & Programs" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTriggerRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);

  const closeMobile = useCallback((restoreFocus = false) => {
    setMobileOpen(false);
    if (restoreFocus) {
      window.requestAnimationFrame(() => mobileTriggerRef.current?.focus());
    }
  }, []);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 28);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!dropdownOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [dropdownOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() => {
      mobilePanelRef.current?.focus({ preventScroll: true });
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMobile(true);
        return;
      }

      if (event.key !== "Tab" || !mobilePanelRef.current) return;

      const panelFocusable = Array.from(
        mobilePanelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      const focusable = [mobileTriggerRef.current, ...panelFocusable].filter(
        (element): element is HTMLElement => element !== null,
      );

      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (document.activeElement === mobilePanelRef.current) {
        event.preventDefault();
        (event.shiftKey ? last : panelFocusable[0] ?? first).focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 980) closeMobile();
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [closeMobile, mobileOpen]);

  const handleDropdownKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (event.key === "Escape") {
      event.preventDefault();
      setDropdownOpen(false);
      dropdownTriggerRef.current?.focus();
    }
  };

  const openDropdownFromKeyboard = (
    event: React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (event.key !== "ArrowDown") return;
    event.preventDefault();
    setDropdownOpen(true);
    window.requestAnimationFrame(() => {
      dropdownRef.current?.querySelector<HTMLElement>("a")?.focus();
    });
  };

  const isCurrentRoute = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={`site-header${scrolled ? " is-scrolled" : ""}${
        mobileOpen ? " has-open-menu" : ""
      }${pathname === "/how-it-works" ? " is-light-page" : ""}`}
    >
      <div className="site-container site-header__inner">
        <Link className="wordmark" href="/" aria-label="Gather home">
          Gather
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link
            className={`nav-link${isCurrentRoute(primaryLinks[0].href) ? " is-active" : ""}`}
            href={primaryLinks[0].href}
            aria-current={isCurrentRoute(primaryLinks[0].href) ? "page" : undefined}
          >
            {primaryLinks[0].label}
          </Link>

          <div
            className="nav-dropdown"
            ref={dropdownRef}
            onKeyDown={handleDropdownKeyDown}
          >
            <button
              ref={dropdownTriggerRef}
              className="nav-link nav-dropdown__trigger"
              type="button"
              aria-expanded={dropdownOpen}
              aria-controls="get-involved-menu"
              onClick={() => setDropdownOpen((current) => !current)}
              onKeyDown={openDropdownFromKeyboard}
            >
              Get Involved
              <span className="nav-chevron" aria-hidden="true" />
            </button>

            {dropdownOpen ? (
              <div className="nav-dropdown__panel" id="get-involved-menu">
                <p className="nav-dropdown__eyebrow">Choose your path</p>
                <div className="nav-dropdown__links">
                  {involvedLinks.map((link) => (
                    <Link
                      href={link.href}
                      key={link.href}
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span>{link.label}</span>
                      <span className="link-arrow" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {primaryLinks.slice(1).map((link) => (
            <Link
              className={`nav-link${isCurrentRoute(link.href) ? " is-active" : ""}`}
              href={link.href}
              key={link.href}
              aria-current={isCurrentRoute(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-utilities">
          <Link className="header-utility-link" href="/open-gather">
            Open Gather
          </Link>
          <Link className="button button--header" href="/get-involved">
            Get involved
            <span className="button-arrow" aria-hidden="true" />
          </Link>
        </div>

        <button
          ref={mobileTriggerRef}
          className="menu-trigger"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((current) => !current)}
        >
          <span className="menu-trigger__label">
            {mobileOpen ? "Close" : "Menu"}
          </span>
          <span className="menu-trigger__lines" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      {mobileOpen ? (
        <div
          ref={mobilePanelRef}
          className="mobile-menu"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          tabIndex={-1}
        >
          <nav className="mobile-menu__nav" aria-label="Mobile navigation">
            <Link
              href="/how-it-works"
              aria-current={isCurrentRoute("/how-it-works") ? "page" : undefined}
              onClick={() => closeMobile()}
            >
              <span>How It Works</span>
              <span className="link-arrow" aria-hidden="true" />
            </Link>

            <div className="mobile-menu__group">
              <p>Get Involved</p>
              {involvedLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  onClick={() => closeMobile()}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {primaryLinks.slice(1).map((link) => (
              <Link
                href={link.href}
                key={link.href}
                aria-current={isCurrentRoute(link.href) ? "page" : undefined}
                onClick={() => closeMobile()}
              >
                <span>{link.label}</span>
                <span className="link-arrow" aria-hidden="true" />
              </Link>
            ))}
          </nav>

          <div className="mobile-menu__utilities">
            <Link href="/open-gather" onClick={() => closeMobile()}>
              Open Gather
            </Link>
            <Link
              className="button button--primary"
              href="/get-involved"
              onClick={() => closeMobile()}
            >
              Get involved
              <span className="button-arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
