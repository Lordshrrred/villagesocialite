import Link from "next/link";

export function NewsletterPanel() {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(9,43,54,1),rgba(20,83,92,0.92),rgba(234,127,87,0.88))] p-8 text-white shadow-[0_30px_80px_rgba(10,24,33,0.25)] sm:p-10">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70">
            Stay in the loop
          </p>
          <h2 className="font-[family:var(--font-cormorant)] text-4xl font-semibold sm:text-5xl">
            Get the best of Village Socialite delivered first.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-white/78">
            New features, local finds, standout stories, and the moments people will be talking about next.
          </p>
        </div>
        <div className="rounded-[1.5rem] bg-white/10 p-5 backdrop-blur">
          <label className="mb-3 block text-sm font-medium text-white/80" htmlFor="email">
            Join the launch list
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@domain.com"
            className="mb-4 w-full rounded-full border border-white/18 bg-white/92 px-5 py-3 text-sm text-[var(--color-ink)] outline-none placeholder:text-slate-500"
          />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-[var(--color-gold)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5"
            >
              Request early access
            </Link>
            <p className="self-center text-xs leading-6 text-white/68">
              Editorial updates, featured stories, and local highlights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
