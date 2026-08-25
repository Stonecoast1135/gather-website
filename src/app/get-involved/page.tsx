import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { GetInvolvedPathways } from "@/components/get-involved-pathways";
import { ParticipationClose } from "@/components/participation-close";
import styles from "../participation-pages.module.css";

export const metadata: Metadata = {
  title: "Get Involved | Gather",
  description:
    "Find your place in Gather as a volunteer, business, recipient organization, school or program, or supporter.",
};

export default function GetInvolvedPage() {
  return (
    <main className={styles.page} id="main-content">
      <section className={styles.routerHero} aria-labelledby="get-involved-title">
        <div className={`site-container ${styles.routerHeroGrid}`}>
          <div className={styles.routerHeroCopy}>
            <p className="eyebrow">Get involved</p>
            <h1 id="get-involved-title">There&apos;s a place for you.</h1>
            <p>
              Food to share, time to help, food your organization can use, or
              resources to support the mission—there is a way to take part.
            </p>
            <div className={styles.heroActions}>
              <Link className="button button--light" href="#choose-your-path">
                Find your place
                <span className="button-arrow" aria-hidden="true" />
              </Link>
              <Link className="button button--ghost" href="/how-it-works">
                See how Gather works
                <span className="button-arrow" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className={styles.routerHeroMedia}>
            {/* Temporary, non-Gather documentary photography from Unsplash.
                It does not depict a Gather operation. See TEMPORARY-IMAGERY.md. */}
            <Image
              src="/images/audience-schools-service.webp"
              alt="People work together to prepare packaged meals for distribution."
              fill
              loading="eager"
              sizes="(max-width: 767px) 100vw, 58vw"
            />
            <span className={styles.heroPhotoLabel}>
              <i aria-hidden="true" />
              Many ways in. One shared mission.
            </span>
          </div>
        </div>
      </section>

      <GetInvolvedPathways />

      <section className={styles.roleIndex} aria-labelledby="role-index-title">
        <div className={`site-container ${styles.roleIndexGrid}`}>
          <div className={styles.roleIndexIntro}>
            <p className="eyebrow">One connected system</p>
            <h2 id="role-index-title">Every part strengthens the next.</h2>
            <p>
              Participation looks different for every role, but each one helps
              appropriate food move through a clear community process.
            </p>
          </div>
          <div className={styles.roleIndexRows}>
            <Link href="/volunteers"><span>01</span><strong>Volunteers</strong><small>Move available rescues</small><i className="link-arrow" aria-hidden="true" /></Link>
            <Link href="/businesses"><span>02</span><strong>Businesses</strong><small>Share appropriate surplus</small><i className="link-arrow" aria-hidden="true" /></Link>
            <Link href="/organizations"><span>03</span><strong>Recipient Organizations</strong><small>Receive food that fits</small><i className="link-arrow" aria-hidden="true" /></Link>
            <Link href="/schools"><span>04</span><strong>Schools & Programs</strong><small>Support meaningful service</small><i className="link-arrow" aria-hidden="true" /></Link>
            <Link href="/support"><span>05</span><strong>Supporters</strong><small>Help Gather grow</small><i className="link-arrow" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <ParticipationClose
        eyebrow="Take the next step"
        title="Bring what you can. Build something shared."
        description="Choose the pathway that fits you, or start with the rescue journey to see how every role connects."
        primary={{ href: "/volunteers", label: "Explore volunteering" }}
        secondary={{ href: "/how-it-works", label: "See how Gather works" }}
      />
    </main>
  );
}
