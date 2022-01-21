const wikiRouter = require("express").Router();
const addPage = require("../views/addPage");
const { Page } = require("../models");
//const { db, Page, Users } = require("../models");
//const { User } = require("../models");

wikiRouter.get("/", async (req, res, next) => {
  try {
    res.send("wiki");
  } catch (err) {
    next(err);
  }
});
wikiRouter.get("/add", async (req, res, next) => {
  try {
    res.send(addPage());
  } catch (err) {
    next(err);
  }
});

wikiRouter.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const { username, email, title, content, status } = req.body;

    const page = await Page.create({
      title: title,
      content: content,
      status: status,
    });

    // await User.create({username: username, email:email})
    //Insert
    res.redirect("/");
    //res.json(req.body);
  } catch (err) {
    next(err);
  }
});

module.exports = wikiRouter;
