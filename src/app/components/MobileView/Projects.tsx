import ProjectCard from "@/app/components/ProjectCard";
import data from "@/app/data/projects";

import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section id="projects" className="min-h-screen mb-[100px] flex-grow w-full h-full flex flex-col justify-center items-center">
            <motion.h1
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-6xl font-bold text-primary/50 mb-10">Proyectos</motion.h1>
            <section className="flex flex-col gap-10 w-full px-10">
                {data.map((project, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
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