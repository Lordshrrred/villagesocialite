import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImportedStoryCard } from "@/components/imported-story-card";
import { SectionHeading } from "@/components/section-heading";
import { getItemsForTag, getTagBySlug } from "@/lib/wordpress";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = getTagBySlug(slug);
  if (!tag) return {};

  return {
    title: tag.name,
    description: `Tagged Village Socialite archive stories for ${tag.name}.`,
  };
}

export default async function TagPage({ params }: PageProps) {
  const { slug } = await params;
  const tag = getTagBySlug(slug);
  if (!tag) notFound();

  const posts = getItemsForTag(tag.id);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
      <section className="rounded-[2.3rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-12">
        <SectionHeading
          eyebrow="Tag archive"
          title={tag.name}
          description={`Preserved tagged content from the original Village Socialite library, now living inside the rebuilt experience.`}
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
