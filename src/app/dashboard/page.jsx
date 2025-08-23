'use client'
import Cards from '@/Components/Cards'
import { Button, Select, SelectItem } from '@nextui-org/react'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { signIn, useSession } from 'next-auth/react'

const page = () => {
  const [entidades, setEntidades] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('/api/entidades')
      .then(resp => {
        setEntidades(resp.data.entidades)
        setLoading(false)
      })
  }, [])

  const { data: session } = useSession()

  return (
    <div className='w-full h-full p-10'>
      {
        session?.user ? (
          <div className='grid grid-cols-4 gap-4' >
            <Link href={'/dashboard/crear'}>
              <div className='w-[20rem] h-[20rem] rounded-md flex justify-center items-center'>
                <Button>Crear</Button>
              </div>
            </Link>

            {
              entidades.map((entidad, i) => (
                <Cards
                  key={i}
                  params={entidad}
                  link={`/dashboard/crear/${entidad.id}`}
                />
              ))
            }
          </div >
        ) : (
          <div>
            <Button onClick={signIn} isLoading={loading} >
              Iniciar sesion
            </Button>
          </div>
        )
      }
    </div>
  )
}

export default page

