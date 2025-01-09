import createGlobe, { type COBEOptions } from "cobe";
import { useEffect, useRef } from "react";

function randomBrightColor(): [number, number, number] {
	return [200, Math.random(), Math.random()]; // Red hue with random green and blue components
}

function randomDarkColor(): [number, number, number] {
	return [0.5, Math.random(), Math.random()]; // Red hue with random green and blue components
}

function randomSoftColor(): [number, number, number] {
	return [Math.random(), Math.random(), Math.random()]; // Random hue with random saturation and value
}

function randomizeColors(): COBEOptions {
	return {
		baseColor: randomDarkColor(),
		markerColor: randomBrightColor(),
		glowColor: randomSoftColor(),
	} as COBEOptions;
}

export default function Globe() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null);

	useEffect(() => {
		let phi = 0;

		const createAndRenderGlobe = () => {
			if (!canvasRef.current) return;

			if (globeRef.current) {
				globeRef.current.destroy();
			}

			globeRef.current = createGlobe(canvasRef.current, {
				...randomizeColors(),
				devicePixelRatio: window.devicePixelRatio || 1,
				width: 500 * 2,
				height: 500 * 2,
				phi: 0,
				theta: 0.3,
				dark: 1,
				offset: [10, 50],
				diffuse: 3,
				mapSamples: 80000,
				mapBrightness: 8,
				opacity: 0.7,
				markers: [
					{ location: [40.8113906, -96.7070645], size: 0.03 }, // Lincoln, NE, Home
					{ location: [25.792, -80.135], size: 0.03 }, // Miami, FL
					{ location: [52.52, 13.405], size: 0.03 }, // Berlin, Germany
					{ location: [52.1814, 8.53238], size: 0.03 }, // Minden, Germany
					{ location: [52.375, 9.732], size: 0.03 }, // Hannover, Germany
					{ location: [50.937, 6.96], size: 0.03 }, // Cologne, Germany
					{ location: [36.314, 41.862], size: 0.03 }, // Sinjar, Iraq
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
				onRender: (state) => {
					state.phi = phi;
					phi += 0.001;
				},
			});
		};

		createAndRenderGlobe();

		const handleZoom = (event: WheelEvent) => {
			if (event.ctrlKey) {
				event.preventDefault();
				globeRef.current?.destroy();
				createAndRenderGlobe();
			}
		};

		window.addEventListener("wheel", handleZoom);

		return () => {
			if (globeRef.current) {
				globeRef.current.destroy();
			}
			window.removeEventListener("wheel", handleZoom);
		};
	}, []);

	return <canvas ref={canvasRef} className="globe-canvas" />;
}
