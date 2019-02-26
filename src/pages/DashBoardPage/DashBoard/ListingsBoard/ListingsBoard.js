import React from "react";
import styles from "./ListingsBoard.module.css";
import Lister from "./Lister/Lister";
import ListerCard from "./ListerCard/ListerCard";

const listingsBoard = () => {
	return (
		<div className={styles.listtingBoard}>
			<div className={styles.boardHeading}>
				<p className={styles.boardName}>All Listings</p>
				<div className={styles.addButton}>
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
			<ListerCard />
		</div>
	);
};

export default listingsBoard;
