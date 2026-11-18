/**
 * WORK WITH ME — /work-with-me
 * ----------------------------
 * AI automation services page. PLACEHOLDER for now: all text lives in
 * content.workWithMe (lib/content.ts). Replace the services and case studies
 * there once real projects exist. Hidden from search engines until then.
 */
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { content } from "@/lib/content";

const w = content.workWithMe;

export const metadata: Metadata = {
  title: `${w.heading} | ${content.site.name}`,
  description: w.intro,
  alternates: { canonical: "/work-with-me" },
  // Placeholder page: keep it out of Google until it has real content.
  robots: { index: false, follow: true },
};

function Card({ title, detail, muted }: { title: string; detail: string; muted?: boolean }) {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        muted
          ? "border-dashed border-slate-300 bg-slate-50/60 dark:border-slate-700 dark:bg-slate-900/40"
          : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
      }`}
    >
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{detail}</p>
    </div>
  );
}

export default function WorkWithMePage() {
  const mailto = `mailto:${content.contact.email}?subject=${encodeURIComponent(w.emailSubject)}`;

  return (
    <>
      <Navbar />
      <main className="pt-28">
        <div className="container-page pb-24">
          <div className="border-b border-slate-200 pb-10 dark:border-slate-800">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-amber-700 dark:border-amber-700/60 dark:bg-amber-900/20 dark:text-amber-400">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                {w.status}
              </span>
            </Reveal>
            <div className="mt-5">
              <SectionHeading title={w.heading} kicker={w.kicker} intro={w.intro} />
            </div>
          </div>

          <section className="mt-12">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              {w.servicesHeading}
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {w.services.map((s) => (
                <Card key={s.title} title={s.title} detail={s.detail} />
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              {w.caseStudiesHeading}
            </h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {w.caseStudies.map((c, i) => (
                <Card key={i} title={c.title} detail={c.detail} muted />
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-2xl border border-slate-200 bg-slate-50/60 p-8 text-center dark:border-slate-800 dark:bg-slate-900/40">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{w.ctaHeading}</h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {w.ctaText}
            </p>
            <a
              href={mailto}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-400"
            >
              {w.ctaLabel} <span aria-hidden="true">&rarr;</span>
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
