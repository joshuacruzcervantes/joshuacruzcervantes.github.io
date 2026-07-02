/**
 * ProductDetail
 * -------------
 * Renders a full sales page for one Shop product: hero, sneak peek
 * (cover + blurred teaser), what's inside, and the shared GCash checkout.
 * Driven entirely by `content.shop.products` + `content.productDetails`,
 * keyed by the product `slug`. Used by the /shop/[product] route.
 *
 * Cover/peek images are derived from the slug:
 *   /shop/<slug>-cover.png   and   /shop/<slug>-peek.png
 */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PaymentCard from "@/components/PaymentCard";
import { content } from "@/lib/content";

export function getProduct(slug: string) {
  const product = content.shop.products.find((p) => p.slug === slug);
  const detail =
    content.productDetails[slug as keyof typeof content.productDetails];
  if (!product || !detail || product.status !== "available") return null;
  return { product, detail };
}

export default function ProductDetail({ slug }: { slug: string }) {
  const found = getProduct(slug);
  if (!found) return null;
  const { product, detail } = found;
  const cover = `/shop/${slug}-cover.png`;
  const peek = `/shop/${slug}-peek.png`;

  return (
    <>
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="container-page">
          {/* Header */}
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              {product.kind}
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
              {product.title}
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              {detail.subheading}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="inline-flex items-baseline gap-2 rounded-xl bg-brand-50 px-4 py-2 text-2xl font-extrabold text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                {product.price}
              </span>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {product.priceNote}
              </span>
            </div>

            <a
              href="#buy"
              className="mt-6 inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600"
            >
              Get it <span aria-hidden>↓</span>
            </a>
          </div>

          {/* Sneak peek */}
          <section className="mt-14">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Silipin muna
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
              A peek at what's inside — the rest is blurred until you get your
              copy.
            </p>

            <div className="mt-6 grid items-start gap-6 sm:grid-cols-2">
              {/* Cover */}
              <figure className="overflow-hidden rounded-xl border border-slate-200 shadow-md dark:border-slate-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cover}
                  alt={`${product.title} cover`}
                  className="block w-full"
                />
              </figure>

              {/* Blurred teaser */}
              <figure className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md dark:border-slate-800 dark:bg-slate-900">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={peek}
                  alt="Preview (rest blurred)"
                  className="block w-full"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-slate-900 dark:via-slate-900/70"
                />
                <a
                  href="#buy"
                  className="absolute inset-x-0 bottom-0 flex items-center justify-center p-4"
                >
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-brand-600">
                    {detail.peekBadge}
                  </span>
                </a>
              </figure>
            </div>
          </section>

          {/* What's inside */}
          <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {detail.contentsHeading}
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {detail.contents.map((item) => (
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
            <p className="mt-4 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {detail.format}
            </p>
          </section>

          {/* Checkout */}
          <div className="mt-6">
            <PaymentCard id="buy" />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
