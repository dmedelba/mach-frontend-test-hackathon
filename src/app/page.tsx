import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Page = () => {
  const [ping, setPing] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('/api/ping')
      .then(response => {
        setPing(response.data.ping);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h1>Estado: {ping}</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Page;