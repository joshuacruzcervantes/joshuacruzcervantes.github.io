/**
 * PaymentCard
 * -----------
 * The shared manual-GCash checkout used by the Support page and every product page.
 * All text/details come from `content.payment` — edit there once and it
 * updates everywhere. Pass an `id` (default "buy") so on-page CTAs can
 * anchor-scroll to it.
 */
import { content } from "@/lib/content";
import CopyEmail from "@/components/CopyEmail";

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

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* GCash details */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Pay via GCash
          </p>
          <p className="mt-3 font-mono text-2xl font-bold tracking-wide text-slate-900 dark:text-white">
            {p.gcashNumber}
          </p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Account name: <strong>{p.gcashName}</strong>
          </p>

          {p.gcashQr ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={p.gcashQr}
              alt="GCash QR code"
              className="mt-4 h-44 w-44 rounded-lg border border-slate-200 bg-white object-contain p-2 dark:border-slate-700"
            />
          ) : null}
        </div>

        {/* Steps */}
        <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            How it works
          </p>
          <ol className="mt-3 space-y-3">
            {p.steps.map((step, i) => (
              <li key={step} className="flex gap-3">
                <span
                  aria-hidden
                  className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-brand-500 text-xs font-bold text-white"
                >
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* CTAs */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={p.messengerHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600"
        >
          {p.messengerLabel} <span aria-hidden>→</span>
        </a>
        <div className="flex flex-1 items-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-2.5 dark:border-slate-700 dark:bg-slate-900">
          <div className="min-w-0 flex-1">
            <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
              {p.emailLabel}
            </p>
            <p className="truncate font-mono text-sm text-slate-700 dark:text-slate-200">
              {p.email}
            </p>
          </div>
          <CopyEmail value={p.email} />
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{p.note}</p>
    </section>
  );
}
