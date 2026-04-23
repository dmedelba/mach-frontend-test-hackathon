'use client';

import React, { useState } from 'react';
import { apiFetch } from '@/lib/api';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = async () => {
    try {
      const response = await apiFetch<{ value: number }>('/api/counter/increment', {
        method: 'POST',
        body: JSON.stringify({ user_id: 'placeholder_user_id' }), // Actual user_id debe ser tomado del estado o contexto
      });
      setCount(response.value);
    } catch (error) {
      console.error('Error incrementando el contador:', error);
    }
  };

  return (
    <div className="flex flex-col items-center bg-mach-gray p-4">
      <h2 className="text-2xl font-bold">Contador: {count}</h2>
      <button onClick={handleIncrement} className="mt-2 bg-mach-purple text-white py-2 px-4 rounded">
        Incrementar
      </button>
    </div>
  );
};

export default Counter;