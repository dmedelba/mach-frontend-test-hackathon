const REQUIREMENTS = [
  { label: 'Edad:', desc: 'Ser mayor de 18 años' },
  { label: 'RUT:', desc: 'Contar con RUT chileno vigente' },
  { label: 'Teléfono:', desc: 'Número de celular activo en Chile' },
  { label: 'Correo:', desc: 'Dirección de correo electrónico personal' },
  { label: 'Documento:', desc: 'Cédula de identidad chilena vigente' },
  { label: 'Selfie:', desc: 'Foto de verificación de identidad en el momento' },
];

export default function RequirementsSection() {
  return (
    <section className="bg-white py-20" id="requisitos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: requirements list */}
          <div className="flex flex-col gap-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-mach-gray rounded-full px-4 py-1.5 mb-5 border border-mach-offwhite">
                <span className="text-xs font-bold text-mach-purple uppercase tracking-widest">Requisitos</span>
              </div>
              <h2 className="section-heading mb-4">
                ¿Qué necesitas para
                <br />
                <span className="text-mach-purple">abrir tu cuenta?</span>
              </h2>
              <p className="text-mach-dark/60 leading-relaxed max-w-md">
                Abrir tu cuenta MACH es simple y 100% digital. Solo necesitas estos
                requisitos básicos para comenzar.
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {REQUIREMENTS.map(({ label, desc }) => (
                <li key={label} className="flex items-start gap-3">
                  {/* Checkmark circle */}
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-mach-purple flex items-center justify-center shrink-0">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                      <path
                        d="M1 4l2.5 2.5L9 1"
                        stroke="white"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-mach-dark leading-snug">
                    <strong>{label}</strong> {desc}
                  </span>
                </li>
              ))}
            </ul>

            <button className="btn-primary w-fit">
              Abrir mi cuenta ahora
              <span className="text-mach-cyan font-black">{'>>'}</span>
            </button>
          </div>

          {/* Right: visual illustration */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-mach-purple via-mach-purple-2 to-mach-cyan/40 shadow-2xl">
              {/* Decorative circles */}
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/5" />
              <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/5" />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8">
                <div className="text-6xl">👤</div>
                <div className="text-center text-white">
                  <div className="text-2xl font-black mb-1">Verificación</div>
                  <div className="text-white/70 text-sm">100% digital y segura</div>
                </div>

                {/* Step pills */}
                <div className="flex flex-col gap-3 w-full mt-2">
                  {['Ingresa tu RUT', 'Sube tu cédula', 'Tómate una selfie', '¡Listo!'].map((step, i) => (
                    <div
                      key={step}
                      className="flex items-center gap-3 bg-white/15 rounded-full px-4 py-2 backdrop-blur-sm"
                    >
                      <div className="w-6 h-6 rounded-full bg-mach-cyan text-mach-dark text-xs font-black flex items-center justify-center shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-white text-sm font-medium">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
