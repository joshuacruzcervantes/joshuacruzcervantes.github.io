"use client";

/**
 * Reveal
 * ------
 * A tiny reusable wrapper that fades + slides its children into view the first
 * time they scroll onto the screen. We use this around section content all over
 * the site so the page feels alive without being distracting.
 *
 * Usage:
 *   <Reveal>           ...content...   </Reveal>
 *   <Reveal delay={0.1}> ...content... </Reveal>   // stagger items
 *
 * "use client" is required because Framer Motion runs in the browser.
 */
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Optional delay (in seconds) to stagger multiple Reveals. */
  delay?: number;
  /** Optional extra classes on the wrapping element. */
  className?: string;
};

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      // Start slightly lower and transparent...
      initial={{ opacity: 0, y: 24 }}
      // ...animate to full opacity and natural position when scrolled into view.
      whileInView={{ opacity: 1, y: 0 }}
      // `once: true` means it only animates the first time (not every scroll-by).
      // `margin` triggers a bit before the element is fully on screen.
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
