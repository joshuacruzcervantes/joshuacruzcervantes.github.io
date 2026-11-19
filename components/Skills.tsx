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
      <SectionHeading title={skills.heading} kicker={skills.kicker} intro={skills.intro} />

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

      {/* Grouped skills: one clean line per area */}
      <Reveal delay={0.1}>
        <dl className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((group) => (
            <div key={group.category} className="border-t border-slate-200 pt-4 dark:border-slate-800">
              <dt className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
                {group.category}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {group.items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
