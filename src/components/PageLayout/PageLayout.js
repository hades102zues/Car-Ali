import React from "react";
import Header from "../Header/Header";

const pageLayout = props => {
	return (
		<div>
			<Header />
			{props.children}
		</div>
	);
};

export default pageLayout;
