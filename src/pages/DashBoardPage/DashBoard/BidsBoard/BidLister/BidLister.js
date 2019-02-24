import React, { Component } from "react";
import styles from "./BidLister.module.css";
import BidItem from "./BidItem/BidItem";

class BidLister extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className={styles.BidLister}>
				<BidItem carName="BMW Couper" cost={50} />
			</div>
		);
	}
}

export default BidLister;
