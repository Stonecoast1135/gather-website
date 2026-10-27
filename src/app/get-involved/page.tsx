import { ActionLink, Photo } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/metadata";
import { destinations } from "@/lib/site-config";
export const metadata = pageMetadata(
  "Get Involved",
  "Join Gather as a volunteer, business, or organization and help good food reach your community.",
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
    alt: "A box of food being handed across a counter.",
    action: "Join as a business",
    href: destinations.signup,
  },
  {
    id: "organizations",
    title: "Organizations",
    lead: "Help good food reach your community.",
    copy: "Create an account to receive food through Gather. Approval is required before receiving donations.",
    photo: "finish-sorting",
    alt: "Three people holding Gather signs.",
    action: "Join as an Organization",
    href: destinations.signup,
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
                {role.id === "organizations" ? (
                  <a className="role-card__secondary" href={destinations.email}>
                    Contact us
                  </a>
                ) : i > 0 && (
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
        <section className="container participation-composition" aria-labelledby="join-today-heading">
          <div className="participation-invitation">
            <p className="eyebrow">GOOD FOOD. SHARED LOCALLY.</p>
            <h2 id="join-today-heading">Join Gather today.</h2>
            <p className="participation-lead">
              Create your account as a volunteer, business, or organization and
              become part of a community working to rescue good food.
            </p>
            <ActionLink>Join Gather</ActionLink>
          </div>
          <div className="participation-notes">
            <p>
              Accounts are for ages 13 and up. Food rescue teams need an
              eligible licensed driver with access to a suitable vehicle.
            </p>
            <p>
              Businesses and organizations need Gather approval before
              participating. Rescue opportunities depend on local availability.
            </p>
            <p id="schools">
              Schools &amp; programs:{" "}
              <a href={destinations.email}>talk to Gather</a> about student
              service. Each program sets its own requirements for accepting
              hours.
            </p>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
