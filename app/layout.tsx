/**
 * ROOT LAYOUT
 * -----------
 * Every page is wrapped in this component. It:
 *   1. Loads our two fonts (a clean sans-serif for body, a mono for the terminal).
 *   2. Sets the <html> and <body> tags.
 *   3. Injects a tiny script that applies the saved light/dark theme BEFORE the
 *      page paints — this prevents a "flash" of the wrong theme on first load.
 *   4. Exports `metadata` for SEO (browser tab title, description).
 */
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { content } from "@/lib/content";
import MotionProvider from "@/components/MotionProvider";

// next/font downloads & self-hosts the fonts at build time (fast, no layout shift).
// They expose CSS variables that Tailwind reads (see tailwind.config.ts).
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// SEO metadata, pulled from the content config.
export const metadata: Metadata = {
  // Makes relative URLs below (like the canonical "/") resolve to the live site.
  metadataBase: new URL(content.site.url),
  title: content.site.title,
  description: content.site.description,
  alternates: { canonical: "/" },
  authors: [{ name: content.site.name, url: content.site.url }],
  keywords: [
    "IT instructor",
    "networking",
    "cybersecurity",
    "CompTIA",
    "IT education",
    "Joshua Cervantes",
    "Sir Vantes",
  ],
  openGraph: {
    title: content.site.title,
    description: content.site.description,
    url: "/",
    siteName: content.site.name,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: content.site.title,
    description: content.site.description,
  },
};

/**
 * Structured data (JSON-LD) describing Joshua as a Person. Search engines read
 * this to show richer results (name, job title, profiles). It's built from the
 * same content config, so it never goes out of sync with the page.
 */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: content.site.name,
  alternateName: content.site.brandShort,
  jobTitle: "IT Instructor",
  description: content.site.description,
  url: content.site.url,
  email: `mailto:${content.contact.email}`,
  knowsLanguage: ["English", "Filipino"],
  sameAs: content.contact.socials
    .map((s) => s.href)
    .filter((href) => href.startsWith("http")),
};

/**
 * This small script runs immediately (before React hydrates) to set the theme
 * class on <html>. Without it, dark-mode users would briefly see a white flash.
 *
 * The site defaults to DARK mode. We add the "dark" class unless the visitor
 * has explicitly chosen light (saved in localStorage by the toggle).
 * If you'd prefer light as the default instead, flip the condition to:
 *   if (stored === 'dark') { document.documentElement.classList.add('dark'); }
 * Or to follow the visitor's OS setting:
 *   if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
 */
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    if (stored !== 'light') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Runs before paint to avoid a theme flash. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        {/* Structured data for search engines. JSON.stringify of our own static
            config (no user input), with "<" escaped as a standard precaution. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={`${sans.variable} ${mono.variable} font-sans`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
