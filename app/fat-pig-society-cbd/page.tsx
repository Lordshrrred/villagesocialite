import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentShell } from "@/components/content-shell";
import { decodeHtmlEntities } from "@/lib/content-format";
import { getItemBySlug } from "@/lib/wordpress";

const slug = "fat-pig-society-cbd";
const heroImage =
  "https://i0.wp.com/villagesocialite.com/wp-content/uploads/2026/04/500-1-scaled-1.jpg?w=1200&ssl=1";

export function generateMetadata(): Metadata {
  const item = getItemBySlug(slug);

  if (!item) {
    return {};
  }

  return {
    title: decodeHtmlEntities(item.title),
    description: decodeHtmlEntities(item.description),
    openGraph: {
      title: decodeHtmlEntities(item.title),
      description: decodeHtmlEntities(item.description),
      images: [{ url: heroImage }],
    },
    alternates: {
      canonical: `/${slug}`,
    },
  };
}

export default function FatPigSocietyCbdPage() {
  const item = getItemBySlug(slug);

  if (!item) {
    notFound();
  }

  return <ContentShell item={item} heroImage={heroImage} heroImageFit="contain" />;
}
