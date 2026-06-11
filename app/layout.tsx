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
  title: content.site.title,
  description: content.site.description,
  openGraph: {
    title: content.site.title,
    description: content.site.description,
    type: "website",
  },
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
      </head>
      <body className={`${sans.variable} ${mono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
