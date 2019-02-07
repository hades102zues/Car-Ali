import React from "react";
import NavigationItem from "../Navigation/NavigationItem/NavigationItem";
import styles from "./DropDown.module.css";

const dropDown = props => {
	const isloggedin = false;

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

	return (
		<div
			className={styles.DropDown}
			style={{
				maxHeight: props.display ? 400 : 0
			}}
		>
			<nav className={styles.Nav}>
				<ul style={{ listStyle: "none" }}>{navigationItems}</ul>
			</nav>
		</div>
	);
};
export default dropDown;
