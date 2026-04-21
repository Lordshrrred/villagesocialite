import type { Metadata } from "next";
import { ContentShell } from "@/components/content-shell";
import { getItemBySlug } from "@/lib/wordpress";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Village Socialite",
  description: "Village Socialite terms and conditions of use.",
  alternates: { canonical: "/terms-conditions" },
};

export default function TermsConditionsPage() {
  const item = getItemBySlug("terms-conditions");

  if (item) {
    return <ContentShell item={item} />;
  }

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-5 py-14 sm:px-8">
      <section className="rounded-[2rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-coral)]">Legal</p>
        <h1 className="mt-3 font-[family:var(--font-cormorant)] text-5xl font-semibold text-[var(--color-ink)]">Terms & Conditions</h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-[var(--color-ink-soft)]">
          <p>By using the Village Socialite website (&quot;villagesocialite.com&quot;), you agree to these terms and conditions. Please read them carefully.</p>
          <h2 className="text-2xl font-semibold text-[var(--color-ink)]">Use of Content</h2>
          <p>All content published on Village Socialite — including text, images, videos, and other media — is the property of Village Socialite or its licensed contributors and may not be reproduced without permission.</p>
          <h2 className="text-2xl font-semibold text-[var(--color-ink)]">User Submissions</h2>
          <p>Any content you submit to Village Socialite (tips, stories, comments) grants us a non-exclusive license to publish and share that content in connection with our platform.</p>
          <h2 className="text-2xl font-semibold text-[var(--color-ink)]">Disclaimer</h2>
          <p>Village Socialite content is provided for informational and entertainment purposes. We are not responsible for the accuracy of third-party information, including real estate listings, business details, or event schedules.</p>
          <h2 className="text-2xl font-semibold text-[var(--color-ink)]">Contact</h2>
          <p>For questions about these terms, visit <Link href="/contact-village-socialite" className="text-[var(--color-sea)] underline underline-offset-2">our contact page</Link>.</p>
          <p className="text-sm text-[var(--color-ink-soft)]/70">Last updated: 2025</p>
        </div>
      </section>
    </div>
  );
}
