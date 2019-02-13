import React, { Component } from "react";
import styles from "./BidShowCase.module.css";

class BidShowCase extends Component {
	constructor(props) {
		super(props);
		this.state = {
			carListings: [
				{
					imageUrl:
						"https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
					status: 0,
					year: "2005",
					condition: "3.5/5",
					verified: true,
					cost: 500,
					passengers: 5,
					name: "BMW M3 COUPE",
					listingId: 105
				}
			]
		};
	}

	componentDidMount() {
		//get id from url
		//perform a fetch for data
	}

	render() {
		const { carListings } = this.state;
		const carListing = carListings[0];
		return (
			<div>
				<div className={styles.BidShowCase}>
					<div className={styles.imageBox}>
						<img
							className={styles.img}
							src={carListing.imageUrl}
							alt="car_image"
						/>
					</div>
				</div>
				<div className={styles.namePlacer}>
					<p className={styles.carName}>BMW M3 COUPE</p>
				</div>
				<div className={styles.infoBox}>
					<div className={styles.info}>
						<p className={styles.infoHeader}>STATUS</p>
						<p className={styles.infoText}>
							{carListing.status === 1
								? "CAR FOR SALE"
								: "CAR FOR HIRE /dy"}
						</p>
					</div>
					<div className={styles.info}>
						<p className={styles.infoHeader}>HIGHEST BID</p>
						<p className={styles.infoText}>
							{carListing.cost ? `$${carListing.cost}` : "$X.XX"}
						</p>
					</div>
					<div className={styles.info}>
						<p className={styles.infoHeader}>YEAR</p>
						<p className={styles.infoText}>{carListing.year}</p>
					</div>
					<div className={styles.info}>
						<p className={styles.infoHeader}>CONDITION</p>
						<p className={styles.infoText}>
							{carListing.condition}
						</p>
					</div>
					<div className={styles.info}>
						<p className={styles.infoHeader}>VERIFIED</p>
						<p className={styles.infoText}>
							{carListing.verified ? "YES" : "NO"}
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default BidShowCase;
