/**
 * SUPPORT PAGE — /support
 * -----------------------
 * The single storefront for every paid product. Buying here is how people
 * support Sir Vantes — a real product in exchange, not a donation. Products
 * come from `content.support.products` (lib/content.ts) — add one there and a card appears
 * here. Checkout is the shared manual-GCash flow (<PaymentCard />).
 *
 * To add a product:
 *   1. Append an entry to `content.support.products`.
 *   2. status "available" → the button links to its `href`.
 *      status "coming-soon" → shows a disabled badge instead.
 *   3. Optional: set `image` to a cover in /public (marketing image, safe to
 *      be public). Leave "" for a colored placeholder.
 *
 * NEVER put the actual paid file (PDF/video) in /public.
 */
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PaymentCard from "@/components/PaymentCard";
import { content } from "@/lib/content";

const s = content.support;

export const metadata: Metadata = {
  title: `${s.heading} — ${content.site.name}`,
  description: s.intro,
  alternates: { canonical: "/support" },
  openGraph: {
    title: `${s.heading} — ${content.site.name}`,
    description: s.intro,
    url: "/support",
    siteName: content.site.name,
    type: "website",
  },
};

type Product = (typeof content.support.products)[number];

// Where a "Notify me" click on a coming-soon product goes: your interest
// form if set (with PRODUCT replaced by the product name), else a pre-filled
// email so it works even before you make a form.
function interestLink(product: Product) {
  const url = content.support.interestUrl;
  if (url) {
    return { href: url.replace(/PRODUCT/g, encodeURIComponent(product.title)), external: url.startsWith("http") };
  }
  const subject = encodeURIComponent(`Interested: ${product.title}`);
  const body = encodeURIComponent(
    `Hi Sir Vantes, I'd like to get "${product.title}" when it's ready. Please notify me!`,
  );
  return { href: `mailto:${content.payment.email}?subject=${subject}&body=${body}`, external: false };
}

function ProductCard({ product }: { product: Product }) {
  const available = product.status === "available";
  const interest = interestLink(product);
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      {/* Cover / placeholder */}
      {product.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={product.image}
          alt={`${product.title} cover`}
          className="h-44 w-full border-b border-slate-200 bg-[#16264a] object-contain dark:border-slate-800"
        />
      ) : (
        <div className="flex h-44 w-full items-center justify-center border-b border-slate-200 bg-gradient-to-br from-brand-500 to-brand-700 dark:border-slate-800">
          <span className="text-sm font-semibold uppercase tracking-wider text-white/90">
            {product.kind}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            {product.kind}
          </p>
          {!available ? (
            <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
              Coming soon
            </span>
          ) : null}
        </div>

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

        {available ? (
          <a
            href={product.href}
            className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            {product.cta} <span aria-hidden>→</span>
          </a>
        ) : (
          <a
            href={interest.href}
            {...(interest.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-lg border border-brand-500/50 px-4 py-2.5 text-sm font-semibold text-brand-600 transition hover:bg-brand-50 dark:text-brand-400 dark:hover:bg-brand-500/10"
          >
            {content.support.interestLabel} <span aria-hidden>→</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default function SupportPage() {
  const available = s.products.filter((p) => p.status === "available");
  const comingSoon = s.products.filter((p) => p.status !== "available");

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

          {/* Free downloads — lead magnets */}
          <div className="mt-12 flex items-center gap-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {s.freebiesHeading}
            </h2>
            <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
            {s.freebiesNote}
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {s.freebies.map((f) => (
              <article
                key={f.title}
                className="flex flex-col rounded-2xl border border-emerald-200 bg-emerald-50/40 p-6 dark:border-emerald-500/25 dark:bg-emerald-500/5"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  {f.kind}
                </p>
                <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {f.blurb}
                </p>
                <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
                  Goes deeper in: <span className="font-medium">{f.leadsTo}</span>
                </p>
                <a
                  href={f.file}
                  download
                  className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Download free <span aria-hidden>↓</span>
                </a>
              </article>
            ))}
          </div>

          {/* Available now — buyable products come first */}
          <div className="mt-12 flex items-center gap-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Available now
            </h2>
            <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {available.map((product) => (
              <ProductCard key={product.title} product={product} />
            ))}
          </div>

          {/* Coming soon — separated below */}
          {comingSoon.length > 0 ? (
            <>
              <div className="mt-16 flex items-center gap-3">
                <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Coming soon
                </h2>
                <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
              </div>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {comingSoon.map((product) => (
                  <ProductCard key={product.title} product={product} />
                ))}
              </div>
            </>
          ) : null}

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
