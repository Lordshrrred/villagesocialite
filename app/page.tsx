import Image from "next/image";
import Link from "next/link";
import { CategoryCard } from "@/components/category-card";
import { ImportedStoryCard } from "@/components/imported-story-card";
import { OfferCard } from "@/components/offer-card";
import { SpotlightForm } from "@/components/spotlight-form";
import { SectionHeading } from "@/components/section-heading";
import { stripHtml } from "@/lib/content-format";
import {
  getAllCategories,
  getFeaturedMigrationStories,
  getLatestPosts,
  getOfferPages,
} from "@/lib/wordpress";

const categoryEmojis: Record<string, string> = {
  "Events": "🎉",
  "Golfing": "⛳",
  "Dating": "💛",
  "Food & Dining": "🍽️",
  "Live Music": "🎸",
  "Lifestyle": "🌴",
  "Real Estate": "🏡",
  "Local Businesses & Services": "🛍️",
  "Pets & Animals": "🐾",
  "Golf Cart Life": "🛺",
  "Nightlife": "🍸",
  "Arts & Culture": "🎨",
  "Funny Moments": "😂",
  "Health & Wellness": "💪",
  "Moving to The Villages": "📦",
};

export default function Home() {
  const featuredStories = getFeaturedMigrationStories();
  const latestPosts = getLatestPosts(6);
  const offerPages = getOfferPages();
  const categories = getAllCategories()
    .sort((a, b) => b.count - a.count)
    .slice(0, 6)
    .map((category) => ({
      name: category.name,
      description: stripHtml(category.description) ||
        `Browse ${category.count} Village Socialite stories, videos, and local coverage of ${category.name.toLowerCase()}.`,
      href: `/category/${category.slug}`,
      countLabel: `${category.count} stories`,
      emoji: categoryEmojis[category.name] ?? "📍",
    }));

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-8 sm:px-8 sm:py-12">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[var(--color-ink)] px-6 py-10 text-white shadow-[0_30px_90px_rgba(9,18,24,0.28)] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(234,127,87,0.3),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(70,132,150,0.34),transparent_28%),linear-gradient(135deg,rgba(10,19,25,0.95),rgba(8,44,56,0.88),rgba(8,22,31,0.95))]" />
        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[var(--color-gold)]">
              The Villages, Florida — All-Access Pass
            </p>
            <div className="space-y-5">
              <h1 className="max-w-3xl font-[family:var(--font-cormorant)] text-5xl font-semibold leading-none sm:text-6xl lg:text-7xl">
                The insider&apos;s guide to life in The Villages, Florida.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/80">
                Videos, events, live music, dining, dating, real estate, golf carts, and the community moments that keep everyone talking.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/join-the-socialite"
                className="rounded-full bg-[var(--color-gold)] px-7 py-3.5 text-base font-bold text-[var(--color-ink)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(233,193,120,0.35)]"
              >
                Join The Socialite — Free
              </Link>
              <Link
                href="/categories"
                className="rounded-full border border-white/20 bg-white/8 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/14"
              >
                Browse Videos
              </Link>
            </div>
            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              {([
                ["20 Categories", "Events, golf, dining, dating, real estate, music, and more"],
                ["556+ Stories", "Real local coverage from inside The Villages"],
                ["Free to Join", "Weekly updates, local finds, and community highlights"],
              ] as [string, string][]).map(([value, label]) => (
                <div
                  key={value}
                  className="rounded-[1.4rem] border border-white/10 bg-white/6 p-4 backdrop-blur"
                >
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 -top-6 hidden h-28 w-28 rounded-full bg-[var(--color-coral)]/30 blur-3xl lg:block" />
            <div className="grid gap-4 sm:grid-cols-[1fr_0.82fr]">
              <div className="relative min-h-[420px] overflow-hidden rounded-[2rem]">
                <Image
                  src="/reference-selected/villages_header.jpg"
                  alt="Life in The Villages, Florida"
                  fill
                  sizes="(min-width: 1024px) 28vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
              </div>
              <div className="grid gap-4">
                <div className="relative min-h-[200px] overflow-hidden rounded-[1.7rem]">
                  <Image
                    src="/reference-selected/lake-sumter-landing-the-villages-florida.jpg"
                    alt="Lake Sumter Landing, The Villages"
                    fill
                    sizes="(min-width: 1024px) 18vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="rounded-[1.7rem] border border-white/10 bg-white/8 p-5 backdrop-blur">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-seafoam)]">
                    Why people love it here
                  </p>
                  <p className="mt-3 font-[family:var(--font-cormorant)] text-3xl font-semibold leading-tight">
                    Daily life worth watching, exploring, and sharing.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/74">
                    Golf carts, town squares, live music, local eats — The Villages has a pulse like nowhere else in Florida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Community quick-wins ───────────────────────────────────────── */}
      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2.2rem] border border-[var(--color-line)] bg-white px-8 py-10 shadow-[0_24px_60px_rgba(18,27,33,0.06)]">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[radial-gradient(circle,#fff7e6,#ffffff)] text-4xl shadow-[0_20px_35px_rgba(233,193,120,0.22)]">
            🎉
          </div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[var(--color-coral)]">
            Discover What&apos;s Happening
          </p>
          <h2 className="mt-4 font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)]">
            Never miss a moment in The Villages.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-[var(--color-ink-soft)]">
            <p>🎸 Live music at the town squares every week.</p>
            <p>🍽️ New restaurants, food reviews, and local dining guides.</p>
            <p>🎉 Events, festivals, and social gatherings worth showing up for.</p>
          </div>
          <Link
            href="/categories"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-5 py-3 text-sm font-bold text-[var(--color-ink)] transition hover:border-[var(--color-sea)] hover:text-[var(--color-sea)]"
          >
            Browse all categories <span aria-hidden="true">→</span>
          </Link>
        </article>
        <article className="rounded-[2.2rem] border border-[var(--color-line)] bg-white px-8 py-10 shadow-[0_24px_60px_rgba(18,27,33,0.06)]">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[radial-gradient(circle,#e8fff9,#ffffff)] text-4xl shadow-[0_20px_35px_rgba(111,230,214,0.28)]">
            🏡
          </div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[var(--color-coral)]">
            Moving to The Villages?
          </p>
          <h2 className="mt-4 font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)]">
            Get the real inside view before you move.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-[var(--color-ink-soft)]">
            <p>🛺 Golf cart life, real estate tips, and neighborhood guides.</p>
            <p>💛 Dating, social clubs, and singles life inside the community.</p>
            <p>📍 Real answers from people living it right now.</p>
          </div>
          <Link
            href="/join-the-socialite"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-5 py-3 text-sm font-bold text-[var(--color-ink)] transition hover:-translate-y-0.5"
          >
            Join The Socialite — Free <span aria-hidden="true">→</span>
          </Link>
        </article>
      </section>

      {/* ── Newsletter CTA ────────────────────────────────────────────── */}
      <SpotlightForm />

      {/* ── Featured stories ──────────────────────────────────────────── */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="What everybody&apos;s talking about"
          title="Stories from around the squares, golf carts, patios, and back gates."
          description="Big personalities, local scenes, real coverage, and the videos that make The Villages feel like the most interesting zip code in Florida."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredStories.map((story) => (
            <ImportedStoryCard key={story.id} item={story} />
          ))}
        </div>
      </section>

      {/* ── Categories ────────────────────────────────────────────────── */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Explore by category"
          title="Choose your lane and dive straight into the good stuff."
          description="Dining, events, golf, dating, lifestyle, music, real estate — all the corners that keep Village life interesting."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-7 py-3.5 text-sm font-bold text-[var(--color-ink)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--color-sea)] hover:text-[var(--color-sea)]"
          >
            See all 20 categories <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ── Offers / monetization ─────────────────────────────────────── */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Village Socialite partners & picks"
          title="Golf carts, merch, CBD, and the pages built around life in The Villages."
          description="Products, services, and opportunities curated for Village residents and newcomers."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {offerPages
            .sort((a, b) => {
              const order = ["best-golf-carts-the-villages", "merch", "join-the-socialite", "fat-pig-society-cbd"];
              return (order.indexOf(a.slug) === -1 ? 99 : order.indexOf(a.slug)) - (order.indexOf(b.slug) === -1 ? 99 : order.indexOf(b.slug));
            })
            .slice(0, 4)
            .map((page) => (
              <OfferCard key={page.id} item={page} />
            ))}
        </div>
      </section>

      {/* ── Latest stories ────────────────────────────────────────────── */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Latest from Village Socialite"
          title="Fresh stories, videos, and local coverage."
          description="Real Village life — restaurants, events, real estate, golf carts, community culture, and the moments worth sharing."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {latestPosts.map((story) => (
            <ImportedStoryCard key={story.id} item={story} />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-7 py-3.5 text-sm font-bold text-[var(--color-ink)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--color-sea)] hover:text-[var(--color-sea)]"
          >
            See all stories <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* ── Why Village Socialite ─────────────────────────────────────── */}
      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-7 shadow-[0_20px_60px_rgba(18,27,33,0.05)] sm:p-10">
          <SectionHeading
            eyebrow="Why Village Socialite"
            title="The most talked-about community in Florida deserves a home base."
            description="Village Socialite is where The Villages comes alive online — real stories, real people, real local life."
          />
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-sea)] transition hover:gap-3"
          >
            Learn more about us <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="grid gap-5">
          {[
            {
              title: "Real local coverage",
              description: "Stories, videos, and guides produced from inside The Villages — not scraped from somewhere else.",
            },
            {
              title: "Every part of Village life",
              description: "Golf carts to fine dining, live music to real estate — one destination covers it all.",
            },
            {
              title: "A community that keeps growing",
              description: "Join thousands of residents, newcomers, and curious observers following The Villages story.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[1.7rem] border border-[var(--color-line)] bg-[var(--color-paper)] p-6"
            >
              <h3 className="text-xl font-bold text-[var(--color-ink)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Golf cart culture banner ──────────────────────────────────── */}
      <section className="grid gap-8 overflow-hidden rounded-[2.5rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,#fff,#f5efe5)] p-6 sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative min-h-[320px] overflow-hidden rounded-[2rem]">
          <Image
            src="/reference-selected/golf-cart-ride-from-sumter-landing-to-brownwood-paddock-square-in-the-villages-florida.jpg"
            alt="Golf cart life in The Villages, Florida"
            fill
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="space-y-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-coral)]">
            Golf Cart Life
          </p>
          <h2 className="font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
            The only place in Florida where golf carts are a lifestyle.
          </h2>
          <div className="space-y-3">
            {[
              "Hundreds of miles of cart paths connecting every corner of The Villages.",
              "Our Best Golf Carts guide helps you find the perfect ride for Village life.",
              "Reviews, trails, tips, and the most talked-about custom carts in the community.",
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
            href="/best-golf-carts-the-villages"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[var(--color-sea)]"
          >
            Best Golf Carts Guide <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
