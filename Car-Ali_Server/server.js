const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require("body-parser");

const unguargedLoginRoutes = require("./routes/unguardedLogin");
const guardedLoginRoutes = require("./routes/guardedLogin");

const guardedlistingRoutes = require("./routes/guardedListing");
const unguardedlistingRoutes = require("./routes/unguardedListing");

const guardedBidRoutes = require("./routes/guardedBid");
const unguardedBidRoutes = require("./routes/unguardedBid");

const authWare = require("./utility/authWare");
const upload = require("./multerfile");
const cors = require("cors");

app.use(bodyParser.json());

app.use(cors());

//to serve files it MUST be an app.use
// to get an image we do
//http://localhost:3001/images/<some file path with the assumption made that we are already in the uploads folder>
//AND SO we do not got doing this //http://localhost:3001/images/public/uploads/<...>
app.use("/images", express.static(path.join(__dirname, "public", "uploads")));

app.use(unguargedLoginRoutes);
app.use(unguardedlistingRoutes);
app.use(unguardedBidRoutes);

app.use(authWare);

app.use(upload.single("image"), guardedLoginRoutes);
app.use(guardedBidRoutes);

//the file is now accessible through req.file.
//single takes the name of the field alloted to the file, uploaded in the form
app.use(upload.single("image"), guardedlistingRoutes);

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
