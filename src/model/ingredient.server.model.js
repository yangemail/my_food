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

IngredientSchema.statics.findByNameLike = function (name, cb) {
    return this.find({name: new RegExp(name, 'i')}, cb).select('name');
};

// IngredientSchema.virtual('id').get(function () {
//     return this._id;
// });
//
// IngredientSchema.set('toJSON', {
//     getters: true,
//     virtual: true
// });

mongoose.model('Ingredient', IngredientSchema);

