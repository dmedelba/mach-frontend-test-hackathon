'use client';
import { useState } from 'react';
import { revealTip } from '@/lib/api';

const TipSection = () => {
  const [tip, setTip] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  const handleRevealTip = async () => {
    setLoading(true);
    try {
      const userId = "dummyUserId"; // Simulación de obtención del id de usuario
      const response = await revealTip(userId);
      setTip(response.tip);
    } catch (error) {
      console.error("Error fetching tip:", error);
      alert("Hubo un problema al obtener el consejo. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tip-section">
      <h2>Tip Financiero MACH</h2>
      <button onClick={handleRevealTip} disabled={loading}>
        {loading ? "Pensando..." : tip ? "Quiero otro tip" : "Revelar Tip del Día"}
      </button>
      {tip && <p>{tip}</p>}
    </div>
  );
};

export default TipSection;