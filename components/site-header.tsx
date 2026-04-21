"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[var(--color-sea)]/20 bg-[var(--background)]/96 shadow-[0_2px_16px_rgba(13,28,37,0.08)] backdrop-blur-xl">
      {/* ── Top bar: logo + CTA ─────────────────────────────────────── */}
      <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3 group">
          <Image
            src="/reference-selected/cropped-20251201_2104_Village-Socialite-Martini_simple_compose_01kbekm22mfjetcmbba22q6tsy-1.png"
            alt="Village Socialite logo"
            width={52}
            height={52}
            className="rounded-2xl border-2 border-[var(--color-sea)]/30 bg-white shadow-sm transition group-hover:shadow-md"
            priority
          />
          <div>
            <p className="font-[family:var(--font-cormorant)] text-[1.6rem] font-semibold leading-none text-[var(--color-ink)]">
              Village Socialite
            </p>
            <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--color-sea)]">
              Watch. Explore. Belong.
            </p>
          </div>
        </Link>

        <div className="ml-auto flex items-center gap-3">
          <Link
            href="/join-the-socialite"
            className="hidden rounded-full bg-[var(--color-coral)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_4px_14px_rgba(201,97,46,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(201,97,46,0.40)] lg:inline-flex"
          >
            Join The Socialite
          </Link>

          {/* Mobile hamburger */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--color-line)] bg-white text-[var(--color-ink)] shadow-sm transition hover:border-[var(--color-sea)] hover:text-[var(--color-sea)] lg:hidden"
          >
            {menuOpen ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Desktop nav strip ────────────────────────────────────────── */}
      <nav
        aria-label="Main navigation"
        className="hidden border-t-2 border-[var(--color-sea)]/15 bg-[var(--color-ink)] lg:block"
      >
        <div className="mx-auto flex w-full max-w-7xl items-center gap-0.5 overflow-x-auto px-4 py-1.5 sm:px-6">
          {primaryNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "whitespace-nowrap rounded-lg px-4 py-2.5 text-[0.875rem] font-bold transition-all duration-150",
                  active
                    ? "bg-white text-[var(--color-ink)] shadow-sm"
                    : item.highlight
                    ? "bg-[var(--color-coral)] text-white shadow-[0_4px_12px_rgba(201,97,46,0.4)] hover:bg-white hover:text-[var(--color-ink)]"
                    : "text-white/85 hover:bg-white hover:text-[var(--color-ink)] hover:shadow-sm",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* ── Mobile menu ─────────────────────────────────────────────── */}
      {menuOpen && (
        <div className="border-t-2 border-[var(--color-line)] bg-[var(--background)] shadow-[0_8px_30px_rgba(13,28,37,0.12)] lg:hidden">
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8"
          >
            {primaryNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    "rounded-xl px-5 py-4 text-lg font-bold transition",
                    active
                      ? "bg-[var(--color-ink)] text-white"
                      : item.highlight
                      ? "bg-[var(--color-coral)] text-white"
                      : "text-[var(--color-ink)] hover:bg-[var(--color-sea)]/12 hover:text-[var(--color-sea)]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-3 border-t-2 border-[var(--color-line)] pt-4">
              <Link
                href="/join-the-socialite"
                onClick={() => setMenuOpen(false)}
                className="block w-full rounded-full bg-[var(--color-coral)] px-6 py-4 text-center text-lg font-bold text-white shadow-[0_4px_14px_rgba(201,97,46,0.35)] transition hover:brightness-105"
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
