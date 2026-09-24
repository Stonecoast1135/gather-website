import { ActionLink, Photo } from "@/components/ui";
import { JoinSection } from "@/components/join-section";
import { GatherIllustration } from "@/components/gather-graphics";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About Gather",
  "Built by students, for our community. Gather connects extra food with local organizations and students ready to help.",
  "/about",
);
export default function About() {
  return (
    <main id="main-content" className="about-page">
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
          src="finish-planning"
          alt="Young people collaborating around a table."
          className="about-hero__photo"
          priority
        />
      </section>
      <Reveal className="why-section">
        <div className="container why-section__inner">
          <div className="why-story">
            <h2>Why we started</h2>
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
          <div className="why-composition">
            <Photo
              src="finish-food-detail"
              alt="Hands preparing fresh food."
              className="why-photo"
              sizes="(max-width:700px) 75vw, 34vw"
            />
            <GatherIllustration
              kind="community"
              className="why-community-graphic"
            />
          </div>
        </div>
      </Reveal>
      <Reveal className="mission-section container">
        <div className="mission-item">
          <GatherIllustration kind="food-box" />
          <h2>Reduce food waste.</h2>
        </div>
        <div className="mission-item">
          <GatherIllustration kind="community" />
          <h2>Fight hunger.</h2>
        </div>
        <div className="mission-item">
          <GatherIllustration kind="volunteer" />
          <h2>Make helping easier.</h2>
        </div>
      </Reveal>
      <JoinSection compact />
    </main>
  );
}
