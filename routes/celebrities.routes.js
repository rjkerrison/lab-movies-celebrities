const router = require('express').Router()

// Import Celebrity Model
const Celebrity = require('../models/Celebrity.model')

// POST REQUEST - Add a celebrity to the database.
router.post('/create', async (req, res, next) => {
    try {
        const celebrityToAdd = req.body
        const celebrityAdded = await Celebrity.create(celebrityToAdd)
        res.status(201).json(celebrityAdded)
    } catch (err) {
        next(err)
    }
})

// GET REQUEST - Get all celebrities from the database.
router.get('/', async (req, res, next) => {
    try {
        const allCelebrities = await Celebrity.find()

        res.status(201).json(allCelebrities)
    } catch (err) {
        next(err)
    }
})

module.exports = router