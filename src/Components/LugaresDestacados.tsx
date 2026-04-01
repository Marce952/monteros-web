import React from 'react';
import Link from 'next/link';
import SectionHeading from './SectionHeading';
import { lugares, categorias } from '@/data/lugares';

const destacados = ['iglesia-nuestra-senora-del-rosario', 'ibatin-macai', 'reserva-los-sosa'];

export default function LugaresDestacados() {
  const items = destacados.map((slug) => lugares.find((l) => l.slug === slug)!).filter(Boolean);

  return (
    <section className="relative overflow-hidden bg-white py-20 px-4">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(21,128,61,0.05),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading eyebrow="Lugares históricos" title="Descubrí Monteros lugar por lugar">
          Cada rincón de la ciudad tiene una historia. Escaneá el QR en el lugar físico
          o explorá desde acá con historia completa, fotos y datos.
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((lugar) => {
            const cat = categorias[lugar.categoria];
            return (
              <Link
                key={lugar.slug}
                href={`/lugares/${lugar.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-xl hover:shadow-stone-900/8 hover:-translate-y-0.5"
              >
                <div className="relative h-44 overflow-hidden bg-stone-100">
                  <img
                    src={lugar.imagen}
                    alt={lugar.nombre}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className={`absolute top-3 right-3 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${cat.color}`}>
                    {cat.label}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="font-display text-lg font-semibold text-stone-900 leading-snug group-hover:text-[var(--primary)] transition-colors">
                    {lugar.nombre}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-stone-600 flex-1 line-clamp-3">
                    {lugar.descripcionCorta}
                  </p>
                  <div className="mt-2 flex items-center gap-1 font-sans text-sm font-semibold text-[var(--primary)]">
                    Ver historia e info
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA ver todos */}
        <div className="mt-10 text-center">
          <Link
            href="/lugares"
            className="font-sans inline-flex items-center gap-2 rounded-xl border border-stone-200 bg-stone-50 px-7 py-3 text-sm font-semibold text-stone-700 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-[var(--primary)]"
          >
            Ver los 12 lugares con historia y QR
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
