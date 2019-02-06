import React from "react";
import styles from "./NavigationItem.module.css";
import { Link } from "react-router-dom";

const navigationItem = props => (
	<li className={styles.navItem}>
		<Link to={props.to}>{props.navName}</Link>
	</li>
);

export default navigationItem;
