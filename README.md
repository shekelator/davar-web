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

## Updating the Schedule

The reading schedule is generated from a CSV file. To update the schedule:

1.  Place the new CSV file in the project root: `daily-davar-schedule-5786.csv` (ensure filename matches script expectation).
2.  Run the generation script:
    ```bash
    npm run generate
    ```
3.  Commit the updated data file: `src/data/schedule-5786.ts`.

## Deployment

Build output in `dist/` is a fully static site intended for S3 + CloudFront. Since the app uses client-side routing, configure CloudFront to return `index.html` for all 404/403 responses.
