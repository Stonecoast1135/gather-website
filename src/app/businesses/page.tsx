import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ParticipationClose } from "@/components/participation-close";
import styles from "../participation-pages.module.css";

export const metadata: Metadata = {
  title: "Gather for Businesses",
  description:
    "Learn how businesses can make appropriate surplus food available for coordinated pickup, handoff, and completion confirmation.",
};

const businessSteps = [
  ["01", "Share what is available", "Make appropriate surplus food available."],
  ["02", "Add useful details", "Describe food, timing, location, and handling context."],
  ["03", "Coordinate the rescue", "Gather helps connect the information needed for pickup."],
  ["04", "Complete the handoff", "Food is collected during the coordinated pickup window."],
  ["05", "Confirm completion", "Delivery and completion can be confirmed."],
  ["06", "Build a history", "Participation can be understood over time."],
] as const;

const businessDetails = [
  ["Food details", "Food type and approximate quantity"],
  ["Availability", "A practical pickup window"],
  ["Location", "Address and useful access context"],
  ["Handling notes", "Relevant storage or handling information"],
  ["Contact person", "Who can help coordinate the handoff"],
  ["Additional context", "Anything else useful for a smooth pickup"],
] as const;

export default function BusinessesPage() {
  return (
    <main className={`${styles.page} ${styles.businessPage}`} id="main-content">
      <section className={styles.businessHero} aria-labelledby="business-title">
        <div className={`site-container ${styles.businessHeroGrid}`}>
          <div className={styles.businessHeroCopy}>
            <p className="eyebrow">For businesses</p>
            <h1 id="business-title">Turn surplus into community impact.</h1>
            <p>
              Gather provides a clearer way to make appropriate surplus food
              available for coordinated rescue.
            </p>
            <div className={styles.businessHeroActions}>
              <Link className="button button--primary" href="/contact">
                Join as a business
                <span className="button-arrow" aria-hidden="true" />
              </Link>
              <Link className="directional-link" href="/contact">
                Talk to Gather
                <span className="link-arrow" aria-hidden="true" />
              </Link>
            </div>
            <div className={styles.businessHeroRule} aria-hidden="true"><i /></div>
            <p className={styles.businessHeroNote}>Built for practical details, clear handoffs, and busy teams.</p>
          </div>
          <div className={styles.businessHeroMedia}>
            <Image
              src="/images/audience-business-bakery.webp"
              alt="A baker arranges fresh bread in a working kitchen."
              fill
              loading="eager"
              sizes="(max-width: 767px) 100vw, 52vw"
            />
          </div>
        </div>
      </section>

      <section className={styles.businessProcess} aria-labelledby="business-process-title">
        <div className={`site-container ${styles.businessProcessIntro}`}>
          <div>
            <p className="eyebrow">A simple operational flow</p>
            <h2 id="business-process-title">Clear enough to fit the day.</h2>
          </div>
          <p>
            The process keeps the information businesses, volunteers, and
            recipient organizations need in one coordinated sequence.
          </p>
        </div>
        <ol className={`site-container ${styles.businessSteps}`}>
          {businessSteps.map(([number, title, copy]) => (
            <li key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.respectOperations} aria-labelledby="operations-title">
        <div className={`site-container ${styles.respectGrid}`}>
          <div>
            <p className="eyebrow">Respect your operations</p>
            <h2 id="operations-title">Designed around busy teams.</h2>
          </div>
          <div className={styles.operationsLedger}>
            <article><span>01</span><h3>Clear pickup details</h3><p>Share the context a volunteer needs before arriving.</p></article>
            <article><span>02</span><h3>Less back-and-forth</h3><p>Useful information supports a more direct coordination process.</p></article>
            <article><span>03</span><h3>Completion visibility</h3><p>Know when the rescue has reached completion.</p></article>
            <article><span>04</span><h3>Appropriate food</h3><p>Only make food available when it is suitable for rescue.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.businessNeeds} aria-labelledby="business-needs-title">
        <div className={`site-container ${styles.businessNeedsGrid}`}>
          <div className={styles.businessNeedsIntro}>
            <p className="eyebrow">What Gather needs from you</p>
            <h2 id="business-needs-title">Good rescues start with clear information.</h2>
            <p>
              A few practical details help everyone understand the food and
              prepare for a coordinated pickup.
            </p>
            <div className={styles.businessNeedsMedia}>
              <Image
                src="/images/hero-community-tomatoes.webp"
                alt="Several people hold a bowl of freshly harvested tomatoes."
                fill
                sizes="(max-width: 767px) 100vw, 32vw"
              />
            </div>
          </div>
          <dl className={styles.requirementsLedger}>
            {businessDetails.map(([label, detail], index) => (
              <div key={label}>
                <dt><span>{String(index + 1).padStart(2, "0")}</span>{label}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.handoffSection} aria-labelledby="handoff-title">
        <div className={`site-container ${styles.handoffGrid}`}>
          <div className={styles.handoffMedia}>
            <Image
              src="/images/audience-recipient-produce.webp"
              alt="A person carries a box of vegetables for a handoff."
              fill
              sizes="(max-width: 767px) 100vw, 46vw"
            />
          </div>
          <div className={styles.handoffCopy}>
            <p className="eyebrow">Handoff & confirmation</p>
            <h2 id="handoff-title">A shared plan through completion.</h2>
            <p>
              Pickup is coordinated around the available details. Food is handed
              off during the agreed window, then delivery and completion can be confirmed.
            </p>
            <Link className="directional-link" href="/organizations">
              See the recipient organization pathway
              <span className="link-arrow" aria-hidden="true" />
            </Link>
            <ol>
              <li><span>Pickup</span><i aria-hidden="true" /></li>
              <li><span>Handoff</span><i aria-hidden="true" /></li>
              <li><span>Delivery</span><i aria-hidden="true" /></li>
              <li><span>Complete</span></li>
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.businessImpact} aria-labelledby="business-impact-title">
        <div className={`site-container ${styles.businessImpactGrid}`}>
          <div>
            <p className="eyebrow">Impact over time</p>
            <h2 id="business-impact-title">A contribution you can understand.</h2>
            <p>
              As verified information becomes available, businesses may be able
              to see completed rescues, participation history, and food redirected over time.
            </p>
          </div>
          <dl className={styles.impactInstrument}>
            <div><dt>Rescues completed</dt><dd>—</dd></div>
            <div><dt>Food redirected</dt><dd>—</dd></div>
            <div><dt>Participation history</dt><dd>Early-stage</dd></div>
          </dl>
          <p className={styles.businessSafety}>
            <strong>Safety-minded by design.</strong> Clear handling information,
            appropriate food, responsible communication, and coordinated details
            support a thoughtful rescue process. Gather does not guarantee food safety.
          </p>
        </div>
      </section>

      <ParticipationClose
        eyebrow="Start a conversation"
        title="Share good food without unnecessary complexity."
        description="Tell Gather about your business and the kind of appropriate surplus you may have available."
        primary={{ href: "/contact", label: "Join as a business" }}
        secondary={{ href: "/contact", label: "Talk to Gather" }}
      />
    </main>
  );
}
