import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function PokemonApi() {

  const [pokemones, setPokemones] = useState([]);

  const llamarApi = async () => {
    let response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0');
    let lista = response.data.results

    setPokemones(lista);
  }
  return (
    <div className='pokemon-container'>
      <button onClick={llamarApi}>Fetch Pokemon</button>
      {
        pokemones.map((item, index) => {
          return <div className='lista'>
            <p>{index + 1} {item.name}</p>
          </div>
        })
      }
    </div>
  )
}

export default PokemonApi