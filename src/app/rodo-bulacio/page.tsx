"use client";

import React, { useRef, useCallback } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';
import {
  MapPin,
  Calendar,
  InstagramLogo,
  FrameCorners,
  PushPin,
  ArrowRight,
} from '@phosphor-icons/react';
import { Fraunces, Outfit } from 'next/font/google';
import Link from 'next/link';
import HeroRodo from '@/Components/Rodo/HeroRodo';
import BiographyRodo from '@/Components/Rodo/BiographyRodo';
import TimelineRodo from '@/Components/Rodo/TimelineRodo';
import VideoRodo from '@/Components/Rodo/VideoRodo';

const fraunces = Fraunces({ subsets: ['latin'], weight: ['400', '700'] });
const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500'] });

// ─── Datos ───────────────────────────────────────────────────────────────────

const obrasMaestras = [
  {
    src: "/img/rodo/gallery/pintura-morada.webp",
    numero: "01",
    titulo: "Sinfonía en Violeta",
    anio: "c. 1988",
    tecnica: "Óleo sobre tela",
    dimensiones: "150 × 120 cm",
    descripcion: "En esta pieza fundacional Bulacio establece su vocabulario cromático definitivo. Las veladuras de violeta oscuro se interrumpen por erupciones de luz naranja — una tensión que el artista describía como «el grito contenido de la tierra tucumana».",
  },
  {
    src: "/img/rodo/gallery/4.webp",
    numero: "02",
    titulo: "Tierra y Tiempo",
    anio: "c. 1992",
    tecnica: "Acrílico y arena sobre tela",
    dimensiones: "200 × 160 cm",
    descripcion: "La incorporación de materiales orgánicos marca una evolución técnica crucial. Las texturas rugosas generan sombras propias que cambian con la luz del día, haciendo de la obra un objeto vivo que responde al entorno en el que es exhibida.",
  },
  {
    src: "/img/rodo/gallery/16.webp",
    numero: "03",
    titulo: "El Silencio de la Forma",
    anio: "c. 1997",
    tecnica: "Técnica mixta sobre tabla",
    dimensiones: "90 × 90 cm",
    descripcion: "La obra más contemplativa de Bulacio. Aquí abandona la gestualidad para explorar la geometría del vacío. Cada trazo mínimo carga el peso de lo que no se dice — una poética del silencio que anticipó los últimos años de su producción.",
  },
];

const galleryItems = [
  { src: "/img/rodo/gallery/4.webp",                   col: "md:col-span-1", row: "md:row-span-3" },
  { src: "/img/rodo/gallery/15munt_bulaciomarzo.webp", col: "md:col-span-2", row: "md:row-span-2" },
  { src: "/img/rodo/gallery/16.webp",                  col: "md:col-span-1", row: "md:row-span-2" },
  { src: "/img/rodo/gallery/19.webp",                  col: "md:col-span-2", row: "md:row-span-1" },
  { src: "/img/rodo/gallery/19munt_bulaciomarzo.webp", col: "md:col-span-1", row: "md:row-span-3" },
  { src: "/img/rodo/gallery/22.webp",                  col: "md:col-span-1", row: "md:row-span-2" },
  { src: "/img/rodo/gallery/pintura-morada.webp",      col: "md:col-span-2", row: "md:row-span-2" },
];

// ─── Micro-components ─────────────────────────────────────────────────────────

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ type: "spring", stiffness: 72, damping: 18, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const staggerGrid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.08 } },
};
const staggerCard = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: "spring" as const, stiffness: 70, damping: 18 },
  },
};

const Magnetic = ({ children, strength = 0.28, className = "" }: { children: React.ReactNode; strength?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 130, damping: 12, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 130, damping: 12, mass: 0.4 });

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  }, [x, y, strength]);

  const handleLeave = useCallback(() => { x.set(0); y.set(0); }, [x, y]);

  return (
    <motion.div ref={ref} style={{ x: sx, y: sy }} onMouseMove={handleMove} onMouseLeave={handleLeave} className={className}>
      {children}
    </motion.div>
  );
};

// Franja de texto cinético con loop infinito y seamless
const MarqueeTrack = ({
  text,
  direction = -1,
  duration = 30,
  textClass = "",
}: {
  text: string;
  direction?: number;
  duration?: number;
  textClass?: string;
}) => {
  const content = `${text}   `;
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className={`flex min-w-max ${textClass}`}
        animate={{ x: direction > 0 ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        <span className="flex-none px-12">{content}</span>
        <span className="flex-none px-12">{content}</span>
      </motion.div>
    </div>
  );
};

const NoiseOverlay = ({ id }: { id: string }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ opacity: 0.04 }}>
    <filter id={id} x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
    </filter>
    <rect width="100%" height="100%" filter={`url(#${id})`} />
  </svg>
);

type ObraMaestra = (typeof obrasMaestras)[number];

const ObraMaestraPanel = ({
  obra,
  index,
  isLast,
  fraunces,
  outfit,
}: {
  obra: ObraMaestra;
  index: number;
  isLast: boolean;
  fraunces: { className: string };
  outfit: { className: string };
}) => (
  <article className={`py-16 md:py-24 ${!isLast ? 'border-b border-[#1a1a1a]' : ''}`}>
    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ type: 'spring', stiffness: 60, damping: 20 }}
        className={`relative aspect-[4/5] overflow-hidden rounded-sm bg-[#111] ${
          index % 2 === 1 ? 'md:order-2' : ''
        }`}
      >
        <img
          src={obra.src}
          alt={obra.titulo}
          className="w-full h-full object-cover"
          loading={index === 0 ? 'eager' : 'lazy'}
        />
        <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
          <p className={`text-[#FFA500] text-[10px] uppercase tracking-[0.2em] mb-1 ${outfit.className}`}>
            {obra.tecnica}
          </p>
          <p className={`text-white/50 text-[10px] ${outfit.className}`}>{obra.dimensiones}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ type: 'spring', stiffness: 60, damping: 20, delay: 0.08 }}
        className={index % 2 === 1 ? 'md:order-1' : ''}
      >
        <p
          className={`text-[#FFA500]/40 text-[4rem] md:text-[5rem] font-black leading-none mb-4 select-none ${fraunces.className}`}
        >
          {obra.numero}
        </p>
        <h3 className={`text-3xl md:text-4xl font-bold tracking-tight mb-2 ${fraunces.className}`}>
          {obra.titulo}
        </h3>
        <div
          className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-xs uppercase tracking-[0.2em] text-gray-500 mb-6 ${outfit.className}`}
        >
          <span>{obra.anio}</span>
          <span className="hidden sm:block w-px h-3 bg-gray-700" aria-hidden />
          <span>{obra.tecnica}</span>
        </div>
        <p className={`text-gray-400 font-light leading-[1.8] text-base md:text-[15px] ${outfit.className}`}>
          {obra.descripcion}
        </p>
      </motion.div>
    </motion.div>
  </article>
);

// ─── Main component ───────────────────────────────────────────────────────────

export default function RodoBulacioLanding() {
  // Parallax para el text mask reveal de Galería
  const galeriaRef = useRef<HTMLElement>(null);
  const { scrollYProgress: galeriaProgress } = useScroll({
    target: galeriaRef,
    offset: ["start 0.85", "center 0.3"],
  });
  const titleBgY = useTransform(galeriaProgress, [0, 1], [15, 72]);
  const titleBgPosition = useMotionTemplate`center ${titleBgY}%`;

  return (
    <div className={`min-h-screen bg-black text-white selection:bg-[#FFA500] selection:text-black ${outfit.className}`}>

      {/* Navbar */}
      <nav className={`absolute top-0 left-0 w-full z-50 px-8 py-10 flex justify-between items-center text-[13px] text-gray-300 pointer-events-auto ${outfit.className}`}>
        <div className="text-3xl font-black tracking-tighter text-[#FFA500] leading-none select-none">
          Mu
        </div>
      </nav>

      <HeroRodo />
      <BiographyRodo />
      <TimelineRodo />

      {/* ── Obras Maestras ─────────────────────────────────────────────────── */}
      <section id="obras-maestras" className="relative py-24 px-6 md:px-20 bg-[#060606] border-t border-[#111]">
        <NoiseOverlay id="noise-obras" />

        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-16 md:mb-20">
            <p className={`text-xs uppercase tracking-[0.3em] text-[#FFA500] mb-4 ${outfit.className}`}>Colección permanente</p>
            <h2 className={`text-5xl md:text-7xl font-bold tracking-tight ${fraunces.className}`}>
              Obras<br /><span className="text-[#FFA500]">Maestras</span>
            </h2>
          </FadeIn>

          <div className="flex flex-col">
            {obrasMaestras.map((obra, i) => (
              <ObraMaestraPanel
                key={obra.src}
                obra={obra}
                index={i}
                isLast={i === obrasMaestras.length - 1}
                fraunces={fraunces}
                outfit={outfit}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Galería Visual ─────────────────────────────────────────────────── */}
      <section ref={galeriaRef} id="galeria" className="relative py-32 px-6 md:px-20 bg-[#050505] overflow-hidden border-t border-[#111]">
        <NoiseOverlay id="noise-galeria" />
        <div className="max-w-7xl mx-auto">

          {/* Text Mask Reveal: la imagen de la obra se ve a través de las letras */}
          <div className="mb-20 overflow-hidden">
            <motion.h2
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
              className={`text-[4rem] md:text-[7rem] lg:text-[9rem] font-bold text-center uppercase leading-none bg-clip-text text-transparent ${fraunces.className}`}
              style={{
                backgroundImage: "url('/img/rodo/gallery/pintura-morada.webp')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: titleBgPosition as unknown as string,
              }}
            >
              Galería
            </motion.h2>
          </div>

          {/* Masonry asimétrico: 4 cols × auto-rows[160px] + dense packing */}
          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[160px] gap-3 [grid-auto-flow:dense]"
          >
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                variants={staggerCard}
                className={`relative overflow-hidden group ${item.col} ${item.row}`}
              >
                <img
                  src={item.src}
                  alt={`Obra de Rodo Bulacio ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className={`text-white text-xs uppercase tracking-[0.2em] font-light ${outfit.className}`}>
                    Ver Obra
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── El Museo ───────────────────────────────────────────────────────── */}
      <section id="museo" className="relative py-32 px-6 md:px-20 border-t border-[#111] overflow-hidden">
        <NoiseOverlay id="noise-museo" />

        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className={`text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4 ${fraunces.className}`}>
                  El <span className="text-[#FFA500]">Museo</span>
                </h2>
                <p className={`text-xl text-gray-400 font-light flex items-center gap-2 ${outfit.className}`}>
                  <MapPin className="text-[#FFA500]" weight="light" size={22} /> Monteros, Tucumán
                </p>
              </div>
              <p className={`text-gray-400 max-w-md text-right hidden md:block font-light text-sm leading-relaxed ${outfit.className}`}>
                Un espacio dedicado a la preservación y exhibición del patrimonio cultural legado por el artista, punto de encuentro para la comunidad.
              </p>
            </div>
          </FadeIn>

          <motion.div
            variants={staggerGrid}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4"
          >
            {/* Sala Principal — guía por etapas de color */}
            <motion.div variants={staggerCard} className="md:col-span-2 md:row-span-2">
              <Link href="/rodo-bulacio/museo" className="
                relative p-10 h-full min-h-[360px] cursor-pointer flex flex-col justify-between overflow-hidden
                bg-white/[0.025] backdrop-blur-sm ring-1 ring-inset ring-white/[0.07]
                shadow-[0_24px_48px_-12px_rgba(0,0,0,0.85)]
                hover:ring-[#FFA500]/20
                hover:shadow-[0_24px_48px_-12px_rgba(255,165,0,0.1),0_0_80px_-30px_rgba(255,165,0,0.08)]
                hover:bg-white/[0.04] transition-all duration-500 group
              ">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
                <motion.span
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute bottom-4 right-6 text-[9rem] font-black leading-none text-white/[0.025] select-none pointer-events-none ${fraunces.className}`}
                >01</motion.span>
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.12, 1], opacity: [1, 0.72, 1] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="text-[#FFA500] mb-8"
                  >
                    <FrameCorners size={36} weight="light" />
                  </motion.div>
                  <p className={`text-xs uppercase tracking-[0.2em] text-gray-500 mb-3 ${outfit.className}`}>Colección permanente</p>
                  <h3 className={`text-4xl md:text-5xl font-bold leading-[1.05] tracking-tight mb-6 ${fraunces.className}`}>
                    Sala<br />Principal
                  </h3>
                  <p className={`text-gray-400 font-light leading-relaxed max-w-sm text-sm ${outfit.className}`}>
                    Guía de visita por colores: cada sala explica una etapa de su vida y muestra las obras de ese período.
                  </p>
                </div>
                <Magnetic strength={0.28} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-8 w-fit">
                  <div className={`flex items-center gap-2 text-[#FFA500] ${outfit.className}`}>
                    <span className="uppercase tracking-[0.15em] text-xs font-medium">Ver guía de salas</span>
                    <ArrowRight size={14} weight="light" />
                  </div>
                </Magnetic>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-[#FFA500]/60 to-transparent transition-all duration-700" />
              </Link>
            </motion.div>

            {/* Exhibiciones */}
            <motion.div variants={staggerCard} className="md:col-span-1 md:row-span-1">
              <div className="
                relative p-8 h-full min-h-[220px] cursor-pointer flex flex-col justify-between overflow-hidden
                bg-white/[0.025] backdrop-blur-sm ring-1 ring-inset ring-white/[0.07]
                shadow-[0_24px_48px_-12px_rgba(0,0,0,0.85)]
                hover:ring-[#FFA500]/20 hover:shadow-[0_24px_48px_-12px_rgba(255,165,0,0.1)]
                hover:bg-white/[0.04] transition-all duration-500 group
              ">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.15] to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>
                <motion.span
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  className={`absolute top-3 right-5 text-[4.5rem] font-black leading-none text-white/[0.025] select-none pointer-events-none ${fraunces.className}`}
                >02</motion.span>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                  className="relative text-[#FFA500] mb-4"
                >
                  <Calendar size={28} weight="light" />
                </motion.div>
                <div className="relative">
                  <p className={`text-xs uppercase tracking-[0.2em] text-gray-500 mb-2 ${outfit.className}`}>Muestra dinámica</p>
                  <h3 className={`text-2xl font-bold tracking-tight leading-snug ${fraunces.className}`}>
                    Exhibiciones<br />Temporales
                  </h3>
                </div>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-[#FFA500]/60 to-transparent transition-all duration-700"></div>
              </div>
            </motion.div>

            {/* El Taller */}
            <motion.div variants={staggerCard} className="md:col-span-1 md:row-span-1">
              <div className="
                relative p-8 h-full min-h-[220px] cursor-pointer flex flex-col justify-between overflow-hidden
                bg-[#FFA500]/[0.03] backdrop-blur-sm ring-1 ring-inset ring-[#FFA500]/[0.14]
                shadow-[0_24px_48px_-12px_rgba(0,0,0,0.85),0_0_60px_-20px_rgba(255,165,0,0.08)]
                hover:ring-[#FFA500]/30
                hover:shadow-[0_24px_48px_-12px_rgba(255,165,0,0.15),0_0_60px_-10px_rgba(255,165,0,0.12)]
                hover:bg-[#FFA500]/[0.06] transition-all duration-500 group
              ">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFA500]/25 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#FFA500]/[0.04] to-transparent pointer-events-none"></div>
                <motion.span
                  animate={{ y: [0, -5, 0], opacity: [0.07, 0.13, 0.07] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
                  className={`absolute top-3 right-5 text-[4.5rem] font-black leading-none text-[#FFA500] select-none pointer-events-none ${fraunces.className}`}
                >03</motion.span>
                <motion.div
                  animate={{ scale: [1, 1.08, 1], rotate: [0, 6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
                  className="relative text-[#FFA500] mb-4"
                >
                  <PushPin size={28} weight="light" />
                </motion.div>
                <div className="relative">
                  <p className={`text-xs uppercase tracking-[0.2em] text-[#FFA500]/50 mb-2 ${outfit.className}`}>Comunidad</p>
                  <h3 className={`text-2xl font-bold tracking-tight leading-snug text-[#FFA500] ${fraunces.className}`}>
                    El<br />Taller
                  </h3>
                </div>
                <div className="absolute bottom-0 left-0 h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-transparent via-[#FFA500] to-transparent transition-all duration-700"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Legado — Kinetic Marquee ───────────────────────────────────────── */}
      <section id="legado" className="py-24 border-t border-[#111] overflow-hidden bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-20 mb-16">
          <FadeIn>
            <p className={`text-xs uppercase tracking-[0.3em] text-gray-500 mb-5 ${outfit.className}`}>
              Legado
            </p>
            <p className={`text-gray-400 max-w-sm text-sm font-light leading-relaxed ${outfit.className}`}>
              Frases que definen la filosofía artística de quien transformó el color en identidad.
            </p>
          </FadeIn>
        </div>

        {/* Franja naranja — texto negro grande hacia la izquierda */}
        <div className="bg-[#FFA500] py-5 select-none">
          <MarqueeTrack
            direction={-1}
            duration={22}
            text="El arte no miente — La forma es el silencio — Monteros en el alma — Crear es recordar — El color habla"
            textClass={`text-[3.5rem] md:text-[5rem] lg:text-[6rem] font-bold uppercase leading-none tracking-tight text-black ${fraunces.className}`}
          />
        </div>

        {/* Separador */}
        <div className="h-px bg-[#FFA500]/15"></div>

        {/* Franja negra — texto naranja mediano hacia la derecha */}
        <div className="bg-black py-4 select-none">
          <MarqueeTrack
            direction={1}
            duration={32}
            text="Bulacio vive — El gesto es memoria — Tucumán eterno — La tela respira — Arte sin tiempo — El vacío también pinta"
            textClass={`text-[2rem] md:text-[2.8rem] font-bold uppercase leading-none tracking-tight text-[#FFA500] ${fraunces.className}`}
          />
        </div>

        {/* Franja negra inversa — texto blanco pequeño hacia la izquierda */}
        <div className="bg-[#080808] py-3 select-none border-t border-[#FFA500]/10">
          <MarqueeTrack
            direction={-1}
            duration={50}
            text="1938 — 2003 — Monteros, Tucumán — Argentina — Museo Municipal — Obra permanente"
            textClass={`text-[1.1rem] font-light uppercase leading-none tracking-[0.15em] text-white/20 ${outfit.className}`}
          />
        </div>
      </section>

      <VideoRodo />

      {/* Footer */}
      <footer className={`border-t border-[#111] py-12 px-6 flex flex-col items-center justify-center gap-6 text-gray-500 font-light text-sm bg-black ${outfit.className}`}>
        <div className={`text-xl font-bold tracking-widest text-[#555] ${outfit.className}`}>RODO BULACIO</div>
        <div className="flex gap-6 text-gray-400">
          <InstagramLogo weight="light" className="hover:text-[#FFA500] cursor-pointer transition-colors" size={24} />
          <MapPin weight="light" className="hover:text-[#FFA500] cursor-pointer transition-colors" size={24} />
        </div>
        <p>© {new Date().getFullYear()} Museo Rodo Bulacio. Monteros, Tucumán.</p>
      </footer>
    </div>
  );
}
