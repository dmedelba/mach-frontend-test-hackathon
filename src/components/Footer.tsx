'use client';
const FOOTER_LINKS = {
  Productos: ['Cuenta Digital', 'Tarjeta MACH', 'Crédito MACH', 'Transferencias', 'Beneficios'],
  Empresa: ['Conócenos', 'Blog', 'Trabaja con nosotros', 'Prensa', 'Sostenibilidad'],
  Ayuda: ['Centro de ayuda', 'Preguntas frecuentes', 'Seguridad', 'Contáctanos'],
  Legal: ['Términos y condiciones', 'Política de privacidad', 'Cookies'],
};

export default function Footer() {
  return (
    <footer className="bg-mach-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            {/* Logo */}
            <div className="flex items-center gap-0.5 select-none">
              <span className="font-black text-[1.4rem] text-white tracking-tight leading-none">M</span>
              <svg width="14" height="22" viewBox="0 0 16 25" fill="none" aria-hidden="true">
                <path d="M8 1L15.5 24H0.5L8 1Z" fill="white" />
                <rect x="4" y="15.5" width="8" height="2.5" rx="1.25" fill="#333333" />
              </svg>
              <span className="font-black text-[1.4rem] text-white tracking-tight leading-none">CH</span>
              <span className="ml-1.5 text-[0.55rem] font-bold text-mach-cyan tracking-[0.18em] uppercase self-end mb-0.5">
                BANK
              </span>
            </div>

            <p className="text-sm text-white/50 leading-relaxed">
              Tu banco digital favorito de Chile. Moderno, seguro y sin comisiones.
            </p>

            {/* Social links */}
            <div className="flex gap-3 mt-1">
              {['𝕏', 'f', 'in', '📸'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-xs text-white/50 hover:text-mach-cyan hover:border-mach-cyan transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <h4 className="text-xs font-bold text-mach-cyan uppercase tracking-widest">{category}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} MACHBANK. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/35">
            Regulado por la Comisión para el Mercado Financiero (CMF) de Chile.
          </p>
        </div>
      </div>
    </footer>
  );
}
