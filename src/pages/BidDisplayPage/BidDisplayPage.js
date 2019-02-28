import React, { Component } from "react";
import Container from "../app-level/UI/Container/Container";
import styles from "./BidDisplayPage.module.css";
import BidShowCase from "./BidShowCase/BidShowCase";
import BidBoard from "./BidBoard/BidBoard";
import BidStrip from "./BidStrip/BidStrip";

class BidDisplay extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mountReloop: 1,
			listingId: -1
		};
	}

	componentDidMount() {
		this.setState({ mountReloop: 2 });
	}

	componentDidUpdate() {
		if (this.state.listingId < 0)
			this.setState({ listingId: this.props.match.params.listingId });
	}

	render() {
		return (
			<div>
				<BidShowCase />
				<Container>
					<div className={styles.bidPlacer}>
						<BidBoard listingId={this.state.listingId} />
						<BidStrip listingId={this.state.listingId} />
					</div>
				</Container>
			</div>
		);
	}
}

export default BidDisplay;
