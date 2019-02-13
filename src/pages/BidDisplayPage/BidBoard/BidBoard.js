import React, { Component } from "react";
import styles from "./BidBoard.module.css";

class BidBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className={styles.BidBoard}>
				<p>I am BidBoard</p>
			</div>
		);
	}
}

export default BidBoard;
