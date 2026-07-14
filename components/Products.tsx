import FadeIn from "./FadeIn";
import { products } from "@/lib/content";

export default function Products() {
  return (
    <section className="bg-night-950 px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-5xl">
        <FadeIn className="text-center">
          <h2 className="font-mincho text-3xl font-medium tracking-[0.15em] text-ink sm:text-4xl">
            {products.title}
          </h2>
          <p className="mt-6 text-sm leading-loose tracking-[0.08em] text-mist sm:text-base">
            {products.lead}
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.items.map((item, i) => (
            <FadeIn key={item.name} delay={i * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-xl border border-night-700/60 bg-night-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-mincho text-lg font-medium tracking-[0.15em] text-ink">
                      {item.name}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-candle-deep">
                      {item.en}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed tracking-[0.05em] text-mist">
                    {item.description}
                  </p>
                  <p className="mt-4 font-mincho text-sm tracking-[0.1em] text-candle-soft">
                    {item.price}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
