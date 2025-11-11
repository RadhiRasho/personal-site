"use client";

import { type ReactNode, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type FloatProps = {
    children: ReactNode;
    speed?: number;
    amplitude?: [number, number, number]; // [x, y, z]
    rotationRange?: [number, number, number]; // [x, y, z]
    timeOffset?: number;
    className?: string;
};

export default function Float({
    children,
    speed = 0.5,
    amplitude = [10, 30, 30],
    rotationRange = [15, 15, 7.5],
    timeOffset = 0,
    className,
}: FloatProps) {
    const ref = useRef<HTMLDivElement>(null);
    const timeRef = useRef(timeOffset);

    useEffect(() => {
        let animationFrameId: number;

        const animate = () => {
            if (!ref.current) return;

            timeRef.current += speed * 0.016; // Assuming 60fps (1/60 ≈ 0.016)
            const time = timeRef.current;

            const x = Math.sin(time * 0.5) * amplitude[0];
            const y = Math.sin(time) * amplitude[1];
            const z = Math.sin(time * 0.3) * amplitude[2];

            const rotX = Math.sin(time * 0.3) * rotationRange[0];
            const rotY = Math.sin(time * 0.5) * rotationRange[1];
            const rotZ = Math.sin(time * 0.2) * rotationRange[2];

            ref.current.style.transform = `
				translate3d(${x}px, ${y}px, ${z}px)
				rotateX(${rotX}deg)
				rotateY(${rotY}deg)
				rotateZ(${rotZ}deg)
			`;

            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [speed, amplitude, rotationRange]);

    return (
        <div ref={ref} className={cn("will-change-transform", className)}>
            {children}
        </div>
    );
}
