# Clowning from the Heart

Professional clown entertainment website — Astro 5 + Tailwind CSS v4 static site.

---

## Architecture Overview

| Layer | Tool |
|---|---|
| Frontend | Astro 5 (static output) |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` |
| Media Storage | Cloudflare R2 (external — never in this repo) |
| Content CMS | Sanity (future — separate studio project) |
| Forms | GoHighLevel (future — embed in contact page) |
| Deployment | Netlify |
| Monitoring | UptimeRobot |

**This repository contains frontend code only.**
Media files, Sanity Studio, and form backends are managed separately.

---

## Getting Started

### Install dependencies

```bash
bun install
```

### Run the dev server

```bash
bun run dev
```

The dev server binds to all interfaces (`--host`) and is accessible through code-server forwarded/proxied ports.

### Build for production

```bash
bun run build
```

### Preview the production build

```bash
bun run preview
```

---

## Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

Key variables:

| Variable | Purpose |
|---|---|
| `PUBLIC_SITE_URL` | Production site URL (used for canonical, OG, sitemap) |
| `PUBLIC_SANITY_PROJECT_ID` | Sanity project ID for future API queries |
| `PUBLIC_SANITY_DATASET` | Sanity dataset (usually `production`) |
| `SANITY_TOKEN` | Sanity API token (if private data needed) |
| `R2_BUCKET` / `R2_ENDPOINT` | Cloudflare R2 media storage |
| `GHL_FORM_EMBED_URL` | GoHighLevel form embed URL |

---

## Code-Server / Proxy Preview

The Astro and Vite dev servers are configured with:

```js
host: true
strictPort: false
allowedHosts: 'all'
```

This allows the site to be previewed through code-server forwarded ports without `localhost` restrictions.

---

## Media Assets — IMPORTANT

**Never commit images, videos, audio, or documents to this repository.**

All media will be hosted on Cloudflare R2 and referenced by URL in content.

The `.gitignore` blocks all common media file types. If you need to work with media locally, place files in `tmp-assets/` (also gitignored) and upload to R2 separately.

---

## Sanity CMS — Future Integration

Sanity Studio is **not initialized in this repository**.

When login access is available, create a separate Sanity Studio project/app.
This Astro frontend is pre-configured to receive content from Sanity via API
using the `PUBLIC_SANITY_PROJECT_ID` and `PUBLIC_SANITY_DATASET` environment variables.

Do not run `npm create sanity@latest` or any Sanity init commands in this repo.

---

## GoHighLevel Forms

The contact page includes a placeholder section for a GoHighLevel form embed.
When ready, replace the placeholder comment in `src/pages/contact.astro` with
the GHL embed script/iframe.

---

## Deployment — Netlify

- Push to GitHub to trigger a Netlify build.
- Set all environment variables in the Netlify dashboard under **Site Settings → Environment Variables**.
- The build command is `bun run build` and the publish directory is `dist/`.

---

## Project Structure

```
src/
  components/     # Reusable Astro components
  layouts/        # Page layout wrapper
  pages/          # All site pages
  styles/         # Global CSS (Tailwind v4)
  utils/          # Site config and shared data

public/
  favicon.svg     # Placeholder favicon (committed)
  robots.txt      # SEO robots file
```
