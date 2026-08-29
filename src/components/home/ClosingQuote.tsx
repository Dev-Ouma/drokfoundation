import { Reveal } from "@/components/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { closingQuote } from "@/content/site";

export function ClosingQuote() {
  return (
    <section className="bg-cream px-6 py-16 md:py-20">
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <p
          className="pointer-events-none absolute -top-2 left-2 font-display text-6xl leading-none text-gold/30 select-none md:-top-4 md:left-0 md:text-7xl"
          aria-hidden
        >
          “
        </p>
        <blockquote className="px-2 pt-6 md:pt-4">
          <TextReveal
            as="p"
            text={closingQuote.text}
            className="font-display text-2xl leading-snug text-forest italic md:text-4xl md:leading-relaxed"
          />
          <footer className="mt-6 text-base font-light text-muted md:text-lg">
            — {closingQuote.attribution}
          </footer>
        </blockquote>
        <div className="rule-draw mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </Reveal>
    </section>
  );
}
