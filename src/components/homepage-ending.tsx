"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const impactInstruments = [
  {
    number: "01",
    label: "Food rescued",
    description:
      "Future reporting will reflect appropriate surplus moved through completed rescues.",
  },
  {
    number: "02",
    label: "Rescues completed",
    description:
      "Activity will be reported only after a rescue is confirmed as complete.",
  },
  {
    number: "03",
    label: "Volunteer hours",
    description:
      "Public totals will grow from time recorded through completed service activity.",
  },
] as const;

export function HomepageEnding() {
  const endingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = Array.from(
      endingRef.current?.querySelectorAll<HTMLElement>("[data-entry-section]") ??
        [],
    );

    if (sections.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return;
    }

    sections.forEach((section) => section.classList.add("is-motion-ready"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10%", threshold: 0.16 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={endingRef}>
      <section
        className="impact-preview"
        id="impact-preview"
        aria-labelledby="impact-preview-title"
        data-entry-section
      >
        <div className="site-container impact-preview__intro">
          <div>
            <p className="eyebrow">Our impact</p>
            <h2 id="impact-preview-title">Real change, measured honestly.</h2>
          </div>
          <div className="impact-preview__copy">
            <p>
              Verified public totals will appear here as completed rescue
              activity creates a meaningful record. Until then, the
              early-stage state stays clear and intentional.
            </p>
            <Link className="directional-link" href="/impact">
              Explore our impact
              <span className="link-arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="site-container impact-report">
          <div className="impact-report__status">
            <p className="impact-report__label">Reporting status</p>
            <p className="impact-report__statement">
              Verified reporting is coming as Gather grows.
            </p>
            <span className="impact-report__measure" aria-hidden="true" />
            <p className="impact-report__note">
              No estimates. No placeholder totals. Every published figure will
              reflect real activity.
            </p>
          </div>

          <dl
            className="impact-instruments"
            aria-label="Early-stage impact categories"
          >
            {impactInstruments.map((instrument) => (
              <div className="impact-instrument" key={instrument.label}>
                <dt>
                  <span
                    className="impact-instrument__number"
                    aria-hidden="true"
                  >
                    {instrument.number}
                  </span>
                  <span>{instrument.label}</span>
                </dt>
                <dd className="impact-instrument__value">
                  <span aria-hidden="true">—</span>
                  <span className="visually-hidden">
                    No approved public total yet
                  </span>
                </dd>
                <dd className="impact-instrument__detail">
                  <p>{instrument.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section
        className="support-close"
        aria-labelledby="support-close-title"
        data-entry-section
      >
        <div className="site-container support-close__inner">
          <div className="support-close__copy">
            <p className="eyebrow">Good food moves with all of us</p>
            <h2 id="support-close-title">Join the movement.</h2>
            <p>
              Share food, move a rescue, welcome a delivery, or help Gather
              grow. Every role helps more good food reach people who can use it.
            </p>
            <div className="support-close__actions">
              <Link className="button button--light" href="/get-involved">
                Get involved
                <span className="button-arrow" aria-hidden="true" />
              </Link>
              <Link className="button button--ghost" href="/support">
                Support Gather
                <span className="button-arrow" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="support-close__media">
            {/* Temporary, non-Gather documentary photograph from Unsplash.
                It can be replaced without changing the section structure. */}
            <Image
              src="/images/audience-schools-service.webp"
              alt="Volunteers work together to pack prepared food."
              fill
              sizes="(max-width: 840px) 100vw, 58vw"
            />
            <span className="support-close__veil" aria-hidden="true" />
          </div>
        </div>
      </section>
    </div>
  );
}
