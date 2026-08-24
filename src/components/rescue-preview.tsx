"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const rescueChapters = [
  {
    number: "01",
    label: "Share",
    image: "/images/audience-business-bakery.webp",
    alt: "A baker arranges fresh loaves on a tray.",
    steps: ["Appropriate surplus is shared", "An opportunity becomes available"],
    connector: "down",
  },
  {
    number: "02",
    label: "Move",
    image: "/images/audience-volunteers-service.webp",
    alt: "Volunteers organize packaged food for distribution.",
    steps: ["A volunteer claims it", "Pickup is coordinated"],
    connector: "up",
  },
  {
    number: "03",
    label: "Complete",
    image: "/images/audience-recipient-produce.webp",
    alt: "A person carries a box filled with fresh vegetables.",
    steps: ["Delivery is confirmed", "Impact and service activity are recorded"],
    connector: null,
  },
] as const;

export function RescuePreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      section.classList.add("is-visible");
      return;
    }

    section.classList.add("is-motion-ready");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        section.classList.add("is-visible");
        observer.disconnect();
      },
      { rootMargin: "0px 0px -12%", threshold: 0.16 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="rescue-preview"
      id="rescue-preview"
      aria-labelledby="rescue-preview-title"
    >
      <div className="site-container rescue-preview__intro">
        <div>
          <p className="eyebrow">How Gather works</p>
          <h2 id="rescue-preview-title">Good food, kept in motion.</h2>
        </div>
        <div className="rescue-preview__copy">
          <p>
            A rescue connects one appropriate surplus opportunity with a
            volunteer and a recipient organization—then records what was
            completed.
          </p>
          <Link className="directional-link" href="/how-it-works">
            See how a rescue works
            <span className="link-arrow" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <ol className="site-container rescue-journey">
        {rescueChapters.map((chapter) => (
          <li className="rescue-chapter" key={chapter.label}>
            <div className="rescue-chapter__media">
              <Image
                src={chapter.image}
                alt={chapter.alt}
                fill
                sizes="(max-width: 840px) calc(100vw - 72px), 31vw"
              />
              <span>{chapter.label}</span>
            </div>

            <div className="rescue-chapter__route">
              <p className="rescue-chapter__number" aria-hidden="true">
                Chapter {chapter.number}
              </p>
              <ol className="rescue-chapter__steps">
                {chapter.steps.map((step, index) => (
                  <li key={step}>
                    <span className="rescue-step__marker" aria-hidden="true">
                      {String((Number(chapter.number) - 1) * 2 + index + 1).padStart(
                        2,
                        "0",
                      )}
                    </span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
              {chapter.connector ? (
                <span
                  className={`rescue-chapter__connector rescue-chapter__connector--${chapter.connector}`}
                  aria-hidden="true"
                />
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
