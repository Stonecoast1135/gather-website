# Gather Public Website — Design Blueprint

## Status and authority

This document translates the approved visual references into an implementation system. It is a planning artifact, not an authorization to begin implementation.

The root `AGENTS.md` remains authoritative. Where a reference contains fabricated content or conflicts with those instructions, use the reference only for composition, proportion, pacing, or visual tone. Do not carry the conflicting content into the website.

In particular, the reference compositions contain examples of branded clothing and vehicles, business logos, testimonials, team-like photography, app screens, app-store badges, impact figures, contact details, dates, and operational claims. None of those examples are approved facts or production assets. Replace them with confirmed material or a deliberate early-stage/coming-soon state.

## Reference set and extracted direction

All ten 846 × 1860 PNG compositions in the repository folder named `design-references:` were reviewed in full.

| Reference | Strongest transferable ideas | Do not inherit literally |
| --- | --- | --- |
| `gather_good_food_good_people.png` | Full-bleed documentary hero, three-party connection line, alternating photo/text bands, compact mission statement, dark support close | Fabricated uniforms, van, operational claims, and contact details; repetitive audience cards |
| `gather_how_a_rescue_comes_to_life.png` | Split hero and an alternating, vertically connected rescue journey with a visible route and numbered milestones | App mockups, branded operational scenes, or reducing every step to a rounded card |
| `gather_every_community_s_hero.png` | Audience-led Get Involved page, large horizontal audience bands, Colorado landscape interlude | Store badges, invented local-history claims, and a five-card CTA grid |
| `gather_food_rescue_in_action.png` | Active volunteer hero, pickup-to-delivery choreography, dark service-record band, varied split layouts | Unverified statistics, product screens, guarantees, and fabricated volunteer apparel |
| `gather_turning_surplus_into_community_impact.png` | Operational tone, open linear process, requirements ledger, restrained business-facing iconography | Fake partner logos, testimonial, metrics, time promises, and impact report examples |
| `gather_food_support_for_communities.png` | Dignified recipient tone, open preference-to-confirmation sequence, calm trust band, clear split photography | Testimonial, organization branding, safety assertions, or operational guarantees not confirmed |
| `gather_empowering_student_service_locally.png` | School/program editorial voice, benefit hierarchy, explicit policy caveat, balanced information density | Fake quotes, school contacts, fabricated branded service scenes, and card-heavy audience taxonomy |
| `gather_real_change_measured_honestly.png` | Honest coming-soon metrics, report-like visual identity, methodology emphasis, connected growth sequence | Implied live footprint, invented growth phases, or claims of verified methodology before confirmation |
| `gather_rooted_in_community_reducing_food_waste.png` | Origin-story pacing, values separated by rules, Colorado landscape spread, student-founded emphasis | Invented milestones, donor/recipient terminology that changes Gather's actual model, and fabricated team imagery |
| `gather_food_rescue_impact_page.png` | Confident support hero, strong light/dark rhythm, future-partner placeholder, multiple support pathways | Fake giving behavior, sponsors, testimonials, metrics, dollar-to-impact claims, or invented partner recognition |

## Shared visual language

The references share a clear editorial/documentary language:

- Warm natural paper-like backgrounds create welcome and credibility without feeling rustic.
- Deep forest green acts as the institutional anchor: header marks, primary actions, high-emphasis bands, route lines, and the footer.
- A restrained serif display face gives the mission emotional weight; a modern sans-serif keeps actions and operational detail direct.
- Photography carries most of the natural color and human energy. Graphic color stays disciplined.
- Layouts alternate between open editorial fields, documentary images, fine rules, and occasional dark green chapters.
- Compositions are rectilinear and clean. Corners are subtly softened when containment is useful, not rounded by default.
- Icons are simple monoline symbols. They clarify a process or category and never become playful mascots.
- Directional lines and arrows express movement from surplus to recipient through a volunteer.
- The tone is active but calm: people doing useful work, not staged celebration or sentimental appeals.
- Visual density changes deliberately. Heroes and story spreads breathe; operational steps and reporting sections become more structured.

The resulting personality should read as inviting, sleek, professional, warm, editorial, and community-focused. It should feel established enough to trust and early-stage enough to be honest.

## Color system

The values below are implementation targets derived from the recurring reference palette. Confirm final combinations with contrast testing before release.

| Token | Approximate value | Use |
| --- | --- | --- |
| Forest 950 | `#0B241B` | Near-black hero scrims, footer, strongest dark chapters |
| Forest 900 | `#103126` | Primary brand field, dark CTA bands, primary text on light accents |
| Forest 800 | `#173F30` | Primary buttons, active navigation marks, route lines |
| Forest 700 | `#24583E` | Hover state for dark green actions, small graphic emphasis |
| Leaf 600 | `#4F7A50` | Decorative highlights, small icons, selected progress states |
| Leaf 400 | `#8FAE78` | Quiet diagram fills, status halos, dark-surface secondary details |
| Ivory 50 | `#FAF8F2` | Default page ground and light header |
| Oat 100 | `#F2EEE5` | Alternating section ground, inset editorial fields |
| Sand 200 | `#E3DCCE` | Rules, borders, inactive path lines, quiet control outlines |
| Ink 950 | `#152019` | Primary text on light surfaces |
| Ink 700 | `#3F4741` | Body copy and operational descriptions |
| Ink 500 | `#6B726C` | Metadata and secondary labels; only at sizes that maintain contrast |
| White | `#FFFFFF` | Text and controls on Forest 900/950, image scrims |
| Squash 500 | `#C67B3F` | Rare warm food-derived accent in editorial details, never the default CTA |
| Tomato 500 | `#B95D43` | Rare secondary accent for food or storytelling context, not error by default |

### Color-use rules

- Default to Ivory 50 rather than pure white for large page fields. Use White for controls, image-edge contrast, or small elevated surfaces.
- Forest 900/950 should account for the strongest brand moments, not every section. A typical long page should have two to four dark chapters including the footer.
- Use Leaf colors as punctuation. Do not flood major surfaces with bright green.
- Let food, people, markets, kitchens, and Colorado landscapes supply orange, red, blue, and gold.
- Warm accents may identify an editorial theme but may not compete with primary green actions.
- Fine rules use Sand 200 on light fields and translucent white on dark fields.
- Avoid gradients between arbitrary brand colors. Approved gradients are functional image scrims, subtle tonal forest fields, and extremely restrained warm-paper falloff.
- Never encode meaning by color alone. Pair state colors with text, icon shape, line style, or position.
- Do not place normal-size white text on Leaf 600 or lighter until the exact pair passes WCAG AA. Forest 800 or darker is the safe filled-action range.

## Typography system

### Font roles

- **Display:** a character-rich editorial serif with moderate contrast, confident proportions, open counters, and strong italics if needed. It should feel contemporary rather than antique or luxury-fashion oriented.
- **Functional:** a highly legible humanist or neo-grotesk sans-serif for body copy, navigation, buttons, labels, metadata, forms, and operational instructions.
- Use at most these two families. Prefer variable files, subsetted weights, and optical sizes where available.
- The serif is for meaning and chapter hierarchy. The sans-serif is for clarity and action. Avoid long operational paragraphs in the display face.

### Type scale and sizing principles

| Role | Wide desktop | Tablet | Mobile | Guidance |
| --- | --- | --- | --- | --- |
| Hero display | 64–80 px | 54–68 px | 40–50 px | Usually 2–4 lines; never sized to fill the viewport |
| Page display | 56–68 px | 48–58 px | 38–46 px | Use for interior-page thesis statements |
| Section heading | 40–52 px | 36–46 px | 30–38 px | Prefer concise, editorial phrasing |
| Subsection heading | 26–34 px | 24–30 px | 22–28 px | Serif or sans depending on narrative vs. operational role |
| Lead paragraph | 19–22 px | 18–21 px | 18–20 px | Limit line length; use only once or twice per chapter |
| Body | 16–18 px | 16–18 px | 16–18 px | Never below 16 px for core reading |
| Small/meta | 13–15 px | 13–15 px | 13–15 px | Must remain legible and sufficiently contrasted |
| Eyebrow | 11–13 px | 11–13 px | 11–12 px | Uppercase sans, 0.12–0.18 em tracking, concise |

### Typographic behavior

- Hero line-height: approximately 0.98–1.08. Section-display line-height: 1.04–1.15. Body line-height: 1.5–1.7.
- Slightly tighten display tracking only if the selected serif needs it. Do not over-tighten body or navigation text.
- Keep hero copy blocks around 8–12 words per line at their widest and body measure around 55–72 characters.
- Use sentence case. Uppercase is reserved for short eyebrows, labels, and small report-like metadata.
- Avoid centered body copy longer than two short lines. Centering is suitable for a section introduction or a process title, not dense explanations.
- A confident headline comes from phrasing, whitespace, and contrast—not extreme scale.
- Prefer a clear hierarchy of one page-level `h1`, followed by meaningful `h2` chapters and locally scoped `h3` headings.

## Spacing and layout

### Grid

- Wide desktop: 12 columns, 24–32 px gutters, content max-width 1280–1360 px, full editorial frame max-width about 1520 px.
- Standard desktop: 12 columns with 48–72 px outer gutters.
- Tablet: 8 columns, 24 px gutters, 32–48 px outer margins.
- Mobile: 4 columns, 16 px gutters, 20–24 px outer margins.
- Full-bleed photography may escape the content container, but text, controls, and captions return to the grid.
- Align headings, image edges, rule starts, and route markers to a small set of repeated grid lines. Controlled asymmetry should still feel measured.

### Vertical rhythm

- Base spacing unit: 8 px, with 4 px optical adjustments where typography requires them.
- Major section padding: 112–160 px desktop, 80–112 px tablet, 64–88 px mobile.
- Related subsection gap: 48–80 px desktop, 40–64 px tablet, 32–48 px mobile.
- Heading-to-lead gap: 20–32 px. Lead-to-primary-action gap: 28–40 px.
- Dense operational rows may use 32–48 px vertical padding, but should be separated by rules and whitespace rather than boxes.
- Maintain visible pauses before and after dark chapters. Do not stack multiple dense grids without an editorial reset.

### Section geometry

- Heroes should generally occupy 640–820 px on desktop, 560–720 px on tablet, and an intentional 620–760 px composition on mobile when image-led. They should not automatically equal `100vh`.
- Split sections usually use 5/7, 6/6, or 7/5 column relationships; avoid a monotonous 50/50 cadence across an entire page.
- Use a mix of full-bleed, contained, edge-to-edge split, offset inset, and rule-divided sections.
- Corner radii: 0–4 px for most editorial images and fields, 6–10 px for contained controls or information panels, and fully circular only for icon medallions or step markers.
- Shadows should be rare and shallow. Separation should come from color fields, borders, and spatial layering.

## Photography system

### Subject and tone

- Use real, candid, documentary-style images of surplus preparation, closing-time food handling, pickup, handoff, transport, delivery, recipient environments, students serving, and Colorado community context.
- Favor active hands, eye contact during a handoff, environmental context, and people absorbed in useful work.
- Show dignity, competence, and mutual participation. Avoid pity, staged donation poses, stock-office smiles, or spectacle.
- Do not use any generated reference image as evidence of a real person, event, partner, uniform, vehicle, or facility.
- Do not fabricate Gather-branded clothing, vans, boxes, storefronts, or operational scenes.

### Cropping and placement

- Hero crops should preserve the action and leave a naturally quiet region for copy. Do not cover faces or the handoff with text or a scrim.
- Use focal-point metadata or explicit breakpoint-specific object positions. A single center crop is not sufficient.
- Desktop hero ratio may range from about 16:8 to 16:10. Split editorial images work well at 4:3 or 3:2. Portrait details may use 4:5. Process frames can use 3:2 or 16:10.
- Mobile should often use a dedicated crop or a re-ordered composition: image above copy, copy in a separate forest field, or a top/bottom split. Do not simply narrow a desktop overlay until the subject disappears.
- For image-overlay copy, use a directional Forest 950 scrim of roughly 55–80% behind text fading toward 0–15% over the subject. Keep the effect localized rather than dimming the whole photo.
- Avoid faux film grain, heavy color grading, or green overlays that make food look unnatural. Normalize contrast and temperature across a sequence while preserving authentic color.
- Captions should be available where context matters; alt text should communicate purpose, not repeat nearby copy.

## Header and navigation

### Desktop

- Use a restrained 72–80 px header with the Gather wordmark on the left, five primary navigation groups centered or optically centered, and utility actions on the right.
- Primary navigation: How It Works, Get Involved, Impact, About, Support. The wordmark links Home.
- Get Involved may expose Volunteers, Businesses, Recipient Organizations, and Schools & Programs in an accessible dropdown.
- Utility hierarchy: a quiet text action for Open Gather / Log in and a compact filled action for Download Gather. Until destinations are confirmed, label and route them honestly as unavailable or coming soon.
- Support remains visible as a primary navigation item.
- Use an active-page underline or short route segment, not a heavy tab or pill.
- A light header is the default. A transparent or dark overlay header is allowed only when the first image provides reliable contrast across all breakpoints. On scroll it may settle into an opaque Ivory 50 field with a fine bottom rule.

### Mobile

- Use a 64–72 px bar with wordmark and one clearly labeled menu control. Preserve a direct utility action only if it does not crowd the bar.
- The menu opens as an opaque, non-translucent panel with logical grouping, visible focus, and adequate touch targets. It is navigation, not a cinematic page transition.
- Do not hide Support or Open Gather inside ambiguous icon-only controls.
- Lock background scroll only while the menu is open; return focus to the trigger on close.

## Buttons, links, and interaction patterns

### Primary button

- Forest 800 fill, white label, 44–52 px height, 16–24 px horizontal padding, 4–8 px radius.
- Hover: deepen toward Forest 900, increase arrow/line expression if present, and use at most a 1 px optical lift.
- Active: return the lift and slightly compress the visual field. Do not use bouncy scale effects.

### Secondary button

- Transparent or Ivory/White fill with a Forest 800 border and text.
- Hover: use a quiet Oat 100 or translucent white field. Maintain contrast over imagery.

### Text link

- Use for editorial continuation and low-pressure pathways.
- Pair directional links with a short line and arrowhead. The arrow should communicate forward movement through geometry, not just color.
- Underlines are appropriate for inline prose links; do not remove them without an equally clear persistent affordance.

### Interaction rules

- Minimum target size: 44 × 44 px, even when the visible label is smaller.
- Focus states must be more visible than hover states: use a 2 px high-contrast outline with clear offset.
- Never make every CTA a pill, and never give primary emphasis to several adjacent actions.
- Keep CTA labels concrete: Learn how it works, Explore volunteer opportunities, Talk to Gather, Join as a business. Do not use vague labels such as Discover more when a specific destination exists.

## Directional arrow and line language

- Use a consistent monoline geometry, approximately 1.5–2 px at desktop scale, with rounded joins only where the route is organic.
- Straight arrows describe a next action. Connected routes describe a multi-party or multi-step system. Bracket-like lines group related evidence. Fine horizontal rules create editorial continuity.
- Arrowheads should be open and restrained, not chunky chevrons.
- The base state must remain visibly directional. Motion enhances the cue; it does not create the only indication of direction.
- Avoid spinning icons, bouncing arrows, or endlessly traveling lines.

## Section transition patterns

Use several of these patterns across a page instead of repeating one container treatment:

1. **Paper-to-paper rule:** Ivory 50 to Oat 100 with a full or partial Sand 200 divider. Best between informational chapters.
2. **Photo handoff:** a full-bleed or half-bleed image carries the eye directly into the next text field. Best when moving between participants in the rescue.
3. **Forest chapter:** a hard, confident transition into Forest 900/950 for trust, records, methodology, support, or a final action.
4. **Interlocking split:** an image edge and copy field share one seam, sometimes reversing sides. Best for operational explanation.
5. **Route continuation:** a line exits one section and visually resolves in the next. Reserve for How It Works or another single flagship story.
6. **Editorial pause:** a narrow statement, mission line, or landscape image with generous vertical space resets density.
7. **Image-to-footer close:** a final documentary image or dark CTA band flows into a compact forest or ivory footer without a stack of unrelated promos.

Do not use decorative waves, blobs, arbitrary diagonal cuts, or a rounded container around every transition.

## Reusable visual primitives

These are design primitives, not component implementation instructions:

- **Editorial frame:** max-width content grid with predictable gutters and optional full-bleed escape.
- **Theme field:** Ivory, Oat, Forest, or Photo themes with pre-defined text, rule, and focus contrast.
- **Eyebrow + thesis:** small tracked sans label paired with a restrained serif heading and optional lead.
- **Documentary split:** asymmetrical text/image composition with breakpoint-specific order and crop.
- **Photo veil:** localized contrast scrim that protects copy without flattening the image.
- **Directional CTA:** label plus persistent line/arrow geometry with extend/open motion.
- **Fine rule group:** open columns separated by hairlines instead of card borders.
- **Participant marker:** compact icon/label for business, recipient organization, volunteer, school/program, or supporter.
- **Journey spine:** path, numbered milestones, step title, evidence image, and concise explanation.
- **Process ledger:** operational rows with label, requirement, note, and optional icon; suited to Businesses and Recipients.
- **Impact instrument:** metric label, definition, status, and methodology link; supports a truthful dash/coming-soon state.
- **Trust note:** compact caveat or policy qualifier with clear icon and readable text.
- **Audience band:** large horizontal image/text/benefit composition for choosing a role.
- **Landscape interlude:** Colorado context image plus concise rooted-in-place copy, without implying an unsupported service footprint.
- **Documentary mosaic:** two or three differently proportioned images with shared baseline; use sparingly.
- **Dark close:** forest CTA chapter with one primary action, one optional secondary action, and no fake urgency.

## Ideas that should not become generic cards

Several references use bordered modules to organize almost everything. Gather should retain the information but reinterpret the following as open spatial systems:

- The rescue journey: use a connected route, alternating evidence, and chapter progression—not eight cards.
- Get Involved audiences: use large audience bands or an active selector—not five identical role cards.
- Mission pillars and values: use open columns, rules, and one editorial statement—not icon cards.
- Business workflow: use a linear operational sequence and requirements ledger—not a feature grid.
- Recipient preferences and safety: use a respectful process, open checklist, and split photography—not a dashboard panel collection.
- Impact categories: use report-like rows, definitions, and methodology—not SaaS KPI tiles.
- Coming-soon metrics: use intentional instruments with em dashes and explanations, not fake counters.
- School/program pathways: use an editorial matrix or guided pathway—not a row of nearly identical institution cards.
- Support audiences: use a tiered editorial pathway based on intent and relationship—not five donation cards.
- About values, origin, and future: use narrative spreads and a verified timeline only when real milestones exist—not a biography or milestone-card wall.
- Navigation and footer links: use clear text hierarchy, not chips.

Cards remain appropriate for a compact, genuinely discrete object—such as a confirmed opportunity preview, a downloadable report, or a small contact method—when containment improves understanding.

## Motion system

Motion should be substantial in the few places where it explains movement, reveals relationships, or controls pacing. A page should normally have one flagship scroll story, two or three supporting reveal patterns, and consistent micro-interactions. It should not animate every element.

Use transform, opacity, SVG stroke drawing, CSS clipping/masking, and IntersectionObserver before considering a motion library. Never intercept wheel or touch input, alter natural scroll distance, or delay navigation.

### Motion concept A — Header state transition

1. **Purpose:** Preserve legibility over a hero while making the persistent navigation feel calm and grounded after the visitor enters the page.
2. **Trigger:** The hero's top threshold passes beneath the header, with a small hysteresis range to prevent flicker.
3. **Start state:** Transparent or image-overlay header, light or dark content chosen for verified contrast, no shadow.
4. **End state:** Opaque Ivory 50 header, Ink/Forest content, fine Sand 200 bottom rule; header height remains unchanged.
5. **Timing/easing:** 220–320 ms using an ease-out curve close to `cubic-bezier(0.22, 1, 0.36, 1)`; color and background fade without vertical bounce.
6. **Mobile behavior:** Prefer the opaque header from the start unless the crop guarantees contrast; otherwise use the same threshold with no blur-heavy backdrop.
7. **Reduced-motion fallback:** Switch states immediately at the threshold; preserve all contrast and active-page cues.

### Motion concept B — Hero text and image arrival

1. **Purpose:** Establish hierarchy and let the documentary image register before inviting action.
2. **Trigger:** Initial page render after critical fonts/style state is ready; do not wait for every below-fold asset.
3. **Start state:** Copy is visible but 12–20 px lower at 0–15% opacity; the image is at 1.02 scale behind its final crop; controls remain non-displaced in layout.
4. **End state:** Full opacity, zero translation, image at scale 1; eyebrow, heading, lead, and actions resolve in a restrained sequence.
5. **Timing/easing:** Image 700–900 ms and text groups 450–650 ms, 60–90 ms stagger, using the primary ease-out curve. Total sequence should complete in about 1 second.
6. **Mobile behavior:** Reduce translation to 8–12 px and stagger to 40–60 ms. Do not delay the primary action.
7. **Reduced-motion fallback:** Render the complete final state immediately with no scale, translation, or stagger.

### Motion concept C — Directional link line extension

1. **Purpose:** Reinforce that a CTA moves the visitor forward and make small text links feel tactile.
2. **Trigger:** Hover or focus-visible; active press may complete the motion more quickly.
3. **Start state:** A persistent 14–18 px shaft and open arrowhead are visible at normal text color.
4. **End state:** The shaft extends to 24–32 px while the arrowhead opens or advances 6–10 px; the label may translate no more than 1–2 px.
5. **Timing/easing:** 180–260 ms ease-out; reverse in 160–220 ms. Stroke changes should feel continuous, not like swapping icons.
6. **Mobile behavior:** No hover dependency. Keep the longer readable base arrow; use a brief 120–180 ms travel on tap/press only when it does not delay navigation.
7. **Reduced-motion fallback:** Keep the final-length arrow static; use underline, weight, or contrast for focus/hover instead.

### Motion concept D — Masked documentary image reveal

1. **Purpose:** Guide attention to evidence photography and create editorial pacing between chapters.
2. **Trigger:** The image reaches roughly 20–30% visibility in the viewport.
3. **Start state:** Image is fully loaded in layout but visually covered by its section ground; optional 1.015 scale; mask begins from the direction of narrative flow.
4. **End state:** Mask clears to reveal the full crop at scale 1. Adjacent caption or label becomes fully visible.
5. **Timing/easing:** 600–900 ms with the primary ease-out curve; no more than 80 ms delay after intersection.
6. **Mobile behavior:** Use a simple vertical clip or opacity reveal of 400–600 ms; avoid complex diagonal masks and large scale changes.
7. **Reduced-motion fallback:** No mask or scale. Render the final image and caption immediately.

### Motion concept E — Rescue journey spine draw

1. **Purpose:** Make the food-rescue sequence understandable as one connected system rather than unrelated steps.
2. **Trigger:** Scroll progress through the How It Works journey, measured against the natural document flow.
3. **Start state:** The complete route remains faintly visible in Sand 200; the active Forest 700 stroke has zero drawn length; future markers are inactive but readable.
4. **End state:** The Forest stroke advances through the current milestone, its marker gains emphasis, and the associated copy/image is fully present. Completed steps remain marked.
5. **Timing/easing:** Map scroll progress directly but smooth only the visual interpolation by roughly 120–180 ms. Marker transitions use 220–300 ms ease-out. Never add inertial scrolling.
6. **Mobile behavior:** Replace the winding center route with a left-edge vertical spine or discrete horizontal segments between stacked steps. Advance by intersection, not continuous scrub, to reduce work.
7. **Reduced-motion fallback:** Show the full route statically with the reading-order markers visible; no progress drawing or sticky behavior.

### Motion concept F — Sticky journey chapter choreography

1. **Purpose:** Keep the route context visible while business, recipient, volunteer, handoff, delivery, and confirmation evidence changes.
2. **Trigger:** The visitor enters a designated journey chapter on wide screens.
3. **Start state:** Context panel is in normal flow; first step is selected; later evidence is present below in semantic order.
4. **End state:** Context panel remains sticky while each naturally scrolling step becomes active; it releases before the next major section.
5. **Timing/easing:** Sticky position itself has no animation. Active content crossfades or shifts 8–12 px over 280–420 ms ease-out.
6. **Mobile behavior:** Disable sticky choreography. Stack all steps in semantic order with the simplified spine and local images.
7. **Reduced-motion fallback:** Disable sticky state changes and crossfades; show the complete linear sequence.

### Motion concept G — Get Involved audience selection

1. **Purpose:** Help a visitor recognize their role without presenting a repetitive card catalog.
2. **Trigger:** Hover/focus on desktop, explicit tap/click selection on touch, or section entry for the default audience.
3. **Start state:** All audience labels are readable; the default band has moderate emphasis and its documentary image is visible.
4. **End state:** The selected label gains an active route line, the corresponding image reveals or crossfades, and its short benefit/action region becomes prominent. Other choices remain available.
5. **Timing/easing:** Label/line 180–240 ms; image transition 400–600 ms with a 60–100 ms overlap. Use ease-out, no spring.
6. **Mobile behavior:** Use an accordion-like editorial sequence with explicit buttons and one expanded panel at a time only if all labels remain readable; otherwise stack the bands. Preserve content in DOM reading order.
7. **Reduced-motion fallback:** Switch selected content immediately with no crossfade or movement; maintain visible selection and focus state.

### Motion concept H — Section route or divider completion

1. **Purpose:** Signal that one idea has resolved and the next chapter begins.
2. **Trigger:** A section heading or final evidence row enters the viewport.
3. **Start state:** Fine rule is visible in its neutral color at partial length, or the active overlay has zero length.
4. **End state:** Rule extends to its aligned grid boundary or the active segment reaches its endpoint; copy remains stationary.
5. **Timing/easing:** 450–700 ms ease-out, used no more than a few times per page.
6. **Mobile behavior:** Shorten the distance and use 300–450 ms. Avoid full-screen line travel.
7. **Reduced-motion fallback:** Display the completed divider statically.

### Motion concept I — Photography hover response

1. **Purpose:** Clarify that an image-led area links deeper and add quiet tactility without turning documentary content into a gallery effect.
2. **Trigger:** Hover or focus-within on a linked image group.
3. **Start state:** Final crop at scale 1, overlay and caption at rest.
4. **End state:** Image reaches at most 1.015–1.025 scale within an overflow mask; caption/arrow gains emphasis; no face or essential action moves out of crop.
5. **Timing/easing:** 350–550 ms ease-out; return over 300–450 ms.
6. **Mobile behavior:** Omit scale hover. Use clear pressed/focus treatment on the text/action region.
7. **Reduced-motion fallback:** Keep scale fixed and use border, underline, or contrast only.

### Motion concept J — Impact state reveal

1. **Purpose:** Introduce what Gather intends to measure without fabricating activity or using misleading count-up theater.
2. **Trigger:** The impact instrument group first enters the viewport.
3. **Start state:** Labels and definitions are readable; status line or dash is neutral; no numeric value is hidden waiting to animate.
4. **End state:** A fine line or status marker resolves and the honest `Coming soon` state receives modest emphasis; methodology pathway becomes visually connected.
5. **Timing/easing:** 300–500 ms per grouped row with a restrained 40–60 ms stagger. Do not count from zero when real data later exists unless the exact value is already available to assistive technology.
6. **Mobile behavior:** Reveal the group once without stagger or use a single 300 ms fade; avoid triggering each instrument separately during scroll.
7. **Reduced-motion fallback:** Present the final static labels, dashes/values, definitions, and status from first paint.

### Motion concept K — Navigation menu disclosure

1. **Purpose:** Reveal secondary destinations while maintaining context, focus, and speed.
2. **Trigger:** Click/press and keyboard activation; desktop hover may preview only if click and keyboard behavior remain complete.
3. **Start state:** Menu closed, trigger communicates `aria-expanded=false`, content is not focusable.
4. **End state:** Menu visible, trigger expanded, first meaningful item available without forced focus movement; outside click or Escape closes it.
5. **Timing/easing:** Desktop opacity/translate 140–220 ms; mobile panel 220–300 ms ease-out. No delayed close that traps the pointer.
6. **Mobile behavior:** Opaque panel enters with no more than 12–16 px movement; nested groups expand in place rather than sliding through multiple screens.
7. **Reduced-motion fallback:** Open and close immediately while preserving focus management and state announcements.

### Motion concept L — Dark closing chapter handoff

1. **Purpose:** Give the page a decisive emotional close and connect the final documentary moment to a single action.
2. **Trigger:** The closing chapter reaches approximately 20% viewport visibility.
3. **Start state:** Forest field is present; image mask is closed or image is slightly offset; copy is readable but not staggered excessively.
4. **End state:** Image resolves into its split or bleed position, route line reaches the CTA, and the primary action is fully emphasized.
5. **Timing/easing:** Image 600–800 ms, line 450–650 ms, CTA emphasis 180–240 ms; total under 900 ms with the primary ease-out curve.
6. **Mobile behavior:** Stack image and forest copy; use a simple 400–550 ms image reveal and omit the traveling route line.
7. **Reduced-motion fallback:** Render the completed split, line, and CTA statically.

## Hover and focus behavior

- Hover is an enhancement, never a requirement for discovering content.
- Linked headings may gain a subtle underline or route segment; do not change only color.
- Open column groups may shift a local rule from Sand 200 to Leaf 600 and emphasize their arrow. They should not lift like dashboard cards.
- Icon medallions may change fill/outline and translate no more than 1–2 px. Do not rotate or bounce.
- Photography response is limited to the linked region and must not introduce layout shift.
- Every hover interaction must have a focus-visible equivalent. Selected and current states must persist independently of hover.
- Touch devices should not require a first tap to simulate hover before following a link.

## Desktop composition principles

- Use the wide canvas for cinematic image/text relationships, not for oversized type.
- Establish one dominant axis per section: a left thesis with right evidence, a central route, a horizontal operational process, or a full-bleed photograph with localized overlay.
- Alternate alignment and proportions so the page feels editorial rather than templated.
- Keep at least one quiet region in every major spread. Avoid filling all 12 columns with equal-weight content.
- A long page should move through a deliberate rhythm: image-led opening, open explanation, denser system view, human reset, dark trust/support chapter, clear close.
- Use open rules and baselines to relate multiple items. Reserve contained panels for exceptional information.
- A sticky sequence is allowed only when it materially improves understanding and releases cleanly.
- Avoid more than four equal columns for explanatory content. If five or six concepts are necessary, use a report-like matrix, connected route, or horizontally scroll-free sequence.

## Tablet adaptations

- Preserve editorial asymmetry using the 8-column grid, but reduce simultaneous content. A 5/3 or 4/4 split is safer than compressing a 7/5 desktop spread.
- Convert long horizontal processes into two-row sequences with explicit continuation or a vertical progression. Never require horizontal page scrolling.
- Allow hero copy to occupy 4–5 columns and use a stronger localized scrim where the crop tightens.
- Reduce section spacing by about 20–25%, not by half.
- Move auxiliary proof points below the primary copy when they begin to crowd the hero.
- Replace hover-led audience previews with explicit selection behavior once a coarse pointer is detected.
- Test landscape and portrait tablet independently. Do not assume one breakpoint covers both.
- Disable parallax and complex sticky choreography for low-height or coarse-pointer contexts even when width qualifies.

## Mobile-specific composition principles

- Re-author each major section for a single clear reading sequence: context, thesis, evidence, action.
- Choose whether the image or text leads based on meaning. A handoff image may lead a story; operational requirements should lead with text.
- Use separate image and copy fields more often than text overlays. If overlay is retained, guarantee contrast over the exact mobile crop.
- Keep the hero purposeful rather than viewport-filling. The primary action should usually appear without requiring excessive initial scroll.
- Scale headings by composition, not desktop ratio. Keep most mobile hero headlines in the 40–50 px range and section titles in the 30–38 px range.
- Stack process steps with a left route line, persistent numbering, and local evidence. Do not collapse them into detached cards.
- Turn split images into edge-to-edge media or contained 4:3 frames based on narrative importance; avoid a repeated image-then-card pattern.
- Keep primary CTAs full-width only when useful for touch and hierarchy. Secondary actions may remain text links below.
- Use 20–24 px page gutters and 64–88 px major-section spacing. Preserve whitespace even when content is dense.
- Reposition photo focal points manually for every key image. Protect faces, food, and the handoff action.
- Footers should group links under clear headings with progressive disclosure only when accessible; keep Support, Contact, and legal routes easy to find.
- Remove nonessential decoration before reducing text or touch target size.

## Page identities within one brand

All pages share the palette, type roles, header/footer shell, line geometry, photography principles, CTA hierarchy, grid, and motion easing. They differ through dominant composition, pacing, and the kind of evidence they foreground.

### Home

- Identity: documentary manifesto and system overview.
- Dominant composition: full-bleed action hero with a three-party connection route; a small number of deep pathways rather than a complete site index.
- Motion emphasis: hero arrival, three-party line connection, one concise journey glimpse.
- Avoid: a huge homepage, five equal audience cards, fake counters, testimonials, or store badges.

### How It Works

- Identity: the most spatial and process-led page.
- Dominant composition: split opening followed by a connected, alternating rescue journey from surplus through confirmation and recorded activity.
- Motion emphasis: journey spine draw and wide-screen sticky choreography, simplified to a static vertical story on mobile/reduced motion.
- Avoid: a generic row of numbered icon cards or product-screen dependency.

### Get Involved

- Identity: active audience recognition.
- Dominant composition: large selectable audience bands with documentary evidence and one clear route for each role.
- Motion emphasis: purposeful selection, image crossfade, and route-line emphasis.
- Avoid: five repetitive cards with identical hierarchy.

### Volunteers

- Identity: energetic, local, flexible, and human.
- Dominant composition: active pickup/handoff photography, schedule and local-opportunity explanations, service-record clarity.
- Motion emphasis: lightweight pickup-to-delivery progression and image choreography.
- Avoid: fake nearby opportunities, unverified personal metrics, app screens, or claims that records will be accepted by a school/program.

### Businesses

- Identity: operational, time-respectful, and professional.
- Dominant composition: clear linear process, requirements ledger, coordination details, and direct contact path.
- Motion emphasis: step connectors and directional CTA behavior; less decorative motion than Home or How It Works.
- Avoid: fabricated partner logos, quotes, time promises, cost savings, impact reports, or sustainability claims.

### Recipient Organizations

- Identity: calm, dignified, safe, and operationally clear.
- Dominant composition: preferences-to-confirmation sequence, respectful photography, and explicit control/coordination language only where confirmed.
- Motion emphasis: simple process-line progression and quiet image reveals.
- Avoid: testimonials, guarantees, invented food-safety procedures, or patronizing imagery.

### Schools & Programs

- Identity: credible, structured, and student-centered without feeling institutional or juvenile.
- Dominant composition: editorial pathway showing students, advisors, clubs/programs, and record concepts with a prominent policy caveat.
- Motion emphasis: guided path and evidence reveal; no playful classroom animation.
- Avoid: fake integrations, dashboards, reports, quotes, school acceptance claims, or a five-card institution grid.

### Impact

- Identity: a transparent field report.
- Dominant composition: restrained instruments, definitions, methodology, open report rows, and an honest early-stage state.
- Motion emphasis: status/line reveal rather than count-up spectacle.
- Avoid: fake metrics, service maps, growth milestones, or claims that reporting is verified before the method and data exist.

### About

- Identity: warm origin story rooted in student initiative and Colorado.
- Dominant composition: narrative spreads, Colorado context, values separated by rules, and a concise future direction.
- Motion emphasis: documentary reveals and a verified timeline only after facts are supplied.
- Avoid: biography wall, invented team members, dates, milestones, awards, or staged branded team photography.

### Support

- Identity: prestigious, hopeful, and relationship-oriented rather than guilt-driven.
- Dominant composition: strong support thesis, transparent use categories described without unsupported ratios, future-partner placeholder, and a talk-to-Gather pathway.
- Motion emphasis: dark closing chapters and refined CTA lines.
- Avoid: fake payment behavior, sponsors, donor quotes, urgency, fake recognition, or dollar-to-impact math.

### Download Gather

- Identity: clean product gateway within the editorial brand.
- Dominant composition: concise value statement, platform statuses, and one polished coming-soon region until destinations are real.
- Motion emphasis: minimal status and directional-link behavior.
- Avoid: fake QR codes, store badges, device mockups, or availability claims.

### Contact

- Identity: direct, human, and low-friction.
- Dominant composition: concise contact purpose routing, real contact information only, and a clear response expectation only if confirmed.
- Motion emphasis: focus and submit-state clarity; no cinematic treatment needed.
- Avoid: fake offices, phone numbers, team contacts, maps, or response-time promises.

## Reduced-motion system

- Honor `prefers-reduced-motion: reduce` globally and at first render; do not wait for client JavaScript to correct an animated default.
- Remove transforms, parallax, scrubbed progress, masks, sticky content swaps, scale hovers, and staggered entrances.
- Retain hierarchy through final-state layout, color, rules, numbering, and photography.
- Smooth scrolling should be disabled when reduced motion is requested.
- Autoplay media, if ever approved, must not autoplay under reduced motion and must expose controls.
- Focus, menu state, current-page state, error state, and progress must remain fully perceivable without animation.
- Reduced motion means a complete designed state, not missing content or broken whitespace.

## Accessibility considerations

- Target WCAG 2.2 AA for color contrast, focus visibility, keyboard operation, semantics, and target size.
- Test every text-over-image combination against the actual crop at desktop, tablet, and mobile. A generic overlay assumption is insufficient.
- Keep a logical DOM and heading order independent of alternating visual placement. CSS reordering must not create a confusing reading or focus sequence.
- Use semantic landmarks and native links/buttons. A panel that navigates is a link; a control that reveals content is a button.
- Make dropdowns, mobile navigation, audience selectors, accordions, and sticky stories fully keyboard operable with visible state and sensible focus management.
- Provide meaningful alt text for informative photography and empty alt text for decorative images. Do not describe fictional identities or organizations.
- Supply accessible names for icons. Never rely on an icon alone when a text label is appropriate.
- Present process steps as ordered content so the sequence survives without lines, animation, or CSS.
- Present impact definitions and status in text. Charts or future metrics require accessible tabular/text equivalents.
- Do not rely on hover for supporting copy. Do not hide essential information behind motion.
- Use persistent underlines or equivalent non-color cues for inline links.
- Maintain minimum 44 × 44 px targets and comfortable spacing between adjacent controls.
- Validate serif readability at small sizes; use the sans-serif for dense content and all controls.
- Ensure zoom to 200% and text-only enlargement do not clip hero copy, sticky sections, navigation, or CTA bands.
- Never place text into images. Reference screenshot text is composition guidance only.

## Performance constraints

- The reference PNGs are planning artifacts and must not ship as page imagery.
- Use responsive, correctly sized production images with explicit intrinsic dimensions and breakpoint-aware `sizes` behavior.
- Prioritize only the actual above-the-fold LCP image. Lazy-load below-fold photography and avoid preloading multiple hero candidates.
- Prefer AVIF or WebP production derivatives while retaining a suitable fallback. As a working target, keep the desktop LCP image near or below 300–400 KB when visual quality permits and most below-fold images near or below 150–250 KB.
- Art-direct crops rather than downloading an oversized source and hiding most of it with `object-fit`.
- Prevent layout shift by reserving media aspect ratios, font metrics, header height, and coming-soon/metric regions.
- Subset and self-host or framework-optimize the two approved font families. Load only necessary weights; avoid a large family matrix.
- Default to server-rendered/static content. Client JavaScript should be reserved for navigation disclosure, intersection state, and the few approved interactive stories.
- Prefer CSS and SVG motion. Do not add a motion dependency until a specific interaction cannot be delivered clearly and accessibly without it.
- Do not use WebGL, video backgrounds, canvas particle fields, or continuous animation for ambient spectacle.
- Pause or avoid offscreen animation work. Intersection observers should be shared where practical rather than created for every element.
- Animate transforms and opacity, not layout properties, for image/text reveals. SVG route drawing should use simple strokes.
- Avoid backdrop blur over large moving photography; it is costly and not central to the references.
- Treat mobile network and low-power conditions as first-class. Disable nonessential parallax/sticky work for coarse pointers, reduced motion, or constrained viewports.
- Visual quality review must include LCP, CLS, INP, image decoding behavior, font swap, and main-thread cost on a real mid-range mobile profile.

## Content and truthfulness guardrails for design

- Use em dashes, definitions, and `Coming soon` for unavailable impact data. Never populate a layout with sample numbers for visual balance.
- Hide partner/sponsor recognition until real approved organizations and assets exist. Do not reserve a giant empty logo wall.
- Use a polished coming-soon platform state instead of fake App Store, Google Play, web-app, or QR destinations.
- Do not design a payment flow until payment functionality and providers are confirmed.
- Any quote treatment remains dormant until a real, approved testimonial and attribution are supplied.
- A map may establish truthful Colorado context, but it may not visualize coverage, partners, or expansion without verified data.
- Service records may be described as trustworthy records of completed activity where confirmed. Always retain the caveat that acceptance depends on the receiving school or program's policies.
- Photography concepts must be sourced as real documentary work or clearly non-factual decorative material that does not imply Gather operations.

## Implementation review gates

Before a page is implemented, document and approve:

1. The page thesis and audience.
2. The dominant composition and how it differs from other pages.
3. Confirmed content versus intentional placeholder/coming-soon content.
4. Exact photography requirements, source, rights, crop, and alt-text intent.
5. Desktop, tablet, and mobile reading order.
6. The single flagship motion concept, if any, using the seven-part specification above.
7. Reduced-motion and no-JavaScript behavior.
8. Keyboard and focus behavior for every interactive region.
9. LCP candidate, responsive image plan, and client-JavaScript budget.
10. Truthfulness review against `AGENTS.md`.

The visual system is successful when Gather feels active and contemporary without looking like a SaaS dashboard, warm without becoming sentimental, community-focused without using pity, and sophisticated without sacrificing speed, clarity, or honesty.
