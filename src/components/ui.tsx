import Link from "next/link";
import Image from "next/image";
import type { ComponentProps } from "react";
import { destinations } from "@/lib/site-config";

export function Logo({ className = "" }: { className?: string }) {
  return <span className={`brand-mark ${className}`} aria-hidden="true" />;
}
export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`action-arrow ${className}`}
      width="27"
      height="18"
      viewBox="0 0 27 18"
      fill="none"
      aria-hidden="true"
    >
      <path className="arrow-shaft" d="M1 9H24" />
      <path d="m17 2 7 7-7 7" />
    </svg>
  );
}
export function ActionLink({
  href = destinations.signup,
  children = "Join Gather",
  className = "",
  light = false,
  ...props
}: ComponentProps<"a"> & { light?: boolean }) {
  return (
    <Link
      href={href}
      className={`button ${light ? "button--light" : ""} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <Arrow />
    </Link>
  );
}
export function Photo({
  src,
  alt,
  className = "",
  sizes = "(max-width: 700px) 100vw, 50vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div className={`photo ${className}`}>
      <Image
        src={`/images/${src}.webp`}
        alt={alt}
        fill
        sizes={sizes}
        preload={priority}
      />
    </div>
  );
}
export function RouteIcon({ kind }: { kind: "business" | "people" | "home" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {kind === "business" ? (
        <>
          <path d="M6 16h28l-3-9H9l-3 9Z M8 20v14h24V20 M15 34V23h10v11 M6 16a4 4 0 0 0 7 2 4 4 0 0 0 7 0 4 4 0 0 0 7 0 4 4 0 0 0 7-2 M13 7l-1 9 M20 7v9 M27 7l1 9" />
        </>
      ) : kind === "people" ? (
        <>
          <circle cx="20" cy="12" r="5" fill="currentColor" stroke="none" />
          <circle cx="8" cy="17" r="4" fill="currentColor" stroke="none" />
          <circle cx="32" cy="17" r="4" fill="currentColor" stroke="none" />
          <path
            d="M11 33v-4a9 9 0 0 1 18 0v4H11Z M3 32v-5a6 6 0 0 1 7-6 M37 32v-5a6 6 0 0 0-7-6"
            fill="currentColor"
          />
        </>
      ) : (
        <>
          <path d="m5 19 15-13 15 13 M10 18v16h20V18 M17 34V23h6v11 M8 11v5" />
          <path d="m10 18 10-9 10 9" />
        </>
      )}
    </svg>
  );
}
export function ProcessArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`process-arrow ${className}`}
      viewBox="0 0 100 38"
      fill="none"
      aria-hidden="true"
    >
      <path
        className="route-draw"
        d="M2 29C25 3 63 3 93 28M80 24l14 6-2-15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="1"
      />
    </svg>
  );
}
