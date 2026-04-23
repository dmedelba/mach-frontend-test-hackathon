'use client';
import React, { useState } from 'react';
import { mockFetchTip } from '@/services/mockApi';

const TipsButton: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [tip, setTip] = useState<string | null>(null);

  const handleSimulateClick = async () => {
    setLoading(true);
    try {
      const fetchedTip = await mockFetchTip();
      setTip(fetchedTip);
    } catch (error) {
      console.error("Error fetching tip:", error);
      setTip("Error al obtener el consejo. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button 
        className="bg-mach-purple text-white px-4 py-2 rounded-lg" 
        onClick={handleSimulateClick} 
        disabled={loading}
      >
        {loading ? 'Buscando...' : 'Dame un Tip Financiero'}
      </button>
      {loading ? (
        <p>Buscando el mejor tip para ti...</p>
      ) : (
        tip && <p className="font-bold">💡 Tip: {tip}</p>
      )}
    </div>
  );
};

export default TipsButton;