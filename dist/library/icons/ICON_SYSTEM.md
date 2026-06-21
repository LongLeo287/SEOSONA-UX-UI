# Icon System
# UX-UI System — 4_LIBRARY/icons/ICON_SYSTEM.md

---

## Approved Icon Libraries

### Primary: Lucide Icons (Recommended)
- **CDN:** `https://unpkg.com/lucide@latest`
- **Style:** Clean, consistent 24×24 stroke icons
- **License:** ISC (free, commercial use OK)
- **Count:** 1400+ icons

```html
<!-- Load Lucide -->
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>

<!-- Usage -->
<i data-lucide="arrow-right" aria-hidden="true"></i>
<i data-lucide="check-circle" aria-hidden="true"></i>
<i data-lucide="star" aria-hidden="true"></i>
```

### Secondary: Heroicons
- **CDN:** Use as inline SVG (paste from heroicons.com)
- **Style:** 24px outline / 20px solid variants
- **License:** MIT

### Tertiary: Custom SVGs (`svg/` directory)
- For brand-specific or unique icons not in libraries
- Must follow naming: `icon-{name}.svg`
- Always 24×24 viewBox, currentColor stroke

---

## Usage Rules

### Accessibility

```html
<!-- Decorative icon (next to visible label) -->
<button>
  <i data-lucide="mail" aria-hidden="true"></i>
  Send Email
</button>

<!-- Meaningful icon (no visible label) -->
<button aria-label="Close dialog">
  <i data-lucide="x" aria-hidden="true"></i>
</button>

<!-- Icon with tooltip -->
<button aria-label="Settings">
  <i data-lucide="settings" aria-hidden="true"></i>
</button>
```

### Sizing

```css
/* Standard sizes */
.icon-xs  { width: 16px; height: 16px; }
.icon-sm  { width: 20px; height: 20px; }
.icon-md  { width: 24px; height: 24px; }  /* Default */
.icon-lg  { width: 32px; height: 32px; }
.icon-xl  { width: 48px; height: 48px; }
.icon-2xl { width: 64px; height: 64px; }

/* Icon in button */
button svg, button [data-lucide] {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}
```

### Color

```css
/* Icons inherit color from parent by default */
.icon-primary { color: var(--color-accent-primary); }
.icon-muted   { color: var(--color-text-muted); }
.icon-inverse { color: var(--color-text-inverse); }
.icon-success { color: var(--color-success); }
.icon-warning { color: var(--color-warning); }
.icon-error   { color: var(--color-error); }
```

---

## Common Icons Quick Reference

| Purpose | Lucide Name |
|---|---|
| Arrow right | `arrow-right` |
| Arrow left | `arrow-left` |
| External link | `external-link` |
| Check / success | `check`, `check-circle` |
| Close / X | `x`, `x-circle` |
| Menu | `menu` |
| Search | `search` |
| Settings | `settings` |
| User | `user`, `users` |
| Star / rating | `star` |
| Mail | `mail` |
| Phone | `phone` |
| Location | `map-pin` |
| Calendar | `calendar` |
| Clock | `clock` |
| Upload | `upload` |
| Download | `download` |
| Share | `share-2` |
| Edit | `pencil`, `edit-2` |
| Delete | `trash-2` |
| Plus | `plus`, `plus-circle` |
| Minus | `minus` |
| Info | `info` |
| Warning | `alert-triangle` |
| Error | `alert-circle` |
| Lock | `lock` |
| Unlock | `unlock` |
| Eye / show | `eye` |
| Eye off / hide | `eye-off` |
| Chart | `bar-chart-2`, `trending-up` |
| Globe | `globe` |
| Code | `code`, `code-2` |
| Zap / lightning | `zap` |
| Shield | `shield`, `shield-check` |
| Heart | `heart` |
| Thumbs up | `thumbs-up` |
| Send | `send` |
| Copy | `copy` |
| Link | `link`, `link-2` |
