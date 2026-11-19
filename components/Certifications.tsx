/**
 * Certifications
 * --------------
 * Dashboard-style section: a progress ring (industry certs earned out of
 * total, degrees excluded) next to a clean two-column checklist. Completed
 * items get a blue check; in-progress items get "In progress".
 * Data: content.certifications.items (status: "done" | "progress").
 */
import { content } from "@/lib/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { DashCard, Gauge } from "./Charts";

export default function Certifications() {
  const { certifications } = content;
  // Industry certs only (degrees excluded): done vs total, for the ring.
  const certs = certifications.items.filter((c) => !/Technology$/.test(c.name));
  const certsDone = certs.filter((c) => c.status === "done").length;

  return (
    <section id="certifications" className="container-page py-20 sm:py-28">
      <SectionHeading
        title={certifications.heading}
        kicker={certifications.kicker}
        intro={certifications.intro || undefined}
      />
      <div className="mt-10 grid items-start gap-10 lg:grid-cols-3">
        <Reveal>
          <DashCard title="Industry certifications" note="Network+ (N10-009) in progress. MSIT at PUP in progress.">
            <Gauge
              value={certsDone}
              max={certs.length}
              display={`${certsDone} of ${certs.length}`}
              label="certifications earned"
            />
          </DashCard>
        </Reveal>

      <Reveal delay={0.1} className="lg:col-span-2">
        <ul className="grid gap-x-12 sm:grid-cols-2">
          {certifications.items.map((cert) => {
            const done = cert.status === "done";
            return (
              <li
                key={cert.name}
                className="flex items-start gap-3 border-b border-slate-200 py-4 dark:border-slate-800"
              >
                <span
                  className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full ${
                    done
                      ? "bg-brand-500 text-white"
                      : "border border-dashed border-slate-400 text-slate-400 dark:border-slate-600"
                  }`}
                  aria-hidden="true"
                >
                  {done ? (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  ) : null}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-slate-900 dark:text-white">{cert.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {cert.issuer}
                    {cert.year ? ` · ${cert.year}` : ""}
                    {!done ? " · In progress" : ""}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Reveal>
      </div>
    </section>
  );
}
