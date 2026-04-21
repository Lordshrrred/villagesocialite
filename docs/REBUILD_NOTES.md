# Village Socialite Rebuild Notes

## What was mirrored

- Public HTML snapshots for 13 reference pages were saved under `reference-archive/site-mirror/`.
- Key structural exports were saved under `reference-archive/notes/`, including:
  - `site-analysis.md`
  - `sitemap.xml`
  - `page-sitemap.xml`
  - `category-sitemap.xml`
  - `post-sitemap.xml`
  - `categories.json`
  - `posts.json`
- Full-page screenshots for major live pages were captured under `reference-archive/screenshots/`.

## What assets were preserved

- Raw reference assets were downloaded into:
  - `reference-archive/assets/logos`
  - `reference-archive/assets/images`
  - `reference-archive/assets/icons`
- Reusable brand and content images selected for the rebuild were copied into:
  - `public/reference-selected`

## What was rebuilt

- A fresh Next.js App Router site with TypeScript and Tailwind CSS.
- A polished homepage built around:
  - hero
  - featured stories/videos
  - explore categories
  - why Village Socialite
  - community/local culture
  - newsletter CTA
  - strong footer
- Core presentation pages:
  - `/`
  - `/about`
  - `/explore`
  - `/categories`
  - `/featured`
  - `/contact`
- A reusable component layer for navigation, cards, section headings, footer, and CTA sections.

## How to run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## How to deploy later

```bash
npm run build
npm run start
```

- This repo is structured for straightforward deployment to Vercel or any Node-capable host.
- Before launch, point the production domain to the final deployment target after DNS cutover planning is complete.

## Items that should be replaced with final client-approved content

- Final email/contact destination:
  - `hello@villagesocialite.com` is a placeholder.
- Newsletter integration:
  - the current CTA is presentation-only and should be wired to a real provider.
- Featured story copy:
  - current content is curated from live-site themes and archived material, but should be refined with approved editorial language.
- Partnership and sponsor modules:
  - any paid placement language should be reviewed and finalized.
- SEO and social assets:
  - current metadata is launch-friendly, but final titles, descriptions, and share images should be approved.
