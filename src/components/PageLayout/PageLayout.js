import React, { Component } from "react";
import Header from "../Header/Header";
import DropDown from "../DropDown/DropDown";

class PageLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<Header />
				<DropDown />
				{this.props.children}
			</div>
		);
	}
}

export default PageLayout;
