import Image from "next/image";
import Link from "next/link";
import { CategoryCard } from "@/components/category-card";
import { FeaturedStoryCard } from "@/components/featured-story-card";
import { NewsletterPanel } from "@/components/newsletter-panel";
import { SectionHeading } from "@/components/section-heading";
import {
  categories,
  communityHighlights,
  featuredStories,
  whyVillageSocialite,
} from "@/lib/site-data";

export default function Home() {
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
                Local life, elevated into a brand people want to come back to.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                Village Socialite now feels like a polished home for stories, social energy, local discovery, guide content, and featured partnerships across The Villages.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/featured"
                className="rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5"
              >
                See the featured direction
              </Link>
              <Link
                href="/explore"
                className="rounded-full border border-white/15 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/12"
              >
                Explore categories
              </Link>
            </div>
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {[
                ["20+", "editorial lanes and themes archived"],
                ["13", "reference pages mirrored locally"],
                ["60", "brand assets and visuals preserved"],
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
                    More editorial. More intentional. More trusted.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/74">
                    The homepage now guides visitors instead of dropping them into an undifferentiated archive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Featured stories and videos"
          title="A stronger lead editorial package."
          description="These showcase how Village Socialite can frame standout stories and recurring content verticals with more confidence and curation."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {featuredStories.map((story) => (
            <FeaturedStoryCard key={story.title} story={story} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Explore by category"
          title="Discovery paths that feel premium instead of sprawling."
          description="The archive revealed a broad taxonomy. The rebuild keeps the most useful lanes and turns them into a clearer entry point for visitors."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.name} category={category} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="rounded-[2rem] border border-[var(--color-line)] bg-white p-7 shadow-[0_20px_60px_rgba(18,27,33,0.05)] sm:p-10">
          <SectionHeading
            eyebrow="Why Village Socialite"
            title="A more coherent identity for a much bigger platform."
            description="The live site already hinted at a wider mission than a simple blog or video feed. This rebuild makes that breadth feel strategic."
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

      <NewsletterPanel />
    </div>
  );
}
