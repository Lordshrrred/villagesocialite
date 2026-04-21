import Link from "next/link";
import { decodeHtmlEntities } from "@/lib/content-format";
import type { Category } from "@/lib/site-data";

export function CategoryCard({ category }: { category: Category }) {
  const name = decodeHtmlEntities(category.name);
  const description = decodeHtmlEntities(category.description);

  return (
    <Link
      href={category.href}
      className="group flex h-full flex-col justify-between rounded-[1.75rem] border border-[var(--color-line)] bg-[var(--color-paper)] p-6 transition hover:-translate-y-1 hover:border-[var(--color-sea)] hover:shadow-[0_20px_40px_rgba(18,27,33,0.08)]"
    >
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-sea)]">
          {category.countLabel}
        </p>
        <h3 className="text-2xl font-semibold text-[var(--color-ink)]">{name}</h3>
        <p className="text-sm leading-7 text-[var(--color-ink-soft)]">{description}</p>
      </div>
      <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)] transition group-hover:gap-3">
        Explore the lane
        <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
