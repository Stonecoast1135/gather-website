import { Photo } from "@/components/ui";
import { Accordion } from "@/components/accordion";
import { Reveal } from "@/components/reveal";
import { getImpactTotals, formatImpact } from "@/lib/impact";
import { pageMetadata } from "@/lib/metadata";
import { GatherIllustration } from "@/components/gather-graphics";
export const metadata = pageMetadata(
  "Our measured impact",
  "Food rescued, completed rescues and volunteer hours. Follow Gather’s community impact.",
  "/impact",
);
export default async function Impact() {
  const totals = await getImpactTotals();
  const metrics = [
    {
      label: "Food rescued",
      unit: "(lb)",
      value: totals.foodRescuedLb,
      icon: "food-box" as const,
    },
    {
      label: "Rescues completed",
      value: totals.rescuesCompleted,
      icon: "service" as const,
    },
    {
      label: "Volunteer hours",
      value: totals.volunteerHours,
      icon: "clock" as const,
    },
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
                  <GatherIllustration
                    kind={metric.icon}
                    className="metric-graphic"
                  />
                  <span className="metric-label">
                    {metric.label}
                    {metric.unit && <span>{metric.unit}</span>}
                  </span>
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
        <div className="container brighter-section__inner">
          <div className="brighter-copy">
            <h2>A brighter tomorrow.</h2>
            <p>
              Together, we can reduce food waste, strengthen communities, and
              create opportunities for good.
            </p>
          </div>
          <Photo
            src="finish-community"
            alt="People sharing fresh food around a table."
            className="brighter-photo"
            sizes="(max-width:800px) 90vw, 52vw"
          />
        </div>
      </Reveal>
    </main>
  );
}
