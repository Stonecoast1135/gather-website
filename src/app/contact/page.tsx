import type { Metadata } from "next";
import Link from "next/link";

import styles from "../core-pages.module.css";

export const metadata: Metadata = {
  title: "Contact Gather",
  description:
    "Find the right Gather pathway for business participation, recipient organizations, schools and programs, support, or general questions.",
};

const contactPaths = [
  {
    number: "01",
    title: "Join as a business",
    description: "Learn how businesses can make appropriate surplus food available.",
    href: "/businesses",
    action: "Explore the business pathway",
  },
  {
    number: "02",
    title: "Become a recipient organization",
    description: "See how receiving preferences, coordination, and confirmation fit together.",
    href: "/organizations",
    action: "Explore the organization pathway",
  },
  {
    number: "03",
    title: "Schools & programs",
    description: "Understand the role Gather may play for students, advisors, and service programs.",
    href: "/schools",
    action: "Explore schools and programs",
  },
  {
    number: "04",
    title: "Support or sponsorship",
    description: "Review future support relationships and what they may help enable.",
    href: "/support",
    action: "Explore support pathways",
  },
  {
    number: "05",
    title: "General questions",
    description: "Check the current availability of a direct public contact route.",
    href: "#contact-status",
    action: "View contact status",
  },
] as const;

export default function ContactPage() {
  return (
    <main className={styles.page} id="main-content">
      <section className={styles.contactHero} aria-labelledby="contact-title">
        <div className={`site-container ${styles.contactHeroGrid}`}>
          <div>
            <p className="eyebrow">Contact Gather</p>
            <h1 id="contact-title">Start a conversation.</h1>
          </div>
          <p>
            Whether you are thinking about participation, operations, partnership,
            or support, begin with the route closest to your question.
          </p>
          <span className={styles.contactHeroLine} aria-hidden="true" />
        </div>
      </section>

      <section className={styles.contactPaths} id="contact-pathways" aria-labelledby="contact-pathways-title">
        <div className={`site-container ${styles.contactPathsGrid}`}>
          <div className={styles.contactPathsHeading}>
            <p className="eyebrow">Choose a direction</p>
            <h2 id="contact-pathways-title">The clearest place to begin.</h2>
          </div>
          <nav aria-label="Contact pathways">
            <ul>
              {contactPaths.map((path) => (
                <li key={path.number}>
                  <span>{path.number}</span>
                  <div>
                    <h3>{path.title}</h3>
                    <p>{path.description}</p>
                  </div>
                  <Link href={path.href} aria-label={`${path.action}: ${path.title}`}>
                    <span>{path.action}</span>
                    <i className="link-arrow" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      <section className={styles.contactStatus} id="contact-status" aria-labelledby="contact-status-title">
        <div className={`site-container ${styles.contactStatusGrid}`}>
          <div className={styles.contactStatusMark} aria-hidden="true">
            <span />
            <i />
          </div>
          <div>
            <p className="eyebrow">Direct contact status</p>
            <h2 id="contact-status-title">A public contact destination is still being prepared.</h2>
            <p>
              No approved email address, phone number, office address, or form
              destination has been supplied. Gather will publish a direct route here
              when it is ready; until then, the dedicated pages above are the clearest starting points.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contactTrust} aria-labelledby="contact-trust-title">
        <div className={`site-container ${styles.contactTrustGrid}`}>
          <div>
            <p className="eyebrow">What the conversation may cover</p>
            <h2 id="contact-trust-title">Practical questions are welcome.</h2>
          </div>
          <ul>
            <li><span>Participation</span><p>Finding the role that fits.</p></li>
            <li><span>Operations</span><p>Understanding the rescue process.</p></li>
            <li><span>Partnerships</span><p>Exploring how organizations may work together.</p></li>
            <li><span>Support</span><p>Discussing future ways to strengthen the work.</p></li>
          </ul>
        </div>
      </section>

      <section className={styles.contactClose} aria-labelledby="contact-close-title">
        <div className={`site-container ${styles.contactCloseGrid}`}>
          <div>
            <p className="eyebrow">Not sure where you fit?</p>
            <h2 id="contact-close-title">There is more than one way into the movement.</h2>
          </div>
          <Link className="button button--light" href="/get-involved">
            Get involved
            <span className="button-arrow" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
