const router = require('express').Router();
const Celebrity = require('../models/Celebrity.model.js');

router.post('/celebrities', async (req, res) => {
  try {
    const newCelebrity = await Celebrity.create({
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase,
    });
    res.status(201).json({ newCelebrity });
  } catch (error){
    console.log(error.message);
    res.sendStatus(400);
  }
});

router.get('/celebrities', async (req, res) => {
  try {
    const allCelebrities = await Celebrity.find();
    res.json({ allCelebrities });
  } catch (error){
    console.log(error.message);
    res.sendStatus(500);
  }
});

module.exports = router;