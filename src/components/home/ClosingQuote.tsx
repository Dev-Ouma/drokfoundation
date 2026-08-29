import { Reveal } from "@/components/Reveal";
import { closingQuote } from "@/content/site";

export function ClosingQuote() {
  return (
    <section className="bg-forest px-5 py-20 text-cream md:px-8 md:py-28">
      <Reveal className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-gold-soft uppercase">
            Guiding conviction
          </p>
          <blockquote className="mt-6 border-l border-gold/45 pl-6 md:pl-8">
            <p className="font-display text-2xl leading-snug font-medium tracking-tight md:text-[2.15rem] md:leading-[1.28]">
              {closingQuote.text}
            </p>
            <footer className="mt-8 text-sm tracking-[0.08em] text-cream/50 uppercase">
              {closingQuote.attribution}
            </footer>
          </blockquote>
        </div>
      </Reveal>
    </section>
  );
}
