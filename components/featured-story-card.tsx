import Image from "next/image";
import Link from "next/link";
import type { Story } from "@/lib/site-data";

export function FeaturedStoryCard({ story }: { story: Story }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_24px_60px_rgba(18,27,33,0.08)]">
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image
          src={story.image}
          alt={story.title}
          fill
          sizes="(min-width: 1024px) 42vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
        <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
          {story.eyebrow}
        </div>
      </div>
      <div className="space-y-4 p-6 sm:p-7">
        <p className="text-sm font-semibold text-[var(--color-sea)]">{story.category}</p>
        <h3 className="text-2xl font-semibold leading-tight text-[var(--color-ink)]">
          {story.title}
        </h3>
        <p className="text-sm leading-7 text-[var(--color-ink-soft)]">{story.description}</p>
        <Link
          href={story.href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)] transition group-hover:gap-3"
        >
          View the featured direction
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
