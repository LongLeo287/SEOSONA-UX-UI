# Skill: Typography Pairing For Web
# UX-UI System — 2_KNOWLEDGE/skills/typography-pairing.md

---

## Core Rules

1. **Never pair two similar typefaces** — pair a display font with a neutral body font
2. **Max 2 font families** per project (3 only if you have a dedicated mono for code)
3. **Contrast is key** — serif + sans-serif, or display-weight sans + light body sans
4. **Load performance**: Max 4 font weights across all families

---

## Type Scale System

Use a modular scale. The `clamp()` function handles fluid responsive sizing.

```css
/* Fluid type scale — 375px min → 1280px max viewport */
--text-xs:   clamp(0.75rem,   1.2vw, 0.8125rem);  /* 12–13px */
--text-sm:   clamp(0.8125rem, 1.4vw, 0.875rem);    /* 13–14px */
--text-base: clamp(0.9375rem, 1.6vw, 1rem);        /* 15–16px */
--text-lg:   clamp(1rem,      1.8vw, 1.125rem);    /* 16–18px */
--text-xl:   clamp(1.125rem,  2vw,   1.25rem);     /* 18–20px */
--text-2xl:  clamp(1.375rem,  2.5vw, 1.5rem);      /* 22–24px */
--text-3xl:  clamp(1.75rem,   3vw,   2rem);        /* 28–32px */
--text-4xl:  clamp(2rem,      4vw,   2.5rem);      /* 32–40px */
--text-5xl:  clamp(2.5rem,    5vw,   3.5rem);      /* 40–56px */
--text-hero: clamp(2.75rem,   6vw,   4.5rem);      /* 44–72px */
```

---

## Recommended Pairings

### Pair 1: B2B / SaaS / Corporate (Recommended default)
```
Heading: Poppins 800–900
Body:    Inter 400–600
Mono:    JetBrains Mono (optional)

Google Fonts import:
  Poppins: 700, 800, 900
  Inter: 400, 500, 600

Why: Poppins' geometric rounded forms + Inter's neutral readability
Use: Dashboards, landing pages, B2B, fintech
```

### Pair 2: Editorial / Blog / Content
```
Heading: Playfair Display 700–900
Body:    Source Sans 3 400–600

Why: Playfair's elegant serifs signal quality journalism
Use: Publications, blogs, luxury brands, education
```

### Pair 3: Modern Startup / Consumer
```
Heading: Plus Jakarta Sans 700–800
Body:    DM Sans 400–500

Why: Both geometric and friendly — energetic but professional
Use: Consumer apps, startups, health, lifestyle
```

### Pair 4: Technical / Developer
```
Heading: Space Grotesk 700
Body:    IBM Plex Sans 400–500
Mono:    IBM Plex Mono

Why: Technical precision, monospace consistency
Use: Dev tools, API products, CLI tools, security
```

### Pair 5: Luxury / High-end
```
Heading: Cormorant Garamond 600–700 (italic for accent)
Body:    Jost 300–400

Why: Thin weights + serif elegance signals exclusivity
Use: Fashion, premium real estate, luxury services
```

---

## Semantic Styles (Required in every project)

```css
/* H1 — Single per page, largest, highest contrast */
h1 {
  font-family: var(--font-heading);
  font-size: var(--text-hero);
  font-weight: 900;
  color: var(--color-text-primary);
  line-height: 1.05;
  letter-spacing: -0.025em;
}

/* H2 — Section titles */
h2 {
  font-family: var(--font-heading);
  font-size: var(--text-4xl);
  font-weight: 800;
  color: var(--color-text-primary);
  line-height: 1.15;
  letter-spacing: -0.02em;
}

/* H3 — Card/component titles */
h3 {
  font-family: var(--font-heading);
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  line-height: 1.3;
}

/* Body copy */
p {
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 400;
  color: var(--color-text-body);
  line-height: 1.65;
}

/* Labels / overlines */
.label {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent);
}

/* Captions / muted */
.caption {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 400;
  color: var(--color-text-muted);
  line-height: 1.5;
}
```

---

## Readability Rules

| Property | Rule |
|---|---|
| Line length | 60–75 characters max (use `max-width` on `p`) |
| Line height | Body: 1.6–1.7 · Headings: 1.0–1.2 |
| Paragraph width | `max-width: 68ch` for long-form |
| Heading spacing | Margin-bottom: 0.5–0.75em after heading before content |
| Color contrast | Body text: ≥ 4.5:1 · Large text: ≥ 3:1 |
| Letter spacing | Headings: -0.02 to -0.03em · Body: 0 (default) · Labels: +0.06–0.1em |

---

## Font Loading (Performance)

```html
<!-- Preconnect first -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Use display=swap to prevent invisible text during load -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700;800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

**Rules:**
- Always use `display=swap`
- Never load more than 4 weights total
- Use `font-display: optional` for non-critical decorative fonts
- Self-host critical fonts for best CWV (Core Web Vitals) performance
