const Listing = require("../models/Listing");

exports.postListing = (req, res) => {
	Listing.create(req, res, () => {
		res.status(200).json({ message: "New Listing Succesfully Created" });
	});
};
exports.patchListing = (req, res) => {};
exports.deleteListing = (req, res) => {};
exports.getUserListings = (req, res) => {};
exports.getListings = (req, res) => {};
exports.specificLisitings = (req, res) => {};
