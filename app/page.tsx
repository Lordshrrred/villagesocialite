import Image from "next/image";
import Link from "next/link";
import { ImportedStoryCard } from "@/components/imported-story-card";
import { SpotlightForm } from "@/components/spotlight-form";
import {
  getAllCategories,
  getFeaturedMigrationStories,
  getLatestPosts,
} from "@/lib/wordpress";
import { stripHtml } from "@/lib/content-format";

const featuredCategories = [
  { slug: "events-the-villages",        label: "Events",          icon: "🎉", color: "#e84a25" },
  { slug: "live-music-the-villages",    label: "Live Music",      icon: "🎸", color: "#00afc5" },
  { slug: "food-dining-the-villages",   label: "Food & Dining",   icon: "🍽️", color: "#e8a415" },
  { slug: "dating-the-villages",        label: "Dating",          icon: "💛", color: "#c87cd4" },
  { slug: "golf-cart-life-the-villages",label: "Golf Cart Life",  icon: "🛺", color: "#00afc5" },
  { slug: "real-estate-the-villages",   label: "Real Estate",     icon: "🏡", color: "#00a085" },
  { slug: "nightlife-the-villages",     label: "Nightlife",       icon: "🍸", color: "#7060e8" },
  { slug: "golfing-the-villages",       label: "Golfing",         icon: "⛳", color: "#2a9940" },
];

export default function Home() {
  const featuredStories = getFeaturedMigrationStories();
  const latestPosts = getLatestPosts(6);

  return (
    <div className="flex flex-col">

      {/* ── Full-bleed cinematic hero ────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "clamp(480px, 68vh, 740px)" }}>
        {/* Background image — full size, nothing cut off */}
        <div className="absolute inset-0">
          <Image
            src="/reference-selected/villages_header.jpg"
            alt="Life in The Villages, Florida"
            fill
            sizes="100vw"
            className="object-cover hero-pan"
            priority
          />
        </div>
        {/* Cinematic gradient overlay — left side readable, right edge visible */}
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(5,20,25,0.88)_0%,rgba(5,20,25,0.70)_40%,rgba(5,20,25,0.28)_70%,rgba(5,20,25,0.08)_100%)]" />

        {/* Text content — left-aligned, vertically centered */}
        <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-6 py-16 sm:px-10 lg:px-14">
          <div className="max-w-3xl space-y-7 text-white">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.38em] text-[var(--color-cyan)]">
              The Villages, Florida — All-Access Pass
            </p>
            <h1 className="font-[family:var(--font-cormorant)] text-[2.6rem] font-semibold leading-[1.08] sm:text-[3.8rem] lg:text-[5.2rem]">
              Watch The Villages<br />Come To Life.
            </h1>
            <p className="text-lg leading-9 text-white/85 sm:text-xl">
              Discover nightlife, golf, live music, dining, real estate, and the local moments through real video. Browse by category or dive into the feed.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/categories"
                className="rounded-full bg-[var(--color-teal)] px-8 py-4 text-base font-extrabold text-white shadow-[0_6px_24px_rgba(0,175,197,0.5)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(0,175,197,0.55)]"
              >
                Browse Categories
              </Link>
              <Link
                href="/join-the-socialite"
                className="rounded-full border-2 border-white/35 bg-white/12 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/22"
              >
                Join The Socialite
              </Link>
            </div>
            {/* Quick-links row */}
            <div className="flex flex-wrap gap-5 border-t border-white/15 pt-6">
              {[
                { href: "/categories", label: "▶ Start Watching" },
                { href: "/best-golf-carts-the-villages", label: "🛺 Best Golf Carts" },
                { href: "/join-the-socialite", label: "✦ Join Us" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-bold text-white/70 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-14 sm:px-8">

        {/* ── Category icon grid ──────────────────────────────────────── */}
        <section className="space-y-8">
          <div className="text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.34em] text-[var(--color-coral)]">
              Explore by category
            </p>
            <h2 className="mt-3 font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
              Choose your lane.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-[var(--color-ink-soft)]">
              Golf carts, live music, dining, dating, real estate, nightlife — all the corners that keep Village life interesting.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
            {featuredCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group flex flex-col items-center gap-3 rounded-[1.6rem] border-2 border-[var(--color-line)] bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-[var(--color-teal)] hover:shadow-[0_8px_30px_rgba(0,175,197,0.18)]"
              >
                <span className="text-4xl transition-transform group-hover:scale-115">{cat.icon}</span>
                <span className="text-sm font-extrabold leading-tight text-[var(--color-ink)]">{cat.label}</span>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-teal)]/40 bg-white px-7 py-3 text-sm font-bold text-[var(--color-sea)] shadow-sm transition hover:border-[var(--color-teal)] hover:text-[var(--color-teal)]"
            >
              See all 20 categories <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        {/* ── Discover cards ──────────────────────────────────────────── */}
        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2.2rem] border-2 border-[var(--color-line)] bg-white px-8 py-10 shadow-[0_20px_50px_rgba(5,20,25,0.06)]">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-paper)] text-3xl">
              🎉
            </div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[var(--color-coral)]">
              Discover What&apos;s Happening
            </p>
            <h2 className="mt-3 font-[family:var(--font-cormorant)] text-3xl font-semibold text-[var(--color-ink)]">
              Never miss a moment in The Villages.
            </h2>
            <div className="mt-5 space-y-3 text-base text-[var(--color-ink-soft)]">
              <p>🎸 Live music at the town squares every single night.</p>
              <p>🍽️ New restaurants, food reviews, and dining guides.</p>
              <p>🎉 Events, festivals, and gatherings worth showing up for.</p>
            </div>
            <Link
              href="/categories"
              className="mt-7 inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-teal)]/30 px-5 py-3 text-sm font-bold text-[var(--color-sea)] transition hover:border-[var(--color-teal)] hover:text-[var(--color-teal)]"
            >
              Browse all categories <span aria-hidden="true">→</span>
            </Link>
          </article>
          <article className="rounded-[2.2rem] border-2 border-[var(--color-line)] bg-white px-8 py-10 shadow-[0_20px_50px_rgba(5,20,25,0.06)]">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-paper)] text-3xl">
              🏡
            </div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[var(--color-coral)]">
              Moving to The Villages?
            </p>
            <h2 className="mt-3 font-[family:var(--font-cormorant)] text-[1.75rem] font-semibold leading-tight text-[var(--color-ink)]">
              Get the real inside view before you move.
            </h2>
            <div className="mt-5 space-y-3 text-base text-[var(--color-ink-soft)]">
              <p>🛺 Golf cart life, real estate tips, and neighborhood guides.</p>
              <p>💛 Dating, social clubs, and singles life inside the community.</p>
              <p>📍 Real answers from people living it right now.</p>
            </div>
            <Link
              href="/join-the-socialite"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--color-teal-deep)] px-5 py-3 text-sm font-extrabold text-white shadow-[0_4px_16px_rgba(0,77,99,0.30)] transition hover:-translate-y-0.5 hover:bg-[var(--color-teal)]"
            >
              Join The Socialite — Free <span aria-hidden="true">→</span>
            </Link>
          </article>
        </section>

        {/* ── Newsletter / Spotlight form ─────────────────────────────── */}
        <SpotlightForm />

        {/* ── Featured stories ────────────────────────────────────────── */}
        <section className="space-y-8">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.34em] text-[var(--color-coral)]">
              What everybody&apos;s talking about
            </p>
            <h2 className="mt-3 font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
              Stories from around the squares, golf carts, and back gates.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {featuredStories.map((story) => (
              <ImportedStoryCard key={story.id} item={story} />
            ))}
          </div>
        </section>

        {/* ── Latest stories ──────────────────────────────────────────── */}
        <section className="space-y-8">
          <div>
            <p className="text-[11px] font-extrabold uppercase tracking-[0.34em] text-[var(--color-coral)]">
              Latest from Village Socialite
            </p>
            <h2 className="mt-3 font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
              Fresh stories, videos, and local coverage.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {latestPosts.map((story) => (
              <ImportedStoryCard key={story.id} item={story} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--color-teal)]/40 bg-white px-7 py-3.5 text-sm font-bold text-[var(--color-sea)] shadow-sm transition hover:border-[var(--color-teal)] hover:text-[var(--color-teal)]"
            >
              See all stories <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        {/* ── Golf cart life banner ────────────────────────────────────── */}
        <section className="grid gap-8 overflow-hidden rounded-[2.5rem] border-2 border-[var(--color-line)] bg-white p-7 shadow-[0_20px_60px_rgba(5,20,25,0.06)] sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem]">
            <Image
              src="/reference-selected/golf-cart-ride-from-sumter-landing-to-brownwood-paddock-square-in-the-villages-florida.jpg"
              alt="Golf cart life in The Villages, Florida"
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-5">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[var(--color-teal)]">
              Golf Cart Life
            </p>
            <h2 className="font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
              The only place in Florida where golf carts are a lifestyle.
            </h2>
            <div className="space-y-3">
              {[
                "750+ miles of multi-modal paths connecting every corner of The Villages.",
                "Our Best Golf Carts guide helps you find the perfect ride for your life here.",
                "Reviews, trails, buying guides, and the most talked-about custom carts.",
              ].map((item) => (
                <div key={item} className="rounded-[1.2rem] border-2 border-[var(--color-line)] bg-[var(--color-paper)] px-5 py-4 text-sm leading-7 text-[var(--color-ink-soft)]">
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="/best-golf-carts-the-villages"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-teal)] px-7 py-3.5 text-base font-extrabold text-white shadow-[0_6px_20px_rgba(0,175,197,0.35)] transition hover:-translate-y-0.5"
            >
              Best Golf Carts Guide <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
