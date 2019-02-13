import React, { Component } from "react";
import styles from "./BidOffers.module.css";
import BidOffer from "./BidOffer/BidOffer";

class BidOffers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bids: [
				{
					userImageUrl:
						"https://images.pexels.com/photos/556658/pexels-photo-556658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
					userName: "Jackson",
					bid: 500.5
				},
				{
					userImageUrl:
						"https://images.pexels.com/photos/556658/pexels-photo-556658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
					userName: "Jackson",
					bid: 500.5
				},
				{
					userImageUrl:
						"https://images.pexels.com/photos/556658/pexels-photo-556658.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
					userName: "Jackson",
					bid: 500.5
				}
			]
		};
	}

	render() {
		const topBids = this.state.bids.map((bid, i) => (
			<BidOffer
				key={i}
				userImageUrl={bid.userImageUrl}
				userName={bid.userName}
				bid={bid.bid}
			/>
		));
		return <div className={styles.BidOffers}>{topBids}</div>;
	}
}

export default BidOffers;
