import Image from "next/image";
import "./why-we-gather.css";

const principles = [
  { icon: "waste", first: "LESS", second: "WASTE" },
  { icon: "people", first: "STRONGER", second: "COMMUNITIES" },
  { icon: "heart", first: "MORE", second: "OPPORTUNITY" },
] as const;

function PrincipleIcon({ kind }: { kind: (typeof principles)[number]["icon"] }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {kind === "waste" && <>
        <path d="M10 12h20l-1.5 23h-17L10 12ZM7 8h26M15 8l1-4h8l1 4M16 16v14M20 16v14M24 16v14" />
      </>}
      {kind === "people" && <>
        <circle cx="20" cy="12" r="5" />
        <path d="M10 34v-5a10 10 0 0 1 20 0v5H10ZM9 8a4 4 0 0 0 0 8M31 8a4 4 0 0 1 0 8M8 21a7 7 0 0 0-5 7v3h3M32 21a7 7 0 0 1 5 7v3h-3" />
      </>}
      {kind === "heart" && <path d="M20 34 6.5 21A9 9 0 0 1 20 9 9 9 0 0 1 33.5 21L20 34Z" />}
    </svg>
  );
}

export function WhyWeGather() {
  return (
    <section id="why-we-gather" className="why-gather" aria-labelledby="why-gather-heading">
      <div className="why-gather__inner container">
        <div className="why-gather__intro">
          <p className="why-gather__eyebrow">OUR WHY</p>
          <h2 id="why-gather-heading">Why We Gather</h2>
          <figure className="why-gather__scripture">
            <blockquote>“Gather the pieces that are left over. Let nothing be wasted.”</blockquote>
            <figcaption><cite>JOHN 6:12</cite></figcaption>
          </figure>
        </div>
        <div className="why-gather__photo">
          <Image
            src="/images/community-handoff.webp"
            alt="Volunteers packing bags of groceries together at an outdoor food distribution table."
            fill
            sizes="(max-width: 700px) calc(100vw - 48px), (max-width: 1000px) 90vw, (max-width: 1600px) 46vw, 710px"
          />
        </div>
        <div className="why-gather__detail">
          <p className="why-gather__mission">
            Gather is inspired by the love and generosity of Jesus Christ. We rescue good food, care for people, and create opportunities for our communities to serve.
          </p>
          <ul className="why-gather__principles">
            {principles.map(({ icon, first, second }) => (
              <li key={icon}>
                <span className="why-gather__icon"><PrincipleIcon kind={icon} /></span>
                <span className="why-gather__label">{first}<br />{second}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
