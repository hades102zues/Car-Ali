const express = require("express");
const router = express.Router();
const loginControllers = require("../controllers/login");

router.post("/signup", loginControllers.postSignup);
router.post("/login", loginControllers.postLogin);
router.get("/user-details", loginControllers.getUserDetails);

module.exports = router;
