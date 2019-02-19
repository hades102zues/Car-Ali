const express = require("express");
const router = express.Router();
const listingControllers = require("../controllers/listing");

//upload a listing
router.post("/lisiting", listingControllers.postListing);

//get all user listings in db
router.get("/listings-user", listingControllers.getUserListings);

//get a specific user listing in db
router.post("/listing-user", listingControllers.postUserListing);

//update a listing
router.patch("/lisiting-user", listingControllers.patchListing);

//delete a listing
router.delete("/lisiting-user", listingControllers.deleteListing);

module.exports = router;
