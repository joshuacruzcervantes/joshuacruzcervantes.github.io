/**
 * SecondBrain
 * -----------
 * "Claude x Obsidian" section. Always dark (like the NET25 feature) so it
 * reads like an app window. Left: headline, stats, and the 3-step workflow.
 * Right: the live graph of the real vault (components/BrainGraph.tsx).
 * Text: content.secondBrain.
 */
import { content } from "@/lib/content";
import Reveal from "./Reveal";
import BrainGraph from "./BrainGraph";

export default function SecondBrain() {
  const b = content.secondBrain;

  return (
    <section id="second-brain" className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[-10%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-brand-600/15 blur-3xl" />
      </div>

      <div className="container-page relative">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-brand-500" />
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-400">{b.kicker}</span>
          </div>
          <h2 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">{b.heading}</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">{b.intro}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <dl className="mt-10 grid grid-cols-2 gap-8 border-y border-white/10 py-8 sm:grid-cols-4">
            {b.stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-4xl font-extrabold tracking-tight sm:text-5xl">{s.value}</dd>
                <dd className="mt-1 text-sm text-slate-400">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[0.8fr_1.6fr]">
          <Reveal>
            <ol className="space-y-7">
              {b.points.map((p, i) => (
                <li key={p.title} className="flex gap-4">
                  <span className="font-mono text-sm font-semibold text-brand-400">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-xl font-bold">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">{p.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-xs text-slate-500">{b.note}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <BrainGraph />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
