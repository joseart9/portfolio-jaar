import HeroSection from "@/app/components/DesktopView/HeroSection";
import Aboutme from "@/app/components/DesktopView/Aboutme";
import Experience from "@/app/components/DesktopView/Experience";
import Proyects from "@/app/components/DesktopView/Projects";
import Footer from "../Footer";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import useLang from "@/hooks/useLang";

export default function MainComponent() {
    const [activeHash, setActiveHash] = useState("");
    const { lang, changeLang } = useLang("es");

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observerOptions = {
            root: null, // Usa el viewport
            rootMargin: "0px",
            threshold: 0.6, // 60% de la sección visible para activarla
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
        <main>
            <Navbar activeHash={activeHash} lang={lang} setLang={changeLang} />
            <div className="container mx-auto max-w-6xl px-8">
                <HeroSection lang={lang} />
                <Aboutme lang={lang} />
                <Experience lang={lang} />
                <Proyects lang={lang} />
                <Footer />
            </div>
        </main>
    )
}