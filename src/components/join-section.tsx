import { ActionLink } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { GatherIllustration } from "@/components/gather-graphics";

export function JoinSection({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={`join-section join-section--illustrated ${compact ? "join-section--compact" : ""}`}
      aria-labelledby="join-heading"
    >
      <Reveal className="container join-composition">
        <div className="join-copy">
          <h2 id="join-heading">Join the movement.</h2>
          <ActionLink light />
        </div>
        <div className="join-art" aria-hidden="true">
          <svg className="join-route" viewBox="0 0 560 290" fill="none">
            <path
              className="route-draw"
              pathLength="1"
              d="M0 220C78 220 75 69 170 68C303 66 360 269 557 169"
            />
          </svg>
          <GatherIllustration kind="food-box" />
        </div>
      </Reveal>
    </section>
  );
}
