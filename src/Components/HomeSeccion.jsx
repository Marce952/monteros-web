import Link from 'next/link'
import React from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'

const stats = [
  { valor: '271', unidad: 'años', descripcion: 'de historia' },
  { valor: '23.000+', unidad: 'hab.', descripcion: 'ciudad capital' },
  { valor: '2°', unidad: 'festival', descripcion: 'más antiguo del país' },
  { valor: '40.000', unidad: 'fieles', descripcion: 'cada octubre' },
]

const HomeSeccion = () => {
  return (
    <section id="inicio" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="/img/Monteros3.jpg"
          alt="Paisaje de Monteros con montañas"
          className="h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/55 to-stone-950/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(21,128,61,0.18),transparent_55%)]" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pt-28 pb-10 text-center text-white md:pt-36">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300/90 md:text-sm">
          Tucumán · Argentina · Fundada en 1754
        </p>
        <h1 className="font-display mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
          Bienvenidos a Monteros
        </h1>
        <p className="font-sans mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
          La capital de la randa, la fortaleza del folklore y la ciudad que guarda las raíces
          de Tucumán. A 53 km de la capital, con historia colonial, naturaleza virgen y
          una identidad cultural única en Argentina.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <Link
            href="/lugares"
            className="font-sans inline-flex min-h-[48px] min-w-[200px] items-center justify-center rounded-xl bg-[var(--primary)] px-8 py-3 text-base font-semibold text-[var(--primary-foreground)] shadow-lg shadow-emerald-950/30 transition hover:bg-emerald-800 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Lugares históricos
          </Link>
          <a
            href="#actividades"
            className="font-sans inline-flex items-center gap-2 text-base font-medium text-white/90 underline decoration-emerald-400/70 decoration-2 underline-offset-4 transition hover:text-white hover:decoration-emerald-300"
          >
            Ver eventos y actividades
          </a>
        </div>
      </div>

      {/* Barra de stats */}
      <div className="relative z-10 w-full px-4 pb-10">
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.descripcion} className="flex flex-col items-center gap-0.5 bg-stone-950/30 px-4 py-5 text-center">
              <div className="font-display text-2xl font-bold text-white md:text-3xl">
                {s.valor}{' '}
                <span className="text-base font-semibold text-emerald-300">{s.unidad}</span>
              </div>
              <div className="font-sans text-xs text-white/60 uppercase tracking-wider">{s.descripcion}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg className="h-6 w-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

export default HomeSeccion
