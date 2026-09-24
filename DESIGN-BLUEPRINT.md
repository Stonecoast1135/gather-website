# Gather — approved launch design

## Authority

The subsequent owner-approved finishing brief (`docs/FINISHING-BRIEF.md`) preserves this design and develops its graphics, photography, compositions and motion. Read `docs/FINISHING-PLAN.md` for the implemented refinements, `docs/GRAPHIC-SYSTEM.md` for SVGs, and `docs/FINISHING-ASSETS.md` for new licensed photography. The five-page concepts below describe the starting board; the finishing plan supplies their current richer compositions.

The September 23, 2026 user-supplied approved design board and rebuild brief supersede earlier visual directions, cinematic layouts, and page inventories. The reference is preserved in `docs/approved-launch-design.png`; the brief is in `docs/APPROVED-REBUILD-BRIEF.md`. `AGENTS.md` continues to govern truthfulness, scope, accessibility, performance, and protecting the separate authenticated app. Historic `design-references:` compositions are not the current target.

## Visual system

- Warm ivory `#faf6ec`, near-black green `#062c2c`, forest `#043c32`, sage `#e5e5d6`.
- Newsreader for confident editorial headings; Manrope for legible functional text. Both are Google Fonts, SIL Open Font License, optimized and self-hosted by Next at build time.
- The original lowercase G and three leaves is the only mark. `public/brand/gather-mark.png` is a deterministic cleanup of the supplied original, with white export residue and detached speckles removed. Its connected silhouette and aspect ratio remain intact. No AI redraw or reference-board crop is used. `scripts/prepare-brand.mjs` records the reproducible derivation; icon, apple icon, favicon and share graphic use this same derivative.
- Full viewport backgrounds; content max-width 1440px after the finishing pass; deliberate responsive gutters.
- Curved cream/photo boundaries and natural photography supply visual character. No decorative slogans, invented brand scenes, fake metrics, or app mockups.
- Buttons are rounded, forest-filled with a moving directional arrow. Focus must remain clearly visible.

## Five page concepts

| Page | Composition | Mobile | Confirmed content / unavailable data |
| --- | --- | --- | --- |
| Home | Cream-left/photo-right organic hero; three-icon route; compact student photo/copy; forest invitation | Copy and CTA above substantial photo, connected by curved edges; compact route; stacked student section | Exact approved hero copy and signup link; illustrative photos replace nonexistent approved app screenshot |
| How It Works | Centered title; three photographic stages, markers and connecting arrows; FAQ beside curved produce photo | Vertical stages with side route; FAQ followed by photo | Recipient acceptance precedes pickup; confirmation records service; each program controls acceptance |
| Get Involved | Three restrained photo cards, students/businesses/organizations | Single-column cards, actions beneath short copy | Signups open; local rescue opportunities coming; 13+ accounts; partners need approval |
| Impact | Leafy photo, high-contrast panels, one definitions accordion; quieter community photo/copy below | Stacked metric rows and separate copy/photo composition | Three null totals show exactly `--`; genuine 0 is preserved; no reporting source connected |
| About | Student-founded copy paired with an arched community photograph; short origin section; invitation | Copy precedes photo; concise origin below | Student-founded and Colorado roots from approved instructions; no invented people or milestones |

## Motion plan

All essential content renders as HTML and remains available with no JavaScript. No scroll interception, continuous animation loop, or heavyweight animation package.

| Motion | Purpose and trigger | Start → end | Timing | Mobile | Reduced motion |
| --- | --- | --- | --- | --- | --- |
| Hero headline | Establish reading order at render | 16px lower, partially visible → final | 600ms ease-out, 80ms second-line stagger | Smaller scale, no CTA delay | Static |
| Hero image | Introduce photography at render | Slightly clipped, 1.015 scale → final crop | 700ms ease-out | 550ms | Static |
| Section entry | Mark a change of idea at intersection | Modest translation → final | 550–650ms, once | Shorter distance | Static |
| Process route | Connect stages when section enters | Stroke length 0 → full | 700ms ease-out | Static vertical rule | Full route |
| CTA arrow | Indicate direction on hover/focus | Normal → 4px advance | 240ms ease-out | No hover dependency | Contrast/focus only |
| Role photo | Add tactility on hover | Scale 1 → 1.025 | 650ms ease-out | No essential hover content | Static |
| Menu/dialog | Clarify opening state after activation / eligible 4s launch delay | Small displacement and opacity → final | 200–300ms | Safe-area fitted; scrollable | Immediate |
| Accordion | Reveal optional detail on activation | Collapsed → expanded | Short entry easing with native details fallback | Same behavior | Immediate |

## Shared behavior

- One native-dialog mobile menu and one native-dialog launch announcement. Native top-layer modality plus focus trapping, Escape, focus return, scroll lock and route-change close.
- Launch campaign is configured in `src/lib/launch-campaign.ts`. Display follows a stable four-second deadline and defers while a dialog or active text input is in use. Only intentional dismissal persists. Development and protected-preview reset are documented in `docs/POPUP-DIAGNOSIS.md`.
- `src/lib/site-config.ts` centralizes signup/contact/Instagram/legal links. No invented role URLs.
- `src/lib/impact.ts` accepts only the three aggregate keys, validates nonnegative numbers, distinguishes missing from measured zero and returns missing values on failure. No database connection or private records.
- Legacy role URLs redirect to Get Involved anchors; Download redirects to the real web app. Contact and Support retain compact email pathways. Published app policies are linked directly.
- Preserve canonical `https://www.gatherforward.org`. Vercel Preview and local environments are noindexed. Production indexing requires the actual Vercel production environment.

## Review

Review every page at desktop and mobile sizes against the board, then test intermediate widths, short/landscape screens, zoom, keyboard/focus, reduced motion, popup persistence and delay conflicts, links, metadata, redirects and null/zero metrics. Finishing-pass evidence belongs in gitignored `artifacts/finishing`; the original build’s evidence remains in `artifacts/launch`. A working build is not visual acceptance. Owner approval is required before any production promotion.
