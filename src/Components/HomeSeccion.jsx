import Link from 'next/link'
import React from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'

const HomeSeccion = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="/img/Monteros3.jpg"
          alt="Paisaje de Monteros con montañas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl mb-6 text-white">
          Bienvenidos a Monteros
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
          Descubre la magia de nuestra ciudad tucumana, donde la tradición, la cultura y la historia se encuentran
          en cada rincón. Un lugar lleno de festivales, gastronomía única y paisajes inolvidables.
        </p>
        <div className='flex gap-4 justify-center items-center'>
          <button className="bg-[var(--primary)] hover:bg-[var(primary/90)] text-primary-foreground px-8 py-3 rounded-lg transition-colors">
            Explorar Monteros
          </button>
          <a className='underline cursor-pointer' href='/entidades'>
            Conoces más
          </a>
        </div>
      </div>
    </section>
  )
}

export default HomeSeccion