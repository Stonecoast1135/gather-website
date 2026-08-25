import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ParticipationClose } from "@/components/participation-close";
import styles from "../participation-pages.module.css";

export const metadata: Metadata = {
  title: "Volunteer with Gather",
  description:
    "Learn how volunteers can claim available local food rescues, help with pickup and delivery, and keep a record of completed activity.",
};

const volunteerSteps = [
  ["01", "Find an opportunity", "Browse rescues that are available in your area."],
  ["02", "Review the details", "Check the food, locations, timing, and handoff notes."],
  ["03", "Claim what fits", "Choose an available rescue that works for your schedule."],
  ["04", "Pick up the food", "Follow the shared pickup details and coordinate the handoff."],
  ["05", "Deliver it", "Bring the food to the recipient organization."],
  ["06", "Complete the rescue", "Confirmation closes the rescue and records the activity."],
] as const;

const trustItems = [
  ["Clear details", "See the information needed to understand an available rescue."],
  ["Coordinated handoffs", "Pickup and delivery happen through a shared, communicated plan."],
  ["Completion confirmation", "A finished rescue can be recorded as completed activity."],
  ["Safety-minded guidance", "Handling notes and communication help volunteers act responsibly."],
] as const;

export default function VolunteersPage() {
  return (
    <main className={`${styles.page} ${styles.volunteerPage}`} id="main-content">
      <section className={styles.volunteerHero} aria-labelledby="volunteer-title">
        <Image
          className={styles.volunteerHeroImage}
          src="/images/audience-volunteers-service.webp"
          alt="Volunteers work together to organize packaged food."
          fill
          loading="eager"
          sizes="100vw"
        />
        <span className={styles.volunteerHeroVeil} aria-hidden="true" />
        <div className={`site-container ${styles.volunteerHeroInner}`}>
          <div className={styles.volunteerHeroCopy}>
            <p className="eyebrow">Volunteer with Gather</p>
            <h1 id="volunteer-title">Make an impact, one rescue at a time.</h1>
            <p>
              Find available local rescue opportunities, take part when it fits,
              and help move appropriate surplus food where it can be used.
            </p>
            <div className={styles.heroActions}>
              <Link className="button button--light" href="/download">
                Download Gather
                <span className="button-arrow" aria-hidden="true" />
              </Link>
              <Link className="button button--ghost" href="#volunteer-process">
                Explore the process
                <span className="button-arrow" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <ul className={styles.volunteerHeroNotes} aria-label="Volunteer highlights">
            <li><span>01</span><strong>Local opportunities</strong><small>Available rescues nearby</small></li>
            <li><span>02</span><strong>Flexible rhythm</strong><small>Choose what fits</small></li>
            <li><span>03</span><strong>Activity records</strong><small>See completed service</small></li>
          </ul>
        </div>
      </section>

      <section className={styles.volunteerProcess} id="volunteer-process" aria-labelledby="volunteer-process-title">
        <div className={`site-container ${styles.sectionHeadingCentered}`}>
          <p className="eyebrow">How volunteering works</p>
          <h2 id="volunteer-process-title">A clear path from claim to completion.</h2>
          <p>Each opportunity carries the details needed to understand the rescue before you take part.</p>
        </div>
        <ol className={`site-container ${styles.volunteerSteps}`}>
          {volunteerSteps.map(([number, title, description]) => (
            <li key={number}>
              <span>{number}</span>
              <i aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.flexibility} aria-labelledby="flexibility-title">
        <div className={`site-container ${styles.flexibilityGrid}`}>
          <div className={styles.flexibilityCopy}>
            <p className="eyebrow">Flexibility</p>
            <h2 id="flexibility-title">Help when it fits your life.</h2>
            <p>
              Available rescues may fit different schedules. Students and adults
              can review local opportunities and choose whether a rescue works for them.
            </p>
            <dl className={styles.scheduleNotes}>
              <div><dt>When</dt><dd>Review the pickup window before claiming.</dd></div>
              <div><dt>Where</dt><dd>See the local pickup and delivery context.</dd></div>
              <div><dt>Whether</dt><dd>Choose freely—availability is never implied.</dd></div>
            </dl>
          </div>
          <div className={styles.flexibilityMedia}>
            <Image
              src="/images/hero-community-tomatoes.webp"
              alt="Several people steady a bowl of freshly harvested tomatoes together."
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
            />
            <div className={styles.scheduleDial} aria-hidden="true">
              <span>YOUR TIME</span>
              <i />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.serviceRecords} aria-labelledby="service-records-title">
        <div className={`site-container ${styles.serviceRecordsGrid}`}>
          <div>
            <p className="eyebrow">Service activity</p>
            <h2 id="service-records-title">A record of the work you complete.</h2>
            <p>
              Gather is designed to maintain a history of completed rescues and
              service activity so volunteers can understand their participation over time.
            </p>
            <p className={styles.policyNote}>
              Acceptance of service records depends on each school, chapter, or
              program&apos;s own policies.
            </p>
          </div>
          <div className={styles.recordInstrument} aria-label="Example early service record state">
            <p><span>Activity history</span><strong>Ready for your first completed rescue</strong></p>
            <dl>
              <div><dt>Completed rescues</dt><dd>—</dd></div>
              <div><dt>Service activity</dt><dd>—</dd></div>
              <div><dt>Personal impact</dt><dd>Builds over time</dd></div>
            </dl>
            <small>No sample totals are shown. Your history reflects completed activity.</small>
          </div>
        </div>
      </section>

      <section className={styles.volunteerImpact} aria-labelledby="volunteer-impact-title">
        <div className={`site-container ${styles.volunteerImpactGrid}`}>
          <div className={styles.volunteerImpactIntro}>
            <p className="eyebrow">Personal impact</p>
            <h2 id="volunteer-impact-title">See your contribution take shape.</h2>
            <p>
              Over time, completed rescues, service activity, and verified food
              movement can form a clearer picture of how you have helped locally.
            </p>
          </div>
          <div className={styles.volunteerImpactMedia}>
            <Image
              src="/images/audience-recipient-produce.webp"
              alt="A person carries a box filled with fresh vegetables."
              fill
              sizes="(max-width: 767px) 100vw, 42vw"
            />
          </div>
          <div className={styles.trustLedger}>
            {trustItems.map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ParticipationClose
        eyebrow="Ready to help"
        title="Join the movement."
        description="Choose available rescues that fit your life and help good food move through your community."
        primary={{ href: "/download", label: "Download Gather" }}
        secondary={{ href: "/how-it-works", label: "See how Gather works" }}
      />
    </main>
  );
}
