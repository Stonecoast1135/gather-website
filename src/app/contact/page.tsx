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
    id: "business",
    number: "01",
    title: "Join as a business",
    description: "Tell us what kind of appropriate surplus may be available and how pickup usually works at your location.",
    details: ["Food type and approximate quantity", "Pickup window and location", "Best handoff contact"],
  },
  {
    id: "organizations",
    number: "02",
    title: "Become a recipient organization",
    description: "Share the receiving preferences, timing, and capacity that shape what is genuinely useful to your organization.",
    details: ["Foods you can use or need to avoid", "Storage, quantity, and timing context", "Best receiving contact"],
  },
  {
    id: "schools",
    number: "03",
    title: "Schools & programs",
    description: "Describe your students, service context, and the policies or questions that matter to your program.",
    details: ["School, club, or program context", "Student participation needs", "Record-acceptance policies or questions"],
  },
  {
    id: "support",
    number: "04",
    title: "Support or sponsorship",
    description: "Introduce the kind of support relationship you want to explore and what draws you to Gather's mission.",
    details: ["Individual, company, sponsor, or foundation", "Mission alignment or resources", "Preferred timing and next step"],
  },
  {
    id: "general",
    number: "05",
    title: "General questions",
    description: "Give us enough context to understand where your question belongs once the direct channel is available.",
    details: ["Your question or topic", "The Gather role it relates to", "Any practical context we should know"],
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
          <div className={styles.contactPathList} aria-label="Contact pathways">
              {contactPaths.map((path) => (
                <article id={path.id} key={path.number}>
                  <span aria-hidden="true">{path.number}</span>
                  <div>
                    <h3>{path.title}</h3>
                    <p>{path.description}</p>
                  </div>
                  <div className={styles.contactPathDetails}>
                    <strong>Helpful details to share</strong>
                    <ul>
                      {path.details.map((detail) => <li key={detail}>{detail}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>

      <section className={styles.contactStatus} id="contact-status" aria-labelledby="contact-status-title">
        <div className={`site-container ${styles.contactStatusGrid}`}>
          <div className={styles.contactStatusMark} aria-hidden="true">
            <span />
            <i />
          </div>
          <div>
            <p className="eyebrow">How to reach Gather</p>
            <h2 id="contact-status-title">Direct contact details are coming soon.</h2>
            <p>
              Gather will publish the appropriate email or form here as the public
              contact channel is finalized. The prompts above can help you prepare
              the useful context for that first conversation.
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
