"use client"
import React, { useEffect, useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import axios from 'axios';
import { Image, Skeleton } from '@nextui-org/react';
import Footer from './Footer';

const Informacion = ({ id }) => {
    console.log(id)

    const [entidad, setEntidad] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get(`/api/entidades/${id}`)
            .then(resp => {
                setEntidad(resp.data)
                setLoading(!loading)
            })
    }, [])


    return (
        <div className="bg-white flex flex-col items-center w-full max-md:max-w-full">
            <div className="min-w-full px-32">
                <div className='flex justify-center items-center w-full my-10'>
                    <h1 className='text-4xl uppercase font-bold'>{entidad.nombre}</h1>
                </div>

                <Card className="mt-0">
                    <CardBody className="grid gap-4">
                            <Image
                                removeWrapper
                                alt="Card background"
                                className="w-full object-cover opacity-100 h-96"
                                src={entidad.imagen_principal}
                            />
                        {/* <div className="flex flex-row gap-5">
                            {data.imagenes && [data.imagen_principal, ...data.imagenes].map((imgelink, index) => (
                                <div key={index}>
                                    <img
                                        onClick={() => setActive(imgelink)}
                                        src={imgelink}
                                        className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                                        alt="gallery-image"
                                    />
                                </div>
                            ))}
                        </div> */}
                    </CardBody>
                </Card>

                <Card className="mb-24 mt-12 gap-8">
                    <CardBody className="grid gap-4">
                        <p>
                            {entidad.descripcion}
                        </p>
                    </CardBody>

                    <CardBody className="grid gap-4 mt-5 h-[13rem]">
                        <iframe src={`https://www.google.com/maps/embed?pb=${entidad.ubicacion != '' ? entidad.ubicacion : '1m14!1m12!1m3!1d443.71489016576317!2d-65.49706181865893!3d-27.165126288979327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1719847342709!5m2!1ses-419!2sar'}`} className='w-full h-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </CardBody>

                    <CardBody className="grid gap-4">
                        <p>
                            {entidad.texto_complementario}
                        </p>
                    </CardBody>
                </Card>

            </div>
            {/* {(
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-75">
                    <img
                        className="h-auto max-w-full max-h-full object-contain"
                        alt=""
                    />
                </div>
            )} */}
            <Footer />
        </div>
    )
}

export default Informacion