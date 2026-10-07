/**
 * PostCard
 * --------
 * Shared blog building blocks: the cover image (with a styled fallback for
 * posts that have no image), the grid card used on /blog, and the compact
 * row used in the "More posts" sidebar on each post page.
 */
import type { Post } from "@/lib/posts";

export function fmtDate(d: string) {
  return new Date(d + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/** Cover image that fills its box. Posts without a cover get a branded panel. */
export function PostCover({ post, className = "", compact = false }: { post: Post; className?: string; compact?: boolean }) {
  if (post.cover && compact) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={post.cover} alt="" loading="lazy" className={`h-full w-full object-cover object-top ${className}`} />
    );
  }
  if (post.cover) {
    // Whole photo, never cropped and never stretched past its real size.
    // A blurred copy fills the empty space so the box never looks bare.
    return (
      <div className={`relative h-full w-full overflow-hidden ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={post.cover} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full scale-110 object-cover opacity-40 blur-2xl" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.cover}
          alt=""
          loading="lazy"
          className="relative mx-auto h-full w-auto max-w-full object-contain transition duration-500 group-hover:scale-[1.02]"
        />
      </div>
    );
  }
  if (compact) {
    return <div className="h-full w-full bg-gradient-to-br from-brand-600 via-brand-700 to-slate-900" />;
  }
  return (
    <div
      className={`flex h-full w-full flex-col justify-end bg-gradient-to-br from-brand-600 via-brand-700 to-slate-900 p-6 ${className}`}
    >
      <span className="text-xs font-semibold uppercase tracking-widest text-brand-100/80">{post.category}</span>
      <span className="mt-2 font-display text-2xl font-semibold leading-tight text-white">{post.tags[0]}</span>
    </div>
  );
}

function Meta({ post }: { post: Post }) {
  return (
    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
      <span>{post.category}</span>
      <span className="text-slate-300 dark:text-slate-600">·</span>
      <span className="font-medium normal-case tracking-normal text-slate-400 dark:text-slate-500">{fmtDate(post.date)}</span>
      {post.video ? (
        <>
          <span className="text-slate-300 dark:text-slate-600">·</span>
          <span className="font-medium normal-case tracking-normal text-slate-400 dark:text-slate-500">
            {post.video.kind === "youtube" ? "Video" : "Clip"}
          </span>
        </>
      ) : null}
    </div>
  );
}

/** Large hero treatment for the newest post on /blog. */
export function FeaturedPost({ post }: { post: Post }) {
  return (
    <a
      href={`/blog/${post.slug}/`}
      className="group grid overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:border-brand-400/60 dark:border-slate-800 dark:bg-slate-900/40 lg:grid-cols-12"
    >
      <div className="h-80 overflow-hidden bg-slate-900 sm:h-96 lg:col-span-6 lg:h-[26rem]">
        <PostCover post={post} />
      </div>
      <div className="flex flex-col justify-center p-7 sm:p-10 lg:col-span-6">
        <span className="mb-4 inline-flex w-fit rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-600 dark:text-brand-400">
          Latest post
        </span>
        <Meta post={post} />
        <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 transition group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400 lg:text-4xl">
          {post.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">{post.excerpt}</p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition group-hover:gap-2.5 dark:text-brand-400">
          Read the post <span aria-hidden>→</span>
        </span>
      </div>
    </a>
  );
}

/** Standard grid card. */
export function PostCard({ post }: { post: Post }) {
  return (
    <a
      href={`/blog/${post.slug}/`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:border-brand-400/60 dark:border-slate-800 dark:bg-slate-900/40"
    >
      <div className="h-56 overflow-hidden bg-slate-900">
        <PostCover post={post} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Meta post={post} />
        <h3 className="mt-3 text-xl font-semibold leading-snug tracking-tight text-slate-900 transition group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{post.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-600 transition group-hover:gap-2.5 dark:text-brand-400">
          Read <span aria-hidden>→</span>
        </span>
      </div>
    </a>
  );
}

/** Compact row for sidebars. */
export function PostRow({ post }: { post: Post }) {
  return (
    <a href={`/blog/${post.slug}/`} className="group flex gap-4">
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-900">
        <PostCover post={post} compact />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-slate-400 dark:text-slate-500">{fmtDate(post.date)}</p>
        <p className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-slate-800 transition group-hover:text-brand-600 dark:text-slate-200 dark:group-hover:text-brand-400">
          {post.title}
        </p>
      </div>
    </a>
  );
}
