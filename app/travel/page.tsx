"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { useEffect, useRef } from "react";

function randomColor(): [number, number, number] {
	return [Math.random(), Math.random(), Math.random()];
}

function randomizeColors(): COBEOptions {
	return {
		baseColor: randomColor(),
		markerColor: randomColor(),
		glowColor: randomColor(),
	} as COBEOptions;
}

export default function Travel() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		let phi = 0;

		if (!canvasRef.current) return;

		const globe = createGlobe(canvasRef?.current, {
			...randomizeColors(),
			devicePixelRatio: 2,
			width: 950 * 2,
			height: 950 * 2,
			phi: 0,
			theta: 0.5,
			dark: 1,
			offset: [10, 0],
			diffuse: 1.2,
			mapSamples: 50000,
			mapBrightness: 6,
			opacity: 0.7,
			markers: [
				{ location: [40.815, -96.68], size: 0.03 }, // Lincoln, NE
				{ location: [25.792, -80.135], size: 0.03 }, // Miami, FL
				{ location: [52.52, 13.405], size: 0.03 }, // Berlin, Germany
				{ location: [52.283, 8.917], size: 0.03 }, // Minden, Germany
				{ location: [52.375, 9.732], size: 0.03 }, // Hannover, Germany
				{ location: [50.937, 6.96], size: 0.03 }, // Cologne, Germany
				{ location: [36.314, 41.862], size: 0.03 }, // Sinjar, Iraq
				{ location: [16.863, -99.882], size: 0.03 }, // Acapulco, Mexico
			],
			onRender: (state) => {
				state.phi = phi;
				phi += 0.01;
			},
		});

		return () => globe.destroy();
	}, []);

	return (
		<main className="flex flex-col justify-center items-center">
			<canvas ref={canvasRef} style={{ height: 990, width: 950 }} />
		</main>
	);
}
