import React, { Component } from "react";
import styles from "./CarCardLister.module.css";
import CarCard from "./CarCard/CarCard";

class CarCardLister extends Component {
	constructor(props) {
		super(props);
		this.state = {
			carListing: [
				{
					imgUrl: "",
					status: 1,
					year: "",
					condition: "",
					verified: true
				},
				{
					imgUrl: "",
					status: 1,
					year: "",
					condition: "",
					verified: true
				}
			]
		};
	}

	render() {
		return (
			<div className={styles.CarCardLister}>
				<CarCard cardWidth={this.props.cardWidth} />
			</div>
		);
	}
}

export default CarCardLister;
