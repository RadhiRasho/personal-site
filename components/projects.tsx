'use client'
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaGolang } from "react-icons/fa6";
import { RiGithubFill, RiNextjsFill, RiNodejsFill, RiReactjsFill, RiTailwindCssFill, RiVercelFill } from "react-icons/ri";
import { SiBun, SiC, SiDeno, SiGnubash, SiJson, SiReactquery, SiRust, SiSqlite, SiTypescript, SiZig } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import ProjectCard, { type ProjectCardProps } from "./project-card";

const projects: ProjectCardProps[] = [
    {
        id: 1,
        title: "Personal Site",
        description:
            "This is what you are viewing currently, a project to show off stuff I like to do, and stuff I've built over time.",
        categories: [
            "Web Development",
            "Full Stack",
            "Front End",
            "Back End",
            "React",
        ],
        technologies: [
            <RiNextjsFill size={35} key={'Next.JS'} />,
            <RiVercelFill size={35} key={'Vercel'} />,
            <RiGithubFill size={35} key="Github" />,
            <RiNodejsFill fill="limegreen" size={35} key="Nodejs" />,
            <SiBun fill="#ffedd5" size={35} key={"Bun"} />,
            <RiReactjsFill fill="cyan" size={35} key="Reactjs" />,
            <RiTailwindCssFill fill="cyan" size={35} key="TailwindCss" />,
            <SiTypescript fill="#3b82f6" size={35} key={"Typescript"} />,
        ],
        image: "/radhi-rasho.dev.jpeg",
        link: "https://github.com/radhirasho/personal-site",
    },
    {
        id: 2,
        title: "Todo CLI",
        description:
            "Simple Todo CLI tool where you can add, delete, list and prioritize your tasks in a cli. Can be ran on both windows and linux, but I have yet to add auto addition to PATH, will be working on that next",
        categories: ["CLI Tools"],
        technologies: [<FaGolang fill="cyan" size={35} key="Golang" />, <SiSqlite fill="#3b82f6" size={35} key="SQLite" />, <SiGnubash fill="green" size={35} key="Bash" />],
        link: "https://github.com/radhirasho/todo-cli",
    },
    {
        id: 3,
        title: "German Quiz CLI",
        description:
            "Simple CLI tool to help me learn German, can be used by anyone to learn German",
        categories: ["CLI Tools", "Learning"],
        technologies: [<FaGolang fill="cyan" size={35} key="Golang" />, <SiGnubash fill="green" size={35} key="Bash" />, <SiJson fill="yellow" size={35} key="JSON" />],
        image: "/GermanQuiz.png",
        link: "https://github.com/radhirasho/german-quiz-cli",
    },
    {
        id: 4,
        title: "@radhirasho/latest",
        description:
            "@radhirasho/latest is a Node.js utility that checks the latest version of a given package from npm or other registries. It can be used as a CLI tool or as a library in your Node.js projects.",
        categories: ["Node.js Utilities", "NPM Packages", "CLI Tools"],
        technologies: [<RiNodejsFill fill="limegreen" size={35} key="Nodejs" />, <SiGnubash fill="green" size={35} key="Bash" />],
        link: "https://github.com/RadhiRasho/latest",
    },
    {
        id: 5,
        title: "Simple Deno",
        description: "🧪 Experimenting with Deno 🦕",
        categories: ["Web Development"],
        technologies: [<SiDeno fill="white" size={35} key="Deno" />, <SiTypescript fill="#3b82f6" size={35} key="Typescript" />],
        link: "https://github.com/RadhiRasho/simple-deno",
    },
    {
        id: 6,
        title: "React Experiments",
        description: "Expirementing with React Related Technologies",
        categories: ["Web Development", "Front End", "React"],
        technologies: [
            <RiReactjsFill fill="cyan" size={35} key="Reactjs" />,
            <RiNextjsFill fill="white" size={35} key="Nextjs" />,
            <SiTypescript fill="#3b82f6" size={35} key="Typescript" />,
            <RiTailwindCssFill fill="cyan" size={35} key="TailwindCss" />,
            <SiReactquery fill="red" size={35} key="ReactQuery" />,
        ],
        link: "https://github.com/RadhiRasho/react-experiments",
    },
    {
        id: 7,
        title: "Simple Speed",
        description: "Simple performance testing different languages ⚡",
        categories: ["Performance Testing"],
        technologies: [
            <FaGolang fill="cyan" size={35} key="Golang" />,
            <RiNodejsFill fill="limegreen" size={35} key="Nodejs" />,
            <TbBrandCpp stroke="purple" size={35} key="Cpp" />,
            <SiBun fill="#ffedd5" size={35} key="Bun" />,
            <SiRust fill="orange" size={35} key="Rust" />,
            <SiZig fill="yellow" size={35} key="Zig" />,
            <SiC fill="#6366f1" size={35} key="C" />
        ],
        link: "https://github.com/RadhiRasho/simple-speed",
    },
];

const allCategories = [
    "All",
    ...new Set(projects.flatMap((project) => project.categories)),
];

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const filteredProjects =
        filter === "All"
            ? projects
            : projects.filter((project) => project.categories.includes(filter));

    return (
        <section className="relative mx-10 flex h-full min-h-screen w-full min-w-screen flex-col gap-10 md:p-10">
            <span className="self-center text-2xl">Projects</span>
            <div className="mx-5">
                <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
                    {allCategories.map((category) => (
                        <button
                            type="button"
                            key={category}
                            onClick={() => setFilter(category)}
                            data-active={filter === category}
                            className={
                                "rounded-xl bg-gray-200 px-4 py-2 font-medium text-gray-800 text-xs transition-colors duration-300 hover:bg-gray-300 data-[active=true]:bg-purple-600 data-[active=true]:text-white dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
                            }
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <motion.div
                    layout
                    className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="h-full w-full"
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <ProjectCard {...project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}