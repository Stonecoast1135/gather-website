import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ParticipationClose } from "@/components/participation-close";
import styles from "../cluster-pages.module.css";

export const metadata: Metadata = {
  title: "Schools & Programs | Gather",
  description:
    "See how Gather is designed to help students find meaningful local food-rescue service and maintain clearer records of completed activity.",
};

const studentSteps = [
  ["01", "Find a rescue"],
  ["02", "Review details"],
  ["03", "Claim what fits"],
  ["04", "Complete pickup and delivery"],
  ["05", "Record completed activity"],
] as const;

export default function SchoolsPage() {
  return (
    <main className={styles.page} id="main-content">
      <section className={styles.schoolsHero} aria-labelledby="schools-title">
        <div className={`site-container ${styles.schoolsHeroGrid}`}>
          <div className={styles.schoolsHeroCopy}>
            <p className="eyebrow">Schools & programs</p>
            <h1 id="schools-title">Meaningful service, closer to home.</h1>
            <p>
              Gather is designed to help students find local food-rescue opportunities
              and maintain clearer records of completed service activity.
            </p>
            <div className={styles.schoolsHeroActions}>
              <Link className="button button--primary" href="/volunteers">
                Explore Gather for students
                <span className="button-arrow" aria-hidden="true" />
              </Link>
              <Link className="directional-link" href="#service-records">
                See how records work
                <span className="link-arrow" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className={styles.schoolsHeroMedia}>
            {/* Temporary, non-Gather documentary photography from Unsplash.
                It does not depict a Gather program or partnership. See TEMPORARY-IMAGERY.md. */}
            <Image
              src="/images/audience-schools-service.webp"
              alt="People work together to prepare packaged meals for distribution."
              fill
              preload
              sizes="(max-width: 767px) 100vw, 52vw"
            />
            <p><span>Local service</span><span>Completed activity</span><span>Community context</span></p>
          </div>
        </div>
      </section>

      <section className={styles.realService} aria-labelledby="real-service-title">
        <div className={`site-container ${styles.realServiceGrid}`}>
          <div>
            <p className="eyebrow">Why students use Gather</p>
            <h2 id="real-service-title">Service that feels real.</h2>
          </div>
          <p>
            Food rescue gives service a clear local purpose: understand a need,
            complete a practical rescue, and see how that action connects to a community.
          </p>
          <dl className={styles.serviceValues}>
            <div><dt>Meaningful</dt><dd>Take part in work with a tangible local outcome.</dd></div>
            <div><dt>Flexible</dt><dd>Review available opportunities around a student&apos;s schedule.</dd></div>
            <div><dt>Visible</dt><dd>Build a clearer history from completed service activity.</dd></div>
          </dl>
        </div>
      </section>

      <section className={styles.recordsSection} id="service-records" aria-labelledby="records-title">
        <div className={`site-container ${styles.recordsGrid}`}>
          <div className={styles.recordsCopy}>
            <p className="eyebrow">Service records</p>
            <h2 id="records-title">Completed work, placed in context.</h2>
            <p>
              Gather is designed to record completed rescue activity so students can
              maintain a clearer history of how they have participated over time.
            </p>
            <p className={styles.recordsPolicy}>
              Each school, NHS chapter, club, scholarship, or service program sets its
              own rules for accepting service records.
            </p>
          </div>
          <div className={styles.serviceLedger} aria-label="Conceptual service record structure">
            <div className={styles.ledgerHeader}><span>Activity record</span><strong>Completed activity only</strong></div>
            <dl>
              <div><dt>Rescue status</dt><dd>Completion recorded</dd></div>
              <div><dt>Activity context</dt><dd>Pickup and delivery rescue</dd></div>
              <div><dt>Participation history</dt><dd>Builds from completed rescues</dd></div>
            </dl>
            <small>Conceptual structure. No student activity or sample totals are shown.</small>
          </div>
        </div>
      </section>

      <section className={styles.advisorsSection} aria-labelledby="advisors-title">
        <div className={`site-container ${styles.advisorsGrid}`}>
          <div className={styles.advisorsIntro}>
            <p className="eyebrow">For advisors & program leaders</p>
            <h2 id="advisors-title">Built for students. Useful to the people guiding them.</h2>
            <p>
              Advisors, service clubs, NHS chapters, and community programs may find
              clearer activity context useful as they guide students under their own policies.
            </p>
          </div>
          <div className={styles.advisorRows}>
            <article><span>01</span><h3>Opportunity discovery</h3><p>Help students understand a practical pathway into local service.</p></article>
            <article><span>02</span><h3>Activity context</h3><p>Give completed participation a clearer place in a student&apos;s history.</p></article>
            <article><span>03</span><h3>Future visibility</h3><p>As Gather grows, reporting possibilities may help programs understand participation over time.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.communityConnection} aria-labelledby="community-connection-title">
        <div className={`site-container ${styles.communityConnectionGrid}`}>
          <div className={styles.communityMedia}>
            <Image
              src="/images/audience-volunteers-service.webp"
              alt="Volunteers work together to organize packaged food."
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          </div>
          <div className={styles.communityCopy}>
            <p className="eyebrow">Community connection</p>
            <h2 id="community-connection-title">Hours matter. So does what those hours accomplish.</h2>
            <p>
              A food rescue connects a student&apos;s time to an active local process—food
              becomes available, a volunteer moves it, and an organization receives it.
            </p>
            <Link className="directional-link" href="/volunteers">
              Explore volunteering
              <span className="link-arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.studentProcess} aria-labelledby="student-process-title">
        <div className={`site-container ${styles.studentProcessHeading}`}>
          <p className="eyebrow">How a student participates</p>
          <h2 id="student-process-title">A practical route into service.</h2>
        </div>
        <ol className={`site-container ${styles.studentSteps}`}>
          {studentSteps.map(([number, label]) => (
            <li key={number}><span>{number}</span><i aria-hidden="true" /><strong>{label}</strong></li>
          ))}
        </ol>
      </section>

      <ParticipationClose
        eyebrow="Start with service"
        title="Bring meaningful service closer to home."
        description="Explore the volunteer pathway or see how completed rescues fit into Gather's wider community system."
        primary={{ href: "/volunteers", label: "Explore volunteering" }}
        secondary={{ href: "/contact#schools", label: "Talk about your program" }}
        variant="paper"
      />
    </main>
  );
}
