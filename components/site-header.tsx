"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Video Categories" },
  { href: "/best-golf-carts-the-villages", label: "Best Golf Carts" },
  { href: "/join-the-socialite", label: "Join The Socialite", highlight: true },
  { href: "/merch", label: "Merch" },
  { href: "/fat-pig-society-cbd", label: "Organic CBD" },
  { href: "/tags", label: "Tags" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#5dc9ff]/30 bg-[rgba(248,243,234,0.96)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <Image
            src="/reference-selected/cropped-20251201_2104_Village-Socialite-Martini_simple_compose_01kbekm22mfjetcmbba22q6tsy-1.png"
            alt="Village Socialite logo"
            width={50}
            height={50}
            className="rounded-2xl border border-[#8ce9dc]/50 bg-white/90"
            priority
          />
          <div>
            <p className="font-[family:var(--font-cormorant)] text-2xl font-semibold leading-none text-[var(--color-ink)]">
              Village Socialite
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.28em] text-[var(--color-sea)]">
              Watch. Explore. Belong.
            </p>
          </div>
        </Link>

        <div className="ml-auto flex items-center gap-3">
          <Link
            href="/join-the-socialite"
            className="hidden rounded-full border border-[var(--color-gold)]/50 bg-[var(--color-gold)] px-5 py-2.5 text-sm font-bold text-[var(--color-ink)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(233,193,120,0.35)] lg:inline-flex"
          >
            Join The Socialite
          </Link>

          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-line)] bg-white/70 text-[var(--color-ink)] transition hover:bg-white lg:hidden"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Desktop nav bar */}
      <div className="hidden border-t border-[#17a6ff]/25 bg-[linear-gradient(90deg,#57c8ee,#85e0c5,#d8e48a)] lg:block">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-1 overflow-x-auto px-5 py-2.5 sm:px-8">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold text-[var(--color-ink)] transition hover:-translate-y-0.5 hover:bg-white/55 ${
                item.highlight
                  ? "border border-[#1b74a5]/45 bg-white/35 shadow-[0_8px_20px_rgba(27,116,165,0.18)]"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-[var(--color-line)] bg-[rgba(248,243,234,0.98)] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-4 text-base font-bold text-[var(--color-ink)] transition hover:bg-[var(--color-seafoam)]/20 ${
                  item.highlight ? "text-[var(--color-sea)]" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 border-t border-[var(--color-line)] pt-4">
              <Link
                href="/join-the-socialite"
                onClick={() => setMenuOpen(false)}
                className="block w-full rounded-full bg-[var(--color-gold)] px-6 py-4 text-center text-base font-bold text-[var(--color-ink)] transition hover:brightness-105"
              >
                Join The Socialite — Free
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
