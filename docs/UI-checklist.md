UI Component Checklist — Kenyan Highschool

This checklist translates the project brief into a practical component inventory with behavior, props, accessibility, and UX notes.

Core layout & scaffolding
- AppShell: root layout, max-width container, responsive grid.
  - Props: `children`.
  - Accessibility: preserves document flow, landmarks (header, main, nav, footer).
  - Behavior: responsive two-column layout, collapses to single column on small screens.

- Header / Navbar
  - Components: `Navbar`, `MobileNav`, `NavLink`, `Search` (optional).
  - Props: active route, intent selector, nav items.
  - Accessibility: keyboard focus, ARIA labels, skip-to-content link, sticky behavior.
  - Behavior: sticky at top, mobile slide-in, dropdowns for long menus.

Hero & hero variants
- Hero (polished)
  - Props: `title`, `subtitle`, `media`, `ctaPrimary`, `ctaSecondary`, `tone` (info/critical/highlight).
  - Accessibility: semantic headings, alt text for media, focusable CTAs.
  - Behavior: layered background, subtle entrance animation, responsive stacking.

Cards & content surfaces
- Card
  - Props: `title`, `meta`, `children`, `actions`, `variant`.
  - Accessibility: proper headings, keyboard-focusable actions.
  - Behavior: soft shadow, rounded corners, hover lift, compact / roomy density variants.

Feeds, lists & timelines
- ContentFeed
  - Props: `items[]` (structured content model), `renderItem` override.
  - Behavior: sorts via content engine, collapse low-priority items, pagination or infinite-load.

- Timeline
  - Props: `events[]`, `groupBy` (term/year), compact/expanded.
  - Behavior: vertical timeline with dates, keyboard accessible, prints well.

Forms & progressive flows
- FloatingInput
  - Props: `label`, `value`, `onChange`, `type`, `error`.
  - Accessibility: associate label with input, keyboard order, ARIA-invalid.
  - Behavior: floating label, inline validation, success feedback.

- Stepper / Admissions flow
  - Props: `steps[]`, `current`, `onNext`, `onBack`.
  - Behavior: progressive disclosure, autosave to localStorage, summary before submit.

Dialogs, drawers & overlays
- Modal
  - Props: `open`, `title`, `onClose`, `children`.
  - Accessibility: `aria-modal`, focus trap (or initial focus), ESC to close, backdrop click to close optional.

- Drawer
  - Props: `open`, `position`, `onClose`.
  - Behavior: slide-in for mobile menus or side flows, ESC to close, inert background.

Media & gallery
- ImageLazy
  - Props: `src`, `alt`, `width`, `height`, `placeholder`.
  - Behavior: lazy-load with IntersectionObserver, low-res placeholder, lightbox on click.

Interaction components
- Button
  - Variants: primary (navy), secondary (ghost), accent (gold), danger (maroon).
  - Accessibility: visible focus ring, aria-pressed when toggle.

- Tabs & Accordion
  - Use tabs for orthogonal views; use accordions for long, scannable content.
  - Ensure keyboard navigation (left/right or up/down for tabs, Enter/Space to toggle accordions).

Utility & feedback
- Toast / inline alerts
  - Use for brief confirmations; warnings and critical alerts escalate to hero / sticky CTA.

- Loading & empty states
  - Provide skeletons for feeds, descriptive empty copy, actions to resolve empty state.

Accessibility & motion
- Motion
  - Use subtle motion: durations 120–240ms, easing `cubic-bezier(.2,.9,.4,1)`, respect `prefers-reduced-motion`.

- Contrast & typographic scale
  - Ensure all text meets WCAG AA (or AAA for large text) contrast ratios. Provide scalable font sizes and generous spacing.

Content modeling expectations
- Content items (announcement, event, notice, result, alert) must include: `id`, `type`, `audience[]`, `priority`, `status`, `validFrom`, `validTo`, `createdAt`, `title`, `body`, optional `cta`.

Design rules / behavior
- Urgency-driven layout: critical alerts override and may appear as full-width banners; high priority items surface in hero/CTA; normal items in feed; low items collapse.
- Term-aware rendering: content and CTAs auto-enable/disable based on term dates and exam periods.
- Intent-aware ordering: local heuristics and persisted intent influence feed ordering and CTA prominence.

Developer notes
- Split presentational and domain logic: UI components should be pure and stateless; `ContentEngine` handles all filtering, scoring, persistence.
- Provide Storybook or simple demo pages for each component.
