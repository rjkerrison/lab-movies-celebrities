const router = require('express').Router(),
  mongoose = require(`mongoose`),
  Celebrity = require(`../models/Celebrity.model`);

router.get('/', async (req, res, next) => {
  try {
    const celebrities = await Celebrity.find();

    return res.status(200).json(celebrities);
  } catch (error) {
    next(error);
  }
});

router.post('/create', async (req, res, next) => {
  try {
    const celebrity = await Celebrity.create(req.body);

    return res.status(201).json(celebrity);
  } catch (error) {
    next(error);
  }
});

router.route(`/:id`)
  .all((req, res, next) => {
    try {
      req.documentInfo = {
        id: req.params.id,
        model: `celebrity`
      };

      next();
    } catch (error) {
      next(error);
    }
  })
  
  .get(async (req, res, next) => {
    try {
      const celebrity = await Celebrity.findById(req.documentInfo.id);

      return res.status(200).json(celebrity);
    } catch (error) {
      next(error);
    }
  })

  .delete(async (req, res, next) => {
    try {
      await Celebrity.findByIdAndRemove(req.documentInfo.id);

      return res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  })

  .post(async (req, res, next) => {
    try {
      const updatedCelebrity = await Celebrity.findByIdAndUpdate(req.documentInfo.id, req.body, { new: true });

      return res.status(200).json(updatedCelebrity);
    } catch (error) {
      next(error);
    }
  });


module.exports = router;