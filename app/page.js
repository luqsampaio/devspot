import CustomComponent from './components/retangulo.js';
import Botton from './components/botton.js'; // Importe o componente Botton
import Header from './components/Header/WrapHeader.js';



const Home = () => {
  return (
    <div>
      <Header text="Home"/>
      <CustomComponent />
      <Botton /> 
    </div>
  );
};

export default Home;


