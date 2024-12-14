import { motion } from "framer-motion"

export default function Experience() {
    return (
        <section id="experience" className="min-h-screen w-full grid grid-cols-12 items-center px-2">
            <div
                className="flex justify-center w-full col-span-9 h-full items-center">
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <motion.li
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="timeline-middle text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="italic text-default-600">2023</time>
                            <div className="text-lg text-default-800 font-black">AbdoTech</div>
                            <p className="text-default-600 font-semibold mb-4 leading-relaxed text-pretty">
                                Participé en varios proyectos de desarrollo web, lo que me permitió ampliar mi experiencia con tecnologías de front end y back end como React, GraphQL y MongoDB. Mi contribución abarcó desde el diseño hasta la implementación, fortaleciendo mis habilidades de programación y trabajo en equipo.
                            </p>

                            <p className="text-default-600 font-semibold mb-4 leading-relaxed text-pretty">
                                Lideré la creación y el lanzamiento de una aplicación para iOS utilizando Flutter, colaborando con un equipo de desarrolladores.
                            </p>

                            <p className="text-default-600 font-semibold leading-relaxed text-pretty">
                                Trabajé con tecnologías de inteligencia artificial, específicamente utilizando LangChain, donde desarrollé e integré soluciones impulsadas por IA para mejorar diversas aplicaciones y procesos.
                            </p>

                        </div>
                        <hr />
                    </motion.li>
                    <motion.li

                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        viewport={{ once: true }}
                    >
                        <hr />
                        <div className="timeline-middle text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="text-default-600 italic">2024</time>
                            <div className="text-lg font-black font-default-800">Wizeline</div>

                            <p className="text-default-600 font-semibold mb-4 leading-relaxed text-pretty">
                                Adquirí experiencia con pruebas unitarias utilizando Vitest, asegurando la fiabilidad y robustez de las aplicaciones.
                            </p>

                            <p className="text-default-600 font-semibold mb-4 leading-relaxed pr-4 text-pretty">
                                Desarrollé y perfeccioné componentes de la interfaz de usuario utilizando Remix y Tailwind CSS, contribuyendo a la creación de interfaces fáciles de usar y visualmente atractivas.
                            </p>

                            <p className="text-default-600 font-semibold leading-relaxed text-pretty">
                                Mejoré mis habilidades en pruebas y desarrollo front end mientras trabajaba en un entorno dinámico y colaborativo.
                            </p>
                        </div>
                        <hr />
                    </motion.li>

                    <motion.li
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="timeline-middle text-primary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5">
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="italic text-default-600">2024</time>
                            <div className="text-lg text-default-800 font-black">Freelance</div>
                            <p className="text-default-600 font-semibold mb-4 leading-relaxed text-pretty">
                                Lidere la creación de aplicaciones web para clientes de diversos sectores, escuchando sus necesidades y proporcionando soluciones personalizadas y efectivas.
                            </p>

                            <p className="text-default-600 font-semibold mb-4 leading-relaxed text-pretty">
                                Comencé a desarrollar proyectos de forma independiente, lo que me permitió adquirir experiencia en la creación de aplicaciones web dinámicas y responsivas, así como en la gestión de proyectos y clientes.
                            </p>

                            <p className="text-default-600 font-semibold leading-relaxed text-pretty">
                                Colaboré con otros desarrolladores y diseñadores para crear soluciones innovadoras y atractivas para una variedad de proyectos.
                            </p>

                        </div>
                        <hr />
                    </motion.li>
                </ul>
            </div>

            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}

                className="flex flex-row justify-center items-center h-full w-full col-span-3 text-end">
                <h1 className="text-6xl font-bold text-primary/50">Experiencia Laboral</h1>
            </motion.div>

        </section>
    )
}