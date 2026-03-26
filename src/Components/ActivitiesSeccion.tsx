import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';
import SectionHeading from './SectionHeading';

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
    <section id="actividades" className="relative overflow-hidden bg-white py-20 px-4">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.45]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stone-50/90 to-white" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading eyebrow="Agenda" title="Eventos y actividades anuales">
          Durante todo el año, Monteros se viste de fiesta con eventos que celebran
          nuestra cultura, tradiciones y el espíritu aventurero de nuestra gente.
        </SectionHeading>

        <div className="grid gap-8 md:grid-cols-3">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="group overflow-hidden border border-stone-200/80 bg-white/90 shadow-sm transition-shadow duration-300 hover:border-emerald-200/90 hover:shadow-xl hover:shadow-stone-900/5"
            >
              <div className="relative h-52 overflow-hidden">
                <ImageWithFallback
                  src={activity.image}
                  alt={activity.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 rounded-full bg-[var(--primary)] px-3.5 py-1 font-sans text-xs font-semibold uppercase tracking-wide text-[var(--primary-foreground)] shadow-md">
                  {activity.month}
                </div>
              </div>
              <CardHeader className="flex flex-col items-start gap-1 px-5 pb-0 pt-5">
                <h3 className="font-display text-xl font-semibold text-stone-900">{activity.title}</h3>
              </CardHeader>
              <CardBody className="px-5 pb-6 pt-2">
                <p className="font-sans text-[15px] leading-relaxed text-stone-600">
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
