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
- A local imported WordPress corpus snapshot in `data/wordpress-content.json` containing:
  - 556 posts
  - 18 pages
  - 20 categories
  - 2,389 tags
- A polished homepage built around:
  - hero
  - featured stories/videos
  - explore categories
  - preserved offers/pages from the original site
  - latest imported stories from the original archive
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
  - `/blog`
  - `/contact`
- Content migration routes:
  - `/<original-post-or-page-slug>`
  - `/category/<slug>`
  - `/tag/<slug>`
- A reusable component layer for navigation, cards, section headings, footer, and CTA sections.
- A script to refresh imported source content:
  - `scripts/import-wordpress-content.mjs`

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
- Imported original content:
  - the original copy is preserved, but some pages may benefit from manual cleanup or richer editorial framing once client priorities are known.
- Partnership and sponsor modules:
  - any paid placement language should be reviewed and finalized.
- SEO and social assets:
  - current metadata is launch-friendly, but final titles, descriptions, and share images should be approved.
