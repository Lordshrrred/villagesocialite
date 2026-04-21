import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { decodeHtmlEntities } from "@/lib/content-format";
import { getItemBySlug, getPrimaryImage, getItemsForCategory, getCategoryBySlug } from "@/lib/wordpress";
import { ImportedStoryCard } from "@/components/imported-story-card";
import { LegacyContent } from "@/components/legacy-content";

const slug = "best-golf-carts-the-villages";

export function generateMetadata(): Metadata {
  const item = getItemBySlug(slug);

  return {
    title: item ? decodeHtmlEntities(item.title) : "Best Golf Carts in The Villages | Vote & Enter",
    description: item
      ? decodeHtmlEntities(item.description)
      : "Discover the best golf carts in The Villages, Florida. Browse top picks, cart reviews, buying guides, and community favorites.",
    alternates: { canonical: `/${slug}` },
  };
}

export default function BestGolfCartsPage() {
  const item = getItemBySlug(slug);
  const golfCartCategory = getCategoryBySlug("golf-cart-life-the-villages");
  const golfCartPosts = golfCartCategory
    ? getItemsForCategory(golfCartCategory.id).slice(0, 6)
    : [];

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-5 py-10 sm:px-8 sm:py-14">

      {/* Hero */}
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[var(--color-ink)] text-white shadow-[0_30px_90px_rgba(9,18,24,0.28)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(70,132,150,0.4),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(234,127,87,0.25),transparent_28%),linear-gradient(135deg,rgba(10,19,25,0.95),rgba(8,44,56,0.88))]" />
        <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[var(--color-gold)]">
              Golf Cart Life — The Villages, Florida
            </p>
            <h1 className="font-[family:var(--font-cormorant)] text-5xl font-semibold leading-none sm:text-6xl lg:text-7xl">
              Best Golf Carts in The Villages
            </h1>
            <p className="max-w-xl text-lg leading-9 text-white/82">
              Your guide to golf cart life in The Villages, Florida. Browse the community&apos;s favorite carts, read buying guides, discover the best trails, and find out what&apos;s worth the investment.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#golf-cart-stories"
                className="rounded-full bg-[var(--color-gold)] px-7 py-3.5 text-base font-bold text-[var(--color-ink)] transition hover:-translate-y-0.5"
              >
                Browse Golf Cart Stories
              </Link>
              <Link
                href="/join-the-socialite"
                className="rounded-full border border-white/20 bg-white/8 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/14"
              >
                Join The Socialite
              </Link>
            </div>
          </div>
          <div className="relative min-h-[380px] overflow-hidden rounded-[2rem]">
            <Image
              src="/reference-selected/golf-carts-the-villages-florida.jpg"
              alt="Golf carts in The Villages, Florida"
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="grid gap-5 sm:grid-cols-3">
        {[
          {
            stat: "750+ Miles",
            label: "of multi-modal golf cart paths across The Villages",
            emoji: "🛺",
          },
          {
            stat: "100,000+",
            label: "golf carts registered in The Villages community",
            emoji: "📍",
          },
          {
            stat: "24 Stories",
            label: "of golf cart coverage in the Village Socialite archive",
            emoji: "📝",
          },
        ].map((item) => (
          <div
            key={item.stat}
            className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6 shadow-[0_20px_50px_rgba(18,27,33,0.05)]"
          >
            <div className="mb-3 text-4xl">{item.emoji}</div>
            <p className="text-2xl font-bold text-[var(--color-ink)]">{item.stat}</p>
            <p className="mt-2 text-sm leading-6 text-[var(--color-ink-soft)]">{item.label}</p>
          </div>
        ))}
      </section>

      {/* Original page content if it exists */}
      {item && (
        <section className="rounded-[2rem] border border-[var(--color-line)] bg-white p-6 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-10">
          <div className="mb-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-coral)]">
              From Village Socialite
            </p>
            <h2 className="mt-3 font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)]">
              {decodeHtmlEntities(item.title)}
            </h2>
          </div>
          <div className="relative mb-8 aspect-[16/7] overflow-hidden rounded-[1.5rem]">
            <Image
              src={getPrimaryImage(item)}
              alt={decodeHtmlEntities(item.title)}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 80vw, 100vw"
            />
          </div>
          <LegacyContent html={item.content} />
        </section>
      )}

      {/* Golf cart category stories */}
      {golfCartPosts.length > 0 && (
        <section id="golf-cart-stories" className="space-y-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-coral)]">
              Golf cart life
            </p>
            <h2 className="mt-3 font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)]">
              Golf cart stories from inside The Villages.
            </h2>
            <p className="mt-3 text-base leading-8 text-[var(--color-ink-soft)]">
              Real coverage of Village golf cart culture — buying guides, trail rides, cart reviews, and community favorites.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {golfCartPosts.map((post) => (
              <ImportedStoryCard key={post.id} item={post} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/category/golf-cart-life-the-villages"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-7 py-3.5 text-sm font-bold text-[var(--color-ink)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--color-sea)] hover:text-[var(--color-sea)]"
            >
              See all golf cart stories <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      )}

      {/* Affiliate / partner CTA */}
      <section className="grid gap-8 overflow-hidden rounded-[2.5rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,#fff,#f5efe5)] p-8 sm:p-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative min-h-[300px] overflow-hidden rounded-[2rem]">
          <Image
            src="/reference-selected/getting-golf-cart-gas-at-brownwood-paddock-square-in-the-villages-florida.jpg"
            alt="Golf cart at Brownwood Paddock Square, The Villages"
            fill
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="space-y-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-coral)]">
            Ready to find your cart?
          </p>
          <h2 className="font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
            Get the best golf cart for your Village life.
          </h2>
          <div className="space-y-3">
            {[
              "Browse the top-rated golf carts popular among Village residents.",
              "From street-legal LSVs to custom cruisers — find the right cart for your lifestyle.",
              "Village Socialite readers share their cart picks, reviews, and tips in our content archive.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/80 px-5 py-4 text-sm leading-7 text-[var(--color-ink-soft)]"
              >
                {item}
              </div>
            ))}
          </div>
          <Link
            href="/join-the-socialite"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-7 py-3.5 text-base font-bold text-[var(--color-ink)] transition hover:-translate-y-0.5"
          >
            Join for updates & picks <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
