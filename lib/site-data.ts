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
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/featured", label: "Featured" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const featuredStories: Story[] = [
  {
    title: "Where the town squares still shape the rhythm of the week",
    description:
      "An editorial-style look at the plazas, patios, and social rituals that make The Villages feel bigger than a retirement zip code.",
    href: "/featured",
    category: "Culture Guide",
    image:
      "/reference-selected/the-villages-florida-what-are-the-town-squares-like.jpg",
    eyebrow: "Community pulse",
  },
  {
    title: "The food scene worth bookmarking before your next golf cart ride",
    description:
      "Top restaurant roundups, quick-hit local recommendations, and the spots people actually talk about after dinner.",
    href: "/featured",
    category: "Food & Dining",
    image:
      "/reference-selected/our-top-5-bbq-restaurants-in-the-villages-florida-surrounding-area-amazing-bbq-in-the-villages.jpg",
    eyebrow: "Curated picks",
  },
  {
    title: "A clearer lens on singles clubs, social circles, and belonging",
    description:
      "Connection stories, social life, and community culture deserve better framing than rumor and clickbait.",
    href: "/featured",
    category: "People & Community",
    image:
      "/reference-selected/single-in-the-villages-florida-55-retirement-community-singles-clubs-you-can-join.jpg",
    eyebrow: "Modern editorial",
  },
  {
    title: "Golf cart life, without the cluttered grid treatment",
    description:
      "From practical trail tips to standout rides and local utility, one of the brand's strongest themes becomes a premium content lane.",
    href: "/featured",
    category: "Golf Cart Life",
    image: "/reference-selected/golf-carts-the-villages-florida.jpg",
    eyebrow: "Signature vertical",
  },
];

export const categories: Category[] = [
  {
    name: "Food & Dining",
    description: "Restaurant finds, local favorites, quick takes, and destination-worthy nights out.",
    href: "/explore#food-dining",
    countLabel: "40 archived stories",
  },
  {
    name: "Events & Nightlife",
    description: "Town square energy, live music, gatherings, and the calendar worth planning around.",
    href: "/explore#events-nightlife",
    countLabel: "68 combined stories",
  },
  {
    name: "Homes & Moving",
    description: "Guides, market perspective, neighborhood feel, and the real-life transition into The Villages.",
    href: "/explore#homes-moving",
    countLabel: "48 combined stories",
  },
  {
    name: "Golf Cart Life",
    description: "Trails, carts, local transport culture, and the signature mobility layer of the community.",
    href: "/explore#golf-cart-life",
    countLabel: "24 archived stories",
  },
  {
    name: "Health & Wellness",
    description: "Care access, wellbeing, active living, and practical quality-of-life coverage.",
    href: "/explore#health-wellness",
    countLabel: "37 combined stories",
  },
  {
    name: "People & Community",
    description: "Social life, local personalities, clubs, neighbors, and the stories that create belonging.",
    href: "/explore#people-community",
    countLabel: "57 combined stories",
  },
];

export const whyVillageSocialite = [
  {
    title: "Curated, not chaotic",
    description:
      "A clear editorial layer helps visitors know where to start, what matters, and what to explore next.",
  },
  {
    title: "Broad enough to be useful",
    description:
      "Dining, culture, moving, health, events, shopping, and community now live inside one clear system instead of scattered silos.",
  },
  {
    title: "Built like a real platform",
    description:
      "The brand now has room for guides, features, business spotlights, newsletters, and signature series without losing focus.",
  },
];

export const communityHighlights = [
  "A more credible front door for residents, newcomers, businesses, and local storytellers.",
  "A homepage that can spotlight what is hot right now while still supporting deeper exploration.",
  "Room for guides, featured videos, local partnerships, and newsletter growth without becoming a random content dump.",
];

export const featuredCollections = [
  {
    title: "The Local Guidebook",
    text: "Practical coverage for moving, settling in, finding services, and understanding how the community actually functions.",
  },
  {
    title: "What People Are Watching",
    text: "A sharper home for standout videos, social cuts, and stories with high entertainment or conversation value.",
  },
  {
    title: "Business Spotlights",
    text: "A more trustworthy way to feature local brands and service providers without letting promotional content overwhelm the experience.",
  },
];

export const aboutPoints = [
  "Village Socialite is growing into a polished local lifestyle platform with a stronger editorial voice.",
  "The brand now reads as a central digital hub for discovery, community, and credible local storytelling.",
  "The next phase can support editorial publishing, newsletter growth, partnerships, and richer local guide content.",
];

export const contactChannels = [
  {
    title: "Editorial tips",
    detail: "Story leads, openings, events, people to know, and community submissions.",
  },
  {
    title: "Partnerships",
    detail: "Local brands, sponsored features, featured business packages, and launch collaborations.",
  },
  {
    title: "Brand inquiries",
    detail: "Partnership conversations, featured opportunities, and larger brand collaborations.",
  },
];
