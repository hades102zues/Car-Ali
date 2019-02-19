const hasher = require("bcryptjs");
const User = require("../models/users");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET || "Kil3rQue3nbiT5D4Dust";

exports.postSignup = (req, res) => {
	//check to see if the user exists
	User.getOne(req, res, result => {
		//if the result is not defined then user does not already exist
		if (!result) {
			//hash it
			hasher
				.hash(req.body.password, 10)
				.then(hash => {
					//remove crucial data
					delete req.body.password;

					req.hash = hash;
					User.create(req, res, result => {
						//clear crucial data
						delete req.hash;

						//create the token with user details
						const token = jwt.sign(result, secret);

						//send back a token
						res.status(200).json({
							message: "New User Created!",
							token: token
						});
					});
				})
				.catch(err => console.log("error while hashing"));
		} else {
			return res
				.status(400)
				.json({ message: "User With That Email Already Exists" });
		}
	});
};

exports.postLogin = (req, res) => {
	User.getOne(req, user => {
		if (user) {
			//user exists
			//test to make sure password is correct

			hasher.compare(req.body.password, user.password).then(result => {
				//boolean
				delete req.body.password;
				delete user.password;

				if (result) {
					//match was succesful

					//then create a token
					const token = jwt.sign(user, secret);

					//send back a token
					res.status(200).json({
						message: "User is now logged in!",
						token: token
					});
				} else {
					res.status(400).json({
						message: "Invalid email or password"
					});
				}
			});
		} else {
			//user doesnt exist
			res.status(400).json({ message: "Invalid email or password" });
		}
	});
};
