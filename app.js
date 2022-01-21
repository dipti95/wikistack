const express = require("express");
const morgan = require("morgan");
const layout = require("./views/layout");
const { db, Page, User } = require("./models/");
// const { Page } = require("./models/page");
// const User = require("./models/user");
const wikiRouter = require("./routes/wiki");

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/stylesheets"));
app.use(express.urlencoded({ extended: false }));
app.use("/wiki", wikiRouter);

app.get("/", (req, res, next) => {
  try {
    res.redirect("/wiki");
  } catch (err) {
    next(err);
  }
});

const PORT = 1337;
db.authenticate().then(() => {
  console.log("connected to the database");
});
async function table() {
  await Page.sync();
  await User.sync();
  await db.sync({ force: true });
  app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });
}
table();
