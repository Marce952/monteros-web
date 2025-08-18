import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';

export default function ReasonsSeccion() {
  const reasons = [
    {
      title: "Festivales Únicos",
      description: "Experimenta la auténtica cultura tucumana en nuestros festivales de folclore que reúnen a los mejores artistas del país.",
      image: "/img/festival del folclore 2.jpg"
    },
    {
      title: "Gastronomía Tradicional",
      description: "Degusta los sabores más auténticos del norte argentino, desde empanadas tucumanas hasta dulces regionales.",
      image: "/img/gastronomia.jpg"
    },
    {
      title: "Espectáculos Culturales",
      description: "Disfruta de espectáculos de danza folclórica, música en vivo y presentaciones artísticas durante todo el año.",
      image: "/img/plaza.jpg"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-black">
            ¿Por Qué Visitar Monteros?
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Descubre las tres razones principales que hacen de Monteros un destino
            imperdible en el corazón de Tucumán.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg">
                <ImageWithFallback
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl mb-4 text-black">
                {reason.title}
              </h3>
              <p className="text-gray-700">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}