import type { Metadata } from "next";
import { ContentShell } from "@/components/content-shell";
import { getItemBySlug } from "@/lib/wordpress";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DMCA Notice | Village Socialite",
  description: "Village Socialite DMCA copyright notice and takedown policy.",
  alternates: { canonical: "/dmca" },
};

export default function DmcaPage() {
  const item = getItemBySlug("dmca");

  if (item) {
    return <ContentShell item={item} />;
  }

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-5 py-14 sm:px-8">
      <section className="rounded-[2rem] border border-[var(--color-line)] bg-white p-8 shadow-[0_24px_60px_rgba(18,27,33,0.05)] sm:p-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--color-coral)]">Legal</p>
        <h1 className="mt-3 font-[family:var(--font-cormorant)] text-5xl font-semibold text-[var(--color-ink)]">DMCA Notice</h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-[var(--color-ink-soft)]">
          <p>Village Socialite respects the intellectual property rights of others and expects users of our site to do the same. If you believe that your copyrighted work has been published on our website without authorization, please submit a DMCA takedown notice.</p>
          <h2 className="text-2xl font-semibold text-[var(--color-ink)]">How to File a DMCA Notice</h2>
          <p>To submit a copyright infringement notice, please provide the following information in writing:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>A description of the copyrighted work you believe has been infringed.</li>
            <li>The URL or location on our website where the allegedly infringing material appears.</li>
            <li>Your contact information (name, address, email, phone number).</li>
            <li>A statement that you have a good faith belief that the use is not authorized by the copyright owner.</li>
            <li>A statement, under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorized to act on their behalf.</li>
            <li>Your physical or electronic signature.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-[var(--color-ink)]">Submit Your Notice</h2>
          <p>Send DMCA takedown notices to us via <Link href="/contact-village-socialite" className="text-[var(--color-sea)] underline underline-offset-2">our contact page</Link>. We will review and respond to valid notices promptly.</p>
          <p className="text-sm text-[var(--color-ink-soft)]/70">Last updated: 2025</p>
        </div>
      </section>
    </div>
  );
}
