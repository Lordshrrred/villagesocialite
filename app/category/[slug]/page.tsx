import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImportedStoryCard } from "@/components/imported-story-card";
import { SectionHeading } from "@/components/section-heading";
import { getCategoryBySlug, getItemsForCategory } from "@/lib/wordpress";
import { decodeHtmlEntities } from "@/lib/content-format";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};

  const name = decodeHtmlEntities(category.name);
  return {
    title: name,
    description: `${name} stories and videos from the Village Socialite archive.`,
  };
}

export async function generateStaticParams() {
  const { getAllCategories } = await import("@/lib/wordpress");
  return getAllCategories().map((category) => ({ slug: category.slug }));
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const posts = getItemsForCategory(category.id);
  const name = decodeHtmlEntities(category.name);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
      <section className="rounded-[2.3rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-12">
        <SectionHeading
          eyebrow="Village Socialite"
          title={name}
          description={`${category.count} stories and videos covering ${name.toLowerCase()} in The Villages, Florida.`}
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <ImportedStoryCard key={post.id} item={post} />
        ))}
      </section>
    </div>
  );
}
