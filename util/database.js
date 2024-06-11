const Sequelize = require("sequelize");
const sequelize = new Sequelize("node-complete", "root", "July723!", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = sequelize;
