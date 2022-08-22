const router = require("express").Router(); // defini les adresses

//GET

const celebritiesRouter = require("../routes/celebrities.routes");
router.use("/celebrities", celebritiesRouter);

//This is a health check. It allows us to see that the API is running.

router.get("/", (req, res, next) =>
  res.json({ success: true, name: "lab-movies-celebrities" })
);

module.exports = router;
