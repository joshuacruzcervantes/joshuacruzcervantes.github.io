"use client";
/**
 * BrainGraph
 * ----------
 * Draws the real link graph of Joshua's Obsidian vault on a <canvas>, styled
 * like Obsidian's graph view, with small "signals" travelling along links.
 *
 * Data: /public/data/brain-graph.json, generated from the vault by a script
 * (see design notes). It holds ONLY anonymous numbers: node positions, a
 * cluster number, and link counts. No note titles or file names are shipped.
 * The private folder was excluded before the graph was built.
 *
 * Colors: 3 validated cluster colors (dark surface #0B1322, all-pairs CVD
 * check passed) + gray for archive/system notes. Hovering a legend item
 * highlights that cluster. Animation stops under prefers-reduced-motion.
 */
import { useEffect, useRef, useState } from "react";

type Graph = {
  w: number;
  h: number;
  nodes: [number, number, number, number][]; // x, y, cluster, degree
  edges: [number, number][];
  stats: { notes: number; links: number; linked: number; groupNotes: number[] };
};

export const CLUSTERS = [
  { name: "Teaching", color: "#3183f7" },
  { name: "Master's research", color: "#d95926" },
  { name: "Content & projects", color: "#199e70" },
  { name: "Archive & system", color: "#64748b" },
];

export default function BrainGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [data, setData] = useState<Graph | null>(null);
  const [focus, setFocus] = useState<number | null>(null);
  const focusRef = useRef<number | null>(null);
  focusRef.current = focus;

  useEffect(() => {
    fetch("/data/brain-graph.json")
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !data) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let W = 0;
    let H = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Signals: a few dots travelling along random links.
    const signals = Array.from({ length: 24 }, () => ({
      e: Math.floor(Math.random() * data.edges.length),
      t: Math.random(),
      v: 0.004 + Math.random() * 0.008,
    }));

    const draw = (time: number) => {
      const sx = W / data.w;
      const sy = H / data.h;
      const s = Math.min(sx, sy);
      const ox = (W - data.w * s) / 2;
      const oy = (H - data.h * s) / 2;
      const px = (x: number) => (ox + x * s) * dpr;
      const py = (y: number) => (oy + y * s) * dpr;
      const f = focusRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Links
      ctx.lineWidth = 0.6 * dpr;
      for (const [a, b] of data.edges) {
        const na = data.nodes[a];
        const nb = data.nodes[b];
        const on = f === null || na[2] === f || nb[2] === f;
        ctx.strokeStyle = on ? "rgba(148,163,184,0.16)" : "rgba(148,163,184,0.04)";
        ctx.beginPath();
        ctx.moveTo(px(na[0]), py(na[1]));
        ctx.lineTo(px(nb[0]), py(nb[1]));
        ctx.stroke();
      }

      // Nodes: size grows with links, like Obsidian
      const pulse = reduce ? 0 : Math.sin(time / 900) * 0.15;
      for (const [x, y, g, d] of data.nodes) {
        const on = f === null || g === f;
        const r = (1.4 + Math.min(Math.sqrt(d), 6) * 0.75 + (d > 12 ? pulse : 0)) * dpr * Math.max(s, 0.6);
        ctx.globalAlpha = on ? (g === 3 ? 0.55 : 0.95) : 0.08;
        ctx.fillStyle = CLUSTERS[g].color;
        ctx.beginPath();
        ctx.arc(px(x), py(y), r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Signals
      if (!reduce) {
        for (const sg of signals) {
          sg.t += sg.v;
          if (sg.t > 1) {
            sg.t = 0;
            sg.e = Math.floor(Math.random() * data.edges.length);
          }
          const [a, b] = data.edges[sg.e];
          const na = data.nodes[a];
          const nb = data.nodes[b];
          if (f !== null && na[2] !== f && nb[2] !== f) continue;
          const x = na[0] + (nb[0] - na[0]) * sg.t;
          const y = na[1] + (nb[1] - na[1]) * sg.t;
          const grd = ctx.createRadialGradient(px(x), py(y), 0, px(x), py(y), 4 * dpr);
          grd.addColorStop(0, "rgba(255,255,255,0.95)");
          grd.addColorStop(1, "rgba(255,255,255,0)");
          ctx.fillStyle = grd;
          ctx.beginPath();
          ctx.arc(px(x), py(y), 4 * dpr, 0, Math.PI * 2);
          ctx.fill();
        }
        raf = requestAnimationFrame(draw);
      }
    };

    if (reduce) {
      draw(0);
      // redraw on focus change / resize without animating
      const id = window.setInterval(() => draw(0), 300);
      return () => {
        window.clearInterval(id);
        ro.disconnect();
      };
    }
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [data]);

  const counts = data?.stats.groupNotes ?? [];

  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#070d18]">
        <canvas
          ref={canvasRef}
          className="block aspect-[10/7] w-full sm:aspect-[10/6.2]"
          role="img"
          aria-label={
            data
              ? `Link graph of my Obsidian vault: ${data.stats.linked} connected notes and ${data.stats.links} links, grouped into teaching, master's research, content and projects, and archive.`
              : "Link graph of my Obsidian vault"
          }
        />
        {/* Obsidian-style window chrome, matching the SV logo dots */}
        <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-[11px] text-slate-500">graph view · PKM vault</span>
        </div>
      </div>

      {/* Legend: hover or focus a cluster to highlight it */}
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Clusters">
        {CLUSTERS.map((c, i) => (
          <li key={c.name}>
            <button
              type="button"
              onMouseEnter={() => setFocus(i)}
              onMouseLeave={() => setFocus(null)}
              onFocus={() => setFocus(i)}
              onBlur={() => setFocus(null)}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition ${
                focus === i ? "border-white/40 bg-white/10 text-white" : "border-white/10 text-slate-300 hover:border-white/30"
              }`}
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: c.color }} />
              {c.name}
              {counts[i] !== undefined ? (
                <span className="tabular-nums text-slate-500">{counts[i].toLocaleString()}</span>
              ) : null}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
