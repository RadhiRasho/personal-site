"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Float from "@/components/fancy/float";
import { createReveal } from "@/lib/animations";
import dynamic from "next/dynamic";
import Typewriter from "./fancy/typewriter";

const ScrambleIn = dynamic(() => import("@/components/fancy/scramblein"), {
  ssr: false,
  loading: () => null,
});

const words = [
  "Software Engineer",
  "Web Developer",
  "Full Stack Engineer",
  "Localhost:3000/Coding",
  "git commit -m 'Hello World'",
  "git commit -m 'Hallo Welt!'",
  "It's Gotta Be Cornflower Bluuueee",
];

export default function Landing() {
  return (
    <motion.section
      className="relative mb-4 flex h-full min-h-screen w-10/12 flex-col items-baseline justify-center md:w-8/12"
      {...createReveal({ y: 40, duration: 0.7 })}
    >
      <Float>
        <motion.div
          className="relative flex h-52 w-52 cursor-pointer overflow-hidden shadow-2xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Image
            src="/Neues-Rathaus-Hannover.jpg"
            alt="Radhi Rasho"
            title="Neues Rathaus, Hannover"
            fill
            loading="eager"
            sizes="(max-width: 768px) 208px, 208px"
            className="absolute h-full w-full rounded-3xl object-cover"
          />
        </motion.div>
      </Float>
      <motion.div
        className="bg-background/80 lg:bg-background/0 z-20 flex w-full grow-0 flex-col items-center justify-center rounded-xl border p-4 shadow-2xl backdrop-blur-xs lg:w-7/12 lg:items-start lg:rounded-none lg:border-none lg:p-2 lg:shadow-none lg:backdrop-blur-none"
        {...createReveal({ y: 24, delay: 0.15, duration: 0.6 })}
      >
        <div className="flex flex-col items-baseline justify-between gap-0.5 font-bold md:gap-2 lg:flex-row">
          <span className="tracking-tighter">Hi, I'm</span>
          <ScrambleIn
            text="Radhi Rasho"
            className="animate-text motion-safe:animate-gradient bg-linear-to-r from-blue-500 via-purple-500 to-red-500 bg-size-[300%] bg-clip-text font-serif text-xl font-black text-transparent"
            scrambleSpeed={25}
            scrambledLetterCount={2}
            scrambledClassName="opacity-70"
            characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
            autoStart
          />
        </div>
        <Typewriter
          text={words}
          speed={20}
          className="animate-text motion-safe:animate-gradient bg-linear-to-r from-blue-500 via-purple-500 to-red-500 bg-size-[300%] bg-clip-text font-serif text-xl font-black text-transparent"
          waitTime={3500}
          deleteSpeed={40}
          cursorChar="_"
          cursorClassName={"text-xs font-bold text-blue-500"}
        />
      </motion.div>
      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span className="text-muted-foreground text-[0.55rem] font-medium tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          className="from-muted-foreground h-6 w-px bg-linear-to-b to-transparent"
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.section>
  );
}
