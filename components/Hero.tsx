"use client";

/**
 * Hero
 * ----
 * Person-forward hero for the instructor / researcher / creator identity:
 *   - Left: eyebrow (the three hats), name in the serif display face, the
 *     positioning tagline, supporting text, and CTAs.
 *   - Right: a framed portrait, so the page leads with a person, not a console.
 *   - Background: a faint dotted grid and a soft teal glow. No motion loop.
 */
import { motion } from "framer-motion";
import { content } from "@/lib/content";

export default function Hero() {
  const { hero } = content;

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-16"
    >
      {/* ---------- Static background ---------- */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.3] dark:opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgb(148 163 184 / 0.5) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
          }}
        />
        <div className="absolute -left-24 top-[-6rem] h-[28rem] w-[28rem] rounded-full bg-brand-400/20 blur-3xl dark:bg-brand-600/15" />
      </div>

      {/* ---------- Foreground content ---------- */}
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_0.9fr] lg:gap-16">
          {/* Text column */}
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-brand-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {hero.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-6xl"
            >
              {hero.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-5 text-lg font-medium leading-relaxed text-slate-700 dark:text-slate-200 sm:text-2xl"
            >
              {hero.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400"
            >
              {hero.subtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href={hero.ctaPrimary.href}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600 hover:shadow-brand-500/40"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                {hero.ctaPrimary.label}
              </a>
              <a
                href={hero.ctaSecondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:border-brand-500 dark:hover:text-brand-400"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 3c.3 2.1 1.5 3.5 3.5 3.7v2.6c-1.2.1-2.4-.2-3.5-.8v5.9c0 3.2-2.4 5.6-5.5 5.6a5.4 5.4 0 0 1 0-10.8c.3 0 .6 0 .9.1v2.8a2.7 2.7 0 1 0 1.9 2.6V3h2.7z" />
                </svg>
                {hero.ctaSecondary.label}
              </a>
              <a
                href={hero.ctaTertiary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:border-brand-500 dark:hover:text-brand-400"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                {hero.ctaTertiary.label}
              </a>
            </motion.div>
          </div>

          {/* Portrait column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm lg:mx-0"
          >
            <div className="absolute -inset-3 rounded-[1.75rem] bg-brand-500/10 blur-xl" aria-hidden="true" />
            <img
              src={hero.photo}
              alt={hero.photoAlt}
              className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-xl ring-1 ring-slate-200 dark:ring-slate-800"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
