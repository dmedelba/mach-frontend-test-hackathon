import React, { useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [estado, setEstado] = useState('');

  const handlePing = async () => {
    try {
      const response = await axios.get('/api/ping');
      setEstado(response.data.ping);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handlePing}>Ping</button>
      <p>Estado: {estado}</p>
    </div>
  );
};

export default Page;