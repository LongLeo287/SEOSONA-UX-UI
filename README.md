**[▶ Xem trang giới thiệu dự án](https://seosona-ux-ui.vercel.app)**

# SEOSONA UX-UI Library

![SEOSONA UX-UI](https://img.shields.io/badge/SEOSONA-UX/UI-1D4ED8?style=for-the-badge)
![Version](https://img.shields.io/badge/version-1.0.0-success?style=for-the-badge)
![Build](https://img.shields.io/badge/build-passing-success?style=for-the-badge)

A highly performant, modular, and framework-agnostic UI component library and design system built specifically for the **SEOSONA OS** ecosystem. 

This repository contains an end-to-end collection of modern web components designed with pure HTML, CSS (using a robust CSS Variable token system), and lightweight Vanilla JavaScript. It is designed to be easily copy-pasted or integrated into any tech stack (React, Next.js, Vue, or Vanilla Web Apps).

## 🚀 Live Showcase

The component library is automatically built and deployed.  
**[👉 View the Live Component Showcase here](https://LongLeo287.github.io/seosona-ux-ui/)**

---

## 🏗 System Architecture

The project strictly follows the SEOSONA 7-Tier directory architecture:

- `0_BRAIN/` - System rules, architectural guidelines, and AI logic constraints.
- `1_AGENTS/` - Agent execution logs and memory context.
- `2_SKILLS/` - Custom skills and capabilities.
- `3_KNOWLEDGE/` - Centralized knowledge base (Master Index, SEO concepts).
- `4_LIBRARY/` - **The Core UI Library** (Components, Templates, Tokens, Motion).
- `5_WORKFLOWS/` - Automated operational pipelines.
- `6_WORKSPACE/` - Scratchpads and active development zones.

---

## 🧩 The Component Library (`4_LIBRARY`)

The core of this repository lives in `4_LIBRARY`. It is broken down into modular systems:

### 🎨 Design Tokens (`tokens/`)
The foundational CSS variables that power the entire system.
- `typography.css` - Fonts (Inter, Poppins) and fluid typography scales.
- `spacing.css` - Standardized padding and margin scales.
- `shadows.css` & `gradients.css` - Visual depth and modern background elements.
- `palettes/` - Pre-configured theme files (B2B Dark, Luxury, Startup, Fintech, etc.).

### 🧱 Components (`components/`)
Over 30+ highly refined, accessible components categorized by function:
- **Cards** (Blog, Pricing, Service)
- **Data Display** (Tables, Timelines)
- **Feedback** (Toasts, Skeletons, Progress Bars)
- **Forms** (Multi-step wizards, Floating labels, File uploads)
- **Interactive** (Modals, Drawers, Accordions, Tooltips, Tabs)
- **Navigation** (Mega Menus, Sticky Navbars)
- **Media** (Masonry grids, Parallax sections)
- **Hero & CTA sections**

### 🎬 Motion & Animation (`motion/`)
High-end interaction scripts leveraging `anime.js` and vanilla `IntersectionObserver` for scroll-triggers, magnetic cursors, and page transitions.

### 📄 Templates (`templates/`)
Ready-to-use full page templates (e.g., SaaS Motion Homepage, Agency Portfolios) composed from the atomic components above.

---

## ⚙️ Development & Build Pipeline

This project includes a fully automated CI/CD pipeline via GitHub Actions. 

### Local Commands

Make sure you have Node.js installed, then run:

```bash
# Run the SEOSONA system health check (Verifies architecture)
npm run seosona:doctor

# Build the local HTML showcase into the /dist folder
npm run build
```

### Automated Deployment

Every push to the `master` branch triggers the `.github/workflows/build-deploy.yml` workflow:
1. Runs the `seosona:doctor` audit.
2. Generates a fresh `dist/index.html` showcase using `scripts/build.js`.
3. Deploys the result automatically to GitHub Pages.

---

## 📦 Quick Push Script

For convenience during development, a quick push script is provided at the root:

**Windows (PowerShell/CMD):**
```cmd
.\push.bat "Your commit message here"
```
*If no message is provided, it defaults to "Auto-commit update"*

---

## 🔒 License & Usage
This system is proprietary and bound to the SEOSONA OS ecosystem.
Created and maintained by LongLeo.
