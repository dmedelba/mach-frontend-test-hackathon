'use client';

import React, { useState } from 'react';
import { getRandomTip } from '../services/mockApi';

const TipFinanciero: React.FC = () => {
  const [tip, setTip] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleTipClick = async () => {
    setLoading(true);
    setTimeout(async () => {
      const newTip = await getRandomTip();
      setTip(newTip);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">Tip Financiero del Día</h2>
      <p className="my-2">{tip || 'Haz clic en el botón para recibir un consejo.'}</p>
      <button
        className={`bg-mach-purple text-white rounded-lg p-2 ${loading ? 'opacity-50' : ''}`}
        onClick={handleTipClick}
        disabled={loading}
      >
        {loading ? 'Pensando...' : 'Revelar Tip del Día'}
      </button>
    </div>
  );
};

export default TipFinanciero;