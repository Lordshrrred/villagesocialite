import wordpressContent from "@/data/wordpress-content.json";

export type WordpressItem = {
  id: number;
  date: string;
  modified: string;
  slug: string;
  type: "post" | "page";
  link: string;
  title: string;
  content: string;
  excerpt: string;
  categories: number[];
  tags: number[];
  jetpackFeaturedMediaUrl: string | null;
  ogImage: string | null;
  description: string;
  canonical: string;
};

type WordpressCategory = {
  id: number;
  slug: string;
  name: string;
  link: string;
  count: number;
  description: string;
};

type WordpressTag = {
  id: number;
  slug: string;
  name: string;
  link: string;
  count: number;
};

type WordpressDataset = {
  generatedAt: string;
  source: string;
  stats: {
    posts: number;
    pages: number;
    categories: number;
    tags: number;
  };
  posts: WordpressItem[];
  pages: WordpressItem[];
  categories: WordpressCategory[];
  tags: WordpressTag[];
};

const dataset = wordpressContent as WordpressDataset;

const categoryMap = new Map(dataset.categories.map((category) => [category.id, category]));
const tagMap = new Map(dataset.tags.map((tag) => [tag.id, tag]));
const allItems = [...dataset.pages, ...dataset.posts];
const itemMap = new Map(allItems.map((item) => [item.slug, item]));

export function getWordpressDataset() {
  return dataset;
}

export function getAllItems() {
  return allItems;
}

export function getAllPosts() {
  return dataset.posts;
}

export function getAllPages() {
  return dataset.pages;
}

export function getAllCategories() {
  return dataset.categories;
}

export function getAllTags() {
  return dataset.tags;
}

export function getItemBySlug(slug: string) {
  return itemMap.get(slug) ?? null;
}

export function getPageBySlug(slug: string) {
  return dataset.pages.find((page) => page.slug === slug) ?? null;
}

export function getCategoryBySlug(slug: string) {
  return dataset.categories.find((category) => category.slug === slug) ?? null;
}

export function getTagBySlug(slug: string) {
  return dataset.tags.find((tag) => tag.slug === slug) ?? null;
}

export function getItemsForCategory(categoryId: number) {
  return dataset.posts.filter((post) => post.categories.includes(categoryId));
}

export function getItemsForTag(tagId: number) {
  return dataset.posts.filter((post) => post.tags.includes(tagId));
}

export function getCategoryNames(categoryIds: number[]) {
  return categoryIds
    .map((id) => categoryMap.get(id))
    .filter(Boolean) as WordpressCategory[];
}

export function getTagNames(tagIds: number[]) {
  return tagIds.map((id) => tagMap.get(id)).filter(Boolean) as WordpressTag[];
}

export function getPrimaryImage(item: WordpressItem) {
  return item.jetpackFeaturedMediaUrl ?? item.ogImage ?? "/reference-selected/villages_header.jpg";
}

export function getOfferPages() {
  const offerSlugs = [
    "join-the-socialite",
    "merch",
    "fat-pig-society-cbd",
    "best-golf-carts-the-villages",
    "home-spa-relaxation-favorites",
    "celebrating-life-movies-villages-discount",
    "contact-village-socialite",
  ];

  return offerSlugs
    .map((slug) => getItemBySlug(slug))
    .filter(Boolean) as WordpressItem[];
}

export function getLatestPosts(limit = 12) {
  return [...dataset.posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getAllPostsSorted() {
  return [...dataset.posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getTopTags(limit = 250) {
  return [...dataset.tags].sort((a, b) => b.count - a.count).slice(0, limit);
}

export function getRelatedPosts(item: WordpressItem, limit = 6) {
  const scored = dataset.posts
    .filter((post) => post.slug !== item.slug)
    .map((post) => {
      const sharedCategories = post.categories.filter((id) =>
        item.categories.includes(id),
      ).length;
      const sharedTags = post.tags.filter((id) => item.tags.includes(id)).length;
      return {
        post,
        score: sharedCategories * 3 + sharedTags,
      };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((entry) => entry.post);
}

export function getFeaturedMigrationStories() {
  const chosen = [
    "our-top-5-bbq-restaurants-in-the-villages-florida-surrounding-area-amazing-bbq-in-the-villages",
    "single-in-the-villages-florida-55-retirement-community-singles-clubs-you-can-join",
    "the-villages-florida-what-are-the-town-squares-like",
    "peachwave-in-the-villages-florida",
  ];

  return chosen
    .map((slug) => getItemBySlug(slug))
    .filter(Boolean) as WordpressItem[];
}
