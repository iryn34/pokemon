import React, { Component } from 'react';
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

class PokemonTable extends Component {
  state = {
    count: 20,
    page: 0,
    rowsPerPage: 5,
  };

  handleChangePage = (event, newPage) => {
    this.setState({page: newPage});
  }

  handleChangeRowsPerPage = event => {
    this.setState({rowsPerPage: parseInt(event.target.value, 10)});
  }

  renderTableHeader() {
    return (
      <TableHead>
				<TableRow>
					<TableCell>Name</TableCell>
					<TableCell align="right">Types</TableCell>
					<TableCell align="right">Experience</TableCell>
					<TableCell align="right">Caught</TableCell>
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
    const {count, page, rowsPerPage} = this.state;

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
            ActionsComponent={() => TablePaginationActions({
              count, page, rowsPerPage, onChangePage: this.handleChangePage
            })}
          />
        </TableRow>
      </TableFooter>
    );
  }

  renderRows() {
    const {pokemons, onClick } = this.props;

    return pokemons.map(pokemon => {
      return <PokemonTableRow 
        key={pokemon.id}
        pokemon={pokemon}
        onClick={onClick}
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

export default PokemonTable;
