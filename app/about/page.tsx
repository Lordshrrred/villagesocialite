import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { aboutPoints } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind the Village Socialite rebuild and the editorial role it is designed to play.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
      <section className="rounded-[2.3rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-12">
        <SectionHeading
          eyebrow="About the rebuild"
          title="Village Socialite now has a stronger point of view."
          description="This presentation-ready rebuild treats the brand as a real local lifestyle and media platform. The structure is intentionally clean so final client-approved copy, sponsors, and newsletter tooling can be layered in without redoing the foundation."
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
