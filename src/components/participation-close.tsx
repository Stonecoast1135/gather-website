import Link from "next/link";

import styles from "@/app/participation-pages.module.css";

type ParticipationCloseProps = {
  eyebrow: string;
  title: string;
  description: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
};

export function ParticipationClose({
  eyebrow,
  title,
  description,
  primary,
  secondary,
}: ParticipationCloseProps) {
  return (
    <section className={styles.participationClose} aria-labelledby={`${eyebrow.toLowerCase().replaceAll(" ", "-")}-title`}>
      <div className={`site-container ${styles.participationCloseInner}`}>
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id={`${eyebrow.toLowerCase().replaceAll(" ", "-")}-title`}>{title}</h2>
        </div>
        <div>
          <p>{description}</p>
          <div className={styles.closeActions}>
            <Link className="button button--light" href={primary.href}>
              {primary.label}
              <span className="button-arrow" aria-hidden="true" />
            </Link>
            <Link className="directional-link" href={secondary.href}>
              {secondary.label}
              <span className="link-arrow" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
