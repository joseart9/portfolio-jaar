import HeroSection from './HeroSection';
import Aboutme from './Aboutme';
import Experience from './Experience';
import Projects from './Projects';
import Footer from '@/app/components/Footer';
import Nabvar from './Navbar';
import { useEffect, useState } from 'react';

export default function MainComponent() {
    const [activeHash, setActiveHash] = useState("");

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

    console.log(activeHash);

    return (
        <main >
            <Nabvar activeHash={activeHash} />
            <div className='px-4'>
                <HeroSection />
                <Aboutme />
                <div className='h-[70px]' />
                <Experience />
                <div className='h-[70px]' />
                <Projects />
                <Footer />
            </div>
        </main>
    )
}