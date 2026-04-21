import Image from "next/image";
import Link from "next/link";
import { SearchBar } from "@/components/search-bar";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#5dc9ff]/30 bg-[rgba(248,243,234,0.92)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-5 px-5 py-4 sm:px-8">
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
        <div className="hidden flex-1 lg:block">
          <SearchBar />
        </div>
        <Link
          href="/join-the-socialite"
          className="hidden rounded-full border border-[var(--color-gold)]/50 bg-[var(--color-gold)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(233,193,120,0.35)] lg:inline-flex"
        >
          Launch With Us
        </Link>
      </div>
      <div className="border-t border-[#17a6ff]/25 bg-[linear-gradient(90deg,#57c8ee,#85e0c5,#d8e48a)]">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-4 overflow-x-auto px-5 py-3 sm:px-8">
          {[
            { href: "/", label: "Home" },
            { href: "/categories", label: "Video Categories" },
            { href: "/join-the-socialite", label: "Join The Socialite" },
            { href: "/merch", label: "Merch" },
            { href: "/fat-pig-society-cbd", label: "Organic CBD" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-extrabold text-[var(--color-ink)] transition hover:-translate-y-0.5 hover:bg-white/55 ${
                item.href === "/join-the-socialite" ? "border border-[#1b74a5]/45 bg-white/35 shadow-[0_8px_20px_rgba(27,116,165,0.18)]" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
