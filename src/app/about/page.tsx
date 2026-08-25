import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import styles from "../core-pages.module.css";

export const metadata: Metadata = {
  title: "About Gather",
  description:
    "Learn why students started Gather to connect surplus food, community organizations, volunteers, and meaningful local service.",
};

const originSteps = [
  {
    number: "01",
    label: "Observe",
    title: "Useful food is still discarded.",
    description:
      "Businesses can have appropriate surplus at the end of a day, even while nearby organizations can put food to use.",
  },
  {
    number: "02",
    label: "Connect",
    title: "Separate needs can become one system.",
    description:
      "Gather is being built to help businesses, recipient organizations, and volunteers work from a clearer shared plan.",
  },
  {
    number: "03",
    label: "Move",
    title: "Volunteers can close the physical gap.",
    description:
      "A practical pickup and delivery turns willingness to help into a useful, local action.",
  },
  {
    number: "04",
    label: "Record",
    title: "Completed service should be easier to understand.",
    description:
      "Gather connects completed rescue activity with service and impact records that reflect what actually happened.",
  },
] as const;

const beliefs = [
  ["01", "Good food should have somewhere to go."],
  ["02", "Helping should be easier to start."],
  ["03", "Service should mean something."],
  ["04", "Impact should be reported honestly."],
  ["05", "Technology should support the community, not complicate it."],
] as const;

export default function AboutPage() {
  return (
    <main className={styles.page} id="main-content">
      <section className={styles.aboutHero} aria-labelledby="about-title">
        <div className={`site-container ${styles.aboutHeroGrid}`}>
          <div className={styles.aboutHeroCopy}>
            <p className="eyebrow">About Gather</p>
            <h1 id="about-title">Separate problems. One connected idea.</h1>
            <p>
              Gather began with students looking at food waste, hunger, and
              access to meaningful community service—and asking what could
              happen if those needs were connected.
            </p>
            <Link className="directional-link" href="#origin-story">
              Follow the idea
              <span className="link-arrow" aria-hidden="true" />
            </Link>
          </div>

          <div className={styles.aboutMosaic} aria-label="Community food and service moments">
            <figure className={styles.aboutMosaicPrimary}>
              {/* Temporary, non-Gather documentary photography from Unsplash.
                  It does not depict a Gather operation. See TEMPORARY-IMAGERY.md. */}
              <Image
                src="/images/hero-community-tomatoes.webp"
                alt="Several people hold a bowl of freshly harvested tomatoes together."
                fill
                priority
                sizes="(max-width: 767px) 78vw, 36vw"
              />
              <figcaption>Food</figcaption>
            </figure>
            <figure className={styles.aboutMosaicSecondary}>
              <Image
                src="/images/audience-volunteers-service.webp"
                alt="Volunteers work together to organize packaged food."
                fill
                sizes="(max-width: 767px) 54vw, 21vw"
              />
              <figcaption>People</figcaption>
            </figure>
            <figure className={styles.aboutMosaicTertiary}>
              <Image
                src="/images/audience-business-bakery.webp"
                alt="A baker arranges fresh bread in a working kitchen."
                fill
                sizes="(max-width: 767px) 42vw, 16vw"
              />
              <figcaption>Action</figcaption>
            </figure>
            <span className={styles.aboutMosaicRoute} aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
          </div>
        </div>
      </section>

      <section className={styles.originSection} id="origin-story" aria-labelledby="origin-title">
        <div className={`site-container ${styles.originGrid}`}>
          <div className={styles.originIntro}>
            <p className="eyebrow">The starting point</p>
            <h2 id="origin-title">We saw separate problems that could become one system.</h2>
            <p>
              The idea is not to add complexity. It is to make the movement of
              appropriate surplus food easier to coordinate and easier to understand.
            </p>
          </div>

          <ol className={styles.originSteps}>
            {originSteps.map((step) => (
              <li key={step.number}>
                <span className={styles.originMarker}>{step.number}</span>
                <p>{step.label}</p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>

          <div className={styles.originEvidence} aria-label="Documentary community context">
            <figure>
              <Image
                src="/images/audience-recipient-produce.webp"
                alt="A person carries a box filled with fresh vegetables."
                fill
                sizes="(max-width: 767px) 100vw, 29vw"
              />
            </figure>
            <p>
              Food, destination, volunteer, and record—each part becomes more
              useful when it connects to the next.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.studentSection} aria-labelledby="student-title">
        <div className={`site-container ${styles.studentGrid}`}>
          <div className={styles.studentPhoto}>
            {/* Temporary, non-Gather documentary photography from Unsplash.
                It does not depict Gather's founders or a Gather program. */}
            <Image
              src="/images/audience-schools-service.webp"
              alt="People work together to prepare packaged meals for distribution."
              fill
              sizes="(max-width: 767px) 100vw, 43vw"
            />
            <p>Community service, seen from the participant&apos;s side.</p>
          </div>
          <div className={styles.studentCopy}>
            <p className="eyebrow">Student-founded</p>
            <h2 id="student-title">Built by students. Built for a community bigger than us.</h2>
            <p>
              Gather was started by students. That perspective shapes the work:
              meaningful service should be approachable, practical, and connected
              to a real community need.
            </p>
            <p>
              The ambition is larger than any one group of volunteers. Gather is
              being designed as shared infrastructure for businesses, recipient
              organizations, volunteers, and programs that want to participate responsibly.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.beliefsSection} aria-labelledby="beliefs-title">
        <div className={`site-container ${styles.beliefsGrid}`}>
          <div className={styles.beliefsHeading}>
            <p className="eyebrow">What guides us</p>
            <h2 id="beliefs-title">Simple beliefs, carried into every rescue.</h2>
            <p>
              These principles keep the system focused on useful action, dignity,
              and a public story grounded in real activity.
            </p>
          </div>
          <ol className={styles.beliefRows}>
            {beliefs.map(([number, belief]) => (
              <li key={number}>
                <span>{number}</span>
                <strong>{belief}</strong>
                <i aria-hidden="true" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.rootsSection} aria-labelledby="roots-title">
        <div className={`site-container ${styles.rootsGrid}`}>
          <div className={styles.rootsMark} aria-hidden="true">
            <span>CO</span>
            <i />
          </div>
          <div className={styles.rootsCopy}>
            <p className="eyebrow">Colorado roots</p>
            <h2 id="roots-title">Starting local. Built to grow.</h2>
            <p>
              Gather is beginning around Colorado and the Denver-area community,
              learning from local needs while building a system that can grow thoughtfully.
            </p>
            <p className={styles.rootsNote}>
              This is a starting point—not a claim of broad coverage.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.aboutClose} aria-labelledby="about-close-title">
        <div className={`site-container ${styles.aboutCloseGrid}`}>
          <div>
            <p className="eyebrow">The next part is shared</p>
            <h2 id="about-close-title">A connected idea becomes real through participation.</h2>
          </div>
          <div>
            <p>
              Find the place that fits you, or see the rescue journey from surplus
              to completed community activity.
            </p>
            <div className={styles.closeActions}>
              <Link className="button button--light" href="/get-involved">
                Join the movement
                <span className="button-arrow" aria-hidden="true" />
              </Link>
              <Link className="button button--ghost" href="/how-it-works">
                See how Gather works
                <span className="button-arrow" aria-hidden="true" />
              </Link>
            </div>
            <Link className={styles.closeTextLink} href="/contact">
              Contact Gather
              <span className="link-arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
