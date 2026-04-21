import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentShell } from "@/components/content-shell";
import { getItemBySlug, getPrimaryImage } from "@/lib/wordpress";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getItemBySlug(slug);

  if (!item) {
    return {};
  }

  return {
    title: item.title,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      images: [{ url: getPrimaryImage(item) }],
    },
    alternates: {
      canonical: `/${item.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const all = (await import("@/data/wordpress-content.json")).default;
  const itemSlugs = [...all.posts, ...all.pages]
    .map((item) => item.slug)
    .filter(
      (slug) => !["explore", "categories", "blog"].includes(slug),
    );

  return [...new Set(itemSlugs)].map((slug) => ({ slug }));
}

export default async function ImportedContentPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getItemBySlug(slug);

  if (!item) {
    notFound();
  }

  return <ContentShell item={item} />;
}
