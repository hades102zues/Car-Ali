import React, { Component } from "react";
import styles from "./BidBoard.module.css";
import BidOffers from "./BidOffers/BidOffers";
import { connect } from "react-redux";

class BidBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bidList: []
		};
	}

	componentDidUpdate() {
		if (!this.state.bidList.length) this.fetchData();
		if (this.props.uploadHappened) {
			this.fetchData(this.props.uploadReset);
		}
	}

	fetchData = cb => {
		console.log(this.props.listingId);
		fetch(`/listing-bids/${this.props.listingId}`)
			.then(res => res.json())
			//
			.then(data => this.setState({ bidList: data.results }, cb))
			.catch(err => console.log(err));
	};
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
				<BidOffers bids={this.state.bidList} />
			</div>
		);
	}
}

export default BidBoard;
