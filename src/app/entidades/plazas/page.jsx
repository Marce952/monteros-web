'use client'
import Cards from '@/Components/Cards'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {

    const [plazaEntidad, setPlazaEntidad] = useState([])

    useEffect(() => {
        axios.get('/api/entidades')
        .then(resp => {
            const plaza = resp.data.entidades.filter(entidad => entidad.tipo.toLowerCase() === 'plaza');
            setPlazaEntidad(plaza);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        })
        console.log(plazaEntidad)
      
    }, [])

  return (
    <div>
        <div className={`h-12 w-full bg-green-500 flex items-center`}>
            <p className='text-2xl ml-2 text-white'>Plazas</p>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:mt-10 lg:grid-cols-3 lg:mt-16 gap-8 p-4'>
                {plazaEntidad.map((plaza, i) => {
                    return <Cards
                        key={i}
                        params={plaza}
                    />
                })}
            </div>
    </div>
  )
}

export default page