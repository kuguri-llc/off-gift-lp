import FadeIn from "./FadeIn";
import { shiori } from "@/lib/content";

export default function Shiori() {
  return (
    <section className="bg-night-950 px-6 py-40 sm:py-56">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] tracking-[0.5em] text-candle">
          {shiori.label}
        </p>
        <h2 className="mt-10 font-mincho text-xl font-medium leading-loose tracking-[0.2em] text-ink sm:text-2xl">
          {shiori.title}
        </h2>
        <div className="mt-14 space-y-4 text-sm leading-loose tracking-[0.1em] text-mist sm:text-base">
          {shiori.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <p className="mt-14 font-mincho text-xs tracking-[0.35em] text-candle-soft">
          {shiori.note}
        </p>
      </FadeIn>
    </section>
  );
}
