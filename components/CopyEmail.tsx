"use client";

/**
 * CopyEmail — a small "Copy" button that copies the given value to the
 * clipboard and briefly confirms. Used in the payment card so buyers can
 * grab the email address to send their GCash proof.
 */
import { useState } from "react";

export default function CopyEmail({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        throw new Error("clipboard API unavailable");
      }
    } catch {
      // Fallback for older/non-secure contexts.
      const ta = document.createElement("textarea");
      ta.value = value;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {
        /* user can still select the text manually */
      }
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy email address ${value}`}
      className="flex-shrink-0 rounded-md bg-brand-500 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-brand-600"
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}
