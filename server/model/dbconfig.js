const { Sequelize } = require("sequelize");
 
const sequelize = new Sequelize("db", "user", "pass", {
  dialect: "sqlite",
  host: "./dev.sqlite"
});
 
module.exports = sequelize;