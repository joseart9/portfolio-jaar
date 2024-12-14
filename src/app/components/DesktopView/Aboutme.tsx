import { motion } from "framer-motion";

export default function Aboutme() {
    return (
        <section id="about" className="flex h-screen w-full">
            <section className="grid grid-cols-12 gap-8 w-full h-full items-center justify-center">

                <motion.h1
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}

                    className="col-span-4 text-6xl font-black text-primary/50">
                    Sobre mí
                </motion.h1>

                <div className="col-span-8 flex flex-col items-center h-full justify-center">
                    <motion.p
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}

                        className="text-2xl text-pretty pr-8 text-default-800 font-semibold mb-6 leading-inherit">
                        Soy un desarrollador con experiencia en <span className="text-primary font-bold">tecnologías modernas</span> y diversas bases de datos. Me apasiona crear interfaces atractivas y funcionales, priorizando la <span className="text-primary font-bold">experiencia de usuario</span> y la calidad del código.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        viewport={{ once: true }}

                        className="text-2xl text-pretty pr-8 text-default-800 font-semibold leading-inherit">
                        Me motiva escuchar las necesidades del cliente para traducirlas en soluciones digitales efectivas. Con un <span className="text-primary font-bold">enfoque creativo</span> y orientado al detalle, busco ofrecer productos que no solo funcionen bien, sino que también resulten visualmente agradables y fáciles de usar.
                    </motion.p>
                </div>
            </section>
        </section>
    )
}