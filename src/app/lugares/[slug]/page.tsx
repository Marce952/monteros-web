import Link from 'next/link';
import { notFound } from 'next/navigation';
import { lugares, getLugarBySlug, categorias } from '@/data/lugares';

export function generateStaticParams() {
  return lugares.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const lugar = getLugarBySlug(params.slug);
  if (!lugar) return { title: 'No encontrado | Monteros' };
  return {
    title: `${lugar.nombre} | Monteros, Tucumán`,
    description: lugar.descripcionCorta,
  };
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://monteros.com.ar';

export default function LugarDetallePage({ params }: { params: { slug: string } }) {
  const lugar = getLugarBySlug(params.slug);
  if (!lugar) notFound();

  const pageUrl = `${SITE_URL}/lugares/${lugar.slug}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(pageUrl)}&color=15803d&bgcolor=fafaf9&margin=10`;
  const cat = categorias[lugar.categoria];

  return (
    <article className="min-h-screen bg-[var(--background)] pb-20 pt-24 md:pt-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">

        {/* Back */}
        <Link
          href="/lugares"
          className="font-sans inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] transition hover:text-emerald-900"
        >
          <span aria-hidden>←</span> Ver todos los lugares
        </Link>

        {/* Header */}
        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${cat.color}`}>
              {cat.label}
            </span>
            {lugar.horarios && (
              <span className="rounded-full border border-stone-200 px-3 py-1 text-xs text-stone-500 font-sans">
                {lugar.horarios}
              </span>
            )}
          </div>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-stone-900 md:text-5xl leading-tight">
            {lugar.nombre}
          </h1>
          <p className="font-sans mt-4 text-lg leading-relaxed text-stone-600">
            {lugar.descripcionCorta}
          </p>
          {lugar.ubicacion && (
            <p className="font-sans mt-3 flex items-center gap-1.5 text-sm text-stone-500">
              <svg className="w-4 h-4 shrink-0 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {lugar.ubicacion}
            </p>
          )}
        </header>

        {/* Imagen principal */}
        <div className="relative mt-8 overflow-hidden rounded-2xl border border-stone-200 shadow-lg">
          <img
            src={lugar.imagen}
            alt={lugar.nombre}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        {/* Galería */}
        {lugar.imagenes && lugar.imagenes.length > 1 && (
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {lugar.imagenes.slice(1).map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-stone-200">
                <img
                  src={img}
                  alt={`${lugar.nombre} - imagen ${i + 2}`}
                  className="aspect-[4/3] w-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        )}

        {/* Historia */}
        <div className="mt-10 rounded-2xl bg-stone-50 border border-stone-200 p-6 md:p-8">
          <h2 className="font-display text-2xl font-semibold text-stone-900 mb-4">Historia</h2>
          <p className="font-sans text-base leading-relaxed text-stone-700 whitespace-pre-line">
            {lugar.historia}
          </p>
        </div>

        {/* Secciones detalladas */}
        {lugar.secciones.length > 0 && (
          <div className="mt-10 space-y-8">
            {lugar.secciones.map((seccion) => (
              <section key={seccion.titulo}>
                <h2 className="font-display text-xl font-semibold text-stone-900 flex items-center gap-2">
                  <span className="inline-block h-5 w-1 rounded-full bg-[var(--primary)]" />
                  {seccion.titulo}
                </h2>
                <p className="font-sans mt-3 text-base leading-relaxed text-stone-700">
                  {seccion.contenido}
                </p>
              </section>
            ))}
          </div>
        )}

        {/* Datos clave */}
        {lugar.datos && lugar.datos.length > 0 && (
          <div className="mt-10">
            <h2 className="font-display text-xl font-semibold text-stone-900 mb-4">Datos clave</h2>
            <dl className="grid gap-3 sm:grid-cols-2">
              {lugar.datos.map((dato) => (
                <div
                  key={dato.label}
                  className="rounded-xl border border-stone-200 bg-white px-5 py-4"
                >
                  <dt className="font-sans text-xs font-semibold uppercase tracking-wider text-stone-400">
                    {dato.label}
                  </dt>
                  <dd className="font-sans mt-1 text-base font-medium text-stone-900">
                    {dato.valor}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {/* QR Code */}
        <div className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 md:p-8">
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
            <div className="shrink-0 rounded-xl overflow-hidden border-2 border-emerald-200 bg-white p-3 shadow-sm">
              <img
                src={qrUrl}
                alt={`Código QR para ${lugar.nombre}`}
                width={180}
                height={180}
                className="block"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-display text-xl font-semibold text-emerald-900">
                Código QR de este lugar
              </h2>
              <p className="font-sans mt-2 text-sm leading-relaxed text-emerald-800">
                Imprimí o descargá este QR para colocarlo en el lugar físico. Quien lo escanee
                llegará directamente a esta página con toda la historia e información.
              </p>
              <p className="font-sans mt-3 text-xs text-emerald-700 break-all">
                {pageUrl}
              </p>
              <a
                href={`https://api.qrserver.com/v1/create-qr-code/?size=800x800&data=${encodeURIComponent(pageUrl)}&color=15803d&bgcolor=fafaf9&margin=20`}
                download={`qr-${lugar.slug}.png`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans mt-4 inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar QR en alta resolución
              </a>
            </div>
          </div>
        </div>

        {/* Navegación entre lugares */}
        <div className="mt-12 rounded-2xl border border-stone-200 bg-stone-50 p-6">
          <p className="font-sans text-stone-700 text-center">
            ¿Querés seguir explorando Monteros?{' '}
            <Link
              href="/lugares"
              className="font-semibold text-[var(--primary)] underline-offset-2 hover:underline"
            >
              Ver todos los lugares
            </Link>
            {' '}o volvé al{' '}
            <Link
              href="/"
              className="font-semibold text-[var(--primary)] underline-offset-2 hover:underline"
            >
              inicio
            </Link>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
