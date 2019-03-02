const express = require("express");
const router = express.Router();
const loginControllers = require("../controllers/login");

router.get("/user-details", loginControllers.getUserDetails);

module.exports = router;
