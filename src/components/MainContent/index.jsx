import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './styles.module.scss';

import SearchField from '../SearchField';
import CaughtField from '../CaughtField';
import Spinner from '../Spinner';
import PokemonTable from '../PokemonTable';
import { 
	fetchPokemons, 
	filterPokemons
} from '../../actions/actionCreators'; 

const mapStateToProps = state => ({
	count: state.count,
	isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
	fetchPokemons: (count) => dispatch(fetchPokemons(count)),
	filterPokemons: name => dispatch(filterPokemons(name))
});

class MainContent extends Component {
	state = {
		textFieldValue: ''
	};

	componentDidMount() {
		const { count, fetchPokemons } = this.props;

		fetchPokemons(count);
	}

	handleChange = event => {
		const { filterPokemons } = this.props;
		const textFieldValue = event.target.value;

		filterPokemons(textFieldValue);

    this.setState({ textFieldValue });
  }

	render() {
		const { textFieldValue } = this.state;
		const { isLoading } = this.props;

		return (
			<div className={styles.div}>
				<SearchField
					value={textFieldValue}
					onChange={this.handleChange}
				/>
				<CaughtField />
				{ isLoading ? (<Spinner />) : (<PokemonTable />) }
			</div>      
    	);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);