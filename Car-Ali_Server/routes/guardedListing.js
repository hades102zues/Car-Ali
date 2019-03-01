const express = require("express");
const router = express.Router();
const listingControllers = require("../controllers/listing");

//upload a listing
router.post("/listing", listingControllers.postListing);

//get all user listings in db
router.get("/listings-user", listingControllers.getUserListings);

// //get a specific user listing in db
// router.get("/listing-user", listingControllers.getUserListing);

//update a listing
router.patch("/listing-user", listingControllers.patchListing);

//delete a listing
router.delete("/listing-user", listingControllers.deleteListing);

module.exports = router;
