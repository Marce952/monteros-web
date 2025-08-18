import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';

export default function ActivitiesSection() {
  const activities = [
    {
      title: "Trepada al Indio",
      description: "Una tradicional competencia de montañismo que reúne a aventureros de toda la región para conquistar nuestras hermosas montañas.",
      image: "/img/El indio.jpg",
      month: "Septiembre"
    },
    {
      title: "Festival de Folclore",
      description: "El evento cultural más importante del año, donde artistas locales y nacionales celebran nuestras raíces musicales.",
      image: "/img/festival del folclore.jpg",
      month: "Octubre"
    },
    {
      title: "Feria de Artesanías",
      description: "Una muestra de la creatividad local con productos únicos hechos por artesanos de Monteros y la región.",
      image: "/img/feria de artesanias.jpg",
      month: "Julio"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-black">
            Eventos y Actividades Anuales
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Durante todo el año, Monteros se viste de fiesta con eventos que celebran
            nuestra cultura, tradiciones y el espíritu aventurero de nuestra gente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card key={index} className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <ImageWithFallback
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-[var(--primary)] text-primary-foreground px-3 py-1 rounded-full text-sm">
                  {activity.month}
                </div>
              </div>
              <CardHeader className='p-4 font-bold'>
                <h2 className="text-black">{activity.title}</h2>
              </CardHeader>
              <CardBody className='p-4'>
                <p className="text-gray-700">
                  {activity.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}