import Image from "next/image";
import Link from "next/link";
import { decodeHtmlEntities, excerptText } from "@/lib/content-format";
import { getCategoryNames, getPrimaryImage, type WordpressItem } from "@/lib/wordpress";

export function ImportedStoryCard({ item }: { item: WordpressItem }) {
  const primaryCategory = decodeHtmlEntities(
    getCategoryNames(item.categories)[0]?.name ?? (item.type === "page" ? "Page" : "Story"),
  );
  const title = decodeHtmlEntities(item.title);

  return (
    <article className="group overflow-hidden rounded-[1.25rem] border border-[var(--color-line)] bg-white shadow-[0_14px_34px_rgba(18,27,33,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(18,27,33,0.08)]">
      <Link href={`/${item.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={getPrimaryImage(item)}
            alt={title}
            fill
            sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          <div className="absolute left-3 top-3 rounded-full bg-white/88 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)]">
            {primaryCategory}
          </div>
        </div>
        <div className="space-y-3 p-4">
          <h3 className="text-lg font-extrabold leading-tight text-[var(--color-ink)]">{title}</h3>
          <p className="line-clamp-3 text-xs leading-6 text-[var(--color-ink-soft)]">{excerptText(item.excerpt || item.content)}</p>
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-[var(--color-ink)] transition group-hover:gap-3">
            Read more
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
