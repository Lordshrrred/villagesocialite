import Image from "next/image";
import Link from "next/link";
import { excerptText } from "@/lib/content-format";
import { getCategoryNames, getPrimaryImage, type WordpressItem } from "@/lib/wordpress";

export function ImportedStoryCard({ item }: { item: WordpressItem }) {
  const primaryCategory = getCategoryNames(item.categories)[0]?.name ?? (item.type === "page" ? "Page" : "Story");

  return (
    <article className="group overflow-hidden rounded-[1.8rem] border border-[var(--color-line)] bg-white shadow-[0_24px_60px_rgba(18,27,33,0.06)]">
      <Link href={`/${item.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={getPrimaryImage(item)}
            alt={item.title}
            fill
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          <div className="absolute left-5 top-5 rounded-full bg-white/88 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-ink)]">
            {primaryCategory}
          </div>
        </div>
        <div className="space-y-4 p-6">
          <h3 className="text-2xl font-semibold leading-tight text-[var(--color-ink)]">{item.title}</h3>
          <p className="text-sm leading-7 text-[var(--color-ink-soft)]">{excerptText(item.excerpt || item.content)}</p>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)] transition group-hover:gap-3">
            Read more
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
