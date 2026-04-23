'use client';
import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const targetValue = 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    if (count >= targetValue) {
      setNotificationVisible(true);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold">Contador: {count}</h1>
      {notificationVisible && (
        <div className="mt-4 text-green-600">
          ¡Felicitaciones! El contador ha alcanzado {targetValue}.
        </div>
      )}
    </div>
  );
};

export default Counter;