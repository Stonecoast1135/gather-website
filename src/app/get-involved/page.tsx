import { ActionLink, Photo } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/metadata";
import { destinations } from "@/lib/site-config";
import { GatherIllustration } from "@/components/gather-graphics";
export const metadata = pageMetadata(
  "Get Involved",
  "Join Gather as a student volunteer or business, or get in touch about receiving food for your organization.",
  "/get-involved",
);
const roles = [
  {
    id: "students",
    title: "Students",
    lead: "Make your next hours count.",
    copy: "Help your community through food rescue and keep track of your completed service.",
    photo: "finish-teamwork",
    alt: "Volunteers preparing food together.",
    action: "Join Gather",
    href: destinations.signup,
  },
  {
    id: "businesses",
    title: "Businesses",
    lead: "Have extra food? Put it to good use.",
    copy: "Connect your surplus with local organizations through Gather.",
    photo: "finish-bakery",
    alt: "Bread being prepared in a neighborhood bakery.",
    action: "Join as a business",
    href: destinations.signup,
  },
  {
    id: "organizations",
    title: "Organizations",
    lead: "Help good food reach your community.",
    copy: "Get in touch about receiving food through Gather.",
    photo: "finish-sorting",
    alt: "Food being sorted at a community destination.",
    action: "Contact us",
    href: destinations.email,
  },
];
export default function GetInvolved() {
  return (
    <main id="main-content" className="involved-page">
      <div className="page-heading container">
        <h1>Get Involved</h1>
        <p>Different roles. A stronger community.</p>
      </div>
      <Reveal className="container role-grid">
        {roles.map((role, i) => (
          <article className="role-card" id={role.id} key={role.id}>
            <Photo
              src={role.photo}
              alt={role.alt}
              sizes="(max-width:700px) 90vw, 31vw"
              priority={i === 0}
            />
            <div className="role-card__body">
              <h2>{role.title}</h2>
              <p className="role-lead">{role.lead}</p>
              <p>{role.copy}</p>
              <div className="role-card__actions">
                <ActionLink href={role.href}>{role.action}</ActionLink>
                {i > 0 && (
                  <p className="contact-line">
                    Questions?{" "}
                    <a href={destinations.email}>help@gatherforward.org</a>
                  </p>
                )}
              </div>
            </div>
          </article>
        ))}
      </Reveal>
      <Reveal className="participation-section">
        <div className="container participation-composition">
          <GatherIllustration
            kind="community"
            className="participation-graphic"
          />
          <div className="participation-notes">
            <p className="launch-status">
              Signups are open. Local rescue opportunities are coming.
            </p>
            <p>
              Accounts are for ages 13 and up. Adults are welcome, too.
              Businesses and organizations need Gather approval before
              participating.
            </p>
            <p id="schools">
              Schools &amp; programs:{" "}
              <a href={destinations.email}>talk to Gather</a> about student
              service. Each program sets its own requirements for accepting
              hours.
            </p>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
