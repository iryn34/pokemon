import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import CatchButton from '../CatchButton';
import { upperCaseFirstLetter } from '../../lib/utils';
import styles from './styles.module.scss';

class PokemonTableRow extends Component {
  render() {
    const { pokemon } = this.props;

    return (
			<TableRow>
				<TableCell className={styles.tableCell} component="th" scope="row">{upperCaseFirstLetter(pokemon.name)}</TableCell>
				<TableCell className={styles.tableCell} align="right">{upperCaseFirstLetter(pokemon.types[0].type.name)}</TableCell>
				<TableCell className={styles.tableCell} align="right">{pokemon.experience}</TableCell>
				<TableCell className={styles.tableCell} align="right">
					<CatchButton />
				</TableCell>
			</TableRow>
    );
  }
}

export default PokemonTableRow;
