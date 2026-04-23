export const getRandomTip = async () => {
  const tips = [
    { tip: 'Ahorra al menos el 20% de tus ingresos.' },
    { tip: 'Invierte en un fondo de emergencia.' },
    { tip: 'Diversifica tus inversiones para minimizar riesgos.' },
  ];
  return new Promise(resolve => setTimeout(() => resolve(tips[Math.floor(Math.random() * tips.length)]), 200));
};