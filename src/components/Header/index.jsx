import React, { Component } from 'react';
import styles from './styles.module.scss';

class Header extends Component {
	render() {
		return <div className={styles.header}>Pokemon Catcher</div>;
	}
}

export default Header;