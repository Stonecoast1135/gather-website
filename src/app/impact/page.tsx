import { Photo } from "@/components/ui";
import { Accordion } from "@/components/accordion";
import { Reveal } from "@/components/reveal";
import { getImpactTotals, formatImpact } from "@/lib/impact";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Our measured impact",
  "Food rescued, completed rescues and volunteer hours. Follow Gather’s community impact.",
  "/impact",
);
export default async function Impact() {
  const totals = await getImpactTotals();
  const metrics = [
    { label: "Food rescued", unit: "(lb)", value: totals.foodRescuedLb },
    { label: "Rescues completed", value: totals.rescuesCompleted },
    { label: "Volunteer hours", value: totals.volunteerHours },
  ];
  return (
    <main id="main-content" className="impact-page">
      <section className="impact-hero">
        <Photo src="launch-produce" alt="" priority sizes="100vw" />
        <div className="impact-hero__shade" />
        <div className="container impact-hero__content">
          <h1>Our measured impact.</h1>
          <dl className="metric-grid">
            {metrics.map((metric) => (
              <div className="metric" key={metric.label}>
                <dt>
                  {metric.label}
                  {metric.unit && <span>{metric.unit}</span>}
                </dt>
                <dd
                  aria-label={
                    metric.value === null ? "Not yet available" : undefined
                  }
                >
                  {formatImpact(metric.value)}
                </dd>
              </div>
            ))}
          </dl>
          <Accordion
            label="Impact definitions"
            items={[
              {
                question: "About these numbers",
                answer: (
                  <div>
                    <p>
                      Food rescued is measured in pounds. Rescues completed
                      counts confirmed deliveries. Volunteer hours reflects
                      recorded service from completed rescues.
                    </p>
                    <p>
                      Totals will appear here when public reporting is
                      available. A dash means a total is not available yet.
                    </p>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>
      <Reveal className="brighter-section">
        <Photo
          src="launch-community"
          alt="Neighbors passing fresh food forward outside a community building."
        />
        <svg
          className="brighter-curve"
          viewBox="0 0 1440 470"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0 0C360-70 510 72 678 277C804 430 1040 470 1170 470H0Z" />
        </svg>
        <div className="container">
          <div className="brighter-copy">
            <h2>
              A brighter
              <br />
              tomorrow.
            </h2>
            <p>
              Together, we can reduce food waste, strengthen communities, and
              create opportunities for good.
            </p>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
