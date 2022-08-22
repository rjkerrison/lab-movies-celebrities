const app = require("../app");

const router = require("express").Router();

const Celebrity = require("../models/Celebrity.model");

module.exports = router;

//POST : adding new celebrity
router.post("/celebrities", async (req, res, next) => {
  try {
    const newCelebrity = req.body;
    console.log(req.body);
    const createdCelebrity = await Celebrity.create({
      name: newCelebrity.name,
      occupation: newCelebrity.occupation,
      catchPhrase: newCelebrity.catchPhrase,
    });

    res.status(201).json({ celebrity: createdCelebrity });
  } catch (error) {
    res.status(400).json({ message: "400 BAD REQUEST" });
    next(error);
  }
});

router.get("/celebrities", async (req, res, next) => {
  try {
    const foundCelebrity = await Celebrity.find();

    res.status(302).json({ celebrity: foundCelebrity });
  } catch (error) {
    res.status(500).json({ message: "500 INTERNAL SERVER ERROR" });
    next(error);
  }
});
