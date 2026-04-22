import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogPromoAd } from "@/components/blog-promo-ad";
import { shouldPreserveImageText } from "@/lib/image-fit";
import {
  buildSeoArticleSections,
  getRelatedSeoBlogPosts,
  getSeoInternalLinks,
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
  const internalLinks = getSeoInternalLinks(post);
  const preserveImageText = shouldPreserveImageText(post.image);
  const faqItems = [
    [
      `What is the best way to research ${post.keyword}?`,
      "Start with the actual day you are trying to plan. Check location, timing, access, cost, comfort, and whether the choice fits how people move around The Villages.",
    ],
    [
      `Is ${post.keyword} mainly for residents or visitors?`,
      "It can matter to both. Residents use it to improve daily life, future residents use it to compare the lifestyle, and visitors use it to plan a trip that feels less rushed.",
    ],
    [
      "What should I compare before deciding?",
      "Compare convenience, golf cart or car access, crowd level, social fit, weather, reservations, mobility needs, and whether the experience is something you would actually repeat.",
    ],
  ];
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
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://villagesocialite.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://villagesocialite.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.category,
        item: `https://villagesocialite.com/blog/category/${post.categorySlug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: post.title,
        item: `https://villagesocialite.com/blog/${post.slug}`,
      },
    ],
  };
  const internalLinkSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Internal links for ${post.keyword}`,
    itemListElement: [
      internalLinks.categoryHub,
      ...internalLinks.sameCategory,
      ...internalLinks.crossCategory,
      ...internalLinks.cornerstone,
    ].map((link, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: link.label,
      url: `https://villagesocialite.com${link.href}`,
    })),
  };

  const readingLinks = [
    internalLinks.categoryHub,
    ...internalLinks.sameCategory.slice(0, 4),
    ...internalLinks.crossCategory,
    ...internalLinks.cornerstone,
  ];

  return (
    <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(internalLinkSchema) }}
      />

      <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm font-bold text-[var(--color-ink-soft)]">
        <Link href="/" className="hover:text-[var(--color-teal-deep)]">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-[var(--color-teal-deep)]">Blog</Link>
        <span>/</span>
        <Link href={internalLinks.categoryHub.href} className="hover:text-[var(--color-teal-deep)]">
          {post.category}
        </Link>
      </nav>

      <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,56rem)_21rem] lg:items-start xl:grid-cols-[minmax(0,56rem)_23rem]">
        <article className="overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_24px_70px_rgba(5,20,25,0.10)] ring-1 ring-[var(--color-line)] sm:rounded-[2.4rem]">
          <header className="space-y-6 border-b border-[var(--color-line)] bg-[linear-gradient(180deg,#ffffff,#f8fcfd)] px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
            <Link
              href={`/blog/category/${post.categorySlug}`}
              className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[var(--color-coral)] hover:text-[var(--color-teal-deep)]"
            >
              {post.category}
            </Link>
            <h1 className="font-[family:var(--font-cormorant)] text-5xl font-semibold leading-none text-[var(--color-ink)] sm:text-6xl">
              {post.title}
            </h1>
            <p className="text-xl leading-9 text-[var(--color-ink-soft)]">{post.hook}</p>
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper)]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(min-width: 1024px) 760px, 100vw"
                className={preserveImageText ? "object-contain p-3" : "object-cover object-center"}
              />
            </div>
            <p className="text-sm font-semibold leading-7 text-[var(--color-ink-soft)]">
              Updated for Village Socialite readers. Main topic: <span className="text-[var(--color-ink)]">{post.keyword}</span>.
            </p>
          </header>

        <div className="space-y-11 px-6 py-8 sm:px-10 sm:py-10 lg:px-14">
          <section className="space-y-5">
            <p className="text-xl leading-9 text-[var(--color-ink)]">{post.intent}</p>
            <p className="text-lg leading-9 text-[var(--color-ink-soft)]">
              This guide is organized around <strong className="font-extrabold text-[var(--color-ink)]">{post.keyword}</strong>, but it is written for real people making real plans in and around The Villages. The point is to help you compare the local details, understand the tradeoffs, and decide what is actually worth your time.
            </p>
          </section>

          {sections.map((section) => (
            <section key={section.title} className="space-y-5 border-t border-[var(--color-line)] pt-9">
              <h2 className="font-[family:var(--font-cormorant)] text-4xl font-semibold leading-tight text-[var(--color-ink)]">
                {section.title}
              </h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-9 text-[var(--color-ink-soft)]">
                  {paragraph}
                </p>
              ))}
              <div className="space-y-3">
                <h3 className="text-base font-extrabold uppercase tracking-[0.18em] text-[var(--color-teal-deep)]">
                  What to check
                </h3>
                <ul className="list-disc space-y-2 pl-6 text-base leading-8 text-[var(--color-ink-soft)]">
                  {section.takeaways.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}

          <section className="space-y-5 border-y border-[var(--color-line)] py-9">
            <h2 className="font-[family:var(--font-cormorant)] text-4xl font-semibold leading-tight text-[var(--color-ink)]">
              Related reading on Village Socialite
            </h2>
            <p className="text-lg leading-9 text-[var(--color-ink-soft)]">
              Continue with the larger <Link href={internalLinks.categoryHub.href} className="font-extrabold text-[var(--color-teal-deep)] underline decoration-[var(--color-teal)]/35 underline-offset-4">{post.category}</Link> guide path, then compare this topic with these nearby searches:
            </p>
            <ul className="space-y-3 text-base leading-8 text-[var(--color-ink-soft)]">
              {readingLinks.slice(1, 7).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-extrabold text-[var(--color-ink)] underline decoration-[var(--color-teal)]/30 underline-offset-4 hover:text-[var(--color-teal-deep)]">
                    {link.label}
                  </Link>
                  <span className="text-[var(--color-ink-soft)]"> - {link.description}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="border-b border-[var(--color-line)] pb-9">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[var(--color-coral)]">
              Join The Socialite
            </p>
            <h2 className="mt-3 font-[family:var(--font-cormorant)] text-4xl font-semibold leading-tight text-[var(--color-ink)]">
              Keep up with the real life version of The Villages.
            </h2>
            <p className="mt-4 text-lg leading-9 text-[var(--color-ink-soft)]">
              Village Socialite follows the restaurants, events, golf cart culture, resident stories, local services, and odd little moments that make this place feel alive.
            </p>
            <Link
              href="/join-the-socialite"
              className="mt-5 inline-flex rounded-full bg-[var(--color-teal-deep)] px-6 py-3 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[var(--color-teal)]"
            >
              Join The Socialite
            </Link>
          </section>

          <section className="space-y-6">
            <h2 className="font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)]">
              Quick FAQ for {post.keyword}
            </h2>
            {faqItems.map(([question, answer]) => (
              <div key={question} className="space-y-2 border-t border-[var(--color-line)] pt-5">
                <h3 className="text-xl font-extrabold text-[var(--color-ink)]">{question}</h3>
                <p className="text-base leading-8 text-[var(--color-ink-soft)]">{answer}</p>
              </div>
            ))}
          </section>
        </div>
        </article>

        <aside className="space-y-5 lg:sticky lg:top-24" aria-label="Village Socialite offers">
          <div className="rounded-[1.4rem] border border-white/80 bg-white/90 p-5 shadow-[0_16px_45px_rgba(5,20,25,0.07)] ring-1 ring-[var(--color-line)] backdrop-blur">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[var(--color-coral)]">
              Socialite picks
            </p>
            <h2 className="mt-2 font-[family:var(--font-cormorant)] text-3xl font-semibold leading-tight text-[var(--color-ink)]">
              Gear, comforts, and local finds we would actually click.
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">
              A short rail of Socialite picks for golf cart days, home comfort, easier tech, and the Village lifestyle around this guide.
            </p>
          </div>
          <BlogPromoAd index={0} />
          <BlogPromoAd index={1} />
          <BlogPromoAd index={2} />
        </aside>
      </div>

      <section className="mt-12 border-t border-[var(--color-line)] pt-8">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.28em] text-[var(--color-coral)]">
          Keep reading
        </p>
        <h2 className="mt-3 font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)]">
          More Village Socialite guides
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/blog/${item.slug}`}
              className="border-t border-[var(--color-line)] pt-4 text-base font-extrabold leading-7 text-[var(--color-ink)] underline decoration-[var(--color-teal)]/25 underline-offset-4 transition hover:text-[var(--color-teal-deep)]"
            >
              {item.keyword}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
