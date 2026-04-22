// src/components/Counter.tsx
'use client'; // Marca el componente como Client Component en Next.js

import React, { useState, useEffect, useCallback } from 'react';
import { getCounterValue, incrementCounterValue } from '@/lib/api';

interface CounterProps {
  // No se requieren props para este componente simple, pero se define la interfaz para claridad.
}

const Counter: React.FC<CounterProps> = () => {
  const [count, setCount] = useState<number>(0); // Estado: Almacena el valor actual del contador.
  const [isLoading, setIsLoading] = useState<boolean>(true); // Estado: Indica si se está cargando el valor inicial.
  const [error, setError] = useState<string | null>(null); // Estado: Almacena cualquier error de la API.
  const [isIncrementing, setIsIncrementing] = useState<boolean>(false); // Estado: Para deshabilitar el botón durante el incremento.

  // Función para obtener el valor actual del contador desde el backend
  const fetchCurrentCount = useCallback(async () => {
    try {
      setError(null); // Limpiar errores previos al intentar obtener el valor
      const data = await getCounterValue();
      setCount(data.count);
    } catch (err: any) {
      console.error('Failed to fetch counter value:', err);
      setError(err.message || 'No se pudo cargar el contador.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Efecto: Carga el valor inicial del contador al montar el componente y configura el polling.
  useEffect(() => {
    setIsLoading(true);
    fetchCurrentCount(); // Carga inicial

    // ADR-002: Implementación de polling para actualizaciones periódicas.
    const interval = setInterval(fetchCurrentCount, 2000); // Poll cada 2 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente.
  }, [fetchCurrentCount]); // Dependencia de useCallback para evitar recrear el intervalo

  // Manejador de eventos: Incrementa el contador al hacer clic.
  const handleIncrementClick = useCallback(async () => {
    if (isIncrementing) return; // Evitar clics múltiples mientras se procesa uno

    setIsIncrementing(true); // Deshabilitar el botón
    setError(null); // Limpiar errores previos

    try {
      const data = await incrementCounterValue();
      setCount(data.newCount);
    } catch (err: any) {
      console.error('Failed to increment counter:', err);
      setError(err.message || 'No se pudo incrementar el contador. Intenta de nuevo.');
    } finally {
      setIsIncrementing(false); // Habilitar el botón de nuevo
    }
  }, [isIncrementing]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-4 bg-mach-light-gray rounded-lg shadow-md">
        <p className="text-lg text-mach-dark">Cargando contador...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-mach-purple text-white rounded-lg shadow-lg max-w-xs mx-auto">
      <h3 className="text-xl font-bold mb-2">Contador de Interacciones</h3>
      <p className="text-5xl font-extrabold mb-4">{count}</p>
      <button
        onClick={handleIncrementClick}
        disabled={isIncrementing} // Deshabilitar mientras se está incrementando
        className={`
          bg-mach-green text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out
          ${isIncrementing ? 'opacity-70 cursor-not-allowed' : 'hover:bg-mach-dark-green transform hover:scale-105 shadow-lg'}
        `}
      >
        {isIncrementing ? 'Incrementando...' : '¡Haz clic!'}
      </button>
      {error && (
        <p className="text-sm mt-2 text-red-300">
          {error}
        </p>
      )}
      <p className="text-sm mt-2 opacity-80">Contribuye a la interacción de MACHBank</p>
    </div>
  );
};

export default Counter;