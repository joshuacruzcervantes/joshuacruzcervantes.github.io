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
import SocialLinks from "./SocialLinks";

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

          {/* Social links (shared list — see components/SocialLinks.tsx) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <SocialLinks variant="buttons" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
