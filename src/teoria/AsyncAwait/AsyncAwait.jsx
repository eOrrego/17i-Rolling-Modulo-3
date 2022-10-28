import { useEffect, useState } from "react";
import Card from "../Card/Card";

const AsyncAwait = () => {
  const [pokemones, setPokemones] = useState([]);
  const [error, setError] = useState(false); 
  //Para prevenir lo que se llama CallBack Hell existe Async - Await.

  const fetchPokemones = async () => {
    //Try = intentá hacer esto.
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon');
      const { results } = await res.json();
      setPokemones(results)
      setError(false);
    } catch (error) {
      //Bueno si no podés o pasó algo tomame el error aqui.
      setError(true);
    }
  }

  useEffect(() => {
    fetchPokemones();
  }, [])


  return (
    <div className="container my-5">
      <h1 className="text-info">POKEMONES</h1>
      {error && (
        <div>
          <h4 className="text-danger font-weight-700">Los pokemones no están disponibles</h4>
        </div>
      )}
      <div className="row">
        {pokemones.map((pokemon) => (
          <Card key={pokemon.name} name={pokemon.name} />
        )).slice(0, 6)}
      </div>
    </div>
  )
}

export default AsyncAwait