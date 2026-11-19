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

/** Rough reading time: ~200 words per minute, at least 1 minute. */
export function readMinutes(post: Post) {
  const words = post.body
    .map((b) => `${b.text ?? ""} ${b.caption ?? ""}`)
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
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
      <span className="mt-2 font-sans text-2xl font-semibold leading-tight text-white">{post.tags[0]}</span>
    </div>
  );
}

function Meta({ post }: { post: Post }) {
  return (
    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
      <span>{post.category}</span>
      <span className="text-slate-300 dark:text-slate-600">·</span>
      <span className="font-medium normal-case tracking-normal text-slate-500 dark:text-slate-400">{fmtDate(post.date)}</span>
      <span className="text-slate-300 dark:text-slate-600">·</span>
      <span className="font-medium normal-case tracking-normal text-slate-500 dark:text-slate-400">{readMinutes(post)} min read</span>
      {post.video ? (
        <>
          <span className="text-slate-300 dark:text-slate-600">·</span>
          <span className="font-medium normal-case tracking-normal text-slate-500 dark:text-slate-400">
            {post.video.kind === "youtube" ? "Video" : "Clip"}
          </span>
        </>
      ) : null}
    </div>
  );
}

/** Large treatment for the newest post on /blog: image left, big bold title right. */
export function FeaturedPost({ post }: { post: Post }) {
  return (
    <a href={`/blog/${post.slug}/`} className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <div className="h-72 overflow-hidden rounded-3xl bg-slate-900 shadow-xl ring-1 ring-slate-200 dark:ring-white/10 sm:h-96">
        <PostCover post={post} />
      </div>
      <div>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          Latest post
        </span>
        <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 transition group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400 sm:text-5xl">
          {post.title}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">{post.excerpt}</p>
        <div className="mt-5">
          <Meta post={post} />
        </div>
        <span className="mt-7 inline-flex items-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition group-hover:bg-brand-700 dark:bg-brand-500 dark:group-hover:bg-brand-400">
          Read the post <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </a>
  );
}

/** Standard grid card: no box, just the image and a bold title. */
export function PostCard({ post }: { post: Post }) {
  return (
    <a href={`/blog/${post.slug}/`} className="group flex h-full flex-col">
      <div className="h-52 overflow-hidden rounded-2xl bg-slate-900 ring-1 ring-slate-200 transition group-hover:-translate-y-1 group-hover:shadow-xl dark:ring-white/10">
        <PostCover post={post} />
      </div>
      <div className="mt-5">
        <Meta post={post} />
      </div>
      <h3 className="mt-2 text-xl font-bold leading-snug tracking-tight text-slate-900 transition group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-400">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{post.excerpt}</p>
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
        <p className="text-xs text-slate-500 dark:text-slate-400">{fmtDate(post.date)}</p>
        <p className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-slate-800 transition group-hover:text-brand-600 dark:text-slate-200 dark:group-hover:text-brand-400">
          {post.title}
        </p>
      </div>
    </a>
  );
}
