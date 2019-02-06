import React from "react";
import styles from "./Header.module.css";
import Container from "../../UI/Container/Container";
import Navigation from "../Navigation/Navigation";

const header = () => {
	return (
		<div className={styles.Header}>
			<Container>
				<h2 className={styles.logo}>CAR-ALI</h2>
				<div className={styles.positionNav}>
					<Navigation />
				</div>
			</Container>
		</div>
	);
};

export default header;
