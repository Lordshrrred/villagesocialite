import type { Metadata } from "next";
import { ContentShell } from "@/components/content-shell";
import { getItemBySlug } from "@/lib/wordpress";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | Village Socialite",
  description: "Village Socialite affiliate disclosure — our relationships with brands and partners we recommend.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  const item = getItemBySlug("affiliate-disclosure");

  if (item) {
    return <ContentShell item={item} />;
  }

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-5 py-14 sm:px-8">
      <section className="rounded-[2rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-coral)]">Legal</p>
        <h1 className="mt-3 font-[family:var(--font-cormorant)] text-5xl font-semibold text-[var(--color-ink)]">Affiliate Disclosure</h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-[var(--color-ink-soft)]">
          <p>Village Socialite participates in affiliate advertising programs. This means that when you click on certain links on our website and make a purchase or complete an action, we may earn a commission or referral fee at no additional cost to you.</p>
          <h2 className="text-2xl font-semibold text-[var(--color-ink)]">How This Works</h2>
          <p>We only recommend products and services we believe are genuinely useful and relevant to life in The Villages, Florida. Any affiliate relationship does not influence our editorial opinions or coverage.</p>
          <h2 className="text-2xl font-semibold text-[var(--color-ink)]">Transparency</h2>
          <p>We are committed to transparency. When a post or page contains affiliate links, it may be noted in the content. We encourage you to research any product or service thoroughly before making a purchase.</p>
          <h2 className="text-2xl font-semibold text-[var(--color-ink)]">Questions</h2>
          <p>If you have questions about our affiliate relationships, contact us at <Link href="/contact-village-socialite" className="text-[var(--color-sea)] underline underline-offset-2">our contact page</Link>.</p>
          <p className="text-sm text-[var(--color-ink-soft)]/70">Last updated: 2025</p>
        </div>
      </section>
    </div>
  );
}
