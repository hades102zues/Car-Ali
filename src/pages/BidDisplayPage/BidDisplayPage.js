import React from "react";
import Container from "../app-level/UI/Container/Container";
import styles from "./BidDisplayPage.module.css";
import BidShowCase from "./BidShowCase/BidShowCase";
import BidBoard from "./BidBoard/BidBoard";
import BidStrip from "./BidStrip/BidStrip";

const bidDisplay = () => {
	return (
		<div>
			<BidShowCase />
			<Container>
				<div className={styles.bidPlacer}>
					<BidBoard />
					<BidStrip />
				</div>
			</Container>
		</div>
	);
};

export default bidDisplay;
