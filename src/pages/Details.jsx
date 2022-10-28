import axios from 'axios';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const Details = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPokemon();
  }, [name]);

  return (
    <div className="container">
      <div className="row">
        <h1>Nombre: {pokemon?.name}</h1>
        <h4>Peso: {pokemon?.weight}</h4>
        <h4>Talla: {pokemon?.height}</h4>
        <img src={pokemon?.sprites?.front_default} className="h-25" alt="" />
      </div>
    </div>
  )
}

export default Details