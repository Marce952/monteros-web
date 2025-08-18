import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Información de Monteros */}
          <div>
            <h3 className="text-lg mb-4 text-white">Monteros, Tucumán</h3>
            <p className="text-white/80 text-sm">
              Una ciudad con historia, tradición y futuro.
              Ven a conocer todo lo que Monteros tiene para ofrecerte.
            </p>
          </div>

          {/* Enlaces útiles */}
          <div>
            <h3 className="text-lg mb-4 text-white">Enlaces Útiles</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-white/80 hover:text-[var(--primary)] transition-colors">Municipalidad</a></li>
              <li><a href="#" className="text-white/80 hover:text-[var(--primary)] transition-colors">Turismo</a></li>
              <li><a href="#" className="text-white/80 hover:text-[var(--primary)] transition-colors">Eventos</a></li>
              <li><a href="#" className="text-white/80 hover:text-[var(--primary)] transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg mb-4 text-white">Contacto</h3>
            <div className="space-y-2 text-sm text-white/80">
              <p>📍 Monteros, Tucumán, Argentina</p>
              <p>✉️ devsoul256@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80 text-sm mb-2">
            © 2025 Monteros, Tucumán. Todos los derechos reservados.
          </p>
          <p className="text-white/60 text-xs">
            Sitio web desarrollado por{' '}
            <a
              href="https://www.devsoulit.com/"
              target="_blank"
              className="text-[var(--primary)] hover:text-[var(--primary)]/80 transition-colors"
            >
              <strong>DevSoul</strong>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}