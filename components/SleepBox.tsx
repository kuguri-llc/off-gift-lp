import FadeIn from "./FadeIn";
import { asset } from "@/lib/asset";
import { sleepBox } from "@/lib/content";

export default function SleepBox() {
  return (
    <section className="bg-night-900 px-6 py-28 sm:py-36">
      <div className="mx-auto grid max-w-5xl items-center gap-14 lg:grid-cols-2">
        <FadeIn>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(sleepBox.image.src)}
            alt={sleepBox.image.alt}
            className="w-full rounded-2xl shadow-[0_0_60px_rgba(217,164,91,0.07)]"
          />
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="font-mincho text-xs tracking-[0.4em] text-candle">
            {sleepBox.lead}
          </p>
          <h2 className="mt-5 font-mincho text-3xl font-medium leading-snug tracking-[0.12em] text-ink sm:text-4xl">
            {sleepBox.title}
          </h2>
          <p className="mt-8 text-sm leading-loose tracking-[0.05em] text-mist sm:text-base">
            {sleepBox.description}
          </p>

          <ol className="mt-10 space-y-6">
            {sleepBox.steps.map((step, i) => (
              <li key={step.title} className="flex items-start gap-5">
                <span
                  aria-hidden
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-candle-deep/50 font-mincho text-sm text-candle"
                >
                  {i + 1}
                </span>
                <div>
                  <p className="font-mincho tracking-[0.2em] text-ink">
                    {step.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-mist">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </FadeIn>
      </div>
    </section>
  );
}
