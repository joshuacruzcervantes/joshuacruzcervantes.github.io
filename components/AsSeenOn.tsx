/**
 * AsSeenOn
 * --------
 * A thin credibility strip rendered directly under the hero. Text only: it
 * names the NET25 Kada Umaga appearance for people who search Joshua's name,
 * since the site was not mentioned on air. No TV footage is embedded (repost
 * permission is unconfirmed). Edit the copy in lib/content.ts (asSeenOn).
 */
import { content } from "@/lib/content";

export default function AsSeenOn() {
  const { asSeenOn } = content;
  if (!asSeenOn) return null;

  return (
    <section className="border-b border-slate-100 bg-white py-5 dark:border-slate-800/60 dark:bg-slate-950">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          {asSeenOn.label}
        </span>
        <span className="text-sm font-semibold text-slate-900 dark:text-white">
          {asSeenOn.outlet}
        </span>
        <span className="hidden text-sm text-slate-500 dark:text-slate-400 sm:inline">
          · {asSeenOn.note}
        </span>
      </div>
    </section>
  );
}
