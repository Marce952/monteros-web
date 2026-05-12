"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LuMapPin, LuCalendar, LuInstagram, LuImage, LuSearch, LuBookmark, LuPin, LuArrowRight, LuArrowLeft } from 'react-icons/lu';
import { Fraunces, DM_Sans } from 'next/font/google';
import HeroRodo from '@/Components/Rodo/HeroRodo';
import BiographyRodo from '@/Components/Rodo/BiographyRodo';
import TimelineRodo from '@/Components/Rodo/TimelineRodo';
import VideoRodo from '@/Components/Rodo/VideoRodo';

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



export default function RodoBulacioLanding() {
  return (
    <div className={`min-h-screen bg-black text-white selection:bg-[#FFA500] selection:text-black font-sans ${dmSans.className}`}>

      {/* Navbar */}
      <nav className={`absolute top-0 left-0 w-full z-50 px-8 py-10 flex justify-between items-center ${dmSans.className} text-[13px] text-gray-300 pointer-events-auto`}>
        <div className="text-3xl font-black tracking-tighter text-[#FFA500] leading-none select-none">
          Mu
        </div>
      </nav>

      {/* Hero Section */}
      <HeroRodo />

      {/* Biografía */}
      <BiographyRodo />

      {/* Timeline / Obra Destacada (Horizontal Slider) */}
      <TimelineRodo />

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
              "/img/rodo/gallery/4.webp",
              "/img/rodo/gallery/15munt_bulaciomarzo.webp",
              "/img/rodo/gallery/16.webp",
              "/img/rodo/gallery/19.webp",
              "/img/rodo/gallery/19munt_bulaciomarzo.webp",
              "/img/rodo/gallery/22.webp",
              "/img/rodo/gallery/pintura-morada.webp",
            ].map((url, i) => (
              <FadeIn key={i} delay={i * 0.1} className={`relative overflow-hidden group ${i === 0 || i === 3 ? "col-span-2 row-span-2" : ""}`}>
                <div className="max-h-full h-full aspect-square w-full">
                  <img
                    src={url}
                    alt={`Obra de arte ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-100"
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

      {/* Cierre / Call to Action con Video */}
      <VideoRodo />

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
