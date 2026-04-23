import React, { useState } from 'react';
import { fetchRandomTip } from '@/services/mockApi';

const TipCard: React.FC = () => {
  const [tip, setTip] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleTipClick = async () => {
    setLoading(true);
    try {
      const newTip = await fetchRandomTip();
      setTip(newTip);
    } catch (error) {
      console.error('Error fetching tip:', error);
      setTip('Lo sentimos, no se pudo cargar el consejo. Intenta de nuevo más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-mach-light text-mach-dark rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-bold">Consejo Financiero del Día</h2>
      <p className="mt-2">{tip || 'Haz clic en el botón para revelar un consejo.'}</p>
      <button
        onClick={handleTipClick}
        disabled={loading}
        className={`mt-4 px-4 py-2 rounded bg-mach-primary text-white ${loading ? 'opacity-50' : ''}`}
      >
        {loading ? 'Pensando...' : 'Revelar Tip del Día'}
      </button>
    </div>
  );
};

export default TipCard;