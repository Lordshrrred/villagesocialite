import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { BlogPromoAd } from "@/components/blog-promo-ad";
import { ImportedStoryCard } from "@/components/imported-story-card";
import { SectionHeading } from "@/components/section-heading";
import { SeoBlogCard } from "@/components/seo-blog-card";
import { getSeoBlogPosts, seoBlogCategories } from "@/lib/seo-blog";
import { getAllPostsSorted } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "The Villages Florida Blog | Village Socialite",
  description:
    "SEO-rich Village Socialite guides covering moving to The Villages, restaurants, golf carts, events, real estate, dating, wellness, clubs, and local services.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const seoPosts = getSeoBlogPosts();
  const archivePosts = getAllPostsSorted().slice(0, 12);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 py-10 sm:px-8 sm:py-14">
      <section className="overflow-hidden rounded-[2.4rem] bg-[linear-gradient(135deg,#051419,#004d63_50%,#00afc5)] p-8 text-white shadow-[0_30px_90px_rgba(5,20,25,0.22)] sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <SectionHeading
            eyebrow="Village Socialite blog"
            title="The SEO-rich guidebook for life in The Villages, Florida."
            description="Fresh search-focused guides for residents, future residents, visitors, businesses, and anyone trying to understand what makes The Villages move."
            light
          />
          <div className="rounded-[1.6rem] border border-white/12 bg-white/10 p-6 backdrop-blur">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-[var(--color-seafoam)]">
              Built around search intent
            </p>
            <p className="mt-3 text-4xl font-semibold">{seoPosts.length}</p>
            <p className="mt-2 text-sm leading-7 text-white/75">
              New SEO guides across moving, restaurants, golf carts, events, real estate, wellness, clubs, dating, local services, and visitor planning.
            </p>
            <Link
              href="/join-the-socialite"
              className="mt-5 inline-flex rounded-full bg-[var(--color-gold)] px-5 py-3 text-sm font-extrabold text-[var(--color-ink)] transition hover:-translate-y-0.5"
            >
              Join The Socialite →
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="SEO categories"
            title="Start with the keyword lane that matters."
            description="Each category is built around common search behavior for The Villages community and the practical decisions people are trying to make."
          />
          <Link
            href="/search"
            className="shrink-0 rounded-full border-2 border-[var(--color-teal)]/25 bg-white px-5 py-3 text-sm font-extrabold text-[var(--color-sea)] transition hover:-translate-y-0.5 hover:border-[var(--color-teal)]"
          >
            Search the site →
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {seoBlogCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/blog/category/${category.slug}`}
              className="rounded-[1.5rem] border border-[var(--color-line)] bg-white p-5 shadow-[0_18px_45px_rgba(5,20,25,0.04)] transition hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(5,20,25,0.08)]"
            >
              <span
                className="mb-4 block h-1.5 w-14 rounded-full"
                style={{ backgroundColor: category.color }}
              />
              <h3 className="text-lg font-extrabold text-[var(--color-ink)]">{category.name}</h3>
              <p className="mt-3 text-xs leading-6 text-[var(--color-ink-soft)]">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="100 SEO guides"
          title="Search-focused articles with Village Socialite energy."
          description="The ad placements are intentionally spaced between posts so the chair, handset, and merch offers stay visible without making the blog feel cluttered."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {seoPosts.map((post, index) => (
            <Fragment key={post.slug}>
              <SeoBlogCard post={post} />
              {(index + 1) % 8 === 0 ? (
                <BlogPromoAd index={Math.floor(index / 8)} />
              ) : null}
            </Fragment>
          ))}
        </div>
      </section>

      <BlogPromoAd index={2} variant="wide" />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Original archive"
          title="Keep the original Village Socialite posts in the mix."
          description="The new SEO guides sit alongside the existing archive, so the site gains search reach without burying the work that was already there."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {archivePosts.map((post) => (
            <ImportedStoryCard key={post.id} item={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
