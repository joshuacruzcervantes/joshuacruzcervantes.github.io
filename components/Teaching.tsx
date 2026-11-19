/**
 * Teaching
 * --------
 * The section that sells the academe pivot to deans/HR. It shows:
 *   - The subjects/courses you teach (as cards).
 *   - A small gallery of live teaching photos.
 * (The YouTube/TikTok call-outs moved to a slim row in components/Featured.tsx.)
 *
 * It sits on a subtly tinted background to visually separate the "teaching"
 * story from the "technical" sections around it.
 */
import type { ReactNode } from "react";
import { content } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import StatRow from "./StatRow";
import { BarList, DashCard } from "./Charts";

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

  return (
    <section
      id="teaching"
      className="border-y border-slate-100 bg-slate-50/60 py-20 dark:border-slate-800/60 dark:bg-slate-900/40 sm:py-28"
    >
      <div className="container-page">
        <SectionHeading title={teaching.heading} kicker={teaching.kicker} intro={teaching.intro} />

        <StatRow stats={teaching.stats} />

        {/* This term chart + subjects */}
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <Reveal>
            <DashCard title="This term at ACLC Baliuag" note="Subjects I handle this term, grouped by area.">
              <BarList
                unit="subjects"
                rows={teaching.termLoad.map((t) => ({
                  label: t.area,
                  value: t.subjects.length,
                  detail: t.subjects.join(" · "),
                }))}
              />
            </DashCard>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-2">
            {teaching.subjects.map((subject, i) => (
              <Reveal key={subject.title} delay={i * 0.06}>
                <div>
                  <div className="text-brand-600 dark:text-brand-400">
                    {subjectIcons[subject.icon] ?? subjectIcons.network}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-slate-900 dark:text-white">{subject.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {subject.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Teaching photos */}
        <Reveal delay={0.1}>
          <div className="mt-14">
            <div className="grid gap-4 sm:grid-cols-3">
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
                    className="aspect-[16/8] w-full object-cover object-bottom transition duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
