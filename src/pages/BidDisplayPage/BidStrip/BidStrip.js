import React, { Component } from "react";
import styles from "./BidStrip.module.css";

class BidStrip extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bidValue: 0
		};
	}

	onInputChangeHandler = event => {
		this.setState({ bidValue: event.target.value });
	};

	onBidSubmitHandler = event => {
		//make call to server
		event.preventDefault();
		alert("Make Post to server");
	};

	render() {
		return (
			<div className={styles.BidStrip}>
				<div className={styles.bidValue}>
					<p className={styles.bidText}>
						{this.state.bidValue
							? `$${parseFloat(this.state.bidValue).toFixed(2)}`
							: "$0"}
					</p>
				</div>
				<form onSubmit={this.onBidSubmitHandler}>
					<div className={styles.bidBox}>
						<input
							type="number"
							placeholder="Enter your bid"
							className={styles.bidInput}
							value={this.state.bidValue}
							onChange={this.onInputChangeHandler}
						/>
					</div>
					<button type="submit" className={styles.bidButton}>
						PLACE YOUR BID
					</button>
				</form>
			</div>
		);
	}
}

export default BidStrip;
