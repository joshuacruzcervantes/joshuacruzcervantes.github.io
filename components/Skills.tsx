/**
 * Skills
 * ------
 * A scannable, visual skills display. Deliberately NO percentage bars — instead
 * we use a metrics strip (real numbers that impress technical readers) plus a
 * tidy grid of grouped tags by domain.
 *
 * All data comes from content.skills.
 */
import { content } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const { skills } = content;

  return (
    <section id="skills" className="container-page py-20 sm:py-28">
      <SectionHeading title={skills.heading} intro={skills.intro} />

      {/* Metrics strip — concrete, credible numbers */}
      <Reveal delay={0.05}>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {skills.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 text-center dark:border-slate-800 dark:from-slate-900 dark:to-slate-900/40"
            >
              <div className="text-3xl font-extrabold text-brand-600 dark:text-brand-400 sm:text-4xl">
                {m.value}
              </div>
              <div className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Grouped skill tags */}
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.groups.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg bg-slate-100 px-2.5 py-1 text-sm font-medium text-slate-700 transition hover:bg-brand-50 hover:text-brand-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-brand-950/50 dark:hover:text-brand-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
