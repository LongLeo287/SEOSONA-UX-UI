# Skill: Web Performance For UI/UX
# UX-UI System — 2_KNOWLEDGE/skills/web-performance.md

---

## Core Web Vitals Targets (2025)

| Metric | Good | Needs Improvement | Poor |
|---|---|---|---|
| **LCP** (Largest Contentful Paint) | < 2.5s | 2.5–4.0s | > 4.0s |
| **INP** (Interaction to Next Paint) | < 200ms | 200–500ms | > 500ms |
| **CLS** (Cumulative Layout Shift) | < 0.1 | 0.1–0.25 | > 0.25 |
| **FCP** (First Contentful Paint) | < 1.8s | 1.8–3.0s | > 3.0s |
| **TTFB** (Time to First Byte) | < 800ms | 800–1800ms | > 1800ms |

**Pass threshold:** 75th percentile of real user traffic must be in "Good" range.

---

## HTML Output Rules (Non-negotiable)

```html
<!-- Always: width + height on images → prevents CLS -->
<img src="hero.jpg" alt="..." width="1280" height="720" loading="lazy">

<!-- Above-the-fold image: eager loading, NOT lazy -->
<img src="hero.jpg" alt="..." width="1280" height="720" loading="eager" fetchpriority="high">

<!-- Defer non-critical scripts → doesn't block rendering -->
<script src="anime.js" defer></script>

<!-- Async for independent scripts (analytics, ads) -->
<script src="analytics.js" async></script>

<!-- Preconnect to external font origin -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Preload LCP image if known -->
<link rel="preload" href="hero.jpg" as="image" fetchpriority="high">
```

---

## CSS Performance Rules

```css
/* Use will-change sparingly — only on actively animated elements */
.animated-element { will-change: transform, opacity; }
/* Remove will-change after animation completes */

/* Prefer transform + opacity animations (GPU-accelerated) */
/* GOOD: */
.card:hover { transform: translateY(-4px); }

/* BAD: triggers layout recalculation */
.card:hover { top: -4px; margin-top: -4px; }

/* Avoid layout-triggering properties in animations: */
/* width, height, padding, margin, border, top, left, right, bottom */

/* Use contain: layout for isolated component regions */
.card { contain: layout style; }

/* backdrop-filter is expensive — use only when necessary */
.nav { backdrop-filter: blur(12px); } /* OK for navbar */
/* Avoid on cards/elements that appear many times */
```

---

## Image Optimization Checklist

```
☐ Format: Use WebP (fallback .jpg/.png via <picture>)
☐ Size: Never serve an image larger than display size
☐ Responsive: Use srcset for different viewport sizes
☐ Lazy loading: loading="lazy" on all below-fold images
☐ LCP image: loading="eager" + fetchpriority="high"
☐ Alt text: Every <img> has a meaningful alt attribute
☐ Dimensions: Every <img> has width + height attributes
```

### Responsive Image Pattern
```html
<picture>
  <source srcset="hero.webp" type="image/webp">
  <source srcset="hero.jpg" type="image/jpeg">
  <img
    src="hero.jpg"
    alt="[Description]"
    width="1280" height="720"
    loading="eager"
    fetchpriority="high"
  >
</picture>
```

---

## Font Performance Rules

```
☐ font-display: swap → prevents invisible text (FOIT)
☐ Preconnect to font CDN origin
☐ Max 4 font weights loaded total
☐ Subset fonts if self-hosting (Latin only = 30% smaller)
☐ Preload critical fonts:
   <link rel="preload" href="inter-400.woff2" as="font" type="font/woff2" crossorigin>
```

---

## JavaScript Performance Rules

```
☐ All non-critical scripts: defer attribute
☐ Third-party scripts (analytics, chat): async attribute
☐ Don't block DOMContentLoaded with scripts
☐ Avoid large JS bundles on simple HTML pages
☐ Anime.js CDN: load from jsDelivr (fast, cached globally)
☐ Lucide icons: use unpkg CDN or SVG directly
☐ No jQuery — Vanilla JS only (saves ~30KB gzipped)
```

---

## CLS Prevention

CLS (layout shift) is caused by:
- Images without width/height dimensions
- Ads/embeds injected after page load
- Font swap (use font-display: swap + preload)
- Dynamically injected content above existing content

```css
/* Reserve space for images before they load */
img { aspect-ratio: attr(width) / attr(height); }

/* Or explicit aspect ratio */
.hero-img { aspect-ratio: 16/9; width: 100%; }
```

---

## Quick Audit Commands

```bash
# PageSpeed Insights API (replace URL)
curl "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://example.com&strategy=mobile"

# Lighthouse CLI (Node required)
npx lighthouse https://example.com --output=html --view

# Check with WebPageTest
https://www.webpagetest.org/
```

---

## Performance Budget (Template)

Set these limits per project and enforce in review:

| Asset Type | Budget |
|---|---|
| HTML document | < 50 KB |
| CSS total | < 100 KB unminified |
| JS total (non-framework) | < 80 KB |
| Per image (hero) | < 200 KB WebP |
| Per image (content) | < 100 KB WebP |
| Google Fonts request | Max 2 font families, max 4 weights |
| Total page weight (homepage) | < 1.5 MB |
| Time to LCP (mobile 4G) | < 2.5s |
