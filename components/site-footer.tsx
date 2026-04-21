import Link from "next/link";
import { navLinks } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-ink)]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-[11px] uppercase tracking-[0.32em] text-[var(--color-seafoam)]">
            Village Socialite
          </p>
          <h2 className="max-w-xl font-[family:var(--font-cormorant)] text-4xl font-semibold text-white">
            Stories, culture, and local discovery for the most talked-about corners of The Villages.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-[var(--color-mist)]">
            Village Socialite brings together the places, people, moments, and conversations shaping daily life across the community.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold text-white">Navigate</p>
            <div className="space-y-3">
              {navLinks.map((item) => (
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
            <p className="mb-4 text-sm font-semibold text-white">Highlights</p>
            <div className="space-y-3 text-sm text-[var(--color-mist)]">
              <p>Featured stories and local guides.</p>
              <p>Community culture and where to go next.</p>
              <p>Business spotlights and partnership opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
