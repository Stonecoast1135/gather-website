import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { RescueStory } from "@/components/rescue-story";
import styles from "./how-it-works.module.css";

export const metadata: Metadata = {
  title: "How It Works | Gather",
  description:
    "Follow how appropriate surplus food moves from a business to a recipient organization with a volunteer helping complete the rescue.",
};

export default function HowItWorksPage() {
  return (
    <main className={styles.page} id="main-content">
      <section className={styles.hero} aria-labelledby="how-hero-title">
        <div className={`site-container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">How Gather works</p>
            <h1 id="how-hero-title">How a rescue comes to life</h1>
            <p className={styles.heroLead}>
              Gather helps appropriate surplus food move from businesses to
              recipient organizations, with volunteers helping complete each
              rescue.
            </p>
            <div className={styles.heroActions}>
              <Link className="button button--primary" href="/get-involved">
                Join the movement
                <span className="button-arrow" aria-hidden="true" />
              </Link>
              <Link className="directional-link" href="#rescue-journey">
                Explore the journey
                <span className="link-arrow" aria-hidden="true" />
              </Link>
            </div>
            <p className={styles.heroNote}>
              Clear coordination. Confirmed completion.
            </p>
          </div>

          <div className={styles.heroMedia}>
            {/* Temporary, non-Gather editorial photography. The image does not
                depict a Gather rescue and can be replaced without changing layout. */}
            <div className={styles.heroPrimaryImage}>
              <Image
                src="/images/hero-community-tomatoes.webp"
                alt="Several people pass a bowl filled with freshly harvested tomatoes."
                fill
                preload
                sizes="(max-width: 767px) 100vw, (max-width: 1100px) 56vw, 58vw"
              />
            </div>
            <div className={styles.heroInsetDetail} aria-hidden="true">
              <span>One coordinated route</span>
              <strong>Business</strong>
              <i />
              <strong>Recipient</strong>
              <i />
              <strong>Volunteer</strong>
            </div>
            <p className={styles.heroCaption}>Food in motion / one shared route</p>
          </div>
        </div>
        <span className={styles.heroRoute} aria-hidden="true" />
      </section>

      <section className={styles.mission} aria-labelledby="mission-title">
        <div className={`site-container ${styles.missionIntro}`}>
          <p className="eyebrow">A coordinated chain</p>
          <h2 id="mission-title">One mission. Many hands.</h2>
          <p>
            A rescue works because businesses, recipient organizations, and
            volunteers each carry one part of the journey forward.
          </p>
        </div>
        <ol className={`site-container ${styles.participants}`}>
          <li>
            <span aria-hidden="true">01</span>
            <strong>Businesses</strong>
            <p>Share appropriate surplus details.</p>
          </li>
          <li>
            <span aria-hidden="true">02</span>
            <strong>Recipient organizations</strong>
            <p>Determine what fits their needs.</p>
          </li>
          <li>
            <span aria-hidden="true">03</span>
            <strong>Volunteers</strong>
            <p>Help complete pickup and delivery.</p>
          </li>
        </ol>
      </section>

      <RescueStory />
    </main>
  );
}
