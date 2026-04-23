export const getRandomTip = async (): Promise<string> => {
  const tips = [
    "Ahorra al menos el 20% de tus ingresos.",
    "Evita las deudas de consumo.",
    "Invierte en un fondo de emergencia.",
    "Compara precios antes de comprar.",
    "Planifica tu presupuesto mensual."
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomTip = tips[Math.floor(Math.random() * tips.length)];
      resolve(randomTip);
    }, 200);
  });
};