"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import styles from "@/app/how-it-works/how-it-works.module.css";

const participantOutcomes = [
  {
    number: "01",
    label: "For businesses",
    title: "Less waste. Clearer handoffs.",
    description:
      "Share appropriate surplus and pickup details, coordinate the handoff, and know when the rescue is complete.",
    linkLabel: "Explore businesses",
    href: "/businesses",
  },
  {
    number: "02",
    label: "For recipient organizations",
    title: "Food that fits the mission.",
    description:
      "Review incoming rescue details, determine what fits your organization, and coordinate delivery around what you can use.",
    linkLabel: "Explore recipient organizations",
    href: "/organizations",
  },
  {
    number: "03",
    label: "For volunteers",
    title: "A clear way to serve.",
    description:
      "Understand the rescue before claiming, help complete meaningful local service, and keep a history of completed activity.",
    linkLabel: "Explore volunteering",
    href: "/volunteers",
  },
] as const;

const confirmationMoments = [
  {
    number: "01",
    title: "Details",
    description: "Shared before the rescue.",
  },
  {
    number: "02",
    title: "Handoff",
    description: "Pickup is coordinated.",
  },
  {
    number: "03",
    title: "Delivery",
    description: "Arrival is confirmed.",
  },
  {
    number: "04",
    title: "Recorded",
    description: "Completed activity is kept.",
  },
] as const;

export function HowItWorksConclusion() {
  const conclusionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const conclusion = conclusionRef.current;
    if (!conclusion) return;

    const targets = Array.from(
      conclusion.querySelectorAll<HTMLElement>(
        "[data-conclusion-reveal], [data-conclusion-stage]",
      ),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      targets.forEach((target) => target.classList.add(styles.isVisible));
      return;
    }

    conclusion.classList.add(styles.motionReady);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add(styles.isVisible);
          if (entry.target.hasAttribute("data-conclusion-stage")) {
            entry.target
              .querySelectorAll<HTMLElement>(
                "[data-conclusion-reveal], [data-conclusion-stage]",
              )
              .forEach((target) => target.classList.add(styles.isVisible));
          }
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -14%", threshold: 0.16 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={conclusionRef} className={styles.conclusion}>
      <section
        className={styles.why}
        aria-labelledby="why-it-works-title"
        data-conclusion-stage
      >
        <span className={styles.whyRouteEntry} aria-hidden="true" />

        <header
          className={`site-container ${styles.whyHeader}`}
          data-conclusion-reveal
        >
          <p className="eyebrow">The route, resolved</p>
          <h2 id="why-it-works-title">Why it works for everyone</h2>
          <p>
            One rescue gives each participant a clear role—and a clear reason
            to take part.
          </p>
        </header>

        <ol className={`site-container ${styles.whyParticipants}`}>
          {participantOutcomes.map((participant) => (
            <li data-conclusion-reveal key={participant.label}>
              <span className={styles.whyMarker} aria-hidden="true">
                {participant.number}
              </span>
              <p className={styles.whyLabel}>{participant.label}</p>
              <h3>{participant.title}</h3>
              <p>{participant.description}</p>
              <Link className="directional-link" href={participant.href}>
                {participant.linkLabel}
                <span className="link-arrow" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section
        className={styles.trust}
        aria-labelledby="trust-title"
        data-conclusion-stage
      >
        <div className={`site-container ${styles.trustGrid}`}>
          <header className={styles.trustHeader} data-conclusion-reveal>
            <p className="eyebrow">Designed for clarity</p>
            <h2 id="trust-title">Clear at every handoff.</h2>
            <p>
              Gather is designed so the people involved know what is available,
              what comes next, and when the rescue is complete.
            </p>
          </header>

          <ol
            className={styles.trustSequence}
            data-conclusion-stage
            aria-label="Rescue confirmation sequence"
          >
            {confirmationMoments.map((moment) => (
              <li key={moment.title}>
                <span aria-hidden="true">{moment.number}</span>
                <strong>{moment.title}</strong>
                <p>{moment.description}</p>
              </li>
            ))}
          </ol>

          <p className={styles.trustNote} data-conclusion-reveal>
            Distinct roles keep each handoff understandable. Confirmed
            completion creates a record of finished activity.
          </p>
        </div>
      </section>

      <section
        className={styles.closing}
        aria-labelledby="join-movement-title"
        data-conclusion-stage
      >
        <div className={styles.closingGrid}>
          <div className={styles.closingMedia} data-conclusion-reveal>
            {/* Temporary, non-Gather photography reused as an intentional
                visual bookend. Replace with approved handoff photography later. */}
            <Image
              src="/images/hero-community-tomatoes.webp"
              alt="Several people steady a bowl filled with freshly harvested tomatoes."
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          </div>

          <div className={styles.closingCopy} data-conclusion-reveal>
            <p className="eyebrow">The route continues with you</p>
            <h2 id="join-movement-title">Join the movement.</h2>
            <p>
              Whether you have appropriate surplus to share, food your
              organization can use, or time to help move it, there&apos;s a place
              for you in Gather.
            </p>
            <div className={styles.closingActions}>
              <Link className="button button--light" href="/get-involved">
                Get involved
                <span className="button-arrow" aria-hidden="true" />
              </Link>
              <Link className="button button--ghost" href="/download">
                Download Gather
                <span className="button-arrow" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
