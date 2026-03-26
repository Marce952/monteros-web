import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import SectionHeading from './SectionHeading';

export default function GallerySection() {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1520751256043-b5735693d741?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmdlbnRpbmElMjBsYW5kc2NhcGUlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzU1NTI1NTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Paisajes de Monteros"
    },
    {
      src: "https://images.unsplash.com/photo-1700677644011-bc36f86937ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbmlhbCUyMGFyY2hpdGVjdHVyZSUyMGFyZ2VudGluYXxlbnwxfHx8fDE3NTU1MjU1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Arquitectura colonial"
    },
    {
      src: "https://images.unsplash.com/photo-1627904198534-29888654686c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmdlbnRpbmElMjBmb2xrJTIwZmVzdGl2YWwlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NTU1MjU1MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Festival de folclore"
    },
    {
      src: "https://images.unsplash.com/photo-1724709166740-96947d362a17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kaWNyYWZ0cyUyMGFydGlzYW4lMjBtYXJrZXR8ZW58MXx8fHwxNzU1NTI1NTE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Artesanías locales"
    }
  ];

  return (
    <section className="relative bg-white py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Imágenes" title="Galería de Monteros">
          Explorá la belleza de nuestra ciudad a través de imágenes y video que capturan
          la esencia de Monteros en cada momento.
        </SectionHeading>

        <div className="mb-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 className="font-display mb-4 text-center text-xl font-semibold text-stone-900 md:text-left">
              Video promocional
            </h3>
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 shadow-inner">
              <div className="flex h-[17rem] items-center justify-center bg-gradient-to-br from-emerald-50 via-stone-50 to-amber-50/40">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] shadow-lg shadow-emerald-900/10">
                    <svg className="ml-1 h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="font-sans text-stone-600">
                    Video de Monteros
                    <br />
                    <span className="text-sm text-stone-500">Próximamente disponible</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display mb-4 text-center text-xl font-semibold text-stone-900 md:text-left">
              Fotos de la ciudad
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border border-stone-200/80 shadow-sm"
                >
                  <ImageWithFallback
                    src={photo.src}
                    alt={photo.alt}
                    className="h-36 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
