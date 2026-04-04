import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { animate } from "motion/react";

interface ScrambleInProps {
  text: string;
  scrambleSpeed?: number;
  scrambledLetterCount?: number;
  characters?: string;
  className?: string;
  scrambledClassName?: string;
  autoStart?: boolean;
  onStart?: () => void;
  onComplete?: () => void;
}

export interface ScrambleInHandle {
  start: () => void;
  reset: () => void;
}

const ScrambleIn = forwardRef<ScrambleInHandle, ScrambleInProps>(
  (
    {
      text,
      scrambleSpeed = 50,
      scrambledLetterCount = 2,
      characters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
      className = "",
      scrambledClassName = "",
      autoStart = true,
      onStart,
      onComplete,
    },
    ref,
  ) => {
    const [revealedText, setRevealedText] = useState("");
    const [scrambledText, setScrambledText] = useState("");
    const controlsRef = useRef<ReturnType<typeof animate> | null>(null);

    const updateDisplay = useCallback(
      (progress: number) => {
        const visibleLetterCount = Math.floor(progress);
        const remainingSpace = Math.max(0, text.length - visibleLetterCount);
        const currentScrambleCount = Math.min(remainingSpace, scrambledLetterCount);

        const scrambledPart = Array.from({ length: currentScrambleCount }, () => {
          return characters[Math.floor(Math.random() * characters.length)] ?? "";
        }).join("");

        setRevealedText(text.slice(0, visibleLetterCount));
        setScrambledText(scrambledPart);
      },
      [characters, scrambledLetterCount, text],
    );

    const startAnimation = useCallback(() => {
      controlsRef.current?.stop();
      setRevealedText("");
      setScrambledText("");
      onStart?.();

      controlsRef.current = animate(0, text.length, {
        duration: Math.max((text.length * scrambleSpeed) / 1000, 0.01),
        ease: "linear",
        onUpdate: updateDisplay,
        onComplete: () => {
          setRevealedText(text);
          setScrambledText("");
          onComplete?.();
        },
      });
    }, [onComplete, onStart, scrambleSpeed, text, updateDisplay]);

    const reset = useCallback(() => {
      controlsRef.current?.stop();
      setRevealedText("");
      setScrambledText("");
    }, []);

    useImperativeHandle(ref, () => ({
      start: startAnimation,
      reset,
    }));

    useEffect(() => {
      if (autoStart) {
        startAnimation();
      }

      return () => {
        controlsRef.current?.stop();
      };
    }, [autoStart, startAnimation]);

    return (
      <>
        <span className="sr-only">{text}</span>
        <span className="inline-block whitespace-pre-wrap" aria-hidden="true">
          <span className={className}>{revealedText}</span>
          <span className={scrambledClassName}>{scrambledText}</span>
        </span>
      </>
    );
  },
);
export default ScrambleIn;
