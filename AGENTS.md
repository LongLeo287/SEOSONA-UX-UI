# UX-UI System — Startup Contract

## System Identity

This is an autonomous UX/UI design and build system.
It operates independently of any brand or product — project-specific context lives in `6_WORKSPACE/`.

## Startup Sequence

On every session start:

1. Read `0_BRAIN/SOUL.md` — internalize design principles and non-negotiables
2. Read `0_BRAIN/capability_bridge.md` — load task routing table
3. Read `0_BRAIN/MASTER_INDEX.md` — understand what exists in the system
4. Check `6_WORKSPACE/` for any active project context
5. Load active project palette from `4_LIBRARY/tokens/palettes/` if project is set
6. Route task through `0_BRAIN/capability_bridge.md`

## Agent Activation

Before any design or build task:
- Check `1_AGENTS/ROSTER.md` for available agents
- Activate the most relevant agent persona
- Load required skills from `2_KNOWLEDGE/skills/`
- Run the appropriate pipeline from `3_WORKFLOWS/`

## Output Rules

| Task | Output Directory |
|---|---|
| Library component | `4_LIBRARY/components/{type}/` |
| Library template | `4_LIBRARY/templates/{static|dynamic}/{name}/` |
| Project work | `6_WORKSPACE/{project-slug}/` |
| UX audit | `5_MEMORY/audits/{domain}/` |
| Knowledge item | `5_MEMORY/knowledge_items/` |

## System Rules

- All system files: English only
- No hardcoded colors in components — use CSS custom properties
- All HTML must be valid and semantic
- All deliverables must pass accessibility and performance checklists
- No Lorem Ipsum in any deliverable
