# Launch popup diagnosis and retest

## Baseline and established findings

Inspected the clean `codex/website-launch-redesign` baseline at `2d0094e09a0d19c2067b7baf0f7e385185c2fbf7` before this finishing pass.

- `LaunchAnnouncement` is mounted once in the shared root layout, outside the route's `children`. Client-side navigation preserves that layout. It is not placed inside a changing page or keyed by pathname.
- The campaign is enabled in `src/lib/launch-campaign.ts`, with ID `student-signups-2026-09` and a 4,000 ms delay. There is no campaign expiry, date gate, or environment-dependent enable switch. The verification comment is not an executable date condition.
- A concrete persistence defect existed: immediately before calling `showModal()`, the component wrote `seen` to `gather:launch:student-signups-2026-09`. The suppression check accepted **any** truthy stored value. Thus display, or even an unsuccessful attempt to open, permanently suppressed the campaign without a visitor dismissal.
- The generic dialog `onClose` handler also wrote `dismissed`, including closes caused by programmatic cleanup. That did not distinguish a visitor's choice from component lifecycle behavior.
- The baseline uses a native modal dialog with a top-layer backdrop. Its reviewed styles include a bounded mobile card and no CSS rule that deliberately hides an open announcement. The initial build's browser tests and screenshots demonstrated fresh-context popup display. This is evidence against a universal missing mount or stacking failure; it does not prove what happened in the user's particular recording.
- The supplied 30-second recording was reviewed through 16 frames. It shows the baseline layout across all five pages and no popup. Browser chrome and the URL are cropped out, and no storage values are visible; those frames cannot establish the recording's origin or dismissal state. Review evidence is retained at `artifacts/finishing/recording/contact-sheet.png`.
- The previous preview verification intentionally dismissed the popup in the user's Safari session. If the recording used that same origin and browser storage, that legitimate dismissal would explain suppression. The recording's storage state and browser context have not been established, so this is a possible explanation, not a claimed diagnosis of the recording.
- The old reset helper existed only in development mode. A Vercel Preview is built in production mode, so that helper was absent from the protected preview.

No claim is made that an older deployment, hydration failure, or timer-reset bug caused the recording. The final preview's commit and live state must be checked as part of delivery.

## Live signup entry recheck

A fresh, unauthenticated Chromium context opened `https://my.gatherforward.org/` on September 24, 2026 at approximately 05:32 UTC and received HTTP 200. Its visible **Get started** button opened the **Join Gather** signup form on the same URL. The form offered **Volunteer**, **Business**, and **Organization** role buttons. Selecting each role kept these visible input labels: **Your name**, **Email**, and **Password**. The password placeholder was **At least 8 characters**. The form also displayed **Have an invite code?**, **I am 13 or older**, **Create account**, and the Terms/community-conduct acceptance control.

This verifies that the public signup entry and role forms are accessible. No personal data was entered, no age or terms checkbox was accepted, and no account was submitted or created. It does not claim that account creation or later onboarding was exercised. All temporary browser contexts were closed after inspection; no app settings, authentication behavior, or existing user storage were changed.

## Bounded correction

The campaign ID and existing `dismissed` records remain unchanged. Only the exact value `dismissed` suppresses the announcement. Legacy `seen` records are left intact and ignored until the visitor makes an intentional choice.

Showing the dialog writes no campaign state. Closing with the close button, Keep exploring, Escape, backdrop, or Join Gather records intentional dismissal. Programmatic close and effect cleanup do not record a visitor choice.

The shared-layout component retains its original deadline in a ref. Navigation before four seconds does not restart the clock. An open menu, another dialog, active text input, or a hidden document defers display until eligible.

Before automatic display, the component checks that dismissal can be saved, using a separate temporary storage probe which is removed immediately. Local storage is preferred, with session storage as fallback. If both are inaccessible or read-only, automatic display is skipped rather than causing repeated interruptions; all page signup links remain usable. Dismissal also has an in-memory guard for the current document.

Only intentional dismissal persists across reload. Reloading a dialog that was never dismissed can show it again after four seconds; it must not be mistaken for an explicit dismissal. Normal client-side navigation does not reopen it.

## Retesting the updated protected preview

1. Open the exact updated preview URL in a fresh private/incognito browser context. Complete Vercel access authentication if prompted. Keep the site tab visible, with its menu closed and no text input active.
2. Wait approximately four seconds. The announcement should appear on desktop or mobile.
3. Choose Keep exploring, then navigate and reload. The announcement should remain dismissed for this campaign.

For the **same protected preview browser** after an intentional dismissal, open Developer Tools → Console and run `window.resetGatherLaunch()`. The helper removes only this campaign's key from local/session storage, clears its in-memory dismissal and reloads the page. It leaves unrelated browser storage alone. Wait four seconds on the refreshed page.

The console-only helper is available in development and when the server explicitly passes `allowPreviewReset` for the existing protected Vercel Preview. It is not enabled for Production, and there is no visible debug control or public reset URL. A fresh private context remains the simplest retest path. No production protection or deployment settings were changed for this feature.

## Verification status

Focused tests cover fresh desktop/mobile display, approximately four-second timing, no dismissal writes on display, legacy `seen`, programmatic close, navigation before the deadline, navigation/reload after intentional dismissal, local-to-session fallback, both stores blocked, menu/input deferral, keyboard trapping and focus return, and the protected-preview reset's limited storage scope.

The finishing-pass full run used the production-mode Preview build, `PLAYWRIGHT_PREVIEW_RESET=true`, one worker, and a 90-second per-test budget. It completed all 147 cases across Chromium, Firefox, and WebKit in 5.1 minutes: **145 passed, 2 failed, 0 skipped, 0 retries**. All new persistence, navigation-deadline, reset, blocked-storage, and deferral cases passed. The two failures were the same existing popup fade-in contrast issue sampled by axe in Chromium and Firefox: button text briefly reached 4.34:1 and 4.21:1 against a 4.5:1 requirement while the dialog opacity animated from zero. WebKit's later sample passed. The assertions were not weakened or delayed to avoid that finding.

The complete first-run HTML/JSON reports, screenshots, and traces are preserved under `artifacts/finishing/full-run/`. The popup entrance was changed to transform-only so it maintains contrast throughout. After rebuilding, the final targeted regression completed **66 of 66 cases passing, 0 skipped, 0 retries**, in 4.5 minutes: all 33 popup cases, all 27 responsive viewport cases, three mobile-home axe audits, and three mobile-primary-action placement checks. Both previously failing contrast assertions passed unchanged. These final reports are preserved under `artifacts/finishing/focused-final/`.

The full run and targeted final run together provide passing evidence for all 147 distinct cases; this was not a second full-suite run. The WebKit project is engine emulation, not a physical Safari device. A separate 11-check motion/layout review also passed: four animated sections in normal and reduced-motion modes, plus mobile collage non-overlap at 360, 390, and 430 px. Its evidence is `artifacts/finishing/motion-results.json`, produced by `scripts/verify-finishing-motion.mjs`. The final screenshot manifest contains 29 captures, including fresh-context desktop/mobile popup views.
