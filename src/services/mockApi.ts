const mockTips = [
  "Ahorra al menos el 20% de tus ingresos.",
  "Invierte en un fondo de emergencia.",
  "Diversifica tus inversiones para reducir riesgos."
];

export const fetchRandomTip = async (): Promise<string> => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      const randomTip = mockTips[Math.floor(Math.random() * mockTips.length)];
      resolve(randomTip);
    }, 200);
  });
};