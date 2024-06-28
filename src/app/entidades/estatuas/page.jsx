import Card from '@/Components/Card'
import React from 'react'

const page = () => {

    const estatuas = [
        {title: 'Estatua de las madres', text: 'Estatua creada en 1908 por Jose Luis'},
        {title: 'Estatua de las madres', text: 'Estatua creada en 1908 por Jose Luis'},
        {title: 'Estatua de las madres', text: 'Estatua creada en 1908 por Jose Luis'}
    ]

  return (
    <div>
        <div>
            <p>Estatuas</p>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:mt-10 lg:grid-cols-3 lg:mt-16 gap-8 p-4'>
                {estatuas.map((estatua, i) => {
                    return <Card
                        key={i}
                        title={estatua.title}
                        text={estatua.text}
                    />
                })}
            </div>
    </div>
  )
}

export default page