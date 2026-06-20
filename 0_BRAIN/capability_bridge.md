# UX-UI System — Capability Bridge
# Task Routing Table: Intent → Agent → Workflow/Pipeline

---

## Routing Logic

When a task arrives, match the intent below and route accordingly.

| Intent Keywords | Primary Agent | Pipeline/Workflow |
|---|---|---|
| "audit", "review UX", "score website", "analyze site" | `ux-researcher` + `accessibility-auditor` | `pipelines/ux-audit-pipeline.md` |
| "build landing page", "create page", "make website" | `ui-ux-designer` | `pipelines/landing-page-pipeline.md` |
| "design component", "build component", "create section" | `ui-ux-designer` | `pipelines/component-build-pipeline.md` |
| "logo", "brand kit", "color palette for project", "brand identity" | `brand-identity-designer` | `pipelines/brand-identity-pipeline.md` |
| "design sprint", "wireframe", "prototype" | `ui-ux-designer` + `ux-researcher` | `pipelines/design-sprint-pipeline.md` |
| "animation", "motion", "micro-interaction", "hover effect" | `frontend-motion-designer` | `workflows/design-from-brief.md` |
| "accessibility check", "a11y", "WCAG", "screen reader" | `accessibility-auditor` | `workflows/accessibility-audit.md` |
| "design review", "feedback on design", "critique" | `ui-ux-designer` | `workflows/design-review.md` |
| "test responsive", "mobile check", "viewport test" | `ui-ux-designer` | `workflows/responsive-testing.md` |
| "handoff", "deliver to dev", "export assets" | `ui-ux-designer` | `sops/design-handoff-sop.md` |

---

## Output Directory Convention

| Task Type | Output Location |
|---|---|
| New component for library | `4_LIBRARY/components/{type}/` |
| Project page build | `6_WORKSPACE/{project-slug}/` |
| UX audit report | `5_MEMORY/audits/{domain}/` |
| Brand kit | `6_WORKSPACE/{project-slug}/brand/` |
| Exported deliverable | `5_MEMORY/exports/{project-slug}/` |

---

## Escalation Rules

1. If task involves an unknown domain/industry → run `2_KNOWLEDGE/skills/ux-research-methods.md` first
2. If task involves 3D/WebGL → check `2_KNOWLEDGE/frameworks/motion_animation/` for Three.js patterns
3. If task output will be used in a Next.js project → note this in `design-decisions.md` in the workspace
4. If task conflicts with SOUL.md rules → SOUL.md wins, explain trade-off to user
