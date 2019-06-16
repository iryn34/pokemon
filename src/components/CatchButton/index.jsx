import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import { catchPokemon } from '../../actions/actionCreators'; 
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
	catchPokemon: () => dispatch(catchPokemon())
});

class CatchButton extends Component {
	state = {
		disabled: false,
	};

	handleClick = () => {
		const { catchPokemon } = this.props;

		catchPokemon();

		this.setState({disabled: true});
	};

  render() {
		const {disabled} = this.state;

		return (
			<Button
				variant="contained"
				color="primary"
				disabled={disabled}
				onClick={() => this.handleClick()}       
			>
				Catch
			</Button>
		);
	}
}

export default connect(null, mapDispatchToProps)(CatchButton);