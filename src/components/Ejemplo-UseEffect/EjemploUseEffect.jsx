import { useEffect } from "react";
// import { productos } from '../../utils/data';

const EjemploUseEffect = () => {
  const id = ''
  useEffect(() => {
    //Así se ejecuta el useEffect cuando se monta el componente.
    //Fase componentDidMount.
  }, [])

  useEffect(() => {
    //Agregando una variable en el array de depencias.
    //el componente está a la escucha y se actualiza según esa variable.
  }, [id]) //Cuando el id cambie el componente se actualizará - Fase componentDidUpdate.

  useEffect(() => {
    //Puedo usar un solo useEffect para el montado y desmontado del componente.
    return () => {
      //Este return se ejcuta cuando el componente se desmonta.
      // Fase componentWillUnmount.
    };
  }, [])

  // const buscarProductoPorId = (id) => productos.find(producto => producto.id === id);
  
  // const buscarProducto = (id) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const producto = buscarProductoPorId(id);
  //       if (producto) {
  //         resolve(producto);
  //       }else {
  //         reject(`El producto con el id: ${id} no existe`);
  //       }
  //     }, 3000)
  //   })
  // };

  // buscarProducto(5678)
  //   .then((producto) => {console.log(producto)})
  //   .catch((err) => {console.warn(err)})

  return (
    <></>
  )
}

export default EjemploUseEffect