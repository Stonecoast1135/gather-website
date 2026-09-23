import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import styles from "../core-pages.module.css";

export const metadata: Metadata = {
  title: "Open Gather",
  description:
    "Create a Gather account on the web, set your area, and get ready for eligible local rescue opportunities.",
};

const platforms = [
  ["iPhone", "Coming soon", "The iPhone app is not publicly available yet"],
  ["Android", "Coming soon", "The Android app is not publicly available yet"],
  ["Web", "Registration open", "Use Gather in your browser at my.gatherforward.org"],
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
            <p className="eyebrow">Open Gather</p>
            <h1 id="download-title">Your Gather account starts here.</h1>
            <p>
              Create and verify your account, choose your area, and finish your profile.
              We are recruiting local food partners. Eligible rescues appear only
              when approved partner operations are open and food is available.
            </p>
            <div className={styles.downloadStatus}>
              <span aria-hidden="true" />
              Web registration is open · Native apps are not released
            </div>
            <div className={styles.heroActions}>
              <Link className="button button--light" href="https://my.gatherforward.org/">
                Open Gather / create an account
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
                src="/images/produce-in-motion.webp"
                alt="A person carries fresh produce along a city street."
                fill
                preload
                sizes="(max-width: 767px) 88vw, 35vw"
              />
            </div>
            <div className={styles.productFrame} aria-label="Conceptual Gather rescue flow">
              <div className={styles.productFrameTop}>
                <strong>Gather</strong>
                <span>Product preview</span>
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

      <section className={styles.platformSection} id="availability" aria-labelledby="platform-title">
        <div className={`site-container ${styles.platformGrid}`}>
          <div className={styles.platformIntro}>
            <p className="eyebrow">Platform availability</p>
            <h2 id="platform-title">Start on the web.</h2>
            <p>
              Web signup is open to volunteers, businesses, and recipient organizations.
              Partners remain pending until Operations approves them. Account
              creation does not authorize live food pickups or earn service hours.
            </p>
          </div>
          <dl className={styles.platformRows}>
            {platforms.map(([name, state, note], index) => (
              <div key={name}>
                <dt><span>{String(index + 1).padStart(2, "0")}</span>{name}</dt>
                <dd><strong>{state}</strong><small>{note}</small>{name === "Web" && <Link className="directional-link" href="https://my.gatherforward.org/">Open Gather</Link>}</dd>
                <i aria-hidden="true" />
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.productStory} aria-labelledby="product-story-title">
        <div className={`site-container ${styles.productStoryGrid}`}>
          <div className={styles.productStoryHeading}>
            <div>
              <p className="eyebrow">One rescue, clearly connected</p>
              <h2 id="product-story-title">Built around the work, not around more screen time.</h2>
            </div>
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

      <section className={styles.downloadClose} aria-labelledby="download-close-title">
        <div className={`site-container ${styles.downloadCloseGrid}`}>
          <div>
            <p className="eyebrow">Join Gather on the web</p>
            <h2 id="download-close-title">Make your account. Stay ready.</h2>
          </div>
          <div>
            <p>Use a current browser to create an account. If a social app’s embedded browser cannot request permissions, open my.gatherforward.org in Safari or Chrome. On iPhone or iPad, add Gather to your Home Screen to enable web push.</p>
            <div className={styles.closeActions}>
              <Link className="button button--primary" href="https://my.gatherforward.org/">
                Open Gather
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
