import Navbar from './components/Navbar/Navbar';
import Contador from './components/Contador/Contador';
import Card from './components/Card/Card'; // Se importa de esta manera porque el export del archivo es un export default
import {productos} from './utils/data'; //Se importa de esta manera porque hay varios export deontro del archivo

const App = () => {
  //Los componentes son piezas de React que nos permiten reutilizar el código.
  //Se crean archivos con una arrow fuction (atajo: rafce) que retornan un valor en JSX.
  return (
    <>
      <Navbar title="Rolling Code School" logo='logo' />
      <div className="container">
        <div className="row my-5">
        <Contador initialStateCount={5000}/>
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
            <Card key={id} name={title} stock={rating.count} img={image} />
          )).slice(0, 4)}
        </div>
      </div>
    </>
  );
};

export default App;
