import React from "react";
import Link from "next/link";

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
              Fundada en 1754. Capital Nacional de la Randa y sede del segundo festival
              folklórico más antiguo del país. A 53 km de San Miguel de Tucumán.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-stone-700 px-3 py-1 font-sans text-xs text-stone-400">
                Capital de la Randa
              </span>
              <span className="rounded-full border border-stone-700 px-3 py-1 font-sans text-xs text-stone-400">
                Fortaleza del Folklore
              </span>
              <span className="rounded-full border border-stone-700 px-3 py-1 font-sans text-xs text-stone-400">
                Capital de la Poesía
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight text-white">
              Explorá la ciudad
            </h3>
            <ul className="font-sans mt-4 space-y-3 text-sm">
              <li>
                <Link href="/lugares" className="text-stone-400 transition hover:text-emerald-400">
                  Lugares históricos
                </Link>
              </li>
              <li>
                <Link href="/entidades" className="text-stone-400 transition hover:text-emerald-400">
                  Puntos turísticos
                </Link>
              </li>
              <li>
                <a href="#actividades" className="text-stone-400 transition hover:text-emerald-400">
                  Eventos y actividades
                </a>
              </li>
              <li>
                <Link href="/lugares/la-randa" className="text-stone-400 transition hover:text-emerald-400">
                  La Randa (patrimonio UNESCO)
                </Link>
              </li>
              <li>
                <Link href="/lugares/ibatin-macai" className="text-stone-400 transition hover:text-emerald-400">
                  Sitio arqueológico Ibatín
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight text-white">
              Contacto
            </h3>
            <ul className="font-sans mt-4 space-y-3 text-sm text-stone-400">
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Monteros, Tucumán, Argentina<br />CP T4142 · Ruta Nacional 38</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:devsoul256@gmail.com" className="transition hover:text-emerald-400">
                  devsoul256@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col items-center gap-2 text-center md:flex-row md:justify-between md:text-left">
          <p className="font-sans text-sm text-stone-500">
            © {new Date().getFullYear()} Monteros, Tucumán. Todos los derechos reservados.
          </p>
          <p className="font-sans text-xs text-stone-600">
            Desarrollado por{" "}
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
