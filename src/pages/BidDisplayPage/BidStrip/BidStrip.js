import React, { Component } from "react";
import styles from "./BidStrip.module.css";

class BidStrip extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className={styles.BidStrip}>
				<p>I am BidStrip</p>
			</div>
		);
	}
}

export default BidStrip;
