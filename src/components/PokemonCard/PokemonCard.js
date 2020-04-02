import React from 'react';
import PropTypes from 'prop-types';
import sprites from '../../assets/sprites.png';
import './PokemonCard.scss';

export const PokemonCard = ({
  pokeClass,
  handleOnClick,
  pokemons,
}) => {
  const { id, backgroundPosition } = pokeClass;
  const style = {
    backgroundImage: `url(${sprites})`,
    backgroundPosition,
  };

  return (
    <div className="pokemon-card">
      {
        pokemons.length
          ? (
            <>
              <div style={style} className="pokemon-cell" />
              <p className="pokemon-name">
                {pokemons[id - 1].name}
              </p>
              <button
                type="button"
                className="pokemon-btn"
                onClick={() => handleOnClick(id)}
              />
            </>
          )
          : (
            <p>Loading again...</p>
          )
      }
    </div>
  );
};

PokemonCard.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  pokeClass: PropTypes.shape({
    id: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }).isRequired,
  handleOnClick: PropTypes.func.isRequired,
};
