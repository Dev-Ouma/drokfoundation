import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { PageEnter } from "@/components/motion/PageEnter";
import { person, site } from "@/content/site";
import "./globals.css";

const display = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const body = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${person.displayName} — Senior Lecturer, Maseno University`,
    template: `%s · ${person.familyName}`,
  },
  description: site.description,
  keywords: [
    "Joel Okutoyi",
    "Dr Joel Okutoyi",
    "Maseno University",
    "Special Needs Education",
    "deaf education Kenya",
    "Kenyan Sign Language",
    "AI4KSL",
    "inclusive education",
    "Kakamega",
    "Butere Constituency",
    "Joel Okutoyi 2032",
  ],
  authors: [{ name: person.displayName }],
  openGraph: {
    type: "profile",
    locale: "en_KE",
    siteName: person.displayName,
    title: `${person.displayName} — Educator, Advocate, Servant Leader`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: person.displayName,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Joel Okutoyi",
  honorificPrefix: "Dr.",
  honorificSuffix: "PhD",
  jobTitle: person.role,
  worksFor: {
    "@type": "CollegeOrUniversity",
    name: person.institution,
  },
  affiliation: person.department,
  email: person.email,
  url: site.url,
  sameAs: [site.linkedin, site.staffPage],
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-KE"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-4 focus:z-[80] focus:bg-forest focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <div
          className="flag-ribbon pointer-events-none fixed inset-y-0 left-0 z-40 w-[3px] md:w-1"
          aria-hidden
        />
        <SiteHeader />
        <div id="content" className="flex flex-1 flex-col">
          <PageEnter>{children}</PageEnter>
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
