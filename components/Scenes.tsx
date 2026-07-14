import FadeIn from "./FadeIn";
import { scenes } from "@/lib/content";

export default function Scenes() {
  return (
    <section className="bg-night-950 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl">
        <FadeIn className="text-center">
          <h2 className="font-mincho text-3xl font-medium tracking-[0.15em] text-ink sm:text-4xl">
            {scenes.title}
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-night-700/60 bg-night-700/60 sm:grid-cols-2">
          {scenes.items.map((scene, i) => (
            <FadeIn key={scene.title} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col items-center bg-night-900 px-8 py-12 text-center">
                <h3 className="font-mincho text-lg font-medium tracking-[0.3em] text-candle-soft">
                  {scene.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed tracking-[0.08em] text-mist">
                  {scene.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
