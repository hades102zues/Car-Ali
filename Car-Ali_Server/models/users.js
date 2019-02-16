const knex = require("./knexfile").knex;

module.exports = class User {
	//create
	static create = (data, callback) => {
		knex("users").insert();
	};

	//getOne
	static getOne = (data, callback) => {};
	//update

	//delete
};
