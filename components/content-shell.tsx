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

type ContentShellProps = {
  item: WordpressItem;
  heroImage?: string;
  heroImageFit?: "cover" | "contain";
};

export function ContentShell({ item, heroImage, heroImageFit = "cover" }: ContentShellProps) {
  const categories = getCategoryNames(item.categories);
  const tags = getTagNames(item.tags).slice(0, 18);
  const relatedPosts = getRelatedPosts(item, 3);
  const title = decodeHtmlEntities(item.title);
  const heroSrc = heroImage ?? getPrimaryImage(item);
  const containHero = heroImageFit === "contain";

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">

      {/* ── Hero header ─────────────────────────────────────────────── */}
      <header className="overflow-hidden rounded-[2.4rem] border border-white/10 bg-[var(--color-ink)] text-white shadow-[0_30px_90px_rgba(9,18,24,0.22)]">
        {/* Hero image — full width */}
        <div className={`relative h-56 w-full sm:h-72 lg:h-80 ${containHero ? "bg-[linear-gradient(135deg,#f8fcf6,#eaf6ef)]" : ""}`}>
          <Image
            src={heroSrc}
            alt={title}
            fill
            sizes="(min-width: 1024px) 60vw, 100vw"
            className={containHero ? "object-contain p-6 sm:p-8" : "object-cover"}
            priority
          />
          {!containHero ? <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" /> : null}
        </div>

        {/* Text block below image, inside same dark card */}
        <div className="space-y-5 p-6 sm:p-10">
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.slug}`}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-seafoam)] transition hover:bg-white/18"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          )}
          <h1 className="font-[family:var(--font-cormorant)] text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/55">
            <span>{formatLongDate(item.date)}</span>
            <span>·</span>
            <span>Village Socialite</span>
          </div>
        </div>
      </header>

      {/* ── Article ─────────────────────────────────────────────────── */}
      <article className="rounded-[2rem] border border-[var(--color-line)] bg-white p-6 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-10 lg:p-14">
        <LegacyContent html={item.content} />
      </article>

      {/* ── Tags ────────────────────────────────────────────────────── */}
      {tags.length > 0 && (
        <section className="rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-paper)] p-6 sm:p-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-ink-soft)]">
            Related topics
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link
                key={tag.id}
                href={`/tag/${tag.slug}`}
                className="rounded-full border border-[var(--color-line)] bg-white px-4 py-2 text-sm font-medium text-[var(--color-ink-soft)] transition hover:border-[var(--color-sea)] hover:text-[var(--color-ink)]"
              >
                {tag.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Join CTA ────────────────────────────────────────────────── */}
      <section className="grid gap-6 overflow-hidden rounded-[2rem] border border-[var(--color-line)] bg-[var(--color-ink)] p-6 text-white sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-seafoam)]">
            Stay in the loop
          </p>
          <h2 className="font-[family:var(--font-cormorant)] text-3xl font-semibold leading-tight sm:text-4xl">
            Get weekly Village updates, free.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-white/72">
            Events, dining, real estate, golf carts, live music, and the stories everyone in The Villages is talking about.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/join-the-socialite"
            className="rounded-full bg-[var(--color-gold)] px-7 py-3.5 text-base font-bold text-[var(--color-ink)] transition hover:-translate-y-0.5"
          >
            Join The Socialite — Free
          </Link>
          <Link
            href="/categories"
            className="rounded-full border border-white/20 bg-white/8 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/14"
          >
            Browse Videos
          </Link>
        </div>
      </section>

      {/* ── Related posts ───────────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section className="space-y-8">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-coral)]">
              Keep exploring
            </p>
            <h2 className="font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)]">
              More from Village Socialite
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((post) => (
              <ImportedStoryCard key={post.id} item={post} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
