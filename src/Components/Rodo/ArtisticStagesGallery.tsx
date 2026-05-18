'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Fraunces, DM_Sans } from 'next/font/google';
import { ArrowLeft } from '@phosphor-icons/react';
import { artisticStages } from '@/data/artisticStages';

const fraunces = Fraunces({ subsets: ['latin'], weight: ['400', '700'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

const FadeIn = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

type ArtisticStagesGalleryProps = {
  showIntro?: boolean;
  showBackLink?: boolean;
};

export default function ArtisticStagesGallery({
  showIntro = true,
  showBackLink = true,
}: ArtisticStagesGalleryProps) {
  const [activeStageId, setActiveStageId] = useState(artisticStages[0].id);

  useEffect(() => {
    const sections = artisticStages
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveStageId(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {showBackLink && (
        <div className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur-md">
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-7xl mx-auto px-6 md:px-20 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <Link
              href="/rodo-bulacio"
              className={`inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#FFA500] transition-colors ${dmSans.className}`}
            >
              <ArrowLeft size={18} weight="light" />
              Volver al inicio
            </Link>

            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="Etapas del recorrido"
            >
              {artisticStages.map((stage) => (
                <a
                  key={stage.id}
                  href={`#${stage.id}`}
                  role="tab"
                  aria-selected={activeStageId === stage.id}
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs transition-all ${dmSans.className} ${
                    activeStageId === stage.id
                      ? 'bg-white/10 text-white ring-1 ring-white/20'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full ring-1 ring-black/10"
                    style={{ backgroundColor: stage.color }}
                    aria-hidden
                  />
                  <span className="hidden md:inline">{stage.name}</span>
                  <span className="md:hidden">{stage.period}</span>
                </a>
              ))}
            </div>
          </motion.nav>
        </div>
      )}

      {showIntro && (
        <section className="bg-[#050505] py-20 px-6 md:px-20 border-b border-[#111]">
          <FadeIn className="max-w-4xl mx-auto text-center">
            <p
              className={`text-xs uppercase tracking-[0.35em] text-[#FFA500] mb-4 ${dmSans.className}`}
            >
              Guía de visita
            </p>
            <h1
              className={`text-3xl md:text-5xl font-bold uppercase tracking-widest text-white ${fraunces.className}`}
            >
              Salas por color
            </h1>
            <p className={`mt-6 text-gray-400 font-light leading-relaxed ${dmSans.className}`}>
              El museo organiza la obra de Rodolfo Bulacio en cuatro etapas. Cada color de las
              paredes marca un período de su vida y de su producción artística. Recorré cada sala
              para conocer su significado y ver las obras que pertenecen a ese momento.
            </p>
          </FadeIn>

          <FadeIn delay={0.15} className="mt-12 max-w-3xl mx-auto">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {artisticStages.map((stage) => (
                <li key={stage.id}>
                  <a
                    href={`#${stage.id}`}
                    className="block rounded-lg p-4 transition-transform hover:scale-[1.02]"
                    style={{ backgroundColor: stage.color }}
                  >
                    <span
                      className={`block text-[10px] uppercase tracking-wider opacity-70 ${dmSans.className}`}
                      style={{ color: stage.textColor }}
                    >
                      {stage.period}
                    </span>
                    <span
                      className={`mt-1 block text-sm font-semibold leading-tight ${fraunces.className}`}
                      style={{ color: stage.textColor }}
                    >
                      {stage.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>
        </section>
      )}

      <section id="obras" className="relative" aria-label="Etapas artísticas y galerías">
        {artisticStages.map((stage, stageIdx) => (
          <article
            key={stage.id}
            id={stage.id}
            className="relative scroll-mt-28"
            style={{ backgroundColor: stage.color }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="max-w-7xl mx-auto px-6 md:px-20 py-16 md:py-24"
            >
              <motion.div className="mb-8 md:mb-10">
                <p
                  className={`text-xs uppercase tracking-[0.25em] opacity-60 ${dmSans.className}`}
                  style={{ color: stage.textColor }}
                >
                  Sala {String(stageIdx + 1).padStart(2, '0')} · {stage.period}
                </p>
              </motion.div>

              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
                <FadeIn delay={0.1}>
                  <motion.div
                    className={`p-8 md:p-10 shadow-xl ${
                      stage.plaqueStyle === 'dark'
                        ? 'bg-black text-white'
                        : 'bg-white text-black'
                    }`}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2
                      className={`text-2xl md:text-3xl font-bold mb-2 tracking-tight ${fraunces.className}`}
                    >
                      {stage.name}
                    </h2>
                    <p
                      className={`text-xs uppercase tracking-widest mb-6 opacity-60 ${dmSans.className}`}
                    >
                      {stage.period}
                    </p>
                    <p
                      className={`text-sm md:text-[15px] leading-relaxed font-light ${dmSans.className}`}
                      style={{
                        color:
                          stage.plaqueStyle === 'dark' ? 'rgba(255,255,255,0.9)' : '#333',
                      }}
                    >
                      {stage.description}
                    </p>
                  </motion.div>
                </FadeIn>

                <div>
                  <p
                    className={`text-xs uppercase tracking-[0.2em] mb-4 opacity-70 ${dmSans.className}`}
                    style={{ color: stage.textColor }}
                  >
                    Obras de esta etapa
                  </p>
                  <motion.div
                    className="grid grid-cols-2 gap-3 md:gap-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-40px' }}
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.12 } },
                    }}
                  >
                    {stage.images.map((img, imgIdx) => (
                      <motion.figure
                        key={img.src}
                        variants={{
                          hidden: { opacity: 0, y: 16 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        className={`relative overflow-hidden group shadow-lg ${
                          imgIdx === 0 ? 'col-span-2 aspect-[16/10]' : 'aspect-square'
                        }`}
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                          style={{
                            background:
                              'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                          }}
                        >
                          <figcaption
                            className={`text-white text-xs uppercase tracking-wider ${dmSans.className}`}
                          >
                            {img.alt}
                          </figcaption>
                        </motion.div>
                      </motion.figure>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {stageIdx < artisticStages.length - 1 && (
              <div
                className="h-px w-full opacity-20"
                style={{ backgroundColor: stage.textColor }}
                aria-hidden
              />
            )}
          </article>
        ))}
      </section>
    </div>
  );
}
