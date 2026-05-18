'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Fraunces, DM_Sans } from 'next/font/google';
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

export default function ArtisticStagesGallery() {
  return (
    <section id="obras" className="relative">
      <div className="bg-[#050505] py-20 px-6 md:px-20">
        <FadeIn className="max-w-4xl mx-auto text-center">
          <p
            className={`text-xs uppercase tracking-[0.35em] text-[#FFA500] mb-4 ${dmSans.className}`}
          >
            Recorrido por su obra
          </p>
          <h2
            className={`text-3xl md:text-5xl font-bold uppercase tracking-widest text-white ${fraunces.className}`}
          >
            Etapas artísticas
          </h2>
          <p className={`mt-6 text-gray-400 font-light leading-relaxed ${dmSans.className}`}>
            Las salas del museo organizan la producción de Rodolfo Bulacio según los períodos
            creativos que marcó su trayectoria.
          </p>
        </FadeIn>
      </div>

      {artisticStages.map((stage, stageIdx) => (
        <article
          key={stage.id}
          id={stage.id}
          className="relative scroll-mt-24"
          style={{ backgroundColor: stage.color }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-6 md:px-20 py-16 md:py-24"
          >
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
              {/* Placa informativa */}
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
                  <h3
                    className={`text-2xl md:text-3xl font-bold mb-6 tracking-tight ${fraunces.className}`}
                  >
                    {stage.name}
                  </h3>
                  <p
                    className={`text-sm md:text-[15px] leading-relaxed font-light ${dmSans.className}`}
                    style={{
                      color: stage.plaqueStyle === 'dark' ? 'rgba(255,255,255,0.9)' : '#333',
                    }}
                  >
                    {stage.description}
                  </p>
                </motion.div>
              </FadeIn>

              {/* Galería de la etapa */}
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
                    className={`relative overflow-hidden group ${
                      imgIdx === 0 ? 'col-span-2 aspect-[16/10]' : 'aspect-square'
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                      style={{
                        background:
                          stage.textColor === '#f5f5f5'
                            ? 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)'
                            : 'linear-gradient(to top, rgba(0,0,0,0.55), transparent)',
                      }}
                    >
                      <figcaption className="text-white text-xs uppercase tracking-wider">
                        {img.alt}
                      </figcaption>
                    </div>
                  </motion.figure>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {stageIdx < artisticStages.length - 1 && (
            <motion.div
              className="h-px w-full opacity-20"
              style={{ backgroundColor: stage.textColor }}
              aria-hidden
            />
          )}
        </article>
      ))}
    </section>
  );
}
