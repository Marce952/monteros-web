'use client';

import React, { useMemo, useState } from 'react';
import { Tabs, Tab, Chip } from '@nextui-org/react';
import { CalendarBlank, MapPin, Clock, Star } from '@phosphor-icons/react';
import SectionHeading from './SectionHeading';
import { ImageWithFallback } from './figma/ImageWithFallback';

type EventoCalendario = {
  id: string;
  titulo: string;
  descripcion: string;
  fecha: string; // ISO YYYY-MM-DD
  hora?: string;
  lugar: string;
  categoria: 'Cultural' | 'Religioso' | 'Deportivo' | 'Musical' | 'Comunitario';
  imagen: string;
  destacado?: boolean;
};

// Hoy: 2026-05-20 (mock data centrada en esa fecha)
const eventos: EventoCalendario[] = [
  // Próximos
  {
    id: 'feria-artesanos-junio',
    titulo: 'Feria de Artesanos de Monteros',
    descripcion:
      'Más de 80 artesanos locales exponen sus trabajos en cuero, plata y telares en la plaza principal.',
    fecha: '2026-05-24',
    hora: '10:00',
    lugar: 'Plaza Bernabé Aráoz',
    categoria: 'Cultural',
    imagen: '/img/festival del folclore.jpg',
    destacado: true,
  },
  {
    id: 'misa-virgen',
    titulo: 'Misa en honor a la Virgen del Rosario',
    descripcion:
      'Celebración litúrgica mensual con coro juvenil y bendición especial para la comunidad.',
    fecha: '2026-05-31',
    hora: '19:30',
    lugar: 'Iglesia Nuestra Señora del Rosario',
    categoria: 'Religioso',
    imagen: '/img/Iglesias/Nta Señora del rosario.jpg',
  },
  {
    id: 'taller-rodo',
    titulo: 'Taller abierto: el legado de Rodo Bulacio',
    descripcion:
      'Encuentro abierto al público con muestra de obras inéditas y charla sobre la etapa expresionista del artista.',
    fecha: '2026-06-07',
    hora: '17:00',
    lugar: 'Museo Rodo Bulacio',
    categoria: 'Cultural',
    imagen: '/img/El indio.jpg',
    destacado: true,
  },
  {
    id: 'maraton-otono',
    titulo: 'Maratón de Otoño 10K',
    descripcion:
      'Carrera urbana solidaria a beneficio del comedor municipal. Inscripción gratuita hasta el 5 de junio.',
    fecha: '2026-06-14',
    hora: '08:00',
    lugar: 'Av. Sarmiento y circuito urbano',
    categoria: 'Deportivo',
    imagen: '/img/El indio.jpg',
  },
  {
    id: 'noche-museos',
    titulo: 'Noche de los Museos',
    descripcion:
      'Apertura nocturna gratuita del Museo Rodo Bulacio y muestras itinerantes en edificios históricos.',
    fecha: '2026-06-21',
    hora: '20:00',
    lugar: 'Centro histórico de Monteros',
    categoria: 'Cultural',
    imagen: '/img/festival del folclore.jpg',
    destacado: true,
  },
  {
    id: 'pena-folclorica',
    titulo: 'Peña folclórica de invierno',
    descripcion:
      'Música en vivo, empanadas y locro para esperar el inicio de la temporada invernal en familia.',
    fecha: '2026-07-05',
    hora: '21:00',
    lugar: 'Anfiteatro Municipal',
    categoria: 'Musical',
    imagen: '/img/festival del folclore.jpg',
  },

  // Pasados (últimos 30 días: entre 2026-04-20 y 2026-05-19)
  {
    id: 'aniversario-ciudad',
    titulo: '267° Aniversario de Monteros',
    descripcion:
      'Acto protocolar, desfile cívico y festival popular para celebrar un nuevo aniversario de la ciudad.',
    fecha: '2026-05-15',
    hora: '09:00',
    lugar: 'Plaza Bernabé Aráoz',
    categoria: 'Comunitario',
    imagen: '/img/festival del folclore.jpg',
    destacado: true,
  },
  {
    id: 'muestra-escuelas',
    titulo: 'Muestra anual de escuelas técnicas',
    descripcion:
      'Proyectos de innovación y oficios presentados por estudiantes de las escuelas técnicas de la región.',
    fecha: '2026-05-08',
    hora: '15:00',
    lugar: 'Escuela Técnica N° 1',
    categoria: 'Comunitario',
    imagen: '/img/El indio.jpg',
  },
  {
    id: 'concierto-camara',
    titulo: 'Concierto de cámara: cuerdas del Tucumán',
    descripcion:
      'Repertorio clásico y popular interpretado por la orquesta provincial en una velada al aire libre.',
    fecha: '2026-04-26',
    hora: '20:30',
    lugar: 'Atrio de la Iglesia Catedral',
    categoria: 'Musical',
    imagen: '/img/Iglesias/Nta Señora del rosario.jpg',
  },
];

const HOY = new Date('2026-05-20T00:00:00');

const categoriaColor: Record<EventoCalendario['categoria'], string> = {
  Cultural: 'bg-[var(--primary)]/10 text-[var(--primary)]',
  Religioso: 'bg-amber-100 text-amber-800',
  Deportivo: 'bg-emerald-100 text-emerald-800',
  Musical: 'bg-fuchsia-100 text-fuchsia-800',
  Comunitario: 'bg-sky-100 text-sky-800',
};

function formatearFecha(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  return {
    dia: d.getDate().toString().padStart(2, '0'),
    mes: d.toLocaleDateString('es-AR', { month: 'short' }).replace('.', '').toUpperCase(),
    completa: d.toLocaleDateString('es-AR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
    }),
  };
}

function diasRestantes(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  const diff = Math.round((d.getTime() - HOY.getTime()) / (1000 * 60 * 60 * 24));
  if (diff === 0) return 'Hoy';
  if (diff === 1) return 'Mañana';
  if (diff > 0) return `En ${diff} días`;
  if (diff === -1) return 'Ayer';
  return `Hace ${Math.abs(diff)} días`;
}

function EventoCard({ evento }: { evento: EventoCalendario }) {
  const fecha = formatearFecha(evento.fecha);
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-all duration-300 hover:border-[var(--primary)]/40 hover:shadow-xl hover:shadow-stone-900/5 hover:-translate-y-0.5">
      <div className="relative h-44 overflow-hidden">
        <ImageWithFallback
          src={evento.imagen}
          alt={evento.titulo}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

        <div className="absolute top-4 left-4 flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-white/95 shadow-md backdrop-blur">
          <span className="font-display text-2xl font-bold leading-none text-stone-900">
            {fecha.dia}
          </span>
          <span className="font-sans text-[10px] font-semibold tracking-widest text-[var(--primary)]">
            {fecha.mes}
          </span>
        </div>

        {evento.destacado && (
          <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-[#FFA500] px-2.5 py-1 text-xs font-semibold text-white shadow-md">
            <Star weight="fill" size={12} /> Destacado
          </div>
        )}

        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <span
            className={`rounded-full px-2.5 py-1 font-sans text-[11px] font-semibold uppercase tracking-wide ${categoriaColor[evento.categoria]}`}
          >
            {evento.categoria}
          </span>
          <span className="rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
            {diasRestantes(evento.fecha)}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <h3 className="font-display text-lg font-semibold text-stone-900 group-hover:text-[var(--primary)] transition-colors">
          {evento.titulo}
        </h3>
        <p className="font-sans mt-2 text-sm leading-relaxed text-stone-600 flex-1">
          {evento.descripcion}
        </p>

        <div className="mt-4 space-y-1.5 border-t border-stone-100 pt-3 font-sans text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <CalendarBlank size={14} className="text-[var(--primary)]" />
            <span className="capitalize">{fecha.completa}</span>
          </div>
          {evento.hora && (
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[var(--primary)]" />
              <span>{evento.hora} hs</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[var(--primary)]" />
            <span>{evento.lugar}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function EventsCalendarSeccion() {
  const [seleccion, setSeleccion] = useState<string>('proximos');

  const { proximos, destacados, recientes } = useMemo(() => {
    const hoyMs = HOY.getTime();
    const treintaDiasMs = 30 * 24 * 60 * 60 * 1000;

    const ordenAsc = [...eventos].sort((a, b) => a.fecha.localeCompare(b.fecha));

    const proximos = ordenAsc.filter(
      (e) => new Date(`${e.fecha}T00:00:00`).getTime() >= hoyMs,
    );
    const destacados = ordenAsc.filter((e) => e.destacado);
    const recientes = ordenAsc
      .filter((e) => {
        const t = new Date(`${e.fecha}T00:00:00`).getTime();
        return t < hoyMs && hoyMs - t <= treintaDiasMs;
      })
      .reverse();

    return { proximos, destacados, recientes };
  }, []);

  const listaActual =
    seleccion === 'destacados' ? destacados : seleccion === 'recientes' ? recientes : proximos;

  return (
    <section id="calendario" className="relative overflow-hidden bg-stone-50 py-20 px-4">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.35]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-stone-50 to-white" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading eyebrow="Calendario" title="Próximos eventos en Monteros">
          Una agenda viva de actividades culturales, religiosas, deportivas y comunitarias.
          Descubrí qué se viene, qué no te podés perder y qué pasó en los últimos 30 días.
        </SectionHeading>

        <div className="mb-10 flex justify-center">
          <Tabs
            aria-label="Filtros de calendario"
            selectedKey={seleccion}
            onSelectionChange={(k) => setSeleccion(String(k))}
            color="primary"
            variant="solid"
            radius="full"
            classNames={{
              tabList: 'bg-white border border-stone-200 shadow-sm p-1',
              cursor: 'bg-[var(--primary)]',
              tabContent: 'group-data-[selected=true]:text-white font-sans font-semibold',
            }}
          >
            <Tab
              key="proximos"
              title={
                <div className="flex items-center gap-2 px-1">
                  <CalendarBlank size={16} />
                  <span>Próximos</span>
                  <Chip size="sm" variant="flat" className="h-5 min-w-0 px-1.5 text-[10px]">
                    {proximos.length}
                  </Chip>
                </div>
              }
            />
            <Tab
              key="destacados"
              title={
                <div className="flex items-center gap-2 px-1">
                  <Star size={16} weight="fill" />
                  <span>Destacados</span>
                  <Chip size="sm" variant="flat" className="h-5 min-w-0 px-1.5 text-[10px]">
                    {destacados.length}
                  </Chip>
                </div>
              }
            />
            <Tab
              key="recientes"
              title={
                <div className="flex items-center gap-2 px-1">
                  <Clock size={16} />
                  <span>Últimos 30 días</span>
                  <Chip size="sm" variant="flat" className="h-5 min-w-0 px-1.5 text-[10px]">
                    {recientes.length}
                  </Chip>
                </div>
              }
            />
          </Tabs>
        </div>

        {listaActual.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-stone-300 bg-white/60 py-16 text-center font-sans text-stone-500">
            No hay eventos para mostrar en esta categoría.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listaActual.map((evento) => (
              <EventoCard key={evento.id} evento={evento} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
