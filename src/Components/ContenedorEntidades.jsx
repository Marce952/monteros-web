"use client"
import Link from 'next/link';
import React from 'react'
import { GiGreekSphinx } from "react-icons/gi";
import { LuChurch, LuSchool2 } from "react-icons/lu";
import { PiParkDuotone } from "react-icons/pi";

const ContenedorEntidades = () => {

    const entidades = [
        {
            title: 'Estatuas',
            icon: <GiGreekSphinx />,
            href: '/entidades/estatuas',
            color: '#8E94F2'
        },
        {
            title: 'Iglesias',
            icon: <LuChurch />,
            href: '#',
            color: '#9FA0FF'
        },
        {
            title: 'Plazas',
            icon: <PiParkDuotone />,
            href: '/',
            color: '#BBADFF'
        },
        {
            title: 'Escuelas',
            icon: <LuSchool2 />,
            href: '#',
            color: '#DAB6FC'
        }
    ]

    return (
        <>
    <div className='w-full flex flex-col justify-center items-center'>
        <div className='my-12'>
        <h1 className='text-center text-6xl'>Bienvenido Turista!</h1>
        <div className='w-full h-1 bg-gradient-to-r from-[#8E94F2] from-10% via-[#9FA0FF] via-30% via-[#BBADFF] via-30% to-[#DAB6FC] to-90% '></div>
        </div>
        <p className='w-9/12 text-center'>
            Por favor elige algun tema que te interese y podras ver una gran lista de puntos turisticos de nuestra <span>ciudad de monteros</span> junto con su ubicacion e informacion
        </p>
    </div>

        <div className='w-full grid grid-cols-1 place-content-center sm:grid-cols-1 md:grid-cols-2 md:mt-10 lg:grid-cols-4 lg:mt-16 gap-8 p-4'>            
            {
                entidades.map((entidad, i) => (
                    <Link href={entidad.href} key={i}>
                        <div
                            className="border-4 rounded-md w-48 h-36 flex flex-col justify-around items-center cursor-pointer"
                            style={{ borderColor: entidad.color }}
                        >
                            <div className="h-full flex items-center">
                                <p style={{ color: entidad.color }} className="text-5xl">
                                    {entidad.icon}
                                </p>
                            </div>
                            <div
                                className="w-full h-full flex justify-center items-center"
                                style={{ backgroundColor: entidad.color }}
                            >
                                <span className="text-white">{entidad.title}</span>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div >
        </>
    )
}

export default ContenedorEntidades