const express = require("express");
const router = express.Router();
const bidControllers = require("../controllers/bid");

router.post("/bid-upload", bidControllers.postBidUpload);
router.delete("/bid-removal", bidControllers.deleteBidRemoval);

module.exports = router;
