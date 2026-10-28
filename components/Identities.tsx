/**
 * Identities
 * ----------
 * The three hats, shown as a clean strip directly under the hero: Instructor,
 * Researcher, Content Creator. Reads content.identities (editable in content.ts).
 */
import { content } from "@/lib/content";
import Reveal from "./Reveal";

export default function Identities() {
  const items = content.identities;
  if (!items?.length) return null;

  return (
    <section className="border-y border-slate-100 bg-slate-50/60 py-14 dark:border-slate-800/60 dark:bg-slate-900/40">
      <div className="container-page grid gap-8 sm:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.08}>
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-brand-600 dark:text-brand-400">
                  0{i + 1}
                </span>
                <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
              </div>
              <h2 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
                {it.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {it.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
