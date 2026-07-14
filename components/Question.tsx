import FadeIn from "./FadeIn";
import { question } from "@/lib/content";

export default function Question() {
  return (
    <section className="bg-night-950 px-6 py-40 sm:py-56">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] tracking-[0.5em] text-candle">
          {question.label}
        </p>
        <h2 className="mt-10 font-mincho text-xl font-medium leading-loose tracking-[0.2em] text-ink sm:text-2xl">
          {question.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <div className="mt-14 space-y-3 text-sm leading-loose tracking-[0.12em] text-mist sm:text-base">
          {question.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
