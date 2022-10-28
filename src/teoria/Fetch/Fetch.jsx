import { useState } from 'react';
import Card from '../Card/Card';

const Fetch = () => {
  const [pokemones, setPokemones] = useState([]);
  const [error, setError] = useState(false);
  //Fetch nos permite manipular las peticiones HTTP.
  //Fetch es una función que nos devuelve una promise.
  //Tipo de petiones HTTP: GET, POST, PUT, PATCH, DELETE. (verbos)
  //GET: Nos trae data. Ej: Consultar una lista de usuarios.
  //POST: Nos permite mandar data. Ej: Mandar la data de un form.
  //PUT: Nos permite actualizar la data total. Ej Por más que el usuario haya cambiado solo su nombre, se envía toda la data de igual manera.
  //PATCH: Nos permite cambiar la data de forma parcial. Ej: si el usuario cambia solo un campo, solo ese campo se envía para actualizarse.
  //DELETE: Sirve para hacer un HARD DELETE.

  //Fetch por default es de tipo GET
  //El primer fetch me devuelve un body oculto, al cual voy a acceder con json().
  //El json() me devuelve una segunda promise.
  fetch('https://pokeapi.co/api/v2/pokemon')
    .then((res) => res.json().then((data) => setPokemones(data.results), setError(false)))
    .catch((error) => setError(true));

  //Cuando tenemos una propiedad booleana podemos hacer un renderizado condicional, que diga, si esto es true && (entonces) renderizame tal elemento.
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
  );
};

export default Fetch;
