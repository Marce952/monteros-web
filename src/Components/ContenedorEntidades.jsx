"use client"
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react'
import { GiGreekSphinx } from "react-icons/gi";
import { LuChurch, LuSchool2 } from "react-icons/lu";
import { PiParkDuotone } from "react-icons/pi";
import { ImageWithFallback } from './figma/ImageWithFallback';

const ContenedorEntidades = () => {

  const entidades = [
    {
      title: 'Estatuas',
      icon: <GiGreekSphinx className="h-6 w-6" />,
      href: '/entidades/estatuas',
      color: '#15803d',
      image: '/img/estatua.jpg',
      description: 'Descubrí las estatuas emblemáticas de Monteros, que cuentan historias de nuestra rica cultura y tradiciones.'
    },
    {
      title: 'Iglesias',
      icon: <LuChurch className="h-6 w-6" />,
      href: '/entidades/iglesias',
      color: '#166534',
      image: '/img/iglesia.jpg',
      description: 'Explorá las iglesias históricas de Monteros, donde la arquitectura y la espiritualidad se unen en un viaje cultural único.'
    },
    {
      title: 'Plazas',
      icon: <PiParkDuotone className="h-6 w-6" />,
      href: '/entidades/plazas',
      color: '#14532d',
      image: '/img/plaza.jpg',
      description: 'Disfrutá de las plazas de Monteros, espacios verdes llenos de vida, ideales para relajarse y disfrutar de la comunidad.'
    },
    {
      title: 'Escuelas',
      icon: <LuSchool2 className="h-6 w-6" />,
      href: '/entidades/escuela',
      color: '#0f5132',
      image: '/img/escuela.jpg',
      description: 'Conocé las escuelas de Monteros, donde la educación y el aprendizaje son pilares fundamentales para el desarrollo de nuestra comunidad.'
    }
  ]

  return (
    <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-28 lg:px-6">
      <header className="mx-auto mb-14 max-w-3xl text-center">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-warm)]">
          Turismo
        </p>
        <h1 className="font-display mt-3 text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl">
          Bienvenido, turista
        </h1>
        <p className="font-sans mt-5 text-lg leading-relaxed text-stone-600">
          Elegí un tema que te interese y descubrí puntos turísticos de nuestra{' '}
          <span className="font-medium text-stone-800">ciudad de Monteros</span>, con ubicación e información.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {
          entidades.map((entidad, i) => (
            <Link href={entidad.href} key={i} className="group block h-full">
              <Card className="h-full overflow-hidden border border-stone-200/90 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={entidad.image}
                    alt={entidad.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 shadow-md backdrop-blur-sm"
                    style={{ color: entidad.color }}
                  >
                    {entidad.icon}
                  </div>
                </div>
                <CardHeader className="flex flex-col items-start gap-1 px-5 pb-0 pt-5">
                  <h2 className="font-display text-xl font-semibold text-stone-900">{entidad.title}</h2>
                </CardHeader>
                <CardBody className="px-5 pb-6 pt-2">
                  <p className="font-sans text-[15px] leading-relaxed text-stone-600">
                    {entidad.description}
                  </p>
                  <span className="font-sans mt-4 inline-flex items-center text-sm font-semibold text-[var(--primary)] group-hover:underline">
                    Ver más
                    <span className="ml-1 transition group-hover:translate-x-0.5" aria-hidden>→</span>
                  </span>
                </CardBody>
              </Card>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default ContenedorEntidades
