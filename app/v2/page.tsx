'use client';

import Globe from "@/components/Globe";
import { useTheme } from "next-themes";
import { useMemo } from "react";
import TypeEffect, { type Options } from "typewriter-effect";

export default function Home() {
    const { theme } = useTheme();

    const words = useMemo<string[]>(() => {
        return [
            "Software Engineer",
            "Web Developer",
            "Full Stack Engineer",
            "Localhost:3000/Coding",
            "git commit -m 'Hello World'",
        ];
    }, []);

    return (
        <main className="min-h-screen h-full w-full min-w-screen flex items-center justify-between ">
            <div className="fixed top-28 -right-64 -z-10">
                <Globe />
            </div>
            <section className="relative flex p-4 mb-4 min-h-screen h-full w-full min-w-screen">
                <div className="flex items-center justify-between w-8/12 gap-2">
                    <div className="flex flex-col w-full items-center justify-center gap-2">
                        <h1 className="text-xl font-bold">Hi, I'm {' '}
                            <span className="text-3xl font-black font-serif bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 dark:from-red-600 dark:via-purple-600 dark:to-blue-600 animate-text bg-clip-text text-transparent bg-300% motion-safe:animate-gradient">
                                Radhi Rasho
                            </span>
                        </h1>
                        <TypeEffect
                            options={
                                {
                                    strings: words,
                                    autoStart: true,
                                    deleteSpeed: 50,
                                    delay: 50,
                                    pauseFor: 3500,
                                    cursor: "_",
                                    devMode: false,
                                    loop: true,
                                    skipAddStyles: true,
                                    wrapperClassName:
                                        "text-base/loose font-bold bg-gradient-to-r from-blue-600 to-red-600 dark:from-red-600 dark:to-blue-600 bg-clip-text text-transparent",
                                    cursorClassName: `text-xs font-bold ${theme === "dark" ? "text-blue-500" : "text-red-500"
                                        }`,
                                } as Partial<Options> & { pauseFor: number }
                            }
                        />
                    </div>
                </div>
                <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-black to-transparent blur-lg">&nbsp;</div>
            </section>
        </main>
    );
}
