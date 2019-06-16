import * as ACTION_TYPES from '../actions/actionTypes';
import PokemonApiClient from '../lib/PokemonApiClient';

export const fetchPokemons = count => {
  return dispatch => {
    dispatch(toggleSpinner(true));
    PokemonApiClient.getPokemonList(count, 0)
      .then(pokemons => {
        dispatch(toggleSpinner(false));
        dispatch({
          type: ACTION_TYPES.FETCH_POKEMONS,
          pokemons
        });
      })
  };
};

export const filterPokemons = name => {
  return {
    type: ACTION_TYPES.FILTER_POKEMONS,
    name
  };
};

export const changeRowsPerPage = rowsPerPage => {
  return {
    type: ACTION_TYPES.CHANGE_ROWS_PER_PAGE,
    rowsPerPage
  };
};

export const changePage = page => {
  return {
    type: ACTION_TYPES.CHANGE_PAGE,
    page
  };
};

export const catchPokemon = () => {
  return {
    type: ACTION_TYPES.CATCH_POKEMON
  };
};

export const toggleSpinner = isLoading => {
  return {
    type: ACTION_TYPES.TOGGLE_SPINNER,
    isLoading
  }
}