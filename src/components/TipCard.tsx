import React, { useState } from 'react';
import { getRandomTip } from '@/services/mockApi';

const TipCard: React.FC = () => {
  const [tip, setTip] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const fetchTip = async () => {
    setLoading(true);
    setTimeout(async () => {
      const response = await getRandomTip();
      setTip(response.tip);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-white border rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-bold">Tip Financiero del Día</h2>
      <p className="mt-2">{tip}</p>
      <button
        onClick={fetchTip}
        className={`mt-4 px-4 py-2 rounded ${loading ? 'bg-gray-400' : 'bg-mach-blue'} text-white`}
        disabled={loading}
      >
        {loading ? 'Pensando...' : 'Revelar Tip del Día'}
      </button>
    </div>
  );
};

export default TipCard;