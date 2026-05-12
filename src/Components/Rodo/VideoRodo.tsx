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

const VideoRodo = () => {
  return (
    <section className="relative w-full min-h-screen py-32 px-6 md:px-16 flex flex-col justify-between overflow-hidden text-white border-t border-[#111]">
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale-[0.2]"
          >
            <source src="/img/rodo/museo.mp4" type="video/mp4" />
          </video>
          {/* 40% Opacity Black Overlay to act as "night gallery" style */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Gradient to smooth out the edge with the gallery and footer */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-black"></div>
        </div>

        {/* Social Icons (Top Right) */}
        <div className="absolute top-12 right-6 md:right-12 z-30 flex gap-4 text-white/60">
          <a href="#" className={`hover:text-[#FFA500] hover:border-[#FFA500]/50 transition-colors duration-300 uppercase text-xs tracking-[0.2em] border border-white/20 px-5 py-2 rounded-full backdrop-blur-md bg-white/5 ${dmSans.className}`}>
            IG
          </a>
          <a href="#" className={`hover:text-[#FFA500] hover:border-[#FFA500]/50 transition-colors duration-300 uppercase text-xs tracking-[0.2em] border border-white/20 px-5 py-2 rounded-full backdrop-blur-md bg-white/5 ${dmSans.className}`}>
            FB
          </a>
        </div>

        {/* Typography Hero Text */}
        <div className="relative z-20 flex-1 flex items-center justify-center pointer-events-none mt-24 lg:mt-32">
          <FadeIn>
            <h2 className={`text-[13vw] sm:text-[11vw] md:text-[8.5vw] text-white leading-none whitespace-nowrap text-center drop-shadow-2xl ${fraunces.className}`}>
              <span className="font-normal">visita</span>
              <span className="font-light mx-4 md:mx-8 text-white/50">/</span>
              <em className="italic text-[#FFA500] font-light">Rodo Bulacio</em>
            </h2>
          </FadeIn>
        </div>

        {/* UI Glassmorphism Bottom Widgets */}
        <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mt-24">

          {/* Widget Izquierdo: Ubicación */}
          <FadeIn delay={0.2} className="h-full">
            <div className="bg-white/10 backdrop-blur-[20px] rounded-3xl p-8 md:p-10 border border-white/20 hover:border-[#FFA500]/40 transition-colors h-full flex flex-col justify-between shadow-2xl group cursor-default">
              <h3 className={`text-sm md:text-base font-bold tracking-[0.2em] text-white mb-8 ${dmSans.className}`}>
                ENCUÉNTRANOS EN MONTEROS
              </h3>

              {/* Minimal Map Visual */}
              <div className="relative w-full h-[160px] md:h-[180px] rounded-2xl mb-8 border border-white/10 overflow-hidden bg-black/20 group-hover:border-white/20 transition-colors">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-[#FFA500] rounded-full shadow-[0_0_20px_#FFA500] relative z-10 transition-transform group-hover:scale-110"></div>
                  <div className="absolute inset-0 bg-[#FFA500] rounded-full animate-ping opacity-60"></div>
                </div>
                {/* Abstract road lines vectors */}
                <svg className="absolute inset-0 w-full h-full opacity-20 group-hover:opacity-30 transition-opacity" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,50 Q25,25 50,50 T100,50" stroke="white" strokeWidth="0.5" fill="none" />
                  <path d="M50,0 Q60,30 50,50 T50,100" stroke="white" strokeWidth="0.5" fill="none" />
                  <path d="M20,100 L40,50" stroke="white" strokeWidth="0.2" strokeDasharray="2" fill="none" />
                </svg>
              </div>

              <div className={`space-y-4 text-gray-300 font-light flex-1 ${dmSans.className}`}>
                <p className="flex flex-col sm:flex-row justify-between border-b border-white/10 pb-3 gap-2">
                  <strong className="text-white font-normal">Dirección:</strong>
                  <span className="sm:text-right">Calle Mitre y Rivadavia</span>
                </p>
                <p className="flex flex-col sm:flex-row justify-between border-b border-white/10 pb-3 gap-2">
                  <strong className="text-white font-normal">Horarios:</strong>
                  <span className="sm:text-right">Mar a Dom | 09:00 - 18:00 hs</span>
                </p>
                <p className="flex flex-col sm:flex-row justify-between pb-1 gap-2">
                  <strong className="text-white font-normal">Entrada:</strong>
                  <span className="text-[#FFA500] font-medium tracking-wide">Libre y Gratuita</span>
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Widget Derecho: Info Complementaria */}
          <FadeIn delay={0.4} className="h-full">
            <div className="bg-white/10 backdrop-blur-[20px] rounded-3xl p-8 md:p-10 border border-white/20 hover:border-[#FFA500]/40 transition-colors h-full flex flex-col justify-between shadow-2xl group">
              <h3 className={`text-sm md:text-base font-bold tracking-[0.2em] text-white mb-8 ${dmSans.className}`}>
                ARCHIVO DIGITAL ACTIVO
              </h3>

              <div className="space-y-8 flex-1">
                <div className="flex flex-col gap-4 md:gap-6">
                  <div className="bg-black/40 rounded-2xl p-5 md:p-6 border border-white/5 flex flex-wrap justify-between items-center group-hover:bg-black/50 hover:border-white/10 transition-all">
                    <span className={`text-gray-400 font-light text-base md:text-lg ${dmSans.className}`}>Obras en Exhibición</span>
                    <span className={`text-3xl md:text-4xl text-white ${fraunces.className}`}>+150</span>
                  </div>
                  <div className="bg-black/40 rounded-2xl p-5 md:p-6 border border-white/5 flex flex-wrap justify-between items-center group-hover:bg-black/50 hover:border-white/10 transition-all">
                    <span className={`text-gray-400 font-light text-base md:text-lg ${dmSans.className}`}>Visitantes este mes</span>
                    <span className={`text-3xl md:text-4xl text-white ${fraunces.className}`}>1,240</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mt-8">
                  <div className="w-full bg-black/60 h-[8px] rounded-full overflow-hidden shadow-inner">
                    <div className="bg-[#FFA500] h-full rounded-full transition-all duration-[2000ms] ease-out w-[90%] relative shadow-[0_0_10px_#FFA500]">
                      {/* Subtle shine effect on progress bar */}
                      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/60 to-transparent"></div>
                    </div>
                  </div>
                  <p className={`text-right mt-4 text-[#FFA500] text-[11px] md:text-xs tracking-widest uppercase font-bold ${dmSans.className}`}>
                    90% Digitalización del Archivo Bulacio
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-10 md:mt-12 pt-8 border-t border-white/10">
                <button className={`w-full bg-[#FFA500] text-black font-bold uppercase tracking-[0.2em] rounded-full py-5 hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,165,0,0.4)] hover:scale-[1.02] transform ${dmSans.className}`}>
                  Planear Mi Visita
                </button>
              </div>

            </div>
          </FadeIn>

        </div>
      </section>
  )
}

export default VideoRodo