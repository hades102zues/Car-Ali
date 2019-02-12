import React, { Component } from "react";
import styles from "./CarCardLister.module.css";
import CarCard from "./CarCard/CarCard";

class CarCardLister extends Component {
	constructor(props) {
		super(props);
		this.state = {
			carListing: [
				{
					imageUrl:
						"https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
					status: 1,
					year: "",
					condition: "",
					verified: true
				},
				{
					imageUrl:
						"https://parkers-images.bauersecure.com/pagefiles/190699/cut-out/600x400/suzuki_swift10.jpg",
					status: 1,
					year: "",
					condition: "",
					verified: true
				},
				{
					imageUrl:
						"https://icdn2.digitaltrends.com/image/2018-subaru-crosstrek-front-left-640x640.jpg",
					status: 1,
					year: "",
					condition: "",
					verified: true
				},
				{
					imageUrl:
						"https://upload.wikimedia.org/wikipedia/commons/6/66/2015_Toyota_Fortuner_%28New_Zealand%29.jpg",
					status: 1,
					year: "",
					condition: "",
					verified: true
				}
			]
		};
	}

	render() {
		const cardList = this.state.carListing.map((listing, i) => (
			<CarCard
				key={i}
				cardWidth={this.props.cardWidth}
				imageUrl={listing.imageUrl}
				status={listing.status}
				cost={listing.cost}
				year={listing.year}
				condition={listing.condition}
				verified={listing.verified}
			/>
		));
		return <div className={styles.CarCardLister}>{cardList}</div>;
	}
}

export default CarCardLister;
