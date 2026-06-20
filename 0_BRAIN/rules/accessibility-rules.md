# Accessibility Rules
# WCAG 2.1 AA compliance — non-negotiable for all deliverables

---

## Color & Contrast

- Normal text (< 18px regular, < 14px bold): contrast ratio ≥ **4.5:1**
- Large text (≥ 18px regular, ≥ 14px bold): contrast ratio ≥ **3:1**
- UI components & graphical objects: contrast ratio ≥ **3:1**
- Never rely on color alone to convey meaning (add icon, label, or pattern)

## Keyboard Navigation

- All interactive elements must be reachable via Tab key
- Logical tab order must match visual reading order
- Skip-to-main-content link required on all pages with navigation
- Focus styles must be clearly visible (min 2px solid outline, contrasting color)
- Custom components (dropdowns, modals, tabs) must follow ARIA Authoring Practices

## Images & Media

- All `<img>` tags require `alt` attribute
- Decorative images: `alt=""` (empty string, not omitted)
- Meaningful images: descriptive `alt` text (describe content, not appearance)
- Background images carrying content must have text equivalent in DOM
- Video must have captions; audio must have transcripts

## Motion & Animation

- All non-essential animations must respect `prefers-reduced-motion: reduce`
- No content that flashes more than 3 times per second
- Parallax effects must be reduced or disabled for motion-sensitive users
- Auto-playing animations must have pause control

## Forms

- Every input must have a visible `<label>` (not just placeholder)
- Error messages must identify which field has the error and how to fix it
- Required fields must be marked (not just by color — use asterisk + legend)
- Form submit must provide meaningful feedback (success/error state)

## Semantic HTML

```html
<!-- Use semantic elements -->
<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>
<h1>–<h6> in correct hierarchy
<button> for actions, <a> for navigation
<ul>/<ol> for lists, not <div> chains
<table> with <th scope="col/row"> for tabular data
```

## ARIA Usage

- Use ARIA only when semantic HTML is insufficient
- `role="button"` only on non-button elements styled as buttons
- `aria-label` for icons without visible text labels
- `aria-describedby` for inputs with helper text
- `aria-live` regions for dynamically updated content
- Never use `aria-hidden="true"` on focusable elements

## Testing Checklist (Before Delivery)

- [ ] Tab through entire page — all interactive elements reached
- [ ] Screen reader test (NVDA/VoiceOver) — all content announced correctly
- [ ] Color contrast checked (WebAIM Contrast Checker or axe DevTools)
- [ ] Zoom to 200% — no content lost or overlapping
- [ ] Keyboard only — all functionality accessible without mouse
- [ ] prefers-reduced-motion — animations disabled or reduced
