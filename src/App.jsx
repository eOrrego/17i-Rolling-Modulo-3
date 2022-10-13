import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import {productos} from './utils/data';

const App = () => {
  //Los componentes son piezas de React que nos permiten reutilizar el código.
  //Se crean archivos con una arrow fuction (atajo: rafce) que retornan un valor en JSX.
  return (
    <>
      <Navbar title="Rolling Code School" logo='logo' />
      <div className="container">
        <div className="row mt-5">
          {/* {productos.map((producto) => (
            <Card key={producto.id} name={producto.title} stock={producto.rating.count} img={producto.image} />
          ))} */}
          {productos.map(({id, title, image, rating}) => (
            //Las props nos sirven para pasar info del padre al hijo.
            //También para hacer reutilizable y dinámica la info de los componentes.
            <Card key={id} name={title} stock={rating.count} img={image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
