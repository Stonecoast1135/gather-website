# Approved design finishing pass

The owner approved the palette, typography, original G, hero curves, navigation and five-page structure. This pass develops that design; it does not replace it. Authority: `FINISHING-BRIEF.md`, original board, and the supplied 29.95-second recording. Frames at two-second intervals were reviewed before editing. The recording shows the current layout, repeated handoff/produce imagery, small isolated route icons, plain closing strip, and an underdeveloped About origin section. It shows no popup, but not browser storage or the address bar, so it cannot prove a dismissal or a particular deployment by itself.

## Composition and image plan

- Home: preserve hero; turn the route into a substantial sage-backed illustrated centerpiece; use a teamwork photograph, bread detail and conceptual service-record illustration as a composed student section; integrate a large food-box illustration into the closing green invitation.
- How It Works: retain three concise stages; use preparation, transport and sorting photographs with a continuous route behind the numbers; connect FAQ and food detail through one sage composition and a functional food-box drawing.
- Get Involved: distinguish student teamwork, bakery preparation and organization sorting through images, crop and restrained surface colors; end with the essential participation notice beside a community illustration and connecting rule.
- Impact: preserve three null-safe totals and definitions; give panels larger type and functional food/delivery/time drawings; replace the supporting handoff with a distinct community image and a small conceptual connection graphic.
- About: use a new collaborative scene in a different organic crop; combine the short origin story with close food photography and an illustration; add a concise mission triptych with coordinated substantial graphics and three short labels.

Asset selection and licenses are recorded in `FINISHING-ASSETS.md`. Photographs remain illustrative editorial content, never claims of Gather partners or team members. No invented records, metrics, app UI, location coverage or operational events.

## Motion and responsive plan

| Element | Purpose / trigger | Start and end | Timing | Mobile | Reduced motion / no JS |
| --- | --- | --- | --- | --- | --- |
| Hero | Establish hierarchy on page load | Short headline lift; image crop opens | 550–700ms ease-out | Smaller motion; CTA immediately visible above photograph | Final static layout |
| Illustrated route | Explain order at viewport entry | Connector strokes draw; stage accents settle | 500–700ms once, slight progression | Recompose as vertical illustrated rows with readable labels | Complete route and stages visible |
| Photo arrangements | Introduce related actions on entry | Image crop opens and scale settles | 600ms ease-out; detail offset at most 80ms | Smaller distance and simplified overlaps | All images visible in final position |
| How It Works connection | Connect the three photographs at entry | Line extends through number markers | 650ms once | Vertical connection and static markers | Full connecting line |
| Cards and arrows | Show interaction on hover/focus/press | 3px lift, restrained image scale, extending arrow | 200–400ms | Press feedback; no hidden hover content | Color/focus feedback only |
| Menu and accordions | Explain opening and closure | Existing native dialog/details transitions | 220–300ms | Safe areas and short-screen scrolling | Immediate states |

Large sections and copy never fade out or wait for a stagger. Only photographic/graphic layers animate. No scroll interception, continuous loops or new motion library. Wide layouts use stronger visual scale within consistent gutters; mobile collages and route graphics are intentionally recomposed.

## Boundaries and verification

Continue the same clean branch from `2d0094e`. Preserve links, policies, redirects and live app behavior. Verify popup fixes in a production-mode Preview build, with fresh storage and controlled timing. Inspect all five pages at phone, tablet, standard and wide desktop sizes; run focused regression/accessibility checks, lint, types and build. Publish only to the existing branch's Vercel Preview. Production remains unchanged pending approval.
