export const getRandomTip = async (): Promise<string> => {
  const tips = [
    "Ahorra al menos el 20% de tus ingresos.",
    "Invierte en un fondo de emergencia.",
    "Diversifica tus inversiones.",
    "Revisa tus gastos mensuales.",
  ];
  return new Promise(resolve => setTimeout(() => resolve(tips[Math.floor(Math.random() * tips.length)]), 200));
};