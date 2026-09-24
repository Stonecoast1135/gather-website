# Limited homepage refinement

Baseline: clean `codex/website-launch-redesign` at b7ce7bfa2f7ac13c6eabceee6441322aa1e15694. Authority: REFINEMENT-BRIEF.md. Existing approved homepage capture and actual source inspected before edits. Preserve all existing copy, photographs, routes, popup state/logic, exact mark and deployment boundaries outside the requested artwork and additions.

## Artwork and layout

Simplify the three route subjects on their existing 240 × 180 viewBox with 2.5-unit outlines and existing fills. The volunteer becomes a head, shoulder silhouette and naturally centered box, without hair, hands or articulated arms. Shared component replacement also updates About's mission; the unused MissionGraphic composition continues to reference the same shared artwork. Food-box, clock and service-record subjects remain unchanged.

Reserve explicit grid gaps for desktop connectors and a separate row for each mobile connector. Both the path and arrowhead stay inside their connector SVG and reserved slot; nothing is hidden behind artwork. Labels remain HTML and visible immediately.

## New sections

Place Find your place after the existing benefit section. A single shared panel switches between Students, Businesses and Organizations, with default Students, roving keyboard focus, Left/Right/Home/End selection, stable panel dimensions and visible focus. Only the selected photograph is mounted. Use the existing licensed transport, bakery and sorting photographs; these are not otherwise used on Home. All CTAs use the supplied destinations. No new operational claims.

Follow with Started by students: a sage editorial band, concise supplied story and About link, with large collaboration photograph and smaller meal-packing detail. Reuse finish-planning and finish-food-detail, already licensed in FINISHING-ASSETS.md; neither repeats another homepage photo. People are illustrative, not identified founders. Two different image scales and restrained overlap; mobile places text first and keeps faces and hands visible.

## Motion before implementation

| Element | Purpose / trigger | Start → end | Timing | Mobile / reduced motion |
| --- | --- | --- | --- | --- |
| Rescue route | Explain sequence on entry | Existing static base, drawing emphasis and small artwork settlement | Existing 450–620ms once | Vertical slots; fully visible static fallback |
| Selected role panel | Acknowledge a deliberate tab choice | Photo crop/scale settles and copy moves 4px; no opacity loss or focus transfer | 220ms ease-out | Same short transition; none with reduced motion |
| Story collage | Introduce linked story on viewport entry | Existing photo reveal; detail slightly offset | Existing 430–600ms once | Simpler smaller overlap; static with reduced motion |

No automatic tab cycling, global animation changes, new dependencies, eager inactive-panel images, or changes to popup storage/campaign.

## Verification

Inspect all three role states and route at 360, 390, 768, 1024, 1440 and 1920px. Measure connector gaps, overflow and panel height; check keyboard, reduced motion, destination links and popup regressions. Inspect reused illustrations on other pages. Run relevant browser tests, lint, types and production-mode Preview build, then push the same branch and verify matching Vercel Preview commit. Production remains unchanged.

## Completed review

- Revised all three shared SVG subjects and reserved connector slots. The shared volunteer replacement appears on Home's rescue route and About's mission section; the unused MissionGraphic helper also uses the shared component. No separate obsolete volunteer asset was found.
- Inserted both requested Home sections in the specified order, reusing five approved locally stored photos with existing provenance. No new dependencies or photo downloads.
- Captured 44 full-page/section images at the six requested widths and desktop/mobile checks of the four other pages. Local review gallery: `artifacts/refinement/review.html`.
- Production-mode Preview build, lint and type checks passed. All 147 existing browser checks passed. Initial combined run: 170/171; its only failure was the new WebKit test using plain Tab for a link on macOS. Verified native Option-Tab reaches the correct action, corrected that platform-specific test input without changing application code, and reran all 24 refinement tests successfully across Chromium, Firefox and WebKit. No skips or retries.
- Additional normal-motion checks passed at 390 and 1440px; JavaScript-disabled default content and the link to all participation roles passed. Reduced-motion behavior, stable panel heights, arrow clearances, touch targets, keyboard selection, About navigation and accessibility scans passed.
- Exact brand assets, existing launch popup/campaign, global interactions, layout, destinations, impact boundary, dependencies and Next configuration remain identical to the approved baseline. Preview deployment evidence is recorded after push in `artifacts/refinement/deployment-evidence.json`; production must remain unchanged.
