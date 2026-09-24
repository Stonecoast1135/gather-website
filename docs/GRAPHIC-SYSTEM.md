# Gather editorial graphics

The finishing pass preserves the approved photography, typography, curves, and exact Gather mark. These original vector illustrations explain food rescue and service; they do not depict actual operations, app screens, measured hours, named partners, or coverage.

## Visual rules

Six subjects share a 240 × 180 artboard, 2.5-unit forest outlines, rounded joins, warm cream interiors, muted sage forms, and small food-derived tan accents. Their substantial forms work at roughly 160–280 px wide. Anonymous volunteers have no individual identity. Food leaves belong to produce, never branding. The original Gather G does not appear inside the illustration family.

## Motion plan

| Treatment | Purpose and trigger | Start → end | Timing | Mobile and reduced motion |
| --- | --- | --- | --- | --- |
| Rescue connectors | Explain the direction between three stages when the enclosing Reveal enters view | Complete static fallback; an entry-only overlaid route draws from its first stage to its next | 620 ms, ease-out; second connector delayed 110 ms | Recompose into vertical connectors; 450 ms without stagger. Reduced motion remains fully drawn. |
| Illustrated stage progression | Give the stages a restrained sequence without delaying their meaning; same Reveal trigger | Visible artwork 7 px lower → final position; all labels remain visible throughout | 540 ms, ease-out; up to 160 ms stagger | 380 ms without stagger; no movement for reduced motion. |
| Standalone composition | Bring a purposeful illustration into the surrounding photo/copy composition on its existing Reveal entry | Visible foreground 5 px lower → final position | 520 ms, ease-out | 380 ms or none for reduced motion. No looping. |

No essential content starts hidden, no illustration loops, and no additional observer or motion dependency is introduced. The CSS recognizes an ancestor `[data-visible="true"]` or `.is-revealed`. Server-rendered graphics and text remain complete when JavaScript is disabled.

## API and integration

Import from `@/components/gather-graphics`. That module imports its own scoped stylesheet.

- `GatherIllustration({ kind, className? })`: `kind` is `storefront`, `food-box`, `volunteer`, `community`, `service`, or `clock`. Decorative SVG with a 240 × 180 viewBox. The parent supplies relevant visible text. Set its width through the passed class; height scales automatically.
- `RescueRoute({ className? })`: ordered, accessible three-stage Home centerpiece. Includes “Businesses share extra food.”, “Students help move it.”, and “Organizations receive it.” in ordinary HTML. Supply the section heading outside it and wrap in an existing Reveal for entry motion.
- `MissionGraphic({ className? })`: decorative scene connecting food, volunteers, and a community destination. Horizontal on desktop, recomposed into a compact diagonal connection on mobile so each drawing stays substantial. Suitable beside the About story; the parent supplies meaning in visible copy.

Primary class hooks are `.gather-illustration`, `.rescue-route`, `.rescue-route__stage`, `.rescue-route__copy`, and `.gather-mission-graphic`. Colors can inherit local `--graphic-cream`, `--graphic-sage`, `--graphic-wash`, `--graphic-tan`, and `--graphic-forest` overrides for a dark section, without modifying the source vectors.
