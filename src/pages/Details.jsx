import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader/Loader';

const Details = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchPokemon();
  }, [name]);

  return (
    <div className="container">
      <Loader isLoading={loading}>
        <div className="row">
          <h1>Nombre: {pokemon?.name}</h1>
          <h4>Peso: {pokemon?.weight}</h4>
          <h4>Talla: {pokemon?.height}</h4>
          <img src={pokemon?.sprites?.front_default} className="h-25" alt="" />
        </div>
      </Loader>
    </div>
  );
};

export default Details;
