"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Globe = dynamic(() => import("@/components/globe"), {
    ssr: false,
    loading: () => null,
});

export default function GlobeWrapper() {
    return (
        <Suspense fallback={null}>
            <Globe />
        </Suspense>
    );
}
