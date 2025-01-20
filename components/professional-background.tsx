import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { TechnologiesList } from "./technologies-list";

export default function ProfessionalBackground() {
    const [activeTab, setActiveTab] = useState("experience")

    const experiences = [
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
    ]

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
    ]

    return (
        <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid h-full w-full md:grid-cols-3">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="experience">
                <ul className="flex w-full flex-col items-center justify-evenly space-y-4 md:flex-row md:items-start md:space-x-4 md:space-y-0">
                    {experiences.map((exp, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex w-full items-start gap-4 md:w-auto"
                        >
                            <Briefcase className="mt-1 h-5 w-5 text-primary" />
                            <div>
                                <h3 className="font-semibold">{exp.role}</h3>
                                <p className="text-muted-foreground text-sm">{exp.company}</p>
                                <p className="text-muted-foreground text-sm">{exp.period}</p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </TabsContent>
            <TabsContent value="education">
                <ul className="flex w-full flex-col items-center justify-evenly space-y-4 md:flex-row md:items-start md:space-x-4 md:space-y-0">
                    {education.map((edu, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex w-full items-start gap-4 md:w-auto"
                        >
                            <GraduationCap className="mt-1 h-5 w-5 text-primary" />
                            <div>
                                <h3 className="font-semibold">{edu.degree}</h3>
                                <p className="text-muted-foreground text-sm">{edu.school}</p>
                                <p className="text-muted-foreground text-sm">{edu.year}</p>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </TabsContent>
            <TabsContent value="skills">
                <TechnologiesList />
            </TabsContent>
        </Tabs>
    )
}