import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import SectionHeading from './SectionHeading';

export default function IngenioSeccion() {
  return (
    <section className="relative border-t border-stone-200/80 bg-gradient-to-b from-stone-100 to-stone-50 py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Identidad" title="Orgullo de Monteros">
          Conocé los dos íconos que representan el corazón industrial y deportivo
          de nuestra querida ciudad.
        </SectionHeading>

        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          <Card className="group overflow-hidden border border-stone-200/90 bg-white shadow-sm transition hover:shadow-xl">
            <div className="relative h-64 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1607980276836-232ac6344978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWdhciUyMGZhY3RvcnklMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc1NTUyNTUxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Ingenio Ñuñorco"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <CardHeader className="flex flex-col items-center px-5 pt-6">
              <h3 className="font-display text-xl font-semibold text-stone-900">Ingenio Ñuñorco</h3>
            </CardHeader>
            <CardBody className="px-5 pb-6 pt-0">
              <p className="font-sans mt-2 text-[15px] leading-relaxed text-stone-600">
                El corazón industrial de Monteros, el Ingenio Ñuñorco es una de las fábricas
                azucareras más importantes de la región. Fundado en 1876, ha sido motor
                económico y fuente de trabajo para generaciones de monterenses.
              </p>
              <dl className="font-sans mt-6 space-y-3 border-t border-stone-200 pt-5 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="font-medium text-stone-800">Fundación</dt>
                  <dd className="text-stone-600">1876</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-medium text-stone-800">Actividad</dt>
                  <dd className="text-stone-600">Producción azucarera</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-medium text-stone-800">Empleados</dt>
                  <dd className="text-stone-600">+500 familias</dd>
                </div>
              </dl>
            </CardBody>
          </Card>

          <Card className="group overflow-hidden border border-stone-200/90 bg-white shadow-sm transition hover:shadow-xl">
            <div className="relative h-64 overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1596209949637-c7070e120863?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHN0YWRpdW0lMjBhcmdlbnRpbmF8ZW58MXx8fHwxNzU1NTI1NTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Estadio Ñuñorco"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <CardHeader className="flex flex-col items-center px-5 pt-6">
              <h3 className="font-display text-xl font-semibold text-stone-900">Estadio Ñuñorco</h3>
            </CardHeader>
            <CardBody className="px-5 pb-6 pt-0">
              <p className="font-sans mt-2 text-[15px] leading-relaxed text-stone-600">
                Hogar del Club Atlético Ñuñorco, nuestro querido equipo de fútbol que
                representa con orgullo los colores de Monteros. El estadio es punto de
                encuentro y celebración para toda la comunidad deportiva.
              </p>
              <dl className="font-sans mt-6 space-y-3 border-t border-stone-200 pt-5 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="font-medium text-stone-800">Equipo</dt>
                  <dd className="text-right text-stone-600">Club Atlético Ñuñorco</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-medium text-stone-800">Capacidad</dt>
                  <dd className="text-stone-600">8.000 espectadores</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-medium text-stone-800">Liga</dt>
                  <dd className="text-stone-600">Torneo Regional</dd>
                </div>
              </dl>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
