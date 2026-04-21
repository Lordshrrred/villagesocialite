import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { SpotlightForm } from "@/components/spotlight-form";
import {
  getLatestPosts,
  getCategoryBySlug,
  getItemsForCategory,
  getPrimaryImage,
} from "@/lib/wordpress";
import { decodeHtmlEntities } from "@/lib/content-format";
import type { WordpressItem } from "@/lib/wordpress";

type CategoryIconName = "calendar" | "music" | "dining" | "heart" | "cart" | "home" | "nightlife" | "golf";
type FeaturedCategory = {
  slug: string;
  label: string;
  icon: CategoryIconName;
  tone: string;
  glow: string;
  wash: string;
};

const featuredCategories: FeaturedCategory[] = [
  { slug: "events-the-villages",         label: "Events",        icon: "calendar",  tone: "#ff5b35", glow: "rgba(255,91,53,0.34)", wash: "#fff0e9" },
  { slug: "live-music-the-villages",     label: "Live Music",    icon: "music",     tone: "#7b4dff", glow: "rgba(123,77,255,0.34)", wash: "#f2edff" },
  { slug: "food-dining-the-villages",    label: "Food & Dining", icon: "dining",    tone: "#d48700", glow: "rgba(212,135,0,0.32)", wash: "#fff6df" },
  { slug: "dating-the-villages",         label: "Dating",        icon: "heart",     tone: "#e83170", glow: "rgba(232,49,112,0.34)", wash: "#ffeaf2" },
  { slug: "golf-cart-life-the-villages", label: "Golf Carts",    icon: "cart",      tone: "#00a7b8", glow: "rgba(0,167,184,0.34)", wash: "#e2fbff" },
  { slug: "real-estate-the-villages",    label: "Real Estate",   icon: "home",      tone: "#2d8a4b", glow: "rgba(45,138,75,0.32)", wash: "#e9f9ee" },
  { slug: "nightlife-the-villages",      label: "Nightlife",     icon: "nightlife", tone: "#3342b8", glow: "rgba(51,66,184,0.34)", wash: "#ecf0ff" },
  { slug: "golfing-the-villages",        label: "Golfing",       icon: "golf",      tone: "#66a80f", glow: "rgba(102,168,15,0.30)", wash: "#f1fadf" },
];

function CategoryGlyph({ name }: { name: CategoryIconName }) {
  const strokeProps = {
    stroke: "currentColor",
    strokeWidth: 2.3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-12 w-12">
      {name === "calendar" && (
        <>
          <path d="M17 15h30a5 5 0 0 1 5 5v28a5 5 0 0 1-5 5H17a5 5 0 0 1-5-5V20a5 5 0 0 1 5-5Z" fill="currentColor" opacity=".18" />
          <path d="M12 20a5 5 0 0 1 5-5h30a5 5 0 0 1 5 5v8H12v-8Z" fill="currentColor" opacity=".24" />
          <path d="M20 34h9v7h-9zM35 34h9v7h-9zM20 44h9v5h-9z" fill="currentColor" opacity=".16" />
          <path d="M19 13v8M45 13v8M12 26h40M20 35h8M36 35h8M20 44h12" fill="none" {...strokeProps} />
          <path d="M43 41l3 2.2 3.6-5.2" fill="none" {...strokeProps} />
        </>
      )}
      {name === "music" && (
        <>
          <path d="M29 16l21-4v8l-21 4v-8Z" fill="currentColor" opacity=".22" />
          <path d="M18.8 43.3c-3.8.3-6.4 2.2-6.4 4.7 0 2.9 3.4 5 7.6 5s8-2.2 8-5-3.6-5-7.6-5c-.5 0-1 0-1.6.3ZM40.8 37.3c-3.8.3-6.4 2.2-6.4 4.7 0 2.9 3.4 5 7.6 5s8-2.2 8-5-3.6-5-7.6-5c-.5 0-1 0-1.6.3Z" fill="currentColor" opacity=".24" />
          <path d="M20 43c4 0 8-2.4 8-6.2V16l22-4v22.5" fill="none" {...strokeProps} />
          <path d="M28 23l22-4M20 43c-4.2 0-7.6 2.1-7.6 5s3.4 5 7.6 5 8-2.2 8-5-3.8-5-8-5ZM42 37c-4.2 0-7.6 2.1-7.6 5s3.4 5 7.6 5 8-2.2 8-5-3.8-5-8-5Z" fill="none" {...strokeProps} />
          <path d="M47 10l5 3-5 3" fill="none" {...strokeProps} />
        </>
      )}
      {name === "dining" && (
        <>
          <path d="M21 46h22c4.4 0 8-3.6 8-8H13c0 4.4 3.6 8 8 8Z" fill="currentColor" opacity=".22" />
          <path d="M17 38c1.7-6 7.6-10 15-10s13.3 4 15 10H17Z" fill="currentColor" opacity=".15" />
          <path d="M19 47h26v4H19z" fill="currentColor" opacity=".18" />
          <path d="M13 38h38M22 29c-2.4-3.8 2.2-5.5 0-9M32 29c-2.4-3.8 2.2-5.5 0-9M42 29c-2.4-3.8 2.2-5.5 0-9M20 51h24" fill="none" {...strokeProps} />
          <path d="M16 38c1.2-8 7.8-14 16-14s14.8 6 16 14" fill="none" {...strokeProps} />
        </>
      )}
      {name === "heart" && (
        <>
          <path d="M32 52S14 42 14 27.6C14 20.8 18.6 17 24 17c3.8 0 6.5 2 8 5 1.5-3 4.2-5 8-5 5.4 0 10 3.8 10 10.6C50 42 32 52 32 52Z" fill="currentColor" opacity=".28" />
          <path d="M24 22c-3.2 0-5.4 2.2-5.4 5.5 0 5.8 5.5 11.4 10.1 15.1" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" opacity=".62" />
          <path d="M32 52S14 42 14 27.6C14 20.8 18.6 17 24 17c3.8 0 6.5 2 8 5 1.5-3 4.2-5 8-5 5.4 0 10 3.8 10 10.6C50 42 32 52 32 52Z" fill="none" {...strokeProps} />
          <path d="M49 13l1.6 3.4L54 18l-3.4 1.6L49 23l-1.6-3.4L44 18l3.4-1.6L49 13Z" fill="currentColor" />
        </>
      )}
      {name === "cart" && (
        <>
          <path d="M16 39h33l-3-12H24l-8 12Z" fill="currentColor" opacity=".24" />
          <path d="M25 31h10v8H25zM37 31h8l2 8H37zM25 18h17l3 9H23l2-9Z" fill="currentColor" opacity=".16" />
          <path d="M16 39h33l-3-12H24l-8 12ZM23 39v-8h12M35 27v12M45 39v-7M18 47h32" fill="none" {...strokeProps} />
          <path d="M23 47a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM46 47a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" fill="currentColor" opacity=".3" />
          <path d="M23 50h.1M46 50h.1" fill="none" {...strokeProps} />
          <path d="M19 25h7l2-8h14l3 8" fill="none" {...strokeProps} />
        </>
      )}
      {name === "home" && (
        <>
          <path d="M13 31 32 15l19 16v20H18V31Z" fill="currentColor" opacity=".22" />
          <path d="M25 34h6v6h-6zM36 34h6v6h-6zM28 41h8v10h-8z" fill="currentColor" opacity=".16" />
          <path d="M18 31 32 19l14 12" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" opacity=".5" />
          <path d="M13 31 32 15l19 16M18 31v20h28V31M27 51V38h10v13" fill="none" {...strokeProps} />
          <path d="M42 19v-5h6v10" fill="none" {...strokeProps} />
        </>
      )}
      {name === "nightlife" && (
        <>
          <path d="M18 15h28L35 31v18h-6V31L18 15Z" fill="currentColor" opacity=".22" />
          <path d="M22 19h20l-5.5 8h-9L22 19Z" fill="currentColor" opacity=".18" />
          <path d="M29 31h6v18h-6z" fill="currentColor" opacity=".18" />
          <path d="M18 15h28L35 31v18h-6V31L18 15ZM24 23h16M26 49h12" fill="none" {...strokeProps} />
          <path d="M47 36a11 11 0 0 1-11-11 12 12 0 1 0 11 11Z" fill="currentColor" opacity=".28" />
        </>
      )}
      {name === "golf" && (
        <>
          <path d="M28 51c9.4 0 17-2.7 17-6s-7.6-6-17-6-17 2.7-17 6 7.6 6 17 6Z" fill="currentColor" opacity=".18" />
          <path d="M35 14l15 5-15 5V14Z" fill="currentColor" opacity=".22" />
          <path d="M22 44c0-3 2.7-5.5 6-5.5S34 41 34 44H22Z" fill="currentColor" opacity=".18" />
          <path d="M34 45V12M34 13l17 6-17 6M22 44h8M42 47h.1" fill="none" {...strokeProps} />
          <path d="M22 44c0-3 2.7-5.5 6-5.5S34 41 34 44" fill="none" {...strokeProps} />
        </>
      )}
    </svg>
  );
}

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
            className="inline-block rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.28em] text-white shadow-[0_4px_14px_rgba(0,0,0,0.22)]"
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
          className="shrink-0 self-start rounded-full border-2 border-[var(--color-teal)]/30 bg-white px-5 py-2.5 text-sm font-bold text-[var(--color-sea)] shadow-[0_2px_12px_rgba(0,175,197,0.12)] transition hover:-translate-y-0.5 hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] hover:shadow-[0_6px_20px_rgba(0,175,197,0.22)] sm:self-auto"
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

  const diningCat    = getCategoryBySlug("food-dining-the-villages");
  const golfCartCat  = getCategoryBySlug("golf-cart-life-the-villages");
  const realEstateCat= getCategoryBySlug("real-estate-the-villages");
  const lifestyleCat = getCategoryBySlug("lifestyle-the-villages");
  const eventsCat    = getCategoryBySlug("events-the-villages");


  const diningPosts     = diningCat     ? getItemsForCategory(diningCat.id).slice(0, 5)     : [];
  const golfCartPosts   = golfCartCat   ? getItemsForCategory(golfCartCat.id).slice(0, 5)   : [];
  const realEstatePosts = realEstateCat ? getItemsForCategory(realEstateCat.id).slice(0, 5) : [];
  const lifestylePosts  = lifestyleCat  ? getItemsForCategory(lifestyleCat.id).slice(0, 5)  : [];
  const eventsPosts     = eventsCat     ? getItemsForCategory(eventsCat.id).slice(0, 5)     : [];

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
            <h1 className="font-[family:var(--font-cormorant)] font-semibold text-white" style={{ fontSize: "clamp(2.1rem, 8.5vw, 3.4rem)", lineHeight: 1.08 }}>
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
          <div className="relative overflow-hidden rounded-[2rem] border-2 border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(204,232,238,0.48))] p-4 shadow-[0_24px_70px_rgba(5,20,25,0.10)] sm:p-6">
            <span className="pointer-events-none absolute left-8 top-7 h-2 w-2 rounded-full bg-[var(--color-coral)] category-twinkle" />
            <span className="pointer-events-none absolute right-16 top-10 h-2.5 w-2.5 rounded-full bg-[var(--color-gold)] category-twinkle category-twinkle-delay-1" />
            <span className="pointer-events-none absolute bottom-8 left-1/3 h-1.5 w-1.5 rounded-full bg-[var(--color-teal)] category-twinkle category-twinkle-delay-2" />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
              {featuredCategories.map((cat) => (
                <Link key={cat.slug} href={`/category/${cat.slug}`}
                  className="category-card group relative isolate flex min-h-[8.75rem] flex-col items-center justify-between overflow-hidden rounded-[1.35rem] border border-white/70 bg-white px-3 py-4 text-center shadow-[0_10px_28px_rgba(5,20,25,0.07)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_42px_rgba(5,20,25,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-teal)]"
                  style={{
                    "--category-tone": cat.tone,
                    "--category-glow": cat.glow,
                    "--category-wash": cat.wash,
                  } as CSSProperties}
                >
                  <span className="category-sheen" aria-hidden="true" />
                  <span className="category-star category-star-1" aria-hidden="true" />
                  <span className="category-star category-star-2" aria-hidden="true" />
                  <span className="category-star category-star-3" aria-hidden="true" />
                  <span className="category-orbit" aria-hidden="true" />
                  <span className="category-icon-wrap flex h-16 w-16 items-center justify-center rounded-2xl text-[var(--category-tone)] transition duration-300 group-hover:scale-110">
                    <CategoryGlyph name={cat.icon} />
                  </span>
                  <span className="relative z-10 text-[0.72rem] font-extrabold leading-tight text-[var(--color-ink)]">{cat.label}</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center">
            <Link href="/categories" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-teal-deep)] px-7 py-3 text-sm font-extrabold text-white shadow-[0_4px_16px_rgba(0,77,99,0.28)] transition hover:-translate-y-0.5 hover:bg-[var(--color-teal)] hover:shadow-[0_8px_24px_rgba(0,175,197,0.38)]">
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

        {/* ── Discover cards ──────────────────────────────────────────── */}
        <section className="grid gap-6 lg:grid-cols-2">
          <article className="overflow-hidden rounded-[2rem] border-2 border-[var(--color-line)] bg-white shadow-[0_20px_50px_rgba(5,20,25,0.06)]">
            <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #e84a25, #ff7a5a)" }} />
            <div className="px-7 py-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-3xl shadow-sm" style={{ background: "linear-gradient(135deg, #fff2ee, #ffe4dc)" }}>🎉</div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[var(--color-coral)]">Discover What&apos;s Happening</p>
              <h2 className="mt-2 font-[family:var(--font-cormorant)] text-3xl font-semibold text-[var(--color-ink)]">Never miss a moment in The Villages.</h2>
              <div className="mt-5 space-y-2.5">
                {[
                  { icon: "🎸", text: "Live music at the town squares every single night." },
                  { icon: "🍽️", text: "New restaurants, food reviews, and dining guides." },
                  { icon: "🎉", text: "Events, festivals, and gatherings worth showing up for." },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-start gap-3 rounded-xl bg-[var(--color-paper)] px-4 py-3 text-sm leading-6 text-[var(--color-ink-soft)]">
                    <span className="mt-0.5 shrink-0">{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
              <Link href="/categories" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-coral)] px-6 py-3 text-sm font-extrabold text-white shadow-[0_4px_16px_rgba(232,74,37,0.32)] transition hover:-translate-y-0.5 hover:brightness-110">
                Browse all categories →
              </Link>
            </div>
          </article>
          <article className="overflow-hidden rounded-[2rem] border-2 border-[var(--color-line)] bg-white shadow-[0_20px_50px_rgba(5,20,25,0.06)]">
            <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #004d63, #00afc5)" }} />
            <div className="px-7 py-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-3xl shadow-sm" style={{ background: "linear-gradient(135deg, #e6f7fa, #cceef4)" }}>🏡</div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[var(--color-coral)]">Moving to The Villages?</p>
              <h2 className="mt-2 font-[family:var(--font-cormorant)] text-[1.75rem] font-semibold leading-tight text-[var(--color-ink)]">Get the real inside view before you move.</h2>
              <div className="mt-5 space-y-2.5">
                {[
                  { icon: "🛺", text: "Golf cart life, real estate tips, and neighborhood guides." },
                  { icon: "💛", text: "Dating, social clubs, and singles life inside the community." },
                  { icon: "📍", text: "Real answers from people living it right now." },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-start gap-3 rounded-xl bg-[var(--color-paper)] px-4 py-3 text-sm leading-6 text-[var(--color-ink-soft)]">
                    <span className="mt-0.5 shrink-0">{icon}</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
              <Link href="/join-the-socialite" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-teal-deep)] px-6 py-3 text-sm font-extrabold text-white shadow-[0_4px_16px_rgba(0,77,99,0.30)] transition hover:-translate-y-0.5 hover:bg-[var(--color-teal)]">
                Join The Socialite — Free →
              </Link>
            </div>
          </article>
        </section>

        {/* ── Master Connector ────────────────────────────────────────── */}
        <section className="overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(5,20,25,0.2)]"
          style={{ background: "linear-gradient(135deg, #051419 0%, #0b2e3f 45%, #005a78 100%)" }}
        >
          <div className="flex flex-col items-center gap-7 p-7 sm:p-10 lg:flex-row lg:gap-10">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-[var(--color-teal)]/30 shadow-[0_0_40px_rgba(0,175,197,0.35)] sm:h-36 sm:w-36">
              <Image src="https://villagesocialite.com/wp-content/uploads/2026/03/villagesocialitevent.jpg" alt="Village Socialite community event" fill className="object-cover object-center" sizes="144px" />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.34em] text-[var(--color-teal)]">The Master Connector</p>
              <h2 className="mt-1.5 font-[family:var(--font-cormorant)] text-2xl font-semibold text-white sm:text-3xl">
                Socially Connected. <span style={{ color: "#e05a8a" }}>Business Driven.</span>
              </h2>
              <p className="mt-2 max-w-md text-sm leading-7 text-white/70">The premier platform for Villagers to showcase talents, promote their business, and profit from their passions — while having a blast.</p>
            </div>
            <div className="flex flex-col items-center gap-5 lg:items-end">
              <div className="flex gap-3">
                {[{ icon: "📣", label: "PROMOTE" }, { icon: "🎓", label: "LEARN" }, { icon: "💰", label: "PROFIT" }].map(({ icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1.5 rounded-2xl border border-white/10 bg-white/8 px-4 py-3">
                    <span className="text-xl">{icon}</span>
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-white/55">{label}</span>
                  </div>
                ))}
              </div>
              <Link href="/join-the-socialite"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full px-7 py-3 text-sm font-extrabold text-white shadow-[0_6px_24px_rgba(0,175,197,0.4)] transition hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #00afc5, #007a96)" }}
              >
                Get Featured →
              </Link>
            </div>
          </div>
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
              <a href="https://www.facebook.com/profile.php?id=61586012620132" target="_blank" rel="noopener noreferrer" className="transition hover:opacity-85">
                <h2 className="font-[family:var(--font-cormorant)] text-2xl font-semibold text-white sm:text-3xl">
                  See what&apos;s happening <span style={{ color: "#22e8d4" }}>right now</span> in The Villages.
                </h2>
              </a>
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
            <a
              href="https://www.facebook.com/profile.php?id=61586012620132"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative h-52 w-full overflow-hidden rounded-[1.5rem] lg:h-56 lg:w-72 lg:shrink-0"
            >
              <Image
                src="https://villagesocialite.com/wp-content/uploads/2026/03/followvillagesocialiteonfacebook.jpg"
                alt="Follow Village Socialite on Facebook"
                fill
                className="object-cover object-top transition duration-300 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 288px, 100vw"
              />
              <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#003546]/60 to-transparent hidden lg:block" />
              <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "#1877F2" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
              </div>
            </a>
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
        <section className="overflow-hidden rounded-[2rem] border border-[#d4aa6a]/30 shadow-[0_20px_60px_rgba(212,133,10,0.12)]"
          style={{ background: "linear-gradient(135deg, #fffcf5 0%, #fff8e8 50%, #fffcf5 100%)" }}
        >
          <div className="flex flex-col gap-7 p-7 sm:p-9 lg:flex-row lg:items-center lg:gap-10">
            <div className="flex-1 space-y-4">
              <span className="inline-block rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.26em] text-white" style={{ background: "linear-gradient(135deg, #b5924c, #d4aa6a)" }}>
                Village Socialite Recommended
              </span>
              <Link href="/heated-zero-gravity-recliner-chair-for-seniors">
                <h2 className="font-[family:var(--font-cormorant)] text-3xl font-semibold text-[var(--color-ink)] transition hover:text-[#d4850a] sm:text-4xl">
                  Weightless Comfort <span style={{ color: "#d4850a" }}>+ Soothing Heat</span>
                </h2>
              </Link>
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
                <Link
                  href="/heated-zero-gravity-recliner-chair-for-seniors"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_6px_24px_rgba(212,133,10,0.4)] transition hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #e09520, #c47d08)" }}
                >
                  Buy on eBay →
                </Link>
              </div>
            </div>
            <Link href="/heated-zero-gravity-recliner-chair-for-seniors" className="group relative mx-auto block h-56 w-56 shrink-0 overflow-hidden rounded-[1.6rem] shadow-[0_12px_40px_rgba(5,20,25,0.12)] sm:h-64 sm:w-64">
              <Image src="https://villagesocialite.com/wp-content/uploads/2026/01/20260108_1443_Image-Generation_remix_01kefnj2v7etqrd1z67vy6q4a5.jpg" alt="Heated Zero-Gravity Recliner" fill className="object-cover transition duration-300 group-hover:scale-[1.04]" sizes="256px" />
              <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
            </Link>
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
        <section className="overflow-hidden rounded-[2rem] shadow-[0_16px_48px_rgba(24,119,242,0.18)]"
          style={{ background: "linear-gradient(135deg, #0d1b2e 0%, #1a2d4a 50%, #0d1b2e 100%)" }}
        >
          <div className="flex flex-col items-center gap-7 p-7 sm:p-10 lg:flex-row lg:gap-10">
            <div className="relative shrink-0">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white/15 shadow-[0_0_40px_rgba(24,119,242,0.4)]">
                <Image src="/reference-selected/lake-sumter-landing-the-villages-florida.jpg" alt="The Villages Florida" fill className="object-cover" sizes="160px" />
              </div>
              <div className="absolute bottom-1 right-1 flex h-10 w-10 items-center justify-center rounded-xl shadow-[0_4px_16px_rgba(24,119,242,0.6)]" style={{ background: "linear-gradient(135deg, #1877F2, #145dbf)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
              </div>
            </div>
            <div className="flex-1 space-y-3 text-center lg:text-left">
              <div className="flex items-center justify-center gap-2 lg:justify-start">
                <span className="rounded-full border border-[#22c55e]/40 bg-[#22c55e]/15 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.26em] text-[#4ade80]">Active Feed</span>
                <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-[#4ade80]" /></span>
              </div>
              <h2 className="font-[family:var(--font-cormorant)] text-2xl font-semibold text-white sm:text-3xl">
                See What&apos;s <span style={{ color: "#60a5fa" }}>Happening Now</span>
              </h2>
              <p className="text-sm leading-7 text-white/68">Follow us to get the newest videos, local event updates, and a front-row seat as we <strong className="font-bold text-white">build the ultimate social feed</strong> for The Villages.</p>
              <a href="https://www.facebook.com/profile.php?id=61586012620132" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-extrabold text-white shadow-[0_6px_24px_rgba(24,119,242,0.5)] transition hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #1877F2, #145dbf)" }}
              >
                Join the Conversation →
              </a>
            </div>
          </div>
        </section>

        {/* ── Retro Handset ───────────────────────────────────────────── */}
        <section className="overflow-hidden rounded-[2rem] border border-[var(--color-teal)]/20 shadow-[0_20px_60px_rgba(0,175,197,0.1)]"
          style={{ background: "linear-gradient(135deg, #f5fcfd 0%, #e8f7fa 50%, #f5fcfd 100%)" }}
        >
          <div className="flex flex-col-reverse gap-7 p-7 sm:p-9 lg:flex-row lg:items-center lg:gap-10">
            <Link href="/usb-c-phone-handset-for-seniors" className="group relative mx-auto block h-56 w-56 shrink-0 overflow-hidden rounded-[1.6rem] shadow-[0_12px_40px_rgba(5,20,25,0.12)] sm:h-64 sm:w-64">
              <Image src="https://villagesocialite.com/wp-content/uploads/2026/01/villagephonead1.jpg" alt="Retro Phone Handset" fill className="object-cover transition duration-300 group-hover:scale-[1.04]" sizes="256px" />
              <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/10" />
            </Link>
            <div className="flex-1 space-y-4">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.30em] text-[var(--color-teal)]">Classic Comfort for Modern Phones</p>
              <Link href="/usb-c-phone-handset-for-seniors">
                <h2 className="font-[family:var(--font-cormorant)] text-3xl font-semibold text-[var(--color-ink)] transition hover:text-[var(--color-teal-deep)] sm:text-4xl">
                  Stop the <span style={{ color: "#e05a8a" }}>Smartphone Neck Strain</span>
                </h2>
              </Link>
              <p className="text-sm leading-7 text-[var(--color-ink-soft)]">Miss the feel of a real phone? Our Retro Handset brings back the ergonomic grip you love. No Bluetooth pairing, no charging — just plug in and talk for hours.</p>
              <div className="flex items-center gap-5">
                <div>
                  <p className="text-2xl font-extrabold text-[var(--color-ink)]">$39.99</p>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#16a34a]">✓ Free Shipping</p>
                </div>
                <Link
                  href="/usb-c-phone-handset-for-seniors"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-teal-deep)] px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_6px_24px_rgba(0,77,99,0.35)] transition hover:-translate-y-0.5 hover:bg-[var(--color-teal)]"
                >
                  Yes! Send Me Mine →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Preserve Your Story — Celebrating Life Movies ──────────── */}
        <section className="overflow-hidden rounded-[2rem] border border-[var(--color-gold)]/30 shadow-[0_18px_50px_rgba(5,20,25,0.12)]"
          style={{ background: "linear-gradient(135deg, #fffdf5 0%, #f5fbfb 52%, #d9f4f6 100%)" }}
        >
          <div className="flex flex-col gap-8 p-7 sm:p-10 lg:flex-row lg:items-center lg:gap-12">

            {/* Left — film icon */}
            <div className="flex shrink-0 flex-col items-center gap-3 lg:w-44">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-white bg-[var(--color-ink)] shadow-[0_18px_42px_rgba(5,20,25,0.18)]"
                style={{ background: "radial-gradient(circle at 40% 35%, #006a82 0%, #051419 100%)" }}
              >
                <span className="text-5xl" role="img" aria-label="Film reel">🎬</span>
              </div>
              <p className="text-center text-[10px] font-extrabold uppercase tracking-[0.24em] text-[var(--color-teal-deep)]">
                Celebrating<br />Life Movies
              </p>
            </div>

            {/* Right — content */}
            <div className="flex-1 space-y-5">
              <div className="space-y-2">
                <span className="inline-block rounded-full border border-[var(--color-gold)]/45 bg-white px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.30em] text-[var(--color-coral)] shadow-sm">
                  Exclusive Resident Perk
                </span>
                <h2
                  className="font-[family:var(--font-cormorant)] font-semibold text-[var(--color-ink)]"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.1 }}
                >
                  Preserve Your Story with{" "}
                  <span className="text-[var(--color-coral)]">15% Off</span>
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-[var(--color-ink-soft)]">
                Turn your life into a cinematic film. Through guided interviews and restored media,{" "}
                <strong className="font-bold text-[var(--color-ink)]">Celebrating Life Movies</strong>{" "}
                helps you shape your message into a legacy masterpiece for generations to watch.
              </p>

              {/* Promo code box */}
              <div className="inline-flex flex-wrap items-center gap-4 rounded-xl border-2 border-dashed border-[var(--color-gold)]/55 bg-white px-5 py-4 shadow-[0_14px_34px_rgba(5,20,25,0.08)]">
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.26em] text-[var(--color-teal-deep)]/70">Your Promo Code</p>
                  <p className="mt-0.5 font-[family:var(--font-cormorant)] text-2xl font-semibold tracking-widest text-[var(--color-coral)]">VILLAGES15</p>
                </div>
                <div className="hidden h-10 w-px bg-[var(--color-line)] sm:block" />
                <p className="text-xs font-semibold text-[var(--color-ink-soft)]">Apply at checkout<br />to save 15%</p>
              </div>

              <Link
                href="/celebrating-life-movies-villages-discount"
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-extrabold text-white shadow-[0_8px_28px_rgba(224,70,30,0.26)] transition hover:-translate-y-0.5 hover:brightness-105"
                style={{ background: "linear-gradient(135deg, var(--color-coral), var(--color-gold))" }}
              >
                Claim My 15% Discount →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Inside The Villages ─────────────────────────────────────── */}
        <section className="overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(5,20,25,0.18)]"
          style={{ background: "linear-gradient(125deg, #051419 0%, #0b2e3f 40%, #004d63 100%)" }}
        >
          {/* Decorative arc */}
          <div className="pointer-events-none absolute inset-0 opacity-10" aria-hidden="true" />
          <div className="flex flex-col gap-7 p-8 sm:p-10 lg:flex-row lg:items-center lg:gap-14 lg:px-14 lg:py-12">

            {/* Left — big stacked title */}
            <div className="shrink-0 lg:w-72">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.38em] text-[var(--color-teal)]">The Villages, Florida</p>
              <h2
                className="mt-2 font-[family:var(--font-cormorant)] font-semibold leading-[1.02] text-white"
                style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.2rem)" }}
              >
                Inside<br />The<br />Villages
              </h2>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-[3px] w-10 rounded-full" style={{ background: "linear-gradient(90deg, #00afc5, #22e8d4)" }} />
                <div className="h-[3px] w-4 rounded-full opacity-40" style={{ background: "#22e8d4" }} />
              </div>
            </div>

            {/* Right — body + CTAs */}
            <div className="flex flex-1 flex-col gap-6">
              <p className="text-base leading-8 text-white/78 sm:text-[1.08rem]">
                Village Socialite gives you a real inside look at life in The Villages, Florida. Watch what&apos;s happening daily through local videos, community events, live music, dating, real estate, and unforgettable moments. From quiet mornings to wild nights, this is where the community comes to life. Discover what people are doing, where they are going, and why everyone is talking about The Villages.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/categories"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_6px_24px_rgba(0,175,197,0.45)] transition hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #00afc5, #007a96)" }}
                >
                  Start Watching →
                </Link>
                <Link
                  href="/join-the-socialite"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/20"
                >
                  Join The Socialite
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Local Knowledge & Community Stories ─────────────────────── */}
        <section className="overflow-hidden rounded-[2rem] border-2 border-[var(--color-line)] bg-white shadow-[0_16px_48px_rgba(5,20,25,0.07)]">
          <div className="flex flex-col items-stretch lg:flex-row">
            {/* Left — logo block */}
            <div className="flex shrink-0 items-center justify-center p-8 lg:w-56 lg:p-10"
              style={{ background: "linear-gradient(135deg, #dff7f9 0%, #c8eef2 100%)" }}
            >
              <div className="relative h-32 w-32">
                <Image
                  src="/reference-selected/cropped-20251201_2104_Village-Socialite-Martini_simple_compose_01kbekm22mfjetcmbba22q6tsy-1.png"
                  alt="Village Socialite"
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            </div>
            {/* Right — dark teal panel */}
            <div className="flex flex-1 flex-col justify-center px-7 py-8 sm:px-10"
              style={{ background: "linear-gradient(135deg, #004d63, #007a96)" }}
            >
              <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[#22e8d4]">Serving The Villages Community</p>
              <h2 className="mt-2 font-[family:var(--font-cormorant)] text-2xl font-semibold text-white sm:text-3xl">
                Local Knowledge &amp; Community Stories
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/72">
                Have a story worth telling? Know about an event, business, or person the Village deserves to know? We&apos;re always listening — connect with the Village Socialite team.
              </p>
              <Link
                href="/contact-village-socialite"
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border-2 border-white/25 bg-white/15 px-7 py-3 text-sm font-extrabold text-white backdrop-blur-sm transition hover:border-white/45 hover:bg-white/25"
              >
                Get in Touch →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Golf cart life banner ────────────────────────────────────── */}
        <section className="grid gap-8 overflow-hidden rounded-[2.5rem] border-2 border-[var(--color-line)] bg-white p-7 shadow-[0_20px_60px_rgba(5,20,25,0.06)] sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.8rem] shadow-[0_12px_40px_rgba(5,20,25,0.12)]">
            <Image src="/reference-selected/golf-cart-ride-from-sumter-landing-to-brownwood-paddock-square-in-the-villages-florida.jpg" alt="Golf cart life in The Villages, Florida" fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
          <div className="space-y-5">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[var(--color-teal)]">Golf Cart Life</p>
            <h2 className="font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">The only place in Florida where golf carts are a lifestyle.</h2>
            <div className="space-y-3">
              {[
                { icon: "🛺", text: "750+ miles of multi-modal paths connecting every corner of The Villages." },
                { icon: "⭐", text: "Our Best Golf Carts guide helps you find the perfect ride for your life here." },
                { icon: "📋", text: "Reviews, trails, buying guides, and the most talked-about custom carts." },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-3 rounded-[1.2rem] bg-[var(--color-paper)] px-5 py-4 text-sm leading-7 text-[var(--color-ink-soft)]">
                  <span className="mt-0.5 shrink-0 text-base">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <Link href="/best-golf-carts-the-villages" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-teal)] px-7 py-3.5 text-base font-extrabold text-white shadow-[0_6px_24px_rgba(0,175,197,0.40)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(0,175,197,0.5)]">
              Best Golf Carts Guide →
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
