import React, { Component } from "react";
import styles from "./Lister.module.css";
import ListItem from "./ListItem/ListItem";

class Lister extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className={styles.Lister}>
				<ListItem />
			</div>
		);
	}
}

export default Lister;
