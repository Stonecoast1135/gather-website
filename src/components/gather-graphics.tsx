import "./gather-graphics.css";

export type GatherIllustrationKind =
  "storefront" | "food-box" | "volunteer" | "community" | "service" | "clock";

function Storefront() {
  return (
    <>
      <path
        className="gather-illustration__wash"
        d="M29 137C12 115 21 67 48 43C72 22 116 31 150 23C190 14 220 37 222 78C225 118 202 157 160 158H65C49 158 36 150 29 137Z"
      />
      <g className="gather-illustration__foreground">
        <path className="gather-illustration__paper" d="M48 75H190V149H48Z" />
        <path
          className="gather-illustration__sage"
          d="M49 41H188L203 73H34L49 41Z"
        />
        <path d="m75 41-7 32m36-32-2 32m30-32 2 32m27-32 8 32" />
        <path
          className="gather-illustration__paper"
          d="M34 73h34v5a17 17 0 0 1-34 0v-5Zm34 0h34v5a17 17 0 0 1-34 0v-5Zm34 0h33v5a16.5 16.5 0 0 1-33 0v-5Zm33 0h34v5a17 17 0 0 1-34 0v-5Zm34 0h34v5a17 17 0 0 1-34 0v-5Z"
        />
        <path className="gather-illustration__sage" d="M61 102h74v32H61Z" />
        <path d="M98 102v32M61 119h74" />
        <path className="gather-illustration__paper" d="M150 102h25v47h-25Z" />
        <path d="M167 124v5" />
        <path
          className="gather-illustration__tan"
          d="M66 130c0-9 9-13 14-6 5-7 14-3 14 6H66Zm39 0c0-10 10-15 15-6 5-6 10-2 10 6h-25Z"
        />
        <path d="M41 150h158M80 32h77" />
        <path
          className="gather-illustration__line-soft"
          d="M24 150h9m173 0h10"
        />
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
        d="M44 133C23 110 29 70 54 43C79 16 126 17 162 35C198 53 223 83 210 117C197 151 160 159 122 157C85 155 62 153 44 133Z"
      />
      <g className="gather-illustration__foreground">
        <path
          className="gather-illustration__paper"
          d="M100 66v13l17 13 16-13V64Z"
        />
        <path
          className="gather-illustration__paper"
          d="M140 43c0 19-9 31-23 31S94 62 94 43c0-15 10-25 24-25s22 10 22 25Z"
        />
        <path
          className="gather-illustration__forest"
          d="M94 43c-7-14 2-29 16-28 14-7 33 4 32 19l-5 10-5-13c-11 8-26 10-38 8Z"
        />
        <path
          className="gather-illustration__sage"
          d="m99 77 18 9 17-9 26 11 17 40-24 10-7-25 3 41H88l3-41-8 25-25-11 18-39 23-11Z"
        />
        <path
          className="gather-illustration__paper"
          d="m83 107-8 22 27 8-5 13-39-13 15-34m79 4 9 23-29 8 5 13 40-13-16-35"
        />
        <path className="gather-illustration__tan" d="M89 110h59v37H89Z" />
        <path
          className="gather-illustration__sage"
          d="M99 110c-7-9-7-18 3-18 4-10 15-5 16 3 11-5 18 3 13 15Z"
        />
        <path
          className="gather-illustration__paper"
          d="m128 110 4-17c2-8 13-7 13 1l-2 16Z"
        />
        <path d="M113 121h12M98 154l-3 9m44-9 4 9" />
        <path
          className="gather-illustration__line-soft"
          d="M62 163h23m69 0h26"
        />
      </g>
    </>
  );
}

function Community() {
  return (
    <>
      <path
        className="gather-illustration__wash"
        d="M24 110C23 77 55 51 87 32C119 13 161 26 188 50C215 74 226 111 204 136C182 162 142 151 106 154C69 157 25 144 24 110Z"
      />
      <g className="gather-illustration__foreground">
        <path className="gather-illustration__paper" d="M66 69h113v82H66Z" />
        <path
          className="gather-illustration__sage"
          d="m50 74 72-44 74 44H50Z"
        />
        <path d="M104 60h36" />
        <path
          className="gather-illustration__sage"
          d="M83 91h19v22H83Zm61 0h19v22h-19Z"
        />
        <path
          className="gather-illustration__paper"
          d="M110 151v-34a12 12 0 0 1 24 0v34Z"
        />
        <path d="M65 151h118m-82 6h43" />
        <circle className="gather-illustration__paper" cx="39" cy="113" r="9" />
        <path
          className="gather-illustration__sage"
          d="M24 152v-12a15 15 0 0 1 30 0v12H24Z"
        />
        <circle
          className="gather-illustration__paper"
          cx="201"
          cy="111"
          r="9"
        />
        <path
          className="gather-illustration__sage"
          d="M185 151v-11a16 16 0 0 1 32 0v11Z"
        />
        <path
          className="gather-illustration__tan"
          d="M167 127h25v23h-25Zm9 0v7h8v-7"
        />
        <path
          className="gather-illustration__line-soft"
          d="M22 158h36m129 0h30"
        />
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
            <>
              <RouteConnector />
              <RouteConnector vertical />
            </>
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
