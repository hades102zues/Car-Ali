const Sequelize = require("sequelize");
const sequelize = new Sequelize("car-ali", "root", "2283450", {
	host: "localhost",
	dialect: "mysql"
});

module.exports = sequelize;
