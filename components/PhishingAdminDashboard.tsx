/**
 * PhishingAdminDashboard — /aclc/admin, the instructor-only view of every
 * submission the /aclc demo has captured this session.
 * -----------------------------------------------------------------------
 * Gated by a passcode (see ADMIN_PASSCODE below — change it to whatever you
 * like before class). This is NOT real security: it's a static site with no
 * backend, so the passcode ships in the page's JS and anyone determined
 * enough could read it. It's just enough friction to stop a curious student
 * from stumbling onto this URL and seeing the captures.
 *
 * Styled like an actual "phishing kit" analytics panel — neon stat tiles,
 * live indicator, expandable rows, plus two decorative charts (NetworkPulse,
 * AttackVectorBreakdown) that exist purely to look cool on a projector. Their
 * numbers are illustrative, not measurements of anything real; they're
 * labeled as such in the UI. IP/city/ISP are also faked (lib/aclcCapture.ts
 * → fakeGeo) — there is NO network request anywhere in this whole demo.
 *
 * Reads from the same localStorage list /aclc appends to and polls +
 * listens for storage events so it live-updates as students submit — as
 * long as this tab is open in the SAME browser as the /aclc tab. There's no
 * backend, so this can't sync across two different physical devices.
 */
"use client";

import { Fragment, useEffect, useMemo, useState, type FormEvent } from "react";
import { readCaptures, clearCaptures, type AclcCapture } from "@/lib/aclcCapture";

// Change this before class. Whoever has this string can see every captured
// demo submission — treat it like a light doorknob lock, not a real password.
const ADMIN_PASSCODE = "sirvantes2026";

const eyeIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const eyeOffIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3l18 18M10.6 10.6a3 3 0 0 0 4.24 4.24M6.6 6.7C4.5 8 3 10 2 12c0 0 3.5 7 10 7 1.8 0 3.4-.4 4.7-1.1M17.4 17.3C19.4 16 21 12 21 12s-1-2.2-3-4" />
  </svg>
);

const trashIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7h16M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2m2 0-.8 12.1a2 2 0 0 1-2 1.9H8.8a2 2 0 0 1-2-1.9L6 7" />
  </svg>
);

const chevronIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 6 6 6-6 6" />
  </svg>
);

function shortBrowser(ua: string): string {
  if (/edg\//i.test(ua)) return "Edge";
  if (/opr\//i.test(ua)) return "Opera";
  if (/chrome\//i.test(ua) && !/edg/i.test(ua)) return "Chrome";
  if (/firefox\//i.test(ua)) return "Firefox";
  if (/safari\//i.test(ua) && !/chrome/i.test(ua)) return "Safari";
  return "Browser";
}

function shortDevice(ua: string): string {
  if (/iphone/i.test(ua)) return "iPhone";
  if (/ipad/i.test(ua)) return "iPad";
  if (/android/i.test(ua)) return "Android";
  if (/macintosh/i.test(ua)) return "Mac";
  if (/windows/i.test(ua)) return "Windows";
  if (/linux/i.test(ua)) return "Linux";
  return "Unknown";
}

function timeAgo(ms: number): string {
  const seconds = Math.max(0, Math.floor((Date.now() - ms) / 1000));
  if (seconds < 5) return "just now";
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  return `${hours}h ago`;
}

function locationLabel(c: AclcCapture): string {
  const parts = [c.city, c.region, c.country].filter(Boolean);
  return parts.length ? parts.join(", ") : "—";
}

/** Purely decorative — a slowly-wandering line, just to look alive. */
function NetworkPulse() {
  const [pulse, setPulse] = useState<number[]>(() =>
    Array.from({ length: 24 }, () => 30 + Math.random() * 50)
  );

  useEffect(() => {
    const id = setInterval(() => {
      setPulse((prev) => {
        const last = prev[prev.length - 1];
        const next = Math.max(12, Math.min(95, last + (Math.random() * 34 - 17)));
        return [...prev.slice(1), next];
      });
    }, 900);
    return () => clearInterval(id);
  }, []);

  const points = pulse
    .map((v, i) => `${(i / (pulse.length - 1)) * 300},${64 - v * 0.6}`)
    .join(" ");

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Live Network Activity
        </p>
        <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 font-mono text-[10px] text-cyan-400">
          LIVE
        </span>
      </div>
      <svg viewBox="0 0 300 64" className="mt-2 h-16 w-full" preserveAspectRatio="none">
        <polyline
          points={points}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.65)]"
        />
      </svg>
      <p className="mt-1 font-mono text-[10px] text-slate-600">
        // illustrative — not real telemetry
      </p>
    </div>
  );
}

// QR code is pinned high on purpose (ties back to reminder #1). The other
// three split whatever's left, randomized and shuffled each time this
// component mounts, so it doesn't look hand-typed.
function buildAttackVectors() {
  const others = [
    { label: "Email link", color: "bg-cyan-400" },
    { label: "Direct message", color: "bg-amber-400" },
    { label: "USB drop", color: "bg-emerald-400" },
  ].sort(() => Math.random() - 0.5);

  let remaining = 5;
  const withPct = others.map((v, i) => {
    const isLast = i === others.length - 1;
    const take = isLast ? remaining : Math.round(Math.random() * remaining);
    remaining -= take;
    return { ...v, pct: take };
  });

  return [{ label: "QR code", pct: 95, color: "bg-fuchsia-400" }, ...withPct];
}

/** Also purely decorative, but the categories double as a lesson recap. */
function AttackVectorBreakdown() {
  const [vectors] = useState(buildAttackVectors);
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        Attack Vector Breakdown
      </p>
      <div className="mt-3 space-y-2.5">
        {vectors.map((v) => (
          <div key={v.label}>
            <div className="flex items-center justify-between text-xs text-slate-300">
              <span>{v.label}</span>
              <span className="font-mono text-slate-500">{v.pct}%</span>
            </div>
            <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className={`h-full rounded-full ${v.color}`}
                style={{ width: `${v.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 font-mono text-[10px] text-slate-600">
        // illustrative — not real telemetry
      </p>
    </div>
  );
}

const STAT_ACCENTS = {
  cyan: { border: "border-t-cyan-400", text: "text-cyan-400", glow: "drop-shadow-[0_0_10px_rgba(34,211,238,0.45)]" },
  fuchsia: { border: "border-t-fuchsia-400", text: "text-fuchsia-400", glow: "drop-shadow-[0_0_10px_rgba(232,121,249,0.45)]" },
  amber: { border: "border-t-amber-400", text: "text-amber-400", glow: "drop-shadow-[0_0_10px_rgba(251,191,36,0.45)]" },
  emerald: { border: "border-t-emerald-400", text: "text-emerald-400", glow: "drop-shadow-[0_0_10px_rgba(52,211,153,0.45)]" },
} as const;

function StatTile({
  label,
  value,
  accent,
}: {
  label: string;
  value: string | number;
  accent: keyof typeof STAT_ACCENTS;
}) {
  const a = STAT_ACCENTS[accent];
  return (
    <div className={`rounded-xl border border-slate-800 border-t-2 ${a.border} bg-slate-900 p-4`}>
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</p>
      <p className={`mt-1.5 text-3xl font-bold ${a.text} ${a.glow}`}>{value}</p>
    </div>
  );
}

export default function PhishingAdminDashboard() {
  const [unlocked, setUnlocked] = useState(false);
  const [passcodeInput, setPasscodeInput] = useState("");
  const [error, setError] = useState(false);
  const [captures, setCaptures] = useState<AclcCapture[]>([]);
  const [revealAll, setRevealAll] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [, forceTick] = useState(0);

  // Stay unlocked across refreshes during class (session-only).
  useEffect(() => {
    if (window.sessionStorage.getItem("aclc-admin-unlocked") === "1") {
      setUnlocked(true);
    }
  }, []);

  // Live-sync from localStorage: storage events fire when the /aclc tab
  // writes a new capture; the interval is a fallback for browsers/timing
  // where that event doesn't fire reliably, and also re-renders "time ago".
  useEffect(() => {
    if (!unlocked) return;
    setCaptures(readCaptures());
    const sync = () => setCaptures(readCaptures());
    window.addEventListener("storage", sync);
    const interval = setInterval(() => {
      sync();
      forceTick((n) => n + 1);
    }, 1000);
    return () => {
      window.removeEventListener("storage", sync);
      clearInterval(interval);
    };
  }, [unlocked]);

  const uniqueIds = useMemo(
    () => new Set(captures.map((c) => c.studentId.trim().toLowerCase() || "(blank)")).size,
    [captures]
  );
  const uniqueNetworks = useMemo(
    () => new Set(captures.map((c) => c.isp).filter(Boolean)).size,
    [captures]
  );

  function handleUnlock(e: FormEvent) {
    e.preventDefault();
    if (passcodeInput === ADMIN_PASSCODE) {
      window.sessionStorage.setItem("aclc-admin-unlocked", "1");
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  function handleClear() {
    clearCaptures();
    setCaptures([]);
    setExpandedId(null);
  }

  if (!unlocked) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
        <form
          onSubmit={handleUnlock}
          className="w-full max-w-xs rounded-2xl border border-slate-800 bg-slate-900 p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Instructor only
          </p>
          <h1 className="mt-1 text-lg font-bold text-white">Admin dashboard</h1>
          <input
            type="password"
            value={passcodeInput}
            onChange={(e) => setPasscodeInput(e.target.value)}
            placeholder="Passcode"
            autoFocus
            autoComplete="off"
            className="mt-4 w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white outline-none focus:border-brand-500"
          />
          {error && <p className="mt-2 text-xs text-red-400">Wrong passcode.</p>}
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Unlock
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 bg-slate-900/60 px-6 py-4">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <p className="text-sm font-semibold text-white">
            PhishOps <span className="font-normal text-slate-500">— aclc-portal-clone</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setRevealAll((v) => !v)}
            className="flex items-center gap-1.5 rounded-lg border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-slate-800"
          >
            {revealAll ? eyeOffIcon : eyeIcon}
            {revealAll ? "Hide passwords" : "Reveal passwords"}
          </button>
          <button
            onClick={handleClear}
            className="flex items-center gap-1.5 rounded-lg border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-400 transition hover:border-red-800 hover:bg-red-500/10 hover:text-red-300"
          >
            {trashIcon}
            Clear all
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-8">
        {/* Stat tiles */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <StatTile label="Total captures" value={captures.length} accent="cyan" />
          <StatTile label="Unique IDs" value={uniqueIds} accent="fuchsia" />
          <StatTile label="Networks" value={uniqueNetworks} accent="amber" />
          <StatTile
            label="Last capture"
            value={captures[0] ? timeAgo(captures[0].capturedAtMs) : "—"}
            accent="emerald"
          />
        </div>

        {/* Decorative charts */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <NetworkPulse />
          <AttackVectorBreakdown />
        </div>

        {/* Table */}
        <div className="mt-6 overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
          {captures.length === 0 ? (
            <div className="p-10 text-center text-sm text-slate-500">
              Waiting for submissions at /aclc&hellip;
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-800 text-xs uppercase tracking-wider text-slate-500">
                    <th className="px-4 py-3 font-semibold" />
                    <th className="px-4 py-3 font-semibold">#</th>
                    <th className="px-4 py-3 font-semibold">Student ID / Email</th>
                    <th className="px-4 py-3 font-semibold">Password</th>
                    <th className="px-4 py-3 font-semibold">IP</th>
                    <th className="px-4 py-3 font-semibold">Location</th>
                    <th className="px-4 py-3 font-semibold">Captured</th>
                    <th className="px-4 py-3 font-semibold">Device</th>
                  </tr>
                </thead>
                <tbody>
                  {captures.map((c, i) => {
                    const isOpen = expandedId === c.id;
                    return (
                      <Fragment key={c.id}>
                        <tr
                          onClick={() => setExpandedId(isOpen ? null : c.id)}
                          className="cursor-pointer border-b border-slate-800/60 last:border-0 hover:bg-slate-800/40"
                        >
                          <td className="px-4 py-3 text-slate-500">
                            <span className={`inline-block transition-transform ${isOpen ? "rotate-90" : ""}`}>
                              {chevronIcon}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-slate-500">{captures.length - i}</td>
                          <td className="px-4 py-3 font-mono text-slate-100 break-all">
                            {c.studentId || "(left blank)"}
                          </td>
                          <td className="px-4 py-3 font-mono text-slate-100 break-all">
                            {revealAll
                              ? c.password || "(left blank)"
                              : "•".repeat(Math.max(c.password.length, 6))}
                          </td>
                          <td className="whitespace-nowrap px-4 py-3 font-mono text-xs text-cyan-400">
                            {c.ip || "—"}
                          </td>
                          <td className="whitespace-nowrap px-4 py-3">
                            <span className="rounded-full bg-amber-400/10 px-2 py-0.5 text-xs text-amber-300">
                              {locationLabel(c)}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-4 py-3 text-slate-400">
                            {timeAgo(c.capturedAtMs)}
                          </td>
                          <td className="whitespace-nowrap px-4 py-3 text-xs text-slate-400">
                            {shortBrowser(c.device)} · {shortDevice(c.device)}
                          </td>
                        </tr>
                        {isOpen && (
                          <tr className="border-b border-slate-800/60 bg-slate-950/60 last:border-0">
                            <td colSpan={8} className="px-8 py-4">
                              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-xs sm:grid-cols-3">
                                <div>
                                  <p className="text-slate-500">ISP / Network</p>
                                  <p className="mt-0.5 text-slate-200">{c.isp || "—"}</p>
                                </div>
                                <div>
                                  <p className="text-slate-500">Region</p>
                                  <p className="mt-0.5 text-slate-200">{c.region || "—"}</p>
                                </div>
                                <div>
                                  <p className="text-slate-500">Timezone</p>
                                  <p className="mt-0.5 text-slate-200">{c.timezone || "—"}</p>
                                </div>
                                <div>
                                  <p className="text-slate-500">Language</p>
                                  <p className="mt-0.5 text-slate-200">{c.language || "—"}</p>
                                </div>
                                <div>
                                  <p className="text-slate-500">Screen</p>
                                  <p className="mt-0.5 text-slate-200">{c.screen || "—"}</p>
                                </div>
                                <div>
                                  <p className="text-slate-500">Arrived via</p>
                                  <p className="mt-0.5 text-slate-200 break-all">{c.referrer || "—"}</p>
                                </div>
                                <div className="col-span-2 sm:col-span-3">
                                  <p className="text-slate-500">Full user agent</p>
                                  <p className="mt-0.5 break-all font-mono text-slate-400">{c.device}</p>
                                </div>
                              </div>
                            </td>
                          </tr>
                        )}
                      </Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
