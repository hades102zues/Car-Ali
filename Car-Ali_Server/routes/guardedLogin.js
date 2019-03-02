const express = require("express");
const router = express.Router();
const loginControllers = require("../controllers/login");

router.get("/user-details", loginControllers.getUserDetails);
router.get("/user-image", loginControllers.getUserImage);
router.post("/upload-user-image", loginControllers.postUserImage);

module.exports = router;
