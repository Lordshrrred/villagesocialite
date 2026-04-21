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

export type SeoArticleSection = {
  title: string;
  body: string[];
  takeaways: string[];
};

export type SeoInternalLink = {
  href: string;
  label: string;
  description: string;
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

const categoryImagePools: Record<string, string[]> = {
  "moving-to-the-villages": [
    "/reference-selected/home-for-sale-in-the-villages-florida-near-lake-sumter-landing-paddock-square-golf-cart-option.jpg",
    "/blog-images/commons/24-the-villages-panorama-1374077049.jpg",
    "/blog-images/commons/23-sumter-landing-the-villages-fl-panoramio.jpg",
    "/blog-images/commons/61-couple-walking-in-nature-trail-the-villages-florida.jpg",
    "/blog-images/commons/53-feeney-recreational-center-2017.jpg",
    "/blog-images/commons/59-golfcars-in-sunter-landings-the-villages-florida.jpg",
    "/blog-images/archive/my-new-home-in-the-villages-fl.jpg",
    "/blog-images/archive/new-homes-2026-the-villages-florida-edenfield-lagrange-eastport.jpg",
    "/blog-images/commons/36-villages-lsl-lake-sumter-pano01.jpg",
    "/blog-images/commons/20-salt-water-chlorinateded-pool-at-the-villages-florida.jpg",
  ],
  "things-to-do": [
    "/blog-images/commons/42-town-square-event.jpg",
    "/reference-selected/lake-sumter-landing-the-villages-florida.jpg",
    "/blog-images/commons/02-abendkulisse-in-spanish-springs-the-villages-florida.jpg",
    "/blog-images/commons/19-prime-time-twirlers-2023.jpg",
    "/blog-images/commons/18-polo-stadium-in-the-villages-florida.jpg",
    "/blog-images/commons/01-5k-run-in-the-villages-florida.jpg",
    "/blog-images/commons/48-aerial-pickleball-courts.jpg",
    "/blog-images/archive/spring-festivals-events-in-the-villages-fl.jpg",
    "/blog-images/archive/villages-art-league-summer-art-festival-2023-at-lake-miona-recreation-center.jpg",
    "/blog-images/commons/12-holiday-yard-inflatables.jpg",
  ],
  "golf-cart-life": [
    "/blog-images/commons/59-golfcars-in-sunter-landings-the-villages-florida.jpg",
    "/reference-selected/golf-carts-the-villages-florida.jpg",
    "/reference-selected/golf-cart-ride-from-sumter-landing-to-brownwood-paddock-square-in-the-villages-florida.jpg",
    "/reference-selected/getting-golf-cart-gas-at-brownwood-paddock-square-in-the-villages-florida.jpg",
    "/reference-selected/the-villages-florida-2025-new-golf-carts-made-in-usa-f09f87baf09f87b8-honor-lsv.jpg",
    "/blog-images/commons/03-bridge-over-sr-44-at-brownwood.jpg",
    "/blog-images/commons/07-eb-fl-44-eastern-the-villages-footbridge-1.jpg",
    "/blog-images/commons/08-eb-fl-44-eastern-the-villages-footbridge-2.jpg",
    "/blog-images/commons/27-thevillagesgolf.jpg",
    "/blog-images/archive/the-villages-a-few-tips-for-first-time-golf-cart-buyers.jpg",
  ],
  "dining-and-nightlife": [
    "/reference-selected/our-top-5-bbq-restaurants-in-the-villages-florida-surrounding-area-amazing-bbq-in-the-villages.jpg",
    "/blog-images/archive/eating-at-billys-cafe-family-restaurant-pancake-house-in-the-villages-florida-large-breakf.jpg",
    "/blog-images/archive/eating-at-fenney-grill-in-the-villages-florida-the-villages-food-review.jpg",
    "/blog-images/archive/eating-at-thai-ruby-in-the-villages-fl-restaurants-in-the-villages-florida.jpg",
    "/blog-images/commons/15-oranges-for-sale-at-a-farmers-market-in-the-villages-florida.jpg",
    "/blog-images/commons/04-carrots-at-a-farmers-market-in-the-villages-florida.png",
    "/blog-images/commons/16-panera-bread-the-villages-florida.jpg",
    "/blog-images/commons/21-smoothie-booth-2020.jpg",
    "/blog-images/archive/the-villages-final-pizza-reviews-the-villages-florida.jpg",
    "/blog-images/archive/new-hooters-restaurant-opened-in-the-villages.jpg",
  ],
  "real-estate": [
    "/reference-selected/home-for-sale-in-the-villages-florida-near-lake-sumter-landing-paddock-square-golf-cart-option.jpg",
    "/blog-images/archive/new-listing-in-the-villages-fl-move-in-ready.jpg",
    "/blog-images/archive/two-move-in-ready-turnkey-homes-in-the-villages-fl-both-priced-under-300000.jpg",
    "/blog-images/archive/the-most-affordable-homes-in-the-villages-florida-patio-villas.jpg",
    "/blog-images/archive/new-homes-2026-the-villages-florida-edenfield-lagrange-eastport.jpg",
    "/blog-images/archive/looking-for-the-cheapest-place-to-live-in-the-villages-fl-look-no-further-robyn-cavallaro.jpg",
    "/blog-images/archive/yes-you-can-live-cheap-in-the-villages-florida-robyn-cavallaro.jpg",
    "/blog-images/archive/the-villages-construction-in-well-point-january-2025.jpg",
    "/blog-images/archive/my-new-home-in-the-villages-fl.jpg",
    "/blog-images/commons/24-the-villages-panorama-1374077049.jpg",
  ],
  "health-wellness": [
    "/blog-images/commons/61-couple-walking-in-nature-trail-the-villages-florida.jpg",
    "/blog-images/commons/48-aerial-pickleball-courts.jpg",
    "/blog-images/commons/20-salt-water-chlorinateded-pool-at-the-villages-florida.jpg",
    "/blog-images/commons/01-5k-run-in-the-villages-florida.jpg",
    "/blog-images/commons/53-feeney-recreational-center-2017.jpg",
    "/blog-images/commons/60-a-publix-pharmacy-in-the-villages-florida.jpg",
    "https://villagesocialite.com/wp-content/uploads/2026/04/thevillages-inflatablehottub.jpg",
    "/blog-images/archive/holistic-wellness-boutique-healthy-weigh-living-the-villages-florida.jpg",
    "/blog-images/archive/villages-art-league-summer-art-festival-2023-at-lake-miona-recreation-center.jpg",
    "/blog-images/commons/50-dz6-2425-sunlight-filters-through-palm-trees-onto-a-peaceful-green-park-at-golden-hour.jpg",
  ],
  "clubs-community": [
    "/blog-images/commons/42-town-square-event.jpg",
    "/blog-images/commons/19-prime-time-twirlers-2023.jpg",
    "/blog-images/commons/53-feeney-recreational-center-2017.jpg",
    "/blog-images/commons/61-couple-walking-in-nature-trail-the-villages-florida.jpg",
    "/blog-images/archive/villages-art-league-summer-art-festival-2023-at-lake-miona-recreation-center.jpg",
    "/blog-images/archive/the-villages-single-in-the-villages-sitv-disney-theme-party.jpg",
    "/blog-images/archive/spring-festivals-events-in-the-villages-fl.jpg",
    "/reference-selected/villages_header.jpg",
    "/blog-images/commons/18-polo-stadium-in-the-villages-florida.jpg",
    "/blog-images/commons/21-smoothie-booth-2020.jpg",
  ],
  "shopping-local-services": [
    "/blog-images/commons/60-a-publix-pharmacy-in-the-villages-florida.jpg",
    "/blog-images/commons/04-carrots-at-a-farmers-market-in-the-villages-florida.png",
    "/blog-images/commons/15-oranges-for-sale-at-a-farmers-market-in-the-villages-florida.jpg",
    "/blog-images/commons/16-panera-bread-the-villages-florida.jpg",
    "/blog-images/commons/05-citizens-first-bank.jpg",
    "/blog-images/commons/06-dietz-and-watson-brand-ambassador.jpg",
    "/blog-images/archive/holistic-wellness-boutique-healthy-weigh-living-the-villages-florida.jpg",
    "/blog-images/archive/getting-golf-cart-gas-at-brownwood-paddock-square-in-the-villages-florida.jpg",
    "/blog-images/archive/villagesocialitefacebook.jpg",
    "/blog-images/commons/21-smoothie-booth-2020.jpg",
  ],
  "dating-social-life": [
    "/blog-images/commons/61-couple-walking-in-nature-trail-the-villages-florida.jpg",
    "/reference-selected/single-in-the-villages-florida-55-retirement-community-singles-clubs-you-can-join.jpg",
    "/blog-images/archive/dating-in-the-villages-florida-some-girl-talk-with-tina-krista.jpg",
    "/blog-images/archive/dating-in-the-villages.jpg",
    "/blog-images/archive/the-villages-single-in-the-villages-sitv-disney-theme-party.jpg",
    "/blog-images/archive/preview-clip-of-dating-in-the-villages-florida-f09fa9b7.jpg",
    "/blog-images/archive/remarriage-get-a-prenuptial-agreement-ratio-of-married-to-single.jpg",
    "/blog-images/commons/42-town-square-event.jpg",
    "/blog-images/archive/swapping-partners.jpg",
    "/blog-images/commons/02-abendkulisse-in-spanish-springs-the-villages-florida.jpg",
  ],
  "visitor-guides": [
    "/reference-selected/the-villages-florida-what-are-the-town-squares-like.jpg",
    "/reference-selected/lake-sumter-landing-the-villages-florida.jpg",
    "/blog-images/commons/22-spanish-springs-entrance-arch-the-villages-florida.jpg",
    "/blog-images/commons/17-pier-in-sunter-landings-the-villages-florida.jpg",
    "/blog-images/commons/59-golfcars-in-sunter-landings-the-villages-florida.jpg",
    "/blog-images/commons/61-couple-walking-in-nature-trail-the-villages-florida.jpg",
    "/blog-images/commons/23-sumter-landing-the-villages-fl-panoramio.jpg",
    "/blog-images/commons/28-villages-banner.jpg",
    "/blog-images/commons/44-spanish-springs-the-villages-florida.jpg",
    "/blog-images/commons/36-villages-lsl-lake-sumter-pano01.jpg",
  ],
};

function imageForTopic(categorySlug: string, termIndex: number, fallback: string) {
  const pool = categoryImagePools[categorySlug];
  return pool?.[termIndex % pool.length] ?? seoBlogImages[termIndex]?.path ?? fallback;
}

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
  return `${starts[keyword.length % starts.length]} ${headlineKeyword(keyword)}`;
}

function headlineKeyword(keyword: string) {
  const smallWords = new Set(["a", "an", "and", "at", "for", "in", "near", "of", "or", "the", "to", "vs", "with"]);

  return keyword
    .split(" ")
    .map((word, index) => {
      if (/^(BBQ|FL|USA)$/i.test(word)) return word.toUpperCase();
      if (word === "The" || word === "Villages" || word === "Florida") return word;
      const lower = word.toLowerCase();
      if (index > 0 && smallWords.has(lower)) return lower;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(" ");
}

function sentenceKeyword(keyword: string) {
  return keyword.charAt(0).toUpperCase() + keyword.slice(1);
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
  const sentenceCaseKeyword = sentenceKeyword(keyword);
  const opens = [
    `${sentenceCaseKeyword} gets clearer when you look at how people actually live it in The Villages.`,
    `${sentenceCaseKeyword} can shape a whole day in The Villages, from the first plan to the ride home.`,
    `${sentenceCaseKeyword} is one of those local questions where the details matter more than the headline.`,
    `${sentenceCaseKeyword} deserves a Villages-specific read, because the community has its own rhythm.`,
  ];
  return `${opens[index % opens.length]} This guide looks at ${editorial.scene}. ${editorial.promise}`;
}

function hookFor(keyword: string, slug: string, index: number) {
  const editorial = editorialFor(slug);
  const sentenceCaseKeyword = sentenceKeyword(keyword);
  const hooks = [
    `${sentenceCaseKeyword} is tied to real choices around The Villages: where to go, who to meet, what to compare, and how to make the day feel easier.`,
    `The Villages has a way of turning ${keyword} into something practical, social, and surprisingly personal once you are here.`,
    `For residents, future residents, and visiting family, ${keyword} is not abstract. It affects the routes, rooms, tables, and moments that make the community work.`,
    `A good answer on ${keyword} should feel local. It should understand the golf carts, the squares, the clubs, the weather, and the social pace of The Villages.`,
  ];
  return `${hooks[index % hooks.length]} ${editorial.promise}`;
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
      image: imageForTopic(category.slug, termIndex, cluster.image),
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

const crossCategoryMap: Record<string, string[]> = {
  "moving-to-the-villages": ["real-estate", "visitor-guides", "clubs-community"],
  "things-to-do": ["dining-and-nightlife", "visitor-guides", "clubs-community"],
  "golf-cart-life": ["moving-to-the-villages", "shopping-local-services", "visitor-guides"],
  "dining-and-nightlife": ["things-to-do", "dating-social-life", "visitor-guides"],
  "real-estate": ["moving-to-the-villages", "golf-cart-life", "health-wellness"],
  "health-wellness": ["clubs-community", "moving-to-the-villages", "shopping-local-services"],
  "clubs-community": ["things-to-do", "dating-social-life", "health-wellness"],
  "shopping-local-services": ["golf-cart-life", "health-wellness", "dining-and-nightlife"],
  "dating-social-life": ["clubs-community", "dining-and-nightlife", "things-to-do"],
  "visitor-guides": ["things-to-do", "moving-to-the-villages", "dining-and-nightlife"],
};

function linkForPost(post: SeoBlogPost): SeoInternalLink {
  return {
    href: `/blog/${post.slug}`,
    label: post.keyword,
    description: post.description,
  };
}

export function getSeoInternalLinks(post: SeoBlogPost) {
  const categoryPosts = getSeoBlogPostsByCategory(post.categorySlug);
  const currentIndex = categoryPosts.findIndex((item) => item.slug === post.slug);
  const sameCategory = categoryPosts
    .filter((item) => item.slug !== post.slug)
    .sort((a, b) => {
      const distanceA = Math.abs(categoryPosts.indexOf(a) - currentIndex);
      const distanceB = Math.abs(categoryPosts.indexOf(b) - currentIndex);
      return distanceA - distanceB || a.id - b.id;
    })
    .slice(0, 4)
    .map(linkForPost);

  const crossCategory = (crossCategoryMap[post.categorySlug] ?? [])
    .map((categorySlug) => getSeoBlogPostsByCategory(categorySlug)[0])
    .filter((item): item is SeoBlogPost => Boolean(item))
    .slice(0, 3)
    .map(linkForPost);

  const category = getSeoBlogCategoryBySlug(post.categorySlug);
  const categoryHub: SeoInternalLink = {
    href: `/blog/category/${post.categorySlug}`,
    label: category?.name ?? post.category,
    description: category?.description ?? `More Village Socialite guides about ${post.category}.`,
  };

  const cornerstone: SeoInternalLink[] = [
    {
      href: "/blog",
      label: "The Villages Florida Blog",
      description: "The main hub for Village Socialite guides, local stories, offers, and resident-friendly research.",
    },
    {
      href: "/search",
      label: "Search Village Socialite",
      description: "Search guides, local stories, categories, offers, and helpful Village Socialite coverage.",
    },
  ];

  if (post.categorySlug === "golf-cart-life") {
    cornerstone.push({
      href: "/best-golf-carts-the-villages",
      label: "Best Golf Carts in The Villages",
      description: "A dedicated cornerstone page for cart reviews, buying guides, and cart-life coverage.",
    });
  }

  return {
    categoryHub,
    sameCategory,
    crossCategory,
    cornerstone,
  };
}

export function getRelatedSeoCategoryLinks(categorySlug: string) {
  return (crossCategoryMap[categorySlug] ?? [])
    .map((slug) => getSeoBlogCategoryBySlug(slug))
    .filter((category): category is SeoBlogCategory => Boolean(category))
    .map((category) => ({
      href: `/blog/category/${category.slug}`,
      label: category.name,
      description: category.description,
    }));
}

export function buildSeoArticleSections(post: SeoBlogPost) {
  const editorial = editorialFor(post.categorySlug);

  return [
    {
      title: `Why "${post.keyword}" matters in The Villages`,
      body: [
        `${post.keyword} usually starts with a real-life decision, not a random search. Someone may be comparing retirement communities, planning a lifestyle visit, looking for a better dinner spot, sorting out a golf cart route, or trying to understand whether daily life in The Villages matches the story they have heard from friends.`,
        `That is why this guide keeps the focus local. The Villages has its own pace, its own geography, and its own social habits. A useful answer needs to account for town squares, recreation centers, cart paths, seasonal crowds, weather, accessibility, and the way residents actually plan their week.`,
      ],
      takeaways: [
        `Use ${post.keyword} as a planning topic, not just a search phrase.`,
        "Compare convenience, social fit, timing, access, and repeat value.",
        "Think about how the answer changes for residents, visitors, and future residents.",
      ],
    },
    {
      title: "The local reality behind the topic",
      body: [
        `The Villages works differently from a typical Florida town because so much of daily life is connected. A restaurant choice can depend on golf cart access. A club may be easier to try if it meets near your neighborhood. A home search can change once you understand how often you want to be near Lake Sumter Landing, Brownwood, Spanish Springs, Sawgrass Grove, or a favorite recreation center.`,
        `For this topic, pay attention to ${editorial.scene}. Those details are usually what separate a nice idea from something you will actually use once the novelty wears off.`,
      ],
      takeaways: [
        "Location matters, but so does the rhythm of the day around that location.",
        "Seasonal traffic, parking, reservations, heat, and rain can change the experience.",
        "The best answer is the one that still works on an ordinary Tuesday.",
      ],
    },
    {
      title: `How to use this guide if you are researching ${post.category}`,
      body: [
        `Start with the kind of day you want to have. If you are moving here, think about errands, healthcare, social plans, club access, and how far you want to travel by cart or car. If you are visiting, give yourself enough time to see more than one square and at least one ordinary neighborhood route. If you already live here, use this topic as a nudge to refresh your routine.`,
        `${editorial.promise} That may mean saving a list, making a reservation, checking a schedule, mapping a route, or asking one more question before you commit.`,
      ],
      takeaways: [
        "Future residents should test the everyday routine, not only the brochure moments.",
        "Visitors should plan around one or two strong anchors instead of trying to see everything.",
        "Current residents can use the topic to discover a new club, route, service, or night out.",
      ],
    },
    {
      title: "What locals and future locals should compare",
      body: [
        `The strongest Villages decisions usually come from comparing the practical details. Cost matters, but so do crowd level, noise, parking, cart access, shade, seating, distance from home, beginner friendliness, and how comfortable the experience feels for different mobility levels.`,
        `For ${post.keyword}, the right comparison is ${editorial.decision}. A beautiful place can still be a poor fit if it is hard to reach, too crowded at the wrong hour, or not aligned with the social life you are trying to build.`,
      ],
      takeaways: [
        "Compare the experience at different times of day when timing affects comfort.",
        "Look for friction points before they become reasons not to go.",
        "Prioritize places and choices that make it easy to come back.",
      ],
    },
    {
      title: "A practical next step",
      body: [
        `The next move is simple: pick one action that gets you closer to a real answer. Visit the square you keep hearing about. Drive the cart route before you need it. Call the restaurant before a busy weekend night. Tour the neighborhood at the hour you would normally be out. Ask whether the club welcomes first-timers. Small checks like that make local research feel less abstract.`,
        `The Villages rewards people who test the lifestyle in motion. Whether you are studying ${post.keyword} for a move, a weekend visit, a better routine, or a business idea, the best information comes from seeing how the topic behaves in real Village conditions.`,
      ],
      takeaways: [
        "Choose one specific test instead of collecting endless general advice.",
        "Write down what felt easy, what felt awkward, and what you would repeat.",
        "Use that real-world feedback to make the next decision sharper.",
      ],
    },
  ];
}
