import { TextReveal } from "@/components/motion/TextReveal";

type Props = {
  kicker: string;
  title: string;
  lede?: string;
};

export function PageIntro({ kicker, title, lede }: Props) {
  return (
    <header className="border-b border-gold/20 bg-forest text-cream">
      <div className="mx-auto max-w-6xl px-5 pt-28 pb-16 md:px-8 md:pt-32 md:pb-24">
        <p className="kicker motion-fade-up text-gold">{kicker}</p>
        <TextReveal
          as="h1"
          mode="load"
          delay={120}
          text={title}
          className="mt-4 max-w-3xl font-display text-4xl leading-[1.12] italic md:text-6xl"
        />
        {lede ? (
          <p className="motion-fade-up motion-delay-3 mt-6 max-w-2xl text-lg leading-relaxed text-gold-soft/90">
            {lede}
          </p>
        ) : null}
        <div className="rule-draw-load mt-10 h-px w-24 bg-gradient-to-r from-gold to-transparent" />
      </div>
    </header>
  );
}
