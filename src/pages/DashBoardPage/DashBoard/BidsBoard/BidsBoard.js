import React from "react";
import styles from "./BidsBoard.module.css";
import BidLister from "./BidLister/BidLister";

const bidsBoard = () => {
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
			<BidLister />
		</div>
	);
};

export default bidsBoard;
