import React, { Component } from "react";
import styles from "./DashNavItem.module.css";
import { NavLink } from "react-router-dom";

const dashNavItem = props => {
	return (
		<div className={styles.dashNavItem}>
			<NavLink to={props.to} activeClassName={styles.active}>
				<div className={styles.fixer}>
					<p className={styles.navName}>{props.navName}</p>
				</div>
			</NavLink>
		</div>
	);
};

export default dashNavItem;
