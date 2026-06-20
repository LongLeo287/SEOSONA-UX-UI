# Design Rules
# Hard constraints for all visual design decisions in this system

---

## Layout Rules

- **Container max-width:** 1280px, centered, with horizontal padding 24px (mobile) → 32px (tablet) → 48px (desktop)
- **Section vertical padding:** Minimum 64px mobile, 96px desktop
- **Grid:** 4-col mobile, 8-col tablet, 12-col desktop
- **Breakpoints:** 320px | 640px | 768px | 1024px | 1280px | 1536px
- **Whitespace:** When in doubt, add more. Dense layouts reduce trust and comprehension.

## Color Rules

- Colors must come from the active project palette in `4_LIBRARY/tokens/palettes/`
- Use CSS custom properties (`--color-*`) — never raw hex in component files
- Maximum 3 accent colors per page — primary, secondary, and one highlight
- Background-to-text contrast ratio must be ≥ 4.5:1 (WCAG AA)
- No pure black `#000000` or pure white `#FFFFFF` — use near-black/near-white

## Typography Rules

- Maximum 2 font families per project (heading + body)
- Line height for body text: 1.5–1.7
- Line height for headings: 1.0–1.2
- Maximum line length: 70–80 characters for body text
- Minimum font size: 14px for any text user needs to read
- Font weight for readability: body minimum 400, UI labels minimum 500

## Component Rules

- Buttons must have visible hover AND focus states
- Interactive elements minimum 44×44px tap target (mobile)
- Card hover: prefer `translateY(-4px)` + `box-shadow` over color change alone
- Forms: label above input, not placeholder as label
- Images: always `object-fit: cover` with defined `aspect-ratio`
- Icons: decorative icons use `aria-hidden="true"`, meaningful icons have `aria-label`

## Hierarchy Rules

- One H1 per page
- H-tag levels must not be skipped (H1 → H2 → H3, never H1 → H3)
- CTA buttons: one primary per screen viewport, secondary as supporting
- Visual weight flows: Size > Color > Weight > Position
