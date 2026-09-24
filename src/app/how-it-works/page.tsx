import { Photo, ProcessArrow } from "@/components/ui";
import { Accordion } from "@/components/accordion";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/metadata";
import { destinations } from "@/lib/site-config";
export const metadata = pageMetadata(
  "How It Works",
  "From extra food to a confirmed delivery: see how businesses, volunteers and organizations connect through Gather.",
  "/how-it-works",
);
const stages = [
  {
    title: "Businesses share extra food.",
    copy: "A business posts food available for pickup.",
    photo: "launch-market",
    alt: "Fresh produce outside a neighborhood grocery store.",
  },
  {
    title: "Students help move it.",
    copy: "A volunteer picks it up and delivers it to a participating organization.",
    photo: "launch-student",
    alt: "A student carrying a box of vegetables.",
  },
  {
    title: "The delivery is confirmed.",
    copy: "Completed rescues contribute to service records and impact.",
    photo: "launch-community",
    alt: "A volunteer passing a box of produce to a community worker.",
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
          <Photo
            className="faq-photo"
            src="launch-produce"
            alt="Leafy greens and fresh vegetables packed in a produce crate."
            sizes="(max-width:700px) 100vw, 38vw"
          />
        </div>
      </section>
    </main>
  );
}
