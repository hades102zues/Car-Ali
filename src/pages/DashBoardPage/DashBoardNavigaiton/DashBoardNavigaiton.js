import React from "react";
import styles from "./DashBoardNavigaiton.module.css";
import DashNavItem from "./DashNavItem/DashNavItem";
import { withRouter } from "react-router-dom";

const dashBoardNavigaiton = props => {
	const navItemList = [
		{ navName: "PROFILE", to: `${props.match.path}` },
		{ navName: "LISTINGS", to: `${props.match.path}/user-listings` },
		{ navName: "BIDS", to: `${props.match.path}/user-bids` }
	];
	const navItems = navItemList.map(config => (
		<DashNavItem
			key={config.navName}
			navName={config.navName}
			exact
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

export default withRouter(dashBoardNavigaiton);
