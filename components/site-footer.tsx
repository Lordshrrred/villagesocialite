"use client";

import Image from "next/image";
import Link from "next/link";

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Video Categories" },
  { href: "/explore", label: "Explore All Content" },
  { href: "/tags", label: "Browse by Tags" },
  { href: "/blog", label: "Blog Archive" },
  { href: "/featured", label: "Featured Stories" },
  { href: "/search", label: "Search" },
];

const offerLinks = [
  { href: "/join-the-socialite", label: "Join The Socialite" },
  { href: "/merch", label: "Official Merch" },
  { href: "/best-golf-carts-the-villages", label: "Best Golf Carts" },
  { href: "/fat-pig-society-cbd", label: "Organic CBD" },
  { href: "/home-spa-relaxation-favorites", label: "Home Spa Favorites" },
  { href: "/contact-village-socialite", label: "Contact Us" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
  { href: "/dmca", label: "DMCA" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-ink)]">

      {/* ── Facebook follow strip ──────────────────────────────────── */}
      <div style={{ background: "linear-gradient(90deg, #003546 0%, #005a78 45%, #00afc5 100%)" }}>
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-5 px-5 py-6 sm:flex-row sm:px-8">
          <a
            href="https://www.facebook.com/profile.php?id=61586012620132"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 transition hover:opacity-85"
          >
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
              <Image
                src="https://villagesocialite.com/wp-content/uploads/2026/03/followvillagesocialiteonfacebook.jpg"
                alt="Follow Village Socialite on Facebook"
                fill
                className="object-cover object-top"
                sizes="56px"
              />
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-[#22e8d4]">Follow Us on Facebook</p>
              <p className="mt-0.5 text-base font-semibold text-white">Village Socialite — Stay in the loop, live.</p>
            </div>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61586012620132"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-extrabold text-white shadow-[0_6px_20px_rgba(24,119,242,0.5)] transition hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #1877F2, #145dbf)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
            </svg>
            Follow Village Socialite →
          </a>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8">
        {/* Brand block + newsletter */}
        <div className="mb-12 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/reference-selected/cropped-20251201_2104_Village-Socialite-Martini_simple_compose_01kbekm22mfjetcmbba22q6tsy-1.png"
                alt="Village Socialite logo"
                width={44}
                height={44}
                className="rounded-xl border border-white/15 bg-white/10"
              />
              <p className="font-[family:var(--font-cormorant)] text-2xl font-semibold text-white">
                Village Socialite
              </p>
            </Link>
            <p className="max-w-xl text-sm leading-7 text-[var(--color-mist)]">
              The all-access pass to what&apos;s happening in The Villages, Florida. Videos, events, dining, golf carts, dating, real estate, live music, and the people who make it all worth watching.
            </p>
            <p className="text-xs text-white/35">
              © {new Date().getFullYear()} Village Socialite. All rights reserved.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-seafoam)]">
              Stay in the loop
            </p>
            <p className="mt-2 text-base font-semibold text-white">
              Get weekly Village updates, free.
            </p>
            <form className="mt-4 flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-xl border border-white/15 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-[var(--color-seafoam)]/60"
              />
              <button
                type="submit"
                className="rounded-xl bg-[var(--color-gold)] px-4 py-3 text-sm font-bold text-[var(--color-ink)] transition hover:brightness-105"
              >
                Join The Socialite — Free
              </button>
            </form>
          </div>
        </div>

        {/* Nav columns */}
        <div className="grid gap-8 border-t border-white/8 pt-10 sm:grid-cols-3">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-white/50">Explore</p>
            <div className="space-y-2.5">
              {exploreLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-[var(--color-mist)] transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-white/50">Offers & Pages</p>
            <div className="space-y-2.5">
              {offerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-[var(--color-mist)] transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-white/50">Legal</p>
            <div className="space-y-2.5">
              {legalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-[var(--color-mist)] transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 space-y-2.5">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-white/50">Categories</p>
              {[
                { href: "/category/events-the-villages", label: "Events" },
                { href: "/category/dating-the-villages", label: "Dating" },
                { href: "/category/live-music-the-villages", label: "Live Music" },
                { href: "/category/real-estate-the-villages", label: "Real Estate" },
                { href: "/category/golf-cart-life-the-villages", label: "Golf Cart Life" },
                { href: "/category/food-dining-the-villages", label: "Food & Dining" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-[var(--color-mist)] transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
