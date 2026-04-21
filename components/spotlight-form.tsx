"use client";

import Link from "next/link";

const checkboxOptions = [
  "I live in The Villages, Florida",
  "I want to move to The Villages",
  "I’m growing a business or brand here",
];

export function SpotlightForm() {
  return (
    <section className="overflow-hidden rounded-[2.3rem] border border-[#8ee3f0]/55 bg-white shadow-[0_24px_70px_rgba(43,163,191,0.14)]">
      <div className="bg-[linear-gradient(135deg,#48b8d9,#6ce7d7)] px-6 py-12 sm:px-10 sm:py-14">
        <div className="mx-auto max-w-3xl text-center text-white">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-white/80">
            Free to join — no credit card
          </p>
          <h2 className="mt-4 font-[family:var(--font-cormorant)] text-5xl font-semibold sm:text-6xl">
            Join The Socialite
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-9 text-white/90">
            Get free weekly updates on what&apos;s happening in The Villages — events, restaurants, live music, real estate, golf carts, and the stories everyone&apos;s talking about.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-5 py-10 sm:px-8">
        <form
          className="space-y-5 rounded-[2rem] bg-[var(--color-paper)] p-6 shadow-[0_20px_60px_rgba(18,27,33,0.06)] sm:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-2">
            <label
              htmlFor="spotlight-name"
              className="block text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-ink)]"
            >
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              id="spotlight-name"
              type="text"
              autoComplete="name"
              className="w-full rounded-[1rem] border border-[#d9e6ea] bg-white px-5 py-4 text-lg outline-none focus:border-[var(--color-sea)]"
              placeholder="First and last name"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="spotlight-email"
              className="block text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-ink)]"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="spotlight-email"
              type="email"
              autoComplete="email"
              className="w-full rounded-[1rem] border border-[#d9e6ea] bg-white px-5 py-4 text-lg outline-none focus:border-[var(--color-sea)]"
              placeholder="your@email.com"
            />
          </div>

          <div className="space-y-3 rounded-[1rem] border border-[var(--color-line)] bg-white p-5">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-ink)]">
              What brings you here?
            </p>
            {checkboxOptions.map((option) => (
              <label key={option} className="flex cursor-pointer items-center gap-3 text-base text-[var(--color-ink)]">
                <input type="checkbox" className="h-6 w-6 accent-[#1d6573] shrink-0" />
                {option}
              </label>
            ))}
          </div>

          <label className="flex cursor-pointer items-start gap-3 text-base leading-7 text-[var(--color-ink-soft)]">
            <input type="checkbox" className="mt-1 h-6 w-6 shrink-0 accent-[#1d6573]" />
            <span>
              I agree to receive emails and texts from Village Socialite with updates, offers, and event news.{" "}
              <Link href="/privacy-policy" className="text-[var(--color-sea)] underline underline-offset-2">
                Privacy Policy
              </Link>
            </span>
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-[linear-gradient(90deg,#4cb7df,#6fe6d6)] px-6 py-5 text-lg font-extrabold uppercase tracking-[0.24em] text-white shadow-[0_18px_45px_rgba(76,183,223,0.22)] transition hover:-translate-y-0.5"
          >
            Subscribe — Free
          </button>
          <p className="text-center text-sm text-[var(--color-ink-soft)]">
            Free forever. No spam. Unsubscribe anytime.
          </p>
        </form>
      </div>
    </section>
  );
}
