import React, { Component } from "react";
import styles from "./ResultsLister.module.css";
import Result from "./Result/Result";

class ResultsLister extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className={styles.ResultsLister}>
				<p>I am ResultsLister</p>
				<Result />
			</div>
		);
	}
}

export default ResultsLister;
