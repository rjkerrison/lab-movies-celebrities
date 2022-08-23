const router = require("express").Router();
const moviesRoute = require("./movies.routes");
const celebritiesRoute = require("./celebrities.routes");

/* GET /

This is a health check. It allows us to see that the API is running.
*/
router.get("/", (req, res, next) =>
  res.json({ success: true, name: "lab-movies-celebrities" })
  
);

router.use("/movies", moviesRoute);
router.use("/celebrities", celebritiesRoute);

module.exports = router;
