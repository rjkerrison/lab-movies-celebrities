const app = require("../app");
const { Router } = require("express");
const Celebrity = require("../models/Celebrity.model");

const router = new Router();

//POST
// // Send the data from the form to this route to create the celebrity and save it to the database
router.post("/celebrities", async (req, res) => {
  try {
    const newCelebrity = req.body;
    const createdCelebrity = await Celebrity.create({
      name: newCelebrity.name,
      occupation: newCelebrity.occupation,
      catchPhrase: newCelebrity.catchPhrase,
    });
    console.log("createdCelebrity", createdCelebrity);
    res.status(201).json({ celebrity: createdCelebrity });
  } catch (error) {
    res.status(400).json({ message: "400 BAD REQUEST" });
    next(error); // tous les problemes vont jusqu au error handling
  }
});

//GET
// Return all celebrities
router.get("/celebrities", async (req, res) => {
  try {
    const celebrities = await Celebrity.find();
    res.status(302).json({ celebrity: celebrities });
  } catch (error) {
    res.status(500).json({ message: "500 INTERNAL SERVER ERROR" });
  }
});

module.exports = router;
