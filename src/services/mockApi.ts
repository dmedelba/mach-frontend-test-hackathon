const tips = [
  "Ahorra al menos el 20% de tus ingresos.",
  "Invierte en un fondo de emergencia.",
  "No gastes más de lo que ganas.",
  "Compara precios antes de comprar.",
  "Aprende sobre inversiones a largo plazo."
];

export const mockGetRandomTip = async (): Promise<{ tip: string }> => {
  return new Promise<{ tip: string }>((resolve) =>
    setTimeout(() => {
      const randomTip = tips[Math.floor(Math.random() * tips.length)];
      resolve({ tip: randomTip });
    }, 200)
  );
};