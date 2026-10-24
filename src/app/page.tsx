import Link from "next/link";
import { ActionLink, Photo } from "@/components/ui";
import { JoinSection } from "@/components/join-section";
import { GatherIllustration, RescueRoute } from "@/components/gather-graphics";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/metadata";
import { FindYourPlace } from "@/components/find-your-place";
import { StudentStory } from "@/components/student-story";
import { WhyWeGather } from "@/components/why-we-gather";
import "@/components/home-refinement.css";
import "@/components/home-hero.css";
export const metadata = pageMetadata(
  "Less waste. More good.",
  "Help rescue food for local organizations and track your volunteer hours with Gather.",
  "/",
);
export default function Home() {
  return (
    <main id="main-content">
      <section className="home-hero home-hero--approved" aria-labelledby="home-heading">
        <Photo
          src="launch-handoff"
          alt="Two people standing in front of a Gather backdrop."
          className="home-hero__photo"
          sizes="(max-width: 900px) 100vw, 65vw"
          priority
        />
        <svg
          className="hero-curve hero-curve--desktop"
          viewBox="0 0 1440 760"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 0H540C555 135 675 280 697 407C726 548 652 674 579 760H0Z" />
        </svg>
        <div className="container home-hero__inner">
          <div className="home-hero__copy">
            <p className="home-hero__eyebrow">FOOD CONNECTS US</p>
            <h1 id="home-heading">
              <span>Less waste.</span>
              <span>Stronger</span>
              <span>communities.</span>
            </h1>
            <svg className="home-hero__underline" viewBox="0 0 600 18" preserveAspectRatio="none" aria-hidden="true">
              <path d="M8 11C160 0 420 0 590 10" />
              <path d="M13 13C190 4 410 5 588 13" />
            </svg>
            <p className="home-hero__description">
              Gather helps local businesses donate surplus food to nearby
              organizations — with the help of student volunteers.
            </p>
            <ActionLink />
            <ul className="home-hero__points">
              <li><HeroPointIcon kind="leaf" /><span>Local food<br />rescued</span></li>
              <li><HeroPointIcon kind="people" /><span>Community<br />partners</span></li>
              <li><HeroPointIcon kind="heart" /><span>Student<br />volunteers</span></li>
            </ul>
            <Link className="text-link hero-secondary" href="/how-it-works">
              How it works <span aria-hidden="true">↓</span>
            </Link>
          </div>
          <svg className="home-hero__leaves" viewBox="0 0 700 700" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            <path d="M18 280C15 225 29 187 72 165C99 215 73 259 18 280Z M22 475C18 420 30 377 86 344C114 402 90 455 22 475Z M581 454C641 469 665 517 653 569C597 550 574 507 581 454Z M50 610C77 563 125 543 180 559C156 605 104 625 50 610Z" />
          </svg>
        </div>
        <svg className="home-hero__photo-curve" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 15C540 155 1010 155 1440 25V160H0Z" />
        </svg>
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
            src="denver-skyline"
            alt="The Denver skyline with the Rocky Mountains beyond."
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
      <WhyWeGather />
      <StudentStory />
      <JoinSection />
    </main>
  );
}

function HeroPointIcon({ kind }: { kind: "leaf" | "people" | "heart" }) {
  return <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "leaf" ? <path d="M8 30C-1 13 15 6 33 5C34 24 26 35 12 30M6 36L26 14" /> : kind === "people" ? <><circle cx="20" cy="11" r="5" /><path d="M10 33v-4a10 10 0 0 1 20 0v4M9 10a4 4 0 0 0 0 8M31 10a4 4 0 0 1 0 8M3 31v-4a7 7 0 0 1 5-7M37 31v-4a7 7 0 0 0-5-7" /></> : <path d="M20 34L6 20C-5 8 11-1 20 10C29-1 45 8 34 20Z" />}
  </svg>;
}
