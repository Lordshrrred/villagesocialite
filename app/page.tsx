import Image from "next/image";
import Link from "next/link";
import { ImportedStoryCard } from "@/components/imported-story-card";
import { SpotlightForm } from "@/components/spotlight-form";
import {
  getLatestPosts,
  getCategoryBySlug,
  getItemsForCategory,
  getPrimaryImage,
  getFeaturedMigrationStories,
} from "@/lib/wordpress";
import { decodeHtmlEntities } from "@/lib/content-format";
import type { WordpressItem } from "@/lib/wordpress";

const featuredCategories = [
  { slug: "events-the-villages",        label: "Events",        icon: "🎉" },
  { slug: "live-music-the-villages",    label: "Live Music",    icon: "🎸" },
  { slug: "food-dining-the-villages",   label: "Food & Dining", icon: "🍽️" },
  { slug: "dating-the-villages",        label: "Dating",        icon: "💛" },
  { slug: "golf-cart-life-the-villages",label: "Golf Carts",   icon: "🛺" },
  { slug: "real-estate-the-villages",   label: "Real Estate",   icon: "🏡" },
  { slug: "nightlife-the-villages",     label: "Nightlife",     icon: "🍸" },
  { slug: "golfing-the-villages",       label: "Golfing",       icon: "⛳" },
];

function VideoSection({
  badge,
  badgeColor,
  title,
  tagline,
  href,
  posts,
}: {
  badge: string;
  badgeColor: string;
  title: string;
  tagline: string;
  href: string;
  posts: WordpressItem[];
}) {
  const [hero, ...rest] = posts.slice(0, 5);
  if (!hero) return null;
  return (
    <section className="space-y-5">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.28em] text-white"
            style={{ background: badgeColor }}
          >
            {badge}
          </span>
          <h2 className="font-[family:var(--font-cormorant)] text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl">
            {title}
          </h2>
          <p className="text-sm leading-6 text-[var(--color-ink-soft)]">{tagline}</p>
        </div>
        <Link
          href={href}
          className="shrink-0 self-start rounded-full border-2 border-[var(--color-line)] bg-white px-5 py-2.5 text-sm font-bold text-[var(--color-sea)] shadow-sm transition hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] sm:self-auto"
        >
          See all videos →
        </Link>
      </div>

      {/* Grid: 1 hero + up to 4 supporting */}
      <div className="grid gap-4 md:grid-cols-[1.55fr_1fr_1fr] md:grid-rows-2">
        {/* Hero — spans 2 rows */}
        <Link href={`/${hero.slug}`} className="group md:row-span-2">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[var(--color-paper)] md:aspect-auto md:h-full md:min-h-[260px]">
            <Image
              src={getPrimaryImage(hero)}
              alt={decodeHtmlEntities(hero.title)}
              fill
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
              sizes="(min-width: 768px) 45vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-[0_8px_24px_rgba(0,0,0,0.3)]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 3l14 9-14 9V3z" fill="#003546" />
                </svg>
              </div>
            </div>
            <p className="absolute bottom-4 left-4 right-4 font-[family:var(--font-cormorant)] text-xl font-semibold leading-tight text-white">
              {decodeHtmlEntities(hero.title)}
            </p>
          </div>
        </Link>

        {/* Supporting videos */}
        {rest.map((post) => (
          <Link key={post.id} href={`/${post.slug}`} className="group">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-[var(--color-paper)]">
              <Image
                src={getPrimaryImage(post)}
                alt={decodeHtmlEntities(post.title)}
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.04]"
                sizes="(min-width: 768px) 22vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-200 group-hover:opacity-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/85">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 3l14 9-14 9V3z" fill="#003546" />
                  </svg>
                </div>
              </div>
              <p className="absolute bottom-3 left-3 right-3 text-xs font-semibold leading-snug text-white line-clamp-2">
                {decodeHtmlEntities(post.title)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const trendingPosts = getLatestPosts(5);
  const featuredStories = getFeaturedMigrationStories().slice(0, 4);

  const diningCat    = getCategoryBySlug("food-dining-the-villages");
  const golfCartCat  = getCategoryBySlug("golf-cart-life-the-villages");
  const realEstateCat= getCategoryBySlug("real-estate-the-villages");
  const lifestyleCat = getCategoryBySlug("lifestyle-the-villages");
  const eventsCat    = getCategoryBySlug("events-the-villages");
  const petsCat      = getCategoryBySlug("pets-animals-the-villages");
  const nightlifeCat = getCategoryBySlug("nightlife-the-villages");

  const diningPosts     = diningCat     ? getItemsForCategory(diningCat.id).slice(0, 5)     : [];
  const golfCartPosts   = golfCartCat   ? getItemsForCategory(golfCartCat.id).slice(0, 5)   : [];
  const realEstatePosts = realEstateCat ? getItemsForCategory(realEstateCat.id).slice(0, 5) : [];
  const lifestylePosts  = lifestyleCat  ? getItemsForCategory(lifestyleCat.id).slice(0, 5)  : [];
  const eventsPosts     = eventsCat     ? getItemsForCategory(eventsCat.id).slice(0, 5)     : [];
  const petsPosts       = petsCat       ? getItemsForCategory(petsCat.id).slice(0, 4)       : [];
  const nightlifePosts  = nightlifeCat  ? getItemsForCategory(nightlifeCat.id).slice(0, 4)  : [];

  return (
    <div className="flex flex-col">

      {/* ── Cinematic hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "clamp(520px, 72vh, 800px)" }}>
        <div className="absolute inset-0">
          <Image src="/reference-selected/villages_header.jpg" alt="Life in The Villages, Florida" fill sizes="100vw" className="object-cover hero-pan" priority />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(5,20,25,0.85)_0%,rgba(5,20,25,0.62)_38%,rgba(5,20,25,0.22)_65%,rgba(5,20,25,0.04)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[rgba(5,20,25,0.55)] to-transparent" />

        {/* MOBILE */}
        <div className="relative flex h-full flex-col justify-center px-6 pb-12 pt-20 lg:hidden">
          <div className="max-w-lg space-y-6 text-white">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.38em] leading-6 text-[var(--color-cyan)]">The Villages, Florida<br />All-Access Pass</p>
            <h1 className="font-[family:var(--font-cormorant)] font-semibold text-white" style={{ fontSize: "clamp(2.6rem, 10vw, 3.4rem)", lineHeight: 1.08 }}>
              Watch The Villages<br />Come To Life.
            </h1>
            <p className="text-base leading-8 text-white/85">Nightlife, golf, live music, dining, real estate, and the moments that make The Villages unlike anywhere else.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/categories" className="rounded-full bg-[var(--color-teal)] px-7 py-3.5 text-base font-extrabold text-white shadow-[0_6px_24px_rgba(0,175,197,0.5)] transition active:scale-95">Browse Categories</Link>
              <Link href="/join-the-socialite" className="rounded-full border-2 border-white/35 bg-white/12 px-7 py-3.5 text-base font-bold text-white backdrop-blur-sm transition active:scale-95">Join The Socialite</Link>
            </div>
            <div className="flex flex-wrap gap-5 border-t border-white/15 pt-4">
              {[{ href: "/categories", label: "▶ Start Watching" }, { href: "/best-golf-carts-the-villages", label: "🛺 Best Golf Carts" }, { href: "/join-the-socialite", label: "✦ Join Us" }].map((item) => (
                <Link key={item.href} href={item.href} className="text-sm font-bold text-white/70 transition hover:text-white">{item.label}</Link>
              ))}
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block">
          <div className="absolute left-0 right-0 top-14 px-14">
            <div className="mx-auto max-w-7xl">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.38em] text-[var(--color-cyan)]">The Villages, Florida — All-Access Pass</p>
              <h1 className="mt-4 font-[family:var(--font-cormorant)] font-semibold text-white" style={{ fontSize: "clamp(3.6rem, 7.5vw, 8.5rem)", lineHeight: 1.02 }}>
                Watch The Villages<br />Come To Life.
              </h1>
            </div>
          </div>
          <div className="absolute bottom-14 left-0 right-0 px-14">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-2xl space-y-5 text-white">
                <p className="text-xl leading-8 text-white/88">Nightlife, golf, live music, dining, real estate, and the moments that make The Villages unlike anywhere else.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/categories" className="rounded-full bg-[var(--color-teal)] px-8 py-4 text-base font-extrabold text-white shadow-[0_6px_24px_rgba(0,175,197,0.5)] transition hover:-translate-y-0.5">Browse Categories</Link>
                  <Link href="/join-the-socialite" className="rounded-full border-2 border-white/35 bg-white/12 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/22">Join The Socialite</Link>
                </div>
                <div className="flex flex-wrap gap-5 border-t border-white/15 pt-4">
                  {[{ href: "/categories", label: "▶ Start Watching" }, { href: "/best-golf-carts-the-villages", label: "🛺 Best Golf Carts" }, { href: "/join-the-socialite", label: "✦ Join Us" }].map((item) => (
                    <Link key={item.href} href={item.href} className="text-sm font-bold text-white/70 transition hover:text-white">{item.label}</Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-14 sm:px-8">

        {/* ── Category icon grid ──────────────────────────────────────── */}
        <section className="space-y-6">
          <div className="text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.34em] text-[var(--color-coral)]">Explore by category</p>
            <h2 className="mt-2 font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">Choose your lane.</h2>
          </div>
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
            {featuredCategories.map((cat) => (
              <Link key={cat.slug} href={`/category/${cat.slug}`}
                className="group flex flex-col items-center gap-2 rounded-[1.4rem] border-2 border-[var(--color-line)] bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-[var(--color-teal)] hover:shadow-[0_8px_30px_rgba(0,175,197,0.18)]"
              >
                <span className="text-3xl transition-transform group-hover:scale-110">{cat.icon}</span>
                <span className="text-xs font-extrabold leading-tight text-[var(--color-ink)]">{cat.label}</span>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/categories" className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-teal)]/40 bg-white px-6 py-2.5 text-sm font-bold text-[var(--color-sea)] shadow-sm transition hover:border-[var(--color-teal)] hover:text-[var(--color-teal)]">
              See all 20 categories →
            </Link>
          </div>
        </section>

        {/* ── Trending Around Town ────────────────────────────────────── */}
        <VideoSection
          badge="🔥 Trending Around Town"
          badgeColor="linear-gradient(135deg, #e84a25, #c73d1a)"
          title="What everyone's watching right now."
          tagline="The freshest videos from across The Villages — events, nightlife, real estate, and life in the squares."
          href="/categories"
          posts={trendingPosts}
        />

        {/* ── Master Connector ────────────────────────────────────────── */}
        <section className="overflow-hidden rounded-[2rem] border-2 border-[var(--color-line)] bg-white shadow-[0_16px_48px_rgba(5,20,25,0.07)]">
          <div className="flex flex-col items-center gap-6 p-7 sm:p-9 lg:flex-row lg:gap-8">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-[var(--color-line)] shadow-[0_8px_24px_rgba(0,175,197,0.2)] sm:h-36 sm:w-36">
              <Image src="https://villagesocialite.com/wp-content/uploads/2026/03/followvillagesocialiteonfacebook.jpg" alt="Village Socialite community" fill className="object-cover object-center" sizes="144px" />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.34em] text-[var(--color-teal)]">The Master Connector</p>
              <h2 className="mt-1.5 font-[family:var(--font-cormorant)] text-2xl font-semibold text-[var(--color-ink)] sm:text-3xl">
                Socially Connected. <span style={{ color: "#e05a8a" }}>Business Driven.</span>
              </h2>
              <p className="mt-2 max-w-md text-sm leading-7 text-[var(--color-ink-soft)]">The premier platform for Villagers to showcase talents, promote their business, and profit from their passions — while having a blast.</p>
            </div>
            <div className="flex flex-col items-center gap-4 lg:items-end">
              <div className="flex gap-5">
                {[{ icon: "📣", label: "PROMOTE" }, { icon: "🎓", label: "LEARN" }, { icon: "💰", label: "PROFIT" }].map(({ icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1">
                    <span className="text-xl">{icon}</span>
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-[var(--color-ink-soft)]">{label}</span>
                  </div>
                ))}
              </div>
              <Link href="/join-the-socialite" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-teal-deep)] px-6 py-3 text-sm font-extrabold text-white shadow-[0_6px_20px_rgba(0,77,99,0.35)] transition hover:-translate-y-0.5 hover:bg-[var(--color-teal)] whitespace-nowrap">
                Get Featured →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Discover cards ──────────────────────────────────────────── */}
        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] border-2 border-[var(--color-line)] bg-white px-7 py-9 shadow-[0_20px_50px_rgba(5,20,25,0.06)]">
            <div className="mb-4 text-3xl">🎉</div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[var(--color-coral)]">Discover What&apos;s Happening</p>
            <h2 className="mt-2 font-[family:var(--font-cormorant)] text-3xl font-semibold text-[var(--color-ink)]">Never miss a moment in The Villages.</h2>
            <div className="mt-4 space-y-2.5 text-sm leading-7 text-[var(--color-ink-soft)]">
              <p>🎸 Live music at the town squares every single night.</p>
              <p>🍽️ New restaurants, food reviews, and dining guides.</p>
              <p>🎉 Events, festivals, and gatherings worth showing up for.</p>
            </div>
            <Link href="/categories" className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-teal)]/30 px-5 py-2.5 text-sm font-bold text-[var(--color-sea)] transition hover:border-[var(--color-teal)] hover:text-[var(--color-teal)]">
              Browse all categories →
            </Link>
          </article>
          <article className="rounded-[2rem] border-2 border-[var(--color-line)] bg-white px-7 py-9 shadow-[0_20px_50px_rgba(5,20,25,0.06)]">
            <div className="mb-4 text-3xl">🏡</div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[var(--color-coral)]">Moving to The Villages?</p>
            <h2 className="mt-2 font-[family:var(--font-cormorant)] text-[1.75rem] font-semibold leading-tight text-[var(--color-ink)]">Get the real inside view before you move.</h2>
            <div className="mt-4 space-y-2.5 text-sm leading-7 text-[var(--color-ink-soft)]">
              <p>🛺 Golf cart life, real estate tips, and neighborhood guides.</p>
              <p>💛 Dating, social clubs, and singles life inside the community.</p>
              <p>📍 Real answers from people living it right now.</p>
            </div>
            <Link href="/join-the-socialite" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-teal-deep)] px-5 py-2.5 text-sm font-extrabold text-white shadow-[0_4px_16px_rgba(0,77,99,0.30)] transition hover:-translate-y-0.5 hover:bg-[var(--color-teal)]">
              Join The Socialite — Free →
            </Link>
          </article>
        </section>

        {/* ── Food, Drinks & Dining ───────────────────────────────────── */}
        <VideoSection
          badge="🍽️ Food, Drinks & Dining"
          badgeColor="linear-gradient(135deg, #d97706, #b45309)"
          title="The best bites in The Villages."
          tagline="Restaurant reviews, dining guides, and the must-try spots — from Catfish Johnny's to the best BBQ in the county."
          href="/category/food-dining-the-villages"
          posts={diningPosts}
        />

        {/* ── Facebook follow (compact) ───────────────────────────────── */}
        <section className="overflow-hidden rounded-[2rem] shadow-[0_12px_48px_rgba(0,77,99,0.22)]"
          style={{ background: "linear-gradient(120deg, #003546 0%, #005a78 45%, #00afc5 100%)" }}
        >
          <div className="flex flex-col items-center gap-6 p-7 sm:p-9 lg:flex-row lg:gap-0">
            {/* Left copy */}
            <div className="flex flex-1 flex-col gap-4 text-white lg:px-10 lg:py-8">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#22e8d4] ring-1 ring-white/20">Active on Facebook</span>
                <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22e8d4] opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-[#22e8d4]" /></span>
              </div>
              <h2 className="font-[family:var(--font-cormorant)] text-2xl font-semibold text-white sm:text-3xl">
                See what&apos;s happening <span style={{ color: "#22e8d4" }}>right now</span> in The Villages.
              </h2>
              <p className="text-sm leading-7 text-white/75">Live video from the squares, events as they unfold, and real Village life — follow us to never miss a moment.</p>
              <a
                href="https://www.facebook.com/profile.php?id=61586012620132"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2.5 rounded-full px-6 py-3 text-sm font-extrabold text-white shadow-[0_6px_24px_rgba(24,119,242,0.5)] transition hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #1877F2, #145dbf)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
                Follow Village Socialite →
              </a>
            </div>
            {/* Right image — constrained height */}
            <div className="relative h-52 w-full overflow-hidden rounded-[1.5rem] lg:h-56 lg:w-72 lg:shrink-0">
              <Image
                src="https://villagesocialite.com/wp-content/uploads/2026/03/followvillagesocialiteonfacebook.jpg"
                alt="Follow Village Socialite on Facebook"
                fill
                className="object-cover object-left"
                sizes="(min-width: 1024px) 288px, 100vw"
              />
              <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#003546]/60 to-transparent hidden lg:block" />
              <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "#1877F2" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
              </div>
            </div>
          </div>
        </section>

        {/* ── Golf Cart Life ──────────────────────────────────────────── */}
        <VideoSection
          badge="🛺 Golf Cart Life"
          badgeColor="linear-gradient(135deg, #16a34a, #15803d)"
          title="750 miles of trails. One incredible lifestyle."
          tagline="Reviews, buying guides, trail tours, and the most talked-about custom carts in The Villages."
          href="/category/golf-cart-life-the-villages"
          posts={golfCartPosts}
        />

        {/* ── Newsletter / Spotlight form ─────────────────────────────── */}
        <SpotlightForm />

        {/* ── Real Estate in The Villages ─────────────────────────────── */}
        <VideoSection
          badge="🏡 Real Estate in The Villages"
          badgeColor="linear-gradient(135deg, #4f46e5, #4338ca)"
          title="Homes, new neighborhoods & honest market talk."
          tagline="New construction tours, market updates, price trends, and everything you need to know before you buy."
          href="/category/real-estate-the-villages"
          posts={realEstatePosts}
        />

        {/* ── Heated Recliner ─────────────────────────────────────────── */}
        <section className="overflow-hidden rounded-[2rem] border-2 border-[var(--color-line)] bg-white shadow-[0_16px_48px_rgba(5,20,25,0.07)]">
          <div className="flex flex-col gap-7 p-7 sm:p-9 lg:flex-row lg:items-center lg:gap-10">
            <div className="flex-1 space-y-4">
              <span className="inline-block rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.26em] text-white" style={{ background: "linear-gradient(135deg, #b5924c, #d4aa6a)" }}>
                Village Socialite Recommended
              </span>
              <h2 className="font-[family:var(--font-cormorant)] text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl">
                Weightless Comfort <span style={{ color: "#d4850a" }}>+ Soothing Heat</span>
              </h2>
              <p className="text-sm leading-7 text-[var(--color-ink-soft)]">True Zero-Gravity relaxation with built-in heat zones. Designed to melt away pressure on hips and spine — perfect for sunrooms, patios, or your reading nook.</p>
              <div className="flex flex-wrap gap-2">
                {["🔥 3 Heat Levels", "☁️ Zero-Gravity", "🏷️ XL Oversized", "💪 500lb Limit"].map((pill) => (
                  <span key={pill} className="rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] px-3.5 py-1.5 text-xs font-semibold text-[var(--color-ink)]">{pill}</span>
                ))}
              </div>
              <div className="flex items-center gap-5">
                <div>
                  <p className="text-2xl font-extrabold text-[#d4850a]">$249.99</p>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#16a34a]">✓ Free Shipping</p>
                </div>
                <a href="https://villagesocialite.com/heated-zero-gravity-recliner-chair-for-seniors/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_6px_24px_rgba(212,133,10,0.4)] transition hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #e09520, #c47d08)" }}
                >
                  Buy on eBay →
                </a>
              </div>
            </div>
            <div className="relative mx-auto h-56 w-56 shrink-0 overflow-hidden rounded-[1.6rem] shadow-[0_12px_40px_rgba(5,20,25,0.12)] sm:h-64 sm:w-64">
              <Image src="https://villagesocialite.com/wp-content/uploads/2026/01/20260108_1443_Image-Generation_remix_01kefnj2v7etqrd1z67vy6q4a5.jpg" alt="Heated Zero-Gravity Recliner" fill className="object-cover" sizes="256px" />
            </div>
          </div>
        </section>

        {/* ── The Villages Lifestyle ──────────────────────────────────── */}
        <VideoSection
          badge="✨ The Villages Lifestyle"
          badgeColor="linear-gradient(135deg, #9333ea, #7c3aed)"
          title="Life inside the bubble. Unfiltered."
          tagline="Driveway parties, preview visits, Q&As, newcomer confessions — the real story of living in The Villages."
          href="/category/lifestyle-the-villages"
          posts={lifestylePosts}
        />

        {/* ── Events in The Villages ──────────────────────────────────── */}
        <VideoSection
          badge="🎉 Events in The Villages"
          badgeColor="linear-gradient(135deg, #0891b2, #0e7490)"
          title="The party never stops here."
          tagline="Town square concerts, festivals, 5Ks, holiday blowouts, and everything happening right now in The Villages."
          href="/category/events-the-villages"
          posts={eventsPosts}
        />

        {/* ── Active Feed ─────────────────────────────────────────────── */}
        <section className="overflow-hidden rounded-[2rem] border-2 border-[var(--color-line)] bg-white shadow-[0_16px_48px_rgba(5,20,25,0.07)]">
          <div className="flex flex-col items-center gap-7 p-7 sm:p-9 lg:flex-row lg:gap-10">
            <div className="relative shrink-0">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-[var(--color-line)] shadow-[0_12px_32px_rgba(0,0,0,0.1)]">
                <Image src="/reference-selected/lake-sumter-landing-the-villages-florida.jpg" alt="The Villages Florida" fill className="object-cover" sizes="160px" />
              </div>
              <div className="absolute bottom-1 right-1 flex h-10 w-10 items-center justify-center rounded-xl shadow-[0_4px_12px_rgba(24,119,242,0.5)]" style={{ background: "#1877F2" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
              </div>
            </div>
            <div className="flex-1 space-y-3 text-center lg:text-left">
              <span className="inline-block rounded-full border border-[#22c55e]/40 bg-[#f0fdf4] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.26em] text-[#16a34a]">Active Feed</span>
              <h2 className="font-[family:var(--font-cormorant)] text-2xl font-semibold text-[var(--color-ink)] sm:text-3xl">
                See What&apos;s <span style={{ color: "#e05a8a" }}>Happening Now</span>
              </h2>
              <p className="text-sm leading-7 text-[var(--color-ink-soft)]">Follow us to get the newest videos, local event updates, and a front-row seat as we <strong className="font-bold text-[var(--color-ink)]">build the ultimate social feed</strong> for The Villages.</p>
              <a href="https://www.facebook.com/profile.php?id=61586012620132" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-extrabold text-white shadow-[0_6px_20px_rgba(24,119,242,0.4)] transition hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #1877F2, #145dbf)" }}
              >
                Join the Conversation →
              </a>
            </div>
          </div>
        </section>

        {/* ── Video category spotlights (Pets + FB + Nightlife) ───────── */}
        <section className="grid gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-5 shadow-[0_8px_32px_rgba(18,27,33,0.06)]">
            <div className="mb-3 flex items-center justify-between">
              <span className="rounded-full bg-[var(--color-teal)] px-4 py-1.5 text-xs font-extrabold text-white shadow-[0_4px_14px_rgba(0,175,197,0.4)]">
                {petsCat ? decodeHtmlEntities(petsCat.name) : "Pets & Animals"}
              </span>
              {petsCat && <Link href={`/category/${petsCat.slug}`} className="text-xs font-semibold text-[var(--color-teal)] hover:underline">+ More videos</Link>}
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {petsPosts.map((post) => (
                <Link key={post.id} href={`/${post.slug}`} className="group block">
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-[var(--color-paper)]">
                    <Image src={getPrimaryImage(post)} alt={post.title} fill className="object-cover transition duration-300 group-hover:scale-105" sizes="140px" />
                  </div>
                  <p className="mt-1 line-clamp-2 text-xs font-medium leading-snug text-[var(--color-ink)]">{decodeHtmlEntities(post.title)}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-stretch justify-center">
            <a href="https://www.facebook.com/profile.php?id=61586012620132" target="_blank" rel="noopener noreferrer"
              className="group relative block w-full overflow-hidden rounded-[2rem] shadow-[0_8px_32px_rgba(18,27,33,0.16)] lg:w-[180px]"
            >
              <Image src="https://villagesocialite.com/wp-content/uploads/2026/03/followvillagesocialiteonfacebook.jpg" alt="Follow Village Socialite on Facebook" width={480} height={640} className="h-full w-full object-cover object-left transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <span className="rounded-full px-4 py-1.5 text-xs font-extrabold text-white" style={{ background: "#1877F2" }}>Follow Us</span>
              </div>
            </a>
          </div>

          <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-5 shadow-[0_8px_32px_rgba(18,27,33,0.06)]">
            <div className="mb-3 flex items-center justify-between">
              <span className="rounded-full bg-[var(--color-teal)] px-4 py-1.5 text-xs font-extrabold text-white shadow-[0_4px_14px_rgba(0,175,197,0.4)]">
                {nightlifeCat ? decodeHtmlEntities(nightlifeCat.name) : "Nightlife"}
              </span>
              {nightlifeCat && <Link href={`/category/${nightlifeCat.slug}`} className="text-xs font-semibold text-[var(--color-teal)] hover:underline">+ More videos</Link>}
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {nightlifePosts.map((post) => (
                <Link key={post.id} href={`/${post.slug}`} className="group block">
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-[var(--color-paper)]">
                    <Image src={getPrimaryImage(post)} alt={post.title} fill className="object-cover transition duration-300 group-hover:scale-105" sizes="140px" />
                  </div>
                  <p className="mt-1 line-clamp-2 text-xs font-medium leading-snug text-[var(--color-ink)]">{decodeHtmlEntities(post.title)}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Retro Handset ───────────────────────────────────────────── */}
        <section className="overflow-hidden rounded-[2rem] border-2 border-[var(--color-line)] bg-white shadow-[0_16px_48px_rgba(5,20,25,0.07)]">
          <div className="flex flex-col-reverse gap-7 p-7 sm:p-9 lg:flex-row lg:items-center lg:gap-10">
            <div className="relative mx-auto h-56 w-56 shrink-0 overflow-hidden rounded-[1.6rem] shadow-[0_12px_40px_rgba(5,20,25,0.12)] sm:h-64 sm:w-64">
              <Image src="https://villagesocialite.com/wp-content/uploads/2026/01/villagephonead1.jpg" alt="Retro Phone Handset" fill className="object-cover" sizes="256px" />
            </div>
            <div className="flex-1 space-y-4">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.30em] text-[var(--color-teal)]">Classic Comfort for Modern Phones</p>
              <h2 className="font-[family:var(--font-cormorant)] text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl">
                Stop the <span style={{ color: "#e05a8a" }}>Smartphone Neck Strain</span>
              </h2>
              <p className="text-sm leading-7 text-[var(--color-ink-soft)]">Miss the feel of a real phone? Our Retro Handset brings back the ergonomic grip you love. No Bluetooth pairing, no charging — just plug in and talk for hours.</p>
              <div className="flex items-center gap-5">
                <div>
                  <p className="text-2xl font-extrabold text-[var(--color-ink)]">$39.99</p>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#16a34a]">✓ Free Shipping</p>
                </div>
                <a href="https://villagesocialite.com/usb-c-phone-handset-for-seniors/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-teal-deep)] px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_6px_24px_rgba(0,77,99,0.35)] transition hover:-translate-y-0.5 hover:bg-[var(--color-teal)]"
                >
                  Yes! Send Me Mine →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Inside The Villages ─────────────────────────────────────── */}
        <section className="rounded-[2rem] px-8 py-12 text-center sm:px-14 sm:py-16"
          style={{ background: "linear-gradient(135deg, #fff5f7 0%, #fff0f8 50%, #f5f0ff 100%)" }}
        >
          <h2
            className="font-[family:var(--font-cormorant)] font-semibold"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", color: "#e05a8a" }}
          >
            Inside The Villages
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-9 text-[var(--color-ink-soft)] sm:text-lg">
            Village Socialite gives you a real inside look at life in The Villages, Florida. Watch what&apos;s happening daily through local videos, community events, live music, dating, real estate, and unforgettable moments. From quiet mornings to wild nights, this is where the community comes to life. Discover what people are doing, where they are going, and why everyone is talking about The Villages.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/categories"
              className="rounded-full bg-[var(--color-teal-deep)] px-8 py-3.5 text-sm font-extrabold text-white shadow-[0_6px_20px_rgba(0,77,99,0.30)] transition hover:-translate-y-0.5 hover:bg-[var(--color-teal)]"
            >
              Start Watching →
            </Link>
            <Link
              href="/join-the-socialite"
              className="rounded-full border-2 px-8 py-3.5 text-sm font-bold transition hover:border-[var(--color-teal)] hover:text-[var(--color-teal)]"
              style={{ borderColor: "#e05a8a", color: "#e05a8a" }}
            >
              Join The Socialite
            </Link>
          </div>
        </section>

        {/* ── Golf cart life banner ────────────────────────────────────── */}
        <section className="grid gap-8 overflow-hidden rounded-[2.5rem] border-2 border-[var(--color-line)] bg-white p-7 shadow-[0_20px_60px_rgba(5,20,25,0.06)] sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem]">
            <Image src="/reference-selected/golf-cart-ride-from-sumter-landing-to-brownwood-paddock-square-in-the-villages-florida.jpg" alt="Golf cart life in The Villages, Florida" fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover" />
          </div>
          <div className="space-y-5">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[var(--color-teal)]">Golf Cart Life</p>
            <h2 className="font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">The only place in Florida where golf carts are a lifestyle.</h2>
            <div className="space-y-3">
              {["750+ miles of multi-modal paths connecting every corner of The Villages.", "Our Best Golf Carts guide helps you find the perfect ride for your life here.", "Reviews, trails, buying guides, and the most talked-about custom carts."].map((item) => (
                <div key={item} className="rounded-[1.2rem] border-2 border-[var(--color-line)] bg-[var(--color-paper)] px-5 py-4 text-sm leading-7 text-[var(--color-ink-soft)]">{item}</div>
              ))}
            </div>
            <Link href="/best-golf-carts-the-villages" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-teal)] px-7 py-3.5 text-base font-extrabold text-white shadow-[0_6px_20px_rgba(0,175,197,0.35)] transition hover:-translate-y-0.5">
              Best Golf Carts Guide →
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
