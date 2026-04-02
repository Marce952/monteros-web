"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LuMapPin, LuCalendar, LuInstagram, LuImage, LuSearch, LuBookmark, LuPin, LuArrowRight, LuArrowLeft } from 'react-icons/lu';
import { Fraunces, DM_Sans } from 'next/font/google';

const fraunces = Fraunces({ subsets: ['latin'], weight: ['400', '700'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const timelineData = [
  { date: "Marzo, 1980", title: "Inicios y Formación", desc: "Comienza su exploración artística profunda, entrelazando técnicas clásicas con la expresividad del arte popular del norte argentino.", img: "/img/rodo/rodo.jpg" },
  { date: "Diciembre, 1990", title: "Primera Exposición", desc: "La obra revolucionaria que marcó el inicio de una era de cuestionamiento social y de identidad corporal en Tucumán.", img: "/img/rodo/rodo.jpg" },
  { date: "Junio, 1995", title: "Instalación Urbana", desc: "Performance e intervención en el espacio público que desafió los límites del arte tradicional invitando a la participación ciudadana.", img: "/img/rodo/rodo.jpg" },
  { date: "Octubre, 1998", title: "Premio Nacional", desc: "Galardonado con el premio a la vanguardia artística, impulsando su trabajo a las principales salas del país.", img: "/img/rodo/rodo.jpg" },
  { date: "Mayo, 2005", title: "Legado Póstumo", desc: "Inauguración de la gran retrospectiva en celebración de toda su carrera y su insondable herencia cultural para las futuras generaciones.", img: "/img/rodo/rodo.jpg" },
];

export default function RodoBulacioLanding() {
  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <div className={`min-h-screen bg-black text-white selection:bg-[#FFA500] selection:text-black font-sans ${dmSans.className}`}>

      {/* Navbar */}
      <nav className={`absolute top-0 left-0 w-full z-50 px-8 py-10 flex justify-between items-center ${dmSans.className} text-[13px] text-gray-300 pointer-events-auto`}>
        <div className="text-3xl font-black tracking-tighter text-[#FFA500] leading-none select-none">
          Mu
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col justify-between px-8 md:px-16 overflow-hidden bg-[#111] pt-40 pb-16">

        {/* Definición de Filtro SVG para Bordes Rasgados/Papel Roto */}
        <svg width="0" height="0" className="absolute">
          <filter id="torn-paper">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>

        {/* Elemento Interactivo: Imagen de Rodo Bulacio */}
        <div className="absolute top-[12%] right-[5%] md:right-[12%] lg:right-[15%] w-[220px] md:w-[350px] lg:w-[420px] h-[300px] md:h-[450px] lg:h-[550px] z-20 group cursor-pointer transition-transform duration-500 transform perspective-1000">
          <FadeIn delay={0.8} className="w-full h-full">
            <div className="w-full h-full relative" style={{ filter: 'url(#torn-paper)' }}>
              <div className="w-full h-full bg-[#1c1c1c] transition-all duration-[600ms] ease-out overflow-hidden relative group-hover:shadow-[0_0_80px_rgba(255,165,0,0.5)]">

                {/* Imagen Base */}
                <img
                  src="/img/rodo/rodo.jpg"
                  alt="Rodo Bulacio"
                  className="w-full h-full object-cover grayscale opacity-50 mix-blend-luminosity filter transition-all duration-[600ms] ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:saturate-[1.4] group-hover:mix-blend-normal group-hover:scale-105"
                />

                {/* Overlay Naranja al hacer Hover */}
                <div className="absolute inset-0 bg-[#FFA500] mix-blend-color opacity-0 group-hover:opacity-[0.45] transition-opacity duration-[600ms] pointer-events-none"></div>

                {/* Efecto inicial Gris/Oscuro */}
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-[600ms] pointer-events-none"></div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Luz Radial Naranja de Acento */}
        <div className="absolute top-0 right-0 w-[900px] h-[550px] bg-[#FFA500] bg-opacity-[0.6] blur-[160px] rounded-[100%] translate-x-1/3 -translate-y-[20%] -rotate-[20deg] pointer-events-none z-0"></div>

        {/* Filtro / Grano SVG */}
        <div className="absolute inset-0 mix-blend-overlay pointer-events-none z-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent z-0 pointer-events-none"></div>

        {/* ABOUT & Block */}
        <div className={`relative z-30 grid grid-cols-1 md:grid-cols-4 w-full gap-8 ${dmSans.className} pointer-events-none`}>
          <FadeIn delay={0.1} className="md:col-span-1">
            <div className="text-[11px] font-bold tracking-widest text-white select-none">ABOUT</div>
          </FadeIn>
          <FadeIn delay={0.3} className="md:col-span-1 max-w-[180px] pointer-events-auto">
            <p className="text-[14px] leading-snug text-gray-200 mb-6 drop-shadow-md">
              Un espacio dedicado al legado del gran artista monterizo.
            </p>
            <button className="border border-[#FFA500] text-[#FFA500] rounded-[50px] px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-[#FFA500] hover:text-black transition-colors bg-black/20 backdrop-blur-sm">
              Conocer Más
            </button>
          </FadeIn>
        </div>

        {/* Enorme Tipografía */}
        <div className="relative z-30 w-full mt-auto flex flex-col justify-end pt-20 pointer-events-none">
          <FadeIn delay={0.5}>
            <h2 className={`text-[3.5rem] md:text-[5.5rem] text-white font-normal mb-[-2rem] ml-1 tracking-tight ${fraunces.className} drop-shadow-lg`}>
              Museo
            </h2>
          </FadeIn>
          <FadeIn delay={0.7} className="z-30">
            <h1 className={`text-[17vw] md:text-[12.5vw] leading-[0.8] tracking-[-0.07em] uppercase inline-block ${fraunces.className} -ml-2 text-white select-none relative drop-shadow-2xl mix-blend-normal`}>

              <span className="text-transparent bg-clip-text bg-[url('https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=800')] bg-cover bg-center grayscale brightness-[1.5]">R</span>
              <span className="text-white relative z-10">O</span>
              <span className="text-white">D</span>
              <span className="text-transparent bg-clip-text bg-[linear-gradient(to_bottom,#FFA500_50%,#fff_50%)] relative mr-4 md:mr-10">O
                <span className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800')] bg-clip-text text-transparent opacity-50 bg-cover mix-blend-overlay">O</span>
              </span>

              <span className="text-transparent border-0 bg-clip-text bg-[url('https://images.unsplash.com/photo-1518998053401-8789304192b5?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center filter grayscale opacity-90 relative">
                <span className="absolute bg-gradient-to-tr from-[#FFA500]/60 to-transparent bg-clip-text text-transparent">B</span>
                B
              </span>
              <span className="text-white">U</span>
              <span className="text-[#FFA500]">L</span>
              <span className="text-transparent bg-clip-text bg-[linear-gradient(rgba(255,165,0,0.8),rgba(255,165,0,0.8)),url('https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800')] bg-cover bg-center">A</span>
              <span className="text-white">C</span>
              <span className="text-white">I</span>
              <span className="text-white relative">O</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Biografía */}
      <section className="py-32 px-6 md:px-20 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className={`text-3xl md:text-5xl font-bold mb-16 text-center uppercase tracking-widest ${fraunces.className}`}>
              El Legado <span className="text-[#FFA500]">Artístico</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.2}>
              <div className="relative aspect-[4/5] bg-[#111] overflow-hidden rounded-lg group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFA500]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img
                  src="/img/rodo/rodo.jpg"
                  alt="Retrato artístico conceptual"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                <p>
                  Nacido en Monteros, Tucumán, Rodo Bulacio transformó la escena artística local y nacional con su visión disruptiva. Su obra trasciende el lienzo para convertirse en un registro vivo de la identidad, la corporalidad y la cultura popular.
                </p>
                <p>
                  A través de performances, instalaciones y pinturas, Bulacio cuestionó los cánones establecidos, abriendo camino para nuevas generaciones de artistas en el norte argentino. Su impacto social es innegable, acercando el arte contemporáneo a la comunidad de maneras sin precedentes.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Timeline / Obra Destacada (Horizontal Slider) */}
      <section className="relative w-full h-auto min-h-[600px] md:min-h-[800px] bg-black overflow-hidden flex flex-col justify-between py-16 md:py-8">

        {/* RIGHT/BACKGROUND: Dynamic Image with Fade effect */}
        <div className="absolute top-0 right-0 w-full md:w-3/4 h-full z-0">
          {/* Smooth Fade Mask to left */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10 w-full md:w-[85%] h-full pointer-events-none"></div>
          {/* Base bottom gradient for text contrast on smaller screens */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent md:bg-none z-10 pointer-events-none"></div>

          {timelineData.map((item, idx) => (
            <img
              key={idx}
              src={item.img}
              alt={item.title}
              className={`absolute inset-0 w-full h-full object-cover object-right transition-opacity duration-1000 ease-in-out grayscale-[0.2] ${activeIdx === idx ? 'opacity-100' : 'opacity-0'
                }`}
            />
          ))}
        </div>

        {/* TOP NAVBAR / CONTROLS */}
        <div className="relative z-30 px-8 md:px-16 flex items-center gap-4 pt-8 md:pt-16">
          <button
            onClick={() => setActiveIdx(prev => prev > 0 ? prev - 1 : timelineData.length - 1)}
            className="w-12 h-12 rounded-full border border-[#FFA500] text-[#FFA500] hover:bg-[#FFA500] hover:text-black transition-colors flex items-center justify-center group bg-black/40 backdrop-blur-sm"
          >
            <LuArrowLeft size={20} className="transform group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => setActiveIdx(prev => prev < timelineData.length - 1 ? prev + 1 : 0)}
            className="w-12 h-12 rounded-full border border-[#FFA500] text-[#FFA500] hover:bg-[#FFA500] hover:text-black transition-colors flex items-center justify-center group bg-black/40 backdrop-blur-sm"
          >
            <LuArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* MAIN CONTENT AREA */}
        <div className="relative z-30 px-8 md:px-16 flex-1 flex flex-col justify-center max-w-xl my-16 md:my-0">
          <div className="relative h-[280px] md:h-[300px]">
            {timelineData.map((item, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 flex flex-col justify-center transition-all duration-[800ms] ease-out ${activeIdx === idx ? 'opacity-100 translate-y-0 pointer-events-auto z-10' : 'opacity-0 translate-y-8 pointer-events-none z-0'
                  }`}
              >
                <div className={`inline-block bg-[#FFA500] text-black text-[10px] sm:text-xs font-bold px-3 py-1 mb-6 uppercase tracking-widest w-max ${dmSans.className}`}>
                  Obra Destacada
                </div>
                <h2 className={`text-3xl md:text-5xl text-white mb-4 ${fraunces.className} drop-shadow-md`}>
                  {item.title}
                </h2>
                <h3 className={`text-[#FFA500] text-sm md:text-lg mb-6 ${dmSans.className} tracking-wide`}>
                  {item.date}
                </h3>
                <p className={`text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-sm md:max-w-md ${dmSans.className} drop-shadow-lg`}>
                  {item.desc}
                </p>
                <a href="#" className={`text-[#FFA500] text-sm md:text-base underline underline-offset-8 decoration-[#FFA500]/50 hover:decoration-[#FFA500] hover:text-white transition-colors w-max font-medium ${dmSans.className}`}>
                  Leer más
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM TIMELINE */}
        <div className="relative z-30 w-full px-8 md:px-16 overflow-x-auto pb-4 md:pb-12 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="relative flex" style={{ width: 'max-content' }}>
            {/* The horizontal track line */}
            <div className="absolute left-0 right-0 h-[1px] bg-gray-600 top-[10px]"></div>

            <div className="flex justify-between items-start gap-16 sm:gap-24 md:gap-40 w-full mt-[1px]">
              {timelineData.map((item, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <div
                    key={idx}
                    className="relative flex flex-col items-center cursor-pointer group min-w-[70px]"
                    onClick={() => setActiveIdx(idx)}
                  >
                    {/* The Dot */}
                    <div className={`rounded-full z-10 transition-all duration-500 relative ${isActive ? 'w-[18px] h-[18px] bg-[#FFA500] outline outline-4 outline-[#FFA500]/30 -translate-y-[3px]' : 'w-[10px] h-[10px] bg-gray-400 mt-[4px] group-hover:bg-white group-hover:scale-125 group-hover:shadow-[0_0_10px_#fff]'
                      }`}></div>

                    {/* Vertical Connecting Line (Visible only on active) */}
                    <div className={`w-[1px] bg-[#FFA500] transition-all duration-700 origin-top absolute top-[18px] ${isActive ? 'h-6 opacity-100' : 'h-0 opacity-0'
                      }`}></div>

                    {/* Target Year Label */}
                    <span className={`transition-all duration-500 absolute whitespace-nowrap text-[13px] md:text-sm mt-8 ${isActive ? 'text-[#FFA500] font-bold top-[16px]' : 'text-gray-400 top-[0px] group-hover:text-white'
                      } ${dmSans.className}`}>
                      {item.date.split(',')[1]?.trim() || item.date}
                    </span>
                  </div>
                );
              })}
            </div>
            {/* Espaciador final para scroll seguro en móviles */}
            <div className="w-16 h-1 flex-shrink-0"></div>
          </div>
        </div>
      </section>

      {/* El Museo */}
      <section id="museo" className="py-32 px-6 md:px-20 border-t border-[#111]">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className={`text-3xl md:text-5xl font-bold uppercase tracking-widest mb-4 ${fraunces.className}`}>
                  El <span className="text-[#FFA500]">Museo</span>
                </h2>
                <p className="text-xl text-gray-400 font-light flex items-center gap-2">
                  <LuMapPin className="text-[#FFA500]" /> Monteros, Tucumán
                </p>
              </div>
              <p className="text-gray-400 max-w-md text-right hidden md:block font-light">
                Un espacio dedicado a la preservación y exhibición del patrimonio cultural legado por el artista, punto de encuentro para la comunidad.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sala Principal",
                desc: "Colección permanente de las obras más emblemáticas de Bulacio, agrupadas por su etapa de creación.",
                icon: <LuImage size={32} />
              },
              {
                title: "Exhibiciones Temporales",
                desc: "Espacio dinámico que alberga muestras de artistas locales y nacionales, manteniendo vivo el espíritu vanguardista.",
                icon: <LuCalendar size={32} />
              },
              {
                title: "El Taller",
                desc: "Centro de actividades comunitarias, charlas y talleres que fomentan la educación y creación artística.",
                icon: <LuInstagram size={32} />
              }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={0.2 + idx * 0.2}>
                <div className="bg-[#0a0a0a] border border-[#222] p-8 h-full hover:border-[#FFA500] hover:bg-[#111] transition-all duration-300 group cursor-pointer flex flex-col">
                  <div className="text-[#FFA500] mb-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${fraunces.className}`}>{item.title}</h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Galería Visual */}
      <section id="galeria" className="py-32 px-6 md:px-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className={`text-3xl md:text-5xl font-bold mb-16 text-center uppercase tracking-widest text-[#FFA500] ${fraunces.className}`}>
              Galería
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1578301978018-3005759f48f7?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=600&auto=format&fit=crop"
            ].map((url, i) => (
              <FadeIn key={i} delay={i * 0.1} className={`relative overflow-hidden group ${i === 0 || i === 3 ? "col-span-2 row-span-2" : ""}`}>
                <div className="max-h-full h-full aspect-square w-full">
                  <img
                    src={url}
                    alt={`Obra de arte ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white tracking-widest text-sm uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Ver Obra</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Cierre / Call to Action con Video */}
      <section className="relative w-full min-h-screen py-32 px-6 md:px-16 flex flex-col justify-between overflow-hidden text-white border-t border-[#111]">
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale-[0.2]"
          >
            <source src="/img/rodo/museo.mp4" type="video/mp4" />
          </video>
          {/* 40% Opacity Black Overlay to act as "night gallery" style */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Gradient to smooth out the edge with the gallery and footer */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-black"></div>
        </div>

        {/* Social Icons (Top Right) */}
        <div className="absolute top-12 right-6 md:right-12 z-30 flex gap-4 text-white/60">
          <a href="#" className={`hover:text-[#FFA500] hover:border-[#FFA500]/50 transition-colors duration-300 uppercase text-xs tracking-[0.2em] border border-white/20 px-5 py-2 rounded-full backdrop-blur-md bg-white/5 ${dmSans.className}`}>
            IG
          </a>
          <a href="#" className={`hover:text-[#FFA500] hover:border-[#FFA500]/50 transition-colors duration-300 uppercase text-xs tracking-[0.2em] border border-white/20 px-5 py-2 rounded-full backdrop-blur-md bg-white/5 ${dmSans.className}`}>
            FB
          </a>
        </div>

        {/* Typography Hero Text */}
        <div className="relative z-20 flex-1 flex items-center justify-center pointer-events-none mt-24 lg:mt-32">
          <FadeIn>
            <h2 className={`text-[13vw] sm:text-[11vw] md:text-[8.5vw] text-white leading-none whitespace-nowrap text-center drop-shadow-2xl ${fraunces.className}`}>
              <span className="font-normal">visita</span>
              <span className="font-light mx-4 md:mx-8 text-white/50">/</span>
              <em className="italic text-[#FFA500] font-light">el legado</em>
            </h2>
          </FadeIn>
        </div>

        {/* UI Glassmorphism Bottom Widgets */}
        <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mt-24">

          {/* Widget Izquierdo: Ubicación */}
          <FadeIn delay={0.2} className="h-full">
            <div className="bg-white/10 backdrop-blur-[20px] rounded-3xl p-8 md:p-10 border border-white/20 hover:border-[#FFA500]/40 transition-colors h-full flex flex-col justify-between shadow-2xl group cursor-default">
              <h3 className={`text-sm md:text-base font-bold tracking-[0.2em] text-white mb-8 ${dmSans.className}`}>
                ENCUÉNTRANOS EN MONTEROS
              </h3>

              {/* Minimal Map Visual */}
              <div className="relative w-full h-[160px] md:h-[180px] rounded-2xl mb-8 border border-white/10 overflow-hidden bg-black/20 group-hover:border-white/20 transition-colors">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-[#FFA500] rounded-full shadow-[0_0_20px_#FFA500] relative z-10 transition-transform group-hover:scale-110"></div>
                  <div className="absolute inset-0 bg-[#FFA500] rounded-full animate-ping opacity-60"></div>
                </div>
                {/* Abstract road lines vectors */}
                <svg className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-30 transition-opacity" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,50 Q25,25 50,50 T100,50" stroke="white" strokeWidth="0.5" fill="none" />
                  <path d="M50,0 Q60,30 50,50 T50,100" stroke="white" strokeWidth="0.5" fill="none" />
                  <path d="M20,100 L40,50" stroke="white" strokeWidth="0.2" strokeDasharray="2" fill="none" />
                </svg>
              </div>

              <div className={`space-y-4 text-gray-300 font-light flex-1 ${dmSans.className}`}>
                <p className="flex flex-col sm:flex-row justify-between border-b border-white/10 pb-3 gap-2">
                  <strong className="text-white font-normal">Dirección:</strong>
                  <span className="sm:text-right">Calle Mitre y Rivadavia</span>
                </p>
                <p className="flex flex-col sm:flex-row justify-between border-b border-white/10 pb-3 gap-2">
                  <strong className="text-white font-normal">Horarios:</strong>
                  <span className="sm:text-right">Mar a Dom | 09:00 - 18:00 hs</span>
                </p>
                <p className="flex flex-col sm:flex-row justify-between pb-1 gap-2">
                  <strong className="text-white font-normal">Entrada:</strong>
                  <span className="text-[#FFA500] font-medium tracking-wide">Libre y Gratuita</span>
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Widget Derecho: Info Complementaria */}
          <FadeIn delay={0.4} className="h-full">
            <div className="bg-white/10 backdrop-blur-[20px] rounded-3xl p-8 md:p-10 border border-white/20 hover:border-[#FFA500]/40 transition-colors h-full flex flex-col justify-between shadow-2xl group">
              <h3 className={`text-sm md:text-base font-bold tracking-[0.2em] text-white mb-8 ${dmSans.className}`}>
                ARCHIVO DIGITAL ACTIVO
              </h3>

              <div className="space-y-8 flex-1">
                <div className="flex flex-col gap-4 md:gap-6">
                  <div className="bg-black/40 rounded-2xl p-5 md:p-6 border border-white/5 flex flex-wrap justify-between items-center group-hover:bg-black/50 hover:border-white/10 transition-all">
                    <span className={`text-gray-400 font-light text-base md:text-lg ${dmSans.className}`}>Obras en Exhibición</span>
                    <span className={`text-3xl md:text-4xl text-white ${fraunces.className}`}>+150</span>
                  </div>
                  <div className="bg-black/40 rounded-2xl p-5 md:p-6 border border-white/5 flex flex-wrap justify-between items-center group-hover:bg-black/50 hover:border-white/10 transition-all">
                    <span className={`text-gray-400 font-light text-base md:text-lg ${dmSans.className}`}>Visitantes este mes</span>
                    <span className={`text-3xl md:text-4xl text-white ${fraunces.className}`}>1,240</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-8">
                  <div className="w-full bg-black/60 h-[8px] rounded-full overflow-hidden shadow-inner">
                    <div className="bg-[#FFA500] h-full rounded-full transition-all duration-[2000ms] ease-out w-[90%] relative shadow-[0_0_10px_#FFA500]">
                      {/* Subtle shine effect on progress bar */}
                      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/60 to-transparent"></div>
                    </div>
                  </div>
                  <p className={`text-right mt-4 text-[#FFA500] text-[11px] md:text-xs tracking-widest uppercase font-bold ${dmSans.className}`}>
                    90% Digitalización del Archivo Bulacio
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-10 md:mt-12 pt-8 border-t border-white/10">
                <button className={`w-full bg-[#FFA500] text-black font-bold uppercase tracking-[0.2em] rounded-full py-5 hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,165,0,0.4)] hover:scale-[1.02] transform ${dmSans.className}`}>
                  Planear Mi Visita
                </button>
              </div>

            </div>
          </FadeIn>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#111] py-12 px-6 flex flex-col items-center justify-center gap-6 text-gray-500 font-light text-sm bg-black">
        <div className="text-xl font-bold tracking-widest text-[#555]">RODO BULACIO</div>
        <div className="flex gap-6 text-gray-400">
          <LuInstagram className="hover:text-[#FFA500] cursor-pointer transition-colors" size={24} />
          <LuMapPin className="hover:text-[#FFA500] cursor-pointer transition-colors" size={24} />
        </div>
        <p>© {new Date().getFullYear()} Museo Rodo Bulacio. Monteros, Tucumán.</p>
      </footer>
    </div>
  );
}
