export type Story = {
  title: string;
  description: string;
  href: string;
  category: string;
  image: string;
  eyebrow: string;
};

export type Category = {
  name: string;
  description: string;
  href: string;
  countLabel: string;
  emoji?: string;
  image?: string;
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Video Categories" },
  { href: "/best-golf-carts-the-villages", label: "Best Golf Carts" },
  { href: "/join-the-socialite", label: "Join The Socialite" },
  { href: "/merch", label: "Merch" },
  { href: "/fat-pig-society-cbd", label: "Organic CBD" },
  { href: "/explore", label: "Explore" },
  { href: "/tags", label: "Tags" },
  { href: "/contact-village-socialite", label: "Contact Us" },
];

export const featuredStories: Story[] = [
  {
    title: "Where the town squares still shape the rhythm of the week",
    description:
      "An inside look at the plazas, patios, and social rituals that make The Villages feel bigger than a retirement zip code.",
    href: "/the-villages-florida-what-are-the-town-squares-like",
    category: "Community Culture",
    image:
      "/reference-selected/the-villages-florida-what-are-the-town-squares-like.jpg",
    eyebrow: "Community pulse",
  },
  {
    title: "The food scene worth bookmarking before your next golf cart ride",
    description:
      "Top restaurant roundups, quick-hit recommendations, and the spots people actually talk about after dinner.",
    href: "/our-top-5-bbq-restaurants-in-the-villages-florida-surrounding-area-amazing-bbq-in-the-villages",
    category: "Food & Dining",
    image:
      "/reference-selected/our-top-5-bbq-restaurants-in-the-villages-florida-surrounding-area-amazing-bbq-in-the-villages.jpg",
    eyebrow: "Curated picks",
  },
  {
    title: "Singles clubs, social circles, and what belonging really looks like",
    description:
      "Honest, warm coverage of connection, social life, and community culture in The Villages.",
    href: "/single-in-the-villages-florida-55-retirement-community-singles-clubs-you-can-join",
    category: "Dating & Social Life",
    image:
      "/reference-selected/single-in-the-villages-florida-55-retirement-community-singles-clubs-you-can-join.jpg",
    eyebrow: "Social life",
  },
  {
    title: "Golf cart life: the real guide to getting around The Villages",
    description:
      "From trail tips to standout rides — one of the community's defining features gets the coverage it deserves.",
    href: "/best-golf-carts-the-villages",
    category: "Golf Cart Life",
    image: "/reference-selected/golf-carts-the-villages-florida.jpg",
    eyebrow: "Community staple",
  },
];

export const categories: Category[] = [
  {
    name: "Food & Dining",
    description: "Restaurant finds, local favorites, honest reviews, and destination-worthy nights out across The Villages.",
    href: "/category/food-dining-the-villages",
    countLabel: "40 stories",
    emoji: "🍽️",
  },
  {
    name: "Events & Nightlife",
    description: "Town square energy, live music, community gatherings, and the calendar worth planning your week around.",
    href: "/category/events-the-villages",
    countLabel: "68+ stories",
    emoji: "🎉",
  },
  {
    name: "Real Estate",
    description: "Market updates, neighborhood guides, new listings, and real talk about buying or selling in The Villages.",
    href: "/category/real-estate-the-villages",
    countLabel: "37 stories",
    emoji: "🏡",
  },
  {
    name: "Golf Cart Life",
    description: "Trails, carts, local transport culture, and the signature mobility layer of Village community life.",
    href: "/category/golf-cart-life-the-villages",
    countLabel: "24 stories",
    emoji: "🛺",
  },
  {
    name: "Dating & Social Life",
    description: "Singles clubs, social circles, dating stories, and honest community culture coverage.",
    href: "/category/dating-the-villages",
    countLabel: "43 stories",
    emoji: "💛",
  },
  {
    name: "Live Music",
    description: "Bands, performers, town square shows, and the vibrant music scene that keeps The Villages alive every night.",
    href: "/category/live-music-the-villages",
    countLabel: "40 stories",
    emoji: "🎸",
  },
];

export const whyVillageSocialite = [
  {
    title: "Real local coverage",
    description:
      "Stories, videos, and guides produced from inside The Villages — not scraped from somewhere else or padded with filler.",
  },
  {
    title: "Every corner of Village life",
    description:
      "Golf carts to gourmet dining, live music to luxury real estate — one destination for everything worth knowing.",
  },
  {
    title: "Built for the community",
    description:
      "Whether you live here, you're moving here, or you just love following the story — Village Socialite is your home base.",
  },
];

export const communityHighlights = [
  "The Villages is home to 130,000+ residents and the most active social scene of any retirement community in America.",
  "Golf carts outnumber cars on many streets — there are over 750 miles of multi-modal paths connecting the community.",
  "Town squares at Lake Sumter Landing, Brownwood, and Spanish Springs host free live music every single night of the year.",
];

export const featuredCollections = [
  {
    title: "The Local Guidebook",
    text: "Practical coverage for moving to The Villages, settling in, finding services, and understanding how the community actually works.",
  },
  {
    title: "What People Are Watching",
    text: "The standout videos, viral social moments, and stories with high entertainment or conversation value across the community.",
  },
  {
    title: "Business Spotlights",
    text: "Local brands, services, and partner businesses featured as part of the real Village ecosystem — not buried in generic ads.",
  },
];

export const aboutPoints = [
  "Village Socialite is The Villages' most active local media and lifestyle platform — covering the stories, events, and community culture that matter most.",
  "From live music at the town squares to real estate market updates and golf cart reviews, we cover the full spectrum of life in The Villages.",
  "Join thousands of residents, newcomers, and fans who follow Village Socialite for the inside view on the most talked-about retirement community in America.",
];

export const contactChannels = [
  {
    title: "Story tips & local news",
    detail: "Story leads, event news, business openings, community submissions, and notable Village moments.",
  },
  {
    title: "Business partnerships",
    detail: "Local brands, sponsored features, featured business packages, and launch collaborations.",
  },
  {
    title: "Advertising & promotions",
    detail: "Reach an engaged local audience with targeted Village Socialite placements and partnership opportunities.",
  },
];
