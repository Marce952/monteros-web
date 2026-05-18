'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Fraunces, DM_Sans } from 'next/font/google';

const fraunces = Fraunces({ subsets: ['latin'], weight: ['400', '700'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] });

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
)

const tags = ['POP Art', 'Performance', 'Pintura', 'Grabado', 'Muralismo', 'LGTBIQ+']

const HeroRodo = () => {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])

  return (
    <section ref={ref} className="relative w-full min-h-screen flex flex-col justify-between px-8 md:px-16 overflow-hidden bg-[#111] pt-40 pb-16">

      {/* Filtro SVG para Bordes Rasgados */}
      <svg width="0" height="0" className="absolute">
        <filter id="torn-paper">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="4" result="noise"></feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
        </filter>
      </svg>

      {/* Imagen con parallax */}
      <motion.div
        style={{ y: imgY }}
        className="absolute top-[8%] right-[4%] md:right-[10%] lg:right-[13%] w-[200px] md:w-[320px] lg:w-[400px] h-[280px] md:h-[420px] lg:h-[520px] z-20 group cursor-pointer"
      >
        <div className="w-full h-full relative" style={{ filter: 'url(#torn-paper)' }}>
          <div className="w-full h-full bg-[#1c1c1c] transition-all duration-[600ms] ease-out overflow-hidden relative group-hover:shadow-[0_0_80px_rgba(255,165,0,0.5)]">
            <img
              src="/img/rodo/rodo.jpg"
              alt="Rodo Bulacio"
              className="w-full h-full object-cover grayscale opacity-50 mix-blend-luminosity filter transition-all duration-[600ms] ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:saturate-[1.4] group-hover:mix-blend-normal group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#FFA500] mix-blend-color opacity-0 group-hover:opacity-[0.45] transition-opacity duration-[600ms] pointer-events-none"></div>
            <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-[600ms] pointer-events-none"></div>
          </div>
        </div>

        {/* Badge de años sobre la imagen */}
        <FadeIn delay={1.0}>
          <div className={`absolute -bottom-4 -left-6 bg-[#FFA500] text-black px-4 py-2 text-[11px] font-bold tracking-widest uppercase ${dmSans.className}`}>
            1970 — 1997
          </div>
        </FadeIn>
      </motion.div>

      {/* Luz radial naranja */}
      <div className="absolute top-0 right-0 w-[900px] h-[550px] bg-[#FFA500] bg-opacity-[0.6] blur-[160px] rounded-[100%] translate-x-1/3 -translate-y-[20%] -rotate-[20deg] pointer-events-none z-0"></div>

      {/* Grano */}
      <div className="absolute inset-0 mix-blend-overlay pointer-events-none z-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent z-0 pointer-events-none"></div>

      {/* Info superior */}
      <div className={`relative z-30 grid grid-cols-1 md:grid-cols-4 w-full gap-8 ${dmSans.className} pointer-events-none`}>
        <FadeIn delay={0.1} className="md:col-span-1">
          <div className="text-[11px] font-bold tracking-widest text-[#FFA500] select-none mb-1">ARTISTA</div>
          <div className="text-[11px] tracking-widest text-gray-400 select-none uppercase">Monteros, Tucumán</div>
        </FadeIn>
        <FadeIn delay={0.3} className="md:col-span-2 max-w-[340px]">
          <p className="text-[13px] leading-relaxed text-gray-300 drop-shadow-md">
            Pintor, grabador, performer y muralista. Su obra atraviesa el pop, la identidad LGTBIQ+, la política y los rituales sociales. Estudió en la FAUNT e integró los colectivos de performance <em>Flora y Fauna</em> y <em>Tenor Grasso</em>.
          </p>
        </FadeIn>
      </div>

      {/* Tags de disciplinas */}
      <FadeIn delay={0.45} className="relative z-30 mt-8 pointer-events-none">
        <div className={`flex flex-wrap gap-2 ${dmSans.className}`}>
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
              className="border border-[#333] text-gray-400 text-[10px] tracking-widest uppercase px-3 py-1"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </FadeIn>

      {/* Tipografía principal con parallax */}
      <motion.div style={{ y: textY }} className="relative z-30 w-full mt-auto flex flex-col justify-end pt-16 pointer-events-none">
        <FadeIn delay={0.5}>
          <h2 className={`text-[2rem] sm:text-[3rem] md:text-[5.5rem] text-white font-normal mb-[-1rem] sm:mb-[-1.5rem] md:mb-[-2rem] ml-1 tracking-tight ${fraunces.className} drop-shadow-lg`}>
            Museo
          </h2>
        </FadeIn>
        <FadeIn delay={0.7} className="z-30">
          <h1 className={`text-[22vw] md:text-[12.5vw] leading-[0.85] tracking-[-0.07em] uppercase ${fraunces.className} -ml-2 text-white select-none relative drop-shadow-2xl mix-blend-normal`}>
            {/* RODO — en mobile ocupa su propia línea */}
            <span className="block md:inline">
              <span className="text-transparent bg-clip-text bg-[url('https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=800')] bg-cover bg-center grayscale brightness-[1.5]">R</span>
              <span className="text-white relative z-10">O</span>
              <span className="text-white">D</span>
              <span className="text-transparent bg-clip-text bg-[linear-gradient(to_bottom,#FFA500_50%,#fff_50%)] relative">O
                <span className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800')] bg-clip-text text-transparent opacity-50 bg-cover mix-blend-overlay">O</span>
              </span>
            </span>
            {/* Espacio visible solo en desktop */}
            <span className="hidden md:inline">&nbsp;</span>
            {/* BULACIO — en mobile ocupa su propia línea */}
            <span className="block md:inline">
              <span className="text-transparent border-0 bg-clip-text bg-[url('https://images.unsplash.com/photo-1518998053401-8789304192b5?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center filter grayscale opacity-90 relative">
                <span className="absolute bg-gradient-to-tr from-[#FFA500]/60 to-transparent bg-clip-text text-transparent">B</span>
                B
              </span>
              <span className="text-white">U</span>
              <span className="text-[#FFA500]">L</span>
              <span className="text-transparent bg-clip-text bg-[linear-gradient(rgba(255,165,0,0.8),rgba(255,165,0,0.8)),url('https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800')] bg-cover bg-center">A</span>
              <span className="text-white">C</span>
              <span className="text-white">I</span>
              <span className="text-white relative">O</span>
            </span>
          </h1>
        </FadeIn>

        {/* Línea inferior con datos clave */}
        <FadeIn delay={0.9} className="pointer-events-none">
          <div className={`grid grid-cols-2 md:flex md:items-center gap-4 md:gap-8 mt-6 border-t border-[#333] pt-5 ${dmSans.className}`}>
            <div>
              <div className="text-[10px] text-gray-500 tracking-widest uppercase mb-1">Nacimiento</div>
              <div className="text-[12px] md:text-[13px] text-gray-200 font-medium">Monteros, 1970</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 tracking-widest uppercase mb-1">Fallecimiento</div>
              <div className="text-[12px] md:text-[13px] text-gray-200 font-medium">Tucumán, 10 Mar. 1997</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 tracking-widest uppercase mb-1">Formación</div>
              <div className="text-[12px] md:text-[13px] text-gray-200 font-medium">FAUNT · São Paulo</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-500 tracking-widest uppercase mb-1">Influencia</div>
              <div className="text-[12px] md:text-[13px] text-gray-200 font-medium">Andy Warhol</div>
            </div>
          </div>
        </FadeIn>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <div className={`text-[9px] tracking-widest text-gray-500 uppercase ${dmSans.className}`}>Scroll</div>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-[#FFA500] to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </motion.div>
    </section>
  )
}

export default HeroRodo
