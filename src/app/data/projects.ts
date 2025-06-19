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
import { TbBrandFramer, TbBrandTypescript } from "react-icons/tb";
// React
import { FaReact, FaStripe } from "react-icons/fa";
// NextJS
import { TbBrandNextjs } from "react-icons/tb";
//Tailwind
import { RiTailwindCssFill } from "react-icons/ri";
// Firebase
import { IoLogoFirebase } from "react-icons/io5";
// Vercel
import { IoLogoVercel } from "react-icons/io5";
// Supabase
import { TbBrandSupabase } from "react-icons/tb";

const data: Project[] = [
  {
    name: "GOAT Boots",
    description:
      "Tienda en linea y Landing Page de calzado de protección industrial, con carrito de compras y checkout. Panel administrativo para gestionar productos y pedidos.",
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
        name: "Supabase",
        logo: TbBrandSupabase,
        logoColor: "text-green-500",
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
      {
        name: "Framer Motion",
        logo: TbBrandFramer,
        logoColor: "text-black",
      },
    ],
    image: "goat.webp",
    finished: true,
    url: "https://goatboots.mx",
  },
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
    image: "rc.webp",
    finished: true,
    url: "https://rc-servicios-inmobiliarios.vercel.app/",
    isDesktop: false,
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
];

export default data;
