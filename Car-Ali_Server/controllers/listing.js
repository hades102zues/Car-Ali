const Listing = require("../models/Listing");

//---guarded
exports.postListing = (req, res) => {
	Listing.create(req, res, () => {
		res.status(200).json({ message: "New Listing Succesfully Created" });
	});
};
exports.getUserListings = (req, res) => {
	Listing.getAllUserListings(req, res, results => {
		res.status(200).json({ message: "Listings", results });
	});
};

exports.getUserListing = (req, res) => {
	Listing.getOneUserListing(req, res, result => {
		res.status(200).json({ message: "Listing", result });
	});
};
exports.patchListing = (req, res) => {
	Listing.updateOne(req, res, () => {
		res.status(200).json({ message: "Update Succesfull" });
	});
};

exports.deleteListing = (req, res) => {
	Listing.deleteOne(req, res, () => {
		res.status(200).json({ message: "Item Deleted" });
	});
};

//---unguarded

exports.getFeaturedListings = (req, res) => {
	Listing.getAll(req, res, results => {
		const newResults = results.filter(
			listing =>
				listing.year <= 2000 ||
				(listing.status === 1 && listing.cost >= 10000) ||
				(listing.cost >= 100 && listing.cost <= 600)
		);

		res.status(200).json({
			message: "Featured Listings",
			results: newResults
		});
	});
};

exports.getSomeListings = (req, res) => {
	Listing.getAll(req, res, results => {
		const newResults = [];
		for (let i = 0; i <= 19; i++) {
			newResults.push(results[i]);
		}

		res.status(200).json({
			message: "Some Listings",
			results: newResults
		});
	});
};

exports.getCatalog = (req, res) => {
	Listing.getAll(req, res, results => {
		res.status(200).json({
			message: "Catalog",
			results
		});
	});
};

exports.postCatalogQuery = (req, res) => {
	Listing.getAll(req, res, results => {
		const newResults = results.filter(listing =>
			listing.car_name
				.toLowerCase()
				.includes(req.body.queryName.toLowerCase())
		);

		res.status(200).json({
			message: "Search Results",
			results: newResults
		});
	});
};
