import FadeIn from "./FadeIn";
import { asset } from "@/lib/asset";
import { site, hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="flex min-h-dvh flex-col items-center justify-center bg-paper px-6 py-28 text-center">
      <FadeIn>
        <p className="mb-14 text-[11px] tracking-[0.6em] text-mist">
          OFF, AS A GIFT
        </p>
        <h1 className="font-mincho text-4xl font-medium leading-tight tracking-[0.2em] text-ink sm:text-6xl">
          {site.tagline}
        </h1>
        <p className="mt-10 font-mincho text-sm tracking-[0.3em] text-sumi sm:text-base">
          {site.subcopy}
        </p>
      </FadeIn>

      <FadeIn delay={0.25} className="mt-16">
        <a
          href={hero.ctaHref}
          className="inline-block border border-ink/60 px-12 py-4 text-xs tracking-[0.35em] text-ink transition-colors duration-500 hover:bg-ink hover:text-paper"
        >
          {hero.cta}
        </a>
      </FadeIn>

      <FadeIn delay={0.45} className="mt-20 w-full max-w-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(hero.image.src)}
          alt={hero.image.alt}
          className="mx-auto w-full"
        />
        <p className="mt-8 text-xs leading-relaxed tracking-[0.2em] text-mist">
          {hero.note}
        </p>
      </FadeIn>
    </section>
  );
}
