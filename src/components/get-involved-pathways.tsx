"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

import styles from "@/app/participation-pages.module.css";

const paths = [
  {
    id: "volunteers",
    number: "01",
    title: "Volunteers",
    prompt: "I have time to help",
    description:
      "Claim an available rescue that fits your schedule, help move appropriate surplus food, and keep a record of completed service activity.",
    benefits: ["Local opportunities", "Flexible participation", "Personal activity history"],
    cta: "Explore volunteering",
    href: "/volunteers",
    image: "/images/audience-volunteers-service.webp",
    alt: "Volunteers work together to organize packaged food.",
    position: "center 46%",
  },
  {
    id: "businesses",
    number: "02",
    title: "Businesses",
    prompt: "I have food to share",
    description:
      "Make appropriate surplus available through a clear process for pickup, handoff, and completion confirmation.",
    benefits: ["Clear coordination", "Useful food details", "Completion visibility"],
    cta: "Join as a business",
    href: "/businesses",
    image: "/images/audience-business-bakery.webp",
    alt: "A baker arranges fresh bread on a tray.",
    position: "center 38%",
  },
  {
    id: "organizations",
    number: "03",
    title: "Recipient Organizations",
    prompt: "My organization can use food",
    description:
      "Share preferences and suitability needs, then coordinate incoming rescues that can support the people and programs you serve.",
    benefits: ["Appropriate food", "Recipient preferences", "Coordinated arrivals"],
    cta: "Learn about receiving",
    href: "/organizations",
    image: "/images/audience-recipient-produce.webp",
    alt: "A person carries a box filled with fresh vegetables.",
    position: "center 56%",
  },
  {
    id: "schools",
    number: "04",
    title: "Schools & Programs",
    prompt: "I support student service",
    description:
      "Help students take part locally and maintain clear records of completed activity, subject to each school or program’s own policies.",
    benefits: ["Meaningful service", "Clear activity records", "Program visibility over time"],
    cta: "Explore schools & programs",
    href: "/schools",
    image: "/images/audience-schools-service.webp",
    alt: "People prepare packaged meals together at a community event.",
    position: "center 46%",
  },
  {
    id: "supporters",
    number: "05",
    title: "Supporters",
    prompt: "I want to help Gather grow",
    description:
      "Support the mission through individual giving, sponsorship, foundation funding, or community partnership as Gather grows responsibly.",
    benefits: ["More rescue capacity", "Responsible growth", "Community support"],
    cta: "Support Gather",
    href: "/support",
    image: "/images/hero-community-tomatoes.webp",
    alt: "Several people hold a bowl of freshly harvested tomatoes together.",
    position: "center 52%",
  },
] as const;

export function GetInvolvedPathways() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const activePath = paths[activeIndex];

  const selectAndFocus = (index: number) => {
    setActiveIndex(index);
    tabs.current[index]?.focus();
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex: number | null = null;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (index + 1) % paths.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = (index - 1 + paths.length) % paths.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = paths.length - 1;
    }

    if (nextIndex === null) return;
    event.preventDefault();
    selectAndFocus(nextIndex);
  };

  return (
    <section
      className={styles.pathways}
      id="choose-your-path"
      aria-labelledby="choose-path-title"
    >
      <div className={`site-container ${styles.pathwaysIntro}`}>
        <div>
          <p className="eyebrow">Choose your path</p>
          <h2 id="choose-path-title">Start with what you can bring.</h2>
        </div>
        <p>
          Every rescue depends on different people contributing in different
          ways. Choose the role that sounds most like you.
        </p>
      </div>

      <div className={`site-container ${styles.pathwaysDesktop}`}>
        <div
          className={styles.pathList}
          role="tablist"
          aria-label="Ways to take part in Gather"
          aria-orientation="vertical"
        >
          {paths.map((path, index) => (
            <button
              className={styles.pathChoice}
              data-active={activeIndex === index}
              id={`involved-tab-${path.id}`}
              key={path.id}
              ref={(element) => {
                tabs.current[index] = element;
              }}
              type="button"
              role="tab"
              aria-controls="involved-path-panel"
              aria-selected={activeIndex === index}
              tabIndex={activeIndex === index ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") setActiveIndex(index);
              }}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span>{path.number}</span>
              <span>
                <strong>{path.title}</strong>
                <small>{path.prompt}</small>
              </span>
              <i aria-hidden="true" />
            </button>
          ))}
        </div>

        <div
          className={styles.pathPanel}
          id="involved-path-panel"
          role="tabpanel"
          aria-labelledby={`involved-tab-${activePath.id}`}
        >
          <div className={styles.pathMedia}>
            {paths.map((path, index) => (
              <Image
                className={styles.pathImage}
                data-active={activeIndex === index}
                key={path.id}
                src={path.image}
                alt={activeIndex === index ? path.alt : ""}
                fill
                sizes="(max-width: 1024px) 52vw, 44vw"
                style={{ objectPosition: path.position }}
              />
            ))}
            <span className={styles.mediaIndex} aria-hidden="true">
              Path {activePath.number}
            </span>
          </div>
          <div className={styles.pathCopy} key={activePath.id}>
            <p>{activePath.prompt}</p>
            <h3>{activePath.title}</h3>
            <p>{activePath.description}</p>
            <ul aria-label={`${activePath.title} benefits`}>
              {activePath.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
            <Link className="directional-link" href={activePath.href}>
              {activePath.cta}
              <span className="link-arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <div className={`site-container ${styles.pathwaysMobile}`}>
        {paths.map((path) => (
          <article className={styles.mobilePath} key={path.id}>
            <div className={styles.mobilePathMedia}>
              <Image
                src={path.image}
                alt={path.alt}
                fill
                sizes="calc(100vw - 40px)"
                style={{ objectPosition: path.position }}
              />
              <span aria-hidden="true">{path.number}</span>
            </div>
            <div className={styles.mobilePathCopy}>
              <p>{path.prompt}</p>
              <h3>{path.title}</h3>
              <p>{path.description}</p>
              <Link className="directional-link" href={path.href}>
                {path.cta}
                <span className="link-arrow" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
