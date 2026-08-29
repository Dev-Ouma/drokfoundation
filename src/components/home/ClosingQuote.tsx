import { Reveal } from "@/components/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { closingQuote } from "@/content/site";

export function ClosingQuote() {
  return (
    <section className="bg-cream px-6 py-20 md:py-24">
      <Reveal className="relative mx-auto max-w-4xl text-center">
        <p
          className="pointer-events-none absolute -top-4 left-0 font-display text-7xl text-gold/20 select-none"
          aria-hidden
        >
          “
        </p>
        <blockquote>
          <TextReveal
            as="p"
            text={closingQuote.text}
            className="font-display text-3xl leading-relaxed text-forest italic md:text-5xl"
          />
          <footer className="mt-6 text-lg font-light text-muted">
            — {closingQuote.attribution}
          </footer>
        </blockquote>
        <div className="rule-draw mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </Reveal>
    </section>
  );
}
