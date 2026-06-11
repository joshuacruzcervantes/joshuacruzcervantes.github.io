"use client";

/**
 * Navbar
 * ------
 * A sticky top navigation bar with:
 *   - Your brand name on the left (clicking it scrolls to the top).
 *   - Section links in the middle (desktop only).
 *   - The theme toggle + a "View CV" button on the right.
 *   - A simple hamburger menu on mobile.
 *
 * It becomes a frosted-glass bar with a subtle border once you scroll down a
 * little, so it stays readable over any section.
 */
import { useEffect, useState } from "react";
import { content } from "@/lib/content";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Track scroll position to toggle the frosted-glass background.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-slate-200/70 dark:border-slate-800/70"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        {/* Brand / logo */}
        <a
          href="#top"
          className="flex items-center gap-2 text-base font-bold tracking-tight text-slate-900 dark:text-white"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-500 font-mono text-sm text-white">
            JC
          </span>
          <span className="hidden sm:inline">{content.site.brandShort}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {content.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={content.hero.ctaPrimary.href}
            download
            className="hidden rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600 sm:inline-block"
          >
            {content.hero.ctaPrimary.label}
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-600 md:hidden dark:border-slate-700 dark:text-slate-300"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen ? (
        <div className="glass border-t border-slate-200/70 md:hidden dark:border-slate-800/70">
          <ul className="container-page flex flex-col py-2">
            {content.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={content.hero.ctaPrimary.href}
                download
                onClick={() => setMenuOpen(false)}
                className="mt-1 block rounded-md bg-brand-500 px-3 py-3 text-center text-sm font-semibold text-white"
              >
                {content.hero.ctaPrimary.label}
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
