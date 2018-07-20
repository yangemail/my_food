'use strict';

const mongoose = require('mongoose')
    , Schema = mongoose.Schema;


// If set timestamps, mongoose assigns "createdAt" and "updatedAt" fields to your schema, the type assigned is Date.
const IngredientSchema = new Schema({
    category: String,
    type: String,
    name: String,
    picPath: String,
    effect: [String],
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
    createdAt:{
        type: Date,
        default: Date.now
    }
});

mongoose.model('Ingredient', IngredientSchema);

