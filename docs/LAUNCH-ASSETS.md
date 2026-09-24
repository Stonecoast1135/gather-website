# Launch photography

All five `launch-*.webp` images were created for the approved-design rebuild with the built-in OpenAI `image_gen` tool, one generation per asset. No stock purchase, subscription, image API, or runtime generation service was used. The supplied design board guided composition only; none of its small photographs were extracted.

These images are **illustrative generated scenes**. They do not depict actual Gather founders, volunteers, partners, locations, or documented completed rescues. Copy, captions, alt text, and later reuse must not imply otherwise. The images contain no Gather branding. They must not be used as testimonials or operational evidence.

All originals were generated at 1536 × 1024 and converted locally to WebP with Sharp (quality 88, effort 6), without enlargement or content editing. Original PNGs remain in the generation output directory. All production assets are stored inside `public/images` and do not depend on temporary URLs.

## Asset inventory and crop guidance

| Asset | File size | Intended use | Crop guidance |
| --- | ---: | --- | --- |
| `public/images/launch-handoff.webp` | 174,742 bytes | Home hero | Woman's face at approximately 58% across and 20% down; box around 67% across and 60% down. For portrait crops, start with `object-position: 65% 45%`. The person at right may remain partially cropped. |
| `public/images/launch-student.webp` | 201,760 bytes | Student card / student section | Centered subject; face around 50% across and 20% down, box around 50% across and 64% down. Center the portrait crop and avoid cutting through the face. |
| `public/images/launch-community.webp` | 240,890 bytes | Delivery stage / community section | Two people flank the shared crate. Preserve a landscape crop to keep both faces; a centered square crop remains usable. Avoid narrow portrait crops that remove both faces. |
| `public/images/launch-produce.webp` | 390,918 bytes | Impact background / curved FAQ image | Green leaf texture fills the width. Center works for wide or vertical crops; right-aligned crops introduce carrots and citrus. Use a contrast overlay behind any overlaid text. |
| `public/images/launch-market.webp` | 390,530 bytes | Business stage | Store entrance around 45% across; produce display spans the right half. Start square crops at `object-position: 60% 50%`. |

Each image was visually inspected after generation for faces, hands, produce, packaging, background, and branding artifacts. No material anatomical or object errors were observed. The market doorway includes very small indistinct interior notices; no legible brand or claim is present. Responsive crops were also reviewed in the actual desktop and mobile page compositions; the About layout changes at tablet widths to preserve both people in its photograph.

## Generation provenance

Built-in output directory: `/Users/codytackitt/.codex/generated_images/01a0d19e-c28a-7893-a39d-cca78ce77a38/`.

| Asset | Original output |
| --- | --- |
| Handoff | `exec-61db8528-8215-4c21-a159-c58be9fb9da9.png` |
| Student | `exec-199a9ca1-2860-4405-957b-17254a06fe9b.png` |
| Community | `exec-f095c2df-4ecb-4932-a7af-00b06115aee7.png` |
| Produce | `exec-6e140f05-4fda-434d-99dd-d6635583f3cc.png` |
| Market | `exec-7eecf4b3-9ed2-430a-b09a-8bea862f08a2.png` |

## Final prompts

### Handoff

Use case: photorealistic-natural.
Asset type: editorial photographic hero for a food-rescue public website; one individual photograph, not a website mockup. Landscape 3:2 aspect ratio, high resolution.
Scene: late-afternoon natural daylight outside a neighborhood cafe, an understated brick and timber frontage and softly blurred trees in the background. A young adult college-age woman with medium brown naturally wavy hair, in a completely plain dark forest-green cotton t-shirt, smiling gently while handing a modest unbranded cardboard produce box to another adult person whose shoulder and forearms enter from the far right edge. The woman is the main subject at center-right, shown from mid-thigh upward, with her entire head visible and room above. The box contains realistic mixed leafy greens, a few carrots, bell peppers, and tomatoes, not overflowing. Her hands naturally support the bottom corners and the other person's hands meet the sides in a physically plausible handoff.
Composition: candid documentary 50mm photograph at eye level, subject and box grouped near 62% across image, usable central portrait crop; left third is real out-of-focus cafe surroundings. No split collage, no typography. Respectful, active, authentic community atmosphere. Soft warm sunlight, deep natural greens, warm ivory and tan surfaces, natural skin texture, restrained contrast, subtle photographic grain. Believable human faces and anatomically correct hands. Avoid plastic food, airbrushed faces, exaggerated smiles, staged charity poses, branded shirts, logos, readable signage, watermarks, text, donation-box clichés. The image is an illustrative scene, not a claim of actual Gather operations.

### Student

Use case: photorealistic-natural.
Asset type: one individual editorial photograph for a student food-rescue website, usable as portrait-friendly card and wide section crop, landscape 3:2 image, high resolution. Not a website mockup.
Scene: a leafy pedestrian neighborhood street outside small brick cafes and community buildings on a sunny late afternoon, background soft and unobtrusive, without readable signs.
Subject: a clearly adult college-age man with short naturally curly dark brown hair, wearing a completely plain dark forest-green cotton t-shirt and faded denim, walking while carrying one modest open unbranded kraft cardboard produce box at waist height with both hands supporting the bottom sides. Three-quarter body view, entire head comfortably within frame. The box contains realistic leafy greens, a few carrots, apples, and bell peppers. A quiet natural smile as he looks slightly off-camera towards his destination, not directly posing. Balanced posture consistent with a real box of food, natural hands and arms.
Composition: candid documentary 50mm photograph at eye level, subject centered at x50% with uncluttered space around him. Keep face around y25%, produce around y60%; core action fits within a central portrait crop. Warm sunlight filtered through trees, soft highlights and shadows, gently blurred real urban community background. Natural skin pores and hair, true fabric and cardboard texture, restrained contrast. Rich leafy greens, warm tan and ivory, realistic food colors.
Avoid: text, brands, lettering, logos, watermark, fake Gather uniforms, exaggerated smiles, charity-poster posing, polished stock-photo look, plastic-looking food, distorted hands, extra fingers, impossible objects. This is illustrative supporting photography, not a claim of an actual Gather volunteer or rescue.

### Community

Use case: photorealistic-natural.
Asset type: single editorial photograph for a food-rescue website, landscape 3:2 high-resolution, friendly community handoff useful for a website section and card.
Scene: a quiet brick community building entrance with large windows and a small garden, outdoors in natural late-afternoon daylight, no signs or logos. A young adult volunteer woman in a plain dark forest-green cotton t-shirt and jeans, on the left, passing a modest rectangular open wooden produce crate to an adult woman community worker in a simple warm cream linen shirt, on the right. Their faces are visible in three-quarter view, with quiet smiles and focused attention toward each other; candid real people engaged in useful work, not posing for a camera. The box holds realistic fresh greens, carrots, and a small number of red tomatoes; no overflowing arrangement. Each person has two natural arms, with sensible hand positions supporting opposite ends of the crate. Medium-wide view from hips up with room around their heads.
Composition: 50mm documentary photograph, both people and shared crate concentrated within the central two-thirds, face pair around y30%, crate at y62%, with soft green garden and warm brick background. Natural skin and fabric texture, restrained warm grading, unforced friendly expressions, soft side light. Dignified collaboration between equals, clean everyday environment. No identifiable location, no implication of existing Gather partners.
Avoid: text, logos, brands, readable signage, fake uniforms, donation-box symbols, watermarks, extra fingers, merged hands, impossible crate handles, glossy plastic vegetables, fake faces, charitable pity framing. This is illustrative supporting photography, not a record of a real Gather rescue.

### Produce

Use case: photorealistic-natural.
Asset type: single natural editorial food photograph for a food-rescue website impact-page background and curved side image. Landscape 3:2 high-resolution photograph, not a layout or collage.
Scene: close view of fresh leafy kale, broad Swiss chard, and romaine greens packed in a plain weathered brown wooden produce crate on a neighborhood market table. The leaves form a naturally varied textured mass across the whole frame, with deep green interiors and fresh green sunlit edges. A few orange carrots with natural tops and two citrus fruits are peripheral along the far right. The warm brown crate rim is visible across the lower quarter. Softly blurred neutral market environment in the uppermost background only. Natural side daylight, restrained warm tones, subtle tactile detail, realistic leaf veins, varied matte and lightly moist surfaces. Camera at crate level with a slight downward angle, close 50mm editorial food photography, realistic depth of field but most central leaves legible.
Composition: rich green leaf texture fills all three horizontal thirds so the image supports both a wide page background and narrow vertical crop; central region is slightly darker; no people, no hands, no empty staged backdrop. A generous, believable amount of vegetables, not a towering overflowing pile.
Avoid: text, labels, brands, logos, printed boxes, visible signage, watermarks, glossy plastic-looking food, fake geometry, exaggerated HDR, dramatic black studio backdrop. This is illustrative produce photography, not evidence of actual Gather food rescued.

### Market

Use case: photorealistic-natural.
Asset type: one individual editorial photograph of a small neighborhood grocer exterior for a food-rescue website process-stage image. Landscape 3:2 high resolution, suitable central square crop. Not a mockup.
Scene: modest independent neighborhood produce shop on a leafy street, traditional brick facade, broad open glass doorway framed in dark muted forest-green painted wood, a short unlettered dark green canvas awning, warm interior glimpsed through windows. Low outdoor wooden produce shelves display natural crates of kale and lettuce, bell peppers, carrots, citrus, and a few tomatoes. A neat ordinary shop entrance, believable quantities, no people needed. Potted herbs near the door, soft leaves from a street tree at the top edge. No brand identity and no readable signs, no labels or posters, no written words anywhere. Architecture feels like an ordinary temperate American neighborhood, without distinctive landmarks or implied location.
Composition: street-level documentary photograph shot with 50mm lens slightly angled toward the entrance; shop frontage and produce fill central two-thirds with room for square/portrait crops. Doorway at x45%, low produce shelves from x40% to x80%. Warm natural late-afternoon sun, soft partial tree shadows, tactile brick and wood, true vegetable colors, sophisticated calm yet active community mood, realistic wear, restrained photographic grain. Avoid cinematic excess, extravagant food display, sterile showroom look, plastic produce, fake text, logos, watermark, vehicles, Gather merchandise. This is illustrative business photography, not a claim of an actual Gather partner.
