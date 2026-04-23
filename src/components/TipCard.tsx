import React, { useState } from 'react';
import { mockGetRandomTip } from '@/services/mockApi';

const TipCard: React.FC = () => {
  const [tip, setTip] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const data = await mockGetRandomTip();
        setTip(data.tip);
      } catch (error) {
        console.error('Error fetching tip:', error);
        setTip('Error al cargar el consejo. Intenta nuevamente.');
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <button
        onClick={handleClick}
        className={`bg-mach-blue text-white rounded-lg p-2 ${loading ? 'opacity-50' : ''}`}
        disabled={loading}
      >
        {loading ? 'Pensando...' : 'Revelar Tip del Día'}
      </button>
      {tip && <p className="mt-4 text-mach-dark">{tip}</p>}
    </div>
  );
};

export default TipCard;