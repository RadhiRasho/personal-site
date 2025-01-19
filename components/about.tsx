"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
    Briefcase,
    Github,
    GraduationCap,
    Linkedin,
    Mail,
    MapPin,
    Twitter,
} from "lucide-react";
import Image from "next/image";
import { type JSX, useState } from "react";
import { FaGolang } from "react-icons/fa6";
import { RiGithubFill, RiNextjsFill, RiNodejsFill, RiReactjsFill, RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { SiBun, SiC, SiDeno, SiGnubash, SiJson, SiReactquery, SiRust, SiSqlite, SiTypescript, SiZig } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { TechnologiesList } from "./technologies-list";

export default function ModernAboutMe() {
    const [activeTab, setActiveTab] = useState("experience");

    const personalInfo = {
        name: "Radhi Rasho",
        title: "Software Developer",
        location: "Lincoln, NE",
        email: "RadhiRasho@gmail.com",
    };

    const skills: JSX.Element[] = [
        <RiNextjsFill size={50} key={"Next.JS"} />,
        <RiVercelFill size={50} key={"Vercel"} />,
        <RiGithubFill size={50} key="Github" />,
        <RiNodejsFill fill="limegreen" size={50} key="Nodejs" />,
        <SiBun fill="#ffedd5" size={50} key={"Bun"} />,
        <RiReactjsFill fill="cyan" size={50} key="Reactjs" />,
        <RiTailwindCssFill fill="cyan" size={50} key="TailwindCss" />,
        <SiTypescript fill="#3b82f6" size={50} key={"Typescript"} />,
        <FaGolang fill="cyan" size={50} key="Golang" />,
        <SiSqlite fill="#3b82f6" size={50} key="SQLite" />,
        <SiGnubash fill="green" size={50} key="Bash" />,
        <SiJson fill="yellow" size={50} key="JSON" />,
        <SiDeno fill="white" size={50} key="Deno" />,
        <RiReactjsFill fill="cyan" size={50} key="Reactjs" />,
        <SiReactquery fill="red" size={50} key="ReactQuery" />,
        <TbBrandCpp stroke="purple" size={50} key="Cpp" />,
        <SiRust fill="orange" size={50} key="Rust" />,
        <SiZig fill="yellow" size={50} key="Zig" />,
        <SiC fill="#6366f1" size={50} key="C" />
    ];

    const experiences = [
        {
            company: "Sandhills Global",
            role: "Software Developer",
            period: "January 2021 - January 2024",
        },
        {
            company: "Sandhills Global",
            role: "Software Development Internship",
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
        <div className="flex min-h-screen w-full flex-col items-center justify-center gap-y-8 px-4 py-12 sm:px-6 lg:px-8">
            <Card className="w-full bg-black/90 md:w-10/12 backdrop-blur-sm">
                <CardContent className="pt-6">
                    <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image
                                src="/Radhi-Rasho.jpg"
                                alt="Radhi Rasho"
                                width={250}
                                height={250}
                                className="rounded-full border-4"
                            />
                        </motion.div>
                        <div className="flex h-full w-full flex-col justify-center text-center md:text-left">
                            <h1 className="mb-2 font-bold text-3xl">{personalInfo.name}</h1>
                            <p className="mb-4 text-muted-foreground text-xl">
                                {personalInfo.title}
                            </p>
                            <div className="mb-4 flex flex-wrap justify-center gap-2 md:justify-start">
                                <Badge
                                    variant="default"
                                    className="flex items-center gap-1 px-4 py-2"
                                >
                                    <MapPin className="h-4 w-4" />
                                    {personalInfo.location}
                                </Badge>
                                <Badge
                                    variant="default"
                                    className="flex items-center gap-1 px-4 py-2"
                                >
                                    <Mail className="h-4 w-4" />
                                    {personalInfo.email}
                                </Badge>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className="w-full bg-black/90 backdrop-blur-sm md:w-10/12">
                <CardHeader>
                    <CardTitle>About Me</CardTitle>
                    <CardDescription>
                        Passionate about creating innovative web solutions and continuously
                        learning new technologies.
                    </CardDescription>
                </CardHeader>
                <CardContent className="transition-all duration-300 ease-in-out">
                    <Tabs value={activeTab} onValueChange={setActiveTab}>
                        <TabsList className="grid h-full w-full md:grid-cols-3">
                            <TabsTrigger value="experience">Experience</TabsTrigger>
                            <TabsTrigger value="education">Education</TabsTrigger>
                            <TabsTrigger value="skills">Skills</TabsTrigger>
                        </TabsList>
                        <TabsContent value="experience">
                            <ul className="flex flex-col items-center justify-evenly space-y-4 md:flex-row">
                                {experiences.map((exp, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <Briefcase className="mt-1 h-5 w-5 text-primary" />
                                        <div>
                                            <h3 className="font-semibold">{exp.role}</h3>
                                            <p className="text-muted-foreground text-sm">
                                                {exp.company}
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                {exp.period}
                                            </p>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </TabsContent>
                        <TabsContent value="education">
                            <ul className="flex flex-col items-center justify-evenly space-y-4 md:flex-row">
                                {education.map((edu, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <GraduationCap className="mt-1 h-5 w-5 text-primary" />
                                        <div>
                                            <h3 className="font-semibold">{edu.degree}</h3>
                                            <p className="text-muted-foreground text-sm">
                                                {edu.school}
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                {edu.year}
                                            </p>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </TabsContent>
                        <TabsContent value="skills">
                            <TechnologiesList />
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </div>
    );
}
