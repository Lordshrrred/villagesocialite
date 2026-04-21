import { LegacyContent } from "@/components/legacy-content";
import type { Metadata } from "next";
import { ImportedStoryCard } from "@/components/imported-story-card";
import { SectionHeading } from "@/components/section-heading";
import { getAllPostsSorted, getPageBySlug } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Blog | Village Socialite",
  description: "Browse all Village Socialite stories — events, dining, golf carts, real estate, dating, live music, and local community life in The Villages, Florida.",
};

export default function BlogPage() {
  const posts = getAllPostsSorted();
  const blogPage = getPageBySlug("blog");

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
      <section className="rounded-[2.3rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-12">
        <SectionHeading
          eyebrow="Village Socialite stories"
          title="All the local coverage from The Villages, Florida."
          description={`${posts.length} stories covering events, dining, golf carts, real estate, live music, dating, community life, and everything in between.`}
        />
      </section>

      {blogPage?.content ? (
        <section className="rounded-[2rem] border border-[var(--color-line)] bg-white p-6 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-10">
          <LegacyContent html={blogPage.content} />
        </section>
      ) : null}

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <ImportedStoryCard key={post.id} item={post} />
        ))}
      </section>
    </div>
  );
}
