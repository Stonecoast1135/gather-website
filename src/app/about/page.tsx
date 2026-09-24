import { ActionLink, JoinSection, Photo } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About Gather",
  "Built by students, for our community. Gather connects extra food with local organizations and students ready to help.",
  "/about",
);
export default function About() {
  return (
    <main id="main-content">
      <section className="about-hero container">
        <div className="about-hero__copy">
          <p className="eyebrow">About Gather</p>
          <h1>
            Built by students.
            <br />
            For our community.
          </h1>
          <p>
            Gather connects businesses with extra food, organizations that can
            use it, and students ready to help. We’re making food rescue easier
            to take part in, with a clear record of completed service.
          </p>
          <ActionLink />
        </div>
        <Photo
          src="launch-community"
          alt="A young volunteer sharing a box of vegetables with a community worker."
          className="about-hero__photo"
          priority
        />
      </section>
      <Reveal className="why-section">
        <div className="container why-section__inner">
          <h2>Why we started</h2>
          <div>
            <p>
              Gather began with students in Colorado and a simple idea: extra
              food and people ready to help should be easier to connect.
            </p>
            <p>
              We’re bringing food rescue and meaningful service together, so
              businesses can share what they have, local organizations can
              receive food they can use, and students can see the difference
              their time makes.
            </p>
          </div>
        </div>
      </Reveal>
      <JoinSection compact />
    </main>
  );
}
