const express = require('express');
const actorsController = require('../controllers/actorsController');
const router = express.Router();

router.get('/actors', actorsController.list);
router.get('/actors/detail/:id', actorsController.detail);


module.exports = router;