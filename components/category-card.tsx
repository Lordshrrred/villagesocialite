import Image from "next/image";
import Link from "next/link";
import { decodeHtmlEntities } from "@/lib/content-format";
import type { Category } from "@/lib/site-data";

export function CategoryCard({ category }: { category: Category }) {
  const name = decodeHtmlEntities(category.name);
  const description = decodeHtmlEntities(category.description);

  return (
    <Link
      href={category.href}
      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border-2 border-[var(--color-line)] bg-white shadow-[0_8px_30px_rgba(5,20,25,0.06)] transition hover:-translate-y-1 hover:border-[var(--color-teal)] hover:shadow-[0_20px_50px_rgba(0,175,197,0.15)]"
    >
      {/* Thumbnail */}
      <div className="relative h-44 w-full shrink-0 overflow-hidden bg-[var(--color-paper)]">
        {category.image ? (
          <Image
            src={category.image}
            alt={name}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-5xl">
            {category.emoji ?? "📍"}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <span className="absolute bottom-3 left-4 rounded-full border border-white/25 bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] text-white backdrop-blur-sm">
          {category.countLabel}
        </span>
      </div>

      {/* Text */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-[family:var(--font-cormorant)] text-2xl font-semibold leading-tight text-[var(--color-ink)]">
          {name}
        </h3>
        <p className="text-sm leading-7 text-[var(--color-ink-soft)]">{description}</p>
        <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[var(--color-teal)] transition group-hover:gap-3">
          Explore the lane <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
