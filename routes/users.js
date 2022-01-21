const usersRouter = require("express").Router();

usersRouter.get("/", async (req, res, next) => {
  try {
    res.send("users");
  } catch (err) {
    next(err);
  }
});

module.exports = usersRouter;
