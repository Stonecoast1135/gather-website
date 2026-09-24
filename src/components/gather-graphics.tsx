import "./gather-graphics.css";

export type GatherIllustrationKind =
  "storefront" | "food-box" | "volunteer" | "community" | "service" | "clock";

function Storefront() {
  return (
    <>
      <path
        className="gather-illustration__wash"
        d="M28 102C28 54 70 25 121 27S211 52 212 101C213 140 175 157 120 157S28 142 28 102Z"
      />
      <g className="gather-illustration__foreground">
        <path className="gather-illustration__paper" d="M53 77h134v73H53Z" />
        <path className="gather-illustration__sage" d="M56 43h128l13 33H43Z" />
        <path d="m92 43-5 33m61-33 5 33" />
        <path
          className="gather-illustration__paper"
          d="M43 76h44v4a22 16 0 0 1-44 0Zm44 0h66v4a33 16 0 0 1-66 0Zm66 0h44v4a22 16 0 0 1-44 0Z"
        />
        <rect
          className="gather-illustration__sage"
          x="69"
          y="108"
          width="53"
          height="26"
          rx="1"
        />
        <path className="gather-illustration__paper" d="M144 150v-42h26v42" />
        <path d="M162 127v3M47 150h146" />
      </g>
    </>
  );
}

function FoodBox() {
  return (
    <>
      <path
        className="gather-illustration__wash"
        d="M37 59C61 19 112 26 148 34C184 42 218 65 217 99C216 138 181 153 132 154C83 155 33 151 25 118C20 99 26 78 37 59Z"
      />
      <g className="gather-illustration__foreground">
        <path
          className="gather-illustration__tan"
          d="M70 92 80 46c2-10 14-15 23-10s11 10 8 22l-10 39Z"
        />
        <path d="m82 49 12 5m-16 9 12 5m-15 9 11 5" />
        <path
          className="gather-illustration__sage"
          d="M111 92c-21-19-23-34-9-39 4-13 19-14 25-4 11-3 22 5 19 17 15 12 0 24-12 31Z"
        />
        <path d="m121 94-2-32m0 15-10-9m11 12 12-12" />
        <path
          className="gather-illustration__tan"
          d="m149 92 16-36 14 8-20 35Z"
        />
        <path d="m168 58 4-14m1 17 14-7m-17 2-7-10" />
        <path className="gather-illustration__paper" d="M45 89h147v59H45Z" />
        <path
          className="gather-illustration__sage"
          d="m45 90 19-18h105l23 18H45Z"
        />
        <path
          className="gather-illustration__paper"
          d="m45 90 73 13 74-13-18 22-56-9-56 9Z"
        />
        <path d="M118 104v44M45 148h147" />
        <path d="M88 123h12m36 0h12" strokeWidth="4" />
        <path
          className="gather-illustration__line-soft"
          d="M31 149h-9m183 0h11"
        />
      </g>
    </>
  );
}

function Volunteer() {
  return (
    <>
      <path
        className="gather-illustration__wash"
        d="M28 102C28 54 70 25 121 27S211 52 212 101C213 140 175 157 120 157S28 142 28 102Z"
      />
      <g className="gather-illustration__foreground">
        <circle
          className="gather-illustration__paper"
          cx="120"
          cy="49"
          r="22"
        />
        <path
          className="gather-illustration__sage"
          d="M70 150v-33c0-22 20-36 50-36s50 14 50 36v33Z"
        />
        <path
          className="gather-illustration__paper"
          d="m96 116 3-20a9 9 0 0 1 18 2l-2 18Z"
        />
        <path
          className="gather-illustration__sage"
          d="M128 116c-8-15-1-25 13-21 10 3 11 13 4 21Z"
        />
        <rect
          className="gather-illustration__tan"
          x="84"
          y="116"
          width="72"
          height="34"
          rx="2"
        />
        <path d="M113 128h14" />
      </g>
    </>
  );
}

function Community() {
  return (
    <>
      <path
        className="gather-illustration__wash"
        d="M28 102C28 54 70 25 121 27S211 52 212 101C213 140 175 157 120 157S28 142 28 102Z"
      />
      <g className="gather-illustration__foreground">
        <path className="gather-illustration__paper" d="M59 77h122v73H59Z" />
        <path className="gather-illustration__sage" d="m43 77 77-45 77 45Z" />
        <path
          className="gather-illustration__sage"
          d="M76 97h20v24H76Zm68 0h20v24h-20Z"
        />
        <path
          className="gather-illustration__paper"
          d="M109 150v-33a11 11 0 0 1 22 0v33"
        />
        <path d="M53 150h134" />
      </g>
    </>
  );
}

function ServiceRecord() {
  return (
    <>
      <path
        className="gather-illustration__wash"
        d="M44 45C67 18 99 27 131 23C165 20 203 37 214 67C224 96 211 130 181 144C151 158 117 157 84 151C52 145 27 126 27 96C27 76 31 60 44 45Z"
      />
      <g className="gather-illustration__foreground">
        <g transform="rotate(-7 109 89)">
          <rect
            className="gather-illustration__paper"
            x="61"
            y="30"
            width="98"
            height="119"
            rx="5"
          />
          <path className="gather-illustration__sage" d="M90 27h39v14H90Z" />
          <path d="M97 27a12 12 0 0 1 24 0" />
          <path
            className="gather-illustration__line-soft"
            d="M103 65h35m-35 27h35m-35 27h25"
          />
          <path d="m77 63 5 5 10-11m-15 32 5 5 10-11m-15 32 5 5 10-11" />
        </g>
        <circle className="gather-illustration__tan" cx="163" cy="123" r="29" />
        <path d="M163 105v19l12 7" />
        <path
          className="gather-illustration__line-soft"
          d="M46 158h127m11 0h13"
        />
      </g>
    </>
  );
}

function Clock() {
  return (
    <>
      <path
        className="gather-illustration__wash"
        d="M41 59C61 26 96 27 125 23C162 18 200 42 209 76C220 120 184 154 142 156C104 158 49 148 32 115C22 96 28 79 41 59Z"
      />
      <g className="gather-illustration__foreground">
        <circle
          className="gather-illustration__paper"
          cx="121"
          cy="88"
          r="58"
        />
        <path
          className="gather-illustration__sage"
          d="M121 42a46 46 0 0 1 46 46h-46V42Z"
        />
        <path d="M121 52v6m36 30h-6m-30 36v-6M85 88h6m30-24v24l-19 18" />
        <circle
          className="gather-illustration__forest"
          cx="121"
          cy="88"
          r="4"
        />
        <path className="gather-illustration__tan" d="m47 107-10 22 24 2" />
        <path d="M38 128c20 32 57 44 93 34m62-94 9-20-23-3" />
        <path d="M201 48C180 19 147 9 111 18" />
      </g>
    </>
  );
}

const illustrations = {
  storefront: Storefront,
  "food-box": FoodBox,
  volunteer: Volunteer,
  community: Community,
  service: ServiceRecord,
  clock: Clock,
};

/** Conceptual supporting artwork; nearby visible text supplies its meaning. */
export function GatherIllustration({
  kind,
  className = "",
}: {
  kind: GatherIllustrationKind;
  className?: string;
}) {
  const Illustration = illustrations[kind];
  return (
    <svg
      className={`gather-illustration gather-illustration--${kind} ${className}`}
      width="240"
      height="180"
      viewBox="0 0 240 180"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <Illustration />
    </svg>
  );
}

function RouteConnector({ vertical = false }: { vertical?: boolean }) {
  const path = vertical
    ? "M12 2C4 15 20 32 12 52m-6-7 6 8 6-8"
    : "M3 27C30 6 72 6 96 28m-14-4 15 5-3-14";
  return (
    <svg
      className={`rescue-route__connector${vertical ? " rescue-route__connector--vertical" : ""}`}
      width={vertical ? 24 : 100}
      height={vertical ? 56 : 42}
      viewBox={vertical ? "0 0 24 56" : "0 0 100 42"}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path className="rescue-route__connector-base" d={path} />
      <path className="rescue-route__connector-draw" d={path} pathLength="1" />
    </svg>
  );
}

const rescueStages = [
  { kind: "storefront", title: "Businesses", description: "share extra food." },
  { kind: "volunteer", title: "Students", description: "help move it." },
  { kind: "community", title: "Organizations", description: "receive it." },
] as const;

export function RescueRoute({ className = "" }: { className?: string }) {
  return (
    <ol
      className={`rescue-route ${className}`}
      aria-label="How food moves through Gather"
    >
      {rescueStages.map((stage, index) => (
        <li className="rescue-route__stage" key={stage.kind}>
          <GatherIllustration kind={stage.kind} />
          <p className="rescue-route__copy">
            <strong>{stage.title}</strong>
            <span>{stage.description}</span>
          </p>
          {index < rescueStages.length - 1 && (
            <span className="rescue-route__connector-slot" aria-hidden="true">
              <RouteConnector />
              <RouteConnector vertical />
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

/** A compact conceptual connection, not a map of operating locations or partners. */
export function MissionGraphic({ className = "" }: { className?: string }) {
  return (
    <div className={`gather-mission-graphic ${className}`} aria-hidden="true">
      <GatherIllustration kind="food-box" />
      <span className="gather-mission-graphic__link">
        <RouteConnector />
      </span>
      <GatherIllustration kind="volunteer" />
      <span className="gather-mission-graphic__link">
        <RouteConnector />
      </span>
      <GatherIllustration kind="community" />
    </div>
  );
}
