import React, { useState } from 'react';

const ComponentePrincipal = () => {
  const [componenteRenderizado, setComponenteRenderizado] = useState(null);

  const handleClickBoton1 = () => {
    setComponenteRenderizado(<Componente1 />);
  };

  const handleClickBoton2 = () => {
    setComponenteRenderizado(<Componente2 />);
  };

  const handleClickBoton3 = () => {
    setComponenteRenderizado(<Componente3 />);
  };

  return (
    <div>
      <button onClick={handleClickBoton1}>Botón 1</button>
      <button onClick={handleClickBoton2}>Botón 2</button>
      <button onClick={handleClickBoton3}>Botón 3</button>
      {componenteRenderizado}
    </div>
  );
};

const Componente1 = () => {
  return <h1>Componente 1</h1>;
};

const Componente2 = () => {
  return <h1>Componente 2</h1>;
};

const Componente3 = () => {
  return <h1>Componente 3</h1>;
};

export default ComponentePrincipal;
