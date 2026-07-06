# AGENTS.md

Guidance for coding agents working in this repository.

## Project Overview

This is the Astro-powered portfolio website for SUITS.

- Framework: Astro 7 with static output.
- Styling: Tailwind CSS 4 utilities through `src/styles/global.css`.
- Package manager: `pnpm`.
- Node version: `24` (`.node-version` and `.nvmrc`).
- Site URLs use trailing slashes (`astro.config.mjs`).

## Start Here

Run these commands from the repository root:

```bash
pnpm install
pnpm dev
pnpm build
```

`pnpm build` runs `astro check` before the static build and is the default verification command for code changes.

## Important Paths

- `src/layouts/BaseLayout.astro`: shared document shell, header, main area, and footer.
- `src/styles/global.css`: global base styles, shared component classes, layout rules.
- `src/components`: reusable Astro components.
- `src/pages`: route files.
- `src/data/projects.ts`: project/reference metadata.
- `src/data/services.ts`: service page data.
- `src/data/profile.ts`: contact/profile data.
- `src/content/pages`: Markdown copy for content pages.
- `src/content/legal/impressum.md`: imprint and privacy copy.
- `public/images/projects`: generated project screenshots and thumbnails.

## Content Workflow

To add a new project/reference, prefer the existing script:

```bash
pnpm add-project -- --url https://example.com --title "Project Title" --date 2026
```

The script captures a screenshot, creates a thumbnail, stores assets under `public/images/projects`, and updates `src/data/projects.ts`.

## Styling Conventions

- Prefer the existing shared classes in `src/styles/global.css` before adding one-off page styles.
- Keep layout fixes site-wide when they concern shared page structure.
- Preserve the restrained SUITS visual style: Work Sans, gray typography, blue accent, simple spacing, no decorative redesigns unless explicitly requested.
- Keep pages responsive across mobile and large desktop viewports.
- Use existing components (`Header`, `Footer`, `Icon`, `SuitsLogo`, `BrandIcon`) instead of duplicating markup.

## Environment Notes

- The contact page renders a Google Static Maps image when `PUBLIC_GOOGLE_MAPS_API_KEY` or legacy `MAPS_KEY` is available.
- Without a map key, the contact page intentionally shows a visible missing-key warning.
- Local development usually runs on `http://localhost:4321/`.

## Verification

Before handing off changes:

```bash
pnpm build
```

For layout or visual work, also check the affected route in a browser at both mobile and large desktop sizes. Watch for footer placement, header overlap, text wrapping, and horizontal overflow.

## Git Hygiene

- Check `git status --short` before editing and before final handoff.
- Do not revert unrelated user changes.
- Keep commits focused if the user asks for a commit.
- Use clear commit messages such as `Fix footer placement on short pages` or `Add agent setup guide`.
