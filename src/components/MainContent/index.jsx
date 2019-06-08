import React, { Component } from 'react';
import axios from 'axios';
import styles from './styles.module.scss';

import SearchField from '../SearchField';
import CaughtField from '../CaughtField';
import PokemonTable from '../PokemonTable';

class MainContent extends Component {
	state = {
		pokemons: [],
		filteredPokemons: [],
		textFieldValue: '',
		caught: 0,
		limit: 5,
		offset: 0,
	};

	componentDidMount() {
		const { limit, offset } = this.state;

		axios.get('https://pokeapi.co/api/v2/pokemon/', {
      		params: {limit, offset}
		})
		.then(response => {
			const promises = response.data.results.map(result => axios.get(result.url));

			return Promise.all(promises);
		})
		.then(response => {
			const pokemons = response.map(pokemon => ({
				id: pokemon.data.id,
				name: pokemon.data.name,
				types: pokemon.data.types,
				experience: pokemon.data.base_experience,
			}));

			this.setState({pokemons});
		});
	}

	handleChange = event => {
		const {pokemons} = this.state;
		const textFieldValue = event.target.value;

		const filteredPokemons = pokemons.filter(
			pokemon => pokemon.name.toLowerCase().startsWith(textFieldValue.toLowerCase())
		);

    this.setState({
			textFieldValue,
			filteredPokemons,
    });
  }

	handleCatchClick = () => {
		this.setState(state => ({
			caught: state.caught + 1
		}));
	}

	render() {
		const { pokemons, filteredPokemons, textFieldValue, caught } = this.state;

		return (
      <div className={styles.div}>
				<SearchField
					value={textFieldValue}
					onChange={this.handleChange}
				/>
				<CaughtField
					caught={caught}
				/>
        <PokemonTable
					pokemons={textFieldValue ? filteredPokemons : pokemons}
					onClick={this.handleCatchClick}
				/>
			</div>      
    );
	}
}

export default MainContent;