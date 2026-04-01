import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import SectionHeading from './SectionHeading';
import Link from 'next/link';

export default function IngenioSeccion() {
  return (
    <section className="relative border-t border-stone-200/80 bg-gradient-to-b from-stone-100 to-stone-50 py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Identidad" title="El alma de Monteros">
          Dos emblemas que explican quiénes somos: el azúcar que endulzó al país
          y la artesanía más singular del mundo.
        </SectionHeading>

        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          {/* Ingenio azucarero */}
          <Link
            href="/lugares/ingenio-azucarero"
            className="group overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm transition hover:border-emerald-200 hover:shadow-xl"
          >
            <div className="relative h-64 overflow-hidden">
              <ImageWithFallback
                src="/img/Monteros2.jpg"
                alt="Ingenios azucareros de Monteros"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-4 left-5 font-display text-xl font-semibold text-white">
                Ingenios Azucareros
              </span>
            </div>
            <div className="px-6 py-5">
              <p className="font-sans text-[15px] leading-relaxed text-stone-600">
                Monteros es parte del corazón azucarero de Tucumán, la provincia que produce
                el 65% del azúcar de Argentina. El Ingenio La Providencia, fundado en 1882,
                y el Ingenio Ñuñorco son parte del patrimonio industrial y cultural de la ciudad.
              </p>
              <dl className="font-sans mt-5 space-y-2.5 border-t border-stone-100 pt-4 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="font-medium text-stone-800">Ing. La Providencia fundado</dt>
                  <dd className="text-stone-600">1882–1884</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-medium text-stone-800">Producción provincial</dt>
                  <dd className="text-stone-600">+65% del azúcar del país</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-medium text-stone-800">Período de zafra</dt>
                  <dd className="text-stone-600">Mayo – octubre</dd>
                </div>
              </dl>
              <div className="mt-4 flex items-center gap-1 font-sans text-sm font-semibold text-[var(--primary)]">
                Conocé la historia completa
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>

          {/* La Randa */}
          <Link
            href="/lugares/la-randa"
            className="group overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm transition hover:border-emerald-200 hover:shadow-xl"
          >
            <div className="relative h-64 overflow-hidden">
              <ImageWithFallback
                src="/img/feria de artesanias.jpg"
                alt="La Randa – artesanía única en el mundo"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-4 left-5 font-display text-xl font-semibold text-white">
                La Randa
              </span>
            </div>
            <div className="px-6 py-5">
              <p className="font-sans text-[15px] leading-relaxed text-stone-600">
                Única artesanía textil de su tipo en el mundo, producida desde 1565 en la localidad
                de El Cercado. Unas 50 randeras sostienen esta tradición de 350 años, postulada
                ante la UNESCO. Monteros es la Capital Nacional de la Randa.
              </p>
              <dl className="font-sans mt-5 space-y-2.5 border-t border-stone-100 pt-4 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="font-medium text-stone-800">Origen</dt>
                  <dd className="text-stone-600">Ibatín, 1565</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-medium text-stone-800">Randeras activas</dt>
                  <dd className="text-stone-600">~50</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-medium text-stone-800">Reconocimiento</dt>
                  <dd className="text-right text-stone-600">Postulada ante UNESCO</dd>
                </div>
              </dl>
              <div className="mt-4 flex items-center gap-1 font-sans text-sm font-semibold text-[var(--primary)]">
                Conocé la historia completa
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
