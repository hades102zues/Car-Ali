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
			.catch(err => console.log(err));
	}
};
