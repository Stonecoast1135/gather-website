import Link from "next/link";

import styles from "@/app/participation-pages.module.css";

const paths = [
  {
    number: "01",
    prompt: "I have time to help",
    title: "Volunteers",
    next: "Find local rescue opportunities that fit your schedule.",
    cta: "Explore volunteering",
    href: "/volunteers",
  },
  {
    number: "02",
    prompt: "I have food to share",
    title: "Businesses",
    next: "See the practical details behind pickup and handoff.",
    cta: "View the business pathway",
    href: "/businesses",
  },
  {
    number: "03",
    prompt: "My organization can use food",
    title: "Recipient organizations",
    next: "Understand suitability, timing, capacity, and confirmation.",
    cta: "Learn about receiving",
    href: "/organizations",
  },
  {
    number: "04",
    prompt: "I support student service",
    title: "Schools & programs",
    next: "Explore meaningful service and clearer activity records.",
    cta: "Explore schools & programs",
    href: "/schools",
  },
  {
    number: "05",
    prompt: "I want to help Gather grow",
    title: "Supporters",
    next: "See how people and partners can strengthen the work.",
    cta: "Explore ways to support",
    href: "/support",
  },
] as const;

export function GetInvolvedPathways() {
  return (
    <section
      className={styles.pathways}
      id="choose-your-path"
      aria-labelledby="choose-path-title"
    >
      <div className={`site-container ${styles.pathwaysIntro}`}>
        <div>
          <p className="eyebrow">Choose your path</p>
          <h2 id="choose-path-title">Start with what you can bring.</h2>
        </div>
        <p>
          Each rescue depends on people contributing in different ways. Start
          with the statement that sounds most like you.
        </p>
      </div>

      <div className={`site-container ${styles.pathwayRows}`}>
        {paths.map((path) => (
          <article className={styles.pathwayRow} key={path.number}>
            <span className={styles.pathwayNumber} aria-hidden="true">
              {path.number}
            </span>
            <div className={styles.pathwayStatement}>
              <p>{path.prompt}</p>
              <h3>{path.title}</h3>
            </div>
            <p className={styles.pathwayNext}>{path.next}</p>
            <Link className="directional-link" href={path.href}>
              {path.cta}
              <span className="link-arrow" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
