import React, { Component } from "react";
import styles from "./ListingsBoard.module.css";
import Lister from "./Lister/Lister";
import ListerCard from "./ListerCard/ListerCard";
import { connect } from "react-redux";

class listingsBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showListCard: false,
			listItems: [],
			initiateReloop: 1
		};
	}

	componentDidMount() {
		//redux only delivers the authToken after the component mounts
		// I used this to trigger a rerender so that i might call the fetch
		//in componentDidupdate
		this.setState({ initiateReloop: 2 });
	}

	componentDidUpdate() {
		if (!this.state.listItems.length) this.fetchData();
	}

	onListCardPopUp = () => {
		this.setState(currState =>
			this.setState({ showListCard: !currState.showListCard })
		);
	};

	uploadDidHappen = () => {
		this.fetchData();
	};

	fetchData = () => {
		fetch("/listings-user", {
			headers: { Authorization: "Bearer " + this.props.authToken },
			method: "GET"
		})
			.then(res => res.json())
			.then(data => this.setState({ listItems: data.results }))
			.catch(err => alert("Error Retrieving Listing Data"));
	};

	onDeleteItemHandler = listId => {
		fetch("/listing-user", {
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + this.props.authToken
			},
			method: "DELETE",
			body: JSON.stringify({ listingId: listId })
		})
			.then(res => this.fetchData())

			.catch(err => alert("Error Retrieving Listing Data"));
	};

	render() {
		return (
			<div className={styles.listtingBoard}>
				<div className={styles.boardHeading}>
					<p className={styles.boardName}>All Listings</p>
					<div
						className={styles.addButton}
						onClick={this.onListCardPopUp}
					>
						<p className={styles.plus}>+</p>
					</div>
				</div>
				<div className={styles.listingHeading}>
					<div className={styles.left}>
						<p className={styles.number}>Car</p>
						<p className={styles.push}>List Status</p>
						<p className={styles.car}>Starting Value</p>
					</div>
					<div className={styles.modify}>
						<p className={styles.modify}>Modify</p>
					</div>
				</div>
				<Lister
					listItems={this.state.listItems}
					deleteItem={this.onDeleteItemHandler}
				/>
				<ListerCard
					didUpload={this.uploadDidHappen}
					show={this.state.showListCard}
					hide={this.onListCardPopUp}
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

export default connect(mapStateToProps)(listingsBoard);
