const celebrities = require('../models/Celebrity.model');

// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
//const app = require('express')

// all your routes here


// http://localhost:3000
// app.use(express.json())
router.post('/', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: '201 CREATED'
    });
});

router.post("/celebrities", async (req, res) => {
    //  console.log(req.body)
      try {
        const {name, occupation, catchPhrase} = req.body;
        const newCelebrity = await celebrities.create({
          name: name,
          occupation: occupation,
          catchPhrase: catchPhrase,
        })
        res.status(201).json({data: newCelebrity,
        message: '201 CREATED'})
      } catch {
        return res.status(400)
        ({message: '400 BAD REQUEST'})
      }
    })

module.exports = router



