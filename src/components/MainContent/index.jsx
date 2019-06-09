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
		page: 0,
	};

	componentDidMount() {
		const { limit, page } = this.state;

		axios.get('https://pokeapi.co/api/v2/pokemon/', {
      		params: {limit, offset: limit * page}
		})
		.then(({data: { results }}) => {
			const promises = results.map(({url}) => axios.get(url));

			return Promise.all(promises);
		})
		.then(response => {
			const pokemons = response.map(({data: { id, name, types, base_experience: experience }}) => ({
				id, name, types, experience
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

	handleChangePage = (newPage) => {
		this.setState({page: newPage});
	}
	
	handleChangeRowsPerPage = event => {
		this.setState({rowsPerPage: parseInt(event.target.value, 10)});
	}

	render() {
		const { pokemons, filteredPokemons, textFieldValue, caught, page, limit } = this.state;
		// console.log(this.state);

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
					page={page}
					rowsPerPage={limit}
					pokemons={textFieldValue ? filteredPokemons : pokemons}
					onCatchClick={this.handleCatchClick}
					onChangePage={(event, newPage) => this.handleChangePage(newPage)}
					onChangeRowsPerPage={event => this.handleChangeRowsPerPage(event)}
				/>
			</div>      
    	);
	}
}

export default MainContent;