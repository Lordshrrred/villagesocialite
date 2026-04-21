import Image from "next/image";
import Link from "next/link";
import { decodeHtmlEntities, excerptText } from "@/lib/content-format";
import { getPrimaryImage, type WordpressItem } from "@/lib/wordpress";

export function OfferCard({ item }: { item: WordpressItem }) {
  const title = decodeHtmlEntities(item.title);

  return (
    <article className="grid overflow-hidden rounded-[1.8rem] border border-[var(--color-line)] bg-white shadow-[0_20px_60px_rgba(18,27,33,0.05)] md:grid-cols-[0.42fr_0.58fr]">
      <div className="relative min-h-[220px]">
        <Image
          src={getPrimaryImage(item)}
          alt={title}
          fill
          sizes="(min-width: 768px) 20vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="space-y-4 p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-coral)]">
          Spotlight offer
        </p>
        <h3 className="text-2xl font-semibold leading-tight text-[var(--color-ink)]">{title}</h3>
        <p className="text-sm leading-7 text-[var(--color-ink-soft)]">{excerptText(item.excerpt || item.content, 220)}</p>
        <Link
          href={`/${item.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)] transition hover:gap-3"
        >
          Open page
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
