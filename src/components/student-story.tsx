import Link from "next/link";
import { Arrow, Photo } from "@/components/ui";
import { Reveal } from "@/components/reveal";

export function StudentStory() {
  return (
    <section className="student-story" aria-labelledby="student-story-heading">
      <Reveal className="student-story__inner container">
        <div className="student-story__copy">
          <h2 id="student-story-heading">Started by students.</h2>
          <p>
            Gather started with a simple idea: connect extra food with people
            who can use it, and give students a practical way to help.
          </p>
          <Link className="text-link student-story__link" href="/about">
            About Gather <Arrow />
          </Link>
        </div>
        <div className="student-story__collage">
          <Photo
            src="finish-planning"
            alt="Students collaborating at an outdoor table."
            className="student-story__wide"
            sizes="(max-width:700px) 85vw, 44vw"
          />
          <Photo
            src="finish-food-detail"
            alt="Hands packing prepared meals with vegetables."
            className="student-story__detail"
            sizes="(max-width:700px) 46vw, 22vw"
          />
        </div>
      </Reveal>
    </section>
  );
}
