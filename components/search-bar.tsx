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
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search stories, guides, businesses, and local buzz..."
        className="h-12 w-full rounded-full border-2 border-[#17a6ff] bg-white px-5 text-sm text-[var(--color-ink)] shadow-[0_8px_30px_rgba(23,166,255,0.15)] outline-none placeholder:text-slate-400"
      />
      <button
        type="submit"
        className="flex h-12 min-w-12 items-center justify-center rounded-full border-2 border-[#17a6ff] bg-[#178fdb] px-4 text-white shadow-[0_8px_24px_rgba(23,143,219,0.28)] transition hover:scale-[1.03]"
        aria-label="Search"
      >
        <span className="text-lg">⌕</span>
      </button>
    </form>
  );
}
