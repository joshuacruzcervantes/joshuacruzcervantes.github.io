/**
 * Projects
 * --------
 * Hero-style section: headline, a row of proof numbers, then a simple numbered
 * list of projects (01, 02...) with one short description and an optional
 * link. No thumbnails or tag pills, to keep it clean.
 * Data: content.projects (heading, stats, items).
 */
import { content } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import StatRow from "./StatRow";

export default function Projects() {
  const { projects } = content;

  return (
    <section
      id="projects"
      className="border-y border-slate-100 bg-slate-50/60 py-20 dark:border-slate-800/60 dark:bg-slate-900/40 sm:py-28"
    >
      <div className="container-page">
        <SectionHeading title={projects.heading} kicker={projects.kicker} intro={projects.intro} />
        <StatRow stats={projects.stats} />

        <ol className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {projects.items.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.06}>
              <li className="flex gap-5">
                <span className="font-sans text-2xl font-extrabold text-brand-600 dark:text-brand-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3
                    className="font-sans text-xl font-bold text-slate-900 dark:text-white"
                    style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition hover:gap-2.5 dark:text-brand-400"
                    >
                      Open it <span aria-hidden="true">&rarr;</span>
                    </a>
                  ) : null}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
