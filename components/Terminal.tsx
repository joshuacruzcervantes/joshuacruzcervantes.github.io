"use client";

/**
 * Terminal  —  the signature interactive element
 * -----------------------------------------------
 * A real, typeable fake-terminal. Visitors click into it and type commands;
 * it responds with content pulled from lib/content.ts.
 *
 * DESKTOP ONLY: we use the useIsDesktop() hook. On phones/tablets the whole
 * section returns null, so there is no empty gap — the page flows straight from
 * the hero to the About section.
 *
 * Supported commands:
 *   help              list available commands
 *   ls                list "files" (about.txt, skills.json, certs.md, ...)
 *   cat <file>        print the contents of a file
 *   whoami            one-line bio
 *   skills            summary of technical skills
 *   certs             list certifications
 *   clear             clear the screen
 *
 * How the typing works:
 *   We keep a `lines` array (everything printed so far) and a single text
 *   <input> for the current command. Pressing Enter runs the command, appends
 *   the prompt+command and its output to `lines`, and clears the input.
 *   Up/Down arrows walk through previously-entered commands (command history).
 */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { content } from "@/lib/content";
import { useIsDesktop } from "@/lib/useIsDesktop";

// A single printed line in the terminal. `kind` controls the text color.
type Line = {
  text: string;
  kind: "prompt" | "output" | "error" | "system";
};

// The prompt string shown before each command, e.g. "joshua@sirvantes:~$".
const PROMPT = "joshua@sirvantes:~$";

export default function Terminal() {
  const isDesktop = useIsDesktop();

  // ----- Don't render anything until we know we're on desktop. -----
  // null (unknown) or false (mobile) => render nothing at all.
  if (isDesktop !== true) return null;

  return <TerminalInner />;
}

/**
 * The actual terminal UI is split into an inner component so all of its hooks
 * (useState/useEffect) only ever run on desktop, keeping the hook rules happy.
 */
function TerminalInner() {
  // The welcome/banner shown before the user types anything.
  const initialLines: Line[] = [
    { kind: "system", text: "Sir Vantes — interactive shell. Type 'help' to begin." },
    { kind: "system", text: "" },
  ];

  const [lines, setLines] = useState<Line[]>(initialLines);
  const [input, setInput] = useState("");
  // Past commands, newest last — used by the Up/Down arrow history feature.
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Keep the view scrolled to the newest line whenever output changes.
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  // Helper to append one or more lines to the screen.
  function print(newLines: Line[]) {
    setLines((prev) => [...prev, ...newLines]);
  }

  /**
   * runCommand — the brain of the terminal. Takes raw input, figures out which
   * command it is, and returns the output lines to print.
   */
  function runCommand(raw: string): Line[] {
    const trimmed = raw.trim();
    if (trimmed === "") return [];

    // Split into the command word and the rest (arguments).
    const [cmd, ...args] = trimmed.split(/\s+/);
    const arg = args.join(" ");

    switch (cmd.toLowerCase()) {
      case "help":
        return [
          { kind: "output", text: "Available commands:" },
          { kind: "output", text: "  help            show this help" },
          { kind: "output", text: "  ls              list files" },
          { kind: "output", text: "  cat <file>      print a file (try: cat about.txt)" },
          { kind: "output", text: "  whoami          who am I?" },
          { kind: "output", text: "  skills          technical skills summary" },
          { kind: "output", text: "  certs           certifications" },
          { kind: "output", text: "  clear           clear the screen" },
        ];

      case "ls": {
        // Show directories first, then files — like a real `ls`.
        const names = [
          ...content.terminal.directories,
          ...content.terminal.files.map((f) => f.name),
        ];
        return [{ kind: "output", text: names.join("    ") }];
      }

      case "cat": {
        if (!arg) {
          return [{ kind: "error", text: "cat: missing file name (try: cat about.txt)" }];
        }
        // Typing a directory like "projects/" gives a friendly hint.
        if (content.terminal.directories.some((d) => d.replace("/", "") === arg.replace("/", ""))) {
          return [
            { kind: "output", text: `${arg} is a directory.` },
            { kind: "output", text: "Scroll down to the Projects & Labs section to view them." },
          ];
        }
        const file = content.terminal.files.find((f) => f.name === arg);
        if (!file) {
          return [{ kind: "error", text: `cat: ${arg}: No such file or directory` }];
        }
        // Split the file body on newlines so each line renders separately.
        return file.body.split("\n").map((t) => ({ kind: "output" as const, text: t }));
      }

      case "whoami":
        return [{ kind: "output", text: content.terminal.whoami }];

      case "skills":
        return content.skills.groups.map((g) => ({
          kind: "output" as const,
          text: `${g.category.padEnd(28)} ${g.items.join(", ")}`,
        }));

      case "certs":
        return content.certifications.items.map((c) => ({
          kind: "output" as const,
          text: `${c.status === "done" ? "[x]" : "[~]"} ${c.name}${c.year ? ` (${c.year})` : ""}`,
        }));

      case "clear":
        // Special-cased by the caller; return a sentinel we recognize.
        return [{ kind: "system", text: "__CLEAR__" }];

      default:
        return [{ kind: "error", text: `command not found: ${cmd}. Type 'help'.` }];
    }
  }

  // Handle Enter (run), and Up/Down (history navigation).
  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      const entered = input;
      const output = runCommand(entered);

      // `clear` wipes the screen instead of printing.
      if (output.length === 1 && output[0].text === "__CLEAR__") {
        setLines([]);
      } else {
        print([{ kind: "prompt", text: `${PROMPT} ${entered}` }, ...output]);
      }

      // Save non-empty commands to history.
      if (entered.trim() !== "") {
        setHistory((h) => [...h, entered]);
      }
      setHistoryIndex(null);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const nextIndex = historyIndex === null ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(history[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === null) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= history.length) {
        setHistoryIndex(null);
        setInput("");
      } else {
        setHistoryIndex(nextIndex);
        setInput(history[nextIndex]);
      }
    }
  }

  return (
    <section id="terminal" className="container-page py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl"
      >
        {/* Small caption above the window */}
        <p className="mb-3 text-center text-sm text-slate-500 dark:text-slate-400">
          Curious whether I really know my stuff? Try the shell — type{" "}
          <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-brand-600 dark:bg-slate-800 dark:text-brand-400">
            help
          </code>
          .
        </p>

        {/* The terminal window */}
        <div
          className="overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900 shadow-2xl ring-1 ring-black/5"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Title bar with the classic red/yellow/green dots */}
          <div className="flex items-center gap-2 border-b border-slate-700/60 bg-slate-800/80 px-4 py-2.5">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-2 select-none font-mono text-xs text-slate-400">
              {PROMPT} — bash
            </span>
          </div>

          {/* Scrollable output area */}
          <div
            ref={scrollRef}
            className="h-80 overflow-y-auto px-4 py-3 font-mono text-sm leading-relaxed"
          >
            {lines.map((line, i) => (
              <div
                key={i}
                className={
                  line.kind === "error"
                    ? "whitespace-pre-wrap text-red-400"
                    : line.kind === "prompt"
                    ? "whitespace-pre-wrap text-slate-300"
                    : line.kind === "system"
                    ? "whitespace-pre-wrap text-brand-400"
                    : "whitespace-pre-wrap text-emerald-300"
                }
              >
                {line.text || " " /* keep blank lines from collapsing */}
              </div>
            ))}

            {/* The active input line: prompt + text field + blinking cursor */}
            <div className="flex items-center text-slate-300">
              <span className="shrink-0 text-emerald-400">{PROMPT}&nbsp;</span>
              <div className="relative flex-1">
                {/* The real input is transparent text laid over our custom cursor. */}
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  // accessibility + UX niceties
                  aria-label="Terminal input"
                  spellCheck={false}
                  autoCapitalize="off"
                  autoCorrect="off"
                  autoComplete="off"
                  className="w-full bg-transparent font-mono text-emerald-200 caret-emerald-300 outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
