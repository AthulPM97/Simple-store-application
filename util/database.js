const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodeproject", "root", "channyfanny@123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
