"use client";

/**
 * useIsDesktop
 * ------------
 * A small custom React hook that returns `true` only on a real desktop:
 * a wide viewport AND no coarse (touch) pointer. We use it to completely skip
 * rendering the interactive terminal on phones/tablets.
 *
 * Why it returns `null` at first:
 *   On the server (and the very first browser paint) we can't know the screen
 *   size, so we return `null` = "don't know yet". The component treats `null`
 *   as "render nothing". Once mounted in the browser we measure for real and
 *   return true/false. This avoids a hydration mismatch and any flash/empty gap.
 *
 * It also re-checks on window resize so rotating a tablet behaves correctly.
 */
import { useEffect, useState } from "react";

export function useIsDesktop(minWidth = 768) {
  // null = not yet determined (server / first paint)
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    function check() {
      const wideEnough = window.innerWidth >= minWidth;
      // `pointer: fine` = a precise pointer like a mouse/trackpad.
      // Touch-only devices report `pointer: coarse`.
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
      setIsDesktop(wideEnough && hasFinePointer);
    }

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [minWidth]);

  return isDesktop;
}
