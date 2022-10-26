import Navbar from './components/Navbar/Navbar';
import Contador from './components/Contador/Contador';
import Card from './components/Card/Card'; // Se importa de esta manera porque el export del archivo es un export default
import { productos } from './utils/data'; //Se importa de esta manera porque hay varios export deontro del archivo
import AsyncAwait from './components/AsyncAwait/AsyncAwait';
// import Fetch from './components/Fetch/Fetch';
// import EjemploUseEffect from './components/Ejemplo-UseEffect/EjemploUseEffect';
// import Input from './components/Input/Input';

const App = () => {
  //PARA CREAR APP REACT USAMOS EL COMANDO npx create-react-app nombreDeMiApp
  //Los componentes son piezas de React que nos permiten reutilizar el código.
  //Se crean archivos con una arrow fuction (atajo: rafce) que retornan un valor en JSX.
  return (
    <>
      <Navbar title="Rolling Code School" logo='logo' />
      <div className="container">
        <div className="row my-5">
        <Contador />
        </div>
      </div>
      <div className="container">
        <div className="row my-5">
          {/* {productos.map((producto) => (
            <Card key={producto.id} name={producto.title} stock={producto.rating.count} img={producto.image} />
          ))} */}
          {productos.map(({id, title, image, rating}) => (
            //Las props nos sirven para pasar info del padre al hijo.
            //También para hacer reutilizable y dinámica la info de los componentes.
            //El atributo key debe ser único y sirve para mejorar la performance de react.
            <Card key={id} name={title} stock={rating.count} img={image} />
          )).slice(0, 4)}
        </div>
      </div>
      {/* <EjemploUseEffect />
      <div className="container mb-5">
        <Input placeholder="hola" type="text" />
        <Input type="text" />
        <Input type="text" />
      </div> */}
      {/* <Fetch /> */}
      <AsyncAwait />
    </>
  );
};

export default App;
