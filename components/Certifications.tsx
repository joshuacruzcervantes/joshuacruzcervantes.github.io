/**
 * Certifications
 * --------------
 * A clean grid of credential cards. Each card shows the cert name, issuer, and
 * a status badge: a green check for completed, or an "In progress" pill.
 *
 * Data comes from content.certifications.items. Set `status` to "done" or
 * "progress" for each item.
 */
import { content } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  const { certifications } = content;

  return (
    <section id="certifications" className="container-page py-20 sm:py-28">
      <SectionHeading title={certifications.heading} kicker={certifications.kicker} intro={certifications.intro} />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.items.map((cert, i) => {
          const done = cert.status === "done";
          return (
            <Reveal key={cert.name} delay={i * 0.06}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                {/* Status icon */}
                <span
                  className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg ${
                    done
                      ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400"
                      : "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400"
                  }`}
                >
                  {done ? (
                    // checkmark
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  ) : (
                    // clock (in progress)
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  )}
                </span>

                <div className="min-w-0">
                  <h3 className="font-semibold leading-snug text-slate-900 dark:text-white">
                    {cert.name}
                  </h3>
                  <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                    {cert.issuer}
                    {cert.year ? ` · ${cert.year}` : ""}
                  </p>
                  {!done ? (
                    <span className="mt-2 inline-block rounded-full bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-700 dark:bg-amber-950/40 dark:text-amber-400">
                      In progress
                    </span>
                  ) : null}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
