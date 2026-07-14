import FadeIn from "./FadeIn";
import { plans } from "@/lib/content";

export default function Pricing() {
  return (
    <section className="bg-night-900 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <FadeIn className="text-center">
          <h2 className="font-mincho text-3xl font-medium tracking-[0.15em] text-ink sm:text-4xl">
            {plans.title}
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.items.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.12} className="h-full">
              <article
                className={`flex h-full flex-col rounded-xl border p-8 ${
                  plan.featured
                    ? "border-candle-deep/70 bg-night-800 shadow-[0_0_50px_rgba(217,164,91,0.08)]"
                    : "border-night-700/60 bg-night-950/60"
                }`}
              >
                <h3 className="font-mincho text-xl font-medium tracking-[0.2em] text-ink">
                  {plan.name}
                </h3>
                <p className="mt-4 font-mincho text-2xl tracking-[0.1em] text-candle-soft">
                  {plan.price}
                </p>
                <p className="mt-5 text-sm leading-loose tracking-[0.05em] text-mist">
                  {plan.description}
                </p>
                <ul className="mt-8 space-y-3 border-t border-night-700/60 pt-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-relaxed text-mist"
                    >
                      <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-candle" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-10 text-center">
          <p className="text-xs tracking-[0.15em] text-mist">{plans.note}</p>
        </FadeIn>
      </div>
    </section>
  );
}
