import type { Metadata } from "next";
import { ContentShell } from "@/components/content-shell";
import { getItemBySlug } from "@/lib/wordpress";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Village Socialite",
  description: "Village Socialite privacy policy — how we collect, use, and protect your information.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  const item = getItemBySlug("privacy-policy");

  if (item) {
    return <ContentShell item={item} />;
  }

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-5 py-14 sm:px-8">
      <section className="rounded-[2rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-coral)]">Legal</p>
        <h1 className="mt-3 font-[family:var(--font-cormorant)] text-5xl font-semibold text-[var(--color-ink)]">Privacy Policy</h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-[var(--color-ink-soft)]">
          <p>Village Socialite (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website.</p>
          <h2 className="text-2xl font-semibold text-[var(--color-ink)]">Information We Collect</h2>
          <p>We collect information you provide directly, such as your name and email address when you subscribe to our newsletter. We also collect usage data through analytics tools to improve our content and site experience.</p>
          <h2 className="text-2xl font-semibold text-[var(--color-ink)]">How We Use Your Information</h2>
          <p>We use your email address to send you newsletters, event updates, and promotional content you&apos;ve opted into. You may unsubscribe at any time using the link in any email we send.</p>
          <h2 className="text-2xl font-semibold text-[var(--color-ink)]">Third-Party Services</h2>
          <p>We may use third-party services for email marketing, analytics, and advertising. These services have their own privacy policies governing how they handle data.</p>
          <h2 className="text-2xl font-semibold text-[var(--color-ink)]">Contact</h2>
          <p>For privacy questions, contact us at <Link href="/contact-village-socialite" className="text-[var(--color-sea)] underline underline-offset-2">our contact page</Link>.</p>
          <p className="text-sm text-[var(--color-ink-soft)]/70">Last updated: 2025</p>
        </div>
      </section>
    </div>
  );
}
