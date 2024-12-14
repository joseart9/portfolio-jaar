import { Button } from "@nextui-org/button";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Typewriter from 'typewriter-effect';
import useLang from "@/hooks/useLang";


export default function HeroSection({ hrefJump }: { hrefJump?: any }) {
    const { lang, changeLang } = useLang("es");
    return (
        <section id="inicio" className="min-h-screen w-full justify-center flex-grow flex flex-col">
            <h1 className="text-6xl font-bold mb-8">
                {lang.hero.title}
            </h1>
            <div>

                <img
                    alt="imagen"
                    src="/avatarImg.webp"
                    className="float-right size-80 ml-24 rounded-full object-cover hover:size-[21rem] transition-all duration-300"
                    style={{
                        shapeOutside: "circle(50%)"
                    }}
                />

                <section className="text-default-900">
                    <div className="text-5xl font-bold leading-snug mb-4">
                        <Typewriter
                            options={{
                                delay: 50,
                                cursor: '|',
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('Me llamo ')
                                    .pauseFor(500)
                                    .typeString('<span class="text-blue-500 font-black">Arturo Arguelles</span>,')
                                    .pauseFor(1000)
                                    .typeString('<br>soy un desarrollador web ')
                                    .pauseFor(500)
                                    .typeString('<span class="text-blue-500 font-black">Fullstack</span>.')
                                    .start();
                            }}
                        />
                    </div>
                    <h3 className="text-default-600 text-xl">
                        Enfocado en crear soluciones digitales que combinen funcionalidad y estética, colocando siempre al usuario en el centro.
                    </h3>
                </section>

                <section className="flex flex-row gap-4 mt-6">
                    <a href="https://github.com/joseart9">
                        <span color="primary" className="w-11 h-11">
                            <FaGithub className="w-10 h-10 text-blue-500" />
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/in/jos%C3%A9-arturo-arguelles-r%C3%ADos-b93b75315/">
                        <span color="primary" className="w-11 h-11">
                            <FaLinkedinIn className="w-10 h-10 text-blue-500" />
                        </span>
                    </a>
                </section>

                <a href="#about">
                    <Button isIconOnly variant="light" color="primary" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce animate-infinite">
                        <IoIosArrowDown className="text-blue-500 size-12" />
                    </Button>
                </a>
            </div>
        </section>
    );
}
