/**
 * SUPPORT PAGE — /support
 * -----------------------
 * The single storefront for every product. Everything is free; following
 * Sir Vantes is how people support him. Products
 * come from `content.support.products` (lib/content.ts) — add one there and a card appears
 * here. The follow-me card is <PaymentCard />.
 *
 * To add a product:
 *   1. Append an entry to `content.support.products`.
 *   2. status "available" → the button links to its `href`.
 *      status "coming-soon" → shows a disabled badge instead.
 *   3. Optional: set `image` to a cover in /public (marketing image, safe to
 *      be public). Leave "" for a colored placeholder.
 *
 * Product PDFs live in /public/downloads/ and are public on purpose.
 */
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PaymentCard from "@/components/PaymentCard";
import { content } from "@/lib/content";

const s = content.support;

export const metadata: Metadata = {
  title: `${s.heading} | ${content.site.name}`,
  description: s.intro,
  alternates: { canonical: "/support" },
  openGraph: {
    title: `${s.heading} | ${content.site.name}`,
    description: s.intro,
    url: "/support",
    siteName: content.site.name,
    type: "website",
  },
};

type Product = (typeof content.support.products)[number];

function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      {/* Cover */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={product.image}
        alt={`${product.title} cover`}
        className="h-44 w-full border-b border-slate-200 bg-[#16264a] object-contain dark:border-slate-800"
      />

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
          {product.kind}
        </p>

        <h2 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
          {product.title}
        </h2>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-2xl font-extrabold text-brand-600 dark:text-brand-400">
            {product.price}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {product.priceNote}
          </span>
        </div>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {product.blurb}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {product.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {tag}
            </li>
          ))}
        </ul>

        <a
          href={product.file}
          download
          className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          {product.cta} <span aria-hidden>↓</span>
        </a>
      </div>
    </article>
  );
}

export default function SupportPage() {
  const available = s.products.filter((p) => p.status === "available");

  return (
    <>
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="container-page">
          {/* Header */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              {s.kicker}
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              {s.heading}
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              {s.intro}
            </p>
          </div>

          {/* The free resources */}
          <div className="mt-12 flex items-center gap-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              More free resources
            </h2>
            <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {available.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>

          {/* Shared GCash checkout */}
          <div className="mt-14">
            <PaymentCard id="buy" />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
