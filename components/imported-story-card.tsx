import Image from "next/image";
import Link from "next/link";
import { decodeHtmlEntities, excerptText } from "@/lib/content-format";
import { shouldPreserveImageText } from "@/lib/image-fit";
import { getCategoryNames, getPrimaryImage, type WordpressItem } from "@/lib/wordpress";

export function ImportedStoryCard({ item }: { item: WordpressItem }) {
  const primaryCategory = decodeHtmlEntities(
    getCategoryNames(item.categories)[0]?.name ?? (item.type === "page" ? "Page" : "Story"),
  );
  const title = decodeHtmlEntities(item.title);
  const image = getPrimaryImage(item);
  const preserveImageText = shouldPreserveImageText(image);
  const isVideoPost = item.type === "post";

  return (
    <article className="group overflow-hidden rounded-[1.25rem] border border-[var(--color-line)] bg-white shadow-[0_14px_34px_rgba(18,27,33,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(18,27,33,0.08)]">
      <Link href={`/${item.slug}`} className="block">
        <div className={`relative aspect-square overflow-hidden ${preserveImageText ? "bg-[var(--color-paper)]" : ""}`}>
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1280px) 22vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            className={
              preserveImageText
                ? "object-contain p-2 transition duration-500"
                : "object-cover transition duration-500 group-hover:scale-105"
            }
          />
          {!preserveImageText ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <div className="absolute left-3 top-3 rounded-full bg-white/88 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)]">
                {primaryCategory}
              </div>
            </>
          ) : null}
          {isVideoPost ? (
            <div className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/45 bg-white/92 text-[var(--color-ink)] shadow-[0_8px_22px_rgba(0,0,0,0.2)] transition duration-300 group-hover:scale-105 group-hover:bg-[var(--color-gold)]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="ml-0.5">
                <path d="M7 4.8v14.4L18.4 12 7 4.8z" fill="currentColor" />
              </svg>
            </div>
          ) : null}
        </div>
        <div className="space-y-3 p-4">
          {preserveImageText ? (
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-teal-deep)]">
              {primaryCategory}
            </p>
          ) : null}
          <h3 className="text-lg font-extrabold leading-tight text-[var(--color-ink)]">{title}</h3>
          <p className="line-clamp-3 text-xs leading-6 text-[var(--color-ink-soft)]">{excerptText(item.excerpt || item.content)}</p>
          <span className="inline-flex items-center gap-2 text-xs font-extrabold text-[var(--color-ink)] transition group-hover:gap-3">
            {isVideoPost ? "Watch now" : "Read more"}
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
