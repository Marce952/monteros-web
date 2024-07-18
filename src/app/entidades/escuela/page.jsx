'use client'
import Cards from '@/Components/Cards'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {

    const [escuelasEntidad, setEscuelaEntidad] = useState([])

    useEffect(() => {
        axios.get('/api/entidades')
        .then(resp => {
            const escuelas = resp.data.entidades.filter(entidad => entidad.tipo.toLowerCase() === 'escuela');
            setEscuelaEntidad(escuelas);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        })
        console.log(escuelasEntidad)
      
    }, [])

  return (
    <div>
        <div className={`h-12 w-full bg-green-500 flex items-center`}>
            <p className='text-2xl ml-2 text-white'>Escuelas</p>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:mt-10 lg:grid-cols-3 lg:mt-16 gap-8 p-4'>
                {escuelasEntidad.map((escuela, i) => {
                    return <Cards
                        key={i}
                        params={escuela}
                    />
                })}
            </div>
    </div>
  )
}

export default page