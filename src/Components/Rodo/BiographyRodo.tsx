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
const BiographyRodo = () => {
  return (
    <section className="py-32 px-6 md:px-20 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className={`text-3xl md:text-5xl font-bold mb-16 text-center uppercase tracking-widest ${fraunces.className}`}>
            El Legado <span className="text-[#FFA500]">Artístico</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn delay={0.2}>
            <div className="relative aspect-[4/5] bg-[#111] overflow-hidden rounded-lg group">
              <div className="absolute inset-0 z-10 w-full md:w-[85%] h-full pointer-events-none"></div>
              <img
                src="/img/rodo/gallery/rodo-bulacio.jpg"
                alt="Retrato artístico conceptual"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                Nacido en Monteros, Tucumán, Rodo Bulacio transformó la escena artística local y nacional con su visión disruptiva. Su obra trasciende el lienzo para convertirse en un registro vivo de la identidad, la corporalidad y la cultura popular.
              </p>
              <p>
                A través de performances, instalaciones y pinturas, Bulacio cuestionó los cánones establecidos, abriendo camino para nuevas generaciones de artistas en el norte argentino. Su impacto social es innegable, acercando el arte contemporáneo a la comunidad de maneras sin precedentes.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default BiographyRodo