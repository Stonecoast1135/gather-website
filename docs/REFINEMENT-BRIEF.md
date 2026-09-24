The website is now very close, and I approve the current overall design. This is a limited final refinement pass, not another redesign.

Make only these substantive changes:
1. Refine the three illustrations in “Good food, passed forward,” including replacing the same volunteer illustration wherever it appears elsewhere.
2. Add the two specific homepage sections described below.

Preserve the existing design quality, working functionality, concise copy, photography elsewhere, animation, and responsive layouts. Do not reinterpret the entire website or introduce a different style.

I have attached a screenshot showing the illustrations that need attention.

## 1. Continue in the current website project

Use the existing website workspace, current redesign branch, and existing Vercel preview workflow. Check and preserve the current Git state before editing.

Do not create a new project, change branches to an older version, reconnect Vercel, or modify the Gather app, backend, authentication, email, or domains.

Keep the exact original Gather G logo unchanged.

Preserve all existing pages, working links, policy destinations, launch messaging, and the working launch popup. These changes should not reset popup dismissal for returning visitors or otherwise change its behavior.

Signup destination:
https://my.gatherforward.org

Contact destination:
mailto:help@gatherforward.org

Implement the work, inspect it in the browser, and update the existing preview. Do not stop at a plan.

## 2. Refine “Good food, passed forward”

Keep the current concept, palette, and warm illustrated style. I like the businesses → students → organizations sequence. The graphics just need to be simpler and more polished.

The main problems visible in the screenshot are:
- The middle volunteer has awkward anatomy and too much overlapping detail.
- The right connecting arrow runs into the organization illustration.
- The illustrations would look better as a more minimalist, coordinated family.

Redraw all three as clean, lightweight SVG illustrations with consistent proportions, stroke weights, colors, and visual scale.

### Business illustration

Keep a recognizable storefront.

Use a simplified awning, door, and window. Remove small decorative details that do not improve recognition. Avoid lots of interior lines or little objects.

### Student illustration

Replace the existing character with a much simpler volunteer symbol:
- One simple head.
- A clean shoulder/upper-body silhouette.
- One small food box positioned naturally in front.
- At most one or two simple food shapes inside the box.

No facial features, complicated hairstyle, fingers, bent wrists, tangled arms, or multiple overlapping outlines. Do not recreate the current character with only slightly different proportions.

It should read immediately as “a person helping move food” without looking like a detailed cartoon person. Favor clean shapes and intentional negative space.

### Organization illustration

Keep a recognizable community destination or building.

Simplify the roof, doorway, and windows. A small person or people symbol can remain if it helps communicate a community organization, but do not crowd the illustration with separate figures, boxes, and extra lines.

### Shared style

Use the existing forest-green outlines, cream and sage fills, and restrained warm box color. Do not introduce a new palette, illustration style, or generic clip-art set.

Keep the graphics substantial enough to hold the section visually. “Minimalist” means fewer, better shapes, not tiny icons surrounded by empty space.

Use matching SVG viewBox conventions and consistent alignment so the three stages look balanced. Preserve enough breathing room around each illustration.

Retain the current labels as real HTML:

Businesses
share extra food.

Students
help move it.

Organizations
receive it.

Do not bake labels into image files.

## 3. Fix arrow layout structurally

The arrows must be separate from the illustration assets and occupy their own reserved layout space.

On desktop:
- Give each illustration its own clear bounds.
- Place connectors between those bounds.
- Leave a visible gap between each arrowhead and the next illustration.
- Account for the full marker/arrowhead dimensions, not just the SVG path endpoint.
- Keep the two connectors visually balanced.

On mobile:
- Use the layout that remains clearest at the available width.
- Stack stages with short vertical connectors when the horizontal composition would become cramped.
- Do not shrink labels or illustrations excessively to preserve a desktop arrangement.

Do not solve overlap by hiding or clipping the arrow behind the next graphic. Fix the actual sizing, spacing, and endpoints.

Preserve a restrained route-drawing animation where it already works. The full process must still be understandable with reduced motion or without waiting for animation.

## 4. Replace the reused volunteer consistently

Search the website for every use of the old illustrated volunteer, including component imports, SVG assets, and embedded variants.

Replace those occurrences with the new illustration, adapted appropriately to their existing size and context. This applies to the illustrated character, not real photographs of volunteers.

Use a shared illustration component or asset so the same outdated character cannot remain on another page.

Check the other pages visually after replacement. Do not let the new artwork introduce clipping, oversized strokes, or awkward empty space in smaller placements.

Remove obsolete illustration assets only after confirming nothing still references them. Do not disturb unrelated graphics.

## 5. Add homepage section one: “Find your place.”

Purpose:
Give each visitor a clear personal next step. This section should help someone choose how to participate, not explain the same three-step rescue process again.

Build a visually substantial interactive section with three role tabs:
Students
Businesses
Organizations

Use one shared content panel that changes with the selected role, rather than showing three more large cards at once.

### Visual direction

Stay within the current cream, sage, and forest-green design.

Use:
- A clear “Find your place.” heading.
- A compact, obvious role selector.
- One substantial photograph.
- One short headline.
- One supporting sentence.
- One main action.

On desktop, use an expressive photo-and-copy composition with the existing organic image boundaries or layered surface treatment. Give the image enough visual weight to make this feel like a designed section, not a settings panel.

On mobile, arrange the selector, image, copy, and action in a readable order. All three role options must remain easy to find and tap.

Avoid three tiny tabs hidden in a horizontally scrolling strip. Do not require swiping or hovering to discover essential content.

Keep the panel height reasonably stable as roles change so the page does not jump. Use a short, polished transition that respects reduced motion. Do not automatically cycle between roles.

### Student content

Headline:
“Make your time count.”

Supporting sentence:
“Help move extra food to local organizations and keep track of your completed service.”

Button:
“Join Gather”

Destination:
https://my.gatherforward.org

Use a suitable photograph of student volunteering, teamwork, or an active food-service moment.

### Business content

Headline:
“Give extra food a place to go.”

Supporting sentence:
“Join Gather to connect your surplus with local organizations.”

Button:
“Join as a business”

Destination:
https://my.gatherforward.org

Include a smaller secondary contact:
“Questions? help@gatherforward.org”

Use a photograph of a bakery, café, food preparation area, or appropriate surplus being packed. Do not reuse the student photograph with another crop.

### Organization content

Headline:
“Put good food to use.”

Supporting sentence:
“Get in touch about receiving food through Gather.”

Button:
“Contact us”

Destination:
mailto:help@gatherforward.org

Use an appropriate receiving, sorting, or community food-support photograph.

### Functional requirements

Make this a real accessible tab interface with:
- Clear selected and focus states.
- Keyboard navigation.
- Correct relationships between tabs and panels.
- Proper handling of inactive content.
- Usable touch targets.
- No off-screen or invisible focusable controls.

Use Students as the default selection. Switching tabs must not unexpectedly navigate or move keyboard focus into the panel.

Preserve current accurate participation and availability messaging. Do not promise immediate rescue availability, automatic business approval, or guaranteed school acceptance of service hours.

Do not add a fake signup form. Every action must use the real destination above.

## 6. Add homepage section two: “Started by students.”

Purpose:
Introduce the people-centered reason behind Gather and provide a natural path to the About page.

This is a short story teaser, not another feature list or repeat of “Your time can do more.”

Use this copy:

Heading:
“Started by students.”

Body:
“Gather started with a simple idea: connect extra food with people who can use it, and give students a practical way to help.”

Link:
“About Gather”

Destination:
/about

Keep the copy at approximately this length. Do not expand it into several paragraphs.

### Visual direction

Create a visually rich editorial composition that differs from the tab section.

Use a small arrangement of complementary photographs, such as:
- A wider teamwork or food-preparation moment.
- A closer detail of packing, sorting, or passing food.

Use purposeful scale differences, gentle overlap, and the website’s existing curved shapes. Two strong images are enough. Do not create a busy scrapbook or surround everything with badges and captions.

Give this section a different background treatment from its neighbors so it adds visual rhythm rather than another uninterrupted cream block.

A small supporting graphic from the refined illustration family may be used if it genuinely improves the composition. Do not add repeated G watermarks or decorative handwritten slogans.

The About Gather link should be obvious and work on touch and keyboard. Subtle image movement or hover treatment is welcome, but the section must not depend on hover.

Use only verified story details. Do not invent founder names, achievements, milestones, partnerships, or quotations.

Do not present stock or generated people as Gather’s actual founding team. Real founder photography may be used if an approved asset already exists, but missing founder photos must not block the section or produce placeholder headshots.

## 7. Integrate the sections into the existing homepage

Use this general order:

1. Existing hero.
2. Refined “Good food, passed forward.”
3. Existing student/app-benefit section.
4. New “Find your place.”
5. New “Started by students.”
6. Existing final “Join the movement.”
7. Existing footer.

Inspect the actual current page before inserting anything. Preserve other intentionally approved content, and avoid duplicating a section already serving one of these purposes.

Keep the existing final CTA as the closing invitation. Do not add a second competing closing banner or multiple new full-width Join Gather strips.

The two additions should make the homepage feel more complete, not padded. Balance section heights, background changes, image scale, and spacing accordingly.

Do not change the rest of the website merely to make every page longer.

## 8. Photography and implementation quality

Reuse suitable existing approved photographs when they fit, but avoid repeating the same prominent image across the new sections or using alternate crops to disguise repetition.

You may source additional real photographs from sources that explicitly allow the intended website use. Verify licensing and attribution requirements, save permitted assets locally, and record their provenance.

Do not use watermarked images, fragile hotlinks, unlicensed search-result images, or identifiable businesses in a way that falsely implies partnership.

Do not purchase assets or start subscriptions without approval.

Optimize images, prepare intentional mobile crops, and reserve their dimensions. Do not load every role panel’s full-resolution photo eagerly or preload large below-the-fold assets at the expense of the hero.

Use SVG and normal responsive web components for the illustration work. Do not generate raster screenshots of the interface or flatten interactive sections into images.

Keep the implementation consistent with the current project rather than adding an unnecessary UI or animation framework.

## 9. Verify and deliver

Inspect:
- The revised three illustrations and both connectors.
- Every replacement of the old volunteer elsewhere.
- All three states of “Find your place.”
- The About Gather link.
- The complete homepage flow.
- Mobile and wide-desktop layouts.
- Keyboard navigation and reduced motion.
- Existing signup links and the launch popup for regressions.

Check representative widths around 360, 390, 768, 1024, 1440, and 1920px. Pay particular attention to arrow endpoints, image overlaps, tab wrapping, panel-height changes, and horizontal overflow.

Run the relevant lint, type checks, tests, and production build. Add or update focused interaction tests for the new tabs where the project supports them.

Update the existing non-production preview and verify that it contains the latest commit. Do not promote to production until I approve.

Return:
- The updated preview and commit.
- A brief summary of the changes.
- Desktop and mobile screenshots of the complete homepage.
- Close views of the revised illustrations and the two new sections, including all three role-tab states.
- Confirmation of where the old volunteer was replaced.
- Actual test results and any remaining issue.

Keep this a controlled finishing pass. Everything outside these requested changes should remain as close as possible to the version I have already approved.