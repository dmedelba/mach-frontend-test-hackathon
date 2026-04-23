'use client';
import React, { useState } from 'react';
import { mockFetchTip } from '@/services/mockApi';

const TipsGenerator: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [tip, setTip] = useState('');

  const handleSimulateClick = async () => {
    setLoading(true);
    try {
      const fetchedTip = await mockFetchTip();
      setTip(fetchedTip);
    } catch (error) {
      console.error('Error fetching tip:', error);
      setTip('Error al obtener el consejo. Intenta de nuevo más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleSimulateClick}
        className="bg-mach-purple text-white px-4 py-2 rounded-lg"
        disabled={loading}
      >
        {loading ? 'Buscando...' : 'Dame un Tip Financiero'}
      </button>
      {loading ? (
        <p className="text-lg text-gray-700">Buscando el mejor tip para ti...</p>
      ) : (
        tip && <p className="text-lg text-gray-700 font-bold">💡 Tip: {tip}</p>
      )}
    </div>
  );
};

export default TipsGenerator;