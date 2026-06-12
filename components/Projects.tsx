/**
 * Projects
 * --------
 * A responsive card grid of IT projects and labs. Each card shows an image,
 * title, description, tags, and an optional link button.
 *
 * The three cards are placeholders you can edit in content.ts (projects.items).
 * Drop real screenshots into /public/projects/ and update the `image` paths.
 */
import { content } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const { projects } = content;

  return (
    <section
      id="projects"
      className="border-y border-slate-100 bg-slate-50/60 py-20 dark:border-slate-800/60 dark:bg-slate-900/40 sm:py-28"
    >
      <div className="container-page">
        <SectionHeading title={projects.heading} kicker={projects.kicker} intro={projects.intro} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.items.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
                {/* Image / thumbnail */}
                <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md bg-brand-50 px-2 py-0.5 text-xs font-medium text-brand-700 dark:bg-brand-950/50 dark:text-brand-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {/* Optional link button — only renders if `link` is not empty */}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition hover:gap-2.5 dark:text-brand-400"
                    >
                      View project <span aria-hidden>→</span>
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
