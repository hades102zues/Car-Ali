import React from "react";
import styles from "./Header.module.css";
import Container from "../../UI/Container/Container";
import Navigation from "../Navigation/Navigation";
import { withRouter } from "react-router-dom";

const header = props => {
	return (
		<div className={styles.Header}>
			<Container>
				<h2
					className={styles.logo}
					onClick={() => props.history.push("/")}
				>
					CAR-ALI
				</h2>
				<div className={styles.positionNav}>
					<Navigation />
				</div>
			</Container>
		</div>
	);
};

export default withRouter(header);
