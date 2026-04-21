import type { Metadata } from "next";
import { FeaturedStoryCard } from "@/components/featured-story-card";
import { SectionHeading } from "@/components/section-heading";
import { featuredCollections, featuredStories } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Featured",
  description:
    "A curated look at how featured stories, guides, and spotlight content can live on the new Village Socialite.",
};

export default function FeaturedPage() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
      <section className="rounded-[2.3rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-12">
        <SectionHeading
          eyebrow="Featured"
          title="The homepage can spotlight what matters without turning into a pile of tiles."
          description="This page gives the presentation a dedicated place for hero stories, signature lanes, and launch-ready editorial framing."
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {featuredStories.map((story) => (
          <FeaturedStoryCard key={story.title} story={story} />
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {featuredCollections.map((collection) => (
          <article
            key={collection.title}
            className="rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-paper)] p-6"
          >
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-sea)]">
              Launch module
            </p>
            <h3 className="text-2xl font-semibold text-[var(--color-ink)]">{collection.title}</h3>
            <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">{collection.text}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
