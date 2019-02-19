const express = require("express");
const router = express.Router();
const listingControllers = require("../controllers/listing");

//upload a listing
router.post("/lisiting", listingControllers.postListing);

//update a listing
router.patch("/lisiting/:listingId", listingControllers.patchListing);

//delete a listing
router.delete("/lisiting/:listingId", listingControllers.deleteListing);

//get all user listings in db
router.get("/listing-user", listingControllers.getUserListings);

//get all listings in db
router.get("/listing-results", listingControllers.getListings);

//get some search results
//get carname as params and in body expect a status of 1 or 0
router.get("/lisiting-result/:car-name", listingControllers.specificLisitings);

module.exports = router;
