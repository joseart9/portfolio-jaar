import HeroSection from './HeroSection';
import Aboutme from './Aboutme';
import Experience from './Experience';
import Projects from './Projects';
import Footer from '@/app/components/Footer';
import Nabvar from './Navbar';
import { useEffect, useState } from 'react';
import useLang from "@/hooks/useLang";

export default function MainComponent() {
    const [activeHash, setActiveHash] = useState("");
    const { lang, changeLang } = useLang("es");

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observerOptions = {
            root: null, // Usa el viewport
            rootMargin: "0px",
            threshold: 0.1, // 60% de la sección visible para activarla
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveHash(`#${entry.target.id}`);
                }
            });
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <main className=''>
            <Nabvar activeHash={activeHash} lang={lang} setLang={changeLang} />
            <div className='px-4 overflow-x-hidden'>
                <HeroSection />
                <Aboutme />
                <div className='h-[70px]' />
                <Experience />
                <div className='h-[70px]' />
                <Projects lang={lang} />
                <Footer />
            </div>
        </main>
    )
}