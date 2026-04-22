import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContadorPage = () => {
  const [contador, setContador] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerContador = async () => {
      try {
        const response = await axios.get('/api/contador');
        setContador(response.data.contador);
      } catch (err) {
        setError(err.message);
      }
    };
    obtenerContador();
  }, []);

  const handleIncrement = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/contador');
      setContador(response.data.contador);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={handleIncrement} disabled={loading}>
        {loading ? 'Cargando...' : 'Incrementar'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ContadorPage;