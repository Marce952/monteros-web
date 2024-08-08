"use client"
import { Card, CardHeader, Image } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react'
import { GiGreekSphinx } from "react-icons/gi";
import { LuChurch, LuSchool2 } from "react-icons/lu";
import { PiParkDuotone } from "react-icons/pi";
import NavBar from './Navbar';

const ContenedorEntidades = () => {

    const entidades = [
        {
            title: 'Estatuas',
            icon: <GiGreekSphinx />,
            href: '/entidades/estatuas',
            color: '#8E94F2',
            image: '/img/estatua.jpg'
        },
        {
            title: 'Iglesias',
            icon: <LuChurch />,
            href: '/entidades/iglesias',
            color: '#9FA0FF',
            image: '/img/iglesia.jpg'
        },
        {
            title: 'Plazas',
            icon: <PiParkDuotone />,
            href: '/entidades/plazas',
            color: '#BBADFF',
            image: '/img/plaza.jpg'
        },
        {
            title: 'Escuelas',
            icon: <LuSchool2 />,
            href: '/entidades/escuela',
            color: '#DAB6FC',
            image: '/img/escuela.jpg'
        }
    ]

    return (
        <>
            <div className='w-full flex flex-col justify-center items-center'>
                {/* <NavBar /> */}
                <div className='mt-20 mb-12'>
                    <h1 className='text-center text-6xl underline decoration-green-500 font-bold'>Bienvenido Turista!</h1>
                    {/* <div className='w-full h-1 bg-gradient-to-r from-[#8E94F2] from-10% via-[#9FA0FF] via-30% via-[#BBADFF] via-30% to-[#DAB6FC] to-90% '></div> */}
                </div>
                <p className='w-9/12 text-center'>
                    Por favor elige algun tema que te interese y podras ver una gran lista de puntos turisticos de nuestra <span>ciudad de monteros</span> junto con su ubicacion e informacion
                </p>
            </div>

            <div className='w-full grid grid-cols-1 px-4 mt-8 sm:grid-cols-1 md:grid-cols-2 md:mt-10 lg:grid-cols-4 lg:mt-16 gap-8'>
                {
                    entidades.map((entidad, i) => (
                        <Link href={entidad.href} key={i}>
                            <Card className="col-span-12 sm:col-span-4 h-[300px]">
                                <CardHeader className="absolute z-10 top-1 flex-col items-start p-2">
                                    <p className="text-dark text-xl uppercase font-bold">{entidad.icon}</p>
                                    <h4 className="text-white font-medium text-large">{entidad.title}</h4>
                                </CardHeader>
                                <Image
                                    removeWrapper
                                    alt="Card background"
                                    className="z-0 w-full h-full object-cover opacity-100"
                                    src={entidad.image}
                                />
                            </Card>

                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default ContenedorEntidades