import FadeIn from "./FadeIn";
import { asset } from "@/lib/asset";
import { site, hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 py-28 text-center">
      {/* 夜空のグラデーションと、灯りのにじみ */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_110%,rgba(228,177,103,0.16),transparent_60%),linear-gradient(to_bottom,#101a2e,#17233c_70%,#1e2c4a)]"
      />

      <FadeIn>
        <p className="mb-14 text-[11px] tracking-[0.6em] text-mist">
          OFF, AS A GIFT
        </p>
        <h1 className="font-mincho text-4xl font-medium leading-tight tracking-[0.2em] text-ink sm:text-6xl">
          {site.tagline}
        </h1>
        <p className="mt-10 font-mincho text-sm tracking-[0.3em] text-mist sm:text-base">
          {site.subcopy}
        </p>
      </FadeIn>

      <FadeIn delay={0.25} className="mt-16">
        <a
          href={hero.ctaHref}
          className="inline-block border border-candle-deep/50 px-12 py-4 text-xs tracking-[0.35em] text-candle-soft transition-colors duration-500 hover:bg-candle/10"
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
