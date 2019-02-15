import React, { Component } from "react";
import styles from "./LoginCard.module.css";
import { Form, Field, withFormik, ErrorMessage } from "formik";
import { withRouter } from "react-router-dom";
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
			]
		};
	}

	onSignUpClickHandler = () => {
		this.props.history.push("/signup");
	};
	render() {
		const configList = this.state.loginConfigs;

		const fieldItems = configList.map(config => (
			<React.Fragment key={config.name}>
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
				<p className={styles.loginText}>Log In To Your Account</p>
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
					New User? Sign Up Now!
				</p>
			</div>
		);
	}
}

const formValidation = yup.object().shape({
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Please enter an email address"),
	password: yup
		.string()
		.min(6, "Password Must be Atleast 6 characters")
		// .matches(
		// 	/^[a-zA-Z0-9]+$/,
		// 	"Password must be made up of numbers and letters only"
		// )
		.required()
});

export default withFormik({
	mapPropsToValues: () => {
		return {
			email: "",
			password: ""
		};
	},
	handleSubmit: values => {
		console.log(values);
	},
	validationSchema: formValidation
})(withRouter(LoginCard));
