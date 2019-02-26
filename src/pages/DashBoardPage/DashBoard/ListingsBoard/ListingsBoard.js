import React, { Component } from "react";
import styles from "./ListingsBoard.module.css";
import Lister from "./Lister/Lister";
import ListerCard from "./ListerCard/ListerCard";

class listingsBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showListCard: false
		};
	}

	onListCardPopUp = () => {
		this.setState(currState =>
			this.setState({ showListCard: !currState.showListCard })
		);
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
						<p className={styles.car}>Highest Bid</p>
					</div>
					<div className={styles.modify}>
						<p className={styles.modify}>Modify</p>
					</div>
				</div>
				<Lister />
				<ListerCard
					show={this.state.showListCard}
					hide={this.onListCardPopUp}
				/>
			</div>
		);
	}
}

export default listingsBoard;
