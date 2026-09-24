import { Photo, ProcessArrow } from "@/components/ui";
import { Accordion } from "@/components/accordion";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/metadata";
import { destinations } from "@/lib/site-config";
import { GatherIllustration } from "@/components/gather-graphics";
export const metadata = pageMetadata(
  "How It Works",
  "From extra food to a confirmed delivery: see how businesses, volunteers and organizations connect through Gather.",
  "/how-it-works",
);
const stages = [
  {
    title: "Businesses share extra food.",
    copy: "A business posts food available for pickup.",
    photo: "finish-bakery",
    alt: "A baker preparing bread in a working bakery.",
  },
  {
    title: "Students help move it.",
    copy: "A volunteer picks it up and delivers it to a participating organization.",
    photo: "finish-transport",
    alt: "A volunteer loading a box of food into a van.",
  },
  {
    title: "The delivery is confirmed.",
    copy: "Completed rescues contribute to service records and impact.",
    photo: "finish-sorting",
    alt: "People organizing food at a community destination.",
  },
];
const faqs = [
  {
    question: "How do I get started?",
    answer: (
      <p>
        <a href={destinations.signup}>Join Gather</a> and choose your role.
        Accounts are available to people 13 and older. Physical pickups and
        deliveries have separate participation requirements; review the{" "}
        <a href={destinations.terms}>Terms of Use</a> before taking part.
      </p>
    ),
  },
  {
    question: "Do I need a car?",
    answer: (
      <p>
        Choose opportunities that fit your transportation and the food being
        moved. Review pickup and delivery instructions before claiming a rescue.
        Drivers must be legally authorized to drive and use a suitable vehicle.
      </p>
    ),
  },
  {
    question: "How do service hours work?",
    answer: (
      <p>
        Recipient confirmation completes the rescue and supports your service
        record. Your school or program decides which activities and records it
        accepts, so check with your advisor first.
      </p>
    ),
  },
  {
    question: "What happens after I sign up?",
    answer: (
      <p>
        Set up your profile while local partners are being onboarded. Businesses
        and recipient organizations need Gather approval. Eligible opportunities
        appear as approved partners make food available; signing up alone does
        not authorize a pickup.
      </p>
    ),
  },
];
export default function HowItWorks() {
  return (
    <main id="main-content" className="how-page">
      <div className="page-heading container">
        <h1>How It Works</h1>
        <p>A simple process. A real impact.</p>
      </div>
      <Reveal className="stages container">
        <svg
          className="process-rail"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path
            className="route-draw"
            pathLength="1"
            d="M24 91C176-33 304 91 497 66S768 6 949 67S1229 120 1418 18"
          />
        </svg>
        <ol>
          {stages.map((stage, i) => (
            <li key={stage.title}>
              <div className="stage-image">
                <Photo
                  src={stage.photo}
                  alt={stage.alt}
                  sizes="(max-width:700px) 90vw, 30vw"
                  priority={i === 0}
                />
                <span className="stage-number">{i + 1}</span>
                {i < 2 && <ProcessArrow />}
              </div>
              <h2>{stage.title}</h2>
              <p>{stage.copy}</p>
            </li>
          ))}
        </ol>
        <div className="process-note">
          <p>
            Food is matched with an eligible recipient before a volunteer picks
            it up.
          </p>
          <p>
            Accounts are for ages 13 and up. Drivers must be legally authorized
            to drive. Review the{" "}
            <a href={destinations.terms}>participation requirements</a> before
            claiming a rescue.
          </p>
        </div>
      </Reveal>
      <section className="faq-section">
        <div className="container faq-section__inner">
          <div className="faq-panel">
            <h2>Frequently asked questions</h2>
            <Accordion items={faqs} />
          </div>
          <div className="faq-visual">
            <Photo
              className="faq-photo"
              src="finish-bread"
              alt="Loaves of fresh bread."
              sizes="(max-width:700px) 75vw, 34vw"
            />
            <GatherIllustration kind="food-box" className="faq-graphic" />
          </div>
        </div>
      </section>
    </main>
  );
}
