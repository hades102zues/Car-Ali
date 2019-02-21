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

	static getAllUserBids(req, res, cb) {
		knex("bids")
			.select()
			.where({ user_id: req.decoded.id })
			.then(results => cb(results))
			.catch(err =>
				res.status(400).json({ message: "Bid Retrieval Failed", err })
			);
	}

	static getOneUserBids(req, res, cb) {
		knex("bids")
			.select()
			.where({ user_id: req.decoded.id, id: req.body.bidId })
			.first()
			.then(result => cb(result))
			.catch(err =>
				res.status(400).json({ message: "Bid Retrieval Failed", err })
			);
	}

	static getAllListingBids(req, res, cb) {
		knex("bids")
			.select()
			.where({ listing_id: req.params.listingId })
			.orderBy("bid", "desc")
			.then(results => cb(results))
			.catch(err =>
				res.status(400).json({ message: "Bid Retrieval Failed", err })
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
