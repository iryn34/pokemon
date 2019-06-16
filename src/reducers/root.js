import * as ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  pokemons: [],
  filteredPokemons: [],
  rowsPerPage: 5,
  page: 0,
  caught: 0,
  count: 100,
  isLoading: false
};

const filterPokemons = (state, action) => {
  const filteredPokemons = state.pokemons.filter(
    ({ name }) => name.toLowerCase().startsWith(action.name.toLowerCase())
  );

  return {
    ...state,
    filteredPokemons,
    count: filteredPokemons.length
  }
};

export const root = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_POKEMONS:
      return {
        ...state,
        pokemons: action.pokemons,
        filteredPokemons: action.pokemons
      };
    case ACTION_TYPES.FILTER_POKEMONS:
      return filterPokemons(state, action);
    case ACTION_TYPES.CHANGE_ROWS_PER_PAGE:
      return {
        ...state,
        rowsPerPage: parseInt(action.rowsPerPage, 10)
      };
    case ACTION_TYPES.CHANGE_PAGE:
      return {
        ...state,
        page: action.page
      };
    case ACTION_TYPES.CATCH_POKEMON:
      return {
        ...state,
        caught: state.caught + 1
      };
    case ACTION_TYPES.TOGGLE_SPINNER:
      return {
        ...state,
        isLoading: action.isLoading
      };
    
    default:
      return state;
  }
};