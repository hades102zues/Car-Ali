import React, { Component } from "react";
import styles from "./ResultsLister.module.css";
import Result from "./Result/Result";

class ResultsLister extends Component {
	constructor(props) {
		super(props);
		this.state = {
			carListing: [
				{
					imageUrl:
						"https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
					status: 0,
					year: "2005",
					condition: "3.5/5",
					verified: true,
					cost: 500,
					passengers: 5,
					name: "BMW M3 COUPE"
				},
				{
					imageUrl:
						"https://parkers-images.bauersecure.com/pagefiles/190699/cut-out/600x400/suzuki_swift10.jpg",
					status: 1,
					year: "2000",
					condition: "",
					verified: true,
					name: "SUZUKI Swift"
				},
				{
					imageUrl:
						"https://icdn2.digitaltrends.com/image/2018-subaru-crosstrek-front-left-640x640.jpg",
					status: 1,
					year: "",
					condition: "",
					verified: true,
					name: "SUBARU Crosstrek"
				},
				{
					imageUrl:
						"https://upload.wikimedia.org/wikipedia/commons/6/66/2015_Toyota_Fortuner_%28New_Zealand%29.jpg",
					status: 1,
					year: "",
					condition: "",
					verified: true,
					name: "TOYOTA Fortuner"
				}
			]
		};
	}

	render() {
		const resultList = this.state.carListing.map((listing, i) => (
			<Result
				key={i}
				cardWidth={this.props.cardWidth}
				imageUrl={listing.imageUrl}
				status={listing.status}
				cost={listing.cost}
				year={listing.year}
				condition={listing.condition}
				verified={listing.verified}
				name={listing.name}
				passengers={listing.passengers}
			/>
		));
		return <div className={styles.ResultsLister}>{resultList}</div>;
	}
}

export default ResultsLister;
