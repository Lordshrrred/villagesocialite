import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentShell } from "@/components/content-shell";
import { decodeHtmlEntities } from "@/lib/content-format";
import { getItemBySlug, getPrimaryImage } from "@/lib/wordpress";

const slug = "fat-pig-society-cbd";

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
      images: [{ url: getPrimaryImage(item) }],
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

  return <ContentShell item={item} />;
}
