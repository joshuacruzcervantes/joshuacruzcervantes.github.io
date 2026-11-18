/**
 * Hero
 * ----
 * Big-statement hero (layout inspired by nateherk.com):
 *   - Left: proof numbers, name + credential line, a huge headline with one
 *     accent word, one short sentence, then the three audience "doors"
 *     (first one is a solid button, the rest are text links).
 *   - Right: portrait over a soft brand-colored circle, fading out at the bottom.
 * All text comes from content.hero in lib/content.ts.
 */
import { content } from "@/lib/content";

export default function Hero() {
  const { hero } = content;
  const [primary, ...secondary] = hero.doors;

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-20"
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

      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:gap-12">
          {/* ---------- Text column ---------- */}
          <div>
            {/* Proof numbers */}
            <dl className="flex flex-wrap gap-x-8 gap-y-4">
              {hero.stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-sans text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                    {s.value}
                  </dd>
                  <dd className="text-xs text-slate-500 dark:text-slate-400">{s.label}</dd>
                </div>
              ))}
            </dl>

            {/* Name + where I teach/study */}
            <p className="mt-10 text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              {hero.name}
            </p>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{hero.credentials}</p>

            {/* The big statement */}
            <h1
              className="mt-4 font-sans text-5xl font-extrabold leading-[1.02] tracking-tight text-slate-900 dark:text-white sm:text-7xl"
              style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
            >
              {hero.headline}{" "}
              <span className="text-brand-600 dark:text-brand-400">{hero.headlineAccent}</span>.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-700 dark:text-slate-300 sm:text-xl">
              {hero.subtext}
            </p>

            {/* Audience doors */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={primary.href}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-400"
              >
                {primary.label}
                <span aria-hidden="true">&rarr;</span>
              </a>
              {secondary.map((door) => (
                <a
                  key={door.href}
                  href={door.href}
                  className="text-base font-semibold text-slate-800 underline decoration-brand-500/60 decoration-2 underline-offset-[6px] transition hover:text-brand-600 hover:decoration-brand-500 dark:text-slate-100 dark:hover:text-brand-400"
                >
                  {door.label}
                </a>
              ))}
            </div>
          </div>

          {/* ---------- Portrait column ---------- */}
          <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-md">
            {/* Soft brand glow behind the arch */}
            <div
              className="absolute -inset-6 rounded-t-full bg-brand-500/20 blur-3xl dark:bg-brand-500/15"
              aria-hidden="true"
            />
            {/* Arch-framed photo: on set at NET25, studio blurred behind */}
            <img
              src={hero.photo}
              width={960}
              height={1200}
              fetchPriority="high"
              decoding="async"
              alt={hero.photoAlt}
              className="relative aspect-[4/5] w-full rounded-t-full rounded-b-3xl object-cover shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
