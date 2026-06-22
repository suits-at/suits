# SUITS Portfolio

Astro-powered portfolio website for [suits.at](https://www.suits.at/).

## Commands

```bash
pnpm dev
pnpm build
pnpm preview
```

## Content

- Projects: `src/data/projects.ts`
- Services: `src/data/services.ts`
- About/contact copy: `src/content/pages`
- Imprint/privacy copy: `src/content/legal/impressum.md`

## Adding a Project

```bash
pnpm add-project -- --url https://example.com --title "Project Title" --date 2026
```

The script captures a screenshot, creates a thumbnail, stores both under `public/images/projects`, and inserts the project into `src/data/projects.ts`.

## Map

Set `PUBLIC_GOOGLE_MAPS_API_KEY` or the legacy `MAPS_KEY` on Netlify to render Google Static Maps. Without one of them, the contact page shows a visible missing-key warning.
