"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import React from "react"
import { Section } from "./section"

const sections = [
    {
        imageAlt: "Helsinki Cathedral, FIN",
        image: '/Helsinki-Cathedral.jpg',
        content:
            "I am a Software Engineer that specializes in building web applications with modern technologies such as React, Next.js, and Node.js. I have a passion for creating innovative solutions that solve real-world problems and continuously learning new technologies to stay at the forefront of emerging trends.",
    },
    {
        imageAlt: "Brandenburg Gate, Berlin",
        image: '/Brandenburg-Gate-Berlin.jpg',
        content:
            "I have experience working with a variety of technologies and tools, including TypeScript, Tailwind CSS, Golang, SQLite, and more. I am always looking for new challenges and opportunities to grow as a developer and expand my skill set.",
        reverse: true,
    },
    {
        imageAlt: "Cologne Cathedral, GER",
        image: '/Cologne-Cathedral-Exterior.jpg',
        content:
            "In my free time, I enjoy working on personal projects, contributing to open-source software, playing video games and board games with the family. I am a firm believer in the power of technology to change the world for the better and am excited to be a part of the ever-evolving tech industry.",
    },
    {
        imageAlt: "Hönö, Sweden",
        image: '/Ocean-View.jpg',
        content:
            "I also like to travel and explore new horizons, new places, try new foods, and meet new people. I am always looking for new adventures and experiences to broaden my horizons and challenge myself to grow as a person. The globe includes markers for all the places I have visited so far, and I hope to add many more in the future.",
        reverse: true,
    },
]

export function AboutSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full"
        >
            <Card className="w-full border-none bg-transparent">
                <CardContent>
                    <div className="flex flex-col items-center gap-6">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: section.reverse ? 100 : -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                <Section {...section} />
                            </motion.div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.section>
    )
}

