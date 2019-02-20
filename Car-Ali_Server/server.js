const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require("body-parser");

const loginRoutes = require("./routes/login");
const guardedlistingRoutes = require("./routes/guardedListing");
const unguardedlistingRoutes = require("./routes/unguardedListing");
const authWare = require("./utility/authWare");
const upload = require("./multerfile");
const cors = require("cors");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use(loginRoutes);
app.use(unguardedlistingRoutes);
app.use(authWare);

//the file is now accessible through req.file.
//single takes the name of the field alloted to the file, uploaded in the form
app.use(upload.single("car_img"), guardedlistingRoutes);

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
