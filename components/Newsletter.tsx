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
    <section id="newsletter" className="bg-paper px-6 py-40 sm:py-52">
      <FadeIn className="mx-auto max-w-xl text-center">
        <p className="text-[11px] tracking-[0.5em] text-mist">
          {newsletter.label}
        </p>
        <h2 className="mt-10 font-mincho text-xl font-medium leading-loose tracking-[0.2em] text-ink sm:text-2xl">
          {newsletter.title}
        </h2>
        <p className="mt-8 text-sm leading-loose tracking-[0.08em] text-sumi">
          {newsletter.body}
        </p>

        {submitted ? (
          <p
            role="status"
            className="mt-14 font-mincho text-sm leading-loose tracking-[0.2em] text-candle-deep"
          >
            {newsletter.success}
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-14 flex flex-col items-stretch gap-6 sm:flex-row sm:items-end"
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
              className="w-full flex-1 border-b border-line bg-transparent px-1 py-3 text-sm tracking-wide text-ink placeholder:text-mist focus:border-ink focus:outline-none"
            />
            <button
              type="submit"
              className="border border-ink/60 px-10 py-3.5 text-xs tracking-[0.3em] text-ink transition-colors duration-500 hover:bg-ink hover:text-paper"
            >
              {newsletter.button}
            </button>
          </form>
        )}

        <p className="mt-10 text-xs tracking-[0.15em] text-mist">
          {newsletter.privacy}
        </p>
      </FadeIn>
    </section>
  );
}
