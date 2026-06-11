"use client";

/**
 * Hero
 * ----
 * The first thing visitors see. It's intentionally clean and professional:
 *   - An eyebrow label, your name, the dual-audience tagline, and supporting text.
 *   - Two CTAs: "View CV" (downloads the PDF) and "Watch me teach" (YouTube).
 *   - A subtle, tasteful animated background: two soft, slowly-drifting color
 *     blobs behind a faint dotted grid. No "hacker" vibes — just polish.
 *
 * The animation is GPU-friendly (transform/opacity only) so it stays smooth and
 * doesn't hurt performance scores.
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
      {/* ---------- Animated background ---------- */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Faint dotted grid */}
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgb(148 163 184 / 0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            // Fade the grid out toward the edges with a mask.
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
          }}
        />

        {/* Soft drifting blob #1 (brand blue) */}
        <motion.div
          className="absolute -left-24 top-[-6rem] h-[28rem] w-[28rem] rounded-full bg-brand-400/30 blur-3xl dark:bg-brand-600/20"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Soft drifting blob #2 (cool indigo) */}
        <motion.div
          className="absolute -right-24 bottom-[-6rem] h-[26rem] w-[26rem] rounded-full bg-indigo-400/25 blur-3xl dark:bg-indigo-600/20"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ---------- Foreground content ---------- */}
      <div className="container-page">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-brand-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            {hero.eyebrow}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl"
          >
            {hero.name}
          </motion.h1>

          {/* Tagline (the dual-audience positioning statement) */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-5 text-lg font-medium leading-relaxed text-slate-700 dark:text-slate-200 sm:text-2xl"
          >
            {hero.tagline}
          </motion.p>

          {/* Supporting subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400"
          >
            {hero.subtext}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {/* "download" tells the browser to download the PDF rather than open it */}
            <a
              href={hero.ctaPrimary.href}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600 hover:shadow-brand-500/40"
            >
              {/* download icon */}
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
              {/* play icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              {hero.ctaSecondary.label}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
