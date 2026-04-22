import { useState, useEffect } from 'react';
import { apiFetch } from '@/lib/api';

const ContadorPage = () => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const fetchContador = async () => {
      const response = await apiFetch('/api/contador');
      setContador(response.contador);
    };
    fetchContador();
  }, []);

  const handleIncrement = async () => {
    try {
      const response = await apiFetch('/api/contador', {
        method: 'POST',
        body: JSON.stringify({ incremento: 1 }),
      });
      setContador(response.contador);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={handleIncrement}>Incrementar</button>
    </div>
  );
};

export default ContadorPage;