'use client';

export default function HeroSection() {
  return (
    <section className="bg-white overflow-hidden pt-14 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid: text + visual */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Copy */}
          <div className="flex flex-col gap-7">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 bg-mach-gray rounded-full px-4 py-2 w-fit">
              <span className="w-2 h-2 rounded-full bg-mach-cyan animate-pulse" />
              <span className="text-sm font-semibold text-mach-purple">Tu banco digital favorito de Chile</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-black leading-[1.05]">
              <span className="text-mach-purple">Tu dinero,</span>
              <br />
              <span className="text-mach-dark">sin complicaciones.</span>
            </h1>

            <p className="text-lg text-mach-dark/65 max-w-md leading-relaxed">
              Abre tu cuenta MACH gratis y empieza a disfrutar de una banca digital
              moderna, segura y siempre disponible. Costo <strong className="text-mach-dark">$0</strong> mensual.
            </p>

            <div className="flex flex-wrap gap-4 pt-1">
              <button className="btn-primary">
                Abre tu cuenta
                <span className="text-mach-cyan font-black">{'>>'}</span>
              </button>
              <button className="btn-secondary">
                Conoce más
                <span className="font-black">{'>>'}</span>
              </button>
            </div>
          </div>

          {/* Right: Visual card mockup */}
          <div className="relative flex justify-center items-center min-h-[360px]">
            {/* Glow circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-mach-purple/10 via-mach-cyan/10 to-transparent" />
            </div>

            {/* Central card */}
            <div className="relative z-10 w-64 bg-white rounded-3xl shadow-2xl border border-mach-offwhite p-7 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-mach-gray flex items-center justify-center text-4xl">
                💳
              </div>
              <div className="text-center">
                <div className="text-xs text-mach-dark/40 uppercase tracking-widest font-semibold mb-1">
                  Cuenta Digital
                </div>
                <div className="text-3xl font-black text-mach-purple">$0</div>
                <div className="text-sm text-mach-dark/50 font-medium">costo mensual</div>
              </div>
              <div className="w-full h-px bg-mach-offwhite" />
              <div className="w-full flex justify-between text-xs text-mach-dark/50 font-medium">
                <span>Sin comisiones</span>
                <span className="text-mach-cyan font-bold">✓ Activo</span>
              </div>
            </div>

            {/* Floating chip: Seguridad */}
            <div className="absolute top-6 right-4 lg:right-0 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-mach-offwhite z-20">
              <span className="text-2xl">🔒</span>
              <div>
                <div className="text-xs font-bold text-mach-dark leading-tight">Seguro</div>
                <div className="text-[10px] text-mach-dark/45">Protección 24/7</div>
              </div>
            </div>

            {/* Floating chip: Transferencia */}
            <div className="absolute bottom-8 left-4 lg:left-0 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-mach-offwhite z-20">
              <span className="text-2xl">⚡</span>
              <div>
                <div className="text-xs font-bold text-mach-dark leading-tight">Instantáneo</div>
                <div className="text-[10px] text-mach-dark/45">Transferencias sin costo</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 mt-20 pt-12 border-t border-mach-gray">
          {[
            { value: '5M+', label: 'Usuarios activos' },
            { value: '$0', label: 'Costo mensual' },
            { value: '24/7', label: 'Siempre disponible' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-3xl lg:text-4xl font-black text-mach-purple">{value}</div>
              <div className="text-sm text-mach-dark/55 mt-1 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
