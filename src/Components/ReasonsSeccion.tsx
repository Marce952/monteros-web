import { ImageWithFallback } from './figma/ImageWithFallback';
import Link from 'next/link';
import React from 'react';
import SectionHeading from './SectionHeading';
import { visitReasons } from '@/data/visitReasons';

export default function ReasonsSeccion() {
  return (
    <section id="razones" className="relative border-y border-stone-200/80 bg-stone-100 py-20 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(21,128,61,0.06),_transparent_50%)]" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading eyebrow="Descubrí" title="¿Por qué visitar Monteros?">
          Descubrí las tres razones principales que hacen de Monteros un destino
          imperdible en el corazón de Tucumán.
        </SectionHeading>

        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {visitReasons.map((reason) => (
            <Link
              key={reason.slug}
              href={`/descubrir/${reason.slug}`}
              className="group flex flex-col rounded-2xl border border-stone-200/90 bg-white p-2 pb-8 text-center shadow-sm transition hover:-translate-y-1 hover:border-emerald-200/80 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <ImageWithFallback
                  src={reason.image}
                  alt=""
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                <span className="font-sans absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/95 px-4 py-1.5 text-xs font-semibold text-[var(--primary)] opacity-0 shadow-md transition group-hover:opacity-100">
                  Ver más
                </span>
              </div>
              <h3 className="font-display px-4 text-xl font-semibold text-stone-900 group-hover:text-[var(--primary)]">
                {reason.title}
              </h3>
              <p className="font-sans mt-3 px-4 text-[15px] leading-relaxed text-stone-600">
                {reason.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
