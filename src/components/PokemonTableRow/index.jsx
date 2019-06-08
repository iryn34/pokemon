import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import CatchButton from '../CatchButton';
import { upperCaseFirstLetter } from '../../lib/utils';

class PokemonTableRow extends Component {
  render() {
    const {pokemon, onClick} = this.props;

    return (
			<TableRow>
				<TableCell component="th" scope="row">{upperCaseFirstLetter(pokemon.name)}</TableCell>
				<TableCell align="right">{upperCaseFirstLetter(pokemon.types[0].type.name)}</TableCell>
				<TableCell align="right">{pokemon.experience}</TableCell>
				<TableCell align="right">
					<CatchButton
						onClick={onClick}
					/>
				</TableCell>
			</TableRow>
    );
  }
}

export default PokemonTableRow;
