/**
 * Contact
 * -------
 * A simple, backend-free contact section. The email address is a `mailto:` link
 * (it opens the visitor's email app with a pre-filled subject) and there are
 * social links plus a "Download CV" button.
 *
 * No form submission / server needed — perfect for a static site.
 */
import { content } from "@/lib/content";
import Reveal from "./Reveal";

export default function Contact() {
  const { contact } = content;
  // Build a mailto link with a pre-filled subject line.
  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(contact.emailSubject)}`;

  return (
    <section
      id="contact"
      className="border-t border-slate-100 bg-slate-50/60 py-20 dark:border-slate-800/60 dark:bg-slate-900/40 sm:py-28"
    >
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-brand-500" />
            <span className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
              {contact.heading}
            </span>
            <span className="h-px w-8 bg-brand-500" />
          </div>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Let&apos;s talk
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {contact.intro}
          </p>

          {/* Big email link */}
          <a
            href={mailto}
            className="mt-8 inline-block text-xl font-semibold text-brand-600 underline-offset-4 hover:underline dark:text-brand-400 sm:text-2xl"
          >
            {contact.email}
          </a>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={contact.cvHref}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              {contact.cvLabel}
            </a>

            {/* Social links */}
            {contact.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-brand-500 dark:hover:text-brand-400"
              >
                {s.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
