import type { Metadata } from "next";
import { ImportedStoryCard } from "@/components/imported-story-card";
import { SectionHeading } from "@/components/section-heading";
import { stripHtml } from "@/lib/content-format";
import { getAllItems } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Search",
  description: "Search the Village Socialite archive.",
};

type SearchProps = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: SearchProps) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();
  const results = query
    ? getAllItems().filter((item) => {
        const haystack = `${item.title} ${stripHtml(item.content)} ${stripHtml(item.excerpt)}`.toLowerCase();
        return haystack.includes(query);
      })
    : [];

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
      <section className="rounded-[2.3rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-12">
        <SectionHeading
          eyebrow="Search"
          title={query ? `Results for "${q}"` : "Search Village Socialite"}
          description={query ? `${results.length} results across stories, pages, offers, and archive content.` : "Use the search bar above to jump straight into the archive."}
        />
      </section>
      {query ? (
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {results.map((item) => (
            <ImportedStoryCard key={`${item.type}-${item.id}`} item={item} />
          ))}
        </section>
      ) : null}
    </div>
  );
}
