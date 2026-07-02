/**
 * GUIDE PAGE — /guide
 * -------------------
 * A sales / landing page for the paid BSIT PDF guide. Payment is a MANUAL
 * GCash flow: the buyer pays via GCash, sends proof (Messenger/email), and
 * you reply with the PDF. The site is static, so it can't verify payments or
 * gate the download — keep the actual PDF OFF the site (never in /public).
 *
 * All copy lives in `content.guidePage` (lib/content.ts). Edit the price,
 * chapters, GCash number, and links there — no need to touch this file.
 */
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PaymentCard from "@/components/PaymentCard";
import { content } from "@/lib/content";

const g = content.guidePage;

export const metadata: Metadata = {
  title: `${g.heading} — ${content.site.name}`,
  description: g.subheading,
  alternates: { canonical: "/guide" },
  openGraph: {
    title: `${g.heading} — ${content.site.name}`,
    description: g.subheading,
    url: "/guide",
    siteName: content.site.name,
    type: "website",
  },
};

export default function GuidePage() {
  return (
    <>
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="container-page">
          {/* ---- Header ------------------------------------------------ */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              {g.kicker}
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              {g.heading}
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              {g.subheading}
            </p>

            {/* Price badge */}
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="inline-flex items-baseline gap-2 rounded-xl bg-brand-50 px-4 py-2 text-2xl font-extrabold text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                {g.price}
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {g.priceNote}
              </span>
            </div>

            {/* Jump to buy */}
            <a
              href="#buy"
              className="mt-6 inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600"
            >
              Get the guide <span aria-hidden>↓</span>
            </a>
          </div>

          {/* ---- Sneak peek (cover + blurred teaser) ------------------- */}
          <section className="mt-14">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {g.previewHeading}
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
              {g.previewNote}
            </p>

            <div className="mt-6 grid items-start gap-6 sm:grid-cols-2">
              {/* Cover */}
              <figure className="overflow-hidden rounded-xl border border-slate-200 shadow-md dark:border-slate-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.coverImage}
                  alt={`Cover of ${g.heading}`}
                  className="block w-full"
                />
              </figure>

              {/* Teaser page — image is pre-blurred; overlay adds a lock CTA */}
              <figure className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md dark:border-slate-800 dark:bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.peekImage}
                  alt="Preview of the first chapter (rest blurred)"
                  className="block w-full"
                />
                {/* fade so the blurred bottom melts into the card */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-slate-900 dark:via-slate-900/70"
                />
                {/* lock badge / CTA */}
                <a
                  href="#buy"
                  className="absolute inset-x-0 bottom-0 flex items-center justify-center p-4"
                >
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-600">
                    {g.peekBadge}
                  </span>
                </a>
              </figure>
            </div>
          </section>

          {/* ---- What's inside + Who it's for -------------------------- */}
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {/* Contents (spans 2 cols on desktop) */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {g.contentsHeading}
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {g.contents.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full bg-brand-500 text-xs font-bold text-white"
                    >
                      ✓
                    </span>
                    <span className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Who it's for + format */}
            <section className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {g.audienceHeading}
              </h2>
              <ul className="mt-4 space-y-2">
                {g.audience.map((a) => (
                  <li
                    key={a}
                    className="text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                  >
                    • {a}
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-6 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {g.format}
              </p>
            </section>
          </div>

          {/* ---- Payment card (shared component) ----------------------- */}
          <div className="mt-6">
            <PaymentCard id="buy" />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
