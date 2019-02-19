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
				car_name: req.body.carName,
				user_id: req.decoded.id
			})
			.then(result => cb(result))
			.catch(err => console.log("Error while inserting listing ", err));
	}

	static getAllUserListings(req, res, cb) {
		knex("listings")
			.select()
			.where({ user_id: req.decoded.id })
			.then(results => cb(results))
			.catch(err =>
				console.log("Error while getting all User Listings", err)
			);
	}

	static getOneUserListing(req, res, cb) {
		knex("listings")
			.select()
			.where({ user_id: req.decoded.id, id: req.body.listingId })
			.then(results => cb(results))
			.catch(err => console.log("Error while getting User Listing", err));
	}

	static getOne(req, res, cb) {
		knex("listings")
			.select()
			.where({ id: req.body.listingId })
			.first()
			.then(result => cb(result))
			.catch(err => console.log("Error while getting Listing", err));
	}

	static getAll(req, res, cb) {
		knex("listings")
			.select()
			.then(results => cb(results))
			.catch(err => console.log("Error while getting Listings", err));
	}
};
