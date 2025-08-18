import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">
            Galería de Monteros
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explora la belleza de nuestra ciudad a través de imágenes y video que capturan
            la esencia de Monteros en cada momento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Video Section */}
          <div className="lg:col-span-1">
            <h3 className="text-xl mb-4 text-center">
              Video Promocional de Monteros
            </h3>
            <div className="bg-muted rounded-lg overflow-hidden h-[17rem]">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-6 h-6 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground">
                    Video de Monteros
                    <br />
                    <span className="text-sm">Próximamente disponible</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Photos Grid */}
          <div className="lg:col-span-1">
            <h3 className="text-xl mb-4 text-center">
              Fotos de la Ciudad
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {photos.map((photo, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
                  <ImageWithFallback
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
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