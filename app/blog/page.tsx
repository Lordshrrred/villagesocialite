import { LegacyContent } from "@/components/legacy-content";
import type { Metadata } from "next";
import { ImportedStoryCard } from "@/components/imported-story-card";
import { SectionHeading } from "@/components/section-heading";
import { getAllPostsSorted, getPageBySlug } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Blog",
  description: "The full Village Socialite archive, re-presented inside the new site experience.",
};

export default function BlogPage() {
  const posts = getAllPostsSorted();
  const blogPage = getPageBySlug("blog");

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
      <section className="rounded-[2.3rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-12">
        <SectionHeading
          eyebrow="Archive feed"
          title="Every original story now has a better home."
          description={`This archive currently carries ${posts.length} original posts inside the rebuilt platform, preserving the copy and momentum already earned.`}
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
