import React from "react";
import styles from "./Result.module.css";
const result = props => {
	return (
		<div className={styles.result}>
			<div className={styles.headerStatus} />
			<div className={styles.imageBox}>
				<img className={styles.img} src="" alt="car" />
			</div>
			<p className={styles.nameText}>CAR_NAME</p>

			<div className={styles.infoBox}>
				<div className={styles.info}>
					<p className={styles.infoHeader}>YEAR</p>
					<p className={styles.infoText}>{props.year}</p>
				</div>
				<div className={styles.info}>
					<p className={styles.infoHeader}>PASSENGERS</p>
					<p className={styles.infoText}>{props.passengers}</p>
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
			<div className={styles.bidHighlight}>
				<p className={styles.bidText}>HIGHEST BID</p>
				<p className={styles.bidPrice}>$X.XX</p>
			</div>
		</div>
	);
};

export default result;
