"use client";

import createGlobe, { type Marker } from "cobe";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { useMediaQuery, useWindowSize } from "usehooks-ts";

function isWebGLContext() {
	const canvas = document.createElement("canvas");
	const gl =
		canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

	return gl instanceof WebGLRenderingContext;
}

const markers: Marker[] = [
	{ location: [40.8113, -96.707], size: 0.03 }, // Lincoln, NE, Home
	{ location: [25.792, -80.135], size: 0.03 }, // Miami, FL
	{ location: [52.52, 13.405], size: 0.03 }, // Berlin, Germany
	{ location: [52.1814, 8.53238], size: 0.03 }, // Minden, Germany
	{ location: [52.375, 9.732], size: 0.03 }, // Hannover, Germany
	{ location: [50.937, 6.96], size: 0.03 }, // Cologne, Germany
	{ location: [36.314, 41.862], size: 0.03 }, // Sinjar, Iraq
	{ location: [36.8658, 42.9877], size: 0.03 }, // Duhok, Iraq
	{ location: [36.34, 43.13], size: 0.03 }, // Zakho, Iraq
	{ location: [33.3185, 44.3689], size: 0.03 }, // Baghdad, Iraq
	{ location: [16.863, -99.882], size: 0.03 }, // Acapulco, Mexico
	{ location: [57.7089, 11.9746], size: 0.03 }, // Gothenburg, Sweden
	{ location: [59.3293, 18.0686], size: 0.03 }, // Stockholm, Sweden
	{ location: [60.1695, 24.9354], size: 0.03 }, // Helsinki, Finland
	{ location: [38.8344, -104.8139], size: 0.03 }, // Colorado Springs, CO
	{ location: [40.763, -111.8907], size: 0.03 }, // Salt Lake City, UT
	{ location: [44.7583, -110.0369], size: 0.03 }, // Yellowstone National Park, WY
	{ location: [39.1788, -94.4857], size: 0.03 }, // Worlds of Fun, Kansas City, MO
	{ location: [44.9503, -92.8326], size: 0.03 }, // Mall of America, Minneapolis, MN
	{ location: [38.9003, -77.0314], size: 0.03 }, // The White House, Washington, D.C.
];

const Globe = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
	const windowSize = useWindowSize();
	const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
	const phiRef = useRef(0); // Store phi in a ref to maintain rotation state

	const [disabledWebGL, setDisabledWebGL] = useState(false);

	// Use refs for colors to keep them stable across renders
	const colorsRef = useRef({
		baseColor: [0.5, Math.random(), Math.random()] as [number, number, number],
		markerColor: [200, Math.random(), Math.random()] as [number, number, number],
		glowColor: [Math.random(), Math.random(), Math.random()] as [number, number, number],
	});

	const createAndRenderGlobe = useCallback(() => {
		if (!canvasRef.current) return;

		if (globeRef.current) {
			globeRef.current.destroy();
			globeRef.current = null;
		}

		globeRef.current = createGlobe(canvasRef.current, {
			baseColor: colorsRef.current.baseColor,
			markerColor: colorsRef.current.markerColor,
			glowColor: colorsRef.current.glowColor,
			devicePixelRatio: 1,
			width: windowSize.width,
			height: windowSize.height,
			phi: phiRef.current, // Use stored phi value
			theta: 0.3,
			dark: 1,
			offset: [10, 50],
			diffuse: 3,
			context: {
				antialias: true,
				alpha: true,
				premultipliedAlpha: true,
				preserveDrawingBuffer: true,
				depth: true,
				powerPreference: "low-power",
				desynchronized: true,
				failIfMajorPerformanceCaveat: false,
				stencil: false,
			},
			mapSamples: 64_000,
			mapBrightness: 8,
			opacity: 0.8,
			markers,
			onRender: (state) => {
				if (!prefersReducedMotion) {
					phiRef.current += 0.001; // Update the ref
					state.phi = phiRef.current;
				}
			},
		});
	}, [markers, windowSize.width, windowSize.height, prefersReducedMotion]);

	// Initial setup effect - runs once
	useEffect(() => {
		if (typeof document === 'undefined') return;
		if (!canvasRef.current) return;

		if (!isWebGLContext()) {
			setDisabledWebGL(true);
			return;
		}

		createAndRenderGlobe();

		const canvas = canvasRef.current;
		if (!canvas) return;

		return () => {
			if (globeRef.current) {
				globeRef.current.destroy();
				globeRef.current = null;
			}
		};
	}, []); // Only run once on mount

	// Handle window resize with debounce
	useEffect(() => {
		if (!globeRef.current) return;

		createAndRenderGlobe();
	}, [windowSize.width, windowSize.height, createAndRenderGlobe]);

	if (disabledWebGL) {
		return (
			<div className="flex items-center justify-center">
				<p className="text-muted-foreground text-sm">
					<span className="font-semibold">Hint</span>: enable{" "}
					<span className="font-semibold">WebGL</span> to render the globe.
				</p>
			</div>
		);
	}

	return (
		<div
			className="lg:-right-[30%] -bottom-60 md:-bottom-32 -z-30 pointer-events-none fixed h-full w-full overflow-hidden transition-all duration-300 animate-in slide-in-from-right"
			style={{
				animation: 'slideInFromRight 0.2s ease-in forwards',
			}}
		>
			<canvas
				ref={canvasRef}
				style={{ transition: 'opacity 0.3s ease-in' }}
				className="md:-rotate-18 pointer-events-none h-full w-auto overflow-hidden"
			/>
		</div>
	);
};

export default memo(Globe);
