import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://villagesocialite.com"),
  title: {
    default: "Village Socialite | The modern hub for life in The Villages",
    template: "%s | Village Socialite",
  },
  description:
    "A polished digital home for stories, local culture, guides, featured spots, and community discovery across The Villages.",
  openGraph: {
    title: "Village Socialite",
    description:
      "A polished digital home for stories, local culture, guides, featured spots, and community discovery across The Villages.",
    images: [
      {
        url: "/reference-selected/20251201_2104_Village-Socialite-Martini_simple_compose_01kbekm22mfjetcmbba22q6tsy-1.png",
        width: 1024,
        height: 1024,
        alt: "Village Socialite logo",
      },
    ],
  },
  icons: {
    icon: "/reference-selected/cropped-20251201_2104_Village-Socialite-Martini_simple_compose_01kbekm22mfjetcmbba22q6tsy-1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
