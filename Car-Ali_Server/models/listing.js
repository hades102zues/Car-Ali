const knex = require("../knexfile");

module.exports = class Listing {
	static create(req, res, cb) {
		knex("listings")
			.insert({
				status: req.body.status,
				year: req.body.year,
				condition: req.body.condition,
				verified: req.body.verified,
				cost: req.body.cost,
				passengers: req.body.cost,
				car_name: req.body.carName.toUpperCase(),
				image_path: req.file.path,
				user_id: req.decoded.id
			})
			.then(result => cb(result))
			.catch(err => {
				res.status(400).json({
					message: "Creating Listing Failed",
					err
				});
			});
	}

	static getAllUserListings(req, res, cb) {
		knex("listings")
			.select()
			.where({ user_id: req.decoded.id })
			.then(results => cb(results))
			.catch(err => {
				res.status(400).json({ message: "Failed To Get User Data" });
			});
	}

	static getOneUserListing(req, res, cb) {
		knex("listings")
			.select()
			.where({ user_id: req.decoded.id, id: req.body.listingId })
			.then(results => cb(results))
			.catch(err => {
				res.status(400).json({ message: "Failed To Get User Data" });
			});
	}

	static updateOne(req, res, cb) {
		knex("listings")
			.update({
				status: req.body.status,
				year: req.body.year,
				condition: req.body.condition,
				verified: req.body.verified,
				cost: req.body.cost,
				passengers: req.body.cost,
				car_name: req.body.carName.toUpperCase()
			})
			.where({ id: req.body.listingId })
			.returning("id")
			.then(result => cb(result))
			.catch(err => {
				res.status(400).json({ message: "Failed To Update Item" });
			});
	}

	static deleteOne(req, res, cb) {
		knex("listings")
			.del()
			.where({ id: req.body.listingId })
			.then(result => cb(result))
			.catch(err => {
				res.status(400).json({ message: "Request Failed" });
			});
	}

	//---
	static getOne(req, res, cb) {
		knex("listings")
			.select()
			.where({ id: req.body.listingId })
			.first()
			.then(result => cb(result))
			.catch(err =>
				res.status(400).json({ message: "Error Fetching Data", err })
			);
	}

	static getAll(req, res, cb) {
		knex("listings")
			.select()
			.then(results => cb(results))
			.catch(err =>
				res.status(400).json({ message: "Error Fetching Data", err })
			);
	}
};
