import React from 'react';
import Logo from './components/Header/Logo.js';
import CustomComponent from './components/retangulo.js';
import Botton from './components/botton.js'; // Importe o componente Botton


const Home = () => {
  return (
    <div>
      <Logo />
      <CustomComponent />
      <Botton /> 
    </div>
  );
};

export default Home;


