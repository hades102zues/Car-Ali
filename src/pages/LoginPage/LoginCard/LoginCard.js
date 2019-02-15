import React, { Component } from "react";
import styles from "./LoginCard.module.css";
import { Form, Field, withFormik } from "formik";
import Yup from "yup";

class LoginCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loginConfigs: [
				{
					type: "email",
					name: "email",
					placeholder: "Enter Your Email Address"
				},
				{
					type: "password",
					name: "password",
					placeholder: "Enter Your Password"
				}
			],

			signupConfigs: [
				{
					type: "text",
					name: "userName",
					placeholder: "Enter A UserName"
				},
				{
					type: "text",
					name: "name",
					placeholder: "Enter Your Full Name"
				},
				{
					type: "email",
					name: "email",
					placeholder: "Enter Your Email Address"
				},
				{
					type: "password",
					name: "password",
					placeholder: "Enter Your Password"
				},
				{
					type: "password",
					name: "confirmPassword",
					placeholder: "Confirm Your Password"
				}
			],
			authState: "login"
		};
	}

	onSignUpClickHandler = () => {
		const authState = this.state.authState === "login" ? "signup" : "login";
		this.setState({ authState: authState });
	};
	render() {
		const configList =
			this.state.authState === "login"
				? this.state.loginConfigs
				: this.state.signupConfigs;

		const fieldItems = configList.map(config => (
			<Field
				key={config.name}
				type={config.type}
				name={config.name}
				placeholder={config.placeholder}
				className={styles.field}
			/>
		));

		return (
			<div className={styles.LoginCard}>
				<p className={styles.loginText}>
					{this.state.authState === "login"
						? "Log In To Your Account"
						: "Sign Up For Your Account"}
				</p>
				<Form className={styles.form}>
					{fieldItems}
					<button type="submit" className={styles.button}>
						Submit
					</button>
				</Form>
				<p
					className={styles.signupText}
					onClick={this.onSignUpClickHandler}
				>
					{this.state.authState === "login"
						? "New User? Sign Up Now!"
						: "Login In Now!"}
				</p>
			</div>
		);
	}
}

export default withFormik({
	mapPropsToValues: () => {
		return {
			userName: "",
			name: "",
			email: "",
			password: "",
			confirmPassword: ""
		};
	},
	handleSubmit: values => {
		console.log(values);
	}
})(LoginCard);
