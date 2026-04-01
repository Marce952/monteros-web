import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';
import SectionHeading from './SectionHeading';
import Link from 'next/link';

const activities = [
  {
    title: 'Trepada al Indio',
    description:
      'Carrera de montaña de 21 km hasta el Mirador El Chasqui a 1.100 m de altura. Un desafío que convoca atletas de toda la región desde 2002.',
    image: '/img/El indio.jpg',
    mes: 'Febrero',
    slug: 'trepada-al-indio',
  },
  {
    title: 'Festival de Folklore',
    description:
      'El segundo festival folklórico más antiguo del país. Más de 59 ediciones con artistas como Abel Pintos, Los Tekis y el Chaqueño Palavecino.',
    image: '/img/festival del folclore.jpg',
    mes: 'Octubre',
    slug: 'festival-monteros-de-la-patria',
  },
  {
    title: 'Fiesta de la Virgen del Rosario',
    description:
      'Cada primer domingo de octubre, unos 40.000 fieles peregrinas hacia Monteros para honrar a la patrona de la ciudad en una celebración de fe y tradición.',
    image: '/img/Iglesias/Nta Señora del rosario.jpg',
    mes: 'Octubre',
    slug: 'iglesia-nuestra-senora-del-rosario',
  },
];

export default function ActivitiesSection() {
  return (
    <section id="actividades" className="relative overflow-hidden bg-white py-20 px-4">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.45]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stone-50/90 to-white" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading eyebrow="Agenda" title="Eventos que definen a Monteros">
          Tres momentos al año donde la ciudad late con más fuerza. Folklore, fe y montaña
          convocando a miles de personas de toda la región.
        </SectionHeading>

        <div className="grid gap-8 md:grid-cols-3">
          {activities.map((activity) => (
            <Link
              key={activity.slug}
              href={`/lugares/${activity.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-all duration-300 hover:border-emerald-200/90 hover:shadow-xl hover:shadow-stone-900/5 hover:-translate-y-0.5"
            >
              <div className="relative h-52 overflow-hidden">
                <ImageWithFallback
                  src={activity.image}
                  alt={activity.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4 rounded-full bg-[var(--primary)] px-3.5 py-1 font-sans text-xs font-semibold uppercase tracking-wide text-[var(--primary-foreground)] shadow-md">
                  {activity.mes}
                </div>
              </div>
              <div className="flex flex-1 flex-col px-5 pb-6 pt-5">
                <h3 className="font-display text-xl font-semibold text-stone-900 group-hover:text-[var(--primary)] transition-colors">
                  {activity.title}
                </h3>
                <p className="font-sans mt-2 text-[15px] leading-relaxed text-stone-600 flex-1">
                  {activity.description}
                </p>
                <div className="mt-4 flex items-center gap-1 font-sans text-sm font-semibold text-[var(--primary)]">
                  Ver historia completa
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
