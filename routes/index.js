const router = require("express").Router();

/* GET /

This is a health check. It allows us to see that the API is running.
*/
router.get("/", (req, res, next) =>
  res.json({ success: true, name: "lab-movies-celebrities" })
);

module.exports = router;
