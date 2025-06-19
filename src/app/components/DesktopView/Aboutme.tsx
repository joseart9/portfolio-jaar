import { motion } from "framer-motion";

export default function Aboutme({ lang }: { lang: any }) {
    return (
        <section id="about" className="flex h-screen w-full">
            <section className="grid grid-cols-12 gap-8 w-full h-full items-center justify-center">

                <motion.h1
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}

                    className="col-span-4 text-6xl font-black text-primary/50">
                    {lang.aboutMe.title}
                </motion.h1>

                <div className="col-span-8 flex flex-col items-center h-full justify-center">
                    <motion.p
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}

                        className="text-2xl text-pretty pr-8 text-default-800 font-semibold mb-6 leading-inherit">
                        {lang.aboutMe.desc1} <span className="text-primary font-bold">{lang.aboutMe.descFocus1}</span>{lang.aboutMe.desc2}<span className="text-primary font-bold">{lang.aboutMe.descFocus2}</span>{lang.aboutMe.desc3}
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        viewport={{ once: true }}

                        className="text-2xl text-pretty pr-8 text-default-800 font-semibold leading-inherit">
                        {lang.aboutMe.desc4} <span className="text-primary font-bold">{lang.aboutMe.descFocus3}</span>{lang.aboutMe.desc5}
                    </motion.p>
                </div>
            </section>
        </section>
    )
}