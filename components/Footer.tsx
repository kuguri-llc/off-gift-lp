import { footer } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-night-800 bg-night-950 px-6 py-14">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
        <p className="font-mincho text-lg tracking-[0.3em] text-ink">
          {footer.brand}
        </p>
        <nav aria-label="SNS">
          <ul className="flex gap-8">
            {footer.sns.map((sns) => (
              <li key={sns.label}>
                <a
                  href={sns.href}
                  className="text-xs tracking-[0.25em] text-mist transition-colors duration-300 hover:text-candle-soft"
                >
                  {sns.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-xs tracking-[0.15em] text-mist/60">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
