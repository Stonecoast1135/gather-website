# Approved-design rebuild handoff

## Project and release boundary

- Working directory: `/Users/codytackitt/Projects/gather-website`.
- Repository: `https://github.com/Stonecoast1135/gather-website.git`.
- Review branch: `codex/website-launch-redesign`.
- Verified live baseline: `8a17a5d22277892a796ea6e15d0d1b8bd044557b`, on `codex/student-launch-links`.
- Existing Vercel project: `gather-website`, scope `axiom-caf8`, repository root, connected to the same GitHub repository. Automatic Production branch: `main`.
- Starting production deployment and rollback target: `dpl_Fh7icj15AkwidjTLwCg3NJvBZX1N` (`gather-website-q9hzj02tu-axiom-caf8.vercel.app`). This baseline was deployed with Vercel CLI.
- `gatherforward.org` redirects to `www.gatherforward.org`; those assignments are unchanged.

The previous local checkout, `codex/cinematic-rebuild-20260911` at `83ab62dd1db6754459eb45fe63992877372d87b6`, was clean but had two unpushed commits. It remains preserved on that branch. The existing `/private/tmp/gather-website-student-launch` linked worktree is also unchanged. No reset, force push, branch deletion, replacement repository, or replacement Vercel project was used.

This delivery is Preview only. Do not merge, promote, deploy production, or reassign a domain before owner approval. At approval time, re-check for newer production changes and rebuild the exact approved commit for Production through the existing project with `VERCEL_ENV=production`. Do not directly promote the built Preview artifact: its intentionally baked-in `noindex` metadata and `Disallow: /` robots policy must be regenerated for Production. Existing Vercel preview authentication remains enabled; reviewers need access to the project.

## What is implemented

Five complete pages follow the approved board: Home, How It Works, Get Involved, Impact, and About. Shared navigation, mobile menu, footer, launch announcement, accordions, photographic curves, purposeful motion, reduced-motion fallbacks, accessible controls, and original-derived brand assets are included. Contact and Support remain available; legacy role URLs redirect to corresponding Get Involved anchors. Download and published policy links lead to the real app.

The exact supplied G silhouette is cleaned and recolored, not redrawn. Five generated photographic scenes are illustrative; they are not presented as actual Gather volunteers, partners, founders, locations, or completed rescues. See [asset provenance](LAUNCH-ASSETS.md).

The live app's public signup flow and published policies were inspected without submitting a form or changing an account. Volunteer, Business, and Organization roles are available. Published Terms require accounts to be 13+, distinguish account signup from authorization for physical pickups, require approval for businesses/recipient organizations, and place school acceptance with the relevant program. The website communicates the student signup launch and coming local opportunities without asserting established partners or universal availability.

No approved aggregate impact source is connected. The three public totals intentionally display `--`. The boundary preserves genuine zero as `0` and handles failures without inventing zeroes. No private records, database changes, or service credentials are introduced.

## Maintenance

See [README](../README.md) for exact copy, destination, popup, image, and impact update locations. In particular:

- Copy lives in the five page files under `src/app`.
- Signup, email, Instagram, and policy destinations live in `src/lib/site-config.ts`.
- Popup enabled state, campaign identifier, and delay live in `src/lib/launch-campaign.ts`. Development-only reset: `window.resetGatherLaunch()`.
- Approved aggregate totals can be connected at `src/lib/impact.ts`.
- The shared motion plan is in [DESIGN-BLUEPRINT.md](../DESIGN-BLUEPRINT.md).

## Review evidence

Local screenshots, browser reports, and review notes are saved under the gitignored `artifacts/launch` folder. `review.html` contains separate desktop and mobile captures for all five pages, both popup sizes, and the mobile menu. The screenshot manifest records actual capture dimensions and browser. Tests preserve failed initial runs as well as corrected targeted reruns, so the evidence is not overwritten to conceal findings.

Final validation: production build, ESLint, TypeScript, and `git diff --check` pass. All 129 distinct browser cases have passing evidence across Chromium, Firefox, and Playwright WebKit. The full run passed 125/129; focused reruns resolved the four findings, and all six final dialog regression checks passed against the rebuilt source. The fixes address WebKit Tab confinement and menu-trigger focus restoration; the harness corrections use a controlled popup clock and explicit focus-ring checks independent of the browser's native link-tabbing preference. Two focused Firefox cases needed a serial rerun with a longer aggregate startup budget; individual assertions and interaction limits were unchanged.

Coverage includes direct loads and refreshes, browser Back, signup/link destinations, legacy redirects, all five pages with JavaScript disabled, accordions, missing/zero/failure impact fixtures, responsive widths from 360 to 1920 pixels, short and landscape screens, reduced motion, menu and popup accessibility, popup storage and interruption cases, and desktop/mobile axe accessibility scans. No unresolved hydration, console, overflow, image, or automated accessibility failures remain in the tested cases.

Deployment preflight includes an explicit `.vercelignore`: local evidence, prior caches, configuration secrets, and reference files are excluded from the CLI upload. The verified application payload is approximately 3.3 MB.

Playwright WebKit checks are engine emulation, not a physical iOS Safari test. Safari on this Mac was separately inspected at actual 200% browser zoom: the Home hero and action, and How It Works stages, remained readable and usable. A physical mobile Safari device was not available.

The authenticated app, rescue operations, authentication, Supabase, email settings, DNS, and production domain assignment are outside this rebuild and remain untouched.
