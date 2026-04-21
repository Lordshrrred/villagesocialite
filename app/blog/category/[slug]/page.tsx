import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogPromoAd } from "@/components/blog-promo-ad";
import { SectionHeading } from "@/components/section-heading";
import { SeoBlogCard } from "@/components/seo-blog-card";
import {
  getSeoBlogCategoryBySlug,
  getSeoBlogPostsByCategory,
  seoBlogCategories,
} from "@/lib/seo-blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return seoBlogCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getSeoBlogCategoryBySlug(slug);

  if (!category) return {};

  return {
    title: `${category.name} Blog Guides | Village Socialite`,
    description: category.description,
    alternates: {
      canonical: `/blog/category/${category.slug}`,
    },
  };
}

export default async function SeoBlogCategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getSeoBlogCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = getSeoBlogPostsByCategory(category.slug);

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
      <section className="overflow-hidden rounded-[2.3rem] border border-white/20 bg-[radial-gradient(circle_at_10%_0%,rgba(0,216,240,0.20),transparent_30%),linear-gradient(135deg,#051419,#004d63_55%,#00afc5)] p-8 text-white shadow-[0_30px_90px_rgba(5,20,25,0.20)] sm:p-12">
        <SectionHeading
          eyebrow="Village Socialite category"
          title={category.name}
          description={`${category.description} Browse ${posts.length} Village Socialite guides in this lane.`}
          light
        />
        <Link
          href="/blog"
          className="mt-6 inline-flex rounded-full bg-[var(--color-gold)] px-5 py-3 text-sm font-extrabold text-[var(--color-ink)] transition hover:-translate-y-0.5"
        >
          Back to the blog →
        </Link>
      </section>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post, index) => (
          <Fragment key={post.slug}>
            <SeoBlogCard post={post} />
            {index === 2 || index === 6 ? (
              <BlogPromoAd index={index} />
            ) : null}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
