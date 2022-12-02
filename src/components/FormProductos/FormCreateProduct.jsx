import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { createProducts } from '../../services/productsService';

const FormCreateProduct = () => {
  const [newProduct, setNewProduct] = useState({});
  const handleChange = (e) => {
    setNewProduct({...newProduct, [e.target.id]: e.target.value});
  }
  const crearProducto = async () => {
    await createProducts(newProduct)
  }
  return (
    <div>
      <h1>Agregar Producto</h1>
      <Form>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" onChange={(e) => handleChange(e)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="text" onChange={(e) => handleChange(e)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="image">
        <Form.Label>Imágen</Form.Label>
        <Form.Control type="text" onChange={(e) => handleChange(e)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="stock">
        <Form.Label>Stock</Form.Label>
        <Form.Control type="text" onChange={(e) => handleChange(e)}/>
      </Form.Group>
      <Button type="button" onClick={crearProducto}>Crear</Button>
    </Form>
    </div>
  )
}

export default FormCreateProduct