"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ActionLink, Logo } from "@/components/ui";
import { closeDialog, openDialog, trapDialogFocus } from "@/components/dialog";
import { destinations, primaryLinks } from "@/lib/site-config";

export function SiteHeader() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const menu = menuRef.current;
    if (menu) closeDialog(menu);
  }, [pathname]);

  useEffect(() => {
    const menu = menuRef.current;
    const desktop = window.matchMedia("(min-width: 901px)");
    const closeOnDesktop = () => {
      if (desktop.matches && menu) closeDialog(menu);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      desktop.removeEventListener("change", closeOnDesktop);
      if (menu) closeDialog(menu);
    };
  }, []);

  function closeMenu() {
    if (menuRef.current) closeDialog(menuRef.current);
  }

  function showMenu() {
    const menu = menuRef.current;
    // Safari does not focus buttons on pointer click. Set the return target
    // before the dialog records the currently focused element.
    triggerRef.current?.focus({ preventScroll: true });
    if (menu && openDialog(menu, menu.querySelector<HTMLElement>("nav a")))
      setMenuOpen(true);
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="site-header__brand" href="/" aria-label="Gather home">
          <Logo />
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {primaryLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <ActionLink className="site-header__join" />
        <button
          ref={triggerRef}
          className="menu-trigger icon-button"
          type="button"
          aria-label="Open navigation menu"
          aria-haspopup="dialog"
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          onClick={showMenu}
        >
          <svg width="25" height="22" viewBox="0 0 25 22" aria-hidden="true">
            <path
              d="M3 5h19M3 11h19M3 17h19"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </svg>
        </button>
      </div>
      <dialog
        ref={menuRef}
        id="mobile-menu"
        className="mobile-menu"
        aria-label="Site navigation"
        onClose={() => setMenuOpen(false)}
        onKeyDown={trapDialogFocus}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu();
        }}
      >
        <div className="mobile-menu__content">
          <div className="mobile-menu__top">
            <Link href="/" aria-label="Gather home" onClick={closeMenu}>
              <Logo />
            </Link>
            <button
              className="icon-button"
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
            >
              <CloseIcon />
            </button>
          </div>
          <nav className="mobile-menu__nav" aria-label="Mobile navigation">
            {primaryLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                onClick={closeMenu}
              >
                {label}
              </Link>
            ))}
          </nav>
          <ActionLink className="mobile-menu__join" onClick={closeMenu} />
          <nav
            className="mobile-menu__secondary"
            aria-label="Contact and policies"
          >
            <a href={destinations.email} onClick={closeMenu}>
              Contact
            </a>
            <a href={destinations.instagram} onClick={closeMenu}>
              Instagram
            </a>
            <a href={destinations.privacy} onClick={closeMenu}>
              Privacy
            </a>
            <a href={destinations.terms} onClick={closeMenu}>
              Terms
            </a>
          </nav>
        </div>
      </dialog>
    </header>
  );
}

export function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="m6 6 12 12M18 6 6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
