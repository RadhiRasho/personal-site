import { ProjectsGrid } from "./project-grid";

export default function Projects() {
    return (
        <section className="relative mx-10 flex h-full min-h-screen w-full min-w-screen flex-col gap-10 md:p-10">
            <span className="self-center text-2xl">Projects</span>
            <ProjectsGrid />
        </section>
    )
}