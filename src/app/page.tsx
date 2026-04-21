'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/api/hello')
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => setMessage(data.message))
      .catch(() => setError(true));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="text-6xl">🏁</span>
        <h1 className="text-4xl font-bold tracking-tight text-white">
          MACH Race 2026
        </h1>
        <p className="text-lg text-slate-400">
          ADLC Orchestrator — ciclo agéntico en marcha
        </p>
      </div>

      <div className="w-full max-w-lg rounded-xl border border-slate-800 bg-slate-900 px-8 py-6 text-center shadow-lg">
        <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
          Backend
        </p>
        {error ? (
          <>
            <p className="mt-2 text-2xl font-semibold text-red-400">
              No se pudo conectar con el backend
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Verificar que mach-backend-test corre en el puerto 3001
            </p>
          </>
        ) : message ? (
          <p className="mt-2 text-2xl font-semibold text-emerald-400">{message}</p>
        ) : (
          <p className="mt-2 text-slate-500 animate-pulse">Conectando...</p>
        )}
      </div>
    </main>
  );
}

