import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import Loader from '../components/Loader/Loader';

const Home = () => {
  const [pokemones, setPokemones] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const urlBase = 'https://pokeapi.co/api/v2/pokemon';
  const [page, setPage] = useState({
    next: '',
    prev: null,
  });

  const fetchPokemones = async (url) => {
    try {
      setLoading(true);
      const { data } = await axios.get(url);
      setPokemones(data.results);
      setPage({ next: data.next, prev: data.previous });
      setError(false);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemones(urlBase);
  }, []);

  return (
    <div className="container">
      <Loader isLoading={loading}>
        <div className="row text-center mt-5">
          <h1 className="text-info">POKEMONES</h1>
          {error && (
            <div>
              <h4 className="text-danger font-weight-700">
                Los pokemones no están disponibles
              </h4>
            </div>
          )}
          <div className="row">
            {pokemones.map((pokemon) => (
              <Card key={pokemon.name} name={pokemon.name} />
            ))}
          </div>
        </div>
      </Loader>
      <div className="row justify-content-between mt-5">
        <button
          type="button"
          onClick={() => fetchPokemones(page.prev)}
          disabled={!page.prev}
          className={`btn ${
            !page.prev ? 'btn-secondary' : 'btn-success'
          }  w-25`}
        >
          Anterior
        </button>
        {page.next && (
          <button
            type="button"
            onClick={() => fetchPokemones(page.next)}
            className="btn btn-success w-25"
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
