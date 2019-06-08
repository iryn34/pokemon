import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class CatchButton extends Component {
	state = {
		disabled: false,
	};

	handleClick = () => {
		const {onClick} = this.props;

		onClick();

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

export default CatchButton;