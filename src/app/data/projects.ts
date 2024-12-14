export interface Project {
  name: string;
  description: string;
  technologies: Tech[];
  image: string;
  finished: boolean;
  url: string;
  isDesktop?: boolean;
}

export interface Tech {
  name: string;
  logo: any;
  logoColor: string;
}

// Icons

// TypeScript
import { TbBrandTypescript } from "react-icons/tb";
// React
import { FaReact } from "react-icons/fa";
// NextJS
import { TbBrandNextjs } from "react-icons/tb";
//Tailwind
import { RiTailwindCssFill } from "react-icons/ri";
// Firebase
import { IoLogoFirebase } from "react-icons/io5";
// Vercel
import { IoLogoVercel } from "react-icons/io5";

const data: Project[] = [
  {
    name: "RC Servicios Inmobiliarios",
    description:
      "Aplicación Web para una inmobiliaria local, con catalogo de propiedades en renta o venta. Landing Page para mostrar servicios. Manejo de SEO para Landing Page. Panel administrativo para gestionar propiedades.",
    technologies: [
      {
        name: "React",
        logo: FaReact,
        logoColor: "text-blue-500",
      },
      {
        name: "Next.js",
        logo: TbBrandNextjs,
        logoColor: "text-black",
      },
      {
        name: "Tailwind",
        logo: RiTailwindCssFill,
        logoColor: "text-blue-500",
      },
      {
        name: "Firebase",
        logo: IoLogoFirebase,
        logoColor: "text-yellow-500",
      },
      {
        name: "Vercel",
        logo: IoLogoVercel,
        logoColor: "text-black",
      },
      {
        name: "TypeScript",
        logo: TbBrandTypescript,
        logoColor: "text-blue-500",
      },
    ],
    image: "https://i.ibb.co/YXfxfYs/627f7baef2f1838d8cdedeb4a8f70791.jpg",
    finished: false,
    url: "https://rc-servicios-inmobiliarios.vercel.app/",
    isDesktop: true,
  },
  {
    name: "MatsanMX",
    description:
      "Catalogo en linea de productos de una joyería local, con carrito de compras y checkout. Panel administrativo para gestionar productos y pedidos.",
    technologies: [
      {
        name: "React",
        logo: FaReact,
        logoColor: "text-blue-500",
      },
      {
        name: "Next.js",
        logo: TbBrandNextjs,
        logoColor: "text-black",
      },
      {
        name: "Tailwind",
        logo: RiTailwindCssFill,
        logoColor: "text-blue-500",
      },
      {
        name: "Firebase",
        logo: IoLogoFirebase,
        logoColor: "text-yellow-500",
      },
      {
        name: "Vercel",
        logo: IoLogoVercel,
        logoColor: "text-black",
      },
      {
        name: "TypeScript",
        logo: TbBrandTypescript,
        logoColor: "text-blue-500",
      },
    ],
    image: "matsan.jpeg",
    finished: true,
    url: "https://matsanmx.vercel.app",
  },
  {
    name: "URCA",
    description:
      "Catalogo en linea de Propiedades en renta, o venta. Con sistema de búsqueda y filtros. Panel administrativo para gestionar propiedades.",
    technologies: [
      {
        name: "React",
        logo: FaReact,
        logoColor: "text-blue-500",
      },
      {
        name: "Next.js",
        logo: TbBrandNextjs,
        logoColor: "text-black",
      },
      {
        name: "Tailwind",
        logo: RiTailwindCssFill,
        logoColor: "text-blue-500",
      },
      {
        name: "Firebase",
        logo: IoLogoFirebase,
        logoColor: "text-yellow-500",
      },
      {
        name: "Vercel",
        logo: IoLogoVercel,
        logoColor: "text-black",
      },
      {
        name: "TypeScript",
        logo: TbBrandTypescript,
        logoColor: "text-blue-500",
      },
    ],
    image: "urca.jpeg",
    finished: true,
    url: "https://urca-hazel.vercel.app/",
  },
];

export default data;
