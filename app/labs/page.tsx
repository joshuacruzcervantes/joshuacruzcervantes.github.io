/**
 * LABS PAGE — /labs
 * -----------------
 * A simple grid of every entry in `content.labs`. Each card is a self-contained
 * HTML lab that lives in /public; clicking "Launch lab" opens it in a new tab.
 *
 * To add a new lab:
 *   1. Drop the self-contained HTML file into /public (e.g. /public/foo.html).
 *   2. Append an entry to `content.labs` in lib/content.ts.
 * The card appears here automatically.
 */
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { content } from "@/lib/content";

export const metadata: Metadata = {
  title: `${content.labsPage.heading} — ${content.site.name}`,
  description: content.labsPage.intro,
  alternates: { canonical: "/labs" },
  openGraph: {
    title: `${content.labsPage.heading} — ${content.site.name}`,
    description: content.labsPage.intro,
    url: "/labs",
    siteName: content.site.name,
    type: "website",
  },
};

export default function LabsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="container-page">
          {/* Header */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              {content.labsPage.kicker}
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              {content.labsPage.heading}
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              {content.labsPage.intro}
            </p>
          </div>

          {/* Lab grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.labs.map((lab) => (
              <article
                key={lab.href}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                  {lab.topic}
                </p>
                <h2 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                  {lab.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {lab.blurb}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {lab.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <a
                  href={lab.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600"
                >
                  Launch lab <span aria-hidden>→</span>
                </a>
              </article>
            ))}
          </div>

          {/* More-coming note */}
          <p className="mt-10 text-sm text-slate-500 dark:text-slate-400">
            More labs in development — check back soon.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
