// src/components/HeroSection.tsx
import React from 'react';

// Definir la interfaz para las props, incluyendo 'children'
interface HeroSectionProps {
  children?: React.ReactNode; // Permitir que HeroSection reciba children
}

// Modificar el componente para aceptar 'children'
const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
  return (
    <section className="relative bg-gradient-to-br from-mach-purple to-mach-dark-purple text-white py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          MACHBANK: Tu Banco Digital, Simple y Seguro
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-90 animate-fade-in-up delay-100">
          Gestiona tus finanzas desde cualquier lugar, sin complicaciones ni costos ocultos.
        </p>
        <div className="flex justify-center space-x-4 animate-fade-in-up delay-200">
          <a
            href="#"
            className="bg-mach-green hover:bg-mach-dark-green text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Abrir Cuenta Ahora
          </a>
          <a
            href="#"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-mach-purple text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Más Información
          </a>
        </div>
        {/* NUEVO: Renderizar los children aquí, permitiendo la inyección del contador */}
        {children && <div className="mt-12">{children}</div>}
      </div>
      {/* Elementos de diseño de fondo */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,160L48,176C96,192,192,224,288,218.7C384,213,480,171,576,160C672,149,768,171,864,181.3C960,192,1056,192,1152,176C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;