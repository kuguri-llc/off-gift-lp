import FadeIn from "./FadeIn";
import SectionHeader from "./SectionHeader";
import { asset } from "@/lib/asset";
import { products } from "@/lib/content";

export default function Products() {
  return (
    <section className="bg-paper-soft px-6 py-36 sm:py-48">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          label={products.label}
          title={products.title}
          lead={products.lead}
        />

        {/* KITOWA流: 枠のないギャラリー形式 */}
        <div className="mt-24 grid gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {products.items.map((item, i) => (
            <FadeIn key={item.name} delay={i * 0.08}>
              <article className="text-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(item.image.src)}
                  alt={item.image.alt}
                  className="aspect-[4/3] w-full object-cover"
                />
                <p className="mt-7 text-[10px] tracking-[0.4em] text-mist">
                  {item.en.toUpperCase()}
                </p>
                <h3 className="mt-3 font-mincho text-base font-medium tracking-[0.2em] text-ink">
                  {item.name}
                </h3>
                <p className="mx-auto mt-4 max-w-xs text-sm leading-loose tracking-[0.04em] text-sumi">
                  {item.description}
                </p>
                <p className="mt-4 text-xs tracking-[0.2em] text-ink">
                  {item.price}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
