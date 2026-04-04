"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { useState, type ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createReveal } from "@/lib/animations";
import TechnologiesList from "./technologies-list";

type Experience = {
  company: string;
  role: string;
  period: string;
};

type Education = {
  degree: string;
  school: string;
  year: string;
};

function AnimatedListItem({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.li
      className="flex w-full items-start gap-4 md:w-auto"
      {...createReveal({ y: 20, delay: delay / 1000, duration: 0.5 })}
    >
      {children}
    </motion.li>
  );
}

function ExperienceList({ experiences }: { experiences: Experience[] }) {
  return (
    <ul className="flex w-full flex-col items-center justify-evenly space-y-4 p-2 md:flex-row md:items-start md:space-y-0 md:space-x-4 md:p-4">
      {experiences.map((exp, index) => (
        <AnimatedListItem key={index} delay={index * 100}>
          <Briefcase className="text-primary mt-1 h-5 w-5" />
          <div>
            <p className="text-sm font-semibold">{exp.role}</p>
            <p className="text-muted-foreground text-xs">{exp.company}</p>
            <p className="text-muted-foreground text-xs">{exp.period}</p>
          </div>
        </AnimatedListItem>
      ))}
    </ul>
  );
}

function EducationList({ education }: { education: Education[] }) {
  return (
    <ul className="flex w-full flex-col items-center justify-evenly space-y-4 p-2 md:flex-row md:items-start md:space-y-0 md:space-x-4 md:p-4">
      {education.map((edu, index) => (
        <AnimatedListItem key={index} delay={index * 100}>
          <GraduationCap className="text-primary mt-1 h-5 w-5" />
          <div>
            <p className="text-sm font-semibold">{edu.degree}</p>
            <p className="text-muted-foreground text-xs">{edu.school}</p>
            <p className="text-muted-foreground text-xs">{edu.year}</p>
          </div>
        </AnimatedListItem>
      ))}
    </ul>
  );
}

export default function ProfessionalBackground() {
  const [activeTab, setActiveTab] = useState("experience");

  const experiences = [
    {
      company: "Assurity Life Insurance Company",
      role: "Software Engineer II",
      period: "March 2025 - Present",
    },
    {
      company: "Sandhills Global",
      role: "Software Developer",
      period: "January 2021 - January 2024",
    },
    {
      company: "Sandhills Global",
      role: "Software Development Intern",
      period: "June 2020 - January 2021",
    },
  ];

  const education = [
    {
      degree: "A.S. in Sciences",
      school: "Southeast Community College",
      year: "2024 - Present",
    },
    {
      degree: "A.S. in Applied Computer Sciences",
      school: "Southeast Community College",
      year: "2018 - 2021",
    },
  ];

  return (
    <Tabs
      defaultValue="experience"
      value={activeTab}
      onValueChange={setActiveTab}
      className="w-full"
    >
      <TabsList className="bg-accent/80 grid h-full w-full grid-cols-1 gap-0.5 md:grid-cols-3">
        <TabsTrigger
          className="cursor-pointer rounded-t-md rounded-b-xs md:rounded-l-md md:rounded-r-xs"
          value="experience"
        >
          Experience
        </TabsTrigger>
        <TabsTrigger
          className="cursor-pointer rounded-xs md:rounded-l-xs md:rounded-r-xs"
          value="education"
        >
          Education
        </TabsTrigger>
        <TabsTrigger
          className="cursor-pointer rounded-t-xs rounded-b-md md:rounded-l-xs md:rounded-r-md"
          value="skills"
        >
          Skills
        </TabsTrigger>
      </TabsList>
      <TabsContent value="experience">
        <ExperienceList experiences={experiences} />
      </TabsContent>
      <TabsContent value="education">
        <EducationList education={education} />
      </TabsContent>
      <TabsContent value="skills">
        <TechnologiesList />
      </TabsContent>
    </Tabs>
  );
}
