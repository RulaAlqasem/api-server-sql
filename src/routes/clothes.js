'use strict';
const express = require('express');
const router = express.Router();
const clothesModel = require('../models/clothes');
const Interface = require('../models/data-collection-class');
const Clothes = new Interface(clothesModel);

router.get('/', getclothes);
router.get('/:id', getclothes);
router.post('/', createclothes);
router.put('/:id', updateclothes);
router.delete('/:id', deleteclothes);

async function getclothes(req, res, next) {
  try {
    const id = req.params.id;
    const clothes = await Clothes.read(id);
    res.json({ clothes });
  } catch (e) {
    next(e);
  }
}

async function createclothes(req, res, next) {
  try {
    const data = req.body;
    const newclothes = await Clothes.create(data);
    res.json(newclothes);
  } catch (e) {
    next(e);
  }
}
async function updateclothes(req, res, next) {
  try {
    const id = req.params.id;
    const data = req.body;
    const newclothes = await Clothes.update(id, data);
    res.json(newclothes);
  } catch (e) {
    next(e);
  }
}
async function deleteclothes(req, res, next) {
  try {
    const id = req.params.id;
    const deletedclothes = await Clothes.delete(id);
    res.json(deletedclothes);
  } catch (e) {
    next(e);
  }
}
module.exports = router;