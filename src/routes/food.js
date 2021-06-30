'use strict';
const express = require('express');
const router = express.Router();
const FoodModel = require('../models/food');
const Interface = require('../models/data-collection-class');
const Food = new Interface(FoodModel);

router.get('/', getFood);
router.get('/:id', getFood);
router.post('/', createFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

async function getFood(req, res, next) {
  try {
    const id = req.params.id;
    const food = await Food.read(id);
    res.json({ food });
  } catch (e) {
    next(e);
  }
}

async function createFood(req, res, next) {
  try {
    const data = req.body;
    const newFood = await Food.create(data);
    res.json(newFood);
  } catch (e) {
    next(e);
  }
}
async function updateFood(req, res, next) {
  try {
    const id = req.params.id;
    const data = req.body;
    const newFood = await Food.update(id, data);
    res.json(newFood);
  } catch (e) {
    next(e);
  }
}
async function deleteFood(req, res, next) {
  try {
    const id = req.params.id;
    const deletedFood = await Food.delete(id);
    res.json(deletedFood);
  } catch (e) {
    next(e);
  }
}
module.exports = router;