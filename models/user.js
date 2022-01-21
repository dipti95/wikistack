const Sequelize = require("sequelize");
const db = require("./index");

const User = db.define("user", {
  // we will add fields to Plant here
  name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
});

module.exports = User;
