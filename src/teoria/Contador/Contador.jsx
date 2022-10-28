import { useEffect, useState } from 'react';
import ButtonCount from '../ButtonCount/ButtonCount';

//Podemos setear por default un prop.
const Contador = ({initialStateCount = 0}) => {
  //El useState nos devuelve 2 valores: 1>El estado 2>La función para cambiar ese estado.
  //Sintaxis: Siempre la función que setea el estado, debe llamarse igual, con la palabra set antes y con camelCase.
  const [count, setCount] = useState(initialStateCount);

  useEffect(() => {
    console.log(`Has hecho click ${count} veces`)
  })

  const handlerIncrement = () => {
    setCount(count + 1)
  };

  const handlerDecrement = () => {
    setCount(count - 1)
  };

  const handlerReset = () => {
    setCount(initialStateCount)
  };

  return (
    <>
      <h2>
        Contador: <span className="text-danger">{count}</span>
      </h2>
      <div className="d-flex">
        <ButtonCount text="Aumentar" onclick={handlerIncrement}/>
        <ButtonCount text="Decrementar" onclick={handlerDecrement}/>
        <ButtonCount text="Resetear" onclick={handlerReset}/>
        
        {/* CAMBIAMOS ESTO PARA MEJORAR NUESTRO CÓDIGO
        <button
          className="btn btn-info text-white mt-3 me-2"
          onClick={() => setCount(count + 1)}
        >
          Aumentar
        </button>
        <button className="btn btn-info text-white mt-3 me-2"
        onClick={() => setCount(count - 1)}
        >
          Decrementar
        </button>
        <button className="btn btn-info text-white mt-3 me-2"
        onClick={() => setCount(initialStateCount)}
        >Resetear</button> */}
      </div>
    </>
  );
};

export default Contador;
