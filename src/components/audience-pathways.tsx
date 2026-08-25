"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const audiencePaths = [
  {
    id: "volunteers",
    number: "01",
    title: "Volunteers",
    description:
      "Find nearby food rescues that fit your schedule, make a tangible local difference, and keep a trustworthy record of completed service activity.",
    cta: "Explore volunteering",
    href: "/volunteers",
    image: "/images/audience-volunteers-service.webp",
    alt: "Volunteers organize packaged food for distribution.",
  },
  {
    id: "businesses",
    number: "02",
    title: "Businesses",
    description:
      "Share appropriate surplus through a clearer coordination process that helps reduce waste and support community organizations.",
    cta: "Join as a business",
    href: "/businesses",
    image: "/images/audience-business-bakery.webp",
    alt: "A baker arranges fresh loaves on a tray.",
  },
  {
    id: "recipient-organizations",
    number: "03",
    title: "Recipient Organizations",
    description:
      "Set preferences, coordinate what works for your organization, and receive appropriate food that supports your mission.",
    cta: "Learn about receiving",
    href: "/organizations",
    image: "/images/audience-recipient-produce.webp",
    alt: "A person carries a box filled with fresh vegetables.",
  },
  {
    id: "schools-and-programs",
    number: "04",
    title: "Schools & Programs",
    description:
      "Connect students with meaningful community service and trustworthy records of completed activity, subject to each program's own policies.",
    cta: "Explore schools & programs",
    href: "/schools",
    image: "/images/audience-schools-service.webp",
    alt: "People work together to prepare packaged meals for distribution.",
  },
  {
    id: "supporters",
    number: "05",
    title: "Supporters",
    description:
      "Help enable more rescues and responsible growth through individual support, sponsorship, foundation funding, or community partnership.",
    cta: "Support Gather",
    href: "/support",
    image: "/images/community-garden.webp",
    alt: "Community volunteers work together in a garden.",
  },
] as const;

/* Temporary, non-Gather editorial photography from Unsplash. These local image
   paths are intentionally isolated here so approved Gather photography can
   replace them without changing the section's layout or interaction model. */

export function AudiencePathways() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activePath = audiencePaths[activeIndex];

  const focusPath = (index: number) => {
    setActiveIndex(index);
    tabRefs.current[index]?.focus();
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex: number | null = null;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (index + 1) % audiencePaths.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = (index - 1 + audiencePaths.length) % audiencePaths.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = audiencePaths.length - 1;
    }

    if (nextIndex === null) return;
    event.preventDefault();
    focusPath(nextIndex);
  };

  return (
    <section
      className="audience-pathways"
      id="get-involved"
      aria-labelledby="audience-title"
    >
      <div className="site-container audience-pathways__intro">
        <div>
          <p className="eyebrow">Choose your path</p>
          <h2 id="audience-title">There&apos;s a place for you.</h2>
        </div>
        <p>
          Good food moves farther when every part of a community can take part.
          Find the role that fits how you want to help.
        </p>
      </div>

      <div className="site-container audience-explorer">
        <div
          className="audience-rail"
          role="tablist"
          aria-label="Ways to participate with Gather"
          aria-orientation="vertical"
        >
          {audiencePaths.map((path, index) => (
            <button
              className="audience-rail__choice"
              id={`audience-tab-${path.id}`}
              key={path.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              type="button"
              role="tab"
              aria-controls="audience-panel"
              aria-selected={activeIndex === index}
              tabIndex={activeIndex === index ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") setActiveIndex(index);
              }}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span aria-hidden="true">{path.number}</span>
              <strong>{path.title}</strong>
              <span className="audience-rail__line" aria-hidden="true" />
            </button>
          ))}
        </div>

        <div
          className="audience-panel"
          id="audience-panel"
          role="tabpanel"
          aria-labelledby={`audience-tab-${activePath.id}`}
        >
          <div className="audience-panel__media">
            {audiencePaths.map((path, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  className="audience-image-layer"
                  data-active={isActive}
                  aria-hidden={!isActive}
                  key={path.id}
                >
                  <Image
                    className={`audience-image audience-image--${path.id}`}
                    src={path.image}
                    alt={isActive ? path.alt : ""}
                    fill
                    sizes="(max-width: 840px) 58vw, (max-width: 1100px) 61vw, 62vw"
                  />
                </div>
              );
            })}
          </div>
          <div className="audience-panel__story" key={activePath.id}>
            <div>
              <p className="audience-panel__number" aria-hidden="true">
                Path {activePath.number}
              </p>
              <h3>{activePath.title}</h3>
            </div>
            <div>
              <p>{activePath.description}</p>
              <Link className="directional-link" href={activePath.href}>
                {activePath.cta}
                <span className="link-arrow" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="site-container audience-stories">
        {audiencePaths.map((path) => (
          <article className="audience-story" key={path.id}>
            <div className="audience-story__media">
              <Image
                className={`audience-image audience-image--${path.id}`}
                src={path.image}
                alt={path.alt}
                fill
                sizes="(max-width: 767px) calc(100vw - 40px), 1px"
              />
            </div>
            <div className="audience-story__copy">
              <p className="audience-story__number" aria-hidden="true">
                {path.number}
              </p>
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
