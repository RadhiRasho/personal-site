"use client";

import createGlobe, { type Marker } from "cobe";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";
import { useWindowSize } from "usehooks-ts";

type GlobeColor = [number, number, number];

type GlobeTheme = {
  baseColor: GlobeColor;
  markerColor: GlobeColor;
  glowColor: GlobeColor;
};

const goldenHourTheme = {
  baseColor: [1, 0.96, 0.88],
  markerColor: [0.96, 0.66, 0.08],
  glowColor: [1, 0.82, 0.42],
} satisfies GlobeTheme;

function getGlobeSize(viewportWidth: number, viewportHeight: number) {
  const safeWidth = viewportWidth || 1200;
  const safeHeight = viewportHeight || 900;

  return Math.round(Math.max(720, Math.min(safeWidth, safeHeight) * 1.15));
}

function buildGlobeOptions(
  viewportWidth: number,
  viewportHeight: number,
  phi: number,
): Parameters<typeof createGlobe>[1] {
  const size = getGlobeSize(viewportWidth, viewportHeight);

  return {
    devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
    width: size,
    height: size,
    phi,
    theta: 0.3,
    dark: 1,
    diffuse: 1,
    mapSamples: 30000,
    mapBrightness: 1,
    markerElevation: 0,
    context: {
      antialias: true,
    },
    baseColor: goldenHourTheme.baseColor,
    markerColor: goldenHourTheme.markerColor,
    glowColor: goldenHourTheme.glowColor,
    opacity: 0.9,
    markers,
  };
}

const markers: Marker[] = [
  { location: [40.8113, -96.707], size: 0.02, id: "Lincoln" }, // Lincoln, NE, Home
  { location: [25.792, -80.135], size: 0.02, id: "Miami" }, // Miami, FL
  { location: [52.52, 13.405], size: 0.02, id: "Berlin" }, // Berlin, Germany
  { location: [52.1814, 8.53238], size: 0.02, id: "Minden" }, // Minden, Germany
  { location: [52.375, 9.732], size: 0.02, id: "Hannover" }, // Hannover, Germany
  { location: [50.937, 6.96], size: 0.02, id: "Cologne" }, // Cologne, Germany
  { location: [36.314, 41.862], size: 0.02, id: "Sinjar" }, // Sinjar, Iraq
  { location: [36.8658, 42.9877], size: 0.02, id: "Duhok" }, // Duhok, Iraq
  { location: [36.34, 43.13], size: 0.02, id: "Zakho" }, // Zakho, Iraq
  { location: [33.3185, 44.3689], size: 0.02, id: "Baghdad" }, // Baghdad, Iraq
  { location: [16.863, -99.882], size: 0.02, id: "Acapulco" }, // Acapulco, Mexico
  { location: [57.7089, 11.9746], size: 0.02, id: "Gothenburg" }, // Gothenburg, Sweden
  { location: [59.3293, 18.0686], size: 0.02, id: "Stockholm" }, // Stockholm, Sweden
  { location: [60.1695, 24.9354], size: 0.02, id: "Helsinki" }, // Helsinki, Finland
  { location: [38.8344, -104.8139], size: 0.02, id: "Colorado Springs" }, // Colorado Springs, CO
  { location: [40.763, -111.8907], size: 0.02, id: "Salt Lake City" }, // Salt Lake City, UT
  { location: [44.7583, -110.0369], size: 0.02, id: "Yellowstone National Park" }, // Yellowstone National Park, WY
  { location: [39.1788, -94.4857], size: 0.02, id: "Worlds of Fun" }, // Worlds of Fun, Kansas City, MO
  { location: [44.9503, -92.8326], size: 0.02, id: "Mall of America" }, // Mall of America, Minneapolis, MN
  { location: [38.9003, -77.0314], size: 0.02, id: "The White House" }, // The White House, Washington, D.C.
];

const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
  const frameRef = useRef<number | null>(null);
  const windowSize = useWindowSize();
  const phiRef = useRef(0);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (!canvasRef.current) return;

    globeRef.current = createGlobe(
      canvasRef.current,
      buildGlobeOptions(window.innerWidth, window.innerHeight, phiRef.current),
    );

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      globeRef.current?.destroy();
      globeRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!globeRef.current) return;

    globeRef.current.update(buildGlobeOptions(windowSize.width, windowSize.height, phiRef.current));
  }, [windowSize.height, windowSize.width]);

  useEffect(() => {
    if (!globeRef.current) return;

    if (frameRef.current !== null) {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }

    const rotate = () => {
      phiRef.current = (phiRef.current + 0.002) % (Math.PI * 2);
      globeRef.current?.update({ phi: phiRef.current });
      frameRef.current = requestAnimationFrame(rotate);
    };

    frameRef.current = requestAnimationFrame(rotate);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 -z-30 overflow-hidden"
      initial={{ opacity: 0, x: 120 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.canvas
        ref={canvasRef}
        className="absolute -right-50 -bottom-10 h-full w-auto max-w-none origin-bottom-right -rotate-25 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.08 }}
      />
    </motion.div>
  );
};

export default Globe;
