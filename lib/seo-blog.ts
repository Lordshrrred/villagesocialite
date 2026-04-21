import { seoBlogImages } from "@/lib/seo-blog-images";

export type SeoBlogCategory = {
  slug: string;
  name: string;
  description: string;
  color: string;
};

export type SeoBlogPost = {
  id: number;
  slug: string;
  title: string;
  keyword: string;
  categorySlug: string;
  category: string;
  description: string;
  hook: string;
  intent: string;
  image: string;
  publishedAt: string;
  secondaryKeywords: string[];
};

const categories: SeoBlogCategory[] = [
  {
    slug: "moving-to-the-villages",
    name: "Moving to The Villages",
    description: "Relocation, lifestyle preview visits, neighborhoods, costs, and the real questions people ask before moving.",
    color: "#00afc5",
  },
  {
    slug: "things-to-do",
    name: "Things To Do",
    description: "Town squares, events, live music, day trips, clubs, recreation, and social life in The Villages.",
    color: "#e0461e",
  },
  {
    slug: "golf-cart-life",
    name: "Golf Cart Life",
    description: "Golf cart paths, buying tips, rentals, safety, accessories, and the signature mobility culture of The Villages.",
    color: "#004d63",
  },
  {
    slug: "dining-and-nightlife",
    name: "Dining & Nightlife",
    description: "Restaurants, happy hours, town square dining, music nights, and date-night ideas.",
    color: "#e8a415",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    description: "Homes, neighborhoods, market questions, lifestyle visits, seasonal demand, and buyer research.",
    color: "#006a82",
  },
  {
    slug: "health-wellness",
    name: "Health & Wellness",
    description: "Healthcare access, active aging, wellness routines, home comfort, and staying independent.",
    color: "#48cfe0",
  },
  {
    slug: "clubs-community",
    name: "Clubs & Community",
    description: "Social clubs, recreation centers, volunteering, meeting people, and building a life after the move.",
    color: "#00d8f0",
  },
  {
    slug: "shopping-local-services",
    name: "Shopping & Local Services",
    description: "Local businesses, services, shopping, vendor discovery, and resident-friendly recommendations.",
    color: "#184555",
  },
  {
    slug: "dating-social-life",
    name: "Dating & Social Life",
    description: "Singles life, friendship, social confidence, relationship questions, and where connection happens.",
    color: "#e0461e",
  },
  {
    slug: "visitor-guides",
    name: "Visitor Guides",
    description: "First trips, lifestyle visits, weekend itineraries, seasonal planning, and what to see first.",
    color: "#00afc5",
  },
];

const images = {
  moving: "/reference-selected/home-for-sale-in-the-villages-florida-near-lake-sumter-landing-paddock-square-golf-cart-option.jpg",
  townSquare: "/reference-selected/lake-sumter-landing-the-villages-florida.jpg",
  golfCart: "/reference-selected/golf-carts-the-villages-florida.jpg",
  dining: "/reference-selected/our-top-5-bbq-restaurants-in-the-villages-florida-surrounding-area-amazing-bbq-in-the-villages.jpg",
  realEstate: "/reference-selected/home-for-sale-in-the-villages-florida-near-lake-sumter-landing-paddock-square-golf-cart-option.jpg",
  wellness: "https://villagesocialite.com/wp-content/uploads/2026/04/thevillages-inflatablehottub.jpg",
  community: "/reference-selected/villages_header.jpg",
  services: "https://villagesocialite.com/wp-content/uploads/2026/03/followvillagesocialiteonfacebook.jpg",
  dating: "/reference-selected/single-in-the-villages-florida-55-retirement-community-singles-clubs-you-can-join.jpg",
  visitor: "/reference-selected/the-villages-florida-what-are-the-town-squares-like.jpg",
};

const researchTopics = [
  {
    categorySlug: "moving-to-the-villages",
    image: images.moving,
    terms: [
      "moving to The Villages Florida",
      "living in The Villages Florida",
      "The Villages Florida lifestyle",
      "cost of living in The Villages Florida",
      "best neighborhoods in The Villages Florida",
      "The Villages Florida pros and cons",
      "retiring in The Villages Florida",
      "The Villages lifestyle visit",
      "newcomer guide to The Villages",
      "is The Villages Florida worth it",
    ],
  },
  {
    categorySlug: "things-to-do",
    image: images.townSquare,
    terms: [
      "things to do in The Villages Florida",
      "The Villages town squares",
      "Spanish Springs Town Square",
      "Lake Sumter Landing",
      "Brownwood Paddock Square",
      "Sawgrass Grove The Villages",
      "The Villages events this weekend",
      "live music in The Villages Florida",
      "The Villages entertainment schedule",
      "free things to do in The Villages",
    ],
  },
  {
    categorySlug: "golf-cart-life",
    image: images.golfCart,
    terms: [
      "The Villages golf cart life",
      "best golf carts for The Villages",
      "golf cart paths in The Villages",
      "golf cart rentals The Villages Florida",
      "street legal golf carts The Villages",
      "The Villages golf cart rules",
      "golf cart accessories The Villages",
      "gas vs electric golf cart The Villages",
      "custom golf carts The Villages",
      "golf cart safety The Villages",
    ],
  },
  {
    categorySlug: "dining-and-nightlife",
    image: images.dining,
    terms: [
      "best restaurants in The Villages Florida",
      "The Villages restaurants near town squares",
      "happy hour The Villages Florida",
      "breakfast restaurants The Villages",
      "date night restaurants The Villages",
      "waterfront dining The Villages",
      "BBQ restaurants The Villages Florida",
      "coffee shops The Villages Florida",
      "nightlife in The Villages Florida",
      "where locals eat in The Villages",
    ],
  },
  {
    categorySlug: "real-estate",
    image: images.realEstate,
    terms: [
      "The Villages Florida real estate",
      "homes for sale in The Villages Florida",
      "patio villas in The Villages",
      "new homes in The Villages Florida",
      "The Villages home prices",
      "buying a home in The Villages",
      "seasonal homes in The Villages",
      "homes near Lake Sumter Landing",
      "homes near Brownwood Paddock Square",
      "The Villages real estate market",
    ],
  },
  {
    categorySlug: "health-wellness",
    image: images.wellness,
    terms: [
      "healthcare in The Villages Florida",
      "wellness in The Villages Florida",
      "active aging in The Villages",
      "fitness classes The Villages Florida",
      "pickleball in The Villages",
      "home spa ideas for seniors",
      "senior comfort products",
      "recliner chair for seniors",
      "phone handset for seniors",
      "independent living The Villages",
    ],
  },
  {
    categorySlug: "clubs-community",
    image: images.community,
    terms: [
      "clubs in The Villages Florida",
      "recreation centers The Villages",
      "meet people in The Villages",
      "volunteering in The Villages Florida",
      "social clubs The Villages Florida",
      "classes in The Villages Florida",
      "art classes The Villages",
      "dance clubs The Villages",
      "community events The Villages",
      "how to make friends in The Villages",
    ],
  },
  {
    categorySlug: "shopping-local-services",
    image: images.services,
    terms: [
      "shopping in The Villages Florida",
      "local businesses The Villages Florida",
      "services in The Villages Florida",
      "farmers market The Villages",
      "golf cart service The Villages",
      "home services The Villages Florida",
      "pet services The Villages Florida",
      "medical services The Villages",
      "salons The Villages Florida",
      "best local businesses The Villages",
    ],
  },
  {
    categorySlug: "dating-social-life",
    image: images.dating,
    terms: [
      "dating in The Villages Florida",
      "singles in The Villages Florida",
      "The Villages singles clubs",
      "senior dating The Villages",
      "social life in The Villages Florida",
      "meet singles in The Villages",
      "friendship after retirement",
      "best places to meet people in The Villages",
      "The Villages social scene",
      "relationship advice for active adults",
    ],
  },
  {
    categorySlug: "visitor-guides",
    image: images.visitor,
    terms: [
      "visit The Villages Florida",
      "The Villages Florida weekend itinerary",
      "first time visitor guide The Villages",
      "where to stay in The Villages Florida",
      "The Villages day trip",
      "The Villages in winter",
      "The Villages in summer",
      "The Villages town square guide",
      "what to know before visiting The Villages",
      "The Villages lifestyle preview",
    ],
  },
];

function titleFromKeyword(keyword: string) {
  const starts = [
    "The Real Guide to",
    "What to Know About",
    "How to Navigate",
    "The Smart Socialite Guide to",
    "The Village Socialite Guide to",
  ];
  return `${starts[keyword.length % starts.length]} ${keyword}`;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const categoryEditorial = {
  "moving-to-the-villages": {
    scene: "neighborhood feel, daily errands, home styles, lifestyle visits, and what a normal week could actually look like",
    promise: "Use it to compare the dream with the day-to-day details before the moving truck shows up.",
    decision: "proximity to town squares, golf cart access, budget comfort, healthcare, clubs, and how quickly the place feels like home",
  },
  "things-to-do": {
    scene: "town squares, live music, seasonal events, recreation centers, day trips, and the easy wins that make a weekend feel full",
    promise: "Use it to turn a loose afternoon into a plan with a little more sparkle.",
    decision: "timing, parking, golf cart routes, crowd energy, weather, reservations, and whether the outing gives people a reason to linger",
  },
  "golf-cart-life": {
    scene: "cart paths, rentals, gas stops, accessories, safety habits, route planning, and the culture that makes carts feel like a second front door",
    promise: "Use it to move around The Villages with fewer rookie mistakes and better local rhythm.",
    decision: "range, comfort, storage, weather protection, route confidence, maintenance, and where the cart fits into daily life",
  },
  "dining-and-nightlife": {
    scene: "breakfast runs, happy hours, town square patios, date-night tables, music nights, and the restaurants people actually talk about",
    promise: "Use it to pick better tables, better timing, and better reasons to get dressed and go out.",
    decision: "menu fit, noise level, reservation habits, golf cart access, live music, patio comfort, and whether the night feels worth repeating",
  },
  "real-estate": {
    scene: "home types, neighborhood tradeoffs, seasonal demand, listing language, cart-friendly locations, and the lifestyle behind the price",
    promise: "Use it to read between the listing photos and understand what the address might mean for real life.",
    decision: "location, floor plan, bond and fees, square proximity, resale confidence, outdoor space, and how the home supports the social life you want",
  },
  "health-wellness": {
    scene: "healthcare access, active aging, fitness, pickleball, recovery, home comfort, and independence without losing the fun",
    promise: "Use it to build a Villages routine that feels good, sustainable, and still social.",
    decision: "accessibility, appointment convenience, strength and mobility, comfort products, classes, recovery time, and confidence getting out the door",
  },
  "clubs-community": {
    scene: "clubs, classes, volunteering, recreation centers, hobby groups, dance floors, art rooms, and the friend-making engine of The Villages",
    promise: "Use it to find the rooms where your people are most likely to be.",
    decision: "meeting frequency, beginner friendliness, location, cost, social fit, schedule, and whether the group makes it easy to show up again",
  },
  "shopping-local-services": {
    scene: "local businesses, home services, salons, medical offices, markets, pet care, cart service, and the vendors residents rely on",
    promise: "Use it to spend smarter locally and find the businesses that make Village life smoother.",
    decision: "trust, convenience, reviews, responsiveness, pricing clarity, golf cart access, and whether the service understands active-adult life",
  },
  "dating-social-life": {
    scene: "singles groups, friendship circles, date-night spots, confidence, relationship questions, and the very human side of starting again",
    promise: "Use it to navigate connection with more ease and a little more nerve.",
    decision: "comfort level, safety, social setting, shared interests, timing, expectations, and whether the situation helps people relax",
  },
  "visitor-guides": {
    scene: "first trips, lifestyle previews, town square routes, seasonal planning, where to stay, what to skip, and what to see first",
    promise: "Use it to make a short visit feel like a smart preview instead of a blur.",
    decision: "trip length, weather, square selection, restaurants, cart access, show times, lodging, and what gives visitors the clearest feel for the community",
  },
} as const;

function editorialFor(slug: string) {
  return categoryEditorial[slug as keyof typeof categoryEditorial] ?? categoryEditorial["things-to-do"];
}

function descriptionFor(keyword: string, slug: string, index: number) {
  const editorial = editorialFor(slug);
  const opens = [
    `${keyword} gets clearer when you look at how people actually live it in The Villages.`,
    `${keyword} can shape a whole day in The Villages, from the first plan to the ride home.`,
    `${keyword} is one of those local questions where the details matter more than the headline.`,
    `${keyword} deserves a Villages-specific read, because the community has its own rhythm.`,
  ];
  return `${opens[index % opens.length]} This guide looks at ${editorial.scene}. ${editorial.promise}`;
}

function hookFor(keyword: string, slug: string, index: number) {
  const editorial = editorialFor(slug);
  const hooks = [
    `Around The Villages, ${keyword} is tied to real choices: where to go, who to meet, what to compare, and how to make the day feel easier.`,
    `The Villages has a way of turning ${keyword} into something practical, social, and surprisingly personal once you are here.`,
    `For residents, future residents, and visiting family, ${keyword} is not abstract. It affects the routes, rooms, tables, and moments that make the community work.`,
    `A good answer on ${keyword} should feel local. It should understand the golf carts, the squares, the clubs, the weather, and the social pace of The Villages.`,
  ];
  return `${hooks[index % hooks.length]} The Socialite angle is simple: ${editorial.promise}`;
}

function intentFor(slug: string) {
  const editorial = editorialFor(slug);
  return `Help residents, future residents, visitors, and local businesses compare ${editorial.decision}.`;
}

export const seoBlogCategories = categories;

export const seoBlogPosts: SeoBlogPost[] = researchTopics.flatMap((cluster, clusterIndex) => {
  const category = categories.find((item) => item.slug === cluster.categorySlug)!;

  return cluster.terms.map((keyword, termIndex) => {
    const id = clusterIndex * 10 + termIndex + 1;
    const title = titleFromKeyword(keyword);
    return {
      id,
      slug: slugify(title),
      title,
      keyword,
      categorySlug: category.slug,
      category: category.name,
      image: seoBlogImages[id - 1]?.path ?? cluster.image,
      publishedAt: new Date(Date.UTC(2026, 3, 21 - Math.floor(id / 6))).toISOString(),
      intent: intentFor(category.slug),
      description: descriptionFor(keyword, category.slug, termIndex),
      hook: hookFor(keyword, category.slug, termIndex),
      secondaryKeywords: [
        "The Villages Florida",
        "Village Socialite",
        category.name,
        "The Villages community",
        "active adult lifestyle Florida",
      ],
    };
  });
});

export function getSeoBlogPosts() {
  return seoBlogPosts;
}

export function getSeoBlogPostBySlug(slug: string) {
  return seoBlogPosts.find((post) => post.slug === slug) ?? null;
}

export function getSeoBlogCategoryBySlug(slug: string) {
  return seoBlogCategories.find((category) => category.slug === slug) ?? null;
}

export function getSeoBlogPostsByCategory(slug: string) {
  return seoBlogPosts.filter((post) => post.categorySlug === slug);
}

export function getRelatedSeoBlogPosts(post: SeoBlogPost, limit = 4) {
  return seoBlogPosts
    .filter((item) => item.slug !== post.slug)
    .sort((a, b) => {
      const sameCategoryA = a.categorySlug === post.categorySlug ? 1 : 0;
      const sameCategoryB = b.categorySlug === post.categorySlug ? 1 : 0;
      return sameCategoryB - sameCategoryA || a.id - b.id;
    })
    .slice(0, limit);
}

export function buildSeoArticleSections(post: SeoBlogPost) {
  return [
    {
      title: `Why "${post.keyword}" matters in The Villages`,
      body: `${post.keyword} usually matters because somebody is trying to make a real Village decision. They might be visiting for the first time, comparing retirement communities, meeting friends for dinner, planning a cart route, choosing a club, or figuring out where the energy is tonight. Village Socialite treats that curiosity like the start of a local plan, not a generic answer dropped onto a page.`,
    },
    {
      title: "The local reality behind the topic",
      body: `The Villages works differently from a normal Florida town. Town squares, recreation centers, golf cart paths, clubs, restaurants, healthcare, home services, and social calendars are all connected. That means a strong answer has to go beyond a generic list. It needs to explain how people actually move, meet, eat, shop, relax, and show up here.`,
    },
    {
      title: `How to use this guide if you are researching ${post.category}`,
      body: `Start with the kind of day you actually want. If you are moving here, think about daily rhythm and proximity. If you are visiting, prioritize town squares, live music, restaurants, and golf cart access. If you already live here, use this as a prompt to try a new lane of Village life instead of repeating the same routine. The best local guides do not just answer a question; they help you move.`,
    },
    {
      title: "What locals and future locals should compare",
      body: `Compare convenience, social fit, seasonality, cost, accessibility, and how easy it is to take action. A beautiful place matters, but the best Village experiences usually come from frictionless details: parking, golf cart access, timing, crowd level, reservation habits, weather, mobility, and whether the spot gives people a reason to come back.`,
    },
    {
      title: "The Village Socialite take",
      body: `Village Socialite works best when it feels like the human version of the answer: practical guidance, local personality, useful offers, and clear next steps. The goal is simple: help businesses, creators, residents, and visitors connect faster with the people, places, and moments that make The Villages worth talking about.`,
    },
  ];
}
