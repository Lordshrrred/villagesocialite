import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CategoryCard } from "@/components/category-card";
import { decodeHtmlEntities, stripHtml } from "@/lib/content-format";
import { getAllCategories, getCategoryBySlug, getItemsForCategory, getPrimaryImage } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Video Categories | Village Socialite",
  description:
    "Browse the Village Socialite story lanes, from events and dining to dating, golf, lifestyle, and local culture.",
};

const categoryImages: Record<string, string> = {
  "events-the-villages": "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/01/a-fun-night-out-in-sumter-square-the-villages-fl-nightlife.jpg?fit=480%2C360&ssl=1",
  "live-music-the-villages": "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2025/01/lake-sumter-landing-the-villages-florida.jpg?fit=480%2C360&ssl=1",
  "food-dining-the-villages": "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/03/our-top-5-restaurants-at-the-villages-florida-amazing-food-at-the-villages-fl.jpg?fit=480%2C360&ssl=1",
  "dating-the-villages": "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/01/curious-about-living-single-in-thevillages-robyncavallaro.jpg?fit=480%2C360&ssl=1",
  "golf-cart-life-the-villages": "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/03/what-i-learned-about-golf-cars-and-golf-cart-trails-in-the-villages-florida.jpg?fit=480%2C360&ssl=1",
  "real-estate-the-villages": "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/01/new-homes-2026-the-villages-florida-edenfield-lagrange-eastport.jpg?fit=480%2C360&ssl=1",
  "nightlife-the-villages": "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/03/f09f8c99-after-hours-in-the-villages-florida-thevillages-afterhours-nightlife-2025.jpg?fit=480%2C360&ssl=1",
  "golfing-the-villages": "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/01/championship-golf-in-the-villages.jpg?fit=480%2C360&ssl=1",
  "arts-culture-the-villages": "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/03/the-villages-photography-club-annual-showcase-for-photographers-2024-things-to-do-in-the-villages.jpg?fit=480%2C360&ssl=1",
  "pets-animals-the-villages": "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/03/best-dog-parks-in-the-villages-fl-a-pawsome-tour.jpg?fit=480%2C360&ssl=1",
  "health-wellness-the-villages": "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/03/genesis-health-club-coming-to-middleton.jpg?fit=480%2C360&ssl=1",
  "lifestyle-the-villages": "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2025/01/the-villages-lifestyle-news-for-2025.jpg?fit=480%2C360&ssl=1",
  "funny-moments-the-villages": "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2025/01/the-villages-newcomers-tell-all.jpg?fit=480%2C360&ssl=1",
  "local-businesses-services": "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/03/peachwave-in-the-villages-florida.jpg?fit=480%2C360&ssl=1",
  "moving-to-the-villages": "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/03/why-people-are-leaving-the-villages-fl-whats-really-happening-in-the-community.jpg?fit=480%2C360&ssl=1",
  "people-community-the-villages": "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/03/swimming-in-the-villages.jpg?fit=480%2C360&ssl=1",
  "shopping-the-villages": "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/03/the-market-at-sawgrass-grove-in-the-villages-fl.jpg?fit=480%2C360&ssl=1",
  "learning-hobbies-the-villages": "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/03/recreation-in-the-villages-offers-so-many-things-to-do.jpg?fit=480%2C360&ssl=1",
  "money-retirement-the-villages": "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/03/whats-the-bond-in-the-villages-fl-and-do-you-have-to-pay-it-f09f92b0.jpg?fit=480%2C360&ssl=1",
  "healthcare-the-villages-florida": "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/03/are-there-enough-healthcare-providers-in-the-villages-florida.jpg?fit=480%2C360&ssl=1",
};

export default function CategoriesPage() {
  const categories = getAllCategories()
    .sort((a, b) => b.count - a.count)
    .map((category) => {
      const name = decodeHtmlEntities(category.name);
      return {
        name,
        description:
          stripHtml(category.description) ||
          `Browse ${category.count} archived Village Socialite stories in ${name}.`,
        href: `/category/${category.slug}`,
        countLabel: `${category.count} stories`,
        image: categoryImages[category.slug] ?? undefined,
      };
    });

  // Spotlight categories for the bottom panel
  const petsCategory = getCategoryBySlug("pets-animals-the-villages");
  const nightlifeCategory = getCategoryBySlug("nightlife-the-villages");
  const petsPosts = petsCategory ? getItemsForCategory(petsCategory.id).slice(0, 4) : [];
  const nightlifePosts = nightlifeCategory ? getItemsForCategory(nightlifeCategory.id).slice(0, 4) : [];

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">

      {/* Header */}
      <section className="rounded-[2.3rem] border-2 border-[var(--color-line)] bg-white p-8 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-12">
        <div className="max-w-3xl space-y-4">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[var(--color-teal)]">
            Video Categories
          </p>
          <h1 className="font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
            Every lane of Village life,<br />in one place.
          </h1>
          <p className="text-base leading-8 text-[var(--color-ink-soft)] sm:text-lg">
            Dining, events, golf carts, dating, live music, real estate, nightlife, wellness, pets, arts, and more — find your corner of The Villages.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </section>

      {/* Bottom spotlight: category panels + Facebook CTA */}
      <section className="grid gap-6 lg:grid-cols-[1fr_auto_1fr]">

        {/* Left: Pets & Animals */}
        <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-6 shadow-[0_8px_32px_rgba(18,27,33,0.06)]">
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-full bg-[var(--color-teal)] px-4 py-1.5 text-sm font-extrabold text-white shadow-[0_4px_14px_rgba(0,175,197,0.4)]">
              {petsCategory ? decodeHtmlEntities(petsCategory.name) : "Pets & Animals"}
            </span>
            {petsCategory && (
              <Link
                href={`/category/${petsCategory.slug}`}
                className="text-sm font-semibold text-[var(--color-teal)] hover:underline"
              >
                + More videos
              </Link>
            )}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {petsPosts.map((post) => (
              <Link key={post.id} href={`/${post.slug}`} className="group block">
                <div className="relative aspect-video overflow-hidden rounded-xl bg-[var(--color-paper)]">
                  <Image
                    src={getPrimaryImage(post)}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="120px"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />
                </div>
                <p className="mt-1.5 line-clamp-2 text-xs font-medium leading-snug text-[var(--color-ink)]">
                  {decodeHtmlEntities(post.title)}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Center: Follow us on Facebook */}
        <div className="flex items-stretch justify-center">
          <a
            href="https://www.facebook.com/profile.php?id=61586012620132"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-full overflow-hidden rounded-[2rem] shadow-[0_8px_40px_rgba(18,27,33,0.18)] lg:w-[240px]"
          >
            <Image
              src="https://villagesocialite.com/wp-content/uploads/2026/03/followvillagesocialiteonfacebook.jpg"
              alt="Follow Village Socialite on Facebook"
              width={480}
              height={640}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-0 right-0 flex justify-center">
              <span className="rounded-full bg-[#1877F2] px-5 py-2 text-sm font-extrabold text-white shadow-lg transition group-hover:bg-[#145dbf]">
                Follow Us
              </span>
            </div>
          </a>
        </div>

        {/* Right: Nightlife */}
        <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-6 shadow-[0_8px_32px_rgba(18,27,33,0.06)]">
          <div className="mb-4 flex items-center justify-between">
            <span className="rounded-full bg-[var(--color-teal)] px-4 py-1.5 text-sm font-extrabold text-white shadow-[0_4px_14px_rgba(0,175,197,0.4)]">
              {nightlifeCategory ? decodeHtmlEntities(nightlifeCategory.name) : "Nightlife"}
            </span>
            {nightlifeCategory && (
              <Link
                href={`/category/${nightlifeCategory.slug}`}
                className="text-sm font-semibold text-[var(--color-teal)] hover:underline"
              >
                + More videos
              </Link>
            )}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {nightlifePosts.map((post) => (
              <Link key={post.id} href={`/${post.slug}`} className="group block">
                <div className="relative aspect-video overflow-hidden rounded-xl bg-[var(--color-paper)]">
                  <Image
                    src={getPrimaryImage(post)}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="120px"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition" />
                </div>
                <p className="mt-1.5 line-clamp-2 text-xs font-medium leading-snug text-[var(--color-ink)]">
                  {decodeHtmlEntities(post.title)}
                </p>
              </Link>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}
