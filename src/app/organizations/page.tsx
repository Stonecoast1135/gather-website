import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ParticipationClose } from "@/components/participation-close";
import styles from "../cluster-pages.module.css";

export const metadata: Metadata = {
  title: "Recipient Organizations | Gather",
  description:
    "Learn how recipient organizations can coordinate appropriate incoming rescued food around their needs, preferences, timing, and capacity.",
};

const fitDetails = [
  ["Food type", "Consider whether the available food fits the people and programs you serve."],
  ["Quantity & capacity", "Review what your organization can reasonably receive, store, and use."],
  ["Timing", "Understand the expected handoff window before an incoming rescue is coordinated."],
  ["Operational context", "Account for relevant storage, handling, dietary, or program considerations."],
] as const;

const deliverySteps = [
  ["01", "Rescue details", "The available food and practical context are shared."],
  ["02", "Coordination", "A suitable receiving plan and handoff window can be established."],
  ["03", "Pickup & transport", "A volunteer completes the pickup and brings the food to the destination."],
  ["04", "Confirmation", "Delivery and completion can be confirmed."],
] as const;

export default function OrganizationsPage() {
  return (
    <main className={styles.page} id="main-content">
      <section className={styles.organizationsHero} aria-labelledby="organizations-title">
        <div className={`site-container ${styles.organizationsHeroGrid}`}>
          <div className={styles.organizationsHeroCopy}>
            <p className="eyebrow">Recipient organizations</p>
            <h1 id="organizations-title">Food that fits your mission.</h1>
            <p>
              Gather helps recipient organizations coordinate appropriate incoming
              rescued food while respecting their needs, preferences, and capacity.
            </p>
            <div className={styles.heroActions}>
              <Link className="button button--light" href="/get-involved#choose-your-path">
                Join as a recipient organization
                <span className="button-arrow" aria-hidden="true" />
              </Link>
              <Link className="button button--ghost" href="#receiving-fit">
                See how receiving works
                <span className="button-arrow" aria-hidden="true" />
              </Link>
            </div>
            <div className={styles.receivingPoint} aria-label="Receiving priorities">
              <span>Food fit</span>
              <span>Timing</span>
              <span>Capacity</span>
            </div>
          </div>

          <div className={styles.organizationsHeroMedia}>
            {/* Temporary, non-Gather documentary photography from Unsplash.
                It does not depict a Gather operation. See TEMPORARY-IMAGERY.md. */}
            <Image
              src="/images/audience-recipient-produce.webp"
              alt="A person carries a box filled with fresh vegetables."
              fill
              priority
              sizes="(max-width: 767px) 100vw, 56vw"
            />
            <div className={styles.heroRoute} aria-hidden="true">
              <i />
              <span />
            </div>
            <p className={styles.mediaNote}>A receiving point shaped around what is useful.</p>
          </div>
        </div>
      </section>

      <section className={styles.fitSection} id="receiving-fit" aria-labelledby="receiving-fit-title">
        <div className={`site-container ${styles.fitIntro}`}>
          <div>
            <p className="eyebrow">What fits</p>
            <h2 id="receiving-fit-title">The right food matters as much as the amount.</h2>
          </div>
          <p>
            Receiving starts with whether an available rescue makes sense for an
            organization&apos;s current needs and practical capacity. An offer is context,
            not an obligation to accept.
          </p>
        </div>
        <div className={`site-container ${styles.fitGrid}`}>
          <div className={styles.fitMedia}>
            <Image
              src="/images/hero-community-tomatoes.webp"
              alt="Several people steady a bowl of freshly harvested tomatoes together."
              fill
              sizes="(max-width: 767px) 100vw, 42vw"
            />
            <span>Useful food begins with shared context.</span>
          </div>
          <dl className={styles.fitLedger}>
            {fitDetails.map(([label, detail], index) => (
              <div key={label}>
                <dt><span>{String(index + 1).padStart(2, "0")}</span>{label}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.incomingSection} aria-labelledby="incoming-title">
        <div className={`site-container ${styles.incomingGrid}`}>
          <div className={styles.incomingCopy}>
            <p className="eyebrow">Incoming rescue visibility</p>
            <h2 id="incoming-title">Know what&apos;s on the way.</h2>
            <p>
              Clear rescue details can help an organization understand what is expected,
              when the handoff is planned, and how completion fits into the process.
            </p>
          </div>
          <ol className={styles.incomingSequence}>
            <li><span>01</span><strong>What</strong><small>Available food and relevant context</small></li>
            <li><span>02</span><strong>When</strong><small>The expected handoff window</small></li>
            <li><span>03</span><strong>Who</strong><small>The volunteer completing the rescue</small></li>
            <li><span>04</span><strong>Complete</strong><small>Delivery and confirmation state</small></li>
          </ol>
        </div>
      </section>

      <section className={styles.deliverySection} aria-labelledby="delivery-title">
        <div className={`site-container ${styles.deliveryHeading}`}>
          <p className="eyebrow">Coordinated delivery</p>
          <h2 id="delivery-title">One shared route through the handoff.</h2>
          <p>
            Gather brings rescue details into a coordinated sequence without turning
            recipient organizations into a logistics desk.
          </p>
        </div>
        <ol className={`site-container ${styles.deliveryRoute}`}>
          {deliverySteps.map(([number, title, copy]) => (
            <li key={number}>
              <span>{number}</span>
              <i aria-hidden="true" />
              <h3>{title}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.dignitySection} aria-labelledby="dignity-title">
        <div className={`site-container ${styles.dignityGrid}`}>
          <div className={styles.dignityMedia}>
            <Image
              src="/images/audience-schools-service.webp"
              alt="People work together to prepare packaged meals for distribution."
              fill
              sizes="(max-width: 767px) 100vw, 52vw"
            />
          </div>
          <div className={styles.dignityCopy}>
            <p className="eyebrow">Dignity in the process</p>
            <h2 id="dignity-title">Support that respects the work already happening.</h2>
            <p>
              Recipient organizations understand their communities. Gather is designed
              to support that work with clearer coordination—not to replace local judgment
              or create pressure to receive food that is not useful.
            </p>
            <Link className="directional-link" href="/how-it-works">
              See the complete rescue journey
              <span className="link-arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.organizationImpact} aria-labelledby="organization-impact-title">
        <div className={`site-container ${styles.organizationImpactGrid}`}>
          <div>
            <p className="eyebrow">Participation over time</p>
            <h2 id="organization-impact-title">A clearer history, built from real activity.</h2>
            <p>
              As meaningful verified information becomes available, organizations may
              be able to understand incoming rescue history and participation over time.
            </p>
          </div>
          <dl className={styles.organizationImpactRows}>
            <div><dt>Rescues received</dt><dd>—</dd></div>
            <div><dt>Verified food quantity</dt><dd>—</dd></div>
            <div><dt>Incoming rescue history</dt><dd>Early-stage</dd></div>
          </dl>
        </div>
      </section>

      <ParticipationClose
        eyebrow="A better receiving path"
        title="Make rescued food clearer, more useful, and easier to coordinate."
        description="Explore where recipient organizations fit in Gather's connected rescue system."
        primary={{ href: "/get-involved#choose-your-path", label: "Join as a recipient organization" }}
        secondary={{ href: "/how-it-works", label: "See how Gather works" }}
      />
    </main>
  );
}
