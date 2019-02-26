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
					placeholder: "Enter Your Email Address",
					optionsConfigs: [
						{ value: "1", text: "Sale" },
						{ value: "0", text: "Hire" }
					]
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
					type: "select",
					name: "verified",
					placeholder: "Is the car verified?",
					optionsConfigs: [
						{ value: "1", text: "Car is verified" },
						{ value: "0", text: "Car is not verified" }
					]
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
				const options = config.optionsConfigs.map((option, i) => (
					<option key={config.name + i} value={option.value}>
						{option.text}
					</option>
				));
				field = (
					<Field
						component={config.type}
						name={config.name}
						className={styles.fieldSelect}
					>
						{options}
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

		const render = this.props.show ? (
			<div className={styles.ListerCard}>
				<Form>
					{fieldItems}
					<input
						type="file"
						name="imageUrl"
						onChange={event => {
							//necessary inorder to capture the FILE object
							this.props.setFieldValue(
								"image",
								event.currentTarget.files[0]
							);
						}}
						value={this.props.values.email}
					/>
					<button type="submit" className={styles.button}>
						Submit
					</button>
				</Form>
				<button
					className={styles.button}
					style={{ backgroundColor: "green" }}
					onClick={this.props.hide}
				>
					Close
				</button>
			</div>
		) : null;

		return render;
	}
}

const formikComp = withFormik({
	mapPropsToValues: () => {
		return {
			status: 1,
			carName: "",
			year: "",
			condition: "",
			verified: 1,
			cost: "",
			passengers: ""
		};
	},
	handleSubmit: (values, { props }) => {
		//to submit we need to use formdata
		let formData = new FormData();
		for (let item in values) formData.append(item, values[item]);

		fetch("/listing", {
			method: "POST",
			body: formData
		})
			.then(res => console.log(res))
			.then(err => console.log(err));
	}
})(ListerCard);

export default formikComp;
