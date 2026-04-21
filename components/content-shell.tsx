import { ImportedStoryCard } from "@/components/imported-story-card";
import Image from "next/image";
import Link from "next/link";
import { LegacyContent } from "@/components/legacy-content";
import { decodeHtmlEntities, formatLongDate } from "@/lib/content-format";
import {
  getCategoryNames,
  getPrimaryImage,
  getRelatedPosts,
  getTagNames,
  type WordpressItem,
} from "@/lib/wordpress";

export function ContentShell({ item }: { item: WordpressItem }) {
  const categories = getCategoryNames(item.categories);
  const tags = getTagNames(item.tags).slice(0, 12);
  const relatedPosts = getRelatedPosts(item, 3);
  const title = decodeHtmlEntities(item.title);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
      <section className="grid gap-8 overflow-hidden rounded-[2.4rem] border border-white/10 bg-[var(--color-ink)] p-6 text-white shadow-[0_30px_90px_rgba(9,18,24,0.22)] sm:p-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-seafoam)]"
              >
                {category.name}
              </Link>
            ))}
          </div>
          <h1 className="font-[family:var(--font-cormorant)] text-5xl font-semibold leading-none sm:text-6xl">
            {title}
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-white/68">
            <span>{formatLongDate(item.date)}</span>
            <span>{item.type === "page" ? "Special page" : "Story archive"}</span>
            <span>Originally published on Village Socialite</span>
          </div>
        </div>
        <div className="relative min-h-[280px] overflow-hidden rounded-[1.8rem]">
          <Image
            src={getPrimaryImage(item)}
            alt={title}
            fill
            sizes="(min-width: 1024px) 32vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.74fr_0.26fr]">
        <article className="rounded-[2rem] border border-[var(--color-line)] bg-white p-6 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-10">
          <LegacyContent html={item.content} />
        </article>
        <aside className="space-y-6">
          <div className="rounded-[1.6rem] border border-[var(--color-line)] bg-[var(--color-paper)] p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-coral)]">
              Village Socialite
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">
              Real local coverage from inside The Villages, Florida — stories, videos, and community moments you won&apos;t find anywhere else.
            </p>
          </div>
          {tags.length > 0 ? (
            <div className="rounded-[1.6rem] border border-[var(--color-line)] bg-white p-6">
              <p className="mb-4 text-sm font-semibold text-[var(--color-ink)]">Related tags</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Link
                    key={tag.id}
                    href={`/tag/${tag.slug}`}
                    className="rounded-full border border-[var(--color-line)] px-3 py-1 text-xs font-medium text-[var(--color-ink-soft)] transition hover:border-[var(--color-sea)] hover:text-[var(--color-ink)]"
                  >
                    {tag.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </aside>
      </section>

      {relatedPosts.length > 0 ? (
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-coral)]">
              Keep exploring
            </p>
            <h2 className="font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)]">
              More from Village Socialite
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {relatedPosts.map((post) => (
              <ImportedStoryCard key={post.id} item={post} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
