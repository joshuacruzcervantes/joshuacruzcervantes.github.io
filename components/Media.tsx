/**
 * Media — the "On camera" section (TV appearances + the channel).
 * Reads content.media. Cards show an image when one is provided.
 */
import { content } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Media() {
  const m = content.media;
  if (!m) return null;

  return (
    <section id="media" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading title={m.heading} kicker={m.kicker} />

        {m.viralClip ? (
          <Reveal>
            <a
              href={m.viralClip.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 grid overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 sm:grid-cols-[14rem_1fr]"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-slate-900 sm:aspect-auto sm:h-full">
                <img
                  src={m.viralClip.cover}
                  alt={m.viralClip.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-white/90 text-slate-900 shadow-lg transition group-hover:scale-110">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </span>
              </div>
              <div className="flex flex-col justify-center p-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                  {m.viralClip.series}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                  {m.viralClip.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {m.viralClip.views}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {m.viralClip.blurb}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition group-hover:gap-2.5 dark:text-brand-400">
                  {m.viralClip.hrefLabel} <span aria-hidden>→</span>
                </span>
              </div>
            </a>
          </Reveal>
        ) : null}

        <div className="mt-6 grid gap-6">
          {m.items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <article className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 sm:grid-cols-[16rem_1fr]">
                {it.image ? (
                  <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800 sm:aspect-auto sm:h-full">
                    <img
                      src={it.image}
                      alt={it.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : null}
                <div className="flex flex-col justify-center p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {it.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-700 dark:text-brand-300">
                    {it.period}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {it.detail}
                  </p>
                  {it.href ? (
                    <a
                      href={it.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition hover:gap-2.5 dark:text-brand-400"
                    >
                      {it.hrefLabel} <span aria-hidden>→</span>
                    </a>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
