import Link from "next/link";
import { ActionLink, Photo } from "@/components/ui";
import { JoinSection } from "@/components/join-section";
import { GatherIllustration, RescueRoute } from "@/components/gather-graphics";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/metadata";
import { FindYourPlace } from "@/components/find-your-place";
import { StudentStory } from "@/components/student-story";
import "@/components/home-refinement.css";
export const metadata = pageMetadata(
  "Less waste. More good.",
  "Help rescue food for local organizations and track your volunteer hours with Gather.",
  "/",
);
export default function Home() {
  return (
    <main id="main-content">
      <section className="home-hero" aria-labelledby="home-heading">
        <Photo
          src="launch-handoff"
          alt="A young volunteer and a neighbor sharing a box of fresh vegetables outside a café."
          className="home-hero__photo"
          sizes="(max-width: 700px) 100vw, 66vw"
          priority
        />
        <svg
          className="hero-curve hero-curve--desktop"
          viewBox="0 0 1440 680"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 0H535C717 32 791 151 746 312C723 396 628 493 605 574C799 657 1205 691 1440 614V680H0Z" />
        </svg>
        <div className="container home-hero__inner">
          <div className="home-hero__copy">
            <h1 id="home-heading">
              <span>Less waste.</span>
              <span>More good.</span>
            </h1>
            <p>
              Help rescue food for local organizations and track your volunteer
              hours with Gather.
            </p>
            <ActionLink />
            <Link className="text-link hero-secondary" href="/how-it-works">
              How it works <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>
      </section>
      <Reveal className="journey-section">
        <div className="container">
          <h2>Good food, passed forward.</h2>
          <RescueRoute />
        </div>
      </Reveal>
      <Reveal className="student-section container">
        <div className="student-collage">
          <Photo
            src="finish-teamwork"
            alt="Volunteers working together to prepare food for their community."
            className="student-collage__main"
            sizes="(max-width:700px) 90vw, 52vw"
          />
          <Photo
            src="finish-bread"
            alt="Fresh bread ready to be shared."
            className="student-collage__detail"
            sizes="(max-width:700px) 36vw, 20vw"
          />
          <span className="student-collage__line" aria-hidden="true" />
        </div>
        <div className="student-section__copy">
          <h2>
            Your time <br />
            can do more.
          </h2>
          <p>
            Help your community through food rescue and keep a clear record of
            your completed service.
          </p>
          <ActionLink />
          <GatherIllustration
            kind="service"
            className="student-service-graphic"
          />
        </div>
      </Reveal>
      <FindYourPlace />
      <StudentStory />
      <JoinSection />
    </main>
  );
}
