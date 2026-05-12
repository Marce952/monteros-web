'use client'
import { motion } from 'framer-motion'
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

const HeroRodo = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between px-8 md:px-16 overflow-hidden bg-[#111] pt-40 pb-16">

      {/* Definición de Filtro SVG para Bordes Rasgados/Papel Roto */}
      <svg width="0" height="0" className="absolute">
        <filter id="torn-paper">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      {/* Elemento Interactivo: Imagen de Rodo Bulacio */}
      <div className="absolute top-[12%] right-[5%] md:right-[12%] lg:right-[15%] w-[220px] md:w-[350px] lg:w-[420px] h-[300px] md:h-[450px] lg:h-[550px] z-20 group cursor-pointer transition-transform duration-500 transform perspective-1000">
        <FadeIn delay={0.8} className="w-full h-full">
          <div className="w-full h-full relative" style={{ filter: 'url(#torn-paper)' }}>
            <div className="w-full h-full bg-[#1c1c1c] transition-all duration-[600ms] ease-out overflow-hidden relative group-hover:shadow-[0_0_80px_rgba(255,165,0,0.5)]">

              {/* Imagen Base */}
              <img
                src="/img/rodo/rodo.jpg"
                alt="Rodo Bulacio"
                className="w-full h-full object-cover grayscale opacity-50 mix-blend-luminosity filter transition-all duration-[600ms] ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:saturate-[1.4] group-hover:mix-blend-normal group-hover:scale-105"
              />

              {/* Overlay Naranja al hacer Hover */}
              <div className="absolute inset-0 bg-[#FFA500] mix-blend-color opacity-0 group-hover:opacity-[0.45] transition-opacity duration-[600ms] pointer-events-none"></div>

              {/* Efecto inicial Gris/Oscuro */}
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-[600ms] pointer-events-none"></div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Luz Radial Naranja de Acento */}
      <div className="absolute top-0 right-0 w-[900px] h-[550px] bg-[#FFA500] bg-opacity-[0.6] blur-[160px] rounded-[100%] translate-x-1/3 -translate-y-[20%] -rotate-[20deg] pointer-events-none z-0"></div>

      {/* Filtro / Grano SVG */}
      <div className="absolute inset-0 mix-blend-overlay pointer-events-none z-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent z-0 pointer-events-none"></div>

      {/* ABOUT & Block */}
      <div className={`relative z-30 grid grid-cols-1 md:grid-cols-4 w-full gap-8 ${dmSans.className} pointer-events-none`}>
        <FadeIn delay={0.1} className="md:col-span-1">
          <div className="text-[11px] font-bold tracking-widest text-white select-none">ABOUT</div>
        </FadeIn>
        <FadeIn delay={0.3} className="md:col-span-1 max-w-[180px] pointer-events-auto">
          <p className="text-[14px] leading-snug text-gray-200 mb-6 drop-shadow-md">
            Un espacio dedicado al legado del gran artista monterizo.
          </p>
          <button className="border border-[#FFA500] text-[#FFA500] rounded-[50px] px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-[#FFA500] hover:text-black transition-colors bg-black/20 backdrop-blur-sm">
            Conocer Más
          </button>
        </FadeIn>
      </div>

      {/* Enorme Tipografía */}
      <div className="relative z-30 w-full mt-auto flex flex-col justify-end pt-20 pointer-events-none">
        <FadeIn delay={0.5}>
          <h2 className={`text-[3.5rem] md:text-[5.5rem] text-white font-normal mb-[-2rem] ml-1 tracking-tight ${fraunces.className} drop-shadow-lg`}>
            Museo
          </h2>
        </FadeIn>
        <FadeIn delay={0.7} className="z-30">
          <h1 className={`text-[17vw] md:text-[12.5vw] leading-[0.8] tracking-[-0.07em] uppercase inline-block ${fraunces.className} -ml-2 text-white select-none relative drop-shadow-2xl mix-blend-normal`}>

            <span className="text-transparent bg-clip-text bg-[url('https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=800')] bg-cover bg-center grayscale brightness-[1.5]">R</span>
            <span className="text-white relative z-10">O</span>
            <span className="text-white">D</span>
            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_bottom,#FFA500_50%,#fff_50%)] relative mr-4 md:mr-10">O
              <span className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800')] bg-clip-text text-transparent opacity-50 bg-cover mix-blend-overlay">O</span>
            </span>

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
          </h1>
        </FadeIn>
      </div>
    </section>
  )
}

export default HeroRodo