'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Fraunces, DM_Sans } from 'next/font/google';

const fraunces = Fraunces({ subsets: ['latin'], weight: ['400', '700'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

// ─── Tipos ────────────────────────────────────────────────────────────────────

type Categoria =
  | 'biografia'
  | 'performance'
  | 'pintura'
  | 'grabado'
  | 'teatro'
  | 'drag';

interface Hito {
  anio: string;
  titulo: string;
  descripcion: string;
  imagen?: string;
  categorias: Categoria[];
}

// ─── Datos ────────────────────────────────────────────────────────────────────

const hitos: Hito[] = [
  {
    anio: '1970',
    titulo: 'Nacimiento en Monteros',
    descripcion:
      "Héctor Rodolfo Bulacio nace en Monteros, Tucumán, el 1 de octubre. Hijo de Rodolfo Bulacio y Olga 'Porota'. Crece rodeado del paisaje tucumano que más tarde teñirá su obra.",
    imagen: '/img/rodo/rodo-nino.png',
    categorias: ['biografia'],
  },
  {
    anio: '1986',
    titulo: "Participa en 'La Expresión'",
    descripcion:
      "Se integra al grupo cultural 'La Expresión', donde explora la poesía y el dibujo junto a jóvenes artistas de Monteros. Es su primer espacio de pertenencia creativa colectiva.",
    categorias: ['biografia'],
  },
  {
    anio: '1988',
    titulo: 'Murales en la Escuela Normal',
    descripcion:
      'Realiza tres murales en la Escuela Normal Superior Tte. Gral. Julio A. Roca de Monteros. Su primera intervención pública: el muro como soporte y la escuela como museo improvisado.',
    imagen: '/img/rodo/rodo-inicios.png',
    categorias: ['pintura'],
  },
  {
    anio: '1989',
    titulo: 'Performance "Novia con basura"',
    descripcion:
      'En Monteros, durante un evento, entra vestido de novia y comienza a arrojar bolsas de basura al público. La gente se levanta y lo persigue; sale corriendo, levantándose el vestido, hasta esconderse en la casa de su abuela. Una de sus performances fundacionales.',
    imagen: '/img/rodo/perfomance-vestido.png',
    categorias: ['performance', 'drag'],
  },
  {
    anio: '1990',
    titulo: "Surge 'La Rodo'",
    descripcion:
      "Comienza a explorar la performance y el arte textil. Emerge su alter ego 'La Rodo', desafiando convenciones de género. Asiste a su primer taller de grabado y abre una línea de trabajo que sostendrá durante toda la década.",
    imagen: '/img/rodo/1990.jpg',
    categorias: ['performance', 'drag', 'grabado'],
  },
  {
    anio: '1991',
    titulo: 'Performances en Buenos Aires',
    descripcion:
      'Viaja a Buenos Aires y se integra a colectivos artísticos de la escena under porteña. Sus performances dialogan con la movida queer y experimental de comienzos de los noventa.',
    categorias: ['performance', 'drag'],
  },
  {
    anio: '1992',
    titulo: "Exposición 'Tenis' en el Virla",
    descripcion:
      "Participa en la mítica exposición 'Tenis' en el Centro Cultural Eugenio Flavio Virla. La muestra lo consolida dentro de la vanguardia tucumana y abre puertas para los años siguientes.",
    imagen: '/img/rodo/1992.jpg',
    categorias: ['pintura'],
  },
  {
    anio: '1993',
    titulo: 'Muestra en la Facultad de Artes UNT',
    descripcion:
      'Expone en la Facultad de Artes de la Universidad Nacional de Tucumán y comienza a circular en fanzines y publicaciones independientes. Su obra se inscribe en redes editoriales alternativas.',
    categorias: ['pintura', 'grabado'],
  },
  {
    anio: '1994',
    titulo: 'Aero Arte y circuito cultural',
    descripcion:
      'Participa en exposiciones en Aero Arte y otros espacios culturales de Tucumán. Año de intensa circulación regional, con foco en la obra plástica y el grabado.',
    categorias: ['pintura', 'grabado'],
  },
  {
    anio: '1995',
    titulo: "Indumentaria, drag y 'Collections'",
    descripcion:
      "Amalgama diseño de indumentaria con performance drag a través del ciclo 'Collections'. Participa en la obra de teatro 'Se dice de mí' y en Junior Grasso Collective Jóvenes Talentos. Identidad artística polifacética en su máximo despliegue.",
    imagen: '/img/rodo/karakatanga-en-el-parque.png',
    categorias: ['drag', 'performance', 'teatro'],
  },
  {
    anio: '1996',
    titulo: 'Segundo premio en el Salón Navarro',
    descripcion:
      "Recibe el segundo premio de pintura en el V Salón de Artes Plásticas Carlos María Navarro (FAUNT). Presenta el ciclo 'Tempo de Drag' y la muestra 'Objeto' en el Centro Cultural Eugenio Flavio Virla.",
    categorias: ['pintura', 'drag', 'performance'],
  },
  {
    anio: '1997',
    titulo: 'Legado inmortal',
    descripcion:
      'Fallece en Tucumán el 10 de marzo. Su obra se convierte en referente del arte contemporáneo del NOA, destacando por su libertad creativa, su sensibilidad y su capacidad de cruzar disciplinas.',
    imagen: '/img/rodo/1997.jpg',
    categorias: ['biografia'],
  },
];

const filtros: { id: Categoria | 'todos'; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'biografia', label: 'Biografía' },
  { id: 'performance', label: 'Performance' },
  { id: 'pintura', label: 'Pintura' },
  { id: 'grabado', label: 'Grabado' },
  { id: 'teatro', label: 'Teatro' },
  { id: 'drag', label: 'Drag' },
];

const categoriaLabel: Record<Categoria, string> = {
  biografia: 'Biografía',
  performance: 'Performance',
  pintura: 'Pintura',
  grabado: 'Grabado',
  teatro: 'Teatro',
  drag: 'Drag',
};

// ─── Tarjeta de hito ──────────────────────────────────────────────────────────

interface HitoCardProps {
  hito: Hito;
  index: number;
  atenuado: boolean;
}

const HitoCard: React.FC<HitoCardProps> = ({ hito, index, atenuado }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [expandido, setExpandido] = useState(false);
  const ladoIzquierdo = index % 2 === 0;

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const tieneImagen = Boolean(hito.imagen);

  return (
    <div
      ref={cardRef}
      className={`relative pl-16 md:pl-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 transition-opacity duration-500 ${
        atenuado ? 'opacity-25' : 'opacity-100'
      }`}
    >
      {/* Nodo en la línea — mobile (izquierda) */}
      <div className="absolute left-[18px] top-7 md:hidden">
        <div className="relative">
          <div className="h-3 w-3 rounded-full bg-[#FFA500] ring-4 ring-[#FFA500]/15" />
        </div>
      </div>

      {/* Columna izquierda (desktop) */}
      <div
        className={`hidden md:block ${ladoIzquierdo ? '' : 'md:invisible md:pointer-events-none'}`}
      >
        {ladoIzquierdo && (
          <CardContenido
            hito={hito}
            visible={visible}
            expandido={expandido}
            onToggle={() => setExpandido((v) => !v)}
            alineacion="right"
            tieneImagen={tieneImagen}
          />
        )}
      </div>

      {/* Nodo central (desktop) */}
      <div className="hidden md:flex flex-col items-center pt-8">
        <div className="h-4 w-4 rounded-full bg-[#FFA500] ring-4 ring-[#FFA500]/15" />
      </div>

      {/* Columna derecha (desktop) o tarjeta única (mobile) */}
      <div className={ladoIzquierdo ? 'hidden md:block md:invisible md:pointer-events-none' : ''}>
        {!ladoIzquierdo && (
          <CardContenido
            hito={hito}
            visible={visible}
            expandido={expandido}
            onToggle={() => setExpandido((v) => !v)}
            alineacion="left"
            tieneImagen={tieneImagen}
          />
        )}
        <div className="md:hidden">
          <CardContenido
            hito={hito}
            visible={visible}
            expandido={expandido}
            onToggle={() => setExpandido((v) => !v)}
            alineacion="left"
            tieneImagen={tieneImagen}
          />
        </div>
      </div>
    </div>
  );
};

// ─── Contenido reutilizable de la tarjeta ─────────────────────────────────────

interface CardContenidoProps {
  hito: Hito;
  visible: boolean;
  expandido: boolean;
  onToggle: () => void;
  alineacion: 'left' | 'right';
  tieneImagen: boolean;
}

const CardContenido: React.FC<CardContenidoProps> = ({
  hito,
  visible,
  expandido,
  onToggle,
  alineacion,
  tieneImagen,
}) => {
  const descripcionMobileCorta =
    hito.descripcion.length > 140
      ? hito.descripcion.slice(0, 140).trimEnd() + '…'
      : hito.descripcion;

  return (
    <article
      className={`group mb-14 md:mb-20 transform transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${alineacion === 'right' ? 'md:text-right' : 'md:text-left'}`}
    >
      {/* Año dominante */}
      <div
        className={`flex items-baseline gap-3 mb-3 ${
          alineacion === 'right' ? 'md:justify-end' : 'md:justify-start'
        }`}
      >
        <span
          className={`text-5xl md:text-6xl leading-none text-[#FFA500] ${fraunces.className}`}
          style={{ fontWeight: 700, letterSpacing: '-0.02em' }}
        >
          {hito.anio}
        </span>
        <span className={`text-[10px] uppercase tracking-[0.25em] text-white/40 ${dmSans.className}`}>
          Hito
        </span>
      </div>

      {/* Tarjeta editorial */}
      <div
        className={`relative border border-white/10 bg-white/[0.02] backdrop-blur-sm p-5 md:p-6 transition-all duration-300 hover:border-[#FFA500]/40 hover:bg-white/[0.04] md:hover:-translate-y-1 md:hover:shadow-[0_18px_36px_-18px_rgba(255,165,0,0.25)]`}
      >
        <h3
          className={`text-xl md:text-2xl text-white mb-3 leading-snug ${fraunces.className}`}
          style={{ fontWeight: 700 }}
        >
          {hito.titulo}
        </h3>

        {/* Imagen / placeholder */}
        <div
          className={`mb-4 ${
            alineacion === 'right' ? 'md:flex md:justify-end' : ''
          }`}
        >
          {tieneImagen && hito.imagen ? (
            <div className="relative w-full md:w-56 aspect-[4/3] overflow-hidden bg-[#111]">
              <img
                src={hito.imagen}
                alt={hito.titulo}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover grayscale-[0.15] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
            </div>
          ) : (
            <div className="hidden md:flex w-32 h-32 items-center justify-center bg-[#0d0d0d] border border-white/5">
              <span
                className={`text-[#FFA500]/70 text-3xl tracking-[0.15em] ${fraunces.className}`}
                style={{ fontWeight: 700 }}
              >
                RB
              </span>
            </div>
          )}
        </div>

        {/* Descripción */}
        <p
          className={`text-sm md:text-[15px] leading-relaxed text-white/70 ${dmSans.className}`}
        >
          <span className="md:hidden">
            {expandido ? hito.descripcion : descripcionMobileCorta}
          </span>
          <span className="hidden md:inline">{hito.descripcion}</span>
        </p>

        {/* Botón Ver más (solo mobile, solo si la descripción es larga) */}
        {hito.descripcion.length > 140 && (
          <button
            type="button"
            onClick={onToggle}
            className={`md:hidden mt-3 text-[11px] uppercase tracking-[0.2em] text-[#FFA500] hover:text-white transition-colors ${dmSans.className}`}
          >
            {expandido ? 'Ver menos' : 'Ver más'}
          </button>
        )}

        {/* Etiquetas */}
        <div
          className={`mt-5 flex flex-wrap gap-2 ${
            alineacion === 'right' ? 'md:justify-end' : 'md:justify-start'
          }`}
        >
          {hito.categorias.map((cat) => (
            <span
              key={cat}
              className={`inline-flex items-center px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] border border-white/15 text-white/60 ${dmSans.className}`}
            >
              {categoriaLabel[cat]}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

// ─── Componente principal ─────────────────────────────────────────────────────

const TimelineRodo: React.FC = () => {
  const [filtroActivo, setFiltroActivo] = useState<Categoria | 'todos'>('todos');

  const hitosAtenuados = useMemo(() => {
    if (filtroActivo === 'todos') return new Set<number>();
    const set = new Set<number>();
    hitos.forEach((h, i) => {
      if (!h.categorias.includes(filtroActivo)) set.add(i);
    });
    return set;
  }, [filtroActivo]);

  return (
    <section className="relative w-full bg-black py-20 md:py-28 overflow-hidden">
      {/* Encabezado */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 mb-12 md:mb-16">
        <p
          className={`text-xs uppercase tracking-[0.3em] text-[#FFA500] mb-4 ${dmSans.className}`}
        >
          Línea de tiempo
        </p>
        <h2
          className={`text-4xl md:text-6xl text-white leading-[1.05] tracking-tight ${fraunces.className}`}
          style={{ fontWeight: 700 }}
        >
          Vida y obra de<br />
          <span className="text-[#FFA500]">La Rodo</span>
        </h2>
        <p
          className={`mt-5 max-w-xl text-sm md:text-base text-white/55 font-light leading-relaxed ${dmSans.className}`}
        >
          Un archivo vivo, año por año, de las performances, pinturas, grabados y
          apariciones drag que definieron a Héctor Rodolfo Bulacio entre 1970 y 1997.
        </p>
      </div>

      {/* Filtros sticky */}
      <div
        className={`sticky top-0 z-30 bg-black/85 backdrop-blur-md border-y border-white/10 ${dmSans.className}`}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {filtros.map((f) => {
            const activo = filtroActivo === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setFiltroActivo(f.id)}
                className={`shrink-0 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.2em] border transition-colors ${
                  activo
                    ? 'border-[#FFA500] bg-[#FFA500] text-black'
                    : 'border-white/15 text-white/60 hover:border-[#FFA500]/50 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Línea de tiempo */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-10 pt-14 md:pt-20">
        {/* Línea vertical — mobile (izquierda) */}
        <div className="absolute left-[30px] top-14 bottom-0 w-px bg-white/10 md:hidden" />
        {/* Línea vertical — desktop (centro) */}
        <div className="hidden md:block absolute left-1/2 top-20 bottom-0 w-px -translate-x-1/2 bg-white/10" />

        <div className="relative">
          {hitos.map((hito, i) => (
            <HitoCard
              key={hito.anio + hito.titulo}
              hito={hito}
              index={i}
              atenuado={hitosAtenuados.has(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineRodo;
