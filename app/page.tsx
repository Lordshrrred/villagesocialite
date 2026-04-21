import Image from "next/image";
import Link from "next/link";
import { ImportedStoryCard } from "@/components/imported-story-card";
import { SpotlightForm } from "@/components/spotlight-form";
import {
  getFeaturedMigrationStories,
  getLatestPosts,
  getCategoryBySlug,
  getItemsForCategory,
  getPrimaryImage,
} from "@/lib/wordpress";
import { decodeHtmlEntities } from "@/lib/content-format";

const featuredCategories = [
  { slug: "events-the-villages",        label: "Events",          icon: "🎉" },
  { slug: "live-music-the-villages",    label: "Live Music",      icon: "🎸" },
  { slug: "food-dining-the-villages",   label: "Food & Dining",   icon: "🍽️" },
  { slug: "dating-the-villages",        label: "Dating",          icon: "💛" },
  { slug: "golf-cart-life-the-villages",label: "Golf Cart Life",  icon: "🛺" },
  { slug: "real-estate-the-villages",   label: "Real Estate",     icon: "🏡" },
  { slug: "nightlife-the-villages",     label: "Nightlife",       icon: "🍸" },
  { slug: "golfing-the-villages",       label: "Golfing",         icon: "⛳" },
];

export default function Home() {
  const featuredStories = getFeaturedMigrationStories();
  const latestPosts = getLatestPosts(6);

  const petsCategory = getCategoryBySlug("pets-animals-the-villages");
  const nightlifeCategory = getCategoryBySlug("nightlife-the-villages");
  const petsPosts = petsCategory ? getItemsForCategory(petsCategory.id).slice(0, 4) : [];
  const nightlifePosts = nightlifeCategory ? getItemsForCategory(nightlifeCategory.id).slice(0, 4) : [];

  return (
    <div className="flex flex-col">

      {/* ── Full-bleed cinematic hero ────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "clamp(520px, 72vh, 800px)" }}>
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
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(5,20,25,0.85)_0%,rgba(5,20,25,0.62)_38%,rgba(5,20,25,0.22)_65%,rgba(5,20,25,0.04)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[rgba(5,20,25,0.55)] to-transparent" />

        {/* MOBILE */}
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
              <Link href="/categories" className="rounded-full bg-[var(--color-teal)] px-7 py-3.5 text-base font-extrabold text-white shadow-[0_6px_24px_rgba(0,175,197,0.5)] transition active:scale-95">
                Browse Categories
              </Link>
              <Link href="/join-the-socialite" className="rounded-full border-2 border-white/35 bg-white/12 px-7 py-3.5 text-base font-bold text-white backdrop-blur-sm transition active:scale-95">
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

        {/* DESKTOP */}
        <div className="hidden lg:block">
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
          <div className="absolute bottom-14 left-0 right-0 px-14">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-2xl space-y-5 text-white">
                <p className="text-xl leading-8 text-white/88">
                  Nightlife, golf, live music, dining, real estate, and the moments that make The Villages unlike anywhere else.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/categories" className="rounded-full bg-[var(--color-teal)] px-8 py-4 text-base font-extrabold text-white shadow-[0_6px_24px_rgba(0,175,197,0.5)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(0,175,197,0.55)]">
                    Browse Categories
                  </Link>
                  <Link href="/join-the-socialite" className="rounded-full border-2 border-white/35 bg-white/12 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:bg-white/22">
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

        {/* ── Master Connector ────────────────────────────────────────── */}
        <section className="overflow-hidden rounded-[2.2rem] border-2 border-[var(--color-line)] bg-white shadow-[0_20px_60px_rgba(5,20,25,0.07)]">
          <div className="flex flex-col items-center gap-6 p-8 sm:p-10 lg:flex-row lg:gap-10">

            {/* Circle image */}
            <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-[var(--color-line)] shadow-[0_8px_32px_rgba(0,175,197,0.2)] sm:h-40 sm:w-40">
              <Image
                src="https://villagesocialite.com/wp-content/uploads/2026/03/followvillagesocialiteonfacebook.jpg"
                alt="Village Socialite community"
                fill
                className="object-cover object-center"
                sizes="160px"
              />
            </div>

            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.34em] text-[var(--color-teal)]">
                The Master Connector
              </p>
              <h2 className="mt-2 font-[family:var(--font-cormorant)] text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl">
                Socially Connected.{" "}
                <span style={{ color: "#e05a8a" }}>Business Driven.</span>
              </h2>
              <p className="mt-3 max-w-md text-base leading-7 text-[var(--color-ink-soft)]">
                The premier platform for Villagers to showcase talents, promote their business, and profit from their passions — while having a blast.
              </p>
            </div>

            {/* Icons + CTA */}
            <div className="flex flex-col items-center gap-5 lg:items-end">
              <div className="flex gap-6">
                {[
                  { icon: "📣", label: "PROMOTE" },
                  { icon: "🎓", label: "LEARN" },
                  { icon: "💰", label: "PROFIT" },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1">
                    <span className="text-2xl">{icon}</span>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[var(--color-ink-soft)]">{label}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/join-the-socialite"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-teal-deep)] px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_6px_20px_rgba(0,77,99,0.35)] transition hover:-translate-y-0.5 hover:bg-[var(--color-teal)] hover:shadow-[0_10px_28px_rgba(0,175,197,0.4)] whitespace-nowrap"
              >
                Get Featured <span aria-hidden="true">→</span>
              </Link>
            </div>

          </div>
        </section>

        {/* ── Discover cards ──────────────────────────────────────────── */}
        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2.2rem] border-2 border-[var(--color-line)] bg-white px-8 py-10 shadow-[0_20px_50px_rgba(5,20,25,0.06)]">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-paper)] text-3xl">🎉</div>
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
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-paper)] text-3xl">🏡</div>
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
                Follow Village Socialite
                <span className="transition group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </a>
            </div>

            {/* Right — image (object-left so text is fully visible) */}
            <div className="relative w-full shrink-0 lg:w-[42%]">
              <div className="relative h-72 w-full overflow-hidden lg:h-full lg:min-h-[420px]">
                <Image
                  src="https://villagesocialite.com/wp-content/uploads/2026/03/followvillagesocialiteonfacebook.jpg"
                  alt="Follow Village Socialite on Facebook"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover object-left"
                />
                {/* Very light blend on the left edge only */}
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#005a78]/50 to-transparent hidden lg:block" />
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

        {/* ── Active Feed — See What's Happening Now ──────────────────── */}
        <section className="overflow-hidden rounded-[2.2rem] border-2 border-[var(--color-line)] bg-white shadow-[0_20px_60px_rgba(5,20,25,0.07)]">
          <div className="flex flex-col items-center gap-8 p-8 sm:p-10 lg:flex-row lg:gap-12">

            {/* Circle image with FB badge */}
            <div className="relative shrink-0">
              <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-[var(--color-line)] shadow-[0_12px_40px_rgba(0,0,0,0.12)] sm:h-52 sm:w-52">
                <Image
                  src="/reference-selected/lake-sumter-landing-the-villages-florida.jpg"
                  alt="The Villages Florida"
                  fill
                  className="object-cover"
                  sizes="208px"
                />
              </div>
              <div className="absolute bottom-2 right-2 flex h-11 w-11 items-center justify-center rounded-xl shadow-[0_4px_16px_rgba(24,119,242,0.5)]"
                style={{ background: "#1877F2" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-4 text-center lg:text-left">
              <span className="inline-block rounded-full border border-[#22c55e]/40 bg-[#f0fdf4] px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#16a34a]">
                Active Feed
              </span>
              <h2 className="font-[family:var(--font-cormorant)] text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl">
                See What&apos;s{" "}
                <span style={{ color: "#e05a8a" }}>Happening Now</span>
              </h2>
              <p className="max-w-lg text-base leading-8 text-[var(--color-ink-soft)]">
                We&apos;re just getting started! Follow us to get the newest videos, local event updates, and a front-row seat as we{" "}
                <strong className="font-bold text-[var(--color-ink)]">build the ultimate social feed</strong>{" "}
                for The Villages.
              </p>
              <a
                href="https://www.facebook.com/profile.php?id=61586012620132"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-extrabold text-white shadow-[0_6px_24px_rgba(24,119,242,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(24,119,242,0.6)]"
                style={{ background: "linear-gradient(135deg, #1877F2 0%, #145dbf 100%)" }}
              >
                Join the Conversation <span aria-hidden="true">→</span>
              </a>
            </div>

          </div>
        </section>

        {/* ── Heated Zero-Gravity Recliner ────────────────────────────── */}
        <section className="overflow-hidden rounded-[2.2rem] border-2 border-[var(--color-line)] bg-white shadow-[0_20px_60px_rgba(5,20,25,0.07)]">
          <div className="flex flex-col gap-8 p-8 sm:p-10 lg:flex-row lg:items-center lg:gap-12">

            {/* Left — copy */}
            <div className="flex-1 space-y-5">
              <span className="inline-block rounded-full px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.28em] text-white"
                style={{ background: "linear-gradient(135deg, #b5924c, #d4aa6a)" }}
              >
                Village Socialite Recommended
              </span>
              <h2 className="font-[family:var(--font-cormorant)] text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl">
                Weightless Comfort{" "}
                <span style={{ color: "#d4850a" }}>+ Soothing Heat</span>
              </h2>
              <p className="max-w-lg text-base leading-8 text-[var(--color-ink-soft)]">
                Experience true Zero-Gravity relaxation. This oversized recliner features built-in heat zones for your back and seat, designed to melt away pressure on your hips and spine. Perfect for sunrooms, patios, or your favorite reading nook.
              </p>
              <div className="flex flex-wrap gap-2">
                {["🔥 3 Heat Levels", "☁️ Zero-Gravity", "🏷️ XL Oversized", "💪 500lb Limit"].map((pill) => (
                  <span key={pill} className="rounded-full border border-[var(--color-line)] bg-[var(--color-paper)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)]">
                    {pill}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-6 pt-2">
                <div>
                  <p className="text-3xl font-extrabold text-[#d4850a]">$249.99</p>
                  <p className="mt-0.5 text-xs font-extrabold uppercase tracking-wider text-[#16a34a]">✓ Free Shipping</p>
                </div>
                <a
                  href="https://villagesocialite.com/heated-zero-gravity-recliner-chair-for-seniors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-extrabold text-white shadow-[0_8px_28px_rgba(212,133,10,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(212,133,10,0.6)]"
                  style={{ background: "linear-gradient(135deg, #e09520 0%, #c47d08 100%)" }}
                >
                  Buy on eBay <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Right — product image */}
            <div className="relative mx-auto h-64 w-64 shrink-0 overflow-hidden rounded-[1.8rem] shadow-[0_16px_48px_rgba(5,20,25,0.12)] sm:h-72 sm:w-72">
              <Image
                src="https://villagesocialite.com/wp-content/uploads/2026/01/20260108_1443_Image-Generation_remix_01kefnj2v7etqrd1z67vy6q4a5.jpg"
                alt="Heated Zero-Gravity Recliner"
                fill
                className="object-cover"
                sizes="288px"
              />
            </div>

          </div>
        </section>

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

        {/* ── Video Category Spotlights ────────────────────────────────── */}
        <section className="grid gap-6 lg:grid-cols-[1fr_auto_1fr]">

          {/* Left: Pets & Animals */}
          <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-6 shadow-[0_8px_32px_rgba(18,27,33,0.06)]">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-[var(--color-teal)] px-4 py-1.5 text-sm font-extrabold text-white shadow-[0_4px_14px_rgba(0,175,197,0.4)]">
                {petsCategory ? decodeHtmlEntities(petsCategory.name) : "Pets & Animals"}
              </span>
              {petsCategory && (
                <Link href={`/category/${petsCategory.slug}`} className="text-sm font-semibold text-[var(--color-teal)] hover:underline">
                  + More videos
                </Link>
              )}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {petsPosts.map((post) => (
                <Link key={post.id} href={`/${post.slug}`} className="group block">
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-[var(--color-paper)]">
                    <Image src={getPrimaryImage(post)} alt={post.title} fill className="object-cover transition duration-300 group-hover:scale-105" sizes="120px" />
                  </div>
                  <p className="mt-1.5 line-clamp-2 text-xs font-medium leading-snug text-[var(--color-ink)]">
                    {decodeHtmlEntities(post.title)}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Center: Facebook image */}
          <div className="flex items-stretch justify-center">
            <a
              href="https://www.facebook.com/profile.php?id=61586012620132"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full overflow-hidden rounded-[2rem] shadow-[0_8px_40px_rgba(18,27,33,0.18)] lg:w-[200px]"
            >
              <Image
                src="https://villagesocialite.com/wp-content/uploads/2026/03/followvillagesocialiteonfacebook.jpg"
                alt="Follow Village Socialite on Facebook"
                width={480}
                height={640}
                className="h-full w-full object-cover object-left transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                <span className="rounded-full px-5 py-2 text-sm font-extrabold text-white shadow-lg transition group-hover:brightness-110"
                  style={{ background: "#1877F2" }}
                >
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
                <Link href={`/category/${nightlifeCategory.slug}`} className="text-sm font-semibold text-[var(--color-teal)] hover:underline">
                  + More videos
                </Link>
              )}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {nightlifePosts.map((post) => (
                <Link key={post.id} href={`/${post.slug}`} className="group block">
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-[var(--color-paper)]">
                    <Image src={getPrimaryImage(post)} alt={post.title} fill className="object-cover transition duration-300 group-hover:scale-105" sizes="120px" />
                  </div>
                  <p className="mt-1.5 line-clamp-2 text-xs font-medium leading-snug text-[var(--color-ink)]">
                    {decodeHtmlEntities(post.title)}
                  </p>
                </Link>
              ))}
            </div>
          </div>

        </section>

        {/* ── Retro Handset ───────────────────────────────────────────── */}
        <section className="overflow-hidden rounded-[2.2rem] border-2 border-[var(--color-line)] bg-white shadow-[0_20px_60px_rgba(5,20,25,0.07)]">
          <div className="flex flex-col-reverse gap-8 p-8 sm:p-10 lg:flex-row lg:items-center lg:gap-12">

            {/* Left — product image */}
            <div className="relative mx-auto h-64 w-64 shrink-0 overflow-hidden rounded-[1.8rem] shadow-[0_16px_48px_rgba(5,20,25,0.12)] sm:h-72 sm:w-72">
              <Image
                src="https://villagesocialite.com/wp-content/uploads/2026/01/villagephonead1.jpg"
                alt="Retro Phone Handset for Smartphone"
                fill
                className="object-cover"
                sizes="288px"
              />
            </div>

            {/* Right — copy */}
            <div className="flex-1 space-y-5">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[var(--color-teal)]">
                Classic Comfort for Modern Phones
              </p>
              <h2 className="font-[family:var(--font-cormorant)] text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl">
                Stop the{" "}
                <span style={{ color: "#e05a8a" }}>Smartphone Neck Strain</span>
              </h2>
              <p className="max-w-lg text-base leading-8 text-[var(--color-ink-soft)]">
                Miss the feel of a real phone? Our Retro Handset brings back the ergonomic grip you love. No Bluetooth pairing, no charging — just plug into your iPhone or Android and talk for hours.
              </p>
              <div className="flex items-center gap-6 pt-2">
                <div>
                  <p className="text-3xl font-extrabold text-[var(--color-ink)]">$39.99</p>
                  <p className="mt-0.5 text-xs font-extrabold uppercase tracking-wider text-[#16a34a]">✓ Free Shipping</p>
                </div>
                <a
                  href="https://villagesocialite.com/usb-c-phone-handset-for-seniors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-teal-deep)] px-8 py-4 text-base font-extrabold text-white shadow-[0_8px_28px_rgba(0,77,99,0.4)] transition hover:-translate-y-0.5 hover:bg-[var(--color-teal)] hover:shadow-[0_12px_36px_rgba(0,175,197,0.5)]"
                >
                  Yes! Send Me Mine <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

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
