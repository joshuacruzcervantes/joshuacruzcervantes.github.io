/**
 * PaymentCard (now a "follow me" card)
 * ------------------------------------
 * Everything on the site is free. This card replaces the old GCash checkout:
 * it asks people to follow Sir Vantes (the only "price"), and gives a way to
 * message for a copy. Shared by the Support page and every product page.
 * Text comes from content.payment; follow buttons from content.socials.
 */
import { content } from "@/lib/content";

export default function PaymentCard({ id = "buy" }: { id?: string }) {
  const p = content.payment;

  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-2xl border border-brand-200 bg-brand-50/50 p-6 shadow-sm sm:p-8 dark:border-brand-500/30 dark:bg-brand-500/5"
    >
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        {p.heading}
      </h2>
      <p className="mt-1 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
        {p.intro}
      </p>

      {/* Follow buttons — the only ask */}
      <div className="mt-6 flex flex-wrap gap-3">
        {content.socials.map((soc) => (
          <a
            key={soc.label}
            href={soc.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-brand-500 dark:hover:text-brand-400"
          >
            Follow on {soc.label} <span aria-hidden>→</span>
          </a>
        ))}
      </div>

      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{p.note}</p>
    </section>
  );
}
