import { CategoryCard } from "@/components/category-card";
import { ImportedStoryCard } from "@/components/imported-story-card";
import { SectionHeading } from "@/components/section-heading";
import { featuredCollections } from "@/lib/site-data";
import { getAllCategories, getLatestPosts } from "@/lib/wordpress";

export function ExplorePage() {
  const categories = getAllCategories()
    .sort((a, b) => b.count - a.count)
    .map((category) => ({
      name: category.name,
      description:
        category.description ||
        `Browse the preserved ${category.name.toLowerCase()} coverage from the original Village Socialite site.`,
      href: `/category/${category.slug}`,
      countLabel: `${category.count} archived stories`,
    }));
  const latestPosts = getLatestPosts(12);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-18 px-5 py-10 sm:px-8 sm:py-14">
      <section className="rounded-[2.4rem] border border-[var(--color-line)] bg-white px-6 py-8 shadow-[0_30px_80px_rgba(18,27,33,0.06)] sm:px-10 sm:py-12">
        <SectionHeading
          eyebrow="Explore the ecosystem"
          title="Editorial lanes designed around how people actually navigate Village life."
          description="The live site had valuable categories. The rebuild keeps the strongest ones conceptually, then groups them into a clearer and more premium discovery experience."
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {featuredCollections.map((collection) => (
          <article
            key={collection.title}
            className="rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-paper)] p-6"
          >
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--color-coral)]">
              Featured path
            </p>
            <h3 className="text-2xl font-semibold text-[var(--color-ink)]">{collection.title}</h3>
            <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">{collection.text}</p>
          </article>
        ))}
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Live archive"
          title="The original content is part of the site now."
          description="Recent stories from the old site are fully integrated into the new experience, with room to keep growing without losing what was already built."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {latestPosts.map((post) => (
            <ImportedStoryCard key={post.id} item={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
