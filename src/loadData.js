const POKEMON_LIST_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

function loadData(url) {
  return fetch(url)
    .then(res => res.json());
}

export const loadPokemonList = loadData(`${POKEMON_LIST_URL}`);
