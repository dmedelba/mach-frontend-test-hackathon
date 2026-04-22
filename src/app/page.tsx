import React from 'react';

function WelcomePage() {
  const handleAbrirCuenta = () => {
    alert('Próximamente');
  };

  return (
    <div>
      <h1>Bienvenido a MACHBank</h1>
      <p>Abre una cuenta y comienza a ahorrar y invertir con nosotros</p>
      <button onClick={handleAbrirCuenta}>Abrir cuenta</button>
    </div>
  );
}

export default WelcomePage;