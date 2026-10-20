# Gather logo-only rebrand audit

October 2, 2026 · Local candidate only

## 1. Master logo used

The authoritative artwork is the owner's `/Users/codytackitt/Downloads/gather-g.png`: 1254 × 1254, capital serif G with three leaves. An exact byte copy is saved as `public/brand/gather-g-master.png` in the public website repository. SHA-256: `c5103349025176ec8445e64c50ef5ab983ef6704c1dc8ecefc7249da18e2017f`.

The master contains cream `#faf5e7` artwork on `#0c3324`. Deterministic color projection recovers antialiased edge coverage and removes only that flat background. The extracted artwork bounds are x233–1111, y183–1019 (879 × 837). No AI generation, creative redraw, vector reinterpretation, simplified leaf, altered serif, or changed silhouette was used. Every variant fits this same artwork proportionally.

Scope: `/Users/codytackitt/Projects/gather-website` and connected `/Users/codytackitt/Documents/Gather`. The website began clean on `codex/website-launch-redesign` at `08eaf59`. The app began with substantial pre-existing work on `codex/comprehensive-audit-baseline` at `7a29ec8`; that unrelated work was preserved. The current logo-only request supersedes older instructions requiring the lowercase mark or limiting work to the public site.

## 2. Variants created

| Website asset | Canvas | Purpose |
| --- | --- | --- |
| `public/brand/gather-g-master.png` | 1254 × 1254 | Exact original attachment |
| `public/brand/gather-mark-cream.png` | 879 × 837, transparent | Original warm cream silhouette |
| `public/brand/gather-mark-forest.png` | 879 × 837, transparent | Existing Gather forest `#043c32` silhouette |
| `public/brand/gather-mark.png` | 500 × 600, transparent | Existing CSS mask path/canvas; inherited page colors remain unchanged |

Existing website icons use their original forest/cream colors. App assets retain their existing forest backgrounds and cream or white treatments. Resizing uses Lanczos3 and proportional containment. The existing mark slots and canvas dimensions stay fixed. Only artwork scale and whitespace differ where needed to fit the wider capital G.

`scripts/prepare-brand.mjs` records the derivation. Running it from the website with `--app-root /path/to/Gather` optionally regenerates the connected app's images. Final regeneration produced all 18 image assets byte-identically.

## 3. Every old-logo occurrence found

The pre-edit inventory searched filenames and source references across both projects, including components, CSS/SVG/HTML, app configuration, public files, scripts, manifest/service worker, auth email templates, store graphics, reports, and historical screenshots. Candidate brand images were visually inspected; ordinary letters, wordmarks, food leaves, Ionicons, generic functional illustrations, font files, and one-pixel test images were excluded.

The confirmed old asset inventory and replacement status follows. Website paths are relative to the website root; app paths are relative to the connected app root.

| Project | Original old-logo asset | Canvas preserved | Status |
| --- | --- | --- | --- |
| Website | `public/brand/gather-mark.png` | 500 × 600 | REPLACED |
| Website | `src/app/icon.png` | 512 × 512 | REPLACED |
| Website | `src/app/apple-icon.png` | 180 × 180 | REPLACED |
| Website | `src/app/favicon.ico` | One 48 × 48 image | REPLACED |
| Website | `public/share-gather.png` | 1200 × 630 | REPLACED |
| App | `assets/gather-brand-source.png` | 1254 × 1254 | REPLACED |
| App | `assets/icon.png` | 1024 × 1024 | REPLACED |
| App | `assets/splash-icon.png` | 1024 × 1024 | REPLACED |
| App | `assets/favicon.png` | 96 × 96 | REPLACED |
| App | `assets/android-icon-foreground.png` | 512 × 512, transparent | REPLACED |
| App | `assets/android-icon-monochrome.png` | 432 × 432, transparent | REPLACED |
| App | `public/icons/gather-192.png` | 192 × 192 | REPLACED |
| App | `public/icons/gather-512.png` | 512 × 512 | REPLACED |
| App | `store/google/assets/app-icon.png` | 512 × 512 | REPLACED |
| App | `store/google/assets/feature-graphic.png` | 1024 × 500 | REPLACED |

`assets/android-icon-background.png` is an unbranded solid background and remains unchanged. No standalone decorative old mark was found in active page content. No separate old mark was embedded in an inline SVG, base64 image, report, or additional email template.

## 4. Every occurrence replaced

All 15 confirmed old source images were replaced in place. Their existing references now resolve the new capital G. Three master/contrast assets were added. Runtime components, CSS, text, layouts, navigation, buttons, motion, business/rescue logic, permissions, Supabase logic, notifications, and email HTML were not edited.

The share image and Google Play feature graphic retain their original copy and all surrounding pixels. Current design/provenance documentation was updated only to identify the new approved artwork; historical briefs and evidence were retained.

## 5. Website replacements

The unchanged `Logo` component (`src/components/ui.tsx:6`) and `.brand-mark` CSS mask (`src/app/globals.css:86`) render the replaced asset in:

| Surface | Existing source |
| --- | --- |
| Shared desktop/mobile header | `src/components/site-header.tsx:51` |
| Open mobile navigation | `src/components/site-header.tsx:99` |
| Shared footer | `src/components/site-footer.tsx:10` |
| Launch announcement | `src/components/launch-announcement.tsx:103` |
| Open Graph and Twitter previews | `src/lib/metadata.ts:20` and `:31` → `public/share-gather.png` |
| Browser and Apple icons | Next file conventions for the replaced icon files |

Home, How It Works, Get Involved, Impact, About, and the other shared-shell routes inherit the replacement. No hero or page composition changed. Website manifest/PWA source is absent; website Apple/browser icon conventions remain unchanged.

## 6. App replacements

The shared `GatherMark` (`src/components/ui.tsx:30`, image at line 33) still displays `assets/icon.png` in its existing 40 × 40 rounded slot. Its wordmark, light/compact behavior, and wrappers remain unchanged.

Confirmed component occurrences:

| Surface | Existing source locations |
| --- | --- |
| Welcome, sign-in/signup, confirmation/reset, report verification, development preview | `src/screens/auth/WelcomeScreen.tsx:205,250,272,304,325,382,389` |
| Onboarding | `src/screens/auth/OnboardingScreen.tsx:174` |
| Main app header, including dark Impact header | `src/components/ui.tsx:95` (`TopBar`, when no Back control) |
| Font/auth loading | `src/components/ui.tsx:362`; `App.tsx:33,107`; `src/navigation/RootNavigator.tsx:143` |
| Error and blocked/pending account states | `App.tsx:141`; `src/navigation/RootNavigator.tsx:174,180` |
| Business/recipient/admin dashboard headers | `src/screens/business/BusinessDashboardScreen.tsx:66`; `src/screens/organization/OrganizationDashboardScreen.tsx:63`; `src/screens/admin/AdminDashboardScreen.tsx:23` |
| Notification/location education | `src/screens/shared/NotificationEducationScreen.tsx:42`; `src/screens/shared/LocationEducationScreen.tsx:13` |
| Profile footer | `src/screens/student/ProfileScreen.tsx:75` |
| Privacy/Terms/Contact page headers | `public/privacy.html:3`, `public/terms.html:3`, `public/contact.html:3`; generator `scripts/build-public-info.mjs:40`, all use the 192px asset in existing 44 × 44 slots |

Settings/detail screens with back arrows, generic tab icons, and empty-state icons are not separate Gather logo uses. Generated service PDFs (`src/services/reportService.ts`) contain the text wordmark only and remain unchanged.

## 7. Email replacements

`supabase/templates/confirmation.html:7` and `supabase/templates/recovery.html:7` both reference `https://my.gatherforward.org/icons/gather-192.png`, displayed at 56 × 56 with existing rounded corners. Replacing the candidate's 192px image rebrands the candidate previews without changing either HTML file. Source hashes, text, links, buttons, padding, width, and element geometry remain identical.

No separate Resend welcome, transactional, or broadcast logo template was found. Resend is documented as SMTP transport; Supabase confirmation re-delivery is not a separate template. The documented email-change copy is text only; any provider-only branding requires release-time inspection.

Four local browser renders covered confirmation/recovery at 760 × 700 and 390 × 844. The production image URL was fulfilled entirely from local candidate bytes; every other request was blocked. No test or production email was sent. This verifies HTML appearance in Chromium, not real inbox delivery.

## 8. Favicon/PWA/icon replacements

App references were preserved exactly:

- `app.json:7` app icon; `:54,55` Android foreground/monochrome; `:60` web favicon; `:71` splash; `:97` native notification monochrome icon.
- `public/manifest.webmanifest:12,13` 192/512 PWA icons.
- `scripts/finalize-web.mjs:12` existing 192px Apple touch image; no new 180px app source was introduced.
- `public/gather-push-sw.js:9` existing `/favicon.ico` reference, generated from the replaced 96px source.

The offline web export contains the new hashed app image, new favicon, and new 192/512 icons. No service-worker behavior or manifest field changed. Next's website favicon/icon/Apple metadata hashes refreshed automatically, and local HTTP responses matched exact candidate bytes.

Inspected at 16, 32, 48, 64, 128, 180, 192, and 512px. The G remains recognizable and leaves stay visible without clipping. Android foreground/monochrome whitespace was reduced slightly so every nontransparent pixel fits a conservative safe circle within the [official Android 66dp safe zone in a 108dp layer](https://developer.android.com/develop/ui/compose/system/icon_design_adaptive). Final maximum radius (integer pixel convention): foreground 154.402px < 156.444px; monochrome 131.605px < 132px. Original canvases remain 512 and 432px.

## 9. Remaining old-logo references

Post-replacement source/reference search and image inspection found **zero active candidate application, website, or email references resolving old artwork**. Existing filenames intentionally remain stable; an occurrence of `icon.png` or `gather-mark.png` is not an old-logo residual when its bytes are replaced.

Remaining historical/legacy material is classified below. Nothing was deleted or rewritten to erase evidence.

| Remaining item | Classification |
| --- | --- |
| Website `docs/approved-launch-design.png` (prior lowercase logo in approved board) | INTENTIONALLY RETAINED FOR HISTORICAL DOCUMENTATION |
| Website prior rebuild/finishing/refinement briefs and `design-references:/` reference images | INTENTIONALLY RETAINED FOR HISTORICAL DOCUMENTATION; ordinary Gather text and generic marks are not substitution targets |
| Both projects' pre-existing review captures, recovery artifacts, and this audit's BEFORE captures/export | INTENTIONALLY RETAINED FOR HISTORICAL DOCUMENTATION |
| App `docs/audits/gather-core-sweep-donation-posted.jpg` | INTENTIONALLY RETAINED FOR HISTORICAL DOCUMENTATION |
| App `docs/audits/gather-hosted-transfer-confirmed.png` | INTENTIONALLY RETAINED FOR HISTORICAL DOCUMENTATION |
| App `docs/audits/gather-hosted-ui-confirmed.png` | INTENTIONALLY RETAINED FOR HISTORICAL DOCUMENTATION |
| App `docs/audits/images/gather-local-delivery-verified.png` | INTENTIONALLY RETAINED FOR HISTORICAL DOCUMENTATION |
| App `docs/audits/images/gather-local-donation-posted.png` | INTENTIONALLY RETAINED FOR HISTORICAL DOCUMENTATION |
| App `docs/audits/images/gather-local-recipient-offer.png` | INTENTIONALLY RETAINED FOR HISTORICAL DOCUMENTATION |
| App `docs/audits/images/gather-local-transfer-consent.png` | INTENTIONALLY RETAINED FOR HISTORICAL DOCUMENTATION |
| App `docs/audits/images/gather-local-transfer-verified.png` | INTENTIONALLY RETAINED FOR HISTORICAL DOCUMENTATION |
| App `docs/audit/evidence/{after-business-dashboard,after-operations-data-queue,after-volunteer-home-browser,after-welcome-browser,before-welcome-390}.jpg` (older circular sprout) | INTENTIONALLY RETAINED FOR HISTORICAL DOCUMENTATION |
| Pre-existing ignored `dist`, `dist-web`, `dist-auth-qa`, `dist-ios`, `dist-android`, and `.expo/web/cache/production/images/favicon` outputs | UNREFERENCED LEGACY FILE / stale generated outputs; retained separately from the newly built candidate and recovery evidence |

All 43 app audit screenshots were inspected: eight contain the lowercase mark, five the older circular sprout, and 30 no visible old graphic logo. Complete per-image findings are in the email evidence directory. No unidentified active logo surface remains in the available source. Uninspected provider-only templates are explicitly identified below rather than asserted to be rebranded.

## 10. Visual QA result

Website: 13 deterministic before/after captures covered all five launch pages at 1440 × 1000 and 390 × 844, launch popup at both widths, and open mobile menu. Copy, geometry, logo slots, and inherited colors are identical. Zero changed pixels occur outside logo bounds plus their existing backdrop-blur footprint (6px popup / 4px menu). The social image has zero differences outside the logo union, with every copy pixel unchanged.

Emails: all four comparisons have zero changed pixels outside the original 56 × 56 logo. Exact template bytes and element geometry are unchanged.

App: 19 deterministic before/after captures covered 1440 × 1000 desktop and 390 × 844 narrow welcome, sign-in, signup, privacy header, authenticated Home, Profile and its footer, dark Impact, onboarding, plus narrow loading. Authentication/data were synthetic read-only browser fixtures; no account or backend state was created. All 19 screenshots are pixel-identical outside their original 40 × 40 or 44 × 44 logo boxes, with identical canvases, text, and geometry; zero page errors or actual remote requests. Initial font/spinner capture races were corrected in the capture procedure and both baselines repeated; no app source changed. Every pre-existing dirty tracked file remains byte-identical to its initial snapshot. The store feature graphic also has zero changed pixels outside the logo union.

Assets: dimensions, formats/transparency, background colors, leaf visibility, dark/light treatments, safe padding, lack of distortion, and repeatable derivation were checked. No logo-specific clipping, white box, or old-logo residue remains. Native device installation, launcher behavior, notification delivery, live provider email preview, and real inbox clients were not exercised; only local assets and browser candidate rendering were verified.

Evidence locations (gitignored, kept local):

- Website `artifacts/logo-rebrand/`: before/after captures, contact sheets, `comparison.json`, `asset-comparison.json`, `icon-http-verification.json`, focused test report, asset originals/derivation/final hashes, small-icon and historical-reference sheets.
- App `artifacts/logo-rebrand/`: initial state, isolated before/after exports, app captures/comparison, safe padding and regression evidence.
- App `artifacts/logo-rebrand/email/`: unchanged-template hashes, four before/after renders, `comparison.json`, source inventory, and historical-image classifications.

## 11. Test/build result

| Check | Result |
| --- | --- |
| Website `npm run typecheck` | PASS |
| Website `npm run lint` | PASS |
| Website `npm run build` | PASS; all 19 static pages generated |
| Website focused Chromium route/navigation/menu/popup/reduced-motion tests | PASS, 12/12 |
| App `npm run typecheck` | PASS |
| App `npm run release:assets` | PASS, 5/5 required asset validators |
| App staging-config, staging-export-assets, local-runtime tests | PASS, 13/13 |
| App isolated synthetic staging web export, before and after | PASS; no production environment or provider operations |
| Deterministic final image regeneration | PASS, 18/18 assets byte-identical |
| Both repositories `git diff --check` | PASS |

The first website build stalled in the restricted sandbox and was interrupted; the local retry with permitted font/build-worker access completed successfully. Nothing was deployed. App export validation used synthetic staging configuration and denied real network traffic during visual QA.

Pre-existing store validation inconsistency: `scripts/store-check.mjs` expects an alpha channel for Google Play's app icon, while the existing icon is RGB. This task preserves its original RGB format and does not change that unrelated validator. The required app release-asset validation passes. Enormous unrelated suites were not rerun.

## 12. Exact files changed

Website root `/Users/codytackitt/Projects/gather-website`:

1. `DESIGN-BLUEPRINT.md` — current logo authority only.
2. `scripts/prepare-brand.mjs` — deterministic new-master derivation.
3. `public/brand/gather-g-master.png` — added exact supplied master.
4. `public/brand/gather-mark-cream.png` — added transparent cream variant.
5. `public/brand/gather-mark-forest.png` — added transparent forest variant.
6. `public/brand/gather-mark.png` — replaced existing mask.
7. `public/share-gather.png` — logo only.
8. `src/app/icon.png` — replaced mark.
9. `src/app/apple-icon.png` — replaced mark.
10. `src/app/favicon.ico` — replaced mark, same 48px image entry.
11. `docs/audits/gather-logo-rebrand.md` — this report.

App root `/Users/codytackitt/Documents/Gather`:

1. `assets/BRAND_SOURCE.md` — current/historical artwork provenance.
2. `assets/gather-brand-source.png`.
3. `assets/icon.png`.
4. `assets/splash-icon.png`.
5. `assets/favicon.png`.
6. `assets/android-icon-foreground.png`.
7. `assets/android-icon-monochrome.png`.
8. `public/icons/gather-192.png`.
9. `public/icons/gather-512.png`.
10. `store/google/assets/app-icon.png`.
11. `store/google/assets/feature-graphic.png` — logo only, surrounding copy unchanged.

Temporary QA programs and evidence live only in the ignored artifact directories and system temporary directory. Pre-existing app modifications remain unrelated to this task; no app runtime source or configuration was changed by this rebrand.

## 13. Production-only branding surfaces awaiting release

Production remains unchanged. No deployment, migration, commit, push, Supabase modification, rescue enablement, notification/email send, user creation, production data modification, or Axiom operation occurred.

A separately approved release must publish the candidate website/app icons and social graphic, regenerate the production app export/native builds and store assets where applicable, and verify installed-client/icon/social-preview caches. Current URLs and behavior should stay unchanged.

Hosted Supabase Auth confirmation and recovery template copies are documented in `docs/AUTH_EMAIL_TEMPLATES.md` and `docs/LIVE_PRODUCTION_QA.md`. They reference the production `/icons/gather-192.png`, which has not been published here. After approved asset release, verify both provider previews still match source and display the new image. Inspect any additional provider-only templates, including email-change, for a graphic mark; no dashboard access or live template update was performed in this task.

## 14. Final verdict

LOGO REBRAND COMPLETE IN CANDIDATE

This verdict covers available source/local candidate assets and the verified local previews. It does not claim production has been rebranded.
