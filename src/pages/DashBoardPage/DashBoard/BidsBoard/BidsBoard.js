import React, { Component } from "react";
import styles from "./BidsBoard.module.css";
import BidLister from "./BidLister/BidLister";
import { connect } from "react-redux";

class BidsBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bidItems: []
		};
	}

	componentDidMount() {
		//redux only delivers the authToken after the component mounts
		// I used this to trigger a rerender so that i might call the fetch
		//in componentDidupdate
		this.setState({ initiateReloop: 2 });
	}

	componentWillUpdate() {
		//
	}

	componentDidUpdate() {
		if (!this.state.bidItems.length) this.fetchData();
	}

	fetchData = () => {
		fetch("/user-bids", {
			headers: { Authorization: "Bearer " + this.props.authToken },
			method: "GET"
		})
			.then(res => res.json())
			.then(data => this.setState({ bidItems: data.results }))
			.catch(err => alert("Error Retrieving Bid Data"));
	};

	onDeleteItemHandler = bidId => {
		fetch("/bid-removal", {
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + this.props.authToken
			},
			method: "DELETE",
			body: JSON.stringify({ bidId: bidId })
		})
			.then(res => this.fetchData())

			.catch(err => alert("Error Retrieving Listing Data"));
	};

	render() {
		return (
			<div className={styles.bidsBoard}>
				<div className={styles.boardHeading}>
					<p className={styles.boardName}>All Bids</p>
				</div>
				<div className={styles.listingHeading}>
					<div className={styles.left}>
						<p className={styles.number}>Car</p>
						<p className={styles.car}>Your Bid</p>
					</div>
					<div className={styles.modify}>
						<p className={styles.modify}>Modify</p>
					</div>
				</div>
				<BidLister
					bidItems={this.state.bidItems}
					deleteItem={this.onDeleteItemHandler}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		authToken: state.login.token
	};
};

export default connect(mapStateToProps)(BidsBoard);
