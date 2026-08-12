# Biro Power Private Limited — Website

A React + Vite site for Biro Power Private Limited, an agri-tech manufacturer
based in Patna, Bihar. Built as a single-page site covering the company
profile, product catalog, corporate/compliance record, leadership, and
contact details.

## Project structure

```
biro-power-site/
├── index.html              # HTML entry point (title, meta tags)
├── package.json            # dependencies & scripts
├── vite.config.js          # Vite + React plugin config
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx             # React entry point, mounts <App />
    ├── App.jsx               # renders <BiroPowerSite />
    ├── BiroPowerSite.jsx     # the entire site (markup + styles)
    └── index.css             # minimal global reset
```

All of the site's design — fonts, colors, layout — lives inside
`BiroPowerSite.jsx` in a `<style>` block, so the component is fully
self-contained. `index.css` only resets default browser margins.

## Getting started

Requires [Node.js](https://nodejs.org) (LTS version recommended).

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Other commands

```bash
npm run build      # production build, output in dist/
npm run preview    # preview the production build locally
npm run lint        # run oxlint
```

## Notes

- Fonts (Big Shoulders Display, IBM Plex Sans, IBM Plex Mono) load from
  Google Fonts via `@import` inside `BiroPowerSite.jsx`, so an internet
  connection is needed on first load for them to render correctly.
- All company details (pricing, corporate filings, leadership) are sourced
  from public listings as of August 2026 — verify anything customer-facing
  directly with the company before relying on it.
