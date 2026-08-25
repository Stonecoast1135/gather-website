import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ParticipationClose } from "@/components/participation-close";
import styles from "../cluster-pages.module.css";

export const metadata: Metadata = {
  title: "Impact | Gather",
  description:
    "See what Gather intends to measure and how verified rescue activity will shape transparent public impact reporting over time.",
};

const metrics = [
  ["Food rescued", "Verified quantities of appropriate food moved through completed rescues."],
  ["Rescues completed", "Opportunities that reach confirmed completion."],
  ["Volunteer hours", "Recorded service activity connected to completed rescues."],
  ["Participating businesses", "Businesses with verified participation in the rescue system."],
  ["Recipient organizations", "Organizations with verified participation in completed rescues."],
] as const;

const reportRows = [
  ["Food rescued", "Verified food quantities", "Awaiting meaningful data"],
  ["Completed rescues", "Confirmed rescue completion", "Awaiting meaningful data"],
  ["Volunteer service", "Recorded activity tied to completion", "Awaiting meaningful data"],
  ["Participation", "Verified business and recipient activity", "Awaiting meaningful data"],
] as const;

export default function ImpactPage() {
  return (
    <main className={styles.page} id="main-content">
      <section className={styles.impactHero} aria-labelledby="impact-title">
        <div className={`site-container ${styles.impactHeroGrid}`}>
          <div className={styles.impactHeroCopy}>
            <p className="eyebrow">Gather impact</p>
            <h1 id="impact-title">Real change, measured honestly.</h1>
            <p>
              Gather is building public impact reporting around verified rescue
              activity—not estimates made simply to look impressive.
            </p>
            <div className={styles.heroActions}>
              <Link className="button button--light" href="#what-we-measure">
                See what we measure
                <span className="button-arrow" aria-hidden="true" />
              </Link>
              <Link className="button button--ghost" href="/get-involved">
                Join the movement
                <span className="button-arrow" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className={styles.impactHeroReport} aria-label="Current public reporting status">
            <div className={styles.reportMeta}><span>Public impact field</span><span>Status / early-stage</span></div>
            <div className={styles.reportValue}><span>Verified public total</span><strong>—</strong></div>
            <p>Figures will appear when meaningful verified activity is available to report.</p>
            <div className={styles.reportPhoto}>
              {/* Temporary, non-Gather documentary photography from Unsplash.
                  It does not depict a Gather operation. See TEMPORARY-IMAGERY.md. */}
              <Image
                src="/images/hero-community-tomatoes.webp"
                alt="Several people hold a bowl of freshly harvested tomatoes together."
                fill
                priority
                sizes="(max-width: 767px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.metricsSection} id="what-we-measure" aria-labelledby="metrics-title">
        <div className={`site-container ${styles.metricsHeading}`}>
          <p className="eyebrow">What Gather measures</p>
          <h2 id="metrics-title">The public record will start with what can be verified.</h2>
          <p>One honest early-stage state now. Meaningful figures when the underlying activity is ready.</p>
        </div>
        <dl className={`site-container ${styles.metricRows}`}>
          {metrics.map(([label, definition], index) => (
            <div key={label}>
              <dt><span>{String(index + 1).padStart(2, "0")}</span>{label}</dt>
              <dd className={styles.metricDash}>—</dd>
              <dd>{definition}</dd>
            </div>
          ))}
        </dl>
        <p className={`site-container ${styles.metricsStatus}`}>Public figures will appear as meaningful verified data becomes available.</p>
      </section>

      <section className={styles.verificationSection} aria-labelledby="verification-title">
        <div className={`site-container ${styles.verificationGrid}`}>
          <div>
            <p className="eyebrow">Why verification matters</p>
            <h2 id="verification-title">Impact should mean something.</h2>
            <p>
              Completed rescues matter more than posted opportunities. Food quantities
              should be reported only where verified, and recorded service should connect
              to activity that actually reached completion.
            </p>
          </div>
          <ol className={styles.verificationPath}>
            <li><span>01</span><strong>Opportunity</strong><small>Food becomes available</small></li>
            <li><span>02</span><strong>Completed rescue</strong><small>Pickup and delivery reach completion</small></li>
            <li><span>03</span><strong>Confirmed activity</strong><small>Relevant completion is recorded</small></li>
            <li><span>04</span><strong>Public impact</strong><small>Verified information can be reported</small></li>
          </ol>
        </div>
      </section>

      <section className={styles.outcomesSection} aria-labelledby="outcomes-title">
        <div className={`site-container ${styles.outcomesGrid}`}>
          <div className={styles.outcomesHeading}>
            <p className="eyebrow">Three connected outcomes</p>
            <h2 id="outcomes-title">Food waste. Hunger. Service.</h2>
          </div>
          <ol className={styles.outcomeStatements}>
            <li><span>01</span><strong>Reduce unnecessary food waste.</strong><p>Help appropriate surplus food move toward a useful next destination.</p></li>
            <li><span>02</span><strong>Help useful food reach organizations that can use it.</strong><p>Keep suitability, capacity, and coordination in the process.</p></li>
            <li><span>03</span><strong>Make meaningful community service easier to access.</strong><p>Connect volunteer time to a tangible local rescue.</p></li>
          </ol>
          <div className={styles.outcomesMedia}>
            <Image
              src="/images/audience-recipient-produce.webp"
              alt="A person carries a box filled with fresh vegetables."
              fill
              sizes="(max-width: 767px) 100vw, 38vw"
            />
          </div>
        </div>
      </section>

      <section className={styles.publicReporting} aria-labelledby="reporting-title">
        <div className={`site-container ${styles.publicReportingGrid}`}>
          <div className={styles.publicReportingIntro}>
            <p className="eyebrow">Public reporting</p>
            <h2 id="reporting-title">A reporting system designed before the numbers arrive.</h2>
            <p>
              Definitions, status, and the basis for each figure should remain visible
              so future reporting can be understood—not just admired.
            </p>
          </div>
          <div className={styles.reportingTable} role="table" aria-label="Planned public impact reporting categories">
            <div role="row" className={styles.reportingTableHeader}>
              <span role="columnheader">Measure</span><span role="columnheader">Definition</span><span role="columnheader">Current status</span>
            </div>
            {reportRows.map(([measure, definition, status]) => (
              <div role="row" key={measure}>
                <strong role="cell">{measure}</strong><span role="cell">{definition}</span><span role="cell">{status}</span>
              </div>
            ))}
          </div>
          <p className={styles.methodologyNote}>
            Reporting cadence and formal methodology details remain unset. Gather will
            publish them only when they are ready and truthful.
          </p>
        </div>
      </section>

      <section className={styles.localFirst} aria-labelledby="local-first-title">
        <div className={`site-container ${styles.localFirstGrid}`}>
          <div className={styles.localMark} aria-hidden="true"><span>CO</span><i /></div>
          <div>
            <p className="eyebrow">Local first</p>
            <h2 id="local-first-title">Starting local. Built to grow.</h2>
            <p>
              Gather is initially focused around Colorado and Denver-area communities,
              learning from local rescue needs while building with future growth in mind.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.transparencySection} aria-labelledby="transparency-title">
        <div className={`site-container ${styles.transparencyGrid}`}>
          <p className="eyebrow">Transparency</p>
          <h2 id="transparency-title">Report what&apos;s real. Improve what isn&apos;t.</h2>
          <p>
            Gather intends to make public reporting more useful as real activity grows—
            with definitions, limitations, and unfinished work kept visible.
          </p>
          <Link className="directional-link" href="/how-it-works">
            See how a rescue reaches completion
            <span className="link-arrow" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <ParticipationClose
        eyebrow="Build the next chapter"
        title="Help create an impact story worth reporting."
        description="Join Gather's connected rescue system and help real community activity become the record."
        primary={{ href: "/get-involved", label: "Join the movement" }}
        secondary={{ href: "/get-involved#choose-your-path", label: "Support Gather" }}
      />
    </main>
  );
}
