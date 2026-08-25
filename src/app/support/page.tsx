import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import styles from "../core-pages.module.css";

export const metadata: Metadata = {
  title: "Support Gather",
  description:
    "Explore ways individuals, companies, sponsors, foundations, and community partners may help Gather grow responsibly.",
};

const supportPathways = [
  {
    title: "Individuals",
    description:
      "Help build momentum for accessible, community-based food rescue and volunteer participation.",
  },
  {
    title: "Companies",
    description:
      "Explore support, participation, or a longer-term relationship around practical local impact.",
  },
  {
    title: "Sponsors",
    description:
      "Begin a conversation about supporting Gather's tools, outreach, and responsible growth.",
  },
  {
    title: "Foundations",
    description:
      "Discuss mission alignment and the infrastructure needed to build food rescue carefully.",
  },
  {
    title: "Community partners",
    description:
      "Bring local knowledge, shared goals, or operational perspective into the movement.",
  },
] as const;

const enablementAreas = [
  ["Platform", "Technology and infrastructure"],
  ["Access", "Volunteer participation and outreach"],
  ["Coordination", "Clearer operational systems"],
  ["Reliability", "Safety-minded tools and process improvement"],
  ["Community", "Relationships with businesses and organizations"],
  ["Growth", "Thoughtful preparation for future expansion"],
] as const;

export default function SupportPage() {
  return (
    <main className={styles.page} id="main-content">
      <section className={styles.supportHero} aria-labelledby="support-title">
        <div className={`site-container ${styles.supportHeroGrid}`}>
          <div className={styles.supportHeroCopy}>
            <p className="eyebrow">Support Gather</p>
            <h1 id="support-title">Power what comes next.</h1>
            <p>
              Support can help Gather build the systems, relationships, tools,
              and operational capacity needed to coordinate more food rescue responsibly.
            </p>
            <div className={styles.heroActions}>
              <Link className="button button--light" href="#support-pathways">
                Support Gather
                <span className="button-arrow" aria-hidden="true" />
              </Link>
              <Link className="button button--ghost" href="/contact">
                Partner with Gather
                <span className="button-arrow" aria-hidden="true" />
              </Link>
            </div>
            <p className={styles.supportAvailability}>
              A live contribution destination is not configured yet.
            </p>
          </div>

          <div className={styles.supportHeroField} aria-hidden="true">
            <div className={styles.supportOrbit}>
              <span>People</span>
              <span>Partners</span>
              <span>Capacity</span>
              <span>Rescue</span>
              <i />
            </div>
            <div className={styles.supportHeroPhoto}>
              {/* Temporary, non-Gather documentary photography from Unsplash.
                  It does not depict a Gather operation or supporter. */}
              <Image
                src="/images/audience-business-bakery.webp"
                alt=""
                fill
                priority
                sizes="(max-width: 767px) 72vw, 24vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.supportPaths} id="support-pathways" aria-labelledby="support-pathways-title">
        <div className={`site-container ${styles.supportPathsIntro}`}>
          <p className="eyebrow">Ways to stand behind the work</p>
          <h2 id="support-pathways-title">Different relationships. One shared direction.</h2>
          <p>
            Explore the pathway closest to you. These are conversation routes,
            not live payment options.
          </p>
        </div>

        <div className={`site-container ${styles.supportConstellation}`}>
          <div className={styles.supportPathList}>
            {supportPathways.map((pathway, index) => (
              <details key={pathway.title} open={index === 0}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{pathway.title}</strong>
                  <i aria-hidden="true" />
                </summary>
                <div>
                  <p>{pathway.description}</p>
                  <Link className="directional-link" href="/contact">
                    Start this conversation
                    <span className="link-arrow" aria-hidden="true" />
                  </Link>
                </div>
              </details>
            ))}
          </div>

          <div className={styles.supportCenter}>
            <p>What support enables</p>
            <strong>More capacity for useful, responsible rescue.</strong>
            <span>Technology</span>
            <span>Access</span>
            <span>Coordination</span>
            <span>Growth</span>
          </div>
        </div>
      </section>

      <section className={styles.enablementSection} aria-labelledby="enablement-title">
        <div className={`site-container ${styles.enablementGrid}`}>
          <div className={styles.enablementIntro}>
            <p className="eyebrow">Capacity, not a promise per dollar</p>
            <h2 id="enablement-title">Support the work behind every rescue.</h2>
            <p>
              Gather is not assigning invented percentages or dollar-to-impact
              ratios. These are the areas support may help strengthen as the work grows.
            </p>
          </div>
          <dl className={styles.enablementRows}>
            {enablementAreas.map(([label, value], index) => (
              <div key={label}>
                <dt><span>{String(index + 1).padStart(2, "0")}</span>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.partnerSection} aria-labelledby="partners-title">
        <div className={`site-container ${styles.partnerGrid}`}>
          <div>
            <p className="eyebrow">Future recognition</p>
            <h2 id="partners-title">Built with community behind it.</h2>
            <p>
              As approved sponsors and partners join the work, Gather may recognize
              those relationships here with context and care.
            </p>
          </div>
          <div className={styles.partnerFuture}>
            <div aria-hidden="true"><span /><span /><span /></div>
            <strong>Recognition begins when real partnerships do.</strong>
            <p>No sponsor or partner logos are displayed before approval.</p>
          </div>
        </div>
      </section>

      <section className={styles.supportTransparency} aria-labelledby="support-transparency-title">
        <div className={`site-container ${styles.supportTransparencyGrid}`}>
          <figure>
            {/* Temporary, non-Gather documentary photography from Unsplash.
                It does not depict a Gather operation or partnership. */}
            <Image
              src="/images/audience-recipient-produce.webp"
              alt="A person carries a box filled with fresh vegetables."
              fill
              sizes="(max-width: 767px) 100vw, 48vw"
            />
          </figure>
          <div>
            <p className="eyebrow">Transparency as the work grows</p>
            <h2 id="support-transparency-title">Make progress visible without getting ahead of the truth.</h2>
            <p>
              Gather intends to communicate clearly about activity and impact as
              meaningful verified information becomes available.
            </p>
            <Link className="directional-link" href="/impact">
              Explore our impact
              <span className="link-arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.supportClose} aria-labelledby="support-close-title">
        <div className={`site-container ${styles.supportCloseGrid}`}>
          <p className="eyebrow">Grow with intention</p>
          <h2 id="support-close-title">Help Gather grow the right way.</h2>
          <p>
            Begin with a conversation, or find another way to take part in the movement.
          </p>
          <div className={styles.closeActions}>
            <Link className="button button--primary" href="/contact">
              Talk to Gather
              <span className="button-arrow" aria-hidden="true" />
            </Link>
            <Link className="directional-link" href="/get-involved">
              Join the movement
              <span className="link-arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
