import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "data");
const OUT_FILE = path.join(OUT_DIR, "wordpress-content.json");
const BASE = "https://villagesocialite.com/wp-json/wp/v2";

const headers = {
  "user-agent": "VillageSocialiteContentImport/1.0",
};

async function fetchJson(url) {
  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(`Failed ${url}: ${response.status}`);
  }

  return response.json();
}

async function fetchCollection(endpoint, totalPages) {
  const pages = [];
  for (let page = 1; page <= totalPages; page += 1) {
    pages.push(fetchJson(`${BASE}/${endpoint}?per_page=100&page=${page}`));
  }

  return (await Promise.all(pages)).flat();
}

function simplifyItem(item) {
  return {
    id: item.id,
    date: item.date,
    modified: item.modified,
    slug: item.slug,
    type: item.type,
    link: item.link,
    title: item.title?.rendered ?? "",
    content: item.content?.rendered ?? "",
    excerpt: item.excerpt?.rendered ?? "",
    categories: item.categories ?? [],
    tags: item.tags ?? [],
    jetpackFeaturedMediaUrl: item.jetpack_featured_media_url ?? null,
    ogImage: item.yoast_head_json?.og_image?.[0]?.url ?? null,
    description: item.yoast_head_json?.description ?? "",
    canonical: item.yoast_head_json?.canonical ?? item.link,
  };
}

await mkdir(OUT_DIR, { recursive: true });

const [posts, pages, categories, tags] = await Promise.all([
  fetchCollection("posts", 6),
  fetchCollection("pages", 1),
  fetchCollection("categories", 1),
  fetchCollection("tags", 24),
]);

const payload = {
  generatedAt: new Date().toISOString(),
  source: "https://villagesocialite.com",
  stats: {
    posts: posts.length,
    pages: pages.length,
    categories: categories.length,
    tags: tags.length,
  },
  posts: posts.map(simplifyItem),
  pages: pages.map(simplifyItem),
  categories: categories.map((item) => ({
    id: item.id,
    slug: item.slug,
    name: item.name,
    link: item.link,
    count: item.count,
    description: item.description ?? "",
  })),
  tags: tags.map((item) => ({
    id: item.id,
    slug: item.slug,
    name: item.name,
    link: item.link,
    count: item.count,
  })),
};

await writeFile(OUT_FILE, JSON.stringify(payload, null, 2));

console.log(`Imported ${posts.length} posts, ${pages.length} pages, ${categories.length} categories, and ${tags.length} tags.`);
console.log(`Saved to ${OUT_FILE}`);
