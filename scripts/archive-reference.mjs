import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const ARCHIVE_DIR = path.join(ROOT, "reference-archive");
const MIRROR_DIR = path.join(ARCHIVE_DIR, "site-mirror");
const NOTES_DIR = path.join(ARCHIVE_DIR, "notes");
const ASSETS_DIR = path.join(ARCHIVE_DIR, "assets");
const LOGOS_DIR = path.join(ASSETS_DIR, "logos");
const IMAGES_DIR = path.join(ASSETS_DIR, "images");
const ICONS_DIR = path.join(ASSETS_DIR, "icons");
const PUBLIC_SELECTED_DIR = path.join(ROOT, "public", "reference-selected");

const selectedPages = [
  "https://villagesocialite.com/",
  "https://villagesocialite.com/categories/",
  "https://villagesocialite.com/explore/",
  "https://villagesocialite.com/blog/",
  "https://villagesocialite.com/join-the-socialite/",
  "https://villagesocialite.com/contact-village-socialite/",
  "https://villagesocialite.com/merch/",
  "https://villagesocialite.com/fat-pig-society-cbd/",
  "https://villagesocialite.com/best-golf-carts-the-villages/",
  "https://villagesocialite.com/home-spa-relaxation-favorites/",
  "https://villagesocialite.com/turning-life-stories-into-lasting-films-village-socialite-special-price/",
  "https://villagesocialite.com/our-top-5-bbq-restaurants-in-the-villages-florida-surrounding-area-amazing-bbq-in-the-villages/",
  "https://villagesocialite.com/single-in-the-villages-florida-55-retirement-community-singles-clubs-you-can-join/",
];

const pageLabel = (url) => {
  const u = new URL(url);
  const clean = u.pathname.replace(/^\/|\/$/g, "");
  return clean.length === 0 ? "home" : clean.replace(/\//g, "__");
};

const decodeHtml = (input) =>
  input
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8230;/g, "...")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");

const stripHtml = (input) =>
  decodeHtml(input)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

async function ensureDirs() {
  for (const dir of [
    ARCHIVE_DIR,
    MIRROR_DIR,
    NOTES_DIR,
    ASSETS_DIR,
    LOGOS_DIR,
    IMAGES_DIR,
    ICONS_DIR,
    PUBLIC_SELECTED_DIR,
  ]) {
    await mkdir(dir, { recursive: true });
  }
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: {
      "user-agent": "VillageSocialiteRebuildArchive/1.0 (+local reference archive)",
    },
  });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return await res.text();
}

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: {
      "user-agent": "VillageSocialiteRebuildArchive/1.0 (+local reference archive)",
    },
  });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return await res.json();
}

async function fetchBinary(url) {
  const res = await fetch(url, {
    headers: {
      "user-agent": "VillageSocialiteRebuildArchive/1.0 (+local reference archive)",
    },
  });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

function assetFilename(assetUrl, index) {
  const url = new URL(assetUrl);
  const pathname = url.pathname.split("/").pop() || `asset-${index}`;
  const [base] = pathname.split("?");
  const sanitized = base.replace(/[^a-zA-Z0-9._-]/g, "-");
  return sanitized || `asset-${index}`;
}

function collectMatches(html, regex) {
  const out = [];
  for (const match of html.matchAll(regex)) {
    if (match[1]) out.push(match[1]);
  }
  return out;
}

function unique(items) {
  return [...new Set(items.filter(Boolean))];
}

function pickAssetBucket(url) {
  const lower = url.toLowerCase();
  if (
    lower.includes("logo") ||
    lower.includes("martini") ||
    lower.includes("img_3286") ||
    lower.includes("cropped-20251201_2104")
  ) {
    return LOGOS_DIR;
  }
  if (
    lower.includes("favicon") ||
    lower.includes("apple-touch-icon") ||
    lower.endsWith(".ico") ||
    lower.includes("/icon")
  ) {
    return ICONS_DIR;
  }
  return IMAGES_DIR;
}

function topPostsByTheme(posts, categoriesById) {
  const picks = {
    "Food & Dining": [],
    Lifestyle: [],
    "People & Community": [],
    "Health & Wellness": [],
    "Local Businesses & Services": [],
    Dating: [],
  };

  for (const post of posts) {
    for (const id of post.categories ?? []) {
      const name = categoriesById.get(id)?.name;
      if (name && name in picks && picks[name].length < 2) {
        picks[name].push(post);
      }
    }
  }

  return picks;
}

await ensureDirs();

const categoryJsonUrl =
  "https://villagesocialite.com/wp-json/wp/v2/categories?per_page=100";
const postsJsonUrl =
  "https://villagesocialite.com/wp-json/wp/v2/posts?per_page=24&_embed";
const sitemapUrls = [
  "https://villagesocialite.com/sitemap.xml",
  "https://villagesocialite.com/page-sitemap.xml",
  "https://villagesocialite.com/category-sitemap.xml",
  "https://villagesocialite.com/post-sitemap.xml",
];

const [categories, posts, ...sitemaps] = await Promise.all([
  fetchJson(categoryJsonUrl),
  fetchJson(postsJsonUrl),
  ...sitemapUrls.map((url) => fetchText(url)),
]);

await writeFile(
  path.join(NOTES_DIR, "categories.json"),
  JSON.stringify(categories, null, 2),
);
await writeFile(path.join(NOTES_DIR, "posts.json"), JSON.stringify(posts, null, 2));
for (let i = 0; i < sitemapUrls.length; i += 1) {
  await writeFile(
    path.join(NOTES_DIR, path.basename(new URL(sitemapUrls[i]).pathname)),
    sitemaps[i],
  );
}

const categoriesById = new Map(categories.map((category) => [category.id, category]));
const htmlByPage = new Map();

for (const url of selectedPages) {
  const html = await fetchText(url);
  const label = pageLabel(url);
  const targetDir = path.join(MIRROR_DIR, label);
  await mkdir(targetDir, { recursive: true });
  await writeFile(path.join(targetDir, "index.html"), html);
  htmlByPage.set(url, html);
}

const homeHtml = htmlByPage.get("https://villagesocialite.com/") ?? "";
const navItems = [...homeHtml.matchAll(/<li[^>]*menu-item[^>]*>\s*<a[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gi)]
  .map((match) => ({
    href: match[1],
    label: stripHtml(match[2]),
  }))
  .filter((item) => item.label);

const footerItems = [...homeHtml.matchAll(/<div class="menu-footer-container"[\s\S]*?<ul[^>]*>([\s\S]*?)<\/ul>/gi)]
  .flatMap((section) =>
    [...section[1].matchAll(/<a[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gi)].map((match) => ({
      href: match[1],
      label: stripHtml(match[2]),
    })),
  );

const homeDescriptionMatch = homeHtml.match(
  /<p class="homepage-description">(.*?)<\/p>/i,
);
const heroDescription = homeDescriptionMatch
  ? stripHtml(homeDescriptionMatch[1])
  : "Village Socialite gives you a real inside look at life in The Villages, Florida.";

const pageHeadlines = selectedPages
  .map((url) => {
    const html = htmlByPage.get(url) ?? "";
    const title = stripHtml(html.match(/<title>(.*?)<\/title>/i)?.[1] ?? "");
    const h1 = stripHtml(html.match(/<h1[^>]*>(.*?)<\/h1>/i)?.[1] ?? "");
    return { url, title, h1 };
  })
  .filter((item) => item.title || item.h1);

const pageAssetUrls = unique([
  ...collectMatches(homeHtml, /<link[^>]+rel="icon"[^>]+href="([^"]*)"/gi),
  ...collectMatches(homeHtml, /<link[^>]+rel="apple-touch-icon"[^>]+href="([^"]+)"/gi),
  ...collectMatches(homeHtml, /"logo":\{"@type":"ImageObject".*?"url":"(.*?)"/gi),
  ...selectedPages.flatMap((url) => {
    const html = htmlByPage.get(url) ?? "";
    return [
      ...collectMatches(html, /<img[^>]+src="([^"]+)"/gi),
      ...collectMatches(html, /data-main-thumb="([^"]+)"/gi),
      ...collectMatches(html, /<meta[^>]+property="og:image"[^>]+content="([^"]+)"/gi),
    ];
  }),
  ...sitemaps.flatMap((xml) =>
    [...xml.matchAll(/<image:loc>(.*?)<\/image:loc>/g)].map((match) => match[1]),
  ),
])
  .filter((url) => url.startsWith("http"))
  .slice(0, 60);

const downloadedAssets = [];
for (let i = 0; i < pageAssetUrls.length; i += 1) {
  const assetUrl = pageAssetUrls[i];
  try {
    const targetDir = pickAssetBucket(assetUrl);
    const fileName = assetFilename(assetUrl, i + 1);
    const bytes = await fetchBinary(assetUrl);
    const outputPath = path.join(targetDir, fileName);
    await writeFile(outputPath, bytes);
    downloadedAssets.push({ url: assetUrl, outputPath });
  } catch (error) {
    downloadedAssets.push({ url: assetUrl, outputPath: `FAILED: ${error.message}` });
  }
}

const reusableSelections = downloadedAssets
  .filter(
    (asset) =>
      asset.outputPath.includes("/logos/") ||
      asset.url.toLowerCase().includes("martini") ||
      asset.url.toLowerCase().includes("sunset") ||
      asset.url.toLowerCase().includes("golf-cart") ||
      asset.url.toLowerCase().includes("palm-tree"),
  )
  .slice(0, 8);

for (const asset of reusableSelections) {
  if (asset.outputPath.startsWith("FAILED")) continue;
  const fileName = path.basename(asset.outputPath);
  const bytes = await fetchBinary(asset.url);
  await writeFile(path.join(PUBLIC_SELECTED_DIR, fileName), bytes);
}

const topThemes = topPostsByTheme(posts, categoriesById);
const categoryLines = categories
  .sort((a, b) => b.count - a.count)
  .map((category) => `- ${stripHtml(category.name)} (${category.count} posts)`)
  .join("\n");

const featuredThemeLines = Object.entries(topThemes)
  .map(([theme, themePosts]) => {
    const rendered = themePosts
      .map((post) => {
        const excerpt = stripHtml(post.excerpt?.rendered ?? "");
        return `- ${stripHtml(post.title?.rendered ?? "")}: ${excerpt || "No excerpt available."}`;
      })
      .join("\n");
    return `### ${theme}\n${rendered || "- No representative post pulled."}`;
  })
  .join("\n\n");

const navLines = unique(navItems.map((item) => `- ${item.label} -> ${item.href}`)).join("\n");
const footerLines = unique(footerItems.map((item) => `- ${item.label} -> ${item.href}`)).join("\n");
const mirroredLines = selectedPages.map((url) => `- ${url}`).join("\n");
const screenshotTargets = [
  "home",
  "categories",
  "explore",
  "join-the-socialite",
  "contact-village-socialite",
  "merch",
  "fat-pig-society-cbd",
];

const analysis = `# Village Socialite Site Analysis

## Current positioning

- Title: Village Socialite - All-Access Pass to The Villages' Best Moments
- Core message pulled from homepage: ${heroDescription}
- The live site behaves like a hybrid of local media hub, community video feed, affiliate content engine, and local business promotion platform centered on The Villages, Florida.

## Current nav structure

### Primary nav
${navLines}

### Footer nav
${footerLines}

## Categories found

${categoryLines}

## Recurring page types

- Homepage with featured hero, video feed, community CTA, and promotional cards.
- Category archive pages focused on topic-specific videos.
- Individual post/video pages mixing community stories, entertainment, lifestyle, and sponsored/local business content.
- Utility pages like Join The Socialite, Contact, Merch, Tags, and policy/legal pages.
- Commerce or affiliate-flavored landing pages such as merch, CBD, shopping, and product recommendation posts.

## Important reference pages mirrored

${mirroredLines}

## Page headline samples

${pageHeadlines.map((item) => `- ${item.url}\n  - Title: ${item.title || "n/a"}\n  - H1: ${item.h1 || "n/a"}`).join("\n")}

## Content themes worth preserving conceptually

- Local discovery: what to do, where to go, what is opening, and which places or experiences matter now.
- Community culture: stories, personalities, local rituals, neighborhood life, and social energy.
- Lifestyle utility: moving, healthcare, retirement, shopping, golf carts, and practical "living here" guidance.
- Entertainment/editorial tone: videos, personality, humor, behind-the-scenes perspectives, and social proof.
- Business spotlighting: local businesses and services presented as part of the local ecosystem.

## Useful copy and framing worth adapting

- "All-Access Pass to The Villages' Best Moments"
- "Watch. Explore. Belong."
- "Village Socialite gives you a real inside look at life in The Villages, Florida."
- The strongest framing on the current site connects everyday local life with discovery, belonging, and a feeling of insider access.

## Representative recent content by theme

${featuredThemeLines}

## Observations on design/content issues in the current site

- Information density is high and the hierarchy is inconsistent.
- Visual polish is limited by the legacy WordPress/video-grid structure.
- The homepage mixes editorial, social, affiliate, and promotional material without enough curation.
- Navigation is narrow for how broad the actual content offering has become.
- The site feels more like a content dump than a premium central hub.

## Suggested improvements for the rebuild

- Position Village Socialite as a modern local lifestyle and discovery brand, not just a video archive.
- Lead with a curated homepage that explains value immediately and then funnels users into featured stories, categories, and community touchpoints.
- Reframe categories as premium editorial verticals with clearer language and better visual grouping.
- Make local business and partner content feel intentional and trustworthy instead of blending into the main feed.
- Add stronger editorial blocks for featured stories, guides, and community highlights.
- Build around a modern brand system with confident typography, warm editorial color, generous spacing, and strategic imagery.
- Keep the structure easy to edit: local data files, reusable components, and clear page sections.

## Screenshot targets

${screenshotTargets.map((target) => `- ${target}`).join("\n")}
`;

await writeFile(path.join(NOTES_DIR, "site-analysis.md"), analysis);

const mirrorIndex = {
  selectedPages,
  sitemaps: sitemapUrls,
  downloadedAssets,
  reusableSelections: reusableSelections.map((asset) => asset.url),
};

await writeFile(
  path.join(NOTES_DIR, "archive-index.json"),
  JSON.stringify(mirrorIndex, null, 2),
);

console.log("Archived reference pages:", selectedPages.length);
console.log("Downloaded reference assets:", downloadedAssets.length);
console.log("Analysis written to:", path.join(NOTES_DIR, "site-analysis.md"));
