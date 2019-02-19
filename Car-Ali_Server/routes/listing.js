const express = require("express");
const router = express.Router();
const listingControllers = require("../controllers/listing");

//upload a listing
router.post("/lisiting", listingControllers.postListing);

//get all user listings in db
router.get("/listings-user", listingControllers.getUserListings);

//get a specific user listing in db
router.get("/listings-user", listingControllers.getUserListing);

// //get some results for front page will use the Get all
// router.get("/listing-results", listingControllers.getListings);

// //update a listing
// router.patch("/lisiting/:listingId", listingControllers.patchListing);

// //delete a listing
// router.delete("/lisiting/:listingId", listingControllers.deleteListing);

// //get some search results
// //get carname as params and in body expect a status of 1 or 0
// router.get("/lisiting-result/:car-name", listingControllers.specificLisitings);

module.exports = router;
