'use client';

import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Inicio' },
  { label: 'Conócenos' },
  { label: 'Ponte al día' },
  { label: 'Productos', hasDropdown: true },
  { label: 'Beneficios', hasDropdown: true },
  { label: 'Blog' },
  { label: 'Ayuda' },
];

export default function Header() {
  const [activeType, setActiveType] = useState<'PERSONAS' | 'EMPRESAS'>('PERSONAS');
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-mach-offwhite shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <MachLogo />

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-5 flex-1 justify-center">
          {NAV_LINKS.map(({ label, hasDropdown }) => (
            <a
              key={label}
              href="#"
              className="text-sm font-medium text-mach-dark/75 hover:text-mach-purple transition-colors flex items-center gap-1"
            >
              {label}
              {hasDropdown && (
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                  <path
                    d="M1 1l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </a>
          ))}
        </nav>

        {/* PERSONAS / EMPRESAS toggle */}
        <div className="flex items-center bg-mach-offwhite rounded-full p-1 gap-0.5 shrink-0">
          {(['PERSONAS', 'EMPRESAS'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                activeType === type
                  ? 'bg-mach-cyan text-mach-dark shadow-sm'
                  : 'text-mach-dark/50 hover:text-mach-dark'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-mach-dark"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {mobileOpen ? (
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-mach-offwhite px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3">
            {NAV_LINKS.map(({ label }) => (
              <a
                key={label}
                href="#"
                className="text-sm font-medium text-mach-dark/75 hover:text-mach-purple transition-colors py-1"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function MachLogo() {
  return (
    <div className="flex items-center gap-0.5 select-none shrink-0" aria-label="MACH Bank">
      <span className="font-black text-[1.6rem] text-mach-purple tracking-tight leading-none">M</span>
      {/* Geometric A: filled triangle with white crossbar */}
      <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M8 1L15.5 24H0.5L8 1Z" fill="#6E00FF" />
        <rect x="4" y="15.5" width="8" height="2.5" rx="1.25" fill="white" />
      </svg>
      <span className="font-black text-[1.6rem] text-mach-purple tracking-tight leading-none">CH</span>
      <span className="ml-2 text-[0.6rem] font-bold text-mach-cyan tracking-[0.2em] uppercase leading-none self-end mb-1">
        BANK
      </span>
    </div>
  );
}
