# Clowning from the Heart

> **CLAUDE.md belongs in version control — NEVER add it to .gitignore. This file is the shared source of truth for all developers and all Claude Code sessions.**

This site: Clowning from the Heart | Repo: github.com/Spirit-Media-US/clowning-from-the-heart | Domain: clowningfromtheheart.com | Sanity ID: zvhqn0sn

**Migration protocol:** /home/deploy/bin/tools-api/pipelines/migration/CLAUDE.md
**Sanity Studio:** Embedded at clowningfromtheheart.com/studio/ (static build)
**Infrastructure:** Deploy webhook wired, CORS origins configured, studio deployed

## Dev Commands

- `bun run dev` — local preview at localhost:4328
- `bun run build` — production build to dist/

## Mandatory — Before Starting Work
Always start Claude sessions from inside this directory:
```
cd /srv/sites/clowning-from-the-heart && claude
```
Running Claude from ~/ or ~/Sites/ bypasses this project's CLAUDE.md. A pre-edit hook enforces this, but following the workflow prevents warnings and ensures all project rules are loaded.

Then run: `git checkout dev && git pull origin dev`

## Stack

- Astro 5 + Tailwind CSS v4
- Sanity Studio scaffolded in `studio/`
- GA4 analytics integrated
- Amazon click tracking added
- Bing Webmaster Tools verified
- Google Search Console verified
- GHL forms — placeholder only, not yet wired

## Status — as of 2026-04-19

### Completed & Live on Main
- Full site built and deployed to clowningfromtheheart.com
- Responsive hero with watercolor background (sm/md/lg breakpoints)
- Amazon purchase button in hero
- Deployment report committed (deployment-report.html)
- Sanity Studio embedded at /studio with deploy webhook and CORS configured

### On dev (awaiting Kevin merge → main)
- **100 Club wave 2 (2026-04-19):** Beasties (`@playform/inline`) wired + `inlineStylesheets: 'auto'`
  - `@font-face` moved out of `<style is:global>` into `src/styles/global.css` (Tailwind v4 compliant, per performance-gate.md)
  - Both Bebas Neue + Abril Fatface preloaded (both above-fold)
  - Mobile 98→99, Desktop 100 on dev preview (SEO 69 is CF Pages `x-robots-tag: noindex` on `.pages.dev` — production is 100)
- **Fonts (2026-04-18):** Self-hosted from R2 (`ff3e196`)
- **GA lazy-loaded (2026-04-18):** Deferred on first interaction or +6s fallback
- GA4 analytics integrated
- Amazon click tracking added
- Bing Webmaster Tools verified
- Google Search Console verified

### Still Pending
- GHL contact form — not yet wired
- Sanity content population

## Rules

- All work goes to the **dev** branch — never push directly to main
- Only merge dev to main when Kevin says "push to main"
- Never push without local preview first
