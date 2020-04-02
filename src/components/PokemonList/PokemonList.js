import React from 'react';
import PropTypes from 'prop-types';

import { PokemonCard } from '../PokemonCard';
import { pokeClasses } from '../../pokeClasses';
import './PokemonList.scss';

export const PokemonList = ({
  pokemons,
  limit,
  handleOnClick,
  handleLoadMore,
}) => {
  const card = pokeClasses.filter(
    item => item.id <= limit,
  ).map((pokeClass) => {
    return (
      <PokemonCard
        key={pokeClass.id}
        pokeClass={pokeClass}
        pokemons={pokemons}
        handleOnClick={handleOnClick}
      />
    );
  });

  return (
    <>
      <section className="pokemon-list">
        {card}
      </section>
      <button
        type="button"
        className="button"
        onClick={() => handleLoadMore()}
      >
        Load more
      </button>
    </>
  );
};

PokemonList.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  limit: PropTypes.number.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  handleLoadMore: PropTypes.func.isRequired,
};
