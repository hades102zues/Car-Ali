import React, { Component } from "react";
import styles from "./DashBoardNavigaiton.module.css";
import DashNavItem from "./DashNavItem/DashNavItem";

const dashBoardNavigaiton = () => {
	const navItemList = [
		{ navName: "PROFILE", to: "/" },
		{ navName: "LISTINGS", to: "/" },
		{ navName: "BIDS", to: "/" }
	];
	const navItems = navItemList.map(config => (
		<DashNavItem
			key={config.navName}
			navName={config.navName}
			to={config.to}
		/>
	));
	return (
		<div className={styles.dashBoardNavigaiton}>
			<div className={styles.imageBox}>
				<img className={styles.img} src="" alt="usr_image" />
			</div>
			<div className={styles.navigationItems}>{navItems}</div>
		</div>
	);
};

export default dashBoardNavigaiton;
