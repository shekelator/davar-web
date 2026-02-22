# Daily Davar — Copilot Instructions

## Project Overview

Daily Davar is a reading-schedule website for the Tanakh and New Testament. It is data-driven — the reading schedule is expressed in structured data so it can be updated automatically. The goal is a clean, beautiful, statically generated site hosted on AWS CloudFront.

## Tech Stack

- **React + Vite** (TypeScript)
- **Tailwind CSS v4** for styling (via `@tailwindcss/vite` plugin)
- **React Router v7** (BrowserRouter, client-side routing)
- **Vitest** for unit/component tests
- **fnm** for Node version management (`.node-version` file is present)
- **Static site output** — no server runtime; builds to `dist/` for CloudFront deployment

## Commands

```bash
fnm use            # Switch to the correct Node version
npm run dev        # Start local dev server (Vite HMR)
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
npm run test       # Run all tests (Vitest)
npm run test -- --reporter=verbose <path/to/file.test.tsx>  # Run a single test file
npm run lint       # ESLint
```

## Architecture

The app is data-driven: reading schedule data lives in `src/data/` (TypeScript modules) and is consumed by React components at build time. There is no backend — all data must be resolvable statically.

```
src/
  data/           # Reading schedule data; single source of truth
  components/     # Reusable UI components
  pages/          # Top-level route components
  utils/          # Pure helpers (date math, schedule lookups, etc.)
  test/           # Test setup (setup.ts)
```

Key data concepts:
- **Reading schedule**: maps each calendar date to Torah portion (from hebcal.com), Tanakh chapters, and New Testament chapters.
- **Torah portions**: sourced from hebcal.com. On rare occasions Hebrew Bible and English Bible chapter/verse differ — the JPS English version aligned to the Hebrew text is authoritative.
- **Audio links**: BibleGateway audio is chapter-level (not verse-level); multiple days sharing a chapter will link to the full chapter.

## Key Conventions

- All schedule data changes should go through `src/data/` — components must not hardcode readings.
- Use Tailwind utility classes directly in JSX; avoid custom CSS except for values Tailwind cannot express.
- Prefer named exports over default exports for components.
- Co-locate test files with source: `ComponentName.test.tsx` next to `ComponentName.tsx`.
- The site must produce a fully static `dist/` that works behind CloudFront. Configure CloudFront to return `index.html` for 404/403 responses to support client-side routing.

## Deployment

Build output (`dist/`) is uploaded to S3 and served via CloudFront.
