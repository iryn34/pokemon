import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

import PokemonTableRow from '../PokemonTableRow';
import TablePaginationActions from '../TablePaginationActions';
import styles from './styles.module.scss';

import { changeRowsPerPage, changePage } from '../../actions/actionCreators'; 

const mapStateToProps = state => ({
	filteredPokemons: state.filteredPokemons,
	rowsPerPage: state.rowsPerPage,
	page: state.page,
	count: state.count
});

const mapDispatchToProps = dispatch => ({
	changeRowsPerPage: rowsPerPage => dispatch(changeRowsPerPage(rowsPerPage)),
	changePage: newPage => dispatch(changePage(newPage))
});

class PokemonTable extends Component {
  handleChangePage = (_event, newPage) => {
		const { changePage } = this.props;

		changePage(newPage);
  };
  
  handleChangeRowsPerPage =	({ target: { value } }) => {
		const { changeRowsPerPage } = this.props;

		changeRowsPerPage(value);
	}

  renderTableHeader() {
    return (
      <TableHead>
				<TableRow>
					<TableCell className={styles.tableCell}>Name</TableCell>
					<TableCell className={styles.tableCell} align="right">Types</TableCell>
					<TableCell className={styles.tableCell} align="right">Experience</TableCell>
					<TableCell className={styles.tableCell} align="right">Caught</TableCell>
				</TableRow>
			</TableHead> 
    );
  }

  renderTableBody() {
    return (
      <TableBody>
        {this.renderRows()}
      </TableBody>
    );
  }

  renderTableFooter() {
    const { page, rowsPerPage, count } = this.props;

    return (
      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            colSpan={3}
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: { 'aria-label': 'Rows per page' },
              native: true,
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
          />
        </TableRow>
      </TableFooter>
    );
  }

  renderRows() {
    const { page, rowsPerPage, filteredPokemons } = this.props;

    return filteredPokemons.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(pokemon => {
      return <PokemonTableRow 
        key={pokemon.id}
        pokemon={pokemon}
      />;
    });
  }

  render() {
    return (
			<Card>
				<Table>
          {this.renderTableHeader()}
          {this.renderTableBody()}
          {this.renderTableFooter()}
				</Table>
			</Card>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonTable);
