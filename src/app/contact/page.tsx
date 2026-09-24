import { ActionLink } from "@/components/ui";
import { destinations } from "@/lib/site-config";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Contact Gather",
  "Questions about volunteering, sharing food or receiving it? Talk to Gather.",
  "/contact",
);
export default function Contact() {
  return (
    <main id="main-content" className="container utility-page">
      <p className="eyebrow">Contact Gather</p>
      <h1>Let’s talk.</h1>
      <p>
        Questions about volunteering, sharing food, receiving it, or bringing
        Gather to your community?
      </p>
      <ActionLink href={destinations.email}>Email Gather</ActionLink>
      <a className="text-link" href={destinations.email}>
        help@gatherforward.org
      </a>
      <p>For account help, you can also use Help &amp; support in Gather.</p>
    </main>
  );
}
