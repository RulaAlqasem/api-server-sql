'use strict';

const mongoose = require('mongoose');


const foodSchema = mongoose.Schema({
  type: { type: String, required: true },
  price: { type: String }
})

const foodModel = mongoose.model('food', foodSchema)

module.exports = foodModel;
