import FadeIn from "./FadeIn";
import { threeActs } from "@/lib/content";

export default function ThreeActs() {
  return (
    <section className="bg-night-900 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <FadeIn className="text-center">
          <h2 className="font-mincho text-3xl font-medium tracking-[0.15em] text-ink sm:text-4xl">
            {threeActs.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-loose tracking-[0.08em] text-mist sm:text-base">
            {threeActs.lead}
          </p>
        </FadeIn>

        <div className="mt-20 grid gap-14 sm:grid-cols-3 sm:gap-8">
          {threeActs.acts.map((act, i) => (
            <FadeIn key={act.name} delay={i * 0.15} className="text-center">
              <p className="font-mincho text-xs tracking-[0.4em] text-candle">
                {act.act}
              </p>
              <p className="mt-4 font-mincho text-2xl font-medium tracking-[0.3em] text-ink">
                {act.name}
              </p>
              <div
                aria-hidden
                className="mx-auto mt-6 h-px w-10 bg-candle-deep/50"
              />
              <p className="mt-6 text-sm leading-loose tracking-[0.05em] text-mist">
                {act.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
