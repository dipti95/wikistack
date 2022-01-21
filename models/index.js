const Sequelize = require("sequelize");
const { options } = require("../routes/wiki");

const db = new Sequelize("postgres://localhost:5432/wikistack");

const Page = db.define("page", {
  title: { type: Sequelize.STRING, allowNull: false },
  slug: { type: Sequelize.STRING, allowNull: false },
  content: { type: Sequelize.TEXT, allowNull: false },
  status: { type: Sequelize.ENUM("open", "closed") },
});

class Page extends Model {}
Page.init(
  {
    username: DataTypes.STRING,
    slug: {
      type: DataTypes.STRING,
      values: ["happy", "sad", "neutral"],
    },
  },
  {
    hooks: {
      beforeValidate: (page, options) => {
        page.slug = generateSlug(Page.title);
      },
    },
    Sequelize,
  }
);

// Page.addHooks("beforeValidate", (user, options) => {
//   user.slug = generateSlug(Page.title);
// });

function generateSlug(title) {
  return title.replace(/\s+/g, "_").replace(/\W/g, "");
}

const User = db.define("user", {
  name: { type: Sequelize.STRING, allowNull: false },
  email: { type: Sequelize.STRING, allowNull: false },
});

module.exports = {
  db,
  Page,
  User,
};
