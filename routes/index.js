const router = require("express").Router();

/* GET /

This is a health check. It allows us to see that the API is running.
*/
const celebritiesRoutes = require("../routes/celebrities.routes");
const moviesRoutes = require("../routes/movies.routes");

router.get("/", (req, res, next) =>
  res.json({ success: true, name: "lab-movies-celebrities" })
);

router.use("/celebrities", celebritiesRoutes);
router.use("/movies", moviesRoutes);

module.exports = router;
