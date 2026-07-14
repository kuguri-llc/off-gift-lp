import FadeIn from "./FadeIn";
import { shiori } from "@/lib/content";

export default function Shiori() {
  return (
    <section className="relative overflow-hidden bg-night-950 px-6 py-32 sm:py-44">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(217,164,91,0.06),transparent_70%)]"
      />
      <FadeIn className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-mincho text-2xl font-medium leading-relaxed tracking-[0.15em] text-ink sm:text-3xl">
          {shiori.title}
        </h2>
        <div className="mt-12 space-y-4 text-sm leading-loose tracking-[0.08em] text-mist sm:text-base">
          {shiori.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <p className="mt-12 font-mincho text-xs tracking-[0.3em] text-candle">
          {shiori.note}
        </p>
      </FadeIn>
    </section>
  );
}
