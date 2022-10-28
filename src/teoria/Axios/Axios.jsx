import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';

const Axios = () => {
  const [pokemones, setPokemones] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPokemones = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
      setPokemones(data.results);
      setIsLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemones();
  }, [])

  return (
    <div className="container my-5">
      <h1 className="text-info">POKEMONES</h1>
      {error && (
        <div>
          <h4 className="text-danger font-weight-700">
            Los pokemones no están disponibles
          </h4>
        </div>
      )}
      <div className="row">
        {isLoading && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        {pokemones
          .map((pokemon) => <Card key={pokemon.name} name={pokemon.name} />)
          .slice(0, 6)}
      </div>
    </div>
  );
};

export default Axios;
