"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full items-center gap-2">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search stories, videos, restaurants, events..."
        className="h-11 w-full rounded-full border-2 border-[var(--color-teal)]/35 bg-white px-5 text-[0.9rem] text-[var(--color-ink)] shadow-sm outline-none placeholder:text-slate-400 focus:border-[var(--color-teal)] focus:shadow-[0_0_0_3px_rgba(0,175,197,0.15)] transition"
      />
      <button
        type="submit"
        aria-label="Search"
        className="flex h-11 min-w-11 items-center justify-center rounded-full bg-[var(--color-teal)] px-4 text-white shadow-[0_4px_14px_rgba(0,175,197,0.35)] transition hover:scale-105 hover:shadow-[0_6px_20px_rgba(0,175,197,0.45)]"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="2"/>
          <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </form>
  );
}
