"use client";

import createGlobe, { type COBEOptions, type Marker } from "cobe";
import { motion } from "motion/react";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useMediaQuery, useWindowSize } from "usehooks-ts";

function isWebGLContext() {
	const canvas = document.createElement("canvas");
	const gl =
		canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

	console.log(gl);

	return gl instanceof WebGLRenderingContext;
}

const Globe = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
	const windowSize = useWindowSize();
	const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

	const [disabledWebGL, setDisabledWebGL] = useState(false);

	const markers: Marker[] = useMemo(
		() => [
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
		],
		[],
	);

	const randomBrightColor = useMemo((): [number, number, number] => {
		return [200, Math.random(), Math.random()]; // Red hue with random green and blue components
	}, []);

	const randomDarkColor = useMemo((): [number, number, number] => {
		return [0.5, Math.random(), Math.random()]; // Red hue with random green and blue components
	}, []);

	const randomSoftColor = useMemo((): [number, number, number] => {
		return [Math.random(), Math.random(), Math.random()]; // Random hue with random saturation and value
	}, []);

	const randomizeColors = useMemo((): COBEOptions => {
		return {
			baseColor: randomDarkColor,
			markerColor: randomBrightColor,
			glowColor: randomSoftColor,
		} as COBEOptions;
	}, [randomBrightColor, randomDarkColor, randomSoftColor]);

	const createAndRenderGlobe = useCallback(() => {
		let phi = 0;

		if (globeRef.current) {
			globeRef.current.destroy();
		}

		globeRef.current = createGlobe(canvasRef.current!, {
			...randomizeColors,
			devicePixelRatio: 1,
			width: windowSize.width,
			height: windowSize.height,
			phi: 0,
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
				failIfMajorPerformanceCaveat: true,
				stencil: false,
			},
			mapSamples: 64_000,
			mapBrightness: 8,
			opacity: 0.8,
			markers,
			onRender: (state) => {
				if (!prefersReducedMotion) {
					state.phi = phi;

					phi += 0.001;
				}
			},
		});
	}, [markers, windowSize.width, randomizeColors]);


	useEffect(() => {
		if (!document) return;
		if (!canvasRef.current) return;

		if (!isWebGLContext()) {
			setDisabledWebGL(true);
			return;
		}

		createAndRenderGlobe();

		setTimeout(() => {
			const canvas = canvasRef.current;

			if (!canvas) return;

			canvas.style.opacity = "1";
		})

		return () => {
			globeRef.current?.destroy();
		};
	}, [createAndRenderGlobe]);

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
		<motion.div
			layout
			initial={"hidden"}
			animate={"visible"}
			transition={{
				duration: 0.2,
				ease: "easeIn",
			}}
			variants={{
				hidden: { opacity: 0, x: "100%" }, // Increased y value for more dramatic effect from bottom
				visible: { opacity: 1, x: 0 }, // Maintains center position as destination
			}}
			className="lg:-right-[30%] -bottom-60 md:-bottom-32 -z-30 pointer-events-none fixed h-full w-full overflow-hidden transition-all duration-300"
		>
			<canvas
				ref={canvasRef}
				className="md:-rotate-[18deg] pointer-events-none h-full w-auto overflow-hidden"
			/>
		</motion.div>
	);
};

export default memo(Globe);
