import React from 'react';
import SectionHeading from './SectionHeading';
import Link from 'next/link';

const fotos = [
  { src: '/img/Monteros3.jpg', alt: 'Naturaleza y montañas de Monteros', span: 'col-span-2 row-span-2' },
  { src: '/img/Iglesias/Nta Señora del rosario.jpg', alt: 'Iglesia Nuestra Señora del Rosario' },
  { src: '/img/festival del folclore.jpg', alt: 'Festival de Folklore de Monteros' },
  { src: '/img/El indio.jpg', alt: 'Monumento al Indio – Reserva Los Sosa' },
  { src: '/img/plaza.jpg', alt: 'Plaza Bernabé Aráoz' },
  { src: '/img/feria de artesanias.jpg', alt: 'Feria de Artesanías – La Randa' },
  { src: '/img/Monteros2.jpg', alt: 'Monteros, Tucumán' },
];

export default function GallerySection() {
  return (
    <section className="relative bg-stone-950 py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(21,128,61,0.08),transparent_65%)]" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Galería"
          title="Monteros en imágenes"
          className="[&_p]:text-stone-400 [&_h2]:text-white [&_.eyebrow]:text-amber-400"
        >
          <span className="text-stone-400">
            Naturaleza, historia, fe y tradición capturadas en cada rincón de la ciudad.
          </span>
        </SectionHeading>

        {/* Grid masonry-style */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {/* Foto grande: ocupa 2x2 en md */}
          <div className="col-span-2 row-span-2 overflow-hidden rounded-2xl md:col-span-2 md:row-span-2">
            <img
              src={fotos[0].src}
              alt={fotos[0].alt}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
              style={{ minHeight: '280px' }}
            />
          </div>
          {/* Resto de fotos */}
          {fotos.slice(1).map((foto, i) => (
            <div key={i} className="overflow-hidden rounded-2xl">
              <img
                src={foto.src}
                alt={foto.alt}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
                style={{ minHeight: '130px', maxHeight: '200px' }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <Link
            href="/lugares"
            className="font-sans inline-flex items-center gap-2 rounded-xl border border-emerald-700/60 bg-emerald-950/40 px-6 py-3 text-sm font-semibold text-emerald-300 backdrop-blur-sm transition hover:bg-emerald-900/60 hover:text-white"
          >
            Explorá cada lugar con su historia completa
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
