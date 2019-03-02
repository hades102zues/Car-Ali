import React, { Component } from "react";
import styles from "./ProfileBoard.module.css";
import { connect } from "react-redux";

class ProfileBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userDetails: null,
			initiateReloop: 1
		};
	}

	componentDidMount() {
		//redux only delivers the authToken after the component mounts
		// I used this to trigger a rerender so that i might call the fetch
		//in componentDidupdate
		this.setState({ initiateReloop: 2 });
	}

	componentDidUpdate() {
		if (this.state.userDetails === null) this.fetchData();
	}

	fetchData = () => {
		fetch("/user-details", {
			headers: { Authorization: "Bearer " + this.props.authToken },
			method: "GET"
		})
			.then(res => res.json())
			.then(data => this.setState({ userDetails: data.userInfo }))
			.catch(err => alert("Error Occured!"));
	};

	render() {
		let output = null;

		if (this.state.userDetails) {
			output = (
				<div className={styles.profileBoard}>
					<p className={styles.item}>
						Username: {this.state.userDetails.username}
					</p>
					<p className={styles.item}>
						FullName: {this.state.userDetails.name}
					</p>
					<p className={styles.item}>
						Email: {this.state.userDetails.email}
					</p>
				</div>
			);
		}

		return output;
	}
}

const mapStateToProps = state => {
	return {
		authToken: state.login.token
	};
};

export default connect(mapStateToProps)(ProfileBoard);
