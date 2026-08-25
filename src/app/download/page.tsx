import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import styles from "../core-pages.module.css";

export const metadata: Metadata = {
  title: "Download Gather",
  description:
    "See Gather's planned iPhone, Android, and web availability and explore the product flow while public destinations are coming soon.",
};

const platforms = [
  ["iPhone", "Coming soon", "Public App Store destination not yet configured"],
  ["Android", "Coming soon", "Public Google Play destination not yet configured"],
  ["Web", "Coming soon", "Authenticated web destination not yet configured"],
] as const;

const productSteps = [
  {
    number: "01",
    label: "Discover",
    title: "Find available rescue opportunities.",
    description:
      "See opportunities that are available to be claimed and understand where help is needed.",
  },
  {
    number: "02",
    label: "Prepare",
    title: "Review the rescue details.",
    description:
      "Understand the pickup, handoff, destination, and other relevant information before taking part.",
  },
  {
    number: "03",
    label: "Complete",
    title: "Move from pickup to delivery.",
    description:
      "Follow the coordinated rescue through transport, delivery, and completion confirmation.",
  },
  {
    number: "04",
    label: "Understand",
    title: "See completed activity and impact.",
    description:
      "Keep a clearer record of completed service activity and personal participation over time.",
  },
] as const;

export default function DownloadPage() {
  return (
    <main className={styles.page} id="main-content">
      <section className={styles.downloadHero} aria-labelledby="download-title">
        <div className={`site-container ${styles.downloadHeroGrid}`}>
          <div className={styles.downloadHeroCopy}>
            <p className="eyebrow">Download Gather</p>
            <h1 id="download-title">Your next rescue starts here.</h1>
            <p>
              Discover opportunities, review rescue details, complete pickups
              and deliveries, and stay connected to your completed activity.
            </p>
            <div className={styles.downloadStatus}>
              <span aria-hidden="true" />
              Coming soon to iPhone and Android
            </div>
            <div className={styles.heroActions}>
              <Link className="button button--light" href="#platforms">
                View availability
                <span className="button-arrow" aria-hidden="true" />
              </Link>
              <Link className="button button--ghost" href="/get-involved">
                Get involved now
                <span className="button-arrow" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className={styles.productScene}>
            <div className={styles.productPhoto}>
              {/* Temporary, non-Gather documentary photography from Unsplash.
                  It does not depict a Gather rescue. */}
              <Image
                src="/images/audience-volunteers-service.webp"
                alt="Volunteers work together to organize packaged food."
                fill
                priority
                sizes="(max-width: 767px) 88vw, 35vw"
              />
            </div>
            <div className={styles.productFrame} aria-label="Conceptual Gather rescue flow">
              <div className={styles.productFrameTop}>
                <strong>Gather</strong>
                <span>Concept preview</span>
              </div>
              <div className={styles.productOpportunity}>
                <span>Available rescue</span>
                <strong>Opportunity details</strong>
                <p>Pickup · handoff · destination</p>
              </div>
              <ol>
                <li className={styles.productComplete}><span />Pickup</li>
                <li className={styles.productActive}><span />Delivery</li>
                <li><span />Completed activity</li>
              </ol>
              <small>Abstract interface based on confirmed product behavior—not a live screenshot.</small>
            </div>
            <span className={styles.productRoute} aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className={styles.platformSection} id="platforms" aria-labelledby="platform-title">
        <div className={`site-container ${styles.platformGrid}`}>
          <div className={styles.platformIntro}>
            <p className="eyebrow">Platform availability</p>
            <h2 id="platform-title">Ready in design. Honest about release.</h2>
            <p>
              Public download and sign-in destinations have not been supplied.
              They can be connected here when each platform is genuinely available.
            </p>
          </div>
          <dl className={styles.platformRows}>
            {platforms.map(([name, state, note], index) => (
              <div key={name}>
                <dt><span>{String(index + 1).padStart(2, "0")}</span>{name}</dt>
                <dd><strong>{state}</strong><small>{note}</small></dd>
                <i aria-hidden="true" />
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.productStory} aria-labelledby="product-story-title">
        <div className={`site-container ${styles.productStoryGrid}`}>
          <div className={styles.productStoryHeading}>
            <p className="eyebrow">One rescue, clearly connected</p>
            <h2 id="product-story-title">Built around the work, not around more screen time.</h2>
          </div>
          <ol className={styles.productSteps}>
            {productSteps.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <p>{step.label}</p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.qrSection} aria-labelledby="qr-title">
        <div className={`site-container ${styles.qrGrid}`}>
          <div className={styles.qrPlaceholder} aria-hidden="true">
            <span /><span /><span />
            <i />
          </div>
          <div className={styles.qrCopy}>
            <p className="eyebrow">Future quick access</p>
            <h2 id="qr-title">One scan, when the destination is real.</h2>
            <p>
              QR access will appear here when Gather is publicly available.
              No placeholder code is shown because there is not yet a confirmed destination.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.downloadClose} aria-labelledby="download-close-title">
        <div className={`site-container ${styles.downloadCloseGrid}`}>
          <div>
            <p className="eyebrow">The work starts before the listing</p>
            <h2 id="download-close-title">While the app gets ready, the movement is already beginning.</h2>
          </div>
          <div>
            <p>Explore your role now, or see how a rescue moves from surplus to completed activity.</p>
            <div className={styles.closeActions}>
              <Link className="button button--primary" href="/get-involved">
                Get involved
                <span className="button-arrow" aria-hidden="true" />
              </Link>
              <Link className="directional-link" href="/how-it-works">
                See how Gather works
                <span className="link-arrow" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
