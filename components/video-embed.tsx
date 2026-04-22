import Image from "next/image";
import { decodeHtmlEntities } from "@/lib/content-format";
import { getVideoTarget } from "@/lib/video-links";
import { getPrimaryImage, type WordpressItem } from "@/lib/wordpress";

export function VideoEmbed({
  item,
  image,
  priority = false,
}: {
  item: WordpressItem;
  image?: string;
  priority?: boolean;
}) {
  const target = getVideoTarget(item);
  if (!target) return null;

  const title = decodeHtmlEntities(item.title);

  if (target.kind === "embed" && target.id) {
    return (
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${target.id}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    );
  }

  return (
    <a
      href={target.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/video relative block aspect-video w-full overflow-hidden bg-[var(--color-ink)]"
      aria-label={`Watch ${title} on YouTube`}
    >
      <Image
        src={image ?? getPrimaryImage(item)}
        alt={title}
        fill
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="object-cover transition duration-700 group-hover/video:scale-[1.035]"
        priority={priority}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-black/8" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/35 bg-white/92 text-[var(--color-ink)] shadow-[0_18px_46px_rgba(0,0,0,0.34)] transition duration-300 group-hover/video:scale-105 group-hover/video:bg-[var(--color-gold)]">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="ml-1">
            <path d="M7 4.8v14.4L18.4 12 7 4.8z" fill="currentColor" />
          </svg>
        </span>
      </div>
      <span className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-black/45 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-white backdrop-blur-sm transition group-hover/video:bg-black/62">
        Watch on YouTube
      </span>
    </a>
  );
}
