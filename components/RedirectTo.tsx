"use client";

/**
 * RedirectTo
 * ----------
 * Client-side redirect used by the legacy /shop routes after the storefront
 * was renamed to /support. Rendered by a real Next page (not a static file in
 * /public), so it resolves as an actual route on BOTH hosting setups:
 *   - GitHub Pages (static export)
 *   - the live Next.js server on Hostinger
 * A visible link is the no-JS fallback.
 */
import { useEffect } from "react";

export default function RedirectTo({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <p className="text-slate-600 dark:text-slate-300">
        This page has moved.{" "}
        <a href={to} className="font-semibold text-brand-600 underline dark:text-brand-400">
          Continue to {to} →
        </a>
      </p>
    </main>
  );
}
