"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import styles from "@/app/how-it-works/how-it-works.module.css";

const rescueChapters = [
  {
    number: "01",
    label: "Surplus",
    title: "Appropriate surplus becomes a rescue opportunity.",
    introduction:
      "The journey starts with enough useful detail for people to decide whether the food and timing can work.",
    image: "/images/audience-business-bakery.webp",
    alt: "A baker arranges fresh loaves on a tray.",
    momentLabel: "Rescue brief",
    momentItems: ["Food details", "Pickup window", "Handling notes"],
    dark: false,
    steps: [
      {
        number: "01",
        title: "Surplus becomes available",
        description:
          "A business shares the food type, approximate quantity, availability, location, and relevant handling notes.",
      },
      {
        number: "02",
        title: "A recipient can determine whether it fits",
        description:
          "Recipient organizations can consider their needs, preferences, and capacity before moving forward.",
      },
    ],
  },
  {
    number: "02",
    label: "Coordination",
    title: "The right people can see what comes next.",
    introduction:
      "Once a rescue is ready for coordination, the opportunity can move into a clear volunteer handoff.",
    image: "/images/audience-recipient-produce.webp",
    alt: "A person carries a box filled with fresh vegetables.",
    momentLabel: "Coordination state",
    momentItems: ["Opportunity available", "Details reviewed", "Volunteer claimed"],
    dark: false,
    steps: [
      {
        number: "03",
        title: "The opportunity becomes available",
        description:
          "The rescue can be made available for volunteer coordination when its details are ready.",
      },
      {
        number: "04",
        title: "A volunteer claims the rescue",
        description:
          "The volunteer reviews the opportunity, claims it, and receives the details needed to complete it.",
      },
    ],
  },
  {
    number: "03",
    label: "Handoff",
    title: "Food moves through a coordinated handoff.",
    introduction:
      "Clear pickup and delivery information helps the volunteer carry the rescue between both organizations.",
    image: "/images/audience-volunteers-service.webp",
    alt: "Volunteers organize packaged food for distribution.",
    momentLabel: "Rescue in motion",
    momentItems: ["Pickup coordinated", "Food handed off", "Delivery underway"],
    dark: true,
    steps: [
      {
        number: "05",
        title: "Pickup and handoff",
        description:
          "The volunteer arrives during the coordinated window and the business hands off the food.",
      },
      {
        number: "06",
        title: "Transport",
        description:
          "The volunteer moves the food using the agreed rescue and destination details.",
      },
    ],
  },
  {
    number: "04",
    label: "Completion",
    title: "Delivery becomes a trusted record of action.",
    introduction:
      "The journey resolves when delivery is confirmed and the completed activity can be recorded.",
    image: "/images/audience-schools-service.webp",
    alt: "People work together to prepare packaged meals for distribution.",
    momentLabel: "Completion",
    momentItems: ["Delivery confirmed", "Rescue completed", "Activity recorded"],
    dark: false,
    steps: [
      {
        number: "07",
        title: "Delivery",
        description: "Food reaches the recipient organization.",
      },
      {
        number: "08",
        title: "Completion is confirmed",
        description:
          "Delivery and completion are confirmed so the rescue can be marked complete.",
      },
      {
        number: "09",
        title: "Impact and service activity are recorded",
        description:
          "Completed activity contributes to Gather's impact record and the volunteer's service history.",
      },
    ],
  },
] as const;

export function RescueStory() {
  const journeyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const journey = journeyRef.current;
    if (!journey) return;

    const revealTargets = Array.from(
      journey.querySelectorAll<HTMLElement>("[data-journey-reveal]"),
    );
    const stageTargets = Array.from(
      journey.querySelectorAll<HTMLElement>(
        "[data-journey-chapter], [data-journey-step]",
      ),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      journey.style.setProperty("--journey-progress", "1");
      revealTargets.forEach((target) => target.classList.add(styles.isVisible));
      stageTargets.forEach((target) => target.classList.add(styles.isActive));
      return;
    }

    journey.classList.add(styles.motionReady);

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add(styles.isVisible);
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12%", threshold: 0.18 },
    );

    const stageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add(styles.isActive);
          if (entry.target.hasAttribute("data-journey-chapter")) {
            entry.target
              .querySelectorAll<HTMLElement>("[data-journey-reveal]")
              .forEach((target) => target.classList.add(styles.isVisible));
          }
        });
      },
      { rootMargin: "-22% 0px -52%", threshold: 0.08 },
    );

    revealTargets.forEach((target) => revealObserver.observe(target));
    stageTargets.forEach((target) => stageObserver.observe(target));

    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const bounds = journey.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.72;
      const travel = Math.max(bounds.height - viewportHeight * 0.34, 1);
      const progress = Math.min(Math.max((start - bounds.top) / travel, 0), 1);
      journey.style.setProperty("--journey-progress", progress.toFixed(4));
    };

    const requestProgressUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestProgressUpdate, { passive: true });
    window.addEventListener("resize", requestProgressUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      revealObserver.disconnect();
      stageObserver.disconnect();
      window.removeEventListener("scroll", requestProgressUpdate);
      window.removeEventListener("resize", requestProgressUpdate);
    };
  }, []);

  return (
    <section
      ref={journeyRef}
      className={styles.journey}
      id="rescue-journey"
      aria-labelledby="journey-title"
    >
      <div className={`site-container ${styles.journeyIntro}`}>
        <div>
          <p className="eyebrow">The rescue journey</p>
          <h2 id="journey-title">
            Follow one rescue from surplus to recorded activity.
          </h2>
        </div>
        <p>
          Nine clear moments form one coordinated chain. The exact details may
          vary, but every rescue moves through the same shared purpose.
        </p>
      </div>

      <div className={`site-container ${styles.journeyField}`}>
        <svg
          className={styles.routeMap}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className={styles.routeBase}
            d="M50 0 C50 8 42 10 43 19 C44 28 58 27 57 37 C56 47 45 47 47 57 C49 67 59 68 57 78 C55 88 48 90 50 100"
            pathLength="1"
          />
          <path
            className={styles.routeActive}
            d="M50 0 C50 8 42 10 43 19 C44 28 58 27 57 37 C56 47 45 47 47 57 C49 67 59 68 57 78 C55 88 48 90 50 100"
            pathLength="1"
          />
        </svg>

        <ol className={styles.chapterList}>
          {rescueChapters.map((chapter, chapterIndex) => (
            <li
              className={`${styles.chapter} ${
                chapterIndex % 2 === 0 ? styles.chapterOdd : styles.chapterEven
              }${chapter.dark ? ` ${styles.chapterDark}` : ""}`}
              data-journey-chapter
              key={chapter.label}
            >
              <span className={styles.chapterAnchor} aria-hidden="true">
                {chapter.number}
              </span>

              <header
                className={styles.chapterHeading}
                data-journey-reveal
              >
                <p className={styles.chapterLabel}>
                  Chapter {chapter.number} / {chapter.label}
                </p>
                <h3>{chapter.title}</h3>
                <p>{chapter.introduction}</p>
              </header>

              <div className={styles.chapterMedia} data-journey-reveal>
                <Image
                  src={chapter.image}
                  alt={chapter.alt}
                  fill
                  sizes="(max-width: 767px) calc(100vw - 72px), (max-width: 1100px) 44vw, 42vw"
                />
                <aside
                  className={styles.interfaceMoment}
                  aria-label={`${chapter.momentLabel}: ${chapter.momentItems.join(
                    ", ",
                  )}`}
                >
                  <p>{chapter.momentLabel}</p>
                  <ul>
                    {chapter.momentItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </aside>
              </div>

              <ol className={styles.chapterSteps}>
                {chapter.steps.map((step) => (
                  <li data-journey-step key={step.number}>
                    <span className={styles.stepMarker} aria-hidden="true">
                      {step.number}
                    </span>
                    <div>
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
