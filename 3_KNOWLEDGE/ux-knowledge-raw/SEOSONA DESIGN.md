---
type: "KnowledgeItem"
uuid: "seosona-core-design-system"
version: "8.0"
title: "Website SEOSONA Design System (SINGLE SOURCE OF TRUTH)"
description: "Authoritative UI/UX standard for Website SEOSONA"
category: "frontend_engineering"
authority_level: "Tier-1"
---

# Website SEOSONA Design System (SINGLE SOURCE OF TRUTH)

> **CRITICAL RULE FOR ALL AI AGENTS:** This file is the STRICT, absolute single source of truth for the SEOSONA website design. You MUST NEVER use colors, backgrounds, or patterns outside of these defined tokens. Forget any "Dark Navy", "Neon Green", or "Cyberpunk Glassmorphism" rules from previous or hallucinated iterations. 

## 1. Direction & Theme
- **Theme:** Premium B2B Light Theme.
- **Vibe:** Clean SaaS/agency layout, large whitespace, trustworthy, technical, data-driven.
- **Background Rule:** NEVER use dark backgrounds (`bg-[#001833]`, `bg-[#04091A]`, `bg-black`) for full sections. The website relies entirely on white and light slate canvases. 

## 2. Color Tokens (from globals.css)
*You must use exactly these values or their closest tailwind equivalents when custom hex is needed.*

### Backgrounds
- **Canvas Base (Pure White):** `#FFFFFF`
- **Canvas Surface (Elevated):** `#F8FAFC` (`slate-50`)
- **Canvas Elevated:** `#F1F5F9` (`slate-100`)

### Typography
- **Text Ink (Headers):** `#04091A` - NEVER use pure black `#000000`.
- **Text Slate (Body):** `#64748B` (`slate-500`)
- **Text Muted:** `#94A3B8` (`slate-400`)

### Accents & Interactions
- **Signal Primary (Blue):** `#1D4ED8` (`blue-600`) - The ONLY primary accent color for buttons, highlights.
- **Signal Hover:** `#2B8FD4`
- **Secondary Accents:** ONLY use tiny icon accents (`indigo-500`, `amber-500`). NEVER large color blocks.

### Borders
- **Standard Borders:** `border-slate-200` or `border-slate-100`.

## 3. Typography Rules
- **Heading Font:** `var(--font-poppins)` (`font-black`, `tracking-tight`, `leading-tight`).
- **Sans Font:** `var(--font-inter)` (`font-medium`, `leading-relaxed`).
- **Text Wrapping:** `text-balance` (headers), `text-pretty` (body).

## 4. Spacing & Layout
- **Safe Area Container:** `container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`.
- **Vertical Spacing:** Generous (`py-16 lg:py-24`).
- **Whitespace:** `p-6 md:p-8 lg:p-10` for cards.

## 5. UI Components
- **Corner Radius:** Soft (`rounded-[28px]` to `rounded-[40px]`). NO sharp corners. Buttons are `rounded-full`.
- **Shadows & Hover:** `border border-slate-200 bg-white shadow-sm`. Hover floats upward: `transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg hover:border-blue-300`.
- **Buttons:** Primary (`bg-[#04091A]` hover `bg-[#1D4ED8]`), Secondary (Surface background, text Ink).

## 6. Prohibited Actions (The "NO" List)
1. **NO Dark Mode:** Never convert sections to dark themes.
2. **NO Neon Green:** `#46FF00` or `#00FF00` are strictly prohibited.
3. **NO Arbitrary Colors:** Do not invent hex codes.
