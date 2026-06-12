/**
 * Teaching
 * --------
 * The section that sells the academe pivot to deans/HR. It shows:
 *   - The subjects/courses you teach (as cards).
 *   - A YouTube call-out for "Sir Vantes" — either an embedded demo video (if
 *     you set a demoVideoId in content.ts) or a button linking to your channel.
 *
 * It sits on a subtly tinted background to visually separate the "teaching"
 * story from the "technical" sections around it.
 */
import { content } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Teaching() {
  const { teaching } = content;

  // Defensive: a YouTube video ID is 11 characters of [A-Za-z0-9_-]. We strip
  // anything else from the config value so a malformed/edited entry can never
  // change the embed URL or inject unexpected query params.
  const safeVideoId = teaching.youtube.demoVideoId.replace(/[^A-Za-z0-9_-]/g, "");

  return (
    <section
      id="teaching"
      className="border-y border-slate-100 bg-slate-50/60 py-20 dark:border-slate-800/60 dark:bg-slate-900/40 sm:py-28"
    >
      <div className="container-page">
        <SectionHeading title={teaching.heading} intro={teaching.intro} />

        {/* Subject cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {teaching.subjects.map((subject, i) => (
            <Reveal key={subject.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700">
                <div className="text-3xl">{subject.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                  {subject.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {subject.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Teaching demo gallery */}
        <Reveal delay={0.1}>
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {teaching.gallery.heading}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {teaching.gallery.caption}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {teaching.gallery.images.map((img) => (
                <div
                  key={img.src}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700"
                >
                  {/* Plain <img> (not next/image) — the site is statically exported. */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-video w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* YouTube call-out */}
        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <div className="grid items-center gap-0 md:grid-cols-2">
              {/* Left: text + CTA */}
              <div className="p-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 dark:bg-red-950/40 dark:text-red-400">
                  {/* YouTube glyph */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
                  </svg>
                  YouTube · {teaching.youtube.channelName}
                </div>
                <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
                  See me teach, live
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {teaching.youtube.blurb}
                </p>
                <a
                  href={teaching.youtube.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                >
                  Visit the channel
                  <span aria-hidden>→</span>
                </a>
              </div>

              {/* Right: embedded video OR a branded placeholder. */}
              <div className="aspect-video w-full bg-slate-900 md:aspect-auto md:h-full md:min-h-[18rem]">
                {safeVideoId ? (
                  // If you set a demoVideoId in content.ts, embed it here.
                  // We use youtube-nocookie.com (privacy-enhanced mode) so YouTube
                  // doesn't set tracking cookies until the visitor actually plays,
                  // and request only the permissions the player needs.
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${safeVideoId}`}
                    title={`${teaching.youtube.channelName} teaching demo`}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  // Otherwise show a clean placeholder linking to the channel.
                  <a
                    href={teaching.youtube.channelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full min-h-[14rem] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-800 to-slate-900 text-slate-300 transition"
                  >
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-red-600 text-white transition group-hover:scale-110">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium">Watch on YouTube</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
