const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./database/database");

app.use(bodyParser.json());

app.use((error, req, res, next) => {
	console.log("Error Caught!");
	const errorCode = error.code ? error.code : 501;
	const errorMessage = error.message ? error.message : "Internal error.";

	res.status(errorCode).json({
		message: errorMessage
	});
});

app.use((req, res) => {
	res.status(404).json({ message: "Unknown Route" });
});

db.authenticate()
	.then(() => app.listen(3000, () => console.log("****SERVER INITIATED***")))
	.catch(err => console.log(err));
