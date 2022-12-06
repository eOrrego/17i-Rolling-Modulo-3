import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Card from '../components/Card/Card';
import Loader from '../components/Loader/Loader';
import { useContextState } from '../context/contextState';
import { getAllProducts } from '../services/productsService';

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { contextState } = useContextState();
  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const {data} = await getAllProducts();
        console.log(data);
        setProductos(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
    setLoading(false);
  }, [])
  return (
    <div className="container">
      {
        contextState.userLogged ? <>
      <Loader isLoading={loading}>
        <div className="row text-center mt-5">
          <h1 className="text-info">PRODUCTOS DISPONIBLES</h1>
          {error && (
            <div>
              <h4 className="text-danger font-weight-700">
                Los productos no están disponibles
              </h4>
            </div>
          )}
          <Row>
            {productos?.map((producto) => (
              <Card key={producto.name} name={producto.name} img={producto.image}/>
            ))}
          </Row>
        </div>
      </Loader>
        </> : <div>
        <h1 className="text-info">Debe iniciar Sesión</h1>
        </div>
      }
    </div>
  );
};

export default Home;
