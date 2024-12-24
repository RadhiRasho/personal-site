import createGlobe, { type COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";

function randomColor(): [number, number, number] {
    return [1, Math.random(), Math.random() * 0.5]; // Red hue with random green and blue components
}

function randomizeColors(): COBEOptions {
    return {
        baseColor: randomColor(),
        markerColor: randomColor(),
        glowColor: randomColor(),
    } as COBEOptions;
}

function decodeBase64(base64String: string): string {
    let decodedString = atob(base64String);

    while (decodedString.endsWith("=="))
        decodedString = decodeBase64(decodedString.trim().replace(" ", ""));

    return decodedString;
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
                diffuse: 1.2,
                mapSamples: 80000,
                mapBrightness: 6,
                opacity: 0.7,
                markers: [
                    { location: [40.8113906, -96.7070645], size: 0.03 }, // Lincoln, NE, Home
                    { location: [25.792, -80.135], size: 0.03 }, // Miami, FL
                    { location: [52.52, 13.405], size: 0.03 }, // Berlin, Germany
                    { location: [52.1814, 8.53238], size: 0.03 }, // Minden, Germany (V28gbWVpbiBoZXJ6IGlzdCBqZXR6dA==)
                    { location: [52.375, 9.732], size: 0.03 }, // Hannover, Germany
                    { location: [50.937, 6.96], size: 0.03 }, // Cologne, Germany
                    { location: [36.314, 41.862], size: 0.03 }, // Sinjar, Iraq
                    { location: [16.863, -99.882], size: 0.03 }, // Acapulco, Mexico
                    { location: [57.7089, 11.9746], size: 0.03 }, // Gothenburg, Sweden
                    { location: [59.3293, 18.0686], size: 0.03 }, // Stockholm, Sweden
                    { location: [60.1695, 24.9354], size: 0.03 }, // Helsinki, Finland (d28gaWNoIGRpY2ggdmVybG9yZW4gaGFiZQ==)
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

    useEffect(() => {
        const tolerance = 0.01; // Increase the tolerance value

        window.navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;

            if (
                Math.abs(Number(latitude.toFixed(3)) - 52.1814) <= tolerance &&
                Math.abs(Number(longitude.toFixed(3)) - 8.53238) <= tolerance
            ) {
                const text = decodeBase64(
                    "ZDI4Z2FXTm9JR1JwWTJnZ2RtIFZ5Ykc5eVpXNGdhR0ZpWlE9PQ==",
                );

                alert(text);
            }
        });
    }, []);

    return (<canvas ref={canvasRef} className="globe-canvas" />);
}
