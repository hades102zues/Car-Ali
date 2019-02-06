import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import styles from "./Navigation.module.css";

const navigation = () => {
	const navConfig = [
		{ to: "/results", navName: "CATALOG" },
		{ to: "/login", navName: "LOGIN" }
	];

	let navigationItems = navConfig.map(config => (
		<NavigationItem
			key={config.navName}
			to={config.to}
			navName={config.navName}
		/>
	));
	return (
		<nav>
			<ul style={{ listStyle: "none", display: "flex" }}>
				{navigationItems}
			</ul>
		</nav>
	);
};

export default navigation;
