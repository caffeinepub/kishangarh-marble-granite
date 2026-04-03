import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
}

function formatNumber(n: number): string {
  return n.toLocaleString("en-IN");
}

export function AnimatedCounter({ value }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;

    // Extract numeric part and suffix (e.g. "10,000+" -> num=10000, suffix="+")
    const cleaned = value.replace(/,/g, "");
    const match = cleaned.match(/^([0-9]+)(.*)$/);

    if (!match) {
      // No number found — just reveal the text
      setDisplay(value);
      return;
    }

    const target = Number.parseInt(match[1], 10);
    const suffix = match[2] ?? "";

    const duration = 1500; // ms
    const startTime = performance.now();

    function easeOutCubic(t: number): number {
      return 1 - (1 - t) ** 3;
    }

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      const current = Math.round(eased * target);
      setDisplay(formatNumber(current) + suffix);
      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [inView, value]);

  return <span ref={ref}>{display}</span>;
}
