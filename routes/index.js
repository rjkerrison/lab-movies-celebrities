const router = require("express").Router();
const moviesRoutes = require("./movies.routes");
const celebritiesRoutes = require("./celebrities.routes");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
