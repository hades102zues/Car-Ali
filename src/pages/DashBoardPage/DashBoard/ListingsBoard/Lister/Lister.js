import React, { Component } from "react";
import styles from "./Lister.module.css";
import ListItem from "./ListItem/ListItem";

class Lister extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const listItems = this.props.listItems.map(item => (
			<ListItem
				status={item.status}
				id={item.id}
				key={item.id}
				carName={item.car_name}
				cost={item.cost}
				deleteItem={this.props.deleteItem}
			/>
		));

		return <div className={styles.Lister}>{listItems}</div>;
	}
}

export default Lister;
