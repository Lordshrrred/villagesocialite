import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[color:rgba(13,20,28,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/reference-selected/cropped-20251201_2104_Village-Socialite-Martini_simple_compose_01kbekm22mfjetcmbba22q6tsy-1.png"
            alt="Village Socialite logo"
            width={44}
            height={44}
            className="rounded-2xl border border-white/12 bg-white/8"
            priority
          />
          <div>
            <p className="font-[family:var(--font-cormorant)] text-2xl font-semibold leading-none text-white">
              Village Socialite
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.28em] text-[var(--color-mist)]">
              Watch. Explore. Belong.
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-mist)] transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-full border border-[var(--color-gold)]/50 bg-[var(--color-gold)] px-4 py-2 text-sm font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(233,193,120,0.35)]"
        >
          Launch With Us
        </Link>
      </div>
    </header>
  );
}
