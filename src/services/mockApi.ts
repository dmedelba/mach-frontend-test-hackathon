const tips = [
  "Evita los gastos hormiga.",
  "Ahorra al menos el 20% de tus ingresos.",
  "Invierte en tu educación financiera."
];

export const mockFetchTip = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomTip = tips[Math.floor(Math.random() * tips.length)];
      resolve(randomTip);
    }, 500);
  });
};