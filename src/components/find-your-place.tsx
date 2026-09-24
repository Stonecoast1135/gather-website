"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Link from "next/link";
import { ActionLink, Photo } from "@/components/ui";
import { destinations } from "@/lib/site-config";

const roles = [
  {
    id: "students",
    label: "Students",
    headline: "Make your time count.",
    description:
      "Help move extra food to local organizations and keep track of your completed service.",
    action: "Join Gather",
    href: destinations.signup,
    photo: "finish-transport",
    alt: "A volunteer loading a box of food into a van.",
  },
  {
    id: "businesses",
    label: "Businesses",
    headline: "Give extra food a place to go.",
    description:
      "Join Gather to connect your surplus with local organizations.",
    action: "Join as a business",
    href: destinations.signup,
    photo: "finish-bakery",
    alt: "A baker packing fresh bread at a wooden worktable.",
  },
  {
    id: "organizations",
    label: "Organizations",
    headline: "Put good food to use.",
    description: "Get in touch about receiving food through Gather.",
    action: "Contact us",
    href: destinations.email,
    photo: "finish-sorting",
    alt: "A volunteer sorting bread and groceries at a community food center.",
  },
] as const;

export function FindYourPlace() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const role = roles[selected];

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next =
      event.key === "ArrowRight"
        ? (index + 1) % roles.length
        : event.key === "ArrowLeft"
          ? (index + roles.length - 1) % roles.length
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? roles.length - 1
              : null;
    if (next === null) return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }

  return (
    <section
      className="find-place container"
      aria-labelledby="find-place-heading"
    >
      <div className="find-place__header">
        <h2 id="find-place-heading">Find your place.</h2>
        <div
          className="place-tabs"
          role="tablist"
          aria-label="Ways to get involved"
        >
          {roles.map((item, index) => (
            <button
              key={item.id}
              ref={(element) => {
                tabs.current[index] = element;
              }}
              type="button"
              role="tab"
              id={`place-tab-${item.id}`}
              aria-controls="place-panel"
              aria-selected={selected === index}
              tabIndex={selected === index ? 0 : -1}
              onClick={() => setSelected(index)}
              onKeyDown={(event) => onKeyDown(event, index)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div
        id="place-panel"
        role="tabpanel"
        aria-labelledby={`place-tab-${role.id}`}
        className="place-panel"
      >
        <div
          className={`place-panel__content place-panel__content--${role.id}`}
          key={role.id}
        >
          <Photo
            src={role.photo}
            alt={role.alt}
            className="place-panel__photo"
            sizes="(max-width:700px) 90vw, 50vw"
          />
          <div className="place-panel__copy">
            <h3>{role.headline}</h3>
            <p>{role.description}</p>
            <ActionLink href={role.href}>{role.action}</ActionLink>
            <div className="place-panel__contact">
              {role.id === "businesses" && (
                <p>
                  Questions?{" "}
                  <a href={destinations.email}>help@gatherforward.org</a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <noscript>
        <p className="place-fallback">
          <Link href="/get-involved">Explore all ways to get involved →</Link>
        </p>
      </noscript>
    </section>
  );
}
