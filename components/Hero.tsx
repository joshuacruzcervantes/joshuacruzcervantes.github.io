/**
 * Hero
 * ----
 * Person-forward hero for the instructor / researcher / creator identity:
 *   - Left: eyebrow (the three hats), name in the serif display face, the
 *     positioning tagline, supporting text, and CTAs.
 *   - Right: a framed portrait, so the page leads with a person, not a console.
 *   - Background: a faint dotted grid and a soft teal glow. No motion loop.
 */
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
            <p
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-brand-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {hero.eyebrow}
            </p>

            <h1
              className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-6xl"
            >
              {hero.name}
            </h1>

            <p
              className="mt-5 text-lg font-medium leading-relaxed text-slate-700 dark:text-slate-200 sm:text-2xl"
            >
              {hero.tagline}
            </p>

            <p
              className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400"
            >
              {hero.subtext}
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-3"
            >
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
            </div>
          </div>

          {/* Portrait column */}
          <div
            className="relative mx-auto w-full max-w-sm lg:mx-0"
          >
            <div className="absolute -inset-3 rounded-[1.75rem] bg-brand-500/10 blur-xl" aria-hidden="true" />
            <img
              src={hero.photo}
              width={900}
              height={1125}
              fetchPriority="high"
              decoding="async"
              alt={hero.photoAlt}
              className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-xl ring-1 ring-slate-200 dark:ring-slate-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
