import React, { Component } from "react";
import styles from "./LoginCard.module.css";
import { Form, Field, withFormik, ErrorMessage } from "formik";
import * as yup from "yup";

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
					placeholder: "Enter A User Name"
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
			<React.Fragment>
				<ErrorMessage
					name={config.name}
					render={msg => (
						<div className={styles.authmessagebox}>{msg}</div>
					)}
				/>
				<Field
					key={config.name}
					type={config.type}
					name={config.name}
					placeholder={config.placeholder}
					className={styles.field}
				/>
			</React.Fragment>
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

const formValidation = yup.object().shape({
	userName: yup.string().required(),
	name: yup.string().required(),
	email: yup
		.string()
		.email("Please enter a valid email")
		.required(),
	password: yup
		.string()
		.min(5, "Password Must be Atleast 5 characters")
		.matches(
			/^[a-z0-9]+$/,
			"Password must container atleast one character and number"
		)
		.required(),
	confirmPassword: yup.string()
});

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
	},
	validationSchema: formValidation
})(LoginCard);
