import React, { Component } from "react";
import styles from "./BidBoard.module.css";
import BidOffers from "./BidOffers/BidOffers";

class BidBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className={styles.BidBoard}>
				<div className={styles.header}>
					<p className={styles.headerText}>TOP BIDS</p>
				</div>
				<div className={styles.columns}>
					<p className={styles.leftColumnName}>User</p>
					<p className={styles.rightColumnName}>BID</p>
				</div>
				<BidOffers />
			</div>
		);
	}
}

export default BidBoard;
