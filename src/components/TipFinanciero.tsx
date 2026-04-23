import React, { useState } from 'react';
import { getRandomTip } from '@/services/mockApi';

const TipFinanciero: React.FC = () => {
  const [tip, setTip] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleTipClick = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simula latencia
    const randomTip = await getRandomTip();
    setTip(randomTip);
    setLoading(false);
  };

  return (
    <div className="bg-mach-light text-mach-dark rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-bold">Tip Financiero del Día</h2>
      <p className="mt-2">{tip || "Haz clic en el botón para recibir un consejo."}</p>
      <button 
        onClick={handleTipClick} 
        disabled={loading} 
        className={`mt-4 px-4 py-2 rounded ${loading ? 'bg-gray-400' : 'bg-mach-dark text-white'}`}
      >
        {loading ? 'Pensando...' : 'Revelar Tip del Día'}
      </button>
    </div>
  );
};

export default TipFinanciero;