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
      <section className="relative overflow-hidden" style={{ minHeight: "clamp(520px, 72vh, 800px)" }}>
        {/* Background image */}
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
        {/* Gradient — heavier on left for text, fades right so image breathes */}
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(5,20,25,0.85)_0%,rgba(5,20,25,0.62)_38%,rgba(5,20,25,0.22)_65%,rgba(5,20,25,0.04)_100%)]" />
        {/* Subtle bottom fade so bottom content reads cleanly */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[rgba(5,20,25,0.55)] to-transparent" />

        {/* ══ MOBILE layout (hidden on desktop) ══════════════════════════ */}
        <div className="relative flex h-full flex-col justify-center px-6 pb-12 pt-20 lg:hidden">
          <div className="max-w-lg space-y-6 text-white">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.38em] leading-6 text-[var(--color-cyan)]">
              The Villages, Florida<br />All-Access Pass
            </p>
            <h1
              className="font-[family:var(--font-cormorant)] font-semibold text-white"
              style={{ fontSize: "clamp(2.6rem, 10vw, 3.4rem)", lineHeight: 1.08 }}
            >
              Watch The Villages<br />Come To Life.
            </h1>
            <p className="text-base leading-8 text-white/85">
              Nightlife, golf, live music, dining, real estate, and the moments that make The Villages unlike anywhere else.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/categories"
                className="rounded-full bg-[var(--color-teal)] px-7 py-3.5 text-base font-extrabold text-white shadow-[0_6px_24px_rgba(0,175,197,0.5)] transition active:scale-95"
              >
                Browse Categories
              </Link>
              <Link
                href="/join-the-socialite"
                className="rounded-full border-2 border-white/35 bg-white/12 px-7 py-3.5 text-base font-bold text-white backdrop-blur-sm transition active:scale-95"
              >
                Join The Socialite
              </Link>
            </div>
            <div className="flex flex-wrap gap-5 border-t border-white/15 pt-4">
              {[
                { href: "/categories", label: "▶ Start Watching" },
                { href: "/best-golf-carts-the-villages", label: "🛺 Best Golf Carts" },
                { href: "/join-the-socialite", label: "✦ Join Us" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="text-sm font-bold text-white/70 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ══ DESKTOP layout (hidden on mobile) ══════════════════════════ */}
        <div className="hidden lg:block">
          {/* TOP: eyebrow + big heading */}
          <div className="absolute left-0 right-0 top-14 px-14">
            <div className="mx-auto max-w-7xl">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.38em] text-[var(--color-cyan)]">
                The Villages, Florida — All-Access Pass
              </p>
              <h1
                className="mt-4 font-[family:var(--font-cormorant)] font-semibold text-white"
                style={{ fontSize: "clamp(3.6rem, 7.5vw, 8.5rem)", lineHeight: 1.02 }}
              >
                Watch The Villages<br />Come To Life.
              </h1>
            </div>
          </div>
          {/* BOTTOM: description + buttons + quick links */}
          <div className="absolute bottom-14 left-0 right-0 px-14">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-2xl space-y-5 text-white">
                <p className="text-xl leading-8 text-white/88">
                  Nightlife, golf, live music, dining, real estate, and the moments that make The Villages unlike anywhere else.
                </p>
                <div className="flex flex-wrap gap-3">
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
                <div className="flex flex-wrap gap-5 border-t border-white/15 pt-4">
                  {[
                    { href: "/categories", label: "▶ Start Watching" },
                    { href: "/best-golf-carts-the-villages", label: "🛺 Best Golf Carts" },
                    { href: "/join-the-socialite", label: "✦ Join Us" },
                  ].map((item) => (
                    <Link key={item.href} href={item.href} className="text-sm font-bold text-white/70 transition hover:text-white">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
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

        {/* ── Facebook follow banner ──────────────────────────────────── */}
        <section className="relative overflow-hidden rounded-[2.5rem] shadow-[0_24px_80px_rgba(0,77,99,0.28)]"
          style={{ background: "linear-gradient(120deg, #003546 0%, #005a78 40%, #007a96 70%, #00afc5 100%)" }}
        >
          {/* Decorative glow blobs */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #22e8d4 0%, transparent 70%)" }} />
          <div className="pointer-events-none absolute -bottom-16 left-10 h-56 w-56 rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #00d4e0 0%, transparent 70%)" }} />

          <div className="relative flex flex-col items-center gap-10 px-8 py-12 lg:flex-row lg:items-stretch lg:gap-0 lg:px-0 lg:py-0">

            {/* Left — copy */}
            <div className="flex flex-1 flex-col justify-center gap-6 text-white lg:px-14 lg:py-14">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-white/15 px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.32em] text-[#22e8d4] ring-1 ring-white/20">
                  Active on Facebook
                </span>
                {/* Live pulse dot */}
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22e8d4] opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22e8d4]" />
                </span>
              </div>

              <h2
                className="font-[family:var(--font-cormorant)] font-semibold leading-[1.04] text-white"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}
              >
                See what&apos;s happening<br />
                <span style={{ color: "#22e8d4" }}>right now</span> in The Villages.
              </h2>

              <p className="max-w-md text-base leading-8 text-white/80">
                We go live at the town squares, cover events as they unfold, and give you a front-row seat to Village life — before you ever set foot here.
              </p>

              <ul className="space-y-2 text-sm font-medium text-white/70">
                {[
                  "🎬  Live video from the squares & events",
                  "🏡  Real estate, new neighborhoods & community news",
                  "💬  Real talk from people who actually live there",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <a
                href="https://www.facebook.com/profile.php?id=61586012620132"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-2 inline-flex w-fit items-center gap-3 rounded-full px-8 py-4 text-base font-extrabold text-white shadow-[0_8px_32px_rgba(24,119,242,0.55)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_44px_rgba(24,119,242,0.7)]"
                style={{ background: "linear-gradient(135deg, #1877F2 0%, #145dbf 100%)" }}
              >
                {/* Facebook icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
                Follow Village Socialite
                <span className="transition group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </a>
            </div>

            {/* Right — image */}
            <div className="relative w-full shrink-0 lg:w-[42%]">
              <div className="relative h-72 w-full overflow-hidden lg:h-full lg:min-h-[420px]">
                <Image
                  src="https://villagesocialite.com/wp-content/uploads/2026/03/followvillagesocialiteonfacebook.jpg"
                  alt="Follow Village Socialite on Facebook"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                {/* Left edge fade so it blends into the copy side */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#003546]/80 via-[#003546]/20 to-transparent lg:block hidden" />
                {/* Bottom fade on mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#003546]/70 via-transparent to-transparent lg:hidden" />

                {/* Facebook badge */}
                <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                  style={{ background: "#1877F2" }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                    <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                </div>
              </div>
            </div>

          </div>
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
