import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import styles from "./Navigation.module.css";

const navigation = () => {
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
		<nav className={styles.Nav}>
			<ul style={{ listStyle: "none", display: "flex" }}>
				{navigationItems}
			</ul>
		</nav>
	);
};

export default navigation;
