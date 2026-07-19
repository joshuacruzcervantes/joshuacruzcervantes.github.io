/**
 * Teaching
 * --------
 * The section that sells the academe pivot to deans/HR. It shows:
 *   - The subjects/courses you teach (as cards).
 *   - A YouTube call-out for "Sir Vantes" — auto-embeds your latest upload
 *     (via the channel's "uploads" playlist, no manual video IDs needed),
 *     unless you pin a specific demoVideoId in content.ts.
 *   - A TikTok call-out using TikTok's official Creator Profile embed, which
 *     shows your live follower count and 10 most recent videos automatically.
 *
 * It sits on a subtly tinted background to visually separate the "teaching"
 * story from the "technical" sections around it.
 */
import type { ReactNode } from "react";
import Script from "next/script";
import { content } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Line icons for the subject cards, drawn in the same stroke style as the rest
 * of the site's icons. Each subject in content.ts picks one by name via its
 * `icon` field ("network" | "hardware" | "security" | "code").
 */
const subjectIcons: Record<string, ReactNode> = {
  // Three connected nodes — a mini network diagram.
  network: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="19" r="2.5" />
      <circle cx="19" cy="19" r="2.5" />
      <path d="M10.8 7.2 6.2 16.8M13.2 7.2l4.6 9.6M7.5 19h9" />
    </svg>
  ),
  // A desktop tower with a screwdriver-ish diagonal — hardware servicing.
  hardware: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="9" height="18" rx="1.5" />
      <path d="M7 7h3M7 10h3" />
      <circle cx="8.5" cy="16.5" r="1" />
      <path d="M16 14l4.5 4.5M15 19.5 19.5 15" />
    </svg>
  ),
  // A shield with a keyhole — security.
  security: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 5 6v5c0 4.5 3 8.2 7 10 4-1.8 7-5.5 7-10V6l-7-3z" />
      <circle cx="12" cy="10.5" r="1.8" />
      <path d="M12 12.3V15" />
    </svg>
  ),
  // Angle brackets and a slash — programming.
  code: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 5l-3 14" />
    </svg>
  ),
};

export default function Teaching() {
  const { teaching } = content;

  // Defensive: a YouTube video ID is 11 characters of [A-Za-z0-9_-]. We strip
  // anything else from the config value so a malformed/edited entry can never
  // change the embed URL or inject unexpected query params.
  const safeVideoId = teaching.youtube.demoVideoId.replace(/[^A-Za-z0-9_-]/g, "");
  // Same defensive stripping for the channel ID (always starts with "UC").
  const safeChannelId = teaching.youtube.channelId.replace(/[^A-Za-z0-9_-]/g, "");
  // A channel's "uploads" playlist is always its channel ID with "UC" swapped
  // for "UU" — embedding it as a playlist auto-shows the newest video first,
  // with zero manual updates whenever you upload.
  const uploadsPlaylistId = safeChannelId.replace(/^UC/, "UU");
  const safeTiktokHandle = teaching.tiktok.handle.replace(/[^A-Za-z0-9_.]/g, "");

  return (
    <section
      id="teaching"
      className="border-y border-slate-100 bg-slate-50/60 py-20 dark:border-slate-800/60 dark:bg-slate-900/40 sm:py-28"
    >
      <div className="container-page">
        <SectionHeading title={teaching.heading} kicker={teaching.kicker} intro={teaching.intro} />

        {/* Subject cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {teaching.subjects.map((subject, i) => (
            <Reveal key={subject.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-700">
                <div className="inline-grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-100 dark:bg-brand-950/50 dark:text-brand-400 dark:group-hover:bg-brand-950">
                  {subjectIcons[subject.icon] ?? subjectIcons.network}
                </div>
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
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={teaching.youtube.channelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
                  >
                    Visit the channel
                    <span aria-hidden>→</span>
                  </a>
                  {/* Same destination as "Visit the channel" above (YouTube
                      has no separate one-click subscribe link) — shown as a
                      plain label rather than a second live link. */}
                  <span
                    aria-hidden="true"
                    className="inline-flex cursor-default select-none items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-400 dark:border-slate-800 dark:text-slate-500"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
                    </svg>
                    Subscribe to YouTube
                  </span>
                </div>
              </div>

              {/* Right: embedded video — either a pinned demoVideoId, or (by
                  default) the channel's uploads playlist, which always opens
                  on the newest video with no manual updates required. */}
              <div className="aspect-video w-full bg-slate-900 md:aspect-auto md:h-full md:min-h-[18rem]">
                {safeVideoId ? (
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
                ) : uploadsPlaylistId ? (
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/videoseries?list=${uploadsPlaylistId}`}
                    title={`${teaching.youtube.channelName}: latest video`}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  // Fallback if no channelId/demoVideoId is configured at all.
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

        {/* TikTok call-out — official Creator Profile embed (live follower
            count + 10 most recent videos, refreshed automatically). */}
        <Reveal delay={0.15}>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <div className="grid items-center gap-0 md:grid-cols-2">
              {/* Left: text + CTA */}
              <div className="p-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.5 3c.3 2.1 1.5 3.5 3.5 3.7v2.6c-1.2.1-2.4-.2-3.5-.8v5.9c0 3.2-2.4 5.6-5.5 5.6a5.4 5.4 0 0 1 0-10.8c.3 0 .6 0 .9.1v2.8a2.7 2.7 0 1 0 1.9 2.6V3h2.7z" />
                  </svg>
                  TikTok · @{teaching.tiktok.handle}
                </div>
                <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
                  Catch my latest clips
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {teaching.tiktok.blurb}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={teaching.tiktok.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                  >
                    Visit the profile
                    <span aria-hidden>→</span>
                  </a>
                  {/* Same destination as "Visit the profile" above (TikTok
                      has no separate one-click follow link) — shown as a
                      plain label rather than a second live link. */}
                  <span
                    aria-hidden="true"
                    className="inline-flex cursor-default select-none items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-400 dark:border-slate-800 dark:text-slate-500"
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M16.5 3c.3 2.1 1.5 3.5 3.5 3.7v2.6c-1.2.1-2.4-.2-3.5-.8v5.9c0 3.2-2.4 5.6-5.5 5.6a5.4 5.4 0 0 1 0-10.8c.3 0 .6 0 .9.1v2.8a2.7 2.7 0 1 0 1.9 2.6V3h2.7z" />
                    </svg>
                    Follow on TikTok
                  </span>
                </div>
              </div>

              {/* Right: TikTok's official embed widget. Their embed.js script
                  scans the page for ".tiktok-embed" and swaps it for a live
                  iframe — the follower count and video grid it renders are
                  always current, no code changes needed on our end. */}
              <div className="flex min-h-[18rem] w-full items-center justify-center bg-slate-50 p-4 dark:bg-slate-950/40 md:h-full">
                {safeTiktokHandle ? (
                  <blockquote
                    className="tiktok-embed"
                    cite={teaching.tiktok.profileUrl}
                    data-unique-id={safeTiktokHandle}
                    data-embed-type="creator"
                    style={{ maxWidth: "100%", minWidth: "288px" }}
                  >
                    <section>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`${teaching.tiktok.profileUrl}?refer=creator_embed`}
                      >
                        @{safeTiktokHandle}
                      </a>
                    </section>
                  </blockquote>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>
        <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
      </div>
    </section>
  );
}
