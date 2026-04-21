import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { contactChannels } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Village Socialite for editorial leads, partnerships, and launch planning.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-5 py-10 sm:px-8 sm:py-14">
      <section className="rounded-[2.3rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-12">
        <SectionHeading
          eyebrow="Contact"
          title="A cleaner place to route conversation."
          description="This placeholder contact surface is ready for final business details, a real inbox, and any launch-specific workflows the client wants to add."
        />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="grid gap-5">
          {contactChannels.map((channel) => (
            <article
              key={channel.title}
              className="rounded-[1.7rem] border border-[var(--color-line)] bg-[var(--color-paper)] p-6"
            >
              <h3 className="text-2xl font-semibold text-[var(--color-ink)]">{channel.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-ink-soft)]">{channel.detail}</p>
            </article>
          ))}
        </div>
        <div className="rounded-[1.9rem] border border-[var(--color-line)] bg-[var(--color-ink)] p-6 text-white">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-seafoam)]">
            Temporary contact path
          </p>
          <h3 className="mt-4 font-[family:var(--font-cormorant)] text-4xl font-semibold">
            hello@villagesocialite.com
          </h3>
          <p className="mt-4 text-sm leading-7 text-white/72">
            Replace this placeholder inbox with the final approved email destination before launch.
          </p>
          <Link
            href="mailto:hello@villagesocialite.com?subject=Village%20Socialite%20Launch"
            className="mt-6 inline-flex rounded-full bg-[var(--color-gold)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:-translate-y-0.5"
          >
            Email the launch team
          </Link>
        </div>
      </section>
    </div>
  );
}
