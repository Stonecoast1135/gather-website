import { ActionLink } from "@/components/ui";
export default function NotFound() {
  return (
    <main id="main-content" className="container utility-page">
      <p className="eyebrow">Page not found</p>
      <h1>Let’s find your way.</h1>
      <p>
        This page may have moved. Explore how Gather connects good food with the
        people who can use it.
      </p>
      <ActionLink href="/">Back to home</ActionLink>
    </main>
  );
}
