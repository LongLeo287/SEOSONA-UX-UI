# Performance Rules
# Core Web Vitals targets and frontend performance standards

---

## Core Web Vitals Targets (Green Zone)

| Metric | Target | Measurement |
|---|---|---|
| **LCP** (Largest Contentful Paint) | < 2.5s | Time to render largest visible element |
| **INP** (Interaction to Next Paint) | < 200ms | Response time to user interactions |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Visual stability score |

## Image Optimization

- Use modern formats: **WebP** preferred, AVIF for future-proofing, JPEG/PNG fallback
- Always define `width` and `height` attributes on `<img>` — prevents CLS
- Use `loading="lazy"` for below-the-fold images
- Use `fetchpriority="high"` on hero/LCP images
- Serve responsive images with `srcset` and `sizes`

```html
<!-- Correct hero image markup -->
<img 
  src="hero.webp"
  width="1200" 
  height="600"
  alt="Description"
  fetchpriority="high"
  decoding="async"
>

<!-- Correct below-fold image markup -->
<img 
  src="feature.webp"
  width="600" 
  height="400"
  alt="Description"
  loading="lazy"
  decoding="async"
>
```

## Font Loading

```html
<!-- Preconnect to Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<!-- Load fonts with display=swap -->
<link href="https://fonts.googleapis.com/css2?family=...&display=swap" rel="stylesheet">
```

- Use `font-display: swap` — prevents invisible text during font load
- Limit Google Fonts requests to 2 font families maximum
- Subset fonts to needed weights only (e.g., `wght@400;600;700` not `wght@100..900`)

## CSS Performance

- No CSS at the top of `<body>` — always in `<head>`
- Avoid CSS `@import` — use `<link>` tags instead
- Use `will-change: transform` sparingly — only for elements actively animating
- Prefer CSS transitions over JS-driven style changes for simple animations
- Avoid `*` selector with heavy properties

## JavaScript Performance

- Load scripts at bottom of `<body>` or with `defer`/`async`
- CDN scripts: use `defer` unless synchronous execution required
- Avoid blocking the main thread — debounce scroll/resize handlers
- Use `IntersectionObserver` for scroll-triggered animations (not scroll events)
- Remove all `console.log` before delivery

```html
<!-- Correct script loading -->
<script src="https://cdn.example.com/lib.min.js" defer></script>
<script src="main.js" defer></script>
```

## Layout Stability (CLS)

- Always reserve space for: images, ads, iframes, dynamically loaded content
- Use CSS `aspect-ratio` or explicit `width`/`height` on media elements
- Avoid inserting content above existing content after page load
- Use `min-height` for skeleton placeholders

## Delivery Checklist

- [ ] PageSpeed Insights score ≥ 90 (mobile), ≥ 95 (desktop)
- [ ] All images have `width` + `height` attributes
- [ ] Fonts use `display=swap`
- [ ] Scripts loaded with `defer`
- [ ] No render-blocking resources
- [ ] No layout shift from late-loading content
