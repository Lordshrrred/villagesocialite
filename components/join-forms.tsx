"use client";

import Link from "next/link";

export function JoinHeroEmailForm() {
  return (
    <div className="mx-auto flex max-w-md flex-col gap-3 pt-2">
      <input
        type="email"
        placeholder="Enter your email address"
        className="w-full rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-base text-white placeholder:text-white/45 outline-none focus:border-[#8ed8cb]/70 focus:bg-white/14"
      />
      <button
        type="button"
        className="w-full rounded-2xl bg-[#e9c178] px-6 py-4 text-base font-bold text-[#10202b] shadow-[0_18px_45px_rgba(233,193,120,0.22)] transition hover:-translate-y-0.5 hover:brightness-105"
      >
        Join The Socialite — Free
      </button>
      <p className="text-xs text-white/40">
        No spam. Unsubscribe anytime. We respect your privacy.
      </p>
    </div>
  );
}

const checkboxOptions = [
  "I currently live in The Villages, Florida",
  "I want to move to The Villages, Florida",
  "I have family or friends in The Villages",
  "I'm building a business, brand, or creative project",
];

export function JoinFullForm() {
  return (
    <form
      className="space-y-5"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="space-y-2">
        <label
          htmlFor="join-name"
          className="block text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#10202b]"
        >
          First and Last Name <span className="text-red-500">*</span>
        </label>
        <input
          id="join-name"
          type="text"
          className="w-full rounded-[1rem] border border-[#d9e6ea] bg-white px-5 py-4 text-base outline-none focus:border-[#1d6573]"
          placeholder="E.g. Mary Johnson"
          autoComplete="name"
        />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="join-email"
            className="block text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#10202b]"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="join-email"
            type="email"
            className="w-full rounded-[1rem] border border-[#d9e6ea] bg-white px-5 py-4 text-base outline-none focus:border-[#1d6573]"
            placeholder="E.g. mary@example.com"
            autoComplete="email"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="join-phone"
            className="block text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#10202b]"
          >
            Cell Phone
          </label>
          <input
            id="join-phone"
            type="tel"
            className="w-full rounded-[1rem] border border-[#d9e6ea] bg-white px-5 py-4 text-base outline-none focus:border-[#1d6573]"
            placeholder="E.g. (352) 555-0100"
            autoComplete="tel"
          />
        </div>
      </div>
      <div className="space-y-3 rounded-[1rem] border border-[rgba(16,32,43,0.08)] bg-[#fffaf2] p-5">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#10202b]">
          What brings you here?
        </p>
        {checkboxOptions.map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-3 text-base text-[#10202b]">
            <input type="checkbox" className="h-5 w-5 accent-[#1d6573] shrink-0" />
            {option}
          </label>
        ))}
      </div>
      <div className="space-y-3">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[#10202b]">
          Consent to receive emails and texts <span className="text-red-500">*</span>
        </p>
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-7 text-[#4d5d66]">
          <input type="checkbox" className="mt-1 h-5 w-5 shrink-0 accent-[#1d6573]" />
          I agree to receive promotional emails and text messages from Village Socialite, including special offers, event invitations, and community updates. You can unsubscribe at any time.
        </label>
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-[linear-gradient(90deg,#4cb7df,#6fe6d6)] px-6 py-5 text-base font-extrabold uppercase tracking-[0.24em] text-white shadow-[0_18px_45px_rgba(76,183,223,0.22)] transition hover:-translate-y-0.5"
      >
        Join The Socialite — Free
      </button>
      <p className="text-center text-xs text-[#4d5d66]">
        Free forever. No credit card needed. Unsubscribe at any time.
      </p>
    </form>
  );
}
