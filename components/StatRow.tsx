/**
 * StatRow
 * -------
 * A row of big proof numbers, same style as the hero stats: a large bold value
 * with a small label underneath. Used at the top of each lower section so the
 * whole page reads the same way: heading, numbers, then a little detail.
 */
import Reveal from "./Reveal";

type Stat = { value: string; label: string };

export default function StatRow({ stats }: { stats: readonly Stat[] }) {
  return (
    <Reveal delay={0.05}>
      <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 border-y border-slate-200 py-8 dark:border-slate-800 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-sans text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              {s.value}
            </dd>
            <dd className="mt-1 text-sm text-slate-500 dark:text-slate-400">{s.label}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}
