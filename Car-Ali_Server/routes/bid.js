const express = require("express");
const router = express.Router();
const bidControllers = require("../controllers/bid");

//gets all of a user's bids
router.get("/user-bids", bidControllers.getUserBids);

//get the bids for a listing in desc
router.get("/listing-bids/:listingId", bidControllers.getListingBids);

//allows user to post a bid
router.post("/bid-upload", bidControllers.postBidUpload);

//allows user to delete a bid
router.delete("/bid-removal", bidControllers.deleteBidRemoval);

module.exports = router;
