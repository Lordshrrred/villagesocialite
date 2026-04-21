import type { Metadata } from "next";
import { LegacyContent } from "@/components/legacy-content";
import { SectionHeading } from "@/components/section-heading";
import { TagCloud } from "@/components/tag-cloud";
import { getPageBySlug, getTopTags } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Tags",
  description: "Browse the full Village Socialite tag universe inside the rebuilt site.",
};

export default function TagsPage() {
  const tagsPage = getPageBySlug("tags");
  const tags = getTopTags(500);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
      <section className="rounded-[2.3rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-12">
        <SectionHeading
          eyebrow="Tags"
          title="Every niche angle, topic, and local thread in one searchable layer."
          description={`The original site generated a huge tag system. This page makes that tag network actually usable.`}
        />
      </section>

      {tagsPage?.content ? (
        <section className="rounded-[2rem] border border-[var(--color-line)] bg-white p-6 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-10">
          <LegacyContent html={tagsPage.content} />
        </section>
      ) : null}

      <TagCloud tags={tags} />
    </div>
  );
}
