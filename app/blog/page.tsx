/**
 * BLOG — /blog
 * Newest post as a wide featured block, the rest as a card grid
 * (1 column on phones, 2 on tablets, 3 on desktop). Full text lives on each
 * post's own page at /blog/<slug>. Data: lib/posts.ts.
 */
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { FeaturedPost, PostCard } from "@/components/PostCard";
import { content } from "@/lib/content";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: `Blog | ${content.site.name}`,
  description:
    "Plain-language IT career advice, salary guides, and study paths, plus clips and media. Free, from a 6-year IT pro turned instructor.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Blog | ${content.site.name}`,
    description: "Plain-language IT career advice, salary guides, and study paths, plus clips and media.",
    url: "/blog",
    siteName: content.site.name,
    type: "website",
  },
};

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  const [latest, ...rest] = sorted;

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24">
        <div className="container-page">
          <SectionHeading
            title="Blog"
            kicker="Articles & clips"
            intro="Plain-language IT career advice, salary guides, and study paths, plus my videos and media. Everything free."
          />

          {latest ? (
            <Reveal className="mt-12">
              <FeaturedPost post={latest} />
            </Reveal>
          ) : null}

          {rest.length ? (
            <>
              <div className="mt-16 flex items-center gap-3">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">More posts</h2>
                <span className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((post, i) => (
                  <Reveal key={post.slug} delay={(i % 3) * 0.06} className="h-full">
                    <PostCard post={post} />
                  </Reveal>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </main>
      <Footer />
    </>
  );
}
