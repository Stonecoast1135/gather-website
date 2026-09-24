# Gather public website: approved-design rebuild

Rebuild Gather's public marketing website for gatherforward.org using the attached approved design board. This is an implementation task: inspect the correct project, build the complete website, create the necessary assets, test it, and provide a working preview. Do not stop after a plan or a homepage draft.

The approved design image is the visual source of truth. The original Gather G logo is the source of truth for the brand mark. My written requirements below take precedence over incidental text, placeholder content, or imperfect logo rendering in the mockup.

The goal is less reading and a clearer path to joining, while keeping the website visually rich, animated, warm, and memorable. Simple means easy to understand, not visually plain.

## 1. Verify the correct project before changing source files

This task is ONLY for the public website. Do not change the Gather app, its repository, its deployment, authentication, Supabase, rescue operations, signup controls, email configuration, or DNS.

These are research findings to verify, not permission to assume the current production configuration:

- Expected repository: Stonecoast1135/gather-website.
- Latest local directory found in earlier chats: /Users/codytackitt/Projects/gather-website.
- Earlier local directory: /Users/codytackitt/Desktop/gather-website.
- A successful GitHub deployment status points to Vercel project gather-website in scope axiom-caf8.
- A recent website branch is codex/student-launch-links, with commit 8a17a5d22277892a796ea6e15d0d1b8bd044557b, titled "fix: connect public site to Gather web signup."
- The GitHub main branch still contained the initial starter homepage when inspected. Do not assume main is the live website's production branch or the right rebuild base.
- Other website branches include codex/home-foundation, codex/how-it-works, codex/get-involved-cluster, and codex/community-impact-cluster.
- A separate repository called gather-public-website also exists. Do not select it simply because its name sounds appropriate.

Inspect the selected workspace, git root, normalized origin URL, current branch and commit, git status, local worktrees, and remote branches. Fetch remote metadata without overwriting local work. Read the existing project instructions, package files, and relevant deployment documentation. Inspect .vercel/project.json when present, but do not expose credentials or environment-variable values.

Verify the existing Vercel project's connected Git repository, root directory, Production branch tracking, current production deployment commit, and the assignments for gatherforward.org and www.gatherforward.org. Use available authenticated tools or browser access. If that information is inaccessible, ask for the precise missing settings screenshots. A successful Vercel commit status alone does not establish which commit currently serves the custom domain.

Briefly report the verified working folder, repository, chosen base commit, production target, and any uncommitted or unpushed work. If directories or configuration conflict, stop before editing and resolve that specific conflict. Do not search unrelated personal folders or create a replacement repository or Vercel project.

Preserve existing tracked and untracked work before rebuilding. Use a safe local checkpoint or backup that does not commit secrets, private local configuration, or unrelated files. Do not use destructive resets, git clean, force pushes, or delete old branches. "Fresh start" means a new design and implementation, not destroyed history.

Once the project identity is verified, create a new non-production branch such as codex/website-launch-redesign from the verified current website baseline. Preserve useful recent functionality, especially signup and policy links, without inheriting the old visual design. A linked Git worktree is acceptable if necessary to preserve unfinished work, but explicitly report its path and keep it connected to this same repository. Do not build an unrelated copy in a temporary output folder.

## 2. Rebuild within the existing website application

Keep the existing Next.js, React, and TypeScript application. The inspected website branch uses Next.js with the App Router and Tailwind available. Verify the installed versions and use compatible APIs. Do not change framework, add a CMS, or perform unrelated dependency upgrades.

The implementation belongs in the actual website source, principally:

- src/app/page.tsx, layout.tsx, globals.css, and relevant styles.
- src/app/how-it-works/page.tsx.
- src/app/get-involved/page.tsx.
- src/app/impact/page.tsx.
- src/app/about/page.tsx.
- src/components/site-header.tsx, site-footer.tsx, and the new shared components these pages need.
- public/ for production assets, plus the existing App Router icon and metadata files.

Adapt this organization to the verified checkout. Do not create a nested second application. Consolidate repeated buttons, logo rendering, navigation, accordions, and page sections. Keep pages server-rendered where practical, and isolate interactive behavior in small client components.

Read AGENTS.md and DESIGN-BLUEPRINT.md before implementing. This brief supersedes their older visual direction and lengthy page layouts. Update the relevant design guidance to point to the newly approved direction while preserving valid security, truthfulness, and operational requirements. Do not let archived mockups override this attachment.

## 3. Match the approved visual direction

Reproduce the design language and major compositions in the approved board, not just its green-and-cream colors. Preserve the warm ivory backgrounds, deep forest-green controls, near-black green typography, restrained sage accents, bold editorial serif headings, natural photography, rounded buttons, and large organic curved image boundaries.

The board is a presentation of multiple screens. Its dark green outer canvas, panel labels, panel borders, and compressed proportions are not the website itself. Build actual responsive full-width pages. Full-width backgrounds should reach the viewport edges; content should use deliberate gutters and a consistent readable maximum width.

The desktop homepage must retain the recognizable cream-left/photo-right hero with an organic curved boundary. Do not replace it with an ordinary rectangular split hero, a generic gradient, or a centered SaaS landing page. On mobile, preserve the separately composed cream headline area above a substantial, deliberately cropped photograph, connected by the same organic shape language.

Use expressive scale, spacing, photography, and motion for visual interest. Avoid adding more text, badges, slogans, repeated logo stamps, cards, decorative stickers, or complicated illustrations to fill empty space. Cards are appropriate where the board uses them, especially Get Involved and Impact, but not for every section.

Choose one high-quality serif and one clean sans-serif with suitable licensing. Match the reference's proportions and weight closely. Keep body text comfortably readable, generally at least 16px. Buttons need clear focus states and generous touch targets, ideally at least 44px. Establish shared design tokens rather than inconsistent per-page styling.

Use the exact supplied lowercase G with its three leaves wherever the brand mark appears. Do not redraw it with AI, substitute a generic leaf, change its proportions, or append another "gather" wordmark in the header. A monochrome green or cream treatment is acceptable if the silhouette is unchanged. Use the same original-derived mark in the header, footer, launch popup, favicon, and share graphics. Ordinary functional icons for a business, people, home, or clock should remain meaningful icons, not become repeated G logos.

Inspect the logo's transparency and edge quality. Prefer an existing clean, matching original asset if available. Do not silently substitute a different mark when cleaning export artifacts. Never crop a generated logo from the design board and treat it as the real asset.

Remove all handwritten slogans and marginal text decorations. Specifically do not use "Real people. Real impact," "Good food brings people together," or similar little decorative phrases. Also remove the unnecessary decorative slogan from the bottom of the mobile menu. Keep the mobile menu focused on navigation.

## 4. Pages and approved copy direction

### Home: /

Use this hero copy:

Less waste.
More good.

Help rescue food for local organizations and track your volunteer hours with Gather.

Primary button: Join Gather.
Secondary link: How it works.

The primary button goes directly to https://my.gatherforward.org. The secondary link goes to /how-it-works. Keep the primary action readily visible on common desktop and mobile screens without waiting for animation. Do not place it beneath a huge mobile photograph.

Follow the hero with the short visual journey from the board: Businesses share extra food, Students help move it, Organizations receive it. Use three simple icons and a connecting route. The heading "Good food, passed forward." may accompany this section. Do not turn it into another long explanation.

Include one compact student/app section headed "Your time can do more." Keep it to a short sentence and one CTA. Use an accurate, sanitized screenshot from the real current app if one is provided or already available as an approved asset. Do not generate a fictional interface, fake rescue listings, or fake impact totals. If no suitable screenshot exists, use a strong photographic treatment rather than blocking completion or inventing UI.

End with a visually substantial "Join the movement." section and a Join Gather button. Give it breathing room and a strong image or forest-green treatment. Do not repeat a long mission statement, full FAQs, all role cards, and impact reporting on the homepage.

### How It Works: /how-it-works

Match the board's cream page, large centered heading, three photographic stages, numbered green markers, and short connecting arrows. On desktop, the stages sit in a row. On mobile, they become a clean vertical sequence, not three tiny compressed columns.

Use three stages:

1. Businesses share extra food. A business posts food available for pickup.
2. Students help move it. A volunteer picks it up and delivers it to a participating organization.
3. The delivery is confirmed. Completed rescues contribute to service records and impact.

Verify this wording against the actual approved workflow. Do not imply that hours are automatically accepted by every school or program.

Below the stages, use a compact FAQ accordion beside a curved produce photograph, following the reference. Include concise answers about getting started, transportation, how service hours work, and what happens after signup. Use verified policies for eligibility and other factual requirements. Do not invent age limits, school partnerships, or operational guarantees. Optional detail belongs inside closed accordions; requirements that materially affect participation must not be hidden.

### Get Involved: /get-involved

Follow the board's three photographic cards, students first, businesses second, organizations third. Stack them cleanly on mobile. Keep card copy short, headings clear, and actions aligned without forcing awkward empty space.

Students:
"Make your next hours count."
"Help your community through food rescue and keep track of your completed service."
Button: Join Gather, linking to https://my.gatherforward.org.

Businesses:
"Have extra food? Put it to good use."
"Connect your surplus with local organizations through Gather."
Button: Join as a business, linking to https://my.gatherforward.org.
Visible secondary contact: help@gatherforward.org, using a working mailto link.

Organizations:
"Help good food reach your community."
"Get in touch about receiving food through Gather."
Button: Contact us, linking to mailto:help@gatherforward.org.

Do not invent role-specific signup URLs. Use the app's real role-selection flow. Clearly communicate any required business or organization approval using verified information, with brief essential wording and optional accordion detail rather than dense paragraphs.

Student account signup and active food rescues are different launch states. Verify the latest approved state without changing the app. While partner onboarding is still underway, include one concise visible sentence where useful, such as "Signups are open. Local rescue opportunities are coming." Do not suggest that pickups are already available everywhere or claim that unconfirmed partners have joined.

### Impact: /impact

Match the board's leafy produce photograph, clear heading, and three high-contrast metric panels. The heading is "Our measured impact."

Metrics: Food rescued (lb), Rescues completed, and Volunteer hours.

Display exactly "--" for unavailable totals. Preserve genuine measured zero as 0 rather than converting it to a missing state. Do not use demo totals, test rescues, invented statistics, fabricated charts, or fake count-up animations.

Build an explicit data boundary for these three metrics. Use an existing approved aggregate-only source if available and safe. Otherwise use null values with the intentional "--" display and document where real totals can be connected later. Do not introduce database migrations, expose volunteer records, publish service-role keys, or build a new reporting backend for this marketing redesign. Source failures must leave a clean missing-data state rather than false zeroes.

Put optional definitions in one "About these numbers" accordion. Do not use defensive wording such as "Real change, measured honestly," "The public record will start with what can be verified," or long explanations of why numbers are missing.

Retain the reference's quieter image-and-copy section below the metrics. "A brighter tomorrow." is acceptable as its main heading, with one short sentence. Replace the mockup's unidentified cityscape with a suitable community photograph; do not imply an unrelated location is Colorado. Keep all metric text readable over photography on every screen size.

### About Gather: /about

Add a complete About page in the same visual language. It must feel designed with the other pages, not like an unrelated template or a long biography wall.

Use a small "About Gather" label and this main headline:
"Built by students. For our community."

Suggested opening copy:
"Gather connects businesses with extra food, organizations that can use it, and students ready to help. We're making food rescue easier to take part in, with a clear record of completed service."

Pair the text with a substantial natural photograph framed by the same organic curves used elsewhere. Keep the composition distinct from the homepage while clearly part of the same website.

Follow with a short "Why we started" section based on the verified student-founded background. Explain the connection between reducing food waste, supporting local organizations, and making meaningful student service easier. Limit this to two short paragraphs, not a timeline of invented milestones. Mention Colorado roots only if supported by approved project materials.

A concise team section can be included when actual approved names, roles, and usable photographs are available. Do not invent biographies, dates, credentials, partnerships, quotes, or team members. Do not generate portraits and present them as Gather's real founders. Missing team photos should not leave placeholder cards or prevent completion; a well-designed story and mission section is sufficient for launch.

End with a short invitation to join and the same direct signup CTA. Do not claim registered charity status, tax deductibility, or official school endorsement without verified approved material.

## 5. Navigation, links, and existing URLs

Desktop navigation: the exact G mark linked to /, How It Works, Get Involved, Impact, About, and a prominent Join Gather button. Keep the header compact and uncluttered. Use visible current-page states.

On mobile, use a clean menu based on the attached reference, with the exact G, an obvious close control, the four page links, Join Gather, and a small secondary contact/policy area. No decorative quotation at the bottom. Support keyboard operation, Escape, appropriate focus handling, scroll locking, route-change closing, and browser safe areas.

Centralize repeated destinations:
Signup: https://my.gatherforward.org
Email: mailto:help@gatherforward.org
Instagram: https://www.instagram.com/gather.forward/

Use these destinations consistently. Signup should open the real app directly, normally in the same tab, without a marketing detour, fabricated signup form, or app-store requirement. Test the destination. Do not alter the app to make website tests pass.

Keep the footer brief: logo, useful navigation, help email, the real Instagram link, and verified Privacy and Terms destinations. Preserve working published policy links and their approved content. Do not publish new legal terms just to fill a page. Do not add unverified social accounts or decorative dead buttons.

Inventory old public routes. Consolidate legacy role pages to the relevant /get-involved anchors with deliberate redirects, preserve necessary contact/support behavior, and give /download an appropriate route to the actual web app. Check the actual route names before making changes. Avoid redirect loops, broken bookmarks, dead footer links, and stray old-layout pages. Keep removed marketing pages out of the new sitemap.

## 6. Launch popup

Implement the launch announcement as a real accessible component in the shared website layout, not an image of a popup.

Match the reference: softly dimmed and blurred page behind a centered warm-cream card, exact green G at the top, bold serif heading, short copy, full-width green CTA, a quiet "Keep exploring" dismissal, and an obvious close button.

Heading: "Gather just launched!"
Copy: "Student signups are open. Join Gather and get ready to help your community."
Primary CTA: "Join Gather" to https://my.gatherforward.org.
Secondary action: "Keep exploring", which closes the popup.

Show it approximately four seconds after the first eligible visit while the launch campaign is enabled. Verify signup is actually open before enabling the announcement in production. Make the enabled state and campaign identifier easy to change in one place. Do not rely on an ambiguous hard-coded "tomorrow" date.

Track dismissal per browser and campaign so it does not reopen on every navigation or reload. Mount it once in the shared layout and clean up timers. Avoid interrupting an open mobile menu, another dialog, or active text input. Support Escape, keyboard focus trapping, an accessible name, background inertness, and returning focus after dismissal. Storage being unavailable must not crash the site or produce repeated modal loops.

Use a properly fitted card on mobile with safe gutters and no off-screen close control. Keep the page usable before it appears. Reduced motion should remove unnecessary movement without breaking the popup. Include a development-only way to reset the campaign state for testing, without public debug controls.

## 7. Animation and photography

Make the website visibly animated and enjoyable, not just a collection of static sections with one fade-in. Use a coordinated motion system: a short staggered headline entrance, a confident hero-image reveal, gentle section reveals, a route that draws between process steps, polished menu and accordion transitions, and subtle button and card interactions.

Use short purposeful timings, generally about 200-700ms for interface and reveal motion. Keep any parallax restrained, and simplify it on mobile. Motion must not hide critical copy until the visitor scrolls, delay the CTA, hijack scrolling, create jumpy layouts, or run an expensive continuous animation loop. Essential content must remain available if animation or client JavaScript fails. Respect prefers-reduced-motion throughout. Do not add autoplay sound, loaders that gate the whole site, heavy 3D effects, or endlessly floating decorations.

Create or source the required individual photographic assets. The collage is a design reference, not a production image library. Do not crop its small photos into blurry hero assets or place the complete mockup on the page as a screenshot.

You may use available image-generation tools for original, realistic supporting photography. First plan the needed shots and crops so generation stays focused. Match the reference's natural daylight, believable food handoffs, students, produce boxes, and community settings. Inspect hands, faces, food, packaging, and backgrounds for artifacts. Avoid glossy plastic-looking food, impossible objects, fake readable signs, or watermarks. Use clean unbranded clothing rather than inaccurately generated logos.

Keep generated or stock scenes illustrative. Do not label them as real Gather founders, established partners, testimonials, or documented completed rescues. Record asset provenance internally. Prefer suitable real, approved user photos when available. Do not purchase stock, start a subscription, or incur a new paid service charge without approval.

Prepare mobile and desktop crops intentionally. Serve optimized modern formats at appropriate sizes, reserve image dimensions, prioritize the hero appropriately, and lazy-load lower-page images. Keep text and controls as real HTML. Save final assets inside the website project with descriptive names; do not depend on temporary generation URLs or runtime calls to an image-generation service.

## 8. Test the complete website, not just the build

Run the existing lint, type checks, production build, and relevant tests. Add focused tests for navigation, destination constants, popup timing and persistence, accordions, and missing versus zero metric values. Do not delete tests or weaken lint rules to hide problems.

Run the website and inspect every page in an actual browser. Check representative widths around 360, 390, 430, 768, 1024, 1440, and 1920px. Inspect narrow screens, short screens, landscape, and 200% zoom. Check keyboard navigation, visible focus, contrast, reduced motion, image crops, responsive typography, and safe areas. Test direct route loads, refresh, browser Back, every CTA, mailto link, menu item, footer destination, and legacy redirect. Distinguish a WebKit-emulated test from a real Safari device test in the report.

Test the popup with fresh storage, after dismissal, across page changes, after reload, with storage blocked, and with the mobile menu open. Test impact values with null, 0, and a source failure using non-production fixtures only. Confirm there are no hydration warnings, console errors, accidental horizontal scrolling, missing assets, duplicate navigation, or old design fragments.

Capture separate screenshots of every desktop page, every mobile page, the launch popup, and the open mobile menu. Compare them with the approved board. Correct material differences in hero composition, curved masking, type scale, spacing, photo quality, contrast, logo shape, and mobile hierarchy before presenting the result. A successful build alone is not visual approval.

Add appropriate page titles, descriptions, canonical URLs, share metadata, the real favicon, and an updated sitemap. Preserve the existing canonical-domain setup rather than changing DNS. Ensure previews are not accidentally indexed and production is not accidentally noindexed.

## 9. Preview delivery and production safety

After local verification, commit only the intended changes and push the new non-production branch to this same repository. Verify that the push targets a Preview deployment and does not replace the live custom-domain deployment. Use the existing Vercel project, not a new one. If preview creation needs access you do not have, report the exact missing step rather than claiming deployment succeeded.

Return a working preview URL, the repository and working-directory identity, branch and commit, separate desktop/mobile screenshots, actual test results, and any remaining factual or technical blockers. Identify generated imagery and any deliberately unavailable impact-data source. Briefly document where to update copy, signup/contact links, launch-popup settings, and impact totals.

Do not merge into the production branch, promote a deployment, reassign domains, or run a production deployment until I explicitly approve the preview. Preserve the existing rollback target. At approval time, re-check production for newer changes and deploy the exact approved implementation through the verified existing production workflow, then verify the custom domain and links.

Complete all five pages, interactions, assets, and preview QA. Do not give me a static mockup, unfinished secondary pages, dead links, or a generic interpretation of the attachment. Build the approved design as a real website while keeping the app and existing email/domain setup untouched.