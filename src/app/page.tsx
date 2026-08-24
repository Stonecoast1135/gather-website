import Image from "next/image";
import Link from "next/link";

import { AudiencePathways } from "@/components/audience-pathways";

const participants = [
  {
    number: "01",
    title: "Businesses",
    description: "Share appropriate surplus food",
  },
  {
    number: "02",
    title: "Recipient organizations",
    description: "Receive food they can use",
  },
  {
    number: "03",
    title: "Volunteers",
    description: "Help move each rescue",
  },
];

const missionPillars = [
  {
    number: "01",
    title: "Reduce food waste",
    description: "Keep appropriate food in use and out of the waste stream.",
  },
  {
    number: "02",
    title: "Fight hunger",
    description: "Help more good food reach organizations serving their communities.",
  },
  {
    number: "03",
    title: "Make service easier",
    description: "Create a clearer path for students and adults to help locally.",
  },
];

const rescueChapters = [
  {
    number: "01",
    label: "Share",
    image: "/images/audience-business-bakery.webp",
    alt: "A baker arranges fresh loaves on a tray.",
    steps: ["Appropriate surplus is shared", "An opportunity becomes available"],
  },
  {
    number: "02",
    label: "Move",
    image: "/images/audience-volunteers-service.webp",
    alt: "Volunteers organize packaged food for distribution.",
    steps: ["A volunteer claims it", "Pickup is coordinated"],
  },
  {
    number: "03",
    label: "Complete",
    image: "/images/audience-recipient-produce.webp",
    alt: "A person carries a box filled with fresh vegetables.",
    steps: ["Delivery is confirmed", "Impact and service activity are recorded"],
  },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="home-hero" aria-labelledby="home-hero-title">
        <div className="hero-media">
          {/* Temporary editorial image until approved Gather photography is supplied.
              Source: unsplash.com/photos/qgHGDbbSNm8; it does not depict a Gather operation. */}
          <Image
            className="hero-image"
            src="/images/hero-community-tomatoes.webp"
            alt="Several people hold a bowl filled with freshly harvested tomatoes."
            fill
            priority
            sizes="100vw"
          />
          <span className="hero-photo-veil" aria-hidden="true" />
        </div>

        <div className="site-container hero-shell">
          <div className="hero-copy">
            <p className="eyebrow hero-kicker">Food rescue, rooted in community</p>
            <h1 id="home-hero-title">
              Good food.
              <br />
              Good people.
            </h1>
            <p className="hero-lead">
              Gather brings businesses, recipient organizations, and volunteers
              together to help good food move where it can do more.
            </p>

            <div className="hero-actions">
              <Link className="button button--light" href="/get-involved">
                Join the movement
                <span className="button-arrow" aria-hidden="true" />
              </Link>
              <Link className="button button--ghost" href="/how-it-works">
                See how it works
                <span className="button-arrow" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <ol
            className="hero-participants"
            aria-label="The three groups Gather connects"
          >
            {participants.map((participant) => (
              <li key={participant.title}>
                <span className="participant-number" aria-hidden="true">
                  {participant.number}
                </span>
                <span className="participant-copy">
                  <strong>{participant.title}</strong>
                  <span>{participant.description}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>

      </section>

      <section
        className="opening-transition"
        id="our-purpose"
        aria-labelledby="purpose-title"
      >
        <div className="site-container opening-transition__intro">
          <div>
            <p className="eyebrow">Our shared purpose</p>
            <h2 id="purpose-title">
              Less waste. More nourishment. Stronger communities.
            </h2>
          </div>

          <div className="opening-transition__copy">
            <p>
              Gather is building a clearer way for appropriate surplus food to
              reach local organizations—with volunteers helping each rescue
              happen.
            </p>
            <Link className="directional-link" href="/how-it-works">
              Follow the rescue
              <span className="link-arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <ol className="site-container mission-pillars">
          {missionPillars.map((pillar) => (
            <li key={pillar.title}>
              <span className="mission-pillars__number" aria-hidden="true">
                {pillar.number}
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <AudiencePathways />

      <section
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
                  sizes="(max-width: 767px) calc(100vw - 72px), 31vw"
                />
                <span>{chapter.label}</span>
              </div>
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
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
