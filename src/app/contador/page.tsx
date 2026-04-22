import { useState, useEffect } from 'react';
import { apiFetch } from '@/lib/api';

export default function ContadorPage() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    apiFetch('/api/contador')
      .then((data) => setContador(data.valor))
      .catch((err) => console.error('Error al obtener contador:', err));
  }, []);

  const handleIncrement = async () => {
    try {
      const data = await apiFetch('/api/contador', {
        method: 'POST',
      });
      setContador(data.valor);
    } catch (err) {
      console.error('Error al incrementar contador:', err);
    }
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={handleIncrement}>Incrementar</button>
    </div>
  );
}