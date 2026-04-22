'use client';

import { useState } from 'react';

const STEPS = [
  {
    number: 1,
    title: 'Solicita',
    desc: 'Completa el formulario en la app con tus datos personales y el monto que necesitas.',
  },
  {
    number: 2,
    title: 'Evalúa',
    desc: 'Analizamos tu solicitud en segundos con tecnología avanzada de evaluación crediticia.',
  },
  {
    number: 3,
    title: 'Aprueba',
    desc: 'Recibe la respuesta al instante. Si es aprobado, acepta las condiciones en la app.',
  },
  {
    number: 4,
    title: 'Recibe',
    desc: 'El dinero se acredita directamente en tu cuenta MACH de forma inmediata.',
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="bg-mach-gray py-20" id="credito">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-5 border border-mach-offwhite">
            <span className="text-xs font-bold text-mach-purple uppercase tracking-widest">Crédito MACH</span>
          </div>
          <h2 className="section-heading mb-4">
            Pide tu Crédito en
            <br />
            <span className="text-mach-purple">4 simples pasos</span>
          </h2>
          <p className="text-mach-dark/60 max-w-lg mx-auto text-base leading-relaxed">
            Obtén hasta $3.000.000 en minutos directamente desde la app MACH.
            Sin filas, sin papeleo, sin complicaciones.
          </p>
        </div>

        {/* Step capsule indicator */}
        <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2">
          {STEPS.map((step, idx) => (
            <div key={step.number} className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setActiveStep(step.number)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 ${
                  activeStep === step.number
                    ? 'bg-mach-purple text-white shadow-md shadow-mach-purple/30'
                    : activeStep > step.number
                    ? 'bg-mach-cyan/20 text-mach-dark border border-mach-cyan/40'
                    : 'bg-white text-mach-dark/50 border border-mach-offwhite hover:border-mach-purple/30'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 ${
                    activeStep === step.number
                      ? 'bg-white text-mach-purple'
                      : activeStep > step.number
                      ? 'bg-mach-cyan text-mach-dark'
                      : 'bg-mach-offwhite text-mach-dark/40'
                  }`}
                >
                  {activeStep > step.number ? '✓' : step.number}
                </span>
                {step.title}
              </button>

              {/* Connector line between steps */}
              {idx < STEPS.length - 1 && (
                <div
                  className={`hidden sm:block w-8 h-0.5 rounded-full transition-colors duration-300 ${
                    activeStep > step.number ? 'bg-mach-cyan' : 'bg-mach-offwhite'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Active step detail card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-mach-offwhite">
            {STEPS.filter((s) => s.number === activeStep).map((step) => (
              <div key={step.number} className="flex flex-col sm:flex-row items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-mach-purple flex items-center justify-center text-2xl font-black text-white shrink-0">
                  {step.number}
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-xs font-bold text-mach-purple uppercase tracking-widest">
                    Paso {step.number} de {STEPS.length}
                  </div>
                  <h3 className="text-2xl font-black text-mach-dark">{step.title}</h3>
                  <p className="text-mach-dark/65 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}

            {/* Navigation controls */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-mach-gray">
              <button
                onClick={() => setActiveStep((s) => Math.max(1, s - 1))}
                disabled={activeStep === 1}
                className="flex items-center gap-2 text-sm font-bold text-mach-purple disabled:text-mach-dark/30 disabled:cursor-not-allowed hover:opacity-75 transition-opacity"
              >
                <span className="font-black rotate-180 inline-block">{'>'}</span>
                Anterior
              </button>

              <div className="flex gap-1.5">
                {STEPS.map((s) => (
                  <button
                    key={s.number}
                    onClick={() => setActiveStep(s.number)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      activeStep === s.number ? 'bg-mach-purple w-5' : 'bg-mach-offwhite'
                    }`}
                    aria-label={`Ir al paso ${s.number}`}
                  />
                ))}
              </div>

              {activeStep < STEPS.length ? (
                <button
                  onClick={() => setActiveStep((s) => Math.min(STEPS.length, s + 1))}
                  className="flex items-center gap-2 text-sm font-bold text-mach-purple hover:opacity-75 transition-opacity"
                >
                  Siguiente
                  <span className="font-black text-mach-cyan">{'>>'}</span>
                </button>
              ) : (
                <button className="btn-primary text-sm py-2 px-5">
                  Solicitar crédito
                  <span className="text-mach-cyan font-black">{'>>'}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
