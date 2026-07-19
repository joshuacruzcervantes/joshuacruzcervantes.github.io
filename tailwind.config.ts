import type { Config } from "tailwindcss";

/**
 * Tailwind configuration
 * ----------------------
 * `content` tells Tailwind which files to scan for class names so it can strip
 * out everything you don't use (keeping the CSS tiny and fast).
 *
 * `darkMode: "class"` means dark mode turns on when the <html> element has the
 * class "dark". Our ThemeToggle component adds/removes that class.
 *
 * The `theme.extend` block defines our custom design tokens (brand colors,
 * fonts, animations). Change the brand color here once and it updates the
 * whole site.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // The single brand accent color. Tweak this to re-skin the whole site.
        brand: {
          50: "#eef6ff",
          100: "#d9ebff",
          200: "#bcdcff",
          300: "#8ec6ff",
          400: "#59a5ff",
          500: "#3182f6", // primary
          600: "#1f66e0",
          700: "#1a52b8",
          800: "#1c4694",
          900: "#1d3d75",
          950: "#16264a",
        },
      },
      fontFamily: {
        // These CSS variables are supplied by next/font in app/layout.tsx.
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        siren: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.75" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-6px)" },
          "40%": { transform: "translateX(6px)" },
          "60%": { transform: "translateX(-4px)" },
          "80%": { transform: "translateX(4px)" },
        },
      },
      animation: {
        // Used by the terminal's blinking cursor.
        blink: "blink 1s step-end infinite",
        // The /aclc "you've been phished" alarm background — a slow pulse,
        // well under the ~3/sec flashing threshold that can trigger seizures.
        siren: "siren 1.1s ease-in-out infinite",
        // Fires twice on entrance then settles (not infinite, so it doesn't
        // stay distracting while the class discusses what happened).
        shake: "shake 0.5s ease-in-out 2",
      },
    },
  },
  plugins: [],
};

export default config;
