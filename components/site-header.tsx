"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { SearchBar } from "@/components/search-bar";

const mainNav = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Video Categories" },
  { href: "/join-the-socialite", label: "Join The Socialite" },
  { href: "/merch", label: "Merch" },
  { href: "/fat-pig-society-cbd", label: "Organic CBD" },
  { href: "/best-golf-carts-the-villages", label: "Best Golf Carts" },
];

const mobileNav = mainNav;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItemClass = (href: string) => {
    const active = pathname === href;
    if (active)
      return "nav-item-hover whitespace-nowrap rounded-full px-5 py-2 text-[0.85rem] font-extrabold bg-white text-[var(--color-teal-deep)] shadow-[0_2px_12px_rgba(0,0,0,0.15)]";
    return "nav-item-hover whitespace-nowrap rounded-full px-5 py-2 text-[0.85rem] font-bold text-white/90 hover:bg-white/20 hover:text-white hover:shadow-[0_2px_14px_rgba(255,255,255,0.15)] transition-all duration-200 hover:scale-[1.04]";
  };

  return (
    <header className="sticky top-0 z-50">
      {/* ── Top bar ─────────────────────────────────────────────────── */}
      <div className="border-b border-[var(--color-teal)]/20 bg-[var(--background)]/97 shadow-[0_1px_16px_rgba(5,20,25,0.09)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-6 px-5 py-3 sm:px-8 sm:py-4">

          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-4 group">
            <div className="relative">
              <Image
                src="/reference-selected/cropped-20251201_2104_Village-Socialite-Martini_simple_compose_01kbekm22mfjetcmbba22q6tsy-1.png"
                alt="Village Socialite"
                width={72}
                height={72}
                className="drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                priority
              />
              {/* Sparkle 1 — top-right of logo */}
              <svg
                className="sparkle absolute -top-1 -right-1 pointer-events-none"
                width="12" height="12" viewBox="0 0 12 12" fill="none"
                aria-hidden="true"
              >
                <path d="M6 0 C6 3.5 8.5 6 12 6 C8.5 6 6 8.5 6 12 C6 8.5 3.5 6 0 6 C3.5 6 6 3.5 6 0Z"
                  fill="#00afc5" />
              </svg>
            </div>

            <div className="hidden sm:block relative">
              {/* Sparkle 2 — floats top-right of wordmark */}
              <svg
                className="sparkle-2 absolute -top-2 right-0 pointer-events-none"
                width="9" height="9" viewBox="0 0 12 12" fill="none"
                aria-hidden="true"
              >
                <path d="M6 0 C6 3.5 8.5 6 12 6 C8.5 6 6 8.5 6 12 C6 8.5 3.5 6 0 6 C3.5 6 6 3.5 6 0Z"
                  fill="#22e8d4" />
              </svg>
              {/* Sparkle 3 — bottom-left accent */}
              <svg
                className="sparkle-3 absolute -bottom-1 -left-1 pointer-events-none"
                width="7" height="7" viewBox="0 0 12 12" fill="none"
                aria-hidden="true"
              >
                <path d="M6 0 C6 3.5 8.5 6 12 6 C8.5 6 6 8.5 6 12 C6 8.5 3.5 6 0 6 C3.5 6 6 3.5 6 0Z"
                  fill="#00afc5" opacity="0.7" />
              </svg>

              <p className="font-[family:var(--font-cormorant)] text-[2.1rem] font-semibold leading-none tracking-tight text-[var(--color-ink)]">
                Village Socialite
              </p>
              <p className="mt-1.5 text-[11px] font-extrabold uppercase tracking-[0.38em] text-[var(--color-teal)]">
                Watch. Explore. Belong.
              </p>
            </div>
          </Link>

          {/* Search bar — desktop, more breathing room */}
          <div className="hidden flex-1 lg:block px-2">
            <SearchBar />
          </div>

          {/* Join CTA — desktop only */}
          <Link
            href="/join-the-socialite"
            className="hidden shrink-0 rounded-full bg-[var(--color-teal-deep)] px-6 py-3 text-sm font-extrabold text-white shadow-[0_4px_16px_rgba(0,77,99,0.40)] transition hover:-translate-y-0.5 hover:bg-[var(--color-teal)] hover:shadow-[0_8px_24px_rgba(0,175,197,0.45)] lg:inline-flex"
          >
            Join The Socialite
          </Link>

          {/* Mobile hamburger */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
            className="ml-auto flex h-11 w-11 items-center justify-center rounded-full border-2 border-[var(--color-teal)]/30 bg-white text-[var(--color-ink)] shadow-sm transition hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] lg:hidden"
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

      {/* ── Nav strip — teal/cyan gradient, centered, VC far right ──── */}
      <nav
        aria-label="Main navigation"
        className="hidden lg:block"
        style={{ background: "linear-gradient(90deg, #004d63 0%, #007a96 20%, #00afc5 50%, #00d4e0 78%, #22e8d4 100%)" }}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-4 py-1.5 sm:px-6">
          <div className="flex items-center justify-center gap-0.5">
            {mainNav.map((item) => (
              <Link key={item.href} href={item.href} className={navItemClass(item.href)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Mobile menu ─────────────────────────────────────────────── */}
      {menuOpen && (
        <div
          className="lg:hidden shadow-[0_8px_40px_rgba(5,20,25,0.14)]"
          style={{ background: "linear-gradient(180deg, #004d63, #007a96)" }}
        >
          <div className="mx-auto px-5 py-4 sm:px-8">
            {/* Mobile search */}
            <div className="mb-4">
              <SearchBar />
            </div>
            <nav className="flex flex-col gap-1">
              {mobileNav.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={[
                      "rounded-xl px-5 py-4 text-lg font-bold transition",
                      active
                        ? "bg-white text-[var(--color-teal-deep)]"
                        : "text-white/90 hover:bg-white/15",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-4 pt-4 border-t border-white/15">
              <Link
                href="/join-the-socialite"
                onClick={() => setMenuOpen(false)}
                className="block w-full rounded-full bg-[var(--color-teal-deep)] px-6 py-4 text-center text-lg font-extrabold text-white shadow-[0_4px_16px_rgba(0,77,99,0.35)] transition hover:bg-[var(--color-teal)] hover:brightness-105"
              >
                Join The Socialite — Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
