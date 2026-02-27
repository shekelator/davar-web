# Daily Davar

A clean, data-driven reading schedule website for the Tanakh and New Testament. Built with React + Vite + TypeScript + Tailwind CSS.

## Getting started

This project uses [fnm](https://github.com/Schniz/fnm) for Node version management. A `.node-version` file is included.

```bash
fnm use           # Switch to the correct Node version
npm install
npm run dev       # Start local dev server at http://localhost:5173
```

## Commands

```bash
fnm use           # Switch to the correct Node version (see .node-version)
npm run dev       # Local dev server with HMR
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run test      # Run all tests (Vitest)
npm run test -- --reporter=verbose src/utils/schedule.test.ts  # Run a single test file
npm run lint      # ESLint
```

## Deployment

Build output in `dist/` is a fully static site intended for S3 + CloudFront. Since the app uses client-side routing, configure CloudFront to return `index.html` for all 404/403 responses.

## TODO

- [x] Populate the full year's reading schedule (imported from CSV)
- [x] Add weekly navigation (Parashat HaShavua)
- [x] Add "Listen All" and "Read All" buttons with BibleGateway integration
- [x] Update header with logo and banner image
- [ ] Add a date-picker / browse-by-date page so visitors can look up past and future readings
- [ ] CloudFront deployment config (S3 bucket + CloudFront distribution via CDK, Terraform, or a deploy script)
