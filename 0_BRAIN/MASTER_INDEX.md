# UX-UI System — Master Index
# Complete map of all files and their purpose

---

## System Overview

An autonomous UX/UI design and build system.
**Not brand-specific.** All project work lives in `6_WORKSPACE/`.

---

## 0_BRAIN — System Intelligence

| File | Purpose |
|---|---|
| `SOUL.md` | Core identity, design philosophy, operating principles, tech stack, naming conventions, non-negotiables |
| `MASTER_INDEX.md` | This file — complete map of the system |
| `capability_bridge.md` | Task → Agent → Pipeline/Workflow routing table |
| `rules/design-rules.md` | Hard layout, color, typography, component, hierarchy constraints |
| `rules/code-output-rules.md` | HTML/CSS/JS output standards and conventions |
| `rules/accessibility-rules.md` | WCAG 2.1 AA compliance requirements and testing checklist |
| `rules/performance-rules.md` | Core Web Vitals targets, image/font/JS/CSS optimization rules |

---

## 1_AGENTS — Agent Roster

| File | Purpose |
|---|---|
| `ROSTER.md` | All agents, their specializations, activation triggers, and collaboration patterns |
| `AGENT_CAPABILITIES.md` | Agent × Skill × Workflow matrix |
| `personas/ui-ux-designer.md` | Interface design, wireframes, design systems, visual hierarchy |
| `personas/frontend-motion-designer.md` | Anime.js, CSS animations, scroll effects, micro-interactions |
| `personas/brand-identity-designer.md` | Logo, color palette selection, brand kits, typography pairing |
| `personas/ux-researcher.md` | UX audits, user flows, competitor analysis, heuristic evaluation |
| `personas/accessibility-auditor.md` | WCAG compliance, screen reader testing, a11y fixes |

---

## 2_KNOWLEDGE — Skills, Frameworks, SOPs

### Skills
| File | Purpose |
|---|---|
| `skills/color-theory.md` | Color psychology, contrast, palette construction |
| `skills/typography-pairing.md` | Font pairing rules, scale systems, readability |
| `skills/layout-composition.md` | Grid systems, whitespace, visual hierarchy |
| `skills/motion-design.md` | Animation principles, easing, timing, purposeful motion |
| `skills/conversion-optimization.md` | CRO principles, CTA design, trust signals, funnel design |
| `skills/ux-research-methods.md` | Heuristic evaluation, user journey mapping, competitor analysis |
| `skills/web-performance.md` | Core Web Vitals, optimization techniques, measurement |

### Frameworks
| Directory | Purpose |
|---|---|
| `frameworks/design_systems/` | Design system architecture and governance |
| `frameworks/accessibility/` | Deep a11y knowledge and patterns |
| `frameworks/motion_animation/` | Anime.js docs, patterns, GSAP reference |

### SOPs
| File | Purpose |
|---|---|
| `sops/ux-audit-sop.md` | Step-by-step UX audit execution |
| `sops/design-handoff-sop.md` | Design-to-developer handoff checklist |
| `sops/component-review-sop.md` | Component quality review checklist |
| `sops/brand-application-sop.md` | Applying a brand kit to a new project |

---

## 3_WORKFLOWS — Pipelines & Workflows

### Pipelines (end-to-end, input → output)
| File | Input | Output |
|---|---|---|
| `pipelines/ux-audit-pipeline.md` | Website URL | Scored UX audit report in `5_MEMORY/audits/` |
| `pipelines/landing-page-pipeline.md` | Project brief | HTML/CSS/JS page in `6_WORKSPACE/` |
| `pipelines/design-sprint-pipeline.md` | Problem statement | Wireframes + prototype |
| `pipelines/brand-identity-pipeline.md` | Client brief | Brand kit (palette + typography + logo direction) |
| `pipelines/component-build-pipeline.md` | Component spec | Reusable HTML/CSS/JS in `4_LIBRARY/components/` |

### Workflows (focused, single-task)
| File | Purpose |
|---|---|
| `workflows/design-from-brief.md` | Convert a design brief into implementation plan |
| `workflows/design-review.md` | Structured design review and critique |
| `workflows/responsive-testing.md` | Cross-viewport testing checklist |
| `workflows/accessibility-audit.md` | Targeted a11y audit workflow |

---

## 4_LIBRARY — Reusable Asset Library

### Tokens
| File/Directory | Purpose |
|---|---|
| `tokens/palettes/b2b-light.css` | Professional B2B light theme (white/blue) |
| `tokens/palettes/b2b-dark.css` | Premium dark SaaS (navy/blue glow) |
| `tokens/palettes/b2c-vibrant.css` | Consumer-facing energetic (orange/warm) |
| `tokens/palettes/fintech.css` | Financial trust (navy/green) |
| `tokens/palettes/healthcare.css` | Medical calming (blue/white) |
| `tokens/palettes/startup.css` | Bold modern startup (purple/gradient) |
| `tokens/palettes/luxury.css` | High-end premium (gold/neutral) |
| `tokens/palettes/neutral.css` | Universal any-industry (configurable accent) |
| `tokens/typography.css` | Font families, type scale, semantic styles |
| `tokens/spacing.css` | Spacing scale, container, section padding |
| `tokens/shadows.css` | Shadow system |
| `tokens/motion.js` | Anime.js tokens — easing, duration, delay |
| `tokens/border-radius.css` | Radius scale |

### Components
| Directory | Components Inside |
|---|---|
| `components/navigation/` | navbar-sticky, navbar-minimal, navbar-mega |
| `components/hero/` | hero-centered, hero-split, hero-video-bg |
| `components/features/` | features-grid, features-alternating |
| `components/cards/` | card-service, card-blog, card-pricing |
| `components/forms/` | form-contact, form-lead-capture, form-newsletter |
| `components/social-proof/` | testimonials-carousel, logo-grid, stats-counter |
| `components/cta/` | cta-banner, cta-fullwidth |
| `components/footer/` | footer-minimal, footer-full |

### Templates

#### Static (HTML + CSS only, no JS required)
| Directory | Description |
|---|---|
| `templates/static/landing-page-light/` | ✅ COMPLETE — B2B light landing page (index.html + style.css) |
| `templates/static/landing-page-dark/` | Dark SaaS landing page |
| `templates/static/portfolio-agency/` | Agency/portfolio page |
| `templates/static/blog-minimal/` | Minimal blog listing page |

#### Dynamic (HTML + CSS + Anime.js)
| Directory | Description |
|---|---|
| `templates/dynamic/saas-homepage/` | Full SaaS homepage with animated sections |
| `templates/dynamic/product-showcase/` | Product feature showcase with scroll reveals |
| `templates/dynamic/marketing-agency/` | Marketing agency bold homepage |

### Icons & Motion
| File | Purpose |
|---|---|
| `icons/ICON_SYSTEM.md` | Icon library guide (Lucide Icons primary) |
| `icons/svg/` | Custom SVG icons |
| `motion/entrance-animations.js` | ✅ COMPLETE — Scroll-triggered fade/slide/scale entrance |
| `motion/counter-animations.js` | ✅ COMPLETE — Number counter animation |
| `motion/scroll-triggers.js` | Scroll-progress based animations |
| `motion/hover-effects.js` | Reusable hover interaction patterns |
| `motion/page-transitions.js` | Page-to-page transition animations |

---

## 5_MEMORY — Long-term Memory (gitignored)

| Directory | Purpose |
|---|---|
| `projects/` | Per-project output archive |
| `audits/` | UX audit results by domain |
| `exports/` | Standalone deliverable files |
| `knowledge_items/` | AI-synthesized knowledge snapshots |
| `logs/` | Session logs |

---

## 6_WORKSPACE — Active Projects (gitignored)

Structure per project:
```
6_WORKSPACE/{project-slug}/
├── brief.md              ← Project brief and requirements
├── design-decisions.md   ← Design decisions log
├── index.html
├── style.css
├── main.js
└── brand/                ← Project-specific brand assets
    ├── palette.css       ← (copy of chosen palette, customized)
    └── fonts.css
```

---

## Completion Status

| Tier | Status |
|---|---|
| 0_BRAIN | ✅ Complete (SOUL, MASTER_INDEX, capability_bridge, 3 rules files) |
| 1_AGENTS | 🔄 Partial (ROSTER complete, personas pending detail) |
| 2_KNOWLEDGE | 🔄 Partial (framework raw data present, skills/sops pending) |
| 3_WORKFLOWS | 🔄 Partial (pipelines pending) |
| 4_LIBRARY/tokens | ✅ Complete (8 palettes, typography, motion) |
| 4_LIBRARY/components | 🔄 Pending (structure created) |
| 4_LIBRARY/templates/static/landing-page-light | ✅ Complete |
| 4_LIBRARY/templates/static/* | 🔄 Pending |
| 4_LIBRARY/templates/dynamic/* | 🔄 Pending |
| 4_LIBRARY/icons | ✅ ICON_SYSTEM.md complete |
| 4_LIBRARY/motion | ✅ entrance-animations + counter-animations complete |
| 5_MEMORY | ✅ Structure ready |
| 6_WORKSPACE | ✅ Structure ready |
