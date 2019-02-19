const Listing = require("../models/Listing");

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

// exports.specificLisitings = (req, res) => {

// };

// exports.patchListing = (req, res) => {};
// exports.deleteListing = (req, res) => {};

// exports.getListings = (req, res) => {};
