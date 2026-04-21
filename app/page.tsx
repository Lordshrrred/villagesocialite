import Image from "next/image";
import Link from "next/link";
import { CategoryCard } from "@/components/category-card";
import { ImportedStoryCard } from "@/components/imported-story-card";
import { OfferCard } from "@/components/offer-card";
import { SpotlightForm } from "@/components/spotlight-form";
import { SectionHeading } from "@/components/section-heading";
import {
  communityHighlights,
  whyVillageSocialite,
} from "@/lib/site-data";
import { stripHtml } from "@/lib/content-format";
import {
  getAllCategories,
  getFeaturedMigrationStories,
  getLatestPosts,
  getOfferPages,
} from "@/lib/wordpress";

export default function Home() {
  const featuredStories = getFeaturedMigrationStories();
  const latestPosts = getLatestPosts(6);
  const offerPages = getOfferPages();
  const categories = getAllCategories()
    .sort((a, b) => b.count - a.count)
    .slice(0, 6)
    .map((category) => ({
      name: category.name,
      description: stripHtml(category.description) ||
        `Browse the original Village Socialite archive for ${category.name.toLowerCase()} stories, videos, and local coverage.`,
      href: `/category/${category.slug}`,
      countLabel: `${category.count} archived stories`,
    }));

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-18 px-5 py-8 sm:px-8 sm:py-12">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[var(--color-ink)] px-6 py-8 text-white shadow-[0_30px_90px_rgba(9,18,24,0.28)] sm:px-10 sm:py-10 lg:px-14 lg:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(234,127,87,0.3),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(70,132,150,0.34),transparent_28%),linear-gradient(135deg,rgba(10,19,25,0.95),rgba(8,44,56,0.88),rgba(8,22,31,0.95))]" />
        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-7">
            <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[var(--color-gold)]">
              The central digital hub for The Villages
            </p>
            <div className="space-y-5">
              <h1 className="max-w-3xl font-[family:var(--font-cormorant)] text-5xl font-semibold leading-none sm:text-6xl lg:text-7xl">
                The insider&apos;s guide to what makes life in The Villages worth talking about.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                The all-access pass to what&apos;s buzzing in The Villages: standout stories, social energy, growth opportunities, polished promotions, and the people shaping the good life.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/join-the-socialite"
                className="rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5"
              >
                Step Into the Spotlight
              </Link>
              <Link
                href="/merch"
                className="rounded-full border border-white/15 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
              >
                Shop the Merch Drop
              </Link>
            </div>
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {[
                ["20+", "story lanes across culture, food, guides, and community"],
                ["Weekly", "fresh reasons to explore what is happening now"],
                ["One hub", "for discovery, personality, and local perspective"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-[1.4rem] border border-white/10 bg-white/6 p-4 backdrop-blur"
                >
                  <p className="text-3xl font-semibold text-white">{value}</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 -top-6 hidden h-28 w-28 rounded-full bg-[var(--color-coral)]/30 blur-3xl lg:block" />
            <div className="grid gap-4 sm:grid-cols-[1fr_0.82fr]">
              <div className="relative min-h-[420px] overflow-hidden rounded-[2rem]">
                <Image
                  src="/reference-selected/villages_header.jpg"
                  alt="Village Socialite lifestyle scene"
                  fill
                  sizes="(min-width: 1024px) 28vw, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent" />
              </div>
              <div className="grid gap-4">
                <div className="relative min-h-[200px] overflow-hidden rounded-[1.7rem]">
                  <Image
                    src="/reference-selected/lake-sumter-landing-the-villages-florida.jpg"
                    alt="Lake Sumter Landing"
                    fill
                    sizes="(min-width: 1024px) 18vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="rounded-[1.7rem] border border-white/10 bg-white/8 p-5 backdrop-blur">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-seafoam)]">
                    Brand direction
                  </p>
                  <p className="mt-3 font-[family:var(--font-cormorant)] text-3xl font-semibold leading-tight">
                    The social pulse, the growth engine, and the local spotlight.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/74">
                    Built to help stories travel, brands show up better, and Village life feel worth clicking into.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2.2rem] border border-[var(--color-line)] bg-white px-8 py-10 shadow-[0_24px_60px_rgba(18,27,33,0.06)]">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[radial-gradient(circle,#dffdf5,#ffffff)] text-4xl shadow-[0_20px_35px_rgba(111,230,214,0.28)]">
            🛺
          </div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[var(--color-coral)]">
            The Growth Engine
          </p>
          <h2 className="mt-4 font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)]">
            Broadcast your story like you mean it.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-[var(--color-ink-soft)]">
            <p>🎙 Podcast spotlight: be a guest and share your story.</p>
            <p>📈 Brand exposure: premium local visibility for businesses, creators, and offers.</p>
            <p>🤝 Community reach: show up in front of locals, newcomers, and socially active Villagers.</p>
          </div>
        </article>
        <article className="rounded-[2.2rem] border border-[var(--color-line)] bg-white px-8 py-10 shadow-[0_24px_60px_rgba(18,27,33,0.06)]">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[radial-gradient(circle,#e8fff9,#ffffff)] text-4xl shadow-[0_20px_35px_rgba(111,230,214,0.28)]">
            🌴
          </div>
          <p className="text-[11px] font-extrabold uppercase tracking-[0.32em] text-[var(--color-coral)]">
            The Social Standard
          </p>
          <h2 className="mt-4 font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)]">
            Curated Village life with a little more shine.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-[var(--color-ink-soft)]">
            <p>✨ Elite events, standout local finds, and polished community stories.</p>
            <p>🍸 A smarter mix of style, spotlight, and social energy.</p>
            <p>📣 High-visibility placement for the people and brands that belong in the conversation.</p>
          </div>
        </article>
      </section>

      <SpotlightForm />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="The Village edit"
          title="What everybody&apos;s talking about around the squares, golf carts, patios, and back gates."
          description="Big personalities, local scenes, real buzz, and the stories that make The Villages feel more alive than the average retirement feed."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredStories.map((story) => (
            <ImportedStoryCard key={story.id} item={story} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Explore by category"
          title="Choose your lane and dive straight into the good stuff."
          description="Dining, events, golf, dating, lifestyle, music, and all the local corners that keep Village life interesting."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Offers, drops, and high-visibility pages"
          title="Merch, spotlight pages, CBD, and the pages built to convert attention into action."
          description="The original site had real commercial energy. These pages keep that alive while giving them a cleaner, more premium surface."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {offerPages
            .sort((a, b) => {
              const order = ["merch", "join-the-socialite", "fat-pig-society-cbd"];
              return (order.indexOf(a.slug) === -1 ? 99 : order.indexOf(a.slug)) - (order.indexOf(b.slug) === -1 ? 99 : order.indexOf(b.slug));
            })
            .map((page) => (
            <OfferCard key={page.id} item={page} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Latest from the archive"
          title="Fresh Village goodness from the archive."
          description="The original site produced a huge amount of real Village content. Now it&apos;s organized to feel scrollable, clickable, and worth sticking with."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {latestPosts.map((story) => (
            <ImportedStoryCard key={story.id} item={story} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-7 shadow-[0_20px_60px_rgba(18,27,33,0.05)] sm:p-10">
          <SectionHeading
            eyebrow="Why Village Socialite"
            title="A local brand with more range, more clarity, and more staying power."
            description="Village Socialite works best when it feels like a true media and lifestyle hub, not just a stream of posts."
          />
        </div>
        <div className="grid gap-5">
          {whyVillageSocialite.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.7rem] border border-[var(--color-line)] bg-[var(--color-paper)] p-6"
            >
              <h3 className="text-2xl font-semibold text-[var(--color-ink)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 overflow-hidden rounded-[2.5rem] border border-[var(--color-line)] bg-[linear-gradient(180deg,#fff,#f5efe5)] p-6 sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative min-h-[320px] overflow-hidden rounded-[2rem]">
          <Image
            src="/reference-selected/golf-cart-ride-from-sumter-landing-to-brownwood-paddock-square-in-the-villages-florida.jpg"
            alt="Golf cart culture in The Villages"
            fill
            sizes="(min-width: 1024px) 34vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="space-y-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-coral)]">
            Community and local culture
          </p>
          <h2 className="font-[family:var(--font-cormorant)] text-4xl font-semibold text-[var(--color-ink)] sm:text-5xl">
            A site that can feel social, local, and credible at the same time.
          </h2>
          <div className="space-y-4">
            {communityHighlights.map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-[var(--color-line)] bg-white/80 px-5 py-4 text-sm leading-7 text-[var(--color-ink-soft)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
