import React from 'react';
import PropTypes from 'prop-types';
import './PokemonDetails.scss';

export const PokemonDetails = ({ pokemonItem }) => {
  const {
    id,
    name,
    types,
    attack,
    defence,
    hp,
    spattack,
    spdefence,
    speed,
    weight,
    moves,
  } = pokemonItem;

  return (
    <div className="details">
      {
        Object.keys(pokemonItem).length
          ? (
            <div className="details-card">
              <img
                src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
                className="details-card__img"
                alt="Pokemon"
              />
              <p className="details-card__title">
                {`${name.charAt(0).toUpperCase()}${name.slice(1)}
                #${id.toString().padStart(3, '0')}`}
              </p>
              <table className="details-card__table">
                <tbody>
                  <tr>
                    <td>Type</td>
                    <td>
                      {types.map(type => (
                        <p key={type}>{type}</p>
                      ))}
                    </td>
                  </tr>
                  <tr>
                    <td>Attack</td>
                    <td>{attack}</td>
                  </tr>
                  <tr>
                    <td>Defence</td>
                    <td>{defence}</td>
                  </tr>
                  <tr>
                    <td>HP</td>
                    <td>{hp}</td>
                  </tr>
                  <tr>
                    <td>SP Attack</td>
                    <td>{spattack}</td>
                  </tr>
                  <tr>
                    <td>SP Defence</td>
                    <td>{spdefence}</td>
                  </tr>
                  <tr>
                    <td>Speed</td>
                    <td>{speed}</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                    <td>{weight}</td>
                  </tr>
                  <tr>
                    <td>Total Moves</td>
                    <td>{moves}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )
          : (
            <p className="details__header">Choose a Pokemon</p>
          )
      }
    </div>
  );
};

PokemonDetails.propTypes = {
  pokemonItem: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.string),
    attack: PropTypes.number,
    defence: PropTypes.number,
    hp: PropTypes.number,
    spattack: PropTypes.number,
    spdefence: PropTypes.number,
    speed: PropTypes.number,
    weight: PropTypes.number,
    moves: PropTypes.number,
  }).isRequired,
};
