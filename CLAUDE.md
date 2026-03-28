# Clowning from the Heart

> **CLAUDE.md belongs in version control — NEVER add it to .gitignore. This file is the shared source of truth for all developers and all Claude Code sessions.**

This site: Clowning from the Heart | Repo: github.com/Spirit-Media-US/clowning-from-the-heart | Domain: clowningfromtheheart.com | Sanity ID: zvhqn0sn

## Dev Commands

- `bun run dev` — local preview at localhost:4328
- `bun run build` — production build to dist/

## Stack

- Astro 5 + Tailwind CSS v4
- Sanity Studio scaffolded in `studio/`
- GA4 analytics integrated
- Amazon click tracking added
- Bing Webmaster Tools verified
- Google Search Console verified
- GHL forms — placeholder only, not yet wired

## Status — as of 2026-03-19

### Completed & Live on Main
- Full site built and deployed to clowningfromtheheart.com
- Responsive hero with watercolor background (sm/md/lg breakpoints)
- Amazon purchase button in hero
- Deployment report committed (deployment-report.html)

### Still Pending
- GHL contact form — not yet wired
- Sanity Studio — scaffolded but not populated

## Rules

- All work goes to the **dev** branch — never push directly to main
- Only merge dev to main when Kevin says "push to main"
- Never push without local preview first

---

## Stitch MCP — AI Design Tool

Google Stitch 2.0 is an MCP server available in this project for AI-powered design work. It generates full page designs and auto-creates design systems (colors, typography, component rules). The MCP config is already symlinked into this repo (`.mcp.json`).

**When to use:** When Kevin asks for design work, new page layouts, or visual redesigns. Use Stitch first to get 80–90% of the design done visually, then implement in Astro/Tailwind.

**Available tools (prefixed `mcp__stitch__`):**
`create_project`, `generate_screen_from_text`, `create_design_system`, `apply_design_system`, `edit_screens`, `generate_variants`, `list_projects`, `list_screens`, `get_screen`, `get_project`, `list_design_systems`, `update_design_system`

**Workflow:**
1. Screenshot or paste URL into Stitch as style reference
2. Stitch generates full design + auto-creates design system
3. Export design.md / design system from Stitch
4. Hand off to Claude Code for Astro/Tailwind implementation

**Rules:**
- Use Gemini 3.1 Pro in Stitch (not 3.0 Flash)
- Stitch auto-generates a `design.md` — keep it in the project root for consistency
- This is the standard SMP workflow for all new site builds and major redesigns
