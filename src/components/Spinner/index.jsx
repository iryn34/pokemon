import React, { Component } from 'react';

import styles from './styles.module.scss';

import CircularProgress from '@material-ui/core/CircularProgress';

class Spinner extends Component {
  render() {
    return (
      <div className={styles.spinner}>
        <CircularProgress />
      </div>
    );
  }
}

export default Spinner;
