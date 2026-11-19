/**
 * Charts
 * ------
 * Small dashboard-style charts for the home page, drawn in plain SVG/HTML
 * (no chart library, so the static export stays light).
 *
 *  - DashCard:      the card frame every chart sits in (title + optional note).
 *  - Gauge:         a single headline percentage as a ring.
 *  - CareerTimeline: roles on a year axis, from content.about.timeline.
 *  - BarList:       horizontal bars with the value printed at the end.
 *
 * Color: one hue only (brand-500, #3183F7, the SV logo blue). It passed the
 * palette validator on both the white and the navy (#0B1322) surface. Every
 * mark also has a hover tooltip (native SVG <title> / title attribute) and a
 * text label, so nothing relies on color alone. Each chart has a screen-reader
 * summary.
 */
import type { ReactNode } from "react";

const BLUE = "#3183f7";

/* ------------------------------------------------------------------ */
/*  Card frame                                                         */
/* ------------------------------------------------------------------ */
export function DashCard({
  title,
  note,
  children,
  className = "",
}: {
  title: string;
  note?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03] ${className}`}
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
        {title}
      </p>
      {children}
      {note ? <p className="mt-4 text-xs text-slate-500 dark:text-slate-500">{note}</p> : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Gauge: one percentage as a ring                                    */
/* ------------------------------------------------------------------ */
export function Gauge({
  value,
  max = 100,
  display,
  label,
}: {
  value: number;
  max?: number;
  display: string;
  label: string;
}) {
  const r = 52;
  const c = 2 * Math.PI * r;
  const frac = Math.max(0, Math.min(1, value / max));
  return (
    <figure className="mt-4 flex items-center gap-5" aria-label={`${label}: ${display}`}>
      <svg viewBox="0 0 128 128" className="h-28 w-28 shrink-0 -rotate-90" role="img" aria-hidden="true">
        <circle cx="64" cy="64" r={r} fill="none" strokeWidth="12" className="stroke-slate-200 dark:stroke-white/10" />
        <circle
          cx="64"
          cy="64"
          r={r}
          fill="none"
          stroke={BLUE}
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={`${c * frac} ${c}`}
        >
          <title>{`${label}: ${display}`}</title>
        </circle>
      </svg>
      <figcaption>
        <span className="block font-sans text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {display}
        </span>
        <span className="mt-1 block text-sm text-slate-600 dark:text-slate-400">{label}</span>
      </figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/*  Career timeline: roles on a year axis                              */
/* ------------------------------------------------------------------ */
export type TimelineItem = {
  label: string; // e.g. "Smart Communications"
  role: string; // e.g. "Operational Analyst"
  start: string; // "YYYY-MM"
  end?: string | null; // "YYYY-MM", or null/undefined = present
  point?: boolean; // true = only the year is known: draw a dot, not a bar
};

function toYears(ym: string) {
  const [y, m = "1"] = ym.split("-");
  return Number(y) + (Number(m) - 1) / 12;
}

export function CareerTimeline({
  items,
  from,
  to,
  now,
}: {
  items: readonly TimelineItem[];
  from: number; // first year on the axis
  to: number; // last year on the axis (exclusive end)
  now: string; // "YYYY-MM" used for open-ended roles
}) {
  const span = to - from;
  const pct = (y: number) => `${((y - from) / span) * 100}%`;
  const years = Array.from({ length: span + 1 }, (_, i) => from + i);

  return (
    <figure className="mt-5" aria-label="Career timeline">
      <div className="space-y-3">
        {items.map((it) => {
          const s = toYears(it.start);
          const e = it.end ? toYears(it.end) : toYears(now);
          const tip = `${it.label}, ${it.role}: ${it.start}${it.point ? "" : ` to ${it.end ?? "present"}`}`;
          return (
            <div key={it.label + it.start} className="grid grid-cols-[7.5rem_1fr] items-center gap-3 sm:grid-cols-[10rem_1fr]">
              <div className="min-w-0">
                <p className="text-sm font-semibold leading-tight text-slate-800 dark:text-slate-100">{it.label}</p>
                <p className="truncate text-xs text-slate-500 dark:text-slate-400">{it.role}</p>
              </div>
              <div className="relative h-3 rounded-full bg-slate-100 dark:bg-white/5">
                {it.point ? (
                  <span
                    title={tip}
                    className="absolute top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-white dark:ring-ink"
                    style={{ left: pct(s + 0.5), background: BLUE }}
                  />
                ) : (
                  <span
                    title={tip}
                    className="absolute inset-y-0 rounded-full transition hover:brightness-110"
                    style={{ left: pct(s), width: `calc(${pct(e)} - ${pct(s)})`, background: BLUE }}
                  />
                )}
                {!it.end && !it.point ? (
                  <span
                    className="absolute top-1/2 h-2 w-2 -translate-y-1/2 animate-pulse rounded-full bg-white motion-reduce:animate-none"
                    style={{ left: `calc(${pct(e)} - 0.6rem)` }}
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
      {/* Year axis */}
      <div className="mt-3 grid grid-cols-[7.5rem_1fr] gap-3 sm:grid-cols-[10rem_1fr]">
        <span />
        <div className="relative h-4 text-[11px] text-slate-400 dark:text-slate-500">
          {years.map((y, i) =>
            i % 2 === 0 || i === years.length - 1 ? (
              <span key={y} className="absolute -translate-x-1/2" style={{ left: pct(y) }}>
                {y}
              </span>
            ) : null,
          )}
        </div>
      </div>
      {/* Screen-reader version */}
      <ul className="sr-only">
        {items.map((it) => (
          <li key={it.label + it.start}>
            {it.label}, {it.role}: {it.start}
            {it.point ? "" : ` to ${it.end ?? "present"}`}
          </li>
        ))}
      </ul>
    </figure>
  );
}

/* ------------------------------------------------------------------ */
/*  BarList: horizontal bars, value printed at the end                 */
/* ------------------------------------------------------------------ */
export function BarList({
  rows,
  unit,
}: {
  rows: readonly { label: string; value: number; detail?: string }[];
  unit: string; // e.g. "tools", "subjects"
}) {
  const max = Math.max(...rows.map((r) => r.value), 1);
  return (
    <figure className="mt-5 space-y-4" aria-label={`Bar chart of ${unit}`}>
      {rows.map((r) => (
        <div key={r.label} className="group">
          <div className="flex items-baseline justify-between gap-3">
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">{r.label}</span>
            <span className="text-sm tabular-nums text-slate-500 dark:text-slate-400">
              {r.value} {r.value === 1 ? unit.replace(/s$/, "") : unit}
            </span>
          </div>
          <div className="mt-1.5 h-2.5 rounded-full bg-slate-100 dark:bg-white/5">
            <div
              title={`${r.label}: ${r.value} ${unit}${r.detail ? ` (${r.detail})` : ""}`}
              className="h-full rounded-full transition group-hover:brightness-110"
              style={{ width: `${(r.value / max) * 100}%`, background: BLUE }}
            />
          </div>
          {r.detail ? (
            <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{r.detail}</p>
          ) : null}
        </div>
      ))}
    </figure>
  );
}
