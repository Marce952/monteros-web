import Link from 'next/link'
import React from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'

const HomeSeccion = () => {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="/img/Monteros3.jpg"
          alt="Paisaje de Monteros con montañas"
          className="h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/55 to-stone-950/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(21,128,61,0.15),transparent_55%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-28 pb-16 text-center text-white md:pt-32">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200/90 md:text-sm">
          Tucumán, Argentina
        </p>
        <h1 className="font-display mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
          Bienvenidos a Monteros
        </h1>
        <p className="font-sans mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
          Descubrí la magia de nuestra ciudad tucumana, donde la tradición, la cultura y la historia se encuentran
          en cada rincón. Un lugar lleno de festivales, gastronomía única y paisajes inolvidables.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <a
            href="#razones"
            className="font-sans inline-flex min-h-[48px] min-w-[200px] items-center justify-center rounded-xl bg-[var(--primary)] px-8 py-3 text-base font-semibold text-[var(--primary-foreground)] shadow-lg shadow-emerald-950/30 transition hover:bg-emerald-800 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Explorar Monteros
          </a>
          <Link
            href="/entidades"
            className="font-sans inline-flex items-center gap-2 text-base font-medium text-white/95 underline decoration-emerald-400/80 decoration-2 underline-offset-4 transition hover:text-white hover:decoration-emerald-300"
          >
            Conocé más
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeSeccion
