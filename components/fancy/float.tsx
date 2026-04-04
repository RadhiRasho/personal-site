"use client";

import { motion, useReducedMotion } from "motion/react";
import { type ReactNode, useMemo } from "react";
import { cn } from "@/lib/utils";

type FloatProps = {
  children: ReactNode;
  speed?: number;
  amplitude?: [number, number, number]; // [x, y, z]
  rotationRange?: [number, number, number]; // [x, y, z]
  timeOffset?: number;
  className?: string;
};

function buildWave(amplitude: number, frequency: number, offset = 0, samples = 8) {
  return Array.from({ length: samples + 1 }, (_, index) => {
    const progress = (index / samples) * Math.PI * 2 + offset;
    return Number((Math.sin(progress * frequency) * amplitude).toFixed(3));
  });
}

export default function Float({
  children,
  speed = 0.5,
  amplitude = [10, 30, 30],
  rotationRange = [15, 15, 7.5],
  timeOffset = 0,
  className,
}: FloatProps) {
  const prefersReducedMotion = useReducedMotion();
  const duration = useMemo(() => Math.max(12 / Math.max(speed, 0.1), 8), [speed]);
  const animation = useMemo(
    () => ({
      x: buildWave(amplitude[0], 0.5, timeOffset),
      y: buildWave(amplitude[1], 1, timeOffset),
      z: buildWave(amplitude[2], 0.3, timeOffset),
      rotateX: buildWave(rotationRange[0], 0.3, timeOffset),
      rotateY: buildWave(rotationRange[1], 0.5, timeOffset),
      rotateZ: buildWave(rotationRange[2], 0.2, timeOffset),
    }),
    [amplitude, rotationRange, timeOffset],
  );

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      style={{ transformStyle: "preserve-3d" }}
      animate={prefersReducedMotion ? undefined : animation}
      transition={
        prefersReducedMotion
          ? undefined
          : {
              duration,
              ease: "easeInOut",
              repeat: Number.POSITIVE_INFINITY,
            }
      }
    >
      {children}
    </motion.div>
  );
}
