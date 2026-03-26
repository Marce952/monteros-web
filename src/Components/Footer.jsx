import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="relative border-t border-stone-800 bg-stone-950 text-stone-100">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(21,128,61,0.12),_transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-14 lg:px-6">
        <div className="mb-12 grid gap-10 md:grid-cols-3 md:gap-12">
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight text-white">
              Monteros, Tucumán
            </h3>
            <p className="font-sans mt-4 text-sm leading-relaxed text-stone-400">
              Una ciudad con historia, tradición y futuro.
              Vení a conocer todo lo que Monteros tiene para ofrecerte.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight text-white">
              Enlaces útiles
            </h3>
            <ul className="font-sans mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="text-stone-400 transition hover:text-emerald-400">
                  Municipalidad
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-400 transition hover:text-emerald-400">
                  Turismo
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-400 transition hover:text-emerald-400">
                  Eventos
                </a>
              </li>
              <li>
                <a href="#footer" className="text-stone-400 transition hover:text-emerald-400">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight text-white">
              Contacto
            </h3>
            <ul className="font-sans mt-4 space-y-3 text-sm text-stone-400">
              <li className="flex gap-2">
                <span className="text-emerald-500" aria-hidden>📍</span>
                <span>Monteros, Tucumán, Argentina</span>
              </li>
              <li className="flex gap-2">
                <span className="text-emerald-500" aria-hidden>✉️</span>
                <a href="mailto:devsoul256@gmail.com" className="transition hover:text-emerald-400">
                  devsoul256@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 text-center">
          <p className="font-sans text-sm text-stone-500">
            © {new Date().getFullYear()} Monteros, Tucumán. Todos los derechos reservados.
          </p>
          <p className="font-sans mt-3 text-xs text-stone-600">
            Sitio web desarrollado por{" "}
            <a
              href="https://www.devsoulit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-emerald-500 transition hover:text-emerald-400"
            >
              DevSoul
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
