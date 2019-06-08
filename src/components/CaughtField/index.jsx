import React, { Component } from 'react';

class CaughtField extends Component {
	render() {
        const {caught} = this.props;

		return <h3>{`Caught: ${caught}`}</h3>;
	}
}

export default CaughtField;