import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { aboutPoints } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Village Socialite and the role it can play as a stronger lifestyle, media, and community hub for The Villages.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
      <section className="rounded-[2.3rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-12">
        <SectionHeading
          eyebrow="About Village Socialite"
          title="A local brand built to spotlight what makes Village life magnetic."
          description="Village Socialite brings together stories, personality, local discovery, business visibility, and the social energy that keeps The Villages moving. This version gives the brand a cleaner, more premium home base to keep growing from."
        />
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        {aboutPoints.map((point) => (
          <article
            key={point}
            className="rounded-[1.8rem] border border-[var(--color-line)] bg-[var(--color-paper)] p-6"
          >
            <p className="text-sm leading-7 text-[var(--color-ink-soft)]">{point}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
