import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Typewriter from 'typewriter-effect';
import useLang from "@/hooks/useLang";


export default function HeroSection({ hrefJump }: { hrefJump?: any }) {

    const { lang, changeLang } = useLang("es");

    return (
        <section id="inicio" className="min-h-screen h-screen w-full flex flex-grow flex-col">
            <div>
                <div className="flex flex-row gap-7 mt-12">
                    <h1 className="text-4xl font-bold mb-5">
                        {lang.hero.title}
                    </h1>
                </div>

                <section className="text-default-900">
                    <div className="text-3xl font-bold leading-snug mb-4 mr-8">
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
                    <h3 className="text-default-600 text-lgl mr-8">
                        Enfocado en crear soluciones digitales que combinen funcionalidad y estética, colocando siempre al usuario en el centro.
                    </h3>
                </section>

                <section className="flex flex-row gap-2 mt-6">
                    <a href="https://github.com/joseart9">
                        <Button isIconOnly color="primary" variant="light" className="w-11 h-11">
                            <FaGithub className="w-10 h-10 text-blue-500" />
                        </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/jos%C3%A9-arturo-arguelles-r%C3%ADos-b93b75315/">
                        <Button isIconOnly color="primary" variant="light" className="w-11 h-11">
                            <FaLinkedinIn className="w-10 h-10 text-blue-500" />
                        </Button>
                    </a>
                </section>

                <Button as={Link} href="#about" isIconOnly variant="light" color="primary" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce animate-infinite">
                    <IoIosArrowDown className="text-blue-500 size-12" />
                </Button>
            </div>
        </section>
    );
}
