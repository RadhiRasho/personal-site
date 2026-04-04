import type { TargetAndTransition, Transition, ViewportOptions } from "motion/react";

export const motionEase = [0.22, 1, 0.36, 1] as const;

export const revealViewport: ViewportOptions = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -80px 0px",
};

type RevealOptions = {
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  scale?: number;
};

export function revealTransition(delay = 0, duration = 0.6): Transition {
  return {
    delay,
    duration,
    ease: motionEase,
  };
}

export function createReveal({
  delay = 0,
  duration = 0.6,
  x = 0,
  y = 0,
  scale = 1,
}: RevealOptions): {
  initial: TargetAndTransition;
  whileInView: TargetAndTransition;
  transition: Transition;
  viewport: ViewportOptions;
} {
  return {
    initial: { opacity: 0, x, y, scale },
    whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
    transition: revealTransition(delay, duration),
    viewport: revealViewport,
  };
}
