"use client";

import Link from "next/link";
import { useDeferredValue, useState } from "react";

type TagItem = {
  id: number;
  slug: string;
  name: string;
  count: number;
};

export function TagCloud({ tags }: { tags: TagItem[] }) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const filtered = deferredQuery
    ? tags.filter((tag) => tag.name.toLowerCase().includes(deferredQuery))
    : tags;

  return (
    <div className="space-y-6">
      <div className="rounded-[1.5rem] border border-[var(--color-line)] bg-white p-5">
        <label htmlFor="tag-search" className="mb-3 block text-sm font-semibold text-[var(--color-ink)]">
          Search tags
        </label>
        <input
          id="tag-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by keyword"
          className="w-full rounded-full border border-[var(--color-line)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none"
        />
      </div>
      <div className="flex flex-wrap gap-3">
        {filtered.map((tag) => (
          <Link
            key={tag.id}
            href={`/tag/${tag.slug}`}
            className="rounded-full border border-[var(--color-line)] bg-white px-4 py-2 text-sm text-[var(--color-ink-soft)] transition hover:border-[var(--color-sea)] hover:text-[var(--color-ink)]"
          >
            {tag.name} <span className="text-[var(--color-coral)]">({tag.count})</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
