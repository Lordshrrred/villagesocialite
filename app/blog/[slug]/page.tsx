import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogPromoAd } from "@/components/blog-promo-ad";
import { SeoBlogCard } from "@/components/seo-blog-card";
import {
  buildSeoArticleSections,
  getRelatedSeoBlogPosts,
  getSeoBlogPostBySlug,
  getSeoBlogPosts,
} from "@/lib/seo-blog";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getSeoBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getSeoBlogPostBySlug(slug);

  if (!post) return {};

  return {
    title: `${post.title} | Village Socialite Blog`,
    description: post.description,
    keywords: [post.keyword, ...post.secondaryKeywords],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      images: [{ url: post.image }],
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function SeoBlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getSeoBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const sections = buildSeoArticleSections(post);
  const related = getRelatedSeoBlogPosts(post, 3);
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Village Socialite",
    },
    publisher: {
      "@type": "Organization",
      name: "Village Socialite",
    },
    mainEntityOfPage: `https://villagesocialite.com/blog/${post.slug}`,
    keywords: [post.keyword, ...post.secondaryKeywords].join(", "),
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className="overflow-hidden rounded-[2.4rem] border border-white/10 bg-[var(--color-ink)] text-white shadow-[0_30px_90px_rgba(5,20,25,0.22)]">
        <div className="grid gap-0 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="space-y-6 p-7 sm:p-10 lg:p-12">
            <Link
              href={`/blog/category/${post.categorySlug}`}
              className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.26em] text-[var(--color-seafoam)]"
            >
              {post.category}
            </Link>
            <h1 className="font-[family:var(--font-cormorant)] text-5xl font-semibold leading-none sm:text-6xl">
              {post.title}
            </h1>
            <p className="text-lg leading-8 text-white/78">{post.hook}</p>
            <div className="flex flex-wrap gap-2">
              {[post.keyword, ...post.secondaryKeywords.slice(0, 3)].map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-white/65"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <div className="relative min-h-[340px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>
      </article>

      <section className="grid gap-8 lg:grid-cols-[0.7fr_0.3fr]">
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-6 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-10">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-[var(--color-coral)]">
              Search intent
            </p>
            <p className="mt-4 text-lg leading-9 text-[var(--color-ink-soft)]">{post.intent}</p>
          </div>

          {sections.map((section, index) => (
            <div key={section.title} className="space-y-6">
              <section className="rounded-[2rem] border border-[var(--color-line)] bg-white p-6 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-10">
                <h2 className="font-[family:var(--font-cormorant)] text-4xl font-semibold leading-tight text-[var(--color-ink)]">
                  {section.title}
                </h2>
                <p className="mt-5 text-lg leading-9 text-[var(--color-ink-soft)]">{section.body}</p>
                <div className="mt-6 rounded-[1.4rem] bg-[var(--color-paper)] p-5">
                  <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[var(--color-teal)]">
                    Socialite move
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">
                    If this topic matters to you, bookmark Village Socialite, search the archive, and join the list so the next great Village find comes to you first.
                  </p>
                  <Link
                    href="/join-the-socialite"
                    className="mt-4 inline-flex rounded-full bg-[var(--color-teal-deep)] px-5 py-2.5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-teal)]"
                  >
                    Join The Socialite →
                  </Link>
                </div>
              </section>
              {index === 1 || index === 3 ? (
                <BlogPromoAd index={index} variant="wide" />
              ) : null}
            </div>
          ))}

          <section className="rounded-[2rem] border border-[var(--color-line)] bg-white p-6 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-10">
            <h2 className="font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)]">
              Quick FAQ for {post.keyword}
            </h2>
            <div className="mt-6 space-y-4">
              {[
                ["Who is this guide for?", "Residents, future residents, visiting family, local businesses, and anyone trying to make a better plan around The Villages."],
                ["Is this official Villages information?", "No. Village Socialite is an independent lifestyle and media brand that organizes local discovery, commentary, offers, and community-facing content."],
                ["What should I do next?", "Search the archive, explore related categories, and join The Socialite so you can stay close to the newest stories, events, guides, and offers."],
              ].map(([question, answer]) => (
                <details key={question} className="rounded-[1.25rem] border border-[var(--color-line)] bg-[var(--color-paper)] p-5">
                  <summary className="cursor-pointer text-base font-extrabold text-[var(--color-ink)]">
                    {question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">{answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-36 lg:self-start">
          <div className="rounded-[1.7rem] border border-[var(--color-line)] bg-white p-6 shadow-[0_20px_50px_rgba(5,20,25,0.05)]">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[var(--color-coral)]">
              Plug in
            </p>
            <h2 className="mt-3 text-2xl font-extrabold text-[var(--color-ink)]">
              Want your business, event, story, or offer in the Socialite mix?
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">
              Step into the spotlight and let Village Socialite help turn local attention into actual momentum.
            </p>
            <Link
              href="/join-the-socialite"
              className="mt-5 inline-flex rounded-full bg-[var(--color-gold)] px-5 py-3 text-sm font-extrabold text-[var(--color-ink)] transition hover:-translate-y-0.5"
            >
              Get featured →
            </Link>
          </div>
          <BlogPromoAd index={0} />
          <BlogPromoAd index={1} />
        </aside>
      </section>

      <section className="space-y-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[var(--color-coral)]">
            Keep reading
          </p>
          <h2 className="font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)]">
            Related Village Socialite guides
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {related.map((item) => (
            <SeoBlogCard key={item.slug} post={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
