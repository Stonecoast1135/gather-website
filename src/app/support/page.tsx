import { ActionLink } from "@/components/ui";
import { destinations } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Support Gather",
  "Help more good food reach our community. Get in touch about supporting Gather.",
  "/support",
);
export default function Support() {
  return (
    <main id="main-content" className="container utility-page">
      <p className="eyebrow">Support Gather</p>
      <h1>Power the next rescue.</h1>
      <p>
        There’s more than one way to help. Talk to us about community
        partnerships, sponsorships, or supporting Gather’s work.
      </p>
      <ActionLink href={destinations.email}>Talk to Gather</ActionLink>
      <a className="text-link" href={destinations.email}>
        help@gatherforward.org
      </a>
    </main>
  );
}
