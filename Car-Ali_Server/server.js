const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const multer = require("multer");

const loginRoutes = require("./routes/login");
const guardedlistingRoutes = require("./routes/guardedListing");
const unguardedlistingRoutes = require("./routes/unguardedListing");
const authWare = require("./utility/authWare");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

//This portion prepares the files to be stored at a specific directory.
//It determines what names the uploaded files will be stored under
//and keeps the extension defined on the upload
const fileStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		//this is how we specify where to store the files
		//create these directories before hand!!!
		cb(null, path.join(__dirname, "public", "uploads"));
	},

	filename: (req, file, cb) => {
		//this specifies what names our uploaded files will be stored under
		//.original name holds the name+extension of the uploaded file
		cb(null, Date.now() + "_" + file.originalname);
	}
});

const filterFunction = (req, file, cb) => {
	file.mimetype === ".jpg" ||
	file.mimetype === ".jpeg" ||
	file.mimetype === "png"
		? cb(null, true)
		: cb(null, false);
};

const upload = multer({ storage: fileStorage, fileFilter: filterFunction });

app.use(loginRoutes);
app.use(unguardedlistingRoutes);
app.use(authWare);
app.use(guardedlistingRoutes);

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
