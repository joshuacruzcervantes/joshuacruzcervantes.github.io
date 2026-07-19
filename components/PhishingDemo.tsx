/**
 * PhishingDemo — the IAS2 "Why Infosec Matters" classroom demo (/aclc).
 * -----------------------------------------------------------------------
 * Three stages:
 *   1. LOGIN        — a fake "ACLC Student Portal" sign-in. Looks convincing
 *      on purpose; that's the whole lesson. Submitting shows a 3-second fake
 *      "Signing in..." state (real login pages don't reply instantly).
 *   2. CAUGHT        — a big red, slowly-pulsing "you've been phished"
 *      screen with a reminders list. Deliberately shows NO captured data on
 *      this screen — students don't see their own typed password reflected
 *      back at them. The captured values only ever appear on /aclc/admin,
 *      which you control.
 *   3. ACKNOWLEDGED  — after they confirm, the screen calms down to green.
 *      "Close" resets back to the login screen for the next volunteer.
 *
 * No network requests anywhere in this file (or anywhere in the demo) — the
 * only thing this writes is one localStorage entry (via lib/aclcCapture.ts,
 * including a *faked* IP/location/ISP — see that file's header) so
 * /aclc/admin can pick it up in a second tab on the SAME browser.
 */
"use client";

import { useState, type FormEvent } from "react";
import { appendCapture, fakeGeo } from "@/lib/aclcCapture";

const lockIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="11" width="14" height="9" rx="1.5" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

const spinnerIcon = (
  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
    <path className="opacity-90" d="M22 12a10 10 0 0 0-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const REMINDERS = [
  "Don’t trust links or QR codes blindly. Check where they actually go, and confirm what they’re for, before you tap or scan.",
  "Look closely at the URL. Misspellings, extra words, or a weird domain ending (.xyz, random .online) are red flags.",
  "Urgency is a manipulation tactic: “verify now or lose access” is designed to make you skip caution.",
  "A padlock or “Secure connection” badge doesn’t mean a site is legit. This page had one too.",
  "Never reuse the same password everywhere, so one phish can’t unlock everything else.",
  "Turn on 2FA wherever you can. A stolen password alone shouldn’t be enough to get in.",
  "When unsure, go to the real site yourself instead of clicking the link you were sent.",
];

export default function PhishingDemo() {
  const [stage, setStage] = useState<"login" | "caught" | "acknowledged">("login");
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    // The entire "attack": read state that's already sitting in the browser.
    // The 3s delay just sells the "processing your login" moment.
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const capturedAtMs = Date.now();
    appendCapture({
      studentId,
      password,
      capturedAt: new Date(capturedAtMs).toLocaleString("en-PH", { hour12: true }),
      capturedAtMs,
      device: typeof navigator !== "undefined" ? navigator.userAgent : "unknown",
      screen: typeof window !== "undefined" ? `${window.screen.width}x${window.screen.height}` : "",
      language: typeof navigator !== "undefined" ? navigator.language : "",
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      referrer: typeof document !== "undefined" ? document.referrer || "Direct / typed URL" : "",
      ...fakeGeo(),
    });

    setSubmitting(false);
    setStage("caught");
  }

  function reset() {
    setStage("login");
    setStudentId("");
    setPassword("");
  }

  if (stage === "acknowledged") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-emerald-600 px-4 text-center">
        <div className="w-full max-w-md">
          <p className="text-6xl">✅</p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Good. Stay Sharp.
          </h1>
          <p className="mt-3 text-sm text-emerald-50">
            That's the lesson landing the way it's supposed to. Next time,
            pause before you click.
          </p>
          <button
            onClick={reset}
            className="mt-10 w-full rounded-lg bg-white px-4 py-3 text-sm font-semibold text-emerald-700 shadow-lg transition hover:bg-emerald-50"
          >
            Close
          </button>
        </div>
      </main>
    );
  }

  if (stage === "caught") {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-12 text-center">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-red-600 animate-siren motion-reduce:animate-none motion-reduce:opacity-50"
        />
        <div className="relative z-10 w-full max-w-lg">
          <p className="text-6xl animate-shake motion-reduce:animate-none">🚨</p>
          <h1 className="mt-4 text-4xl font-extrabold uppercase tracking-tight text-white animate-shake motion-reduce:animate-none sm:text-5xl">
            You&rsquo;ve Been Phished
          </h1>

          <ul className="mt-8 space-y-3 text-left">
            {REMINDERS.map((tip, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-lg bg-black/20 px-4 py-3 text-sm text-red-50"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs font-bold">
                  {i + 1}
                </span>
                {tip}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setStage("acknowledged")}
            className="mt-8 w-full rounded-lg bg-white px-4 py-3 text-sm font-semibold text-red-700 shadow-lg transition hover:bg-red-50"
          >
            I confirm that I will be careful next time
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 px-4 dark:from-slate-950 dark:to-slate-900">
      <div className="w-full max-w-sm">
        <div className="mb-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-lg font-bold text-white">
            AC
          </div>
          <h1 className="mt-3 text-xl font-bold text-slate-900 dark:text-white">
            ACLC Student Portal
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Sign in to view your grades, schedule, and account balance.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900"
        >
          <fieldset disabled={submitting} className="contents">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Student ID or School Email
              <input
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                autoComplete="off"
                placeholder="21-1234-567 or juan@aclc.edu.ph"
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </label>

            <label className="mt-4 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                spellCheck={false}
                placeholder="••••••••"
                className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 disabled:opacity-60 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </label>

            <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">
              Forgot password?
            </p>

            <button
              type="submit"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-80"
            >
              {submitting ? (
                <>
                  {spinnerIcon} Signing in&hellip;
                </>
              ) : (
                "Log In"
              )}
            </button>
          </fieldset>

          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
            {lockIcon} Secure connection
          </p>
        </form>
      </div>
    </main>
  );
}
