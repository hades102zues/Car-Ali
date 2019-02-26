import React, { Component } from "react";
import styles from "./ListerCard.module.css";
import { Form, Field, withFormik, ErrorMessage } from "formik";

class ListerCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			configs: [
				{
					type: "select",
					name: "status",
					placeholder: "Enter Your Email Address"
				},
				{
					type: "text",
					name: "carName",
					placeholder: "Brand and Name of The Car"
				},
				{
					type: "number",
					name: "year",
					placeholder: "Enter The Car's Year"
				},
				{
					type: "number",
					min: 1,
					max: 5,
					name: "condition",
					placeholder: "Rate The Car's Condition out of 5"
				},
				{
					type: "text",
					name: "verified",
					placeholder: "Is the car verified?"
				},
				{
					type: "number",
					name: "cost",
					placeholder: "Car's value in BBDS"
				},
				{
					type: "number",
					name: "passengers",
					min: 1,
					max: 10,
					placeholder: "Enter Passenger Capacity"
				}
			]
		};
	}

	render() {
		const configList = this.state.configs;
		const fieldItems = configList.map(config => {
			let field = null;
			if (config.type === "select") {
				field = (
					<Field
						component={config.type}
						name={config.name}
						className={styles.fieldSelect}
					>
						<option value="1">Sale</option>
						<option value="0">Hire</option>
					</Field>
				);
			} else if (config.type === "number") {
				field = (
					<Field
						key={config.name}
						type={config.type}
						name={config.name}
						placeholder={config.placeholder}
						className={styles.field}
						min={config.min}
						max={config.max}
					/>
				);
			} else {
				field = (
					<Field
						key={config.name}
						type={config.type}
						name={config.name}
						placeholder={config.placeholder}
						className={styles.field}
					/>
				);
			}
			return (
				<React.Fragment key={config.name}>
					<ErrorMessage
						name={config.name}
						render={msg => (
							<div className={styles.authmessagebox}>{msg}</div>
						)}
					/>
					{field}
				</React.Fragment>
			);
		});

		return (
			<div className={styles.ListerCard}>
				<Form>
					{fieldItems}
					<input
						type="file"
						name="imageUrl"
						onChange={this.props.handleChange}
						value={this.props.values.email}
					/>
					<button type="submit" className={styles.button}>
						Submit
					</button>
				</Form>
			</div>
		);
	}
}

const formikComp = withFormik({
	mapPropsToValues: () => {
		return {
			status: 1,
			carName: "",
			year: "",
			condition: "",
			verified: "",
			cost: "",
			passengers: "",
			imageUrl: ""
		};
	},
	handleSubmit: (values, { props }) => {
		console.log(values);
	}
})(ListerCard);

export default formikComp;
