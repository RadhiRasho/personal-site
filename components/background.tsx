"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { createReveal } from "@/lib/animations";
import { AboutSection } from "@/components/information";
import InitialInfo from "./initial-info";
import ProfessionalBackground from "./professional-background";

function AnimatedCard({
  children,
  direction = "left",
  delay = 0,
}: {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
}) {
  const translateX = direction === "left" ? -50 : 50;

  return (
    <motion.div
      className="flex w-full flex-col items-center gap-6"
      {...createReveal({ x: translateX, delay: delay / 1000 })}
    >
      {children}
    </motion.div>
  );
}

export default function Background() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-y-8 overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
      <AnimatedCard direction="left">
        <Card className="w-full bg-black/50 backdrop-blur-xs md:w-10/12">
          <CardContent>
            <InitialInfo />
          </CardContent>
        </Card>
      </AnimatedCard>

      <AnimatedCard direction="left" delay={100}>
        <Card className="w-full bg-black/50 backdrop-blur-xs md:w-10/12">
          <CardHeader>
            <CardTitle>About Me</CardTitle>
            <CardDescription>
              Passionate about creating innovative web solutions and continuously learning new
              technologies.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ProfessionalBackground />
          </CardContent>
        </Card>
      </AnimatedCard>

      <AnimatedCard direction="right" delay={200}>
        <Card className="w-full bg-black/50 backdrop-blur-xs md:w-10/12">
          <CardContent>
            <AboutSection />
          </CardContent>
        </Card>
      </AnimatedCard>
    </div>
  );
}
