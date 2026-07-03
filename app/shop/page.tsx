/**
 * LEGACY REDIRECT — /shop → /support
 * ----------------------------------
 * The storefront was renamed from "Shop" to "Support". This real Next route
 * keeps old /shop links working on both the static (GitHub Pages) and the
 * live Next.js (Hostinger) hosts. Safe to delete once nothing points at /shop.
 */
import type { Metadata } from "next";
import RedirectTo from "@/components/RedirectTo";

export const metadata: Metadata = {
  title: "Moved to Support — Joshua Cervantes",
  alternates: { canonical: "/support" },
  robots: { index: false, follow: true },
};

export default function ShopMoved() {
  return <RedirectTo to="/support/" />;
}
