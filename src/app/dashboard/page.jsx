'use client'
import { Button, Select, SelectItem } from '@nextui-org/react'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [entidades, setEntidades] = useState('')

    useEffect(()=>{
        axios.get('/api/entidades')
        .then(resp => {setEntidades(resp.data.entidades[0].nombre)})
    },[])
    return (
        <div className='w-full h-full p-10'>
            <div className='grid grid-cols-4 gap-4'>
                <Link href={'/dashboard/crear'}>
                <div className='w-[20rem] h-[20rem] bg-red-500 rounded-md flex justify-center items-center'>
                    <Button>Crear</Button>
                </div>
                </Link>

                <div>
                    <div className='w-[20rem] h-[20rem] bg-emerald-500 rounded-md flex justify-center items-center'>
                        {entidades}
                        <Button>Ver</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page