import ProjectCard from "@/app/components/ProjectCard";
import data from "@/app/data/projects";

import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section id="projects" className="mb-[100px] min-h-screen w-full flex flex-col flex-grow justify-center items-center mt-24">
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-6xl font-bold text-primary/50 mb-10">Proyectos</motion.h1>
            <section className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 w-full px-10">
                {data.map((project, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index }}
                        viewport={{ once: true }}
                        className="h-auto"
                        key={index}>
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </section>
        </section>
    );
}