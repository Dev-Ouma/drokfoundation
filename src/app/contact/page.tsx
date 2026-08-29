import { ContactForm } from "@/components/ContactForm";
import { NewsletterForm } from "@/components/NewsletterForm";
import { PageIntro } from "@/components/PageIntro";
import { contactCard } from "@/content/cv";
import { person, site } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Write to Dr. Joel Okutoyi — Maseno University, phone, email, volunteer, press, or partnership enquiries.",
};

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        size="compact"
        kicker="Correspondence"
        title="Write to the office"
        lede="Volunteers, teachers, journalists, and partners — address the office with your name, your institution or town, and the nature of the enquiry."
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-12 md:grid-cols-12 md:px-8 md:py-16">
        <div className="md:col-span-4">
          <h2 className="font-display text-3xl text-forest font-semibold tracking-tight">
            Correspondence
          </h2>
          <div className="paper-card mt-6 space-y-4 p-6 text-sm leading-relaxed text-muted">
            <p>
              <span className="kicker block">Office</span>
              <span className="mt-2 block text-forest">
                {person.role}
                <br />
                {contactCard.department}
                <br />
                {contactCard.institution}
              </span>
            </p>
            <p>
              {contactCard.road}
              <br />
              {contactCard.poBox}
            </p>
            <p>
              <a className="text-forest underline" href={contactCard.phoneHref}>
                {contactCard.phone}
              </a>
            </p>
            <p>
              <a
                className="block text-forest underline"
                href={`mailto:${contactCard.emailAlt}`}
              >
                {contactCard.emailAlt}
              </a>
              <a
                className="mt-1 block text-forest underline"
                href={`mailto:${contactCard.emailPrimary}`}
              >
                {contactCard.emailPrimary}
              </a>
            </p>
            <p>
              <a
                className="text-forest underline"
                href={site.linkedin}
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              {" · "}
              <a
                className="text-forest underline"
                href={site.cvPdf}
                rel="noopener noreferrer"
                target="_blank"
              >
                PDF CV
              </a>
            </p>
          </div>
          <div className="mt-10">
            <p className="kicker">Briefing list</p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
          </div>
        </div>
        <div className="md:col-span-8">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
