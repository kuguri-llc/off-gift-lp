import FadeIn from "./FadeIn";
import { site, hero } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      {/* 夜空のグラデーションと、灯りのにじみ */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_110%,rgba(217,164,91,0.14),transparent_60%),linear-gradient(to_bottom,#070c16,#0b1322_70%,#111c31)]"
      />

      <FadeIn>
        <p className="mb-10 font-mincho text-sm tracking-[0.4em] text-mist">
          {site.name}
        </p>
        <h1 className="font-mincho text-5xl font-medium leading-tight tracking-[0.12em] text-ink sm:text-7xl">
          {site.tagline}
        </h1>
        <p className="mt-8 font-mincho text-base tracking-[0.2em] text-mist sm:text-lg">
          {site.subcopy}
        </p>
      </FadeIn>

      <FadeIn delay={0.25} className="mt-14">
        <a
          href={hero.ctaHref}
          className="inline-block rounded-full border border-candle-deep/60 bg-candle/10 px-10 py-4 font-mincho text-sm tracking-[0.25em] text-candle-soft transition-colors duration-500 hover:bg-candle/20"
        >
          {hero.cta}
        </a>
      </FadeIn>

      <FadeIn delay={0.45} className="mt-16 w-full max-w-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={hero.image.src}
          alt={hero.image.alt}
          className="mx-auto w-full rounded-2xl shadow-[0_0_80px_rgba(217,164,91,0.08)]"
        />
        <p className="mt-6 text-xs leading-relaxed tracking-[0.15em] text-mist">
          {hero.note}
        </p>
      </FadeIn>
    </section>
  );
}
