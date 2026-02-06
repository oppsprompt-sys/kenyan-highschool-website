Figma → React Translation Prompt

Use this template when handing frames to a code generator or converting Figma designs into React components.

Context:
- Project: Kenyan Highschool website. Use design tokens from `docs/design-system.md` and CSS variables in `src/App.css`.
- Output: small, accessible React functional components (no class components), hooks allowed, presentational components should be stateless.

Prompt (fill placeholders):

"You are a skilled frontend engineer converting Figma frames into production-ready React components. Use functional components and export defaults. Use the existing CSS variables/tokens (list tokens) and prefer classNames over inline styles. For icons use SVGs inline. Ensure accessible markup: semantic headings, `aria-*` attributes for interactive controls, keyboard navigation for tabs/accordions, and visible focus rings. Respect `prefers-reduced-motion`.

Input frame: [Describe Figma frame name, layers, text, spacing].

Requirements:
- Component name: `<ComponentName>`.
- Props: include `className`, `children`, and necessary data props (list).
- Behavior: describe interactions (hover, focus, open/close, validation).
- Accessibility: role, aria attributes, keyboard behavior.
- Assets: provide `png`/`svg` names or placeholders; return `ImageLazy` usage for photos.

Deliverables:
- A single React file `src/components/<ComponentName>.jsx` exporting the component.
- Use existing shared primitives: `Button`, `Card`, `ImageLazy`, `FloatingInput` when applicable.
- Include minimal CSS class names that map to tokens; avoid duplicating global tokens.
- Include a brief usage example as a code snippet and list required props and types.

Example instruction:
- "Convert Figma frame 'Hero - Admissions' into `HeroAdmissions` component. Props: `title`, `subtitle`, `ctaPrimary`, `ctaSecondary`, `imageSrc`. Behavior: primary CTA triggers `onPrimary()`, secondary opens `Modal`. Include ARIA attributes and keyboard focus management. Use `--color-navy` and `--color-gold` tokens." 

Notes:
- When producing multiple components, provide a short story/demo page that composes them together.
- If a design uses a complex grid, translate to CSS grid with responsive `minmax` breakpoints.
- Keep markup clean; prefer small, composable components rather than monoliths.

"End of prompt"
