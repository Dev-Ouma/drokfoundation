import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import { person, site } from "@/content/site";
import "./globals.css";

const display = Source_Serif_4({
  variable: "--font-serif-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  variable: "--font-sans-body",
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
    title: `${person.displayName} — Educator, Scholar, Public Servant`,
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
        <SiteChrome>{children}</SiteChrome>
        <Analytics />
      </body>
    </html>
  );
}
