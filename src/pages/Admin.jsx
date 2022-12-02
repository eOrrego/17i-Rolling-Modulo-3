import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Loader from '../components/Loader/Loader';
import FormCreateProduct from '../components/FormProductos/FormCreateProduct';
import { getAllProducts } from '../services/productsService';

const Admin = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [createProduct, setCreateProduct] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const { data } = await getAllProducts();
      console.log(data);
      setProductos(data);
    };
    fetchProducts();
    setLoading(false);
  }, []);
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Admin</h1>
      <button className="btn btn-primary my-3" onClick={() => setCreateProduct(!createProduct)}>
        {createProduct ? 'Ver Tabla' : 'Agregar producto'}
      </button>
      {createProduct ? (
        <FormCreateProduct />
      ) : (
        <Loader isLoading={loading}>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Actiones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto, index) => (
                <tr>
                  <td>{++index}</td>
                  <td>{producto.name}</td>
                  <td>{producto.price}</td>
                  <td>boton</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Loader>
      )}
    </div>
  );
};

export default Admin;
