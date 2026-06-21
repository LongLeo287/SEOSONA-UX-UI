# Icon System Guide
# UX-UI System — 4_LIBRARY/tokens/ICON_SYSTEM.md

---

## Primary Icon Library: Lucide Icons

**CDN:**
```html
<script src="https://unpkg.com/lucide@latest" defer></script>
<!-- After DOM ready: lucide.createIcons() -->
```

**Usage:**
```html
<!-- Replace icon-name with any Lucide icon -->
<i data-lucide="arrow-right" style="width:18px;height:18px;" aria-hidden="true"></i>

<!-- Browse all icons: https://lucide.dev/icons -->
```

**Initialize:**
```javascript
// In your script after DOM ready
if (typeof lucide !== 'undefined') lucide.createIcons();
```

---

## Fallback: Inline SVG (no dependency, best performance)

Use inline SVG for critical above-the-fold icons.

```html
<!-- Arrow right -->
<svg width="18" height="18" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <path d="M5 12h14M12 5l7 7-7 7"/>
</svg>

<!-- Check mark -->
<svg width="16" height="16" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2.5"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <polyline points="20 6 9 17 4 12"/>
</svg>

<!-- X (close/error) -->
<svg width="16" height="16" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2"
     stroke-linecap="round" stroke-linejoin="round"
     aria-hidden="true">
  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
</svg>
```

---

## Frequently Used Lucide Icon Names

| Icon | Name | Use Case |
|---|---|---|
| → | `arrow-right` | Primary CTA direction |
| ↗ | `external-link` | External links |
| ✓ | `check` | Feature list, success |
| ✗ | `x` | Close, error, disabled |
| ⚡ | `zap` | Speed, energy, performance |
| 🏆 | `award` | Trust, social proof |
| 📅 | `calendar` | Book a call CTA |
| ▶ | `play-circle` | Video/demo CTA |
| ⚙️ | `settings` | Configuration |
| 📊 | `bar-chart` | Analytics, reporting |
| 🔒 | `lock` | Security, trust |
| 🌐 | `globe` | Global, international |
| 💬 | `message-circle` | Support, chat |
| 📧 | `mail` | Email, newsletter |
| 📱 | `smartphone` | Mobile, app |
| 🎯 | `target` | Goals, marketing |
| 🚀 | `rocket` | Launch, growth |
| ⭐ | `star` | Rating, favorite |
| 👤 | `user` | Profile, account |
| 👥 | `users` | Team, community |

---

## Brand / Social Icons (Migrated Assets)

Located in `4_LIBRARY/icons/social/`:

| Brand | File | Format |
|---|---|---|
| Facebook | `Facebook Logo/Facebook_Logo_Primary.png` | PNG |
| Messenger | `Messenger Icon/Messenger_Icon_Primary_Blue.png` | PNG + SVG |
| YouTube | `YouTube Icon/yt_icon_red_digital.png` | PNG |
| Zalo | `Zalo.png` | PNG |

---

## Client Logos

Located in `4_LIBRARY/icons/client-logos/`:

`anthienhuong.png`, `decordi.png`, `kimquoctien.png`, `manhhe.png`,
`misa.png`, `miviet.png`, `pos365.png`, `tannhathuong.png`,
`thethaonamviet.png`, `thienson.png`, `tschem.png`, `vietmap.png`

**Logo grid usage:**
```html
<div class="logos-grid" aria-label="Our clients">
  <img src="../icons/client-logos/misa.png" alt="MISA" width="120" height="48" loading="lazy">
  <!-- ... -->
</div>
```

---

## Icon Sizing Guidelines

| Context | Size | CSS |
|---|---|---|
| Inline with text (body) | 16px | `width:16px;height:16px` |
| Button icon | 18px | `width:18px;height:18px` |
| Feature card icon | 22–24px | `width:22px;height:22px` |
| Section icon | 28–32px | `width:28px;height:28px` |
| Hero icon / decorative | 40–48px | `width:40px;height:40px` |

---

## Accessibility Rules For Icons

```html
<!-- DECORATIVE icon (has text label nearby) — hide from screen reader -->
<i data-lucide="arrow-right" aria-hidden="true"></i>

<!-- MEANINGFUL icon (icon-only, no text) — must have aria-label on parent -->
<button aria-label="Close dialog">
  <i data-lucide="x" aria-hidden="true"></i>
</button>

<!-- NEVER add aria-label directly to <i> or <svg> — add to the button/link -->
```
