/**
 * SectionHeading
 * --------------
 * A consistent heading used at the top of each section: a small accent label
 * line, a big title, and an optional intro paragraph. Keeping this in one place
 * means every section looks uniform.
 */
import Reveal from "./Reveal";

type Props = {
  /** The big section title, e.g. "About". */
  title: string;
  /** Optional supporting paragraph under the title. */
  intro?: string;
  /** Center the heading (used on full-width sections). Defaults to left. */
  centered?: boolean;
};

export default function SectionHeading({ title, intro, centered }: Props) {
  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {/* Small decorative accent bar + title */}
      <div className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}>
        <span className="h-px w-8 bg-brand-500" />
        <span className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          {title}
        </span>
      </div>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
