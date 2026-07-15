import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import { threeActs } from "@/lib/content";

export default function ThreeActs() {
  return (
    <section className="bg-paper px-6 py-36 sm:py-48">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          label={threeActs.label}
          title={threeActs.title}
          lead={threeActs.lead}
        />

        <div className="mt-24 grid gap-16 sm:grid-cols-3 sm:gap-10">
          {threeActs.acts.map((act, i) => (
            <FadeIn key={act.name} delay={i * 0.15} className="text-center">
              <p className="font-mincho text-[11px] tracking-[0.5em] text-candle-deep">
                {act.act}
              </p>
              <p className="mt-5 font-mincho text-xl font-medium tracking-[0.4em] text-ink">
                {act.name}
              </p>
              <div
                aria-hidden
                className="mx-auto mt-8 h-px w-8 bg-candle/60"
              />
              <p className="mt-8 text-sm leading-loose tracking-[0.05em] text-sumi">
                {act.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
