'use client'
import Informacion from '@/Components/Informacion'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const params = useParams()

    const id = params.id
    return (
        <Informacion id={id} />
    )
}

export default page