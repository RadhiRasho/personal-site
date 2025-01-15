import createGlobe, { type Marker, type COBEOptions } from "cobe";
import { memo, useCallback, useEffect, useMemo, useRef } from "react";
import { useWindowSize } from "usehooks-ts";

function Globe() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);
	const windowSize = useWindowSize();

	const handleZoom = useCallback((event: WheelEvent) => {
		if (event.ctrlKey) {
			event.preventDefault();
			globeRef.current?.destroy();
			createAndRenderGlobe();
		}
	}, []);

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

	const randomBrightColor = useCallback((): [number, number, number] => {
		return [200, Math.random(), Math.random()]; // Red hue with random green and blue components
	}, []);

	const randomDarkColor = useCallback((): [number, number, number] => {
		return [0.5, Math.random(), Math.random()]; // Red hue with random green and blue components
	}, []);

	const randomSoftColor = useCallback((): [number, number, number] => {
		return [Math.random(), Math.random(), Math.random()]; // Random hue with random saturation and value
	}, []);

	const randomizeColors = useCallback((): COBEOptions => {
		return {
			baseColor: randomDarkColor(),
			markerColor: randomBrightColor(),
			glowColor: randomSoftColor(),
		} as COBEOptions;
	}, [randomBrightColor, randomDarkColor, randomSoftColor]);

	const createAndRenderGlobe = useCallback(() => {
		let phi = 0;
		if (!canvasRef.current) return;

		if (globeRef.current) {
			globeRef.current.destroy();
		}

		globeRef.current = createGlobe(canvasRef.current, {
			...randomizeColors(),
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
				powerPreference: 'low-power',
				desynchronized: true,
				failIfMajorPerformanceCaveat: true,
				stencil: false,
			},
			mapSamples: 80_000,
			mapBrightness: 8,
			opacity: 0.8,
			markers,
			onRender: (state) => {
				state.phi = phi;
				phi += 0.001;
			},
		});
	}, [markers, windowSize.height, windowSize.width, randomizeColors]);

	useEffect(() => {
		createAndRenderGlobe();

		window.addEventListener("wheel", handleZoom);
		return () => {
			if (globeRef.current) {
				globeRef.current.destroy();
				removeEventListener("wheel", handleZoom);
			}
		};
	}, [createAndRenderGlobe, handleZoom]);

	return <canvas ref={canvasRef} className="sm:-rotate-12 h-full w-full" />;
}

export default memo(Globe);
