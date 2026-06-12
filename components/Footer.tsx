/**
 * Footer
 * ------
 * A minimal closing bar: name, the dynamic current year, and a "back to top"
 * link. Nothing fancy — just a clean finish to the page.
 */
import { content } from "@/lib/content";

export default function Footer() {
  // Computed at render time, so the year is always current.
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="container-page flex flex-col items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400 sm:flex-row">
        <p>
          © {year} {content.site.name}. {content.footer.tagline}
        </p>
        {/* A last wink at the terminal theme. */}
        <p className="font-mono text-xs text-slate-400 dark:text-slate-500">
          exit 0 — session ended cleanly
        </p>
        <a
          href="#top"
          className="font-medium transition hover:text-brand-600 dark:hover:text-brand-400"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
