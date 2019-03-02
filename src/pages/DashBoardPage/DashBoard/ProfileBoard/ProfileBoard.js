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
		//redux only delivers the authToken after the component mounts this.setState({ userDetails: data })
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
			.then(data => console.log(data))
			.catch(err => alert("Error Occured!"));
	};

	render() {
		return (
			<div className={styles.profileBoard}>
				<p>I am profileBoard</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		authToken: state.login.token
	};
};

export default connect(mapStateToProps)(ProfileBoard);
