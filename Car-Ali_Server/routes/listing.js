const express = require("express");
const router = express.Router();
const listingControllers = require("../controllers/listing");

//upload a listing
router.post("/lisiting", listingControllers.postListing);

//get all user listings in db
router.get("/listings-user", listingControllers.getUserListings);

//get a specific user listing in db
router.get("/listing-user", listingControllers.getUserListing);

//update a listing
router.patch("/lisiting-user", listingControllers.patchListing);

//delete a listing
router.delete("/lisiting-user", listingControllers.deleteListing);

//get some front page results
router.get("/featured-results", listingControllers.getFeaturedListings);

//get some front page results
router.get("/some-results", listingControllers.getSomeListings);

// //get some search results
// //get carname as params and in body expect a status of 1 or 0
// router.get("/lisiting-result/:car-name", listingControllers.specificLisitings);

module.exports = router;
