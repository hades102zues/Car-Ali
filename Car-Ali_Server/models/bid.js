const knex = require("../knexfile");

module.exports = class Bid {
	static create(req, res, cb) {
		knex("bids")
			.insert({
				bid: req.body.bid,
				user_id: req.decoded.id,
				listing_id: req.body.listingId
			})
			.then(result => cb(result))
			.catch(err =>
				res.status(400).json({
					message: "Failed to Create Bid",
					err
				})
			);
	}
	static delete(req, res, cb) {
		knex("bids")
			.del()
			.where({ user_id: req.decoded.id })
			.then(result => cb(result))
			.catch(err =>
				res.status(400).json({
					message: "Failed to Delete Bid",
					err
				})
			);
	}
};
