/**
 * PRODUCT DETAIL ROUTE — /support/<slug>
 * -----------------------------------
 * One static page per available product that has a `slug` and an entry in
 * `content.productDetails`. Content is data-driven; the layout lives in
 * <ProductDetail />. `generateStaticParams` pre-builds every available
 * product at export time (this is a static site).
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail, { getProduct } from "@/components/ProductDetail";
import { content } from "@/lib/content";

export function generateStaticParams() {
  return content.support.products
    .filter(
      (p) =>
        p.status === "available" &&
        p.slug &&
        p.slug in content.productDetails,
    )
    .map((p) => ({ product: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ product: string }>;
}): Promise<Metadata> {
  const { product: slug } = await params;
  const found = getProduct(slug);
  if (!found) return { title: `Not found — ${content.site.name}` };
  const { product, detail } = found;
  return {
    title: `${product.title} — ${content.site.name}`,
    description: detail.subheading,
    alternates: { canonical: `/support/${slug}` },
    openGraph: {
      title: `${product.title} — ${content.site.name}`,
      description: detail.subheading,
      url: `/support/${slug}`,
      siteName: content.site.name,
      type: "website",
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product: slug } = await params;
  if (!getProduct(slug)) notFound();
  return <ProductDetail slug={slug} />;
}
