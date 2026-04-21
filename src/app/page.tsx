import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';

const Page = () => {
  const [ping, setPing] = useState('');

  const handlePing = async () => {
    try {
      const response = await fetch('/api/ping');
      const data = await response.json();
      setPing(data.ping);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handlePing}>Ping</button>
      <p>Ping: {ping}</p>
    </div>
  );
};

export default Page;