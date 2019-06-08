import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';

import styles from './styles.module.scss';

class SearchField extends Component {
  render() {
    const { textFieldValue, onChange } = this.props;

    return (
			<TextField
					id="outlined-search"
					type="search"
					className={styles.textField}
					margin="normal"
					variant="outlined"
					value={textFieldValue}
					onChange={onChange}
			/>
    );
  }
}

export default SearchField;