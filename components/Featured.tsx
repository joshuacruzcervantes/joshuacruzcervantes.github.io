/**
 * Featured
 * --------
 * The big NET25 Kada Umaga section, right under the hero. Always dark (in
 * light mode too) so it reads like a TV spotlight. Left: outlet, headline,
 * facts and the watch button. Right: an on-air still with Joshua's name bar,
 * plus a smaller wide shot of the panel layered on top.
 * A slim row at the bottom points to the most-watched clip and the channels.
 * All text lives in content.featured / content.media.viralClip.
 */
import { content } from "@/lib/content";
import Reveal from "./Reveal";

const PlayIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export default function Featured() {
  const f = content.featured;
  const clip = content.media?.viralClip;
  const yt = content.socials.find((s) => s.icon === "youtube");
  const tt = content.socials.find((s) => s.icon === "tiktok");

  return (
    <section
      id="featured"
      className="relative overflow-hidden bg-ink py-20 text-white sm:py-28"
    >
      {/* Soft spotlight glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-[-10%] top-[-20%] h-[36rem] w-[36rem] rounded-full bg-brand-500/25 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[24rem] w-[24rem] rounded-full bg-brand-700/15 blur-3xl" />
      </div>

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* ---------- Text ---------- */}
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff5f57] opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff5f57]" />
              </span>
              {f.kicker}
            </p>

            <h2
              className="mt-6 font-sans text-6xl font-extrabold leading-none tracking-tight sm:text-8xl"
              style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
            >
              {f.outlet}
              <span className="mt-2 block text-3xl font-bold text-brand-400 sm:text-5xl">{f.show}</span>
            </h2>

            <p className="mt-6 max-w-xl text-xl font-medium leading-snug text-white sm:text-2xl">
              {f.headline}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">{f.detail}</p>

            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              {f.facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="sr-only">{fact.label}</dt>
                  <dd className="text-2xl font-extrabold text-white">{fact.value}</dd>
                  <dd className="text-xs uppercase tracking-wider text-slate-400">{fact.label}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={f.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-slate-900 shadow-lg transition hover:bg-brand-50"
              >
                <PlayIcon />
                {f.hrefLabel}
              </a>
              <span className="text-sm text-slate-400">{f.date}</span>
            </div>
          </Reveal>

          {/* ---------- Images ---------- */}
          <Reveal delay={0.1}>
            <div className="relative pb-16 sm:pb-20">
              <a
                href={f.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10"
                aria-label={f.hrefLabel}
              >
                <img
                  src={f.image}
                  alt={f.imageAlt}
                  width={1600}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                {/* Small play pill in the corner so it never covers the face */}
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-sm font-semibold text-slate-900 shadow-lg transition group-hover:scale-105">
                  <PlayIcon size={14} />
                  Watch
                </span>
              </a>
              {/* Second shot (with a host), layered bottom-right */}
              <img
                src={f.imageWide}
                alt={f.imageWideAlt}
                width={1600}
                height={900}
                loading="lazy"
                decoding="async"
                className="absolute bottom-0 right-[-4%] aspect-video w-[52%] rounded-xl object-cover shadow-2xl ring-4 ring-ink"
              />
            </div>
          </Reveal>
        </div>

        {/* ---------- Slim creator row ---------- */}
        {clip ? (
          <Reveal delay={0.15}>
            <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <a
                href={clip.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <img
                  src={clip.cover}
                  alt=""
                  loading="lazy"
                  className="h-14 w-14 rounded-lg object-cover ring-1 ring-white/10"
                />
                <span>
                  <span className="block text-sm text-slate-400">Also on Sir Vantes · {clip.views}</span>
                  <span className="block font-semibold text-white transition group-hover:text-brand-300">
                    {clip.title} <span aria-hidden="true">&rarr;</span>
                  </span>
                </span>
              </a>
              <div className="flex gap-3">
                {yt ? (
                  <a href={yt.href} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-brand-400 hover:text-white">
                    YouTube
                  </a>
                ) : null}
                {tt ? (
                  <a href={tt.href} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-brand-400 hover:text-white">
                    TikTok
                  </a>
                ) : null}
              </div>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
