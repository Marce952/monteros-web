"use client"
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';
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
      icon: <GiGreekSphinx />,
      href: '/entidades/estatuas',
      color: '#8E94F2',
      image: '/img/estatua.jpg',
      description: 'Descubre las estatuas emblemáticas de Monteros, que cuentan historias de nuestra rica cultura y tradiciones.'
    },
    {
      title: 'Iglesias',
      icon: <LuChurch />,
      href: '/entidades/iglesias',
      color: '#9FA0FF',
      image: '/img/iglesia.jpg',
      description: 'Explora las iglesias históricas de Monteros, donde la arquitectura y la espiritualidad se unen en un viaje cultural único.'
    },
    {
      title: 'Plazas',
      icon: <PiParkDuotone />,
      href: '/entidades/plazas',
      color: '#BBADFF',
      image: '/img/plaza.jpg',
      description: 'Disfruta de las plazas de Monteros, espacios verdes llenos de vida, ideales para relajarse y disfrutar de la comunidad.'
    },
    {
      title: 'Escuelas',
      icon: <LuSchool2 />,
      href: '/entidades/escuela',
      color: '#DAB6FC',
      image: '/img/escuela.jpg',
      description: 'Conoce las escuelas de Monteros, donde la educación y el aprendizaje son pilares fundamentales para el desarrollo de nuestra comunidad.'
    }
  ]

  return (
    <>
      <div className='w-full flex flex-col justify-center items-center'>
        <div className='mt-20 mb-12'>
          <h1 className='text-center text-6xl underline decoration-green-500 font-bold'>Bienvenido Turista!</h1>
          {/* <div className='w-full h-1 bg-gradient-to-r from-[#8E94F2] from-10% via-[#9FA0FF] via-30% via-[#BBADFF] via-30% to-[#DAB6FC] to-90% '></div> */}
        </div>
        <p className='w-9/12 text-center'>
          Por favor elige algun tema que te interese y podras ver una gran lista de puntos turisticos de nuestra <span>ciudad de monteros</span> junto con su ubicacion e informacion
        </p>
      </div>

      <div className='w-full grid grid-cols-1 px-4 mt-8 sm:grid-cols-1 md:grid-cols-2 md:mt-10 lg:grid-cols-4 lg:mt-16 gap-8 mb-4'>
        {
          entidades.map((entidad, i) => (
            <Link href={entidad.href} key={i}>
              <Card className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <ImageWithFallback
                    src={entidad.image}
                    alt={entidad.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className='p-4 font-bold'>
                  <h2 className="text-black">{entidad.title}</h2>
                </CardHeader>
                <CardBody className='p-4'>
                  <p className="text-gray-700">
                    {entidad.description}
                  </p>
                </CardBody>
              </Card>
            </Link>
          ))
        }
      </div>
    </>
  )
}

export default ContenedorEntidades