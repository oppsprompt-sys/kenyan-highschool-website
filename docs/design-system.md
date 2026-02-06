Design System — Kenyan Highschool

Purpose: a restrained, academic palette and token set that communicates trust, growth, and tradition.

Colors
- Primary (Navy): `#0B2545` (use for primary CTAs, headings)
- Secondary (Forest): `#1F6F3A` (success/growth accents)
- Accent (Gold): `#C79A2B` (sparingly for badges/CTA accents)
- Tradition (Maroon): `#6B0F0F` (important warnings, ceremonial accents)
- Neutral light: `#F7F3EF` (background)
- Neutral mid: `#EEF2F7` (surfaces)
- Text primary: `#0B2545` (headings)
- Muted: `#566174` (meta text)

Typography
- Font family: system stack (Inter preferred).
- Scale (desktop recommended):
  - Display / XL: 28px (700)
  - H2 / L: 20px (700)
  - Body / M: 16px (400)
  - Small: 14px (400)
  - Utility: 12px

Spacing
- Modular scale (px): 4, 8, 12, 16, 24, 32, 48
- Use `--space-4` (16px) as base gutter; increase for hero and content breathing room.

Motion
- Durations: fast 120ms, medium 240ms
- Easing: cubic-bezier(.2,.9,.4,1)
- Respect `prefers-reduced-motion`

Elevation
- Soft: 0 4px 12px rgba(11,37,69,0.06)
- Mid: 0 8px 30px rgba(11,37,69,0.08)

Components & usage
- Buttons: Primary (navy), Secondary (ghost), Accent (gold)
- Hero: layered backgrounds, strong title, succinct supporting copy, primary CTA + secondary ghost CTA
- Cards: consistent padding, rounded corners (10–12px), soft shadows, hover lift
- Forms: floating labels, helpful microcopy, inline validation states (error: maroon outline + message)
- Alerts: critical uses maroon band + white text; high uses navy card in hero; normal uses card in feed

Accessibility
- Contrast: ensure text ratios meet WCAG AA; prefer larger type for headings to achieve AAA.
- Focus: use 3px focus ring with semi-opaque navy overlay.

Tokens (CSS variables)
- `--color-navy`, `--color-forest`, `--color-gold`, `--color-maroon`, `--bg`, `--card`, `--muted`.
- use spacing tokens `--space-1` .. `--space-6` and typography tokens `--type-sm` etc.

Developer notes
- Export tokens to JSON when integrating with a design tool or theme provider.
- Keep components stateless where possible; read tokens from CSS variables.
