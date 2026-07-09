"use client";

/**
 * Hero
 * ----
 * The first thing visitors see. It's intentionally clean and professional:
 *   - An eyebrow label, your name, the dual-audience tagline, and supporting text.
 *   - Three CTAs: "View CV" (downloads the PDF), "Follow on TikTok", and
 *     "Watch me teach" (YouTube).
 *   - A subtle animated background: a faint NETWORK TOPOLOGY diagram — a hub
 *     with links to nodes, and little "packets" traveling along the links.
 *     It's a quiet nod to what Joshua actually teaches, instead of a generic
 *     gradient. The packets use SVG's built-in animation (no JS), and CSS in
 *     globals.css hides them for visitors who prefer reduced motion.
 */
import { motion } from "framer-motion";
import { content } from "@/lib/content";

/**
 * The topology drawing: one central node (the "router") linked to outer nodes
 * ("switches/hosts"), defined once here so the lines, nodes, and packet paths
 * all stay in sync if you ever move a node.
 */
const HUB = { x: 300, y: 220 };
const NODES = [
  { x: 110, y: 90 },
  { x: 330, y: 60 },
  { x: 520, y: 130 },
  { x: 560, y: 330 },
  { x: 380, y: 420 },
  { x: 140, y: 390 },
  { x: 60, y: 250 },
];

function NetworkDiagram() {
  return (
    <svg
      viewBox="0 0 620 480"
      aria-hidden="true"
      className="absolute right-[-4rem] top-1/2 hidden h-[34rem] w-[44rem] -translate-y-1/2 text-brand-500 opacity-[0.16] dark:opacity-[0.22] md:block"
    >
      {/* Links: hub → every node */}
      {NODES.map((n, i) => (
        <line
          key={i}
          x1={HUB.x}
          y1={HUB.y}
          x2={n.x}
          y2={n.y}
          stroke="currentColor"
          strokeWidth="1.5"
        />
      ))}

      {/* Outer nodes */}
      {NODES.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="7" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx={n.x} cy={n.y} r="2.5" fill="currentColor" />
        </g>
      ))}

      {/* Hub (drawn last so it sits on top of the links) */}
      <circle cx={HUB.x} cy={HUB.y} r="13" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <circle cx={HUB.x} cy={HUB.y} r="4.5" fill="currentColor" />
      {/* A slow "radar" pulse ring around the hub */}
      <circle cx={HUB.x} cy={HUB.y} r="13" fill="none" stroke="currentColor" strokeWidth="1.5" className="hero-packet">
        <animate attributeName="r" values="13;34" dur="3.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0" dur="3.5s" repeatCount="indefinite" />
      </circle>

      {/* Packets: dots that travel hub → node → hub on a few of the links.
          `keyPoints/keyTimes` makes each one go out and come back. */}
      {[0, 2, 4, 6].map((idx, i) => {
        const n = NODES[idx];
        return (
          <circle key={idx} r="3.5" fill="currentColor" className="hero-packet">
            <animateMotion
              dur="5s"
              begin={`${i * 1.3}s`}
              repeatCount="indefinite"
              path={`M${HUB.x},${HUB.y} L${n.x},${n.y}`}
              keyPoints="0;1;0"
              keyTimes="0;0.5;1"
              calcMode="linear"
            />
          </circle>
        );
      })}
    </svg>
  );
}

export default function Hero() {
  const { hero } = content;

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-16"
    >
      {/* ---------- Animated background ---------- */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Faint dotted grid */}
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgb(148 163 184 / 0.5) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            // Fade the grid out toward the edges with a mask.
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
          }}
        />

        {/* One soft, stationary glow behind the text for a little warmth */}
        <div className="absolute -left-24 top-[-6rem] h-[28rem] w-[28rem] rounded-full bg-brand-400/20 blur-3xl dark:bg-brand-600/15" />

        {/* The animated network topology (desktop only, very faint) */}
        <NetworkDiagram />
      </div>

      {/* ---------- Foreground content ---------- */}
      <div className="container-page">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-brand-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            {hero.eyebrow}
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-6xl"
          >
            {hero.name}
          </motion.h1>

          {/* Tagline (the dual-audience positioning statement) */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mt-5 text-lg font-medium leading-relaxed text-slate-700 dark:text-slate-200 sm:text-2xl"
          >
            {hero.tagline}
          </motion.p>

          {/* Supporting subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400"
          >
            {hero.subtext}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {/* "download" tells the browser to download the PDF rather than open it */}
            <a
              href={hero.ctaPrimary.href}
              download
              className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600 hover:shadow-brand-500/40"
            >
              {/* download icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              {hero.ctaPrimary.label}
            </a>

            <a
              href={hero.ctaSecondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:border-brand-500 dark:hover:text-brand-400"
            >
              {/* tiktok icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.5 3c.3 2.1 1.5 3.5 3.5 3.7v2.6c-1.2.1-2.4-.2-3.5-.8v5.9c0 3.2-2.4 5.6-5.5 5.6a5.4 5.4 0 0 1 0-10.8c.3 0 .6 0 .9.1v2.8a2.7 2.7 0 1 0 1.9 2.6V3h2.7z" />
              </svg>
              {hero.ctaSecondary.label}
            </a>

            <a
              href={hero.ctaTertiary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/60 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:border-brand-500 dark:hover:text-brand-400"
            >
              {/* play icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              {hero.ctaTertiary.label}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
