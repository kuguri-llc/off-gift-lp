"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import { newsletter } from "@/lib/content";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // 送信先は未定のため、ダミーのハンドラ。
  // 実装時はここを API / フォームサービスへの POST に差し替える。
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden bg-night-900 px-6 py-32 sm:py-40"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(217,164,91,0.1),transparent_65%)]"
      />
      <FadeIn className="relative mx-auto max-w-xl text-center">
        <h2 className="font-mincho text-2xl font-medium leading-relaxed tracking-[0.15em] text-ink sm:text-3xl">
          {newsletter.title}
        </h2>
        <p className="mt-6 text-sm leading-loose tracking-[0.08em] text-mist">
          {newsletter.body}
        </p>

        {submitted ? (
          <p
            role="status"
            className="mt-12 font-mincho text-sm leading-loose tracking-[0.15em] text-candle-soft"
          >
            {newsletter.success}
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              {newsletter.placeholder}
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={newsletter.placeholder}
              className="w-full flex-1 rounded-full border border-night-700 bg-night-950/80 px-6 py-4 text-sm tracking-wide text-ink placeholder:text-mist/60 focus:border-candle-deep focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full border border-candle-deep/60 bg-candle/10 px-8 py-4 font-mincho text-sm tracking-[0.2em] text-candle-soft transition-colors duration-500 hover:bg-candle/20"
            >
              {newsletter.button}
            </button>
          </form>
        )}

        <p className="mt-8 text-xs tracking-[0.1em] text-mist/70">
          {newsletter.privacy}
        </p>
      </FadeIn>
    </section>
  );
}
