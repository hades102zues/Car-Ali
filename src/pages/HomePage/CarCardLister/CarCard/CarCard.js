import React from "react";
import styles from "./CarCard.module.css";

const carCard = props => {
	return (
		<div className={styles.carCard} style={{ width: props.cardWidth }}>
			<div className={styles.infoBox}>
				<div className={styles.info}>
					<p className={styles.infoHeader}>
						{props.status === 1 ? "CAR FOR RENT" : "CAR FOR HIRE"}
					</p>
					<p className={styles.infoText}>{props.cost}</p>
				</div>
				<div className={styles.info}>
					<p className={styles.infoHeader}>YEAR</p>
					<p className={styles.infoText}>{props.year}</p>
				</div>
				<div className={styles.info}>
					<p className={styles.infoHeader}>CONDITION</p>
					<p className={styles.infoText}>{props.condition}</p>
				</div>
				<div className={styles.info}>
					<p className={styles.infoHeader}>VERIFIED</p>
					<p className={styles.infoText}>
						{props.verified ? "YES" : "NO"}
					</p>
				</div>
			</div>
		</div>
	);
};

export default carCard;
