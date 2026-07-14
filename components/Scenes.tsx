import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import { scenes } from "@/lib/content";

export default function Scenes() {
  return (
    <section className="bg-night-950 px-6 py-36 sm:py-48">
      <div className="mx-auto max-w-4xl">
        <SectionHeader label={scenes.label} title={scenes.title} />

        <div className="mt-24 grid gap-16 text-center sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {scenes.items.map((scene, i) => (
            <FadeIn key={scene.title} delay={i * 0.08}>
              <h3 className="font-mincho text-base font-medium tracking-[0.4em] text-candle-soft">
                {scene.title}
              </h3>
              <div
                aria-hidden
                className="mx-auto mt-6 h-px w-6 bg-candle-deep/40"
              />
              <p className="mt-6 text-sm leading-loose tracking-[0.08em] text-mist">
                {scene.text}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
