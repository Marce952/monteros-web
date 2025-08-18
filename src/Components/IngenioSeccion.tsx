import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardBody, CardHeader } from '@nextui-org/react';

export default function IngenioSeccion() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 text-black">
            Orgullo de Monteros
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Conoce los dos íconos que representan el corazón industrial y deportivo
            de nuestra querida ciudad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Ingenio Ñuñorco */}
          <Card className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1607980276836-232ac6344978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWdhciUyMGZhY3RvcnklMjBpbmR1c3RyaWFsfGVufDF8fHx8MTc1NTUyNTUxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Ingenio Ñuñorco"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className='p-4'>
              <h3 className="text-center text-black">Ingenio Ñuñorco</h3>
            </CardHeader>
            <CardBody className='p-4'>
              <p className="text-gray-700 mb-4">
                El corazón industrial de Monteros, el Ingenio Ñuñorco es una de las fábricas
                azucareras más importantes de la región. Fundado en 1876, ha sido motor
                económico y fuente de trabajo para generaciones de monterenses.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-black">Fundación:</span>
                  <span className="text-sm text-gray-700">1876</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-black">Actividad:</span>
                  <span className="text-sm text-gray-700">Producción azucarera</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-black">Empleados:</span>
                  <span className="text-sm text-gray-700">+500 familias</span>
                </div>
              </div>
            </CardBody>
          </Card>

          {/* Estadio Ñuñorco */}
          <Card className="overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="relative h-64">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1596209949637-c7070e120863?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHN0YWRpdW0lMjBhcmdlbnRpbmF8ZW58MXx8fHwxNzU1NTI1NTE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Estadio Ñuñorco"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader className='p-4'>
              <h3 className="text-center text-black">Estadio Ñuñorco</h3>
            </CardHeader>
            <CardBody className='p-4'>
              <p className="text-gray-700 mb-4">
                Hogar del Club Atlético Ñuñorco, nuestro querido equipo de fútbol que
                representa con orgullo los colores de Monteros. El estadio es punto de
                encuentro y celebración para toda la comunidad deportiva.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-black">Equipo:</span>
                  <span className="text-sm text-gray-700">Club Atlético Ñuñorco</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-black">Capacidad:</span>
                  <span className="text-sm text-gray-700">8,000 espectadores</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-black">Liga:</span>
                  <span className="text-sm text-gray-700">Torneo Regional</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}