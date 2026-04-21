import type { Metadata } from "next";
import { LegacyContent } from "@/components/legacy-content";
import { CategoryCard } from "@/components/category-card";
import { SectionHeading } from "@/components/section-heading";
import { stripHtml } from "@/lib/content-format";
import { getAllCategories, getPageBySlug } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Browse the Village Socialite story lanes, from events and dining to dating, golf, lifestyle, and local culture.",
};

export default function CategoriesPage() {
  const categoriesPage = getPageBySlug("categories");
  const categories = getAllCategories()
    .sort((a, b) => b.count - a.count)
    .map((category) => ({
      name: category.name,
      description:
        stripHtml(category.description) ||
        `Browse ${category.count} archived Village Socialite stories in ${category.name}.`,
      href: `/category/${category.slug}`,
      countLabel: `${category.count} archived stories`,
    }));

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
      <section className="rounded-[2.3rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-12">
        <SectionHeading
          eyebrow="Categories"
          title="Every lane of Village life, organized so people can actually explore it."
          description="From nightlife and golf to food, dating, wellness, and local buzz, the categories now read like a guide instead of a dump."
        />
      </section>

      {categoriesPage?.content ? (
        <section className="rounded-[2rem] border border-[var(--color-line)] bg-white p-6 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-10">
          <LegacyContent html={categoriesPage.content} />
        </section>
      ) : null}

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </section>
    </div>
  );
}
