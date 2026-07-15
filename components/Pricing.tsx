import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import { plans } from "@/lib/content";

export default function Pricing() {
  return (
    <section className="bg-night-900 px-6 py-36 sm:py-48">
      <div className="mx-auto max-w-5xl">
        <SectionHeader label={plans.label} title={plans.title} />

        {/* KITOWA流: 箱で囲わず、細い罫線だけで区切る */}
        <div className="mt-24 grid gap-16 lg:grid-cols-3 lg:gap-10">
          {plans.items.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.12} className="h-full">
              <article
                className={`flex h-full flex-col border-t pt-10 ${
                  plan.featured ? "border-candle" : "border-night-700"
                }`}
              >
                <h3 className="font-mincho text-lg font-medium tracking-[0.25em] text-ink">
                  {plan.name}
                </h3>
                <p className="mt-5 font-mincho text-xl tracking-[0.15em] text-candle-soft">
                  {plan.price}
                </p>
                <p className="mt-6 text-sm leading-loose tracking-[0.05em] text-mist">
                  {plan.description}
                </p>
                <ul className="mt-10 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm leading-relaxed tracking-[0.05em] text-mist"
                    >
                      — {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-16 text-center">
          <p className="text-xs tracking-[0.2em] text-mist/90">{plans.note}</p>
        </FadeIn>
      </div>
    </section>
  );
}
