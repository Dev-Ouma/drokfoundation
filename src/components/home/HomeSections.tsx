import Link from "next/link";
import { Portrait } from "@/components/Portrait";
import { Reveal } from "@/components/Reveal";
import { MotionImage } from "@/components/motion/MotionImage";
import { TextReveal } from "@/components/motion/TextReveal";
import {
  RecognitionCarousel,
  type CarouselSlide,
} from "@/components/home/RecognitionCarousel";
import { gallery, homeBio } from "@/content/site";
import { getMedia } from "@/lib/media";

function buildSlides(): CarouselSlide[] {
  const { official, portrait } = getMedia();
  if (official.length > 0) {
    return official.map((shot, i) => ({
      src: shot.src,
      alt: shot.alt,
      caption: i === 0 ? "Dr. Joel Okutoyi" : "In service",
      credit: "Official photograph",
    }));
  }
  if (portrait.ready) {
    return [
      {
        src: portrait.src,
        alt: portrait.alt,
        caption: "Dr. Joel Okutoyi",
        credit: "Official photograph",
      },
      ...gallery.slice(0, 4).map((g) => ({
        src: g.src,
        alt: g.alt,
        caption: g.caption,
        credit: g.credit,
      })),
    ];
  }
  return gallery.slice(0, 5).map((g) => ({
    src: g.src,
    alt: g.alt,
    caption: g.caption,
    credit: g.credit,
  }));
}

export function HomeSections() {
  const slides = buildSlides();

  return (
    <>
      <section id="about-snapshot" className="bg-forest py-20 text-cream md:py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 md:grid-cols-[220px_1fr] md:px-8">
          <Reveal variant="scale" className="mx-auto -mt-16 md:mx-0 md:-mt-10">
            <Portrait
              size="xl"
              onDark
              className="mx-auto transition duration-500 hover:scale-[1.02]"
            />
          </Reveal>
          <Reveal className="space-y-6 text-center md:text-left" delay={80}>
            <p className="text-lg leading-relaxed text-cream/80 lg:text-xl">
              {homeBio}
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-block rounded-full border-2 border-gold px-8 py-3 text-sm font-semibold tracking-wide text-gold uppercase transition duration-300 hover:bg-gold hover:text-forest"
              >
                Read full bio →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream px-6 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <TextReveal
            as="h2"
            text="Global impact & recognition"
            className="mb-10 text-center font-display text-4xl text-forest italic md:text-5xl"
          />

          <div className="grid items-start gap-8 md:grid-cols-[52fr_48fr] lg:gap-10">
            <Reveal variant="left">
              <RecognitionCarousel slides={slides} />
            </Reveal>

            <Reveal
              variant="right"
              delay={80}
              className="relative mx-auto aspect-square w-full max-w-[540px]"
            >
              <MotionImage
                src="/images/western-kenya-hills.jpg"
                alt="Western Kenya — the geography of his research and public vocation."
                fill
                frameClassName="absolute inset-0 rounded-2xl border border-gold/20 bg-cream-deep shadow-md"
                imageClassName="object-cover"
                sizes="(min-width: 768px) 48vw, 100vw"
              />
              <div className="absolute inset-0 z-10 flex flex-col justify-end rounded-2xl bg-gradient-to-t from-forest/85 via-forest/35 to-transparent p-6 md:p-8">
                <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-gold uppercase">
                  Geography of service
                </p>
                <p className="mt-2 font-display text-2xl text-cream italic md:text-3xl">
                  Kakamega · Kisumu · Dadaab · Butere
                </p>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/80">
                  Classrooms, funded projects, and the constituency he is
                  preparing to serve in 2032.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
