/**
 * SocialLinks
 * -----------
 * Renders the shared `content.socials` list in two styles:
 *   - variant="buttons"  → labelled pill buttons (used in the Contact section)
 *   - variant="icons"    → compact icon-only row (used in the Footer)
 *
 * Add/reorder platforms in lib/content.ts (the `socials` array). If you add a
 * new platform, give it an `icon` key and add a matching glyph to ICONS below.
 */
import { content } from "@/lib/content";

// Brand glyphs. Each is a 24×24 path drawn with the current text color.
const ICONS: Record<string, React.ReactNode> = {
  tiktok: (
    <path d="M16.5 3c.3 2.1 1.5 3.5 3.5 3.7v2.6c-1.2.1-2.4-.2-3.5-.8v5.9c0 3.2-2.4 5.6-5.5 5.6a5.4 5.4 0 0 1 0-10.8c.3 0 .6 0 .9.1v2.8a2.7 2.7 0 1 0 1.9 2.6V3h2.7z" />
  ),
  youtube: (
    <path d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.7-1.7C19.4 5.2 12 5.2 12 5.2s-7.4 0-8.9.4A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.7 1.7c1.5.4 8.9.4 8.9.4s7.4 0 8.9-.4a2.5 2.5 0 0 0 1.7-1.7C23 15.2 23 12 23 12zM9.8 15.3V8.7l5.7 3.3-5.7 3.3z" />
  ),
  facebook: (
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.5 2.9h-2.3v7A10 10 0 0 0 22 12z" />
  ),
  linkedin: (
    <path d="M20.4 3H3.6C3 3 2.5 3.5 2.5 4.1v16.8c0 .6.5 1.1 1.1 1.1h16.8c.6 0 1.1-.5 1.1-1.1V4.1c0-.6-.5-1.1-1.1-1.1zM8.3 18.7H5.4V9.8h2.9v8.9zM6.9 8.6a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zm11.8 10.1h-2.9v-4.3c0-1 0-2.4-1.4-2.4s-1.7 1.1-1.7 2.3v4.4H9.8V9.8h2.8v1.2h.1c.4-.7 1.3-1.5 2.8-1.5 3 0 3.5 2 3.5 4.5v4.7z" />
  ),
};

type Variant = "buttons" | "icons";

export default function SocialLinks({
  variant = "buttons",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  if (variant === "icons") {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        {content.socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            title={s.label}
            className="text-slate-400 transition hover:text-brand-600 dark:text-slate-500 dark:hover:text-brand-400"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              {ICONS[s.icon]}
            </svg>
          </a>
        ))}
      </div>
    );
  }

  return (
    <>
      {content.socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-brand-500 dark:hover:text-brand-400"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            {ICONS[s.icon]}
          </svg>
          {s.label}
        </a>
      ))}
    </>
  );
}
