/**
 * LEGACY REDIRECT — /shop/<slug> → /support/<slug>
 * ------------------------------------------------
 * One redirect page per product that previously lived under /shop. Slugs are
 * derived from the same filter the real /support/[product] route uses, so every
 * currently-available product page keeps its old link working. Works on both
 * the static (GitHub Pages) and live Next.js (Hostinger) hosts.
 */
import type { Metadata } from "next";
import { content } from "@/lib/content";
import RedirectTo from "@/components/RedirectTo";

export const dynamicParams = false;

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
  const { product } = await params;
  return {
    title: "Moved to Support | Joshua Cervantes",
    alternates: { canonical: `/support/${product}` },
    robots: { index: false, follow: true },
  };
}

export default async function ShopProductMoved({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product } = await params;
  return <RedirectTo to={`/support/${product}/`} />;
}
