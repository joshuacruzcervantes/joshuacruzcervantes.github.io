/**
 * TEACHING RECORD — /teaching-record
 * ----------------------------------
 * The academic / hiring-panel evidence page. It renders content.teachingRecord:
 * credentials, certifications, teaching appointments, instructional materials,
 * professional experience, and media/extension. All text is editable in
 * lib/content.ts (teachingRecord). Audience: program chairs and hiring panels.
 */
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { content } from "@/lib/content";

const tr = content.teachingRecord;

export const metadata: Metadata = {
  title: `${tr.heading} | ${content.site.name}`,
  description: tr.intro,
  alternates: { canonical: "/teaching-record" },
  openGraph: {
    title: `${tr.heading} | ${content.site.name}`,
    description: tr.intro,
    url: "/teaching-record",
    siteName: content.site.name,
    type: "website",
  },
};

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
      {children}
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
        {title}
      </h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}

const publicationsJsonLd = {
  "@context": "https://schema.org",
  "@graph": tr.publications.map((p) => ({
    "@type": "ScholarlyArticle",
    headline: p.title,
    name: p.title,
    abstract: p.abstract,
    datePublished: p.year,
    inLanguage: "en",
    isPartOf: p.venue,
    author: {
      "@type": "Person",
      name: content.site.name,
      url: content.site.url,
      identifier: content.site.orcidUrl,
    },
    url: `${content.site.url}${p.pdf}`,
    publisher: {
      "@type": "CollegeOrUniversity",
      name: "Polytechnic University of the Philippines, Open University System",
    },
  })),
};

export default function TeachingRecordPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(publicationsJsonLd) }}
      />
      <Navbar />
      <main className="pt-28">
        <div className="container-page pb-24">
          <div className="flex flex-col gap-6 border-b border-slate-200 pb-10 dark:border-slate-800 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading title={tr.heading} kicker={tr.kicker} intro={tr.intro} />
            <Reveal>
              <div className="flex shrink-0 flex-col items-start gap-3 sm:items-end">
                <a
                  href={content.site.orcidUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-500 dark:hover:text-brand-400"
                >
                  <span className="grid h-4 w-4 place-items-center rounded-full bg-[#A6CE39] text-[9px] font-bold text-white" aria-hidden>iD</span>
                  ORCID {content.site.orcidId}
                </a>
              </div>
            </Reveal>
          </div>

          <Block title="Academic Credentials">
            <div className="grid gap-4 sm:grid-cols-2">
              {tr.credentials.map((c) => (
                <Reveal key={c.title}>
                  <Card>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{c.title}</h4>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{c.org}</p>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">{c.note}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </Block>

          <Block title="Teaching Appointments">
            <div className="grid gap-5">
              {tr.appointments.map((a) => (
                <Reveal key={a.org}>
                  <Card>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{a.role}</h4>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{a.period}</span>
                    </div>
                    <p className="mt-0.5 text-sm font-medium text-brand-700 dark:text-brand-300">{a.org}</p>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{a.summary}</p>
                    <ul className="mt-3 space-y-1.5">
                      {a.subjects.map((s) => (
                        <li key={s} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                          {s}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{a.note}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </Block>

          <Block title="Research & Publications">
            <div className="grid gap-5">
              {tr.publications.map((p) => (
                <Reveal key={p.title}>
                  <Card>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                        {p.type}
                      </span>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{p.year}</span>
                    </div>
                    <h4 className="mt-3 font-display text-lg font-semibold leading-snug text-slate-900 dark:text-white">
                      {p.title}
                    </h4>
                    <p className="mt-1 text-sm font-medium text-brand-700 dark:text-brand-300">{p.venue}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{p.abstract}</p>
                    <a
                      href={p.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-lg border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-100 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300 dark:hover:bg-brand-500/20"
                    >
                      Read the full paper (PDF)
                      <span aria-hidden="true">&#8599;</span>
                    </a>
                  </Card>
                </Reveal>
              ))}
            </div>
          </Block>

          <Block title="Instructional Materials Developed">
            <Card>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {tr.materials.map((m) => (
                  <li key={m} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                    {m}
                  </li>
                ))}
              </ul>
            </Card>
          </Block>

          <Block title="Professional Experience">
            <div className="grid gap-5">
              {tr.experience.map((e) => (
                <Reveal key={e.org + e.period}>
                  <Card>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-semibold text-slate-900 dark:text-white">{e.role}</h4>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{e.period}</span>
                    </div>
                    <p className="mt-0.5 text-sm font-medium text-brand-700 dark:text-brand-300">{e.org}</p>
                    {e.points.length > 0 ? (
                      <ul className="mt-3 space-y-1.5">
                        {e.points.map((pt) => (
                          <li key={pt} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300 dark:bg-slate-600" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </Card>
                </Reveal>
              ))}
            </div>
          </Block>

          <Block title="Certifications & Trainings">
            <Card>
              <ul className="grid gap-2.5 sm:grid-cols-2">
                {tr.certifications.map((c) => (
                  <li key={c} className="flex gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                    {c}
                  </li>
                ))}
              </ul>
            </Card>
          </Block>

          <Block title="Extension & Media Engagement">
            <div className="grid gap-5">
              {tr.media.map((m) => (
                <Reveal key={m.title}>
                  <Card>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-semibold text-slate-900 dark:text-white">{m.title}</h4>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{m.period}</span>
                    </div>
                    <p className="mt-0.5 text-sm font-medium text-brand-700 dark:text-brand-300">{m.org}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{m.detail}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </Block>
        </div>
      </main>
      <Footer />
    </>
  );
}
