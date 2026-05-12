'use client'
import React, { useState } from 'react'
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu';
import { Fraunces, DM_Sans } from 'next/font/google';

const fraunces = Fraunces({ subsets: ['latin'], weight: ['400', '700'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

const TimelineRodo = () => {
  const timelineData = [
  {
    "date": "1970",
    "title": "Nacimiento",
    "desc": "Héctor Rodolfo Bulacio nace en Monteros, Tucumán, el 1 de octubre. Hijo de Rodolfo Bulacio y Olga 'Porota' de Bulacio.",
    "img": "/img/rodo/rodo-nino.png"
  },
  {
    "date": "1986 - 1988",
    "title": "Formación Artística",
    "desc": "Participa en 'La Expresión' grupo cultural, poesía y dibujo. Posteriormente realiza 3 murales en la Escuela Normal Superior Tte. Gral. Julio A. Roca de Monteros",
    "img": "/img/rodo/rodo-inicios.png"
  },
  {
    "date": "1989",
    "title": "Performance novia con basura",
    "desc": '"En Monteros en un evento que hacia una perfo entraba a un lugar con la gente ya sentada y vestido de novia tiraba bolsas de basura. El publico se levanto y lo queria linchar por lo que salio corriendo levantandose el vestido y escondiendose en la casa de su abuela del disconforme publico que lo venia persiguiendo."',
    "img": "/img/rodo/perfomance-vestido.png"
  },
  {
    "date": "1990 -",
    "title": "Emergencia de 'La Rodo'",
    "desc": "Comienza a explorar la performance y el arte textil. Surge su alter ego 'La Rodo', desafiando convenciones de género.",
    "img": "/img/rodo/1990.jpg"
  },
  {
    "date": "1992 -",
    "title": "Vanguardia Tucumana",
    "desc": "Participa en la mítica exposición 'Tenis' en el Centro Cultural Virla, consolidando su lugar en la escena artística regional.",
    "img": "/img/rodo/1992.jpg"
  },
  {
    "date": "1995 - 1996",
    "title": "Consolidación Artística",
    "desc": "Durante este periodo, Rodo Bulacio amalgama el diseño de indumentaria con la performance drag a través de sus icónicas 'Collections' y el ciclo 'Tenmpo de Drag'. A su vez expande su horizonte hacia las artes plásticas y el teatro, participando en muestras de pintura y objetos en espacios como Carlos Pellegrini y en la obra 'Se dice de mí', integrando la moda, el transformismo y la plástica en una identidad artística polifacética.",
    "img": "/img/rodo/karakatanga-en-el-parque.png"
},
  {
    "date": "1997 -",
    "title": "Legado Inmortal",
    "desc": "Su obra se convierte en un referente del arte contemporáneo del NOA, destacando por su libertad creativa y sensibilidad.",
    "img": "/img/rodo/1997.jpg"
  }
];

  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative w-full h-auto min-h-[600px] md:min-h-[800px] bg-black overflow-hidden flex flex-col justify-between py-16 md:py-8">

      {/* RIGHT/BACKGROUND: Dynamic Image with Fade effect */}
      <div className="absolute top-0 right-0 w-full md:w-3/4 h-full z-0">
        {/* Smooth Fade Mask to left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10 w-full md:w-[85%] h-full pointer-events-none"></div>
        {/* Base bottom gradient for text contrast on smaller screens */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent md:bg-none z-10 pointer-events-none"></div>

        {timelineData.map((item, idx) => (
          <img
            key={idx}
            src={item.img}
            alt={item.title}
            className={`absolute inset-0 w-full h-full object-cover object-right transition-opacity duration-1000 ease-in-out grayscale-[0.2] ${activeIdx === idx ? 'opacity-100' : 'opacity-0'
              }`}
          />
        ))}
      </div>

      {/* TOP NAVBAR / CONTROLS */}
      <div className="relative z-30 px-8 md:px-16 flex items-center gap-4 pt-8 md:pt-16">
        <button
          onClick={() => setActiveIdx(prev => prev > 0 ? prev - 1 : timelineData.length - 1)}
          className="w-12 h-12 rounded-full border border-[#FFA500] text-[#FFA500] hover:bg-[#FFA500] hover:text-black transition-colors flex items-center justify-center group bg-black/40 backdrop-blur-sm"
        >
          <LuArrowLeft size={20} className="transform group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={() => setActiveIdx(prev => prev < timelineData.length - 1 ? prev + 1 : 0)}
          className="w-12 h-12 rounded-full border border-[#FFA500] text-[#FFA500] hover:bg-[#FFA500] hover:text-black transition-colors flex items-center justify-center group bg-black/40 backdrop-blur-sm"
        >
          <LuArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="relative z-30 px-8 md:px-16 flex-1 flex flex-col justify-center max-w-xl my-16 md:my-0">
        <div className="relative h-[280px] md:h-[300px]">
          {timelineData.map((item, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 flex flex-col justify-center transition-all duration-[800ms] ease-out ${activeIdx === idx ? 'opacity-100 translate-y-0 pointer-events-auto z-10' : 'opacity-0 translate-y-8 pointer-events-none z-0'
                }`}
            >
              <div className={`inline-block bg-[#FFA500] text-black text-[10px] sm:text-xs font-bold px-3 py-1 mb-6 uppercase tracking-widest w-max ${dmSans.className}`}>
                Obra Destacada
              </div>
              <h2 className={`text-3xl md:text-5xl text-white mb-4 ${fraunces.className} drop-shadow-md`}>
                {item.title}
              </h2>
              <h3 className={`text-[#FFA500] text-sm md:text-lg mb-6 ${dmSans.className} tracking-wide`}>
                {item.date}
              </h3>
              <p className={`text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-sm md:max-w-md ${dmSans.className} drop-shadow-lg`}>
                {item.desc}
              </p>
              <a href="#" className={`text-[#FFA500] text-sm md:text-base underline underline-offset-8 decoration-[#FFA500]/50 hover:decoration-[#FFA500] hover:text-white transition-colors w-max font-medium ${dmSans.className}`}>
                Leer más
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM TIMELINE */}
      <div className="relative z-30 w-full px-8 md:px-16 overflow-x-auto pb-4 md:pb-12 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className="relative flex" style={{ width: 'max-content' }}>
          {/* The horizontal track line */}
          <div className="absolute left-0 right-0 h-[1px] bg-gray-600 top-[10px]"></div>

          <div className="flex justify-between items-start gap-16 sm:gap-24 md:gap-40 w-full mt-[1px]">
            {timelineData.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={idx}
                  className="relative flex flex-col items-center cursor-pointer group min-w-[70px]"
                  onClick={() => setActiveIdx(idx)}
                >
                  {/* The Dot */}
                  <div className={`rounded-full z-10 transition-all duration-500 relative ${isActive ? 'w-[18px] h-[18px] bg-[#FFA500] outline outline-4 outline-[#FFA500]/30 -translate-y-[3px]' : 'w-[10px] h-[10px] bg-gray-400 mt-[4px] group-hover:bg-white group-hover:scale-125 group-hover:shadow-[0_0_10px_#fff]'
                    }`}></div>

                  {/* Vertical Connecting Line (Visible only on active) */}
                  <div className={`w-[1px] bg-[#FFA500] transition-all duration-700 origin-top absolute top-[18px] ${isActive ? 'h-6 opacity-100' : 'h-0 opacity-0'
                    }`}></div>

                  {/* Target Year Label */}
                  <span className={`transition-all duration-500 absolute whitespace-nowrap text-[13px] md:text-sm mt-8 ${isActive ? 'text-[#FFA500] font-bold top-[16px]' : 'text-gray-400 top-[0px] group-hover:text-white'
                    } ${dmSans.className}`}>
                    {item.date.split(',')[1]?.trim() || item.date}
                  </span>
                </div>
              );
            })}
          </div>
          {/* Espaciador final para scroll seguro en móviles */}
          <div className="w-16 h-1 flex-shrink-0"></div>
        </div>
      </div>
    </section>
  )
}

export default TimelineRodo