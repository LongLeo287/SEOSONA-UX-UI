# Motion Catalog
# UX-UI System — 4_LIBRARY/motion/MOTION_CATALOG.md

---

## Available Motion Libraries

| File | Description | Auto-init | Requires Anime.js |
|---|---|---|---|
| `entrance-animations.js` | Scroll-triggered fade/slide/scale reveals | Yes (`data-animate`) | Yes |
| `counter-animations.js` | Number rollup on scroll enter | Yes (`data-counter`) | Yes |
| `hover-effects.js` | Magnetic, tilt, ripple, bounce, underline | Yes (data attributes) | Yes |
| `scroll-triggers.js` | Parallax, progress bar, hero fade-out | Yes (data attributes) | Yes |
| `page-transitions.js` | Overlay transition between pages | Yes (intercepts links) | Yes |

---

## Anime.js CDN

```html
<!-- Always load before motion scripts -->
<script src="https://cdn.jsdelivr.net/npm/animejs@4.0.0/lib/anime.iife.min.js" defer></script>
```

---

## Quick Start — Recommended Script Load Order

```html
<!-- 1. Anime.js (dependency) -->
<script src="https://cdn.jsdelivr.net/npm/animejs@4.0.0/lib/anime.iife.min.js" defer></script>

<!-- 2. Core entrance (scroll reveals) -->
<script src="path/to/4_LIBRARY/motion/entrance-animations.js" defer></script>

<!-- 3. Counter animations -->
<script src="path/to/4_LIBRARY/motion/counter-animations.js" defer></script>

<!-- 4. Optional enhancements -->
<script src="path/to/4_LIBRARY/motion/hover-effects.js" defer></script>
<script src="path/to/4_LIBRARY/motion/scroll-triggers.js" defer></script>

<!-- 5. Page transitions (optional) -->
<script src="path/to/4_LIBRARY/motion/page-transitions.js" defer></script>

<!-- 6. Your page-specific script last -->
<script src="main.js" defer></script>
```

---

## Data Attribute Reference

### entrance-animations.js
```html
<!-- Fade up (most common) -->
<div data-animate="fade-up">...</div>

<!-- Fade in (opacity only) -->
<div data-animate="fade-in">...</div>

<!-- Slide from left -->
<div data-animate="slide-left">...</div>

<!-- Slide from right -->
<div data-animate="slide-right">...</div>

<!-- Scale in -->
<div data-animate="scale-in">...</div>

<!-- With delay (ms) -->
<div data-animate="fade-up" data-delay="200">...</div>

<!-- Custom duration (ms) -->
<div data-animate="fade-up" data-duration="800">...</div>
```

### counter-animations.js
```html
<!-- Integer counter -->
<span data-counter="12500" data-suffix="+">0</span>

<!-- Decimal counter -->
<span data-counter="4.9" data-decimals="1" data-suffix="★">0</span>

<!-- Currency -->
<span data-counter="99" data-prefix="$" data-suffix="k">0</span>
```

### hover-effects.js
```html
<!-- Magnetic button (cursor attraction) -->
<button data-magnetic>...</button>

<!-- With custom strength (0.1–0.6, default 0.35) -->
<button data-magnetic data-magnetic-strength="0.25">...</button>

<!-- 3D card tilt -->
<div data-tilt>...</div>

<!-- Click ripple -->
<button data-ripple>...</button>

<!-- Icon bounce on hover -->
<div data-icon-bounce>
  <svg>...</svg>
</div>

<!-- Animated underline (CSS class — injected by script) -->
<a href="#" class="link-slide">Learn more</a>
```

### scroll-triggers.js
```html
<!-- Parallax scroll (speed 0.1–0.5) -->
<div data-parallax="0.2">...</div>

<!-- Scroll progress bar (fill this element as user scrolls) -->
<div data-scroll-progress style="height:3px;background:var(--color-accent)"></div>

<!-- Reveal when page is X% scrolled -->
<div data-reveal-at="60" data-animate="fade-up">...</div>

<!-- Hero fade-out on scroll -->
<section data-fade-out>...</section>

<!-- Reading progress indicator -->
<div id="scroll-indicator" style="position:fixed;top:0;left:0;height:2px;background:var(--color-accent)"></div>
```

---

## Complete Hero Timeline Example

```javascript
// In main.js, after Anime.js loads
const { createTimeline } = anime;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduced) {
  const tl = createTimeline({ defaults: { easing: 'easeOutQuart' } });
  tl.add('#hero-badge',    { opacity: [0,1], translateY: [16,0],  duration: 400 })
    .add('#hero-headline', { opacity: [0,1], translateY: [24,0],  duration: 600 }, 80)
    .add('#hero-sub',      { opacity: [0,1], translateY: [16,0],  duration: 500 }, 200)
    .add('#hero-actions',  { opacity: [0,1], translateY: [12,0],  duration: 400 }, 300)
    .add('#hero-stats',    { opacity: [0,1], translateY: [8,0],   duration: 400 }, 380)
    .add('#hero-visual',   { opacity: [0,1], translateX: [20,0],  duration: 600 }, 150);
} else {
  ['#hero-badge','#hero-headline','#hero-sub','#hero-actions','#hero-stats','#hero-visual']
    .forEach(id => { const el = document.querySelector(id); if(el) el.style.opacity='1'; });
}
```

---

## Accessibility Requirements

**Every project using animation MUST:**

1. Check `prefers-reduced-motion` before any animation
2. Provide fallback: set `opacity: 1` on all animated elements when motion is reduced
3. Not auto-play any looping animation that distracts (use `animation-play-state: paused` for reduced motion)
4. Not use flashing effects (> 3 flashes/sec)

```css
/* Global reduced motion safety net in CSS */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
