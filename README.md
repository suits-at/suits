# SUITS Portfolio

Astro-powered portfolio website for [suits.at](https://www.suits.at/).

## Requirements

- Node.js 24 (`.node-version` and `.nvmrc`)
- pnpm 11

## Setup

```bash
pnpm install
pnpm dev
```

The local development server normally runs at `http://localhost:4321/`.

## Commands

```bash
pnpm dev
pnpm check
pnpm build
pnpm preview
```

`pnpm build` runs `astro check` before building the static site.

## Project Structure

- `src/layouts/BaseLayout.astro`: shared document shell.
- `src/components`: reusable Astro components.
- `src/pages`: route files.
- `src/styles/global.css`: global styles and shared Tailwind component classes.
- `src/data`: structured site data.
- `src/content`: Markdown content.
- `public`: static assets.

## Content

- Projects/references: `src/data/projects.ts`
- Project screenshots and thumbnails: `public/images/projects` and legacy `public/images/uploads`
- Services: `src/data/services.ts`
- About/contact profile data: `src/data/profile.ts`
- About/contact page body copy: `src/content/pages`
- Footer social links: `src/data/social.ts`
- Imprint/privacy copy: `src/content/legal/impressum.md`

## Adding a Project

```bash
pnpm add-project -- --url https://example.com --title "Project Title" --date 2026
```

The script captures a screenshot, creates a thumbnail, stores both under `public/images/projects`, and inserts the project into `src/data/projects.ts`.

## Map

Set `PUBLIC_GOOGLE_MAPS_API_KEY` or the legacy `MAPS_KEY` on Netlify to render Google Static Maps. Without one of them, the contact page shows a visible missing-key warning.

## Agent Notes

For coding-agent workflow guidance, start with `AGENTS.md`. It includes repo conventions, verification expectations, and git hygiene notes for future maintenance work.
