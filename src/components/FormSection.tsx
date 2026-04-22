'use client';

import { useState } from 'react';

type FormState = {
  rut: string;
  nombre: string;
  documento: string;
  telefono: string;
  monto: string;
  terminos: boolean;
};

const MONTOS = [
  '$100.000',
  '$200.000',
  '$500.000',
  '$1.000.000',
  '$2.000.000',
  '$3.000.000',
];

export default function FormSection() {
  const [form, setForm] = useState<FormState>({
    rut: '',
    nombre: '',
    documento: '',
    telefono: '',
    monto: '',
    terminos: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const isValid =
    form.rut.trim() !== '' &&
    form.nombre.trim() !== '' &&
    form.telefono.trim() !== '' &&
    form.monto !== '' &&
    form.terminos;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isValid) setSubmitted(true);
  }

  return (
    <section className="bg-white py-20" id="solicitud">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div className="flex flex-col gap-6 lg:pt-4">
            <div className="inline-flex items-center gap-2 bg-mach-gray rounded-full px-4 py-1.5 w-fit border border-mach-offwhite">
              <span className="text-xs font-bold text-mach-purple uppercase tracking-widest">Solicitud</span>
            </div>
            <h2 className="section-heading">
              Solicita tu crédito
              <br />
              <span className="text-mach-purple">en minutos</span>
            </h2>
            <p className="text-mach-dark/60 leading-relaxed max-w-md">
              Completa el formulario y recibe una respuesta inmediata. Sin trámites,
              sin filas. Tu crédito llega directo a tu cuenta MACH.
            </p>

            {/* Trust badges */}
            <div className="flex flex-col gap-3 mt-2">
              {[
                { icon: '🔒', text: 'Tus datos están protegidos con encriptación bancaria' },
                { icon: '⚡', text: 'Respuesta en menos de 2 minutos' },
                { icon: '💰', text: 'Sin costos de evaluación ni comisiones ocultas' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm text-mach-dark/65">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-white rounded-3xl border border-mach-offwhite shadow-sm p-8">
            {submitted ? (
              <div className="flex flex-col items-center gap-5 py-10 text-center">
                <div className="w-16 h-16 rounded-full bg-mach-purple flex items-center justify-center text-3xl">
                  ✅
                </div>
                <h3 className="text-2xl font-black text-mach-dark">¡Solicitud enviada!</h3>
                <p className="text-mach-dark/60 max-w-xs">
                  Revisaremos tu solicitud y te contactaremos en los próximos minutos.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ rut: '', nombre: '', documento: '', telefono: '', monto: '', terminos: false }); }}
                  className="btn-secondary mt-2"
                >
                  Nueva solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <h3 className="text-lg font-bold text-mach-dark mb-1">Datos de tu solicitud</h3>

                {/* RUT */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="rut" className="text-xs font-bold text-mach-dark/60 uppercase tracking-wider">
                    RUT<span className="text-mach-purple">*</span>
                  </label>
                  <input
                    id="rut"
                    name="rut"
                    type="text"
                    value={form.rut}
                    onChange={handleChange}
                    placeholder="12.345.678-9"
                    autoComplete="off"
                    className="w-full bg-white border border-mach-offwhite rounded-xl px-4 py-3 text-sm text-mach-dark placeholder-mach-dark/30 focus:outline-none focus:border-mach-purple focus:ring-2 focus:ring-mach-purple/10 transition"
                  />
                </div>

                {/* Número de documento */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="documento" className="text-xs font-bold text-mach-dark/60 uppercase tracking-wider">
                    Número de documento<span className="text-mach-purple">*</span>
                  </label>
                  <input
                    id="documento"
                    name="documento"
                    type="text"
                    value={form.documento}
                    onChange={handleChange}
                    placeholder="Número de serie de tu cédula"
                    autoComplete="off"
                    className="w-full bg-white border border-mach-offwhite rounded-xl px-4 py-3 text-sm text-mach-dark placeholder-mach-dark/30 focus:outline-none focus:border-mach-purple focus:ring-2 focus:ring-mach-purple/10 transition"
                  />
                </div>

                {/* Nombre completo */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="nombre" className="text-xs font-bold text-mach-dark/60 uppercase tracking-wider">
                    Nombre completo<span className="text-mach-purple">*</span>
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Como aparece en tu cédula"
                    autoComplete="name"
                    className="w-full bg-white border border-mach-offwhite rounded-xl px-4 py-3 text-sm text-mach-dark placeholder-mach-dark/30 focus:outline-none focus:border-mach-purple focus:ring-2 focus:ring-mach-purple/10 transition"
                  />
                </div>

                {/* Teléfono */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="telefono" className="text-xs font-bold text-mach-dark/60 uppercase tracking-wider">
                    Teléfono<span className="text-mach-purple">*</span>
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={form.telefono}
                    onChange={handleChange}
                    placeholder="+56 9 1234 5678"
                    autoComplete="tel"
                    className="w-full bg-white border border-mach-offwhite rounded-xl px-4 py-3 text-sm text-mach-dark placeholder-mach-dark/30 focus:outline-none focus:border-mach-purple focus:ring-2 focus:ring-mach-purple/10 transition"
                  />
                </div>

                {/* Monto */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="monto" className="text-xs font-bold text-mach-dark/60 uppercase tracking-wider">
                    Monto solicitado<span className="text-mach-purple">*</span>
                  </label>
                  <select
                    id="monto"
                    name="monto"
                    value={form.monto}
                    onChange={handleChange}
                    className="w-full bg-white border border-mach-offwhite rounded-xl px-4 py-3 text-sm text-mach-dark focus:outline-none focus:border-mach-purple focus:ring-2 focus:ring-mach-purple/10 transition appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Selecciona un monto</option>
                    {MONTOS.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                {/* Terms checkbox */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="terminos"
                    checked={form.terminos}
                    onChange={handleChange}
                    className="mt-0.5 w-4 h-4 accent-mach-purple cursor-pointer shrink-0"
                  />
                  <span className="text-xs text-mach-dark/55 leading-relaxed group-hover:text-mach-dark/75 transition-colors">
                    Acepto los{' '}
                    <a href="#" className="text-mach-purple font-semibold hover:underline">
                      Términos y Condiciones
                    </a>{' '}
                    y la{' '}
                    <a href="#" className="text-mach-purple font-semibold hover:underline">
                      Política de Privacidad
                    </a>{' '}
                    de MACHBANK. Autorizo el tratamiento de mis datos personales.
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!isValid}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                    isValid
                      ? 'bg-mach-purple text-white hover:bg-mach-purple-2 shadow-md shadow-mach-purple/25'
                      : 'bg-mach-offwhite text-mach-dark/40 cursor-not-allowed'
                  }`}
                >
                  {isValid ? 'Enviar solicitud >>' : 'Completa todos los campos'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
