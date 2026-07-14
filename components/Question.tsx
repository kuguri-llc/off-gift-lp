import FadeIn from "./FadeIn";
import { question } from "@/lib/content";

export default function Question() {
  return (
    <section className="bg-night-950 px-6 py-32 sm:py-44">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <h2 className="font-mincho text-2xl font-medium leading-relaxed tracking-[0.15em] text-ink sm:text-3xl">
          {question.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <div className="mt-12 space-y-2 text-sm leading-loose tracking-[0.1em] text-mist sm:text-base">
          {question.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
