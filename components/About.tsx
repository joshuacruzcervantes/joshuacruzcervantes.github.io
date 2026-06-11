/**
 * About
 * -----
 * A short narrative about who you are, paired with your professional photo and
 * a row of quick "highlight" chips. The text comes from content.about.
 *
 * Photo: drop a square-ish image at /public/profile.jpg (see README). Until you
 * do, a styled placeholder shows in its place.
 */
import { content } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { about } = content;

  return (
    <section id="about" className="container-page py-20 sm:py-28">
      <SectionHeading title={about.heading} />

      <div className="mt-12 grid items-start gap-10 md:grid-cols-5">
        {/* Photo column */}
        <Reveal className="md:col-span-2">
          <div className="relative mx-auto max-w-xs">
            {/* Decorative offset frame behind the photo */}
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-brand-500/40" />
            {/*
              We use a plain <img> (not next/image) because the site is statically
              exported. If the photo is missing, the alt text shows.
            */}
            <img
              src={about.photo}
              alt={about.photoAlt}
              className="relative z-10 aspect-[4/5] w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
        </Reveal>

        {/* Text column */}
        <div className="md:col-span-3">
          {about.paragraphs.map((para, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="mb-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {para}
              </p>
            </Reveal>
          ))}

          {/* Highlight chips */}
          <Reveal delay={0.1}>
            <ul className="mt-6 flex flex-wrap gap-2">
              {about.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-200"
                >
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
