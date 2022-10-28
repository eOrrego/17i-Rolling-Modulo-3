import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../components/Card/Card'

const Home = () => {
  const [pokemones, setPokemones] = useState([]);
  const [error, setError] = useState(false); 

  const fetchPokemones = async () => {
    try {
      const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon');
      setPokemones(data.results)
      setError(false);
    } catch (error) {
      setError(true);
    }
  }

  useEffect(() => {
    fetchPokemones();
  }, [])

  return (
    <div className="container">
      <div className="row text-center mt-5">
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
    </div>
  )
}

export default Home