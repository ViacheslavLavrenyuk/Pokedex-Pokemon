import React, { useState, useEffect } from 'react';
import './App.scss';
import { PokemonList } from './components/PokemonList';
import { PokemonDetails } from './components/PokemonDetails';
import { loadPokemonList } from './loadData';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(12);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemonItem, setPokemonItem] = useState({});

  useEffect(() => {
    loadPokemonList
      .then((pokemonsFromApi) => {
        const pokemonsArr = pokemonsFromApi.results;

        setIsLoaded(true);

        return setPokemons(pokemonsArr);
      });
  }, [limit]);

  const handleOnClick = (id) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then((data) => {
        const pokemonTypes = [];

        data.types.forEach((item) => {
          pokemonTypes.push(item.type.name);
        });
        const currentPokemon = {
          name: data.name,
          id: data.id,
          types: pokemonTypes,
          attack: data.stats[4].base_stat,
          defence: data.stats[3].base_stat,
          hp: data.stats[5].base_stat,
          spattack: data.stats[2].base_stat,
          spdefence: data.stats[1].base_stat,
          speed: data.stats[0].base_stat,
          weight: data.weight,
          moves: data.moves.length,
        };

        setPokemonItem(currentPokemon);
      });
  };

  const handleLoadMore = () => {
    const newLimit = limit + 12;

    setLimit(newLimit);
    setPokemonItem({});
  };

  return (
    <>
      <h1 className="header">Pokedex</h1>
      <div className="page">
        <div className="page__content">
          {
            isLoaded
              ? (
                <PokemonList
                  pokemons={pokemons}
                  limit={limit}
                  handleOnClick={handleOnClick}
                  handleLoadMore={handleLoadMore}
                />
              )
              : (
                <p className="page__loading">Loading...</p>
              )
          }
        </div>
        <div className="page__sidebar">
          <PokemonDetails
            pokemonItem={pokemonItem}
          />
        </div>
      </div>
    </>
  );
};

export default App;
