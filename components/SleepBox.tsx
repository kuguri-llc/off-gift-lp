import FadeIn from "./FadeIn";
import { asset } from "@/lib/asset";
import { sleepBox } from "@/lib/content";

export default function SleepBox() {
  return (
    <section className="bg-night-900 px-6 py-36 sm:py-48">
      <div className="mx-auto grid max-w-5xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <FadeIn>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(sleepBox.image.src)}
            alt={sleepBox.image.alt}
            className="w-full"
          />
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="text-[11px] tracking-[0.5em] text-candle">
            {sleepBox.label}
          </p>
          <p className="mt-7 font-mincho text-xs tracking-[0.3em] text-mist">
            {sleepBox.lead}
          </p>
          <h2 className="mt-4 font-mincho text-2xl font-medium leading-snug tracking-[0.15em] text-ink sm:text-3xl">
            {sleepBox.title}
          </h2>
          <p className="mt-10 text-sm leading-loose tracking-[0.05em] text-mist sm:text-base">
            {sleepBox.description}
          </p>

          <ol className="mt-12 space-y-8">
            {sleepBox.steps.map((step, i) => (
              <li key={step.title} className="flex items-start gap-6">
                <span
                  aria-hidden
                  className="mt-1 font-mincho text-xs tracking-[0.2em] text-candle"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-mincho tracking-[0.25em] text-ink">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-mist">
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
