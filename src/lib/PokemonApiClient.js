import axios from 'axios';

export default class PokemonApiClient {
  static getPokemonList = (limit, offset) => {
    const params = { limit, offset };
  
    return axios.get('https://pokeapi.co/api/v2/pokemon/', { params })
      .then(({ data: { results } }) => {
        const promises = results.map(({ url }) => axios.get(url));
  
        return Promise.all(promises);
      })
      .then(response => {
        const pokemons = response.map(
          ({ data: { id, name, types, base_experience: experience } }) => ({
            id, name, types, experience
          })
        );
  
        return pokemons;
      });
  };
}