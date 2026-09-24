import Link from "next/link";
import {
  ActionLink,
  JoinSection,
  Photo,
  ProcessArrow,
  RouteIcon,
} from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/metadata";
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
          <div className="mini-journey">
            <div>
              <span className="icon-disc">
                <RouteIcon kind="business" />
              </span>
              <p>
                <strong>Businesses</strong>
                <br />
                share extra food
              </p>
            </div>
            <ProcessArrow />
            <div>
              <span className="icon-disc">
                <RouteIcon kind="people" />
              </span>
              <p>
                <strong>Students</strong>
                <br />
                help move it
              </p>
            </div>
            <ProcessArrow />
            <div>
              <span className="icon-disc">
                <RouteIcon kind="home" />
              </span>
              <p>
                <strong>Organizations</strong>
                <br />
                receive it
              </p>
            </div>
          </div>
        </div>
      </Reveal>
      <Reveal className="student-section container">
        <Photo
          src="launch-student"
          alt="A student carrying a box of produce along a neighborhood street."
          className="student-section__photo"
        />
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
        </div>
      </Reveal>
      <JoinSection />
    </main>
  );
}
