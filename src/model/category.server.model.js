'use strict';

let ObjectId = require('mongoose').Types.ObjectId;

const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: String,
    categories: [mongoose.Schema.Types.ObjectId],
    level: Number,
    sequence: Number,
});

CategorySchema.virtual('categories2').get(function () {
    let outcome = [];
    this.categories.forEach(function (objectId) {
        let category = this.find({'_id': 111}).limit(1);
        outcome.push(category);
    });
});

module.exports = mongoose.model('Category', CategorySchema);