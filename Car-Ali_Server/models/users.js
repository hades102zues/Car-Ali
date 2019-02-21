const knex = require("../knexfile");

module.exports = class User {
	//create
	static create(req, res, cb) {
		knex("users")
			.insert({
				username: req.body.username,
				name: req.body.name,
				email: req.body.email,
				password: req.hash
			})
			.returning(["id", "username", "name", "email"])
			.then(result => cb(result[0]))
			.catch(err =>
				res.status(400).json({ message: "error creating user", err })
			);
	}

	//getOne
	static getOne(req, res, cb) {
		knex("users")
			.select()
			.where({ email: req.body.email })
			.first()
			.then(result => cb(result))
			.catch(err => console.log("Error getting user"));
	}
	//update

	//delete
};
