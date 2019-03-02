import React from "react";
import styles from "./BidOffer.module.css";

const bidOffer = props => {
	return (
		<div className={styles.bidOffer}>
			<div className={styles.placerAid}>
				<div className={styles.userData}>
					<div className={styles.imageBox}>
						<img
							className={styles.img}
							src={`/images/${props.userImageUrl}`}
							alt="usr_image"
						/>
					</div>
					<p className={styles.userName}>{props.userName}</p>
				</div>
				<div className={styles.bidData}>
					<p className={styles.bid}>
						{props.bid ? `$${props.bid}` : "$X.XX"}
					</p>
				</div>
			</div>
		</div>
	);
};

export default bidOffer;
