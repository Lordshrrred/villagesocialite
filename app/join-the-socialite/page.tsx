import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JoinHeroEmailForm, JoinFullForm } from "@/components/join-forms";

export const metadata: Metadata = {
  title: "Join The Socialite | Inside Life in The Villages Florida",
  description:
    "Get free weekly updates, local stories, event highlights, and exclusive Village Socialite content straight to your inbox. Join thousands of Village residents and fans.",
  alternates: {
    canonical: "/join-the-socialite",
  },
};

const benefits = [
  {
    emoji: "📬",
    title: "Weekly Village updates",
    description: "Fresh stories, events, videos, and local highlights delivered to your inbox every week.",
  },
  {
    emoji: "🎸",
    title: "Live music & event alerts",
    description: "Be the first to know what's happening at the town squares, venues, and community events.",
  },
  {
    emoji: "🛺",
    title: "Golf cart life coverage",
    description: "The best carts, trails, tips, and community rides — curated for Village life.",
  },
  {
    emoji: "🏡",
    title: "Real estate & moving guides",
    description: "Market updates, neighborhood insights, and real talk about life in The Villages.",
  },
  {
    emoji: "🍽️",
    title: "Dining & restaurant finds",
    description: "New spots, honest reviews, and the local favorites your neighbors are talking about.",
  },
  {
    emoji: "💛",
    title: "Dating, social clubs & community",
    description: "Singles life, social circles, community culture, and connection stories from inside The Villages.",
  },
];

const growthEngine = [
  { icon: "🎙️", title: "Podcast Spotlight", desc: "Get featured in Village Socialite podcast episodes reaching thousands of engaged locals." },
  { icon: "📣", title: "Brand Exposure", desc: "Targeted visibility across our content network — exactly where the right eyes are." },
  { icon: "🤝", title: "Power Networking", desc: "Connect with business owners, creators, and movers inside one of Florida's fastest-growing communities." },
  { icon: "💰", title: "Profit from Passion", desc: "Turn local influence into income through affiliate partnerships and community promotions." },
];

const socialStandard = [
  { icon: "✈️", title: "Curated Trips", desc: "Exclusive group travel and excursions designed for the Village lifestyle." },
  { icon: "🎉", title: "Elite Events", desc: "Private events, VIP access, and invitation-only socials across The Villages." },
  { icon: "🎥", title: "Media Access", desc: "First look at new video content, behind-the-scenes coverage, and community stories." },
  { icon: "😄", title: "Fun First", desc: "Because life in The Villages is the best — and we make sure you never miss a moment of it." },
];

export default function JoinTheSocialitePage() {
  return (
    <div className="flex flex-col">

      {/* ── Sunset hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: "clamp(520px, 72vh, 780px)" }}>
        <div className="absolute inset-0">
          <Image
            src="https://i0.wp.com/villagesocialite.com/wp-content/uploads/2025/12/sunset-8946901_640.jpg"
            alt="Sunset in The Villages, Florida"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        {/* Deep gradient so text pops — heavier at bottom */}
        <div className="absolute inset-0 bg-[linear-gradient(170deg,rgba(5,20,25,0.72)_0%,rgba(5,20,25,0.82)_55%,rgba(5,20,25,0.94)_100%)]" />

        <div className="relative mx-auto flex h-full w-full max-w-4xl flex-col items-center justify-center px-6 py-20 text-center text-white sm:px-10">
          <Image
            src="/reference-selected/cropped-20251201_2104_Village-Socialite-Martini_simple_compose_01kbekm22mfjetcmbba22q6tsy-1.png"
            alt="Village Socialite"
            width={68}
            height={68}
            className="mb-6 drop-shadow-lg"
          />
          {/* Broadcasts badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/50 bg-[var(--color-gold)]/15 px-5 py-2 text-sm font-bold text-[var(--color-gold)] backdrop-blur-sm">
            <span>📡</span>
            <span>Broadcasts &amp; Events Starting Late 2026</span>
          </div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.38em] text-[var(--color-cyan)]">
            Free to join
          </p>
          <h1 className="mt-4 font-[family:var(--font-cormorant)] text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-[5.5rem]">
            <span className="shimmer-text">The Socialite</span>
          </h1>
          <p className="mt-2 font-[family:var(--font-cormorant)] text-2xl font-medium text-white/80 sm:text-3xl">
            Your all-access pass to life in The Villages.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-9 text-white/80">
            Weekly stories, events, restaurant finds, golf cart life, real estate, and community moments — straight to your inbox. Free forever.
          </p>
          <div className="mt-8 w-full max-w-md">
            <JoinHeroEmailForm />
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-5 py-14 sm:px-8">

        {/* ── Everything Worth Knowing ─────────────────────────────── */}
        <section className="space-y-8">
          <div className="text-center">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.34em] text-[var(--color-coral)]">
              What you get
            </p>
            <h2 className="mt-3 font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
              Everything worth knowing about&nbsp;life in&nbsp;The&nbsp;Villages.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--color-ink-soft)]">
              Village Socialite brings together the real stories, local finds, and community moments that make The Villages the most interesting retirement community in America.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="benefit-glow rounded-[1.8rem] border-2 border-[var(--color-line)] bg-white p-6 shadow-[0_20px_50px_rgba(18,27,33,0.05)]"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-paper)] text-3xl">
                  {benefit.emoji}
                </div>
                <h3 className="text-lg font-bold text-[var(--color-ink)]">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[var(--color-ink-soft)]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Two-track cards: Growth Engine + Social Standard ─────── */}
        <section className="grid gap-8 lg:grid-cols-2">

          {/* Growth Engine */}
          <div className="overflow-hidden rounded-[2.2rem] border-2 border-[var(--color-line)] bg-white shadow-[0_20px_60px_rgba(5,20,25,0.07)]">
            <div className="bg-[linear-gradient(135deg,var(--color-teal-deep),var(--color-teal))] px-7 py-8 text-white">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[var(--color-cyan)]">
                For builders &amp; creators
              </p>
              <h2 className="mt-2 font-[family:var(--font-cormorant)] text-3xl font-semibold sm:text-4xl">
                The Growth Engine
              </h2>
              <p className="mt-2 text-sm leading-7 text-white/80">
                Turn your passion for Village life into real reach, real connections, and real opportunity.
              </p>
            </div>
            <div className="grid gap-4 p-7">
              {growthEngine.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-[1.2rem] border border-[var(--color-line)] bg-[var(--color-paper)] p-4">
                  <span className="mt-0.5 text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-bold text-[var(--color-ink)]">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-[var(--color-ink-soft)]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Standard */}
          <div className="overflow-hidden rounded-[2.2rem] border-2 border-[var(--color-line)] bg-white shadow-[0_20px_60px_rgba(5,20,25,0.07)]">
            <div className="bg-[linear-gradient(135deg,#6b21a8,#a855f7)] px-7 py-8 text-white">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-purple-200">
                For lifestyle &amp; social
              </p>
              <h2 className="mt-2 font-[family:var(--font-cormorant)] text-3xl font-semibold sm:text-4xl">
                The Social Standard
              </h2>
              <p className="mt-2 text-sm leading-7 text-white/80">
                Exclusive access to the events, trips, and moments that define the Village lifestyle at its best.
              </p>
            </div>
            <div className="grid gap-4 p-7">
              {socialStandard.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-[1.2rem] border border-[var(--color-line)] bg-[var(--color-paper)] p-4">
                  <span className="mt-0.5 text-2xl">{item.icon}</span>
                  <div>
                    <p className="font-bold text-[var(--color-ink)]">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-[var(--color-ink-soft)]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Full sign-up form ─────────────────────────────────────── */}
        <section className="overflow-hidden rounded-[2.3rem] border-2 border-[var(--color-teal)]/25 bg-white shadow-[0_24px_70px_rgba(0,175,197,0.12)]">
          <div
            className="px-6 py-10 text-center text-white sm:px-10"
            style={{ background: "linear-gradient(135deg, #004d63 0%, #00afc5 60%, #00d4e0 100%)" }}
          >
            <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[var(--color-cyan)]">
              Free membership
            </p>
            <h2 className="mt-3 font-[family:var(--font-cormorant)] text-4xl font-semibold sm:text-5xl">
              Get Your All-Access Pass
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-white/88">
              Whether you live in The Villages, you&apos;re thinking about moving, or you just love following the action — this is your front-door invite.
            </p>
          </div>
          <div className="mx-auto max-w-2xl px-5 py-10 sm:px-8">
            <JoinFullForm />
          </div>
        </section>

        {/* ── Explore links ─────────────────────────────────────────── */}
        <section className="grid gap-6 rounded-[2rem] border-2 border-[var(--color-line)] bg-[var(--color-paper)] p-8 sm:p-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[var(--color-coral)]">
              Already a member?
            </p>
            <h2 className="font-[family:var(--font-cormorant)] text-3xl font-semibold text-[var(--color-ink)] sm:text-4xl">
              Keep exploring everything Village Socialite has to offer.
            </h2>
            <p className="text-base leading-8 text-[var(--color-ink-soft)]">
              From live music coverage to real estate market updates, golf cart guides, and local restaurant reviews — there&apos;s always something new to discover.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              { href: "/categories", label: "Browse Video Categories" },
              { href: "/best-golf-carts-the-villages", label: "Best Golf Carts Guide" },
              { href: "/merch", label: "Shop Village Socialite Merch" },
              { href: "/blog", label: "Explore All Stories" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between rounded-2xl border-2 border-[var(--color-line)] bg-white px-5 py-4 text-base font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-teal)] hover:text-[var(--color-teal)]"
              >
                {link.label}
                <span aria-hidden="true" className="text-[var(--color-teal)]">→</span>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
