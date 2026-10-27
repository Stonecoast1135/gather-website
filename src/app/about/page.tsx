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
          alt="Two people standing together outdoors."
          className="about-hero__photo"
          priority
        />
      </section>
      <Reveal className="why-section">
        <div className="container why-section__inner">
          <div className="why-story">
            <h2>Why we started</h2>
            <p>
              Gather began with students in Colorado who wanted to put the
              message of John 6:12 into action: gather what remains and let
              nothing be wasted.
            </p>
            <p>
              Inspired by the love of Jesus Christ, we set out to make it easier
              for local businesses to share surplus food, organizations to
              receive it, and volunteers to serve their communities.
            </p>
            <p className="why-welcome">Everyone is welcome, regardless of religious background.</p>
          </div>
          <div className="why-composition">
            <Photo
              src="finish-teamwork"
              alt="Volunteers sorting produce and packing food boxes together."
              className="why-photo"
              sizes="(max-width:800px) 90vw, 44vw"
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
