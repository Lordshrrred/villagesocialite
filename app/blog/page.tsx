import type { Metadata } from "next";
import { ImportedStoryCard } from "@/components/imported-story-card";
import { SectionHeading } from "@/components/section-heading";
import { getLatestPosts } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Blog",
  description: "The full Village Socialite archive, re-presented inside the new site experience.",
};

export default function BlogPage() {
  const posts = getLatestPosts(60);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
      <section className="rounded-[2.3rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-12">
        <SectionHeading
          eyebrow="Archive feed"
          title="Every original story now has a better home."
          description="This is the working bridge between the original Village Socialite archive and the upgraded platform: the real posts, the real copy, and the real momentum built over time."
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
