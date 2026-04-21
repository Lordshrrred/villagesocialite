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

export default function JoinTheSocialitePage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-5 py-10 sm:px-8 sm:py-14">

      {/* Hero */}
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[var(--color-ink)] px-6 py-14 text-center text-white shadow-[0_30px_90px_rgba(9,18,24,0.28)] sm:px-10 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(234,127,87,0.25),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(70,132,150,0.3),transparent_30%),linear-gradient(135deg,rgba(10,19,25,0.95),rgba(8,44,56,0.88),rgba(8,22,31,0.95))]" />
        <div className="relative mx-auto max-w-3xl space-y-6">
          <Image
            src="/reference-selected/cropped-20251201_2104_Village-Socialite-Martini_simple_compose_01kbekm22mfjetcmbba22q6tsy-1.png"
            alt="Village Socialite"
            width={72}
            height={72}
            className="mx-auto rounded-2xl border border-white/15 bg-white/10"
          />
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[var(--color-gold)]">
            Free to join
          </p>
          <h1 className="font-[family:var(--font-cormorant)] text-5xl font-semibold leading-none sm:text-6xl lg:text-7xl">
            Join The Socialite
          </h1>
          <p className="text-xl leading-9 text-white/82">
            Get the inside look at life in The Villages, Florida. Weekly stories, events, restaurant finds, golf cart life, real estate, and community moments — straight to your inbox.
          </p>
          <JoinHeroEmailForm />
        </div>
      </section>

      {/* What you get */}
      <section className="space-y-8">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-coral)]">
            What you get
          </p>
          <h2 className="mt-3 font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
            Everything worth knowing about life in The Villages.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--color-ink-soft)]">
            Village Socialite brings together the real stories, local finds, and community moments that make The Villages the most interesting retirement community in America.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-[1.8rem] border border-[var(--color-line)] bg-white p-6 shadow-[0_20px_50px_rgba(18,27,33,0.05)]"
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

      {/* Full sign-up form */}
      <section className="overflow-hidden rounded-[2.3rem] border border-[#8ee3f0]/55 bg-white shadow-[0_24px_70px_rgba(43,163,191,0.14)]">
        <div className="bg-[linear-gradient(135deg,#48b8d9,#6ce7d7)] px-6 py-10 text-center text-white sm:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/80">
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

      {/* Social proof + back to explore */}
      <section className="grid gap-6 rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-paper)] p-8 sm:p-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-coral)]">
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
            { href: "/explore", label: "Explore All Content" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between rounded-2xl border border-[var(--color-line)] bg-white px-5 py-4 text-base font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-sea)] hover:text-[var(--color-sea)]"
            >
              {link.label}
              <span aria-hidden="true" className="text-[var(--color-sea)]">→</span>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
