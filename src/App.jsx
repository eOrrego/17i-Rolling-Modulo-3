import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import {productos} from './utils/productos';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row mt-5">
          {productos.map((producto) => (
            <Card key={producto.id} name={producto.title} stock={producto.rating.count} img={producto.image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
