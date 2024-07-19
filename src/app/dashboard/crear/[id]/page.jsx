'use client'
import Crear from '@/Components/Crear'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const params = useParams()

    const id = params.id

  return (
    <Crear id={id} />
  )
}

export default page