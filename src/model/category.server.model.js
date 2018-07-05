'use strict';

const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: String,
    sequence: Number,
    categories: [mongoose.Schema.Types.ObjectId],
});

module.exports = mongoose.model('Category', categorySchema);