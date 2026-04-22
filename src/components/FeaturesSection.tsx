const FEATURES = [
  {
    icon: '💳',
    name: 'Cuenta Digital',
    heading: 'Sin comisiones, sin sorpresas',
    body: 'Abre tu cuenta gratis y maneja tu dinero desde la app. Costo $0 mensual garantizado.',
  },
  {
    icon: '💸',
    name: 'Transferencias',
    heading: 'Envía dinero al instante',
    body: 'Transfiere a cualquier banco de Chile sin costo adicional, al instante y desde tu celular.',
  },
  {
    icon: '🏦',
    name: 'Crédito MACH',
    heading: 'Crédito rápido y accesible',
    body: 'Solicita tu crédito en minutos. Sin papeleo, sin filas. Todo desde la app.',
  },
  {
    icon: '📱',
    name: 'Tarjeta MACH',
    heading: 'Virtual y física incluida',
    body: 'Obtén tu tarjeta de débito virtual al instante. La física se envía gratis a tu domicilio.',
  },
  {
    icon: '⭐',
    name: 'Beneficios',
    heading: 'Descuentos que te encantan',
    body: 'Accede a cientos de descuentos exclusivos en comercios, restaurantes y entretenimiento.',
  },
  {
    icon: '🔐',
    name: 'Seguridad',
    heading: 'Tu dinero siempre protegido',
    body: 'Tecnología bancaria avanzada. Bloquea tu tarjeta desde la app en segundos.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-mach-gray py-20" id="productos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-5 border border-mach-offwhite">
            <span className="text-xs font-bold text-mach-purple uppercase tracking-widest">Productos</span>
          </div>
          <h2 className="section-heading mb-4">
            Todo lo que necesitas<br />
            <span className="text-mach-purple">en un solo lugar</span>
          </h2>
          <p className="text-mach-dark/60 max-w-xl mx-auto text-base leading-relaxed">
            MACH te da las herramientas para manejar tu dinero de forma simple,
            moderna y completamente digital.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div key={f.name} className="card-mach hover:shadow-md transition-shadow duration-200">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-mach-gray flex items-center justify-center text-3xl shadow-sm border border-mach-offwhite">
                {f.icon}
              </div>

              {/* Label */}
              <span className="text-xs font-bold text-mach-purple uppercase tracking-wider">
                {f.name}
              </span>

              {/* Heading */}
              <h3 className="text-lg font-bold text-mach-dark leading-snug -mt-2">
                {f.heading}
              </h3>

              {/* Body */}
              <p className="text-sm text-mach-dark/60 leading-relaxed -mt-1">
                {f.body}
              </p>

              {/* Outlined caret button */}
              <button className="mt-auto w-fit border border-mach-purple text-mach-purple text-xs font-bold px-4 py-2 rounded-full hover:bg-mach-purple hover:text-white transition-colors flex items-center gap-1">
                Ver más <span className="font-black text-mach-cyan group-hover:text-white">{'>>'}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
