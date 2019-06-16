import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
	caught: state.caught
});

class CaughtField extends Component {
	render() {
    const { caught } = this.props;

		return <h3>{`Caught: ${caught}`}</h3>;
	}
}

export default connect(mapStateToProps, null)(CaughtField);