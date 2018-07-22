'use strict';

const mongoose = require('mongoose')
    , Schema = mongoose.Schema;

const IngredientSchema = new Schema({
    category: String,
    type: String,
    name: String,
    imagePath: String,
    medicalEffect: [String], // 功效
    description: String,
    sequence: Number,
    sellerInfo: [
        {
            name: String,
            url: String,
            description: String,
            price: Number
        }
    ],
});

mongoose.model('Ingredient', IngredientSchema);

