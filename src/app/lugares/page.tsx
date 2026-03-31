import Link from 'next/link';
import { lugares, categorias } from '@/data/lugares';

export const metadata = {
  title: 'Lugares de Monteros | Descubrí la historia y cultura',
  description:
    'Explorá los lugares históricos, culturales, naturales y religiosos de Monteros, Tucumán. Historia, información y acceso directo con QR.',
};

export default function LugaresPage() {
  const categoriasOrden: (keyof typeof categorias)[] = [
    'histórico',
    'religioso',
    'cultural',
    'natural',
    'evento',
  ];

  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-stone-900 py-24 pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/img/Monteros.jpg')" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/40 to-stone-900/80" />
        <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-6">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.25em] text-amber-400 mb-4">
            Monteros · Tucumán
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
            Lugares para descubrir
          </h1>
          <p className="font-sans mt-5 max-w-2xl mx-auto text-lg leading-relaxed text-white/80">
            Cada lugar tiene su historia. Escaneá el QR en la ciudad o explorá desde acá para conocer
            la historia completa, datos y todo lo que necesitás saber.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categoriasOrden.map((cat) => (
              <span
                key={cat}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${categorias[cat].color}`}
              >
                {categorias[cat].label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de lugares */}
      <section className="mx-auto max-w-6xl px-4 py-16 lg:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lugares.map((lugar) => {
            const cat = categorias[lugar.categoria];
            return (
              <Link
                key={lugar.slug}
                href={`/lugares/${lugar.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-xl hover:shadow-stone-900/8 hover:-translate-y-0.5"
              >
                {/* Imagen */}
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  <img
                    src={lugar.imagen}
                    alt={lugar.nombre}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span
                    className={`absolute top-3 right-3 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${cat.color}`}
                  >
                    {cat.label}
                  </span>
                </div>

                {/* Contenido */}
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h2 className="font-display text-lg font-semibold text-stone-900 leading-snug group-hover:text-[var(--primary)] transition-colors">
                    {lugar.nombre}
                  </h2>
                  <p className="font-sans text-sm leading-relaxed text-stone-600 flex-1">
                    {lugar.descripcionCorta}
                  </p>
                  {lugar.ubicacion && (
                    <p className="font-sans text-xs text-stone-400 flex items-center gap-1 mt-1">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {lugar.ubicacion}
                    </p>
                  )}
                  <div className="mt-3 flex items-center gap-1.5 font-sans text-sm font-semibold text-[var(--primary)]">
                    Ver historia completa
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Info QR */}
      <section className="bg-stone-50 border-t border-stone-200 py-16 px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--primary)] text-white">
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 3.5V16M4 4h4v4H4zm12 0h4v4h-4zM4 16h4v4H4z" />
            </svg>
          </div>
          <h2 className="font-display text-2xl font-semibold text-stone-900 md:text-3xl">
            Códigos QR en la ciudad
          </h2>
          <p className="font-sans mt-4 text-base leading-relaxed text-stone-600">
            En cada lugar histórico de Monteros vas a encontrar un código QR que te lleva directamente
            a la página con toda la historia, datos y fotos. Solo escaneá con la cámara de tu celular.
          </p>
        </div>
      </section>
    </main>
  );
}
