/**
 * BLOG POST — /blog/<slug>
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { content } from "@/lib/content";
import { posts } from "@/lib/posts";
import { PostRow, fmtDate } from "@/components/PostCard";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${content.site.name}`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      siteName: content.site.name,
      type: "article",
      images: post.cover ? [post.cover] : undefined,
    },
  };
}


export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en",
    keywords: post.tags.join(", "),
    mainEntityOfPage: `${content.site.url}/blog/${post.slug}`,
    url: `${content.site.url}/blog/${post.slug}`,
    image: post.cover ? `${content.site.url}${post.cover}` : undefined,
    author: { "@type": "Person", name: content.site.name, url: content.site.url },
    publisher: { "@type": "Person", name: content.site.name, url: content.site.url },
  };

  const others = [...posts]
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="container-page">
          <a
            href="/blog/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 transition hover:gap-2.5 dark:text-brand-400"
          >
            <span aria-hidden>←</span> All posts
          </a>

          {/* Header: wide on desktop */}
          <header className="mt-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              <span>{post.category}</span>
              <span className="text-slate-300 dark:text-slate-600">·</span>
              <span className="font-medium normal-case tracking-normal text-slate-400 dark:text-slate-500">{fmtDate(post.date)}</span>
              <span className="text-slate-300 dark:text-slate-600">·</span>
              <span className="font-medium normal-case tracking-normal text-slate-500 dark:text-slate-400">By {content.site.name}</span>
            </div>
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">{post.excerpt}</p>
          </header>

          <div className="mt-10 lg:grid lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-14 xl:gap-20">
            {/* Main column */}
            <article className="min-w-0">
              {post.video?.kind === "youtube" && post.video.youtubeId ? (
                <div className="aspect-video w-full overflow-hidden rounded-2xl bg-slate-900">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${post.video.youtubeId}`}
                    title={post.title}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : post.cover ? (
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 dark:border-slate-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.cover} alt={post.title} className="mx-auto max-h-[28rem] w-auto max-w-full object-contain" />
                </div>
              ) : null}

              {post.video?.kind === "tiktok" ? (
                <a
                  href={post.video.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  Watch on TikTok <span aria-hidden>→</span>
                </a>
              ) : null}

              {/* Body: capped at a comfortable reading width */}
              <div className="mt-10 max-w-[68ch] space-y-6">
                {post.body.map((block, i) =>
                  block.type === "h" ? (
                    <h2 key={i} className="pt-4 text-2xl font-semibold text-slate-900 dark:text-white">
                      {block.text}
                    </h2>
                  ) : block.type === "img" ? (
                    <figure key={i} className="my-8">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={block.src} alt={block.caption ?? ""} loading="lazy" className="mx-auto h-auto max-h-[30rem] w-auto max-w-full rounded-xl border border-slate-200 dark:border-slate-800" />
                      {block.caption ? (
                        <figcaption className="mt-3 text-center text-sm text-slate-500 dark:text-slate-400">{block.caption}</figcaption>
                      ) : null}
                    </figure>
                  ) : (
                    <p key={i} className="text-base leading-relaxed text-slate-700 dark:text-slate-300 lg:text-lg lg:leading-8">
                      {block.text}
                    </p>
                  ),
                )}
              </div>

              {post.cta ? (
                <a
                  href={post.cta.href}
                  className="mt-10 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
                >
                  {post.cta.label} <span aria-hidden>→</span>
                </a>
              ) : null}

              <ul className="mt-10 flex max-w-[68ch] flex-wrap gap-1.5 border-t border-slate-200 pt-6 dark:border-slate-800">
                {post.tags.map((t) => (
                  <li key={t} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {t}
                  </li>
                ))}
              </ul>
            </article>

            {/* Sidebar: beside the post on desktop, below it on phones */}
            <aside className="mt-16 lg:mt-0">
              <div className="space-y-8 lg:sticky lg:top-28">
                <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
                  <div className="flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/media/hero-portrait.jpg" alt={content.site.name} className="h-14 w-14 rounded-full object-cover object-top" />
                    <div>
                      <p className="font-display text-lg font-semibold text-slate-900 dark:text-white">{content.site.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">IT Instructor · Sir Vantes</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    Six years in enterprise IT, now teaching full-time. Free, plain-language IT lessons on TikTok and YouTube.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {content.socials.slice(0, 2).map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:text-slate-300 dark:hover:text-brand-400"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>

                {others.length ? (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">More posts</p>
                    <div className="mt-5 space-y-5">
                      {others.map((p) => (
                        <PostRow key={p.slug} post={p} />
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
