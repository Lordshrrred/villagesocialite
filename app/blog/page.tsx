import type { Metadata } from "next";
import Link from "next/link";
import { ImportedStoryCard } from "@/components/imported-story-card";
import { SectionHeading } from "@/components/section-heading";
import { SeoBlogCard } from "@/components/seo-blog-card";
import { getSeoBlogPosts, seoBlogCategories } from "@/lib/seo-blog";
import { getAllPostsSorted } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "The Villages Florida Blog | Village Socialite",
  description:
    "Village Socialite guides covering moving to The Villages, restaurants, golf carts, events, real estate, dating, wellness, clubs, and local services.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const seoPosts = getSeoBlogPosts();
  const archivePosts = getAllPostsSorted().slice(0, 12);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 py-10 sm:px-8 sm:py-14">
      <section className="overflow-hidden rounded-[2.4rem] border border-white/20 bg-[radial-gradient(circle_at_12%_0%,rgba(0,216,240,0.26),transparent_32%),linear-gradient(135deg,#051419,#004d63_50%,#00afc5)] p-8 text-white shadow-[0_30px_90px_rgba(5,20,25,0.22)] sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <SectionHeading
            eyebrow="Village Socialite journal"
            title="The good stuff guide to life in The Villages, Florida."
            description="A sharper, more useful home for Villages living: what to do, where to go, how to move here, who to know, and the little local details that turn a search into a plan."
            light
          />
          <div className="rounded-[1.6rem] border border-white/20 bg-white/10 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-[var(--color-seafoam)]">
              Built for real Village discovery
            </p>
            <p className="mt-3 text-4xl font-semibold">{seoPosts.length}</p>
            <p className="mt-2 text-sm leading-7 text-white/75">
              Curated guides across moving, restaurants, golf carts, events, real estate, wellness, clubs, dating, local services, and visitor planning.
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
            eyebrow="Explore the lanes"
            title="Start where Village life is already happening."
            description="Every category keeps the original Socialite spirit, then organizes it into cleaner paths for residents, future residents, visitors, and local businesses."
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
              className="rounded-[1.5rem] border-2 border-white bg-[linear-gradient(180deg,#ffffff,#f7fcfd)] p-5 shadow-[0_18px_45px_rgba(5,20,25,0.05)] transition hover:-translate-y-1 hover:border-[var(--color-teal)]/35 hover:shadow-[0_22px_55px_rgba(0,175,197,0.13)]"
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
          eyebrow="100 Village guides"
          title="Answers people search for, written with Socialite flavor."
          description="Useful guides, local angles, and Socialite picks are spaced throughout the feed so the blog feels helpful, shoppable, and alive without becoming a cluttered dump."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {seoPosts.map((post) => (
            <SeoBlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Village Socialite stories"
          title="Local videos, offers, and stories still get the spotlight."
          description="The blog keeps the strongest Village Socialite coverage in the mix, including videos, offers, resident moments, restaurant finds, and the local texture that gives the site its personality."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {archivePosts.map((post) => (
            <ImportedStoryCard key={post.id} item={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
