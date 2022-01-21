const Sequelize = require("sequelize");
const db = require("./index");

const Page = db.define("page", {
  title: { type: Sequelize.STRING },
  slug: { type: Sequelize.STRING },
  content: { type: Sequelize.TEXT },
  status: { type: Sequelize.ENUM("open", "closed") },
});

const User = db.define("user", {
  // we will add fields to Plant here
  name: { type: Sequelize.STRING },
  email: { type: Sequelize.STRING },
});

module.exports = Page;
