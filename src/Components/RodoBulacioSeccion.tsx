import React from 'react';
import Link from 'next/link';
import { ImageWithFallback } from './figma/ImageWithFallback';
import SectionHeading from './SectionHeading';

const etapasPreview = [
  { nombre: 'Crisálida formación', color: '#F2E4A8' },
  { nombre: 'Rosa Metamorfosis', color: '#E8A4B8' },
  { nombre: 'Período Azul', color: '#A8D4E8' },
  { nombre: 'La despedida', color: '#1a1a1a' },
];

export default function RodoBulacioSeccion() {
  return (
    <section className="relative overflow-hidden border-t border-stone-200/80 bg-stone-950 py-20 px-4">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,165,0,0.12),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Patrimonio cultural"
          title="Museo Rodo Bulacio"
          className="[&_h2]:text-white [&_p]:text-stone-400 [&_p:first-of-type]:text-[#FFA500]"
        >
          Artista, performer y referente del arte contemporáneo del NOA. Su obra vive en
          Monteros a través de un espacio dedicado a resguardar y celebrar su memoria creativa.
        </SectionHeading>

        <Link
          href="/rodo-bulacio"
          className="group block overflow-hidden rounded-2xl border border-stone-800 bg-stone-900 shadow-2xl transition hover:border-[#FFA500]/40 hover:shadow-[#FFA500]/10"
        >
          <div className="grid md:grid-cols-5">
            <div className="relative h-64 md:col-span-2 md:h-auto md:min-h-[320px]">
              <ImageWithFallback
                src="/img/rodo/rodo.jpg"
                alt="Rodolfo Bulacio – artista de Monteros"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-stone-950/90 hidden md:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent md:hidden" />
            </div>

            <div className="flex flex-col justify-center gap-6 p-8 md:col-span-3 md:p-10">
              <p className="font-sans text-[15px] leading-relaxed text-stone-300">
                Recorré su biografía, las etapas de su producción —desde la formación en Monteros
                hasta el legado del Período Azul y su despedida— y la galería de obras que hoy
                exhibe el museo.
              </p>

              <ul className="flex flex-wrap gap-2">
                {etapasPreview.map((etapa) => (
                  <li
                    key={etapa.nombre}
                    className="font-sans inline-flex items-center gap-2 rounded-full border border-stone-700 bg-stone-800/80 px-3 py-1.5 text-xs text-stone-300"
                  >
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-full ring-1 ring-white/20"
                      style={{ backgroundColor: etapa.color }}
                      aria-hidden
                    />
                    {etapa.nombre}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 font-sans text-sm font-semibold text-[#FFA500]">
                Conocer su historia y obra
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
