import React from "react";
import NavigationItem from "../Navigation/NavigationItem/NavigationItem";
import styles from "./DropDown.module.css";

const dropDown = props => {
	const isloggedin = true;

	const baseNavConfigs = [
		{ to: "/results", navName: "CATALOG" },
		{ to: "/login", navName: "LOGIN" }
	];

	const loggedInConfigs = [
		{ to: "/results", navName: "CATALOG" },
		{ to: "/user/dashboard", navName: "PROFILE" },
		{ to: "/logout", navName: "LOGOUT" }
	];

	const navigationItems = isloggedin
		? loggedInConfigs.map(config => (
				<NavigationItem
					key={config.navName}
					to={config.to}
					navName={config.navName}
				/>
		  ))
		: baseNavConfigs.map(config => (
				<NavigationItem
					key={config.navName}
					to={config.to}
					navName={config.navName}
				/>
		  ));

	return props.display ? (
		<div className={styles.DropDown}>
			<nav className={styles.Nav}>
				<ul style={{ listStyle: "none" }}>{navigationItems}</ul>
			</nav>
		</div>
	) : null;
};
export default dropDown;
