const express = require("express");
const app = express();

const port = process.env.PORT || 3001;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const loginRoutes = require("./routes/login");
const listingRoutes = require("./routes/listing");
const authWare = require("./utility/authWare");

app.use(loginRoutes);

app.use(authWare);

app.use(listingRoutes);

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
app.listen(port, () => console.log("****SERVER INITIATED***"));
