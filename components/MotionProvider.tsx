"use client";

/**
 * MotionProvider
 * --------------
 * Wraps the whole page so every Framer Motion animation (the Reveal fade-ins,
 * the hero text, etc.) automatically respects the visitor's OS-level
 * "Reduce Motion" accessibility setting. With reducedMotion="user", Framer
 * skips transform/slide animations for those visitors and keeps simple
 * opacity fades, so nothing pops in jarringly but nothing flies around either.
 */
import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
