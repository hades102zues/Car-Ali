import React from "react";
import styles from "./BidsBoard.module.css";

const bidsBoard = () => {
	return (
		<div className={styles.bidsBoard}>
			<div className={styles.boardHeading}>
				<p className={styles.boardName}>All Listings</p>
				<div className={styles.addButton}>
					<p className={styles.plus}>+</p>
				</div>
			</div>
			<div className={styles.listingHeading}>
				<div className={styles.left}>
					<p className={styles.number}>#</p>
					<p className={styles.car}>Car</p>
				</div>
				<div className={styles.modify}>
					<p className={styles.modify}>Modify</p>
				</div>
			</div>
		</div>
	);
};

export default bidsBoard;
